"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Cpu, Server, Users, Zap } from "lucide-react"

export default function SolutionsSection() {
  const solutions = [
    {
      title: "AI Strategy Consultancy",
      description:
        "Helping organizations identify the highest-value opportunities for AI and define a practical roadmap toward an agent-enabled enterprise.",
      icon: (
        <Users className="h-12 w-12 text-accent-green transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
      ),
      link: "/solutions/ai-consulting",
      subpages: [
        { name: "AI Security & Compliance", path: "/solutions/ai-security-compliance" },
        { name: "Generative AI", path: "/services/ai-consulting/generative-ai" },
        { name: "Machine Learning", path: "/services/ai-consulting/machine-learning" },
        { name: "AI Data Platform", path: "/services/ai-consulting/ai-data-platform" },
      ],
    },
    {
      title: "Agentic AI Delivery",
      description:
        "Designing and implementing focused AI use cases that deliver measurable business outcomes in weeks, not years.",
      icon: (
        <Zap className="h-12 w-12 text-accent-green transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
      ),
      link: "/services/ai-consulting/ai-agents",
      subpages: [
        { name: "AI Agents", path: "/services/ai-consulting/ai-agents" },
        { name: "Conversational AI", path: "/services/ai-consulting/conversational-ai" },
        { name: "Vision AI", path: "/services/robotics-edge-ai/vision-ai" },
        { name: "Edge AI", path: "/services/robotics-edge-ai/edge-ai" },
      ],
    },
    {
      title: "AI Architecture & Technology Advisory",
      description:
        "Recommending the right compute, software, data, and deployment choices to support secure, scalable AI adoption.",
      icon: (
        <Server className="h-12 w-12 text-accent-green transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
      ),
      link: "/solutions/ai-infrastructure",
      subpages: [
        { name: "Professional Services", path: "/solutions/ai-infrastructure/professional-services" },
        { name: "AI Data Platform", path: "/solutions/ai-infrastructure/ai-data-platform" },
        { name: "MLOps", path: "/solutions/ai-infrastructure/mlops" },
        { name: "Accelerated Computing", path: "/solutions/ai-infrastructure/accelerated-computing" },
      ],
    },
    {
      title: "Sovereign AI & Enterprise Deployment",
      description:
        "Building AI environments for regulated and large-scale organizations that require control, governance, and production readiness.",
      icon: (
        <Cpu className="h-12 w-12 text-accent-green transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
      ),
      link: "/solutions/ai-security-compliance",
      subpages: [
        { name: "AI Security & Compliance", path: "/solutions/ai-security-compliance" },
        { name: "Virtualization", path: "/solutions/ai-infrastructure/virtualization" },
        { name: "AI Data Platform", path: "/solutions/ai-infrastructure/ai-data-platform" },
        { name: "MLOps", path: "/solutions/ai-infrastructure/mlops" },
      ],
    },
  ]

  return (
    <section id="solutions" className="py-20 relative bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Services</h2>
          <p className="text-xl text-gray-600 max-w-5xl mt-10 mx-auto">
            AIdeology helps organizations move from isolated AI ideas to practical enterprise execution. We combine
            strategy, rapid delivery, and architecture advisory to identify the right use cases, implement them quickly,
            and define the technology foundation required to scale.
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
        <p className="mt-12 text-center text-lg text-gray-600 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          We do not build isolated agents. We design the workflows, orchestration, integrations, governance, and
          deployment model required for enterprise AI at scale.
        </p>
      </div>
    </section>
  )
}
