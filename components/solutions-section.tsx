"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Bot, Server, Users, Zap } from "lucide-react"

export default function SolutionsSection() {
  const solutions = [
    {
      title: "AI Strategy Consultancy",
      description:
        "Identify where AI creates the highest impact and build an execution-ready roadmap toward an AI-native enterprise.",
      highlights: [
        "Readiness and capability assessment",
        "Use-case prioritization",
        "Governance and operating model",
        "Phased plan with ROI milestones",
      ],
      icon: (
        <Users className="h-12 w-12 text-accent-green transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
      ),
      link: "/solutions/ai-consulting",
    },
    {
      title: "Agentic AI Delivery",
      description:
        "Production-ready agentic solutions that deliver measurable impact in weeks, not months.",
      highlights: [
        "Process-to-workflow automation",
        "Agent embedding in CRM, ERP & internal tools",
        "Autonomous execution with human-in-the-loop",
        "Modular architecture for rapid reuse",
      ],
      icon: (
        <Zap className="h-12 w-12 text-accent-green transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
      ),
      link: "/building-process",
    },
    {
      title: "Humanoid Robotics Deployment",
      description:
        "Deploy production humanoid skills into real factory cells — designed and trained inside NVIDIA Omniverse, operated on NVIDIA AI Enterprise.",
      highlights: [
        "Floor-walk and cell feasibility assessment",
        "Digital twin in NVIDIA Omniverse & Isaac Sim",
        "Policy training with NVIDIA GR00T & Isaac Lab",
        "Sim-to-real on Jetson Thor & Isaac ROS",
        "Fleet management and continuous learning",
      ],
      icon: (
        <Bot className="h-12 w-12 text-accent-green transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
      ),
      link: "/humanoid-robotics-process",
    },
    {
      title: "AI Architecture, Infrastructure & Sovereign Deployment",
      description:
        "Design, deploy, and secure the right AI stack — from compute and networking to sovereign and regulated environments.",
      highlights: [
        "GPU & compute strategy (cloud, on-prem, hybrid)",
        "HPC storage, data pipelines & AI-native networking",
        "Model, platform & tooling selection",
        "Private / sovereign deployment and data residency",
        "Security, compliance & model governance",
      ],
      icon: (
        <Server className="h-12 w-12 text-accent-green transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
      ),
      link: "/solutions/ai-infrastructure",
    },
  ]

  return (
    <section id="solutions" className="py-20 relative bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mt-10 mx-auto">
            Strategy, rapid delivery, and architecture advisory — the three services that take enterprises from AI
            ambition to production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
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
                </div>
                <CardTitle className="text-2xl group-hover:text-accent-green transition-colors duration-300">
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-gray-500 text-base mb-4">{solution.description}</CardDescription>

                <ul className="space-y-1.5 mb-4">
                  {solution.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-green" />
                      {point}
                    </li>
                  ))}
                </ul>


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
        <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          <Link
            href="/building-process"
            className="inline-flex items-center gap-2 text-base font-medium text-charcoal border border-charcoal/20 rounded-full px-6 py-3 hover:bg-charcoal hover:text-white hover:border-charcoal transition-all duration-300"
          >
            See our delivery process step by step
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
