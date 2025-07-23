"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Server, Zap, Users, Cpu, ArrowRight, Sparkles } from "lucide-react"

export default function SolutionsSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])

  const solutions = [
    {
      title: "AI Infrastructure",
      description: "Designing and deploying AI Infrastructure. We assist customers in determining the most suitable hardware and software for their specific AI needs.",
      icon: (
        <Server className="h-12 w-12 text-accent-green transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
      ),
      link: "/solutions/ai-infrastructure",
      subpages: [
        { name: "Professional Services", path: "/services/ai-infrastructure/professional-services" },
        { name: "AI Data Platform", path: "/services/ai-infrastructure/ai-data-platform" },
        { name: "MLOps", path: "/services/ai-infrastructure/mlops" },
        { name: "Accelerated Computing", path: "/services/ai-infrastructure/accelerated-computing" },
        { name: "Virtualization", path: "/services/ai-infrastructure/virtualization" },
        { name: "Sustainable Computing", path: "/services/ai-infrastructure/sustainable-computing" },
      ],
    },
    {
      title: "Design & Simulation",
      description: "We offer our expertise in helping customers implement metaverse or digital twins value propositions.",
      icon: (
        <Zap className="h-12 w-12 text-accent-green transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
      ),
      link: "/solutions/3d-ai",
      subpages: [
        { name: "Design Visualization", path: "/services/3d-ai/design-visualization" },
        { name: "Robotic Simulation", path: "/services/3d-ai/robotic-simulation" },
        { name: "Extended Reality", path: "/services/3d-ai/extended-reality" },
        { name: "Digital Twins", path: "/services/3d-ai/digital-twins" },
      ],
    },
    {
      title: "AI Consulting",
      description:
        "Strategic AI guidance and implementation support to accelerate your artificial intelligence initiatives.",
      icon: (
        <Users className="h-12 w-12 text-accent-green transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
      ),
      link: "/solutions/ai-consulting",
      subpages: [
        { name: "AI Security & Compliance", path: "/solutions/ai-security-compliance" },
        { name: "Conversational AI", path: "/services/ai-consulting/conversational-ai" },
        { name: "Generative AI", path: "/services/ai-consulting/generative-ai" },
        { name: "AI Agents", path: "/services/ai-consulting/ai-agents" },
        { name: "AI Data Platform", path: "/services/ai-consulting/ai-data-platform" },
        { name: "Machine Learning", path: "/services/ai-consulting/machine-learning" },
      ],
    },
    {
      title: "Robotics & Edge AI",
      description:
        "Intelligent robotics and edge computing solutions for autonomous systems and real-time AI applications.",
      icon: (
        <Cpu className="h-12 w-12 text-accent-green transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
      ),
      link: "/solutions/robotics-edge-ai",
      isNew: true,
      subpages: [
        { name: "Edge AI", path: "/services/robotics-edge-ai/edge-ai" },
        { name: "Vision AI", path: "/services/robotics-edge-ai/vision-ai" },
        { name: "Robotics", path: "/services/robotics-edge-ai/robotics" },
      ],
    },
  ]

  // Progressive disclosure with intersection observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cardIndex = Number.parseInt(entry.target.getAttribute("data-card-index") || "0")
          setVisibleCards((prev) => {
            if (!prev.includes(cardIndex)) {
              return [...prev, cardIndex]
            }
            return prev
          })
        }
      })
    }, observerOptions)

    // Observe cards after component mounts
    const cards = document.querySelectorAll("[data-card-index]")
    cards.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => {
      cards.forEach((card) => {
        if (card) observer.unobserve(card)
      })
      observer.disconnect()
    }
  }, [])

  return (
    <section id="solutions" className="py-20 relative bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Solutions</h2>
          <p className="text-xl text-gray-600 max-w-8xl mt-10 mx-auto">
          <b>AIdeology</b> specializes in value-added solutions as an as an <b>NVIDIA Solution Provider</b> and we have contractual partnerships with Lenovo, HPE and Supermicro. Our offerings span <b>Artificial Intelligence</b> specialized solutions, <b>High-Performance Computing Infrastructure</b> solutions, and <b>Design & Simulation</b>, providing <b>end-to-end services</b> from planning to execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              data-card-index={index}
              className={`bg-[#f4f4f4] border border-accent-green/20 text-charcoal hover-lift group cursor-pointer relative overflow-hidden transition-all duration-500 transform hover:border-accent-green/50 flex flex-col h-full animate-fade-in-up`}
              style={{ animationDelay: `${100 + index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div>{solution.icon}</div>
                  {(solution as any).isNew && (
                    <div className="flex items-center bg-accent-green text-charcoal px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                      <Sparkles className="h-3 w-3 mr-1" />
                      NEW
                    </div>
                  )}
                </div>
                <CardTitle className="text-2xl group-hover:text-accent-green transition-colors duration-300">
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-gray-500 text-base mb-4">{solution.description}</CardDescription>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">Explore Solutions:</h4>
                  <ul className="space-y-1">
                    {solution.subpages.map((subpage, subpageIndex) => (
                      <li key={subpageIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-accent-green rounded-full mr-2"></div>
                        <Link
                          href={subpage.path}
                          className="text-gray-600 hover:text-accent-green transition-colors duration-200"
                        >
                          {subpage.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Link
                  href={solution.link}
                  className="text-electric-green hover:text-white flex items-center group font-medium w-full justify-center bg-accent-green/10 hover:bg-charcoal px-4 py-2 rounded transition-all duration-300 hover:scale-105 ease-in-out"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 text-accent-green group-hover:text-white" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
