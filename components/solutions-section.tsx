"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Server, Zap, Users, ArrowRight } from "lucide-react"

export default function SolutionsSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])

  const solutions = [
    {
      title: "AI Infrastructure",
      description: "High-performance computing solutions designed for AI workloads and machine learning operations.",
      icon: <Server className="h-12 w-12 text-accent-green transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />,
      link: "/solutions/ai-infrastructure",
      details: ["GPU Clusters", "Storage Fabrics", "HPC-AI Stacks"]
    },
    {
      title: "3D AI",
      description: "End-to-end metaverse and digital twins implementation with cutting-edge rendering technologies.",
      icon: <Zap className="h-12 w-12 text-accent-green transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />,
      link: "/solutions/3d-ai",
      details: ["Digital Twins", "Metaverse Solutions", "3D Rendering"]
    },
    {
      title: "AI Consulting",
      description: "Strategic AI guidance and implementation support to accelerate your artificial intelligence initiatives.",
      icon: <Users className="h-12 w-12 text-accent-green transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />,
      link: "/solutions/ai-consulting",
      details: ["Strategy Planning", "Model Integration", "MLOps Implementation"]
    },
  ]

  // Progressive disclosure with intersection observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cardIndex = parseInt(entry.target.getAttribute('data-card-index') || '0')
          setVisibleCards(prev => {
            if (!prev.includes(cardIndex)) {
              return [...prev, cardIndex];
            }
            return prev;
          });
        }
      })
    }, observerOptions)

    // Observe cards after component mounts
    const cards = document.querySelectorAll('[data-card-index]')
    cards.forEach(card => {
      if (card) observer.observe(card)
    })

    return () => {
      cards.forEach(card => {
        if (card) observer.unobserve(card);
      });
      observer.disconnect();
    }
  }, [])

  return (
    <section id="solutions" className="py-20 relative bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Solutions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive AI solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              data-card-index={index}
              className={`bg-[#f4f4f4] border border-accent-green/20 text-charcoal hover-lift group cursor-pointer
                relative overflow-hidden transition-all duration-500 transform hover:border-accent-green/50
              `}
            >
              <CardHeader>
                <div className="mb-4">{solution.icon}</div>
                <CardTitle className="text-2xl group-hover:text-accent-green transition-colors duration-300">
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-500 text-base mb-4">
                  {solution.description}
                </CardDescription>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {solution.details.map((detail, detailIndex) => (
                      <li 
                        key={detailIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-accent-green rounded-full mr-2"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Link
                  href={solution.link}
                  className="text-electric-green hover:text-electric-green/80 flex items-center group font-medium w-full justify-center bg-accent-green/10 hover:bg-accent-green/20 px-4 py-2 rounded transition-all duration-300"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 text-accent-green" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
