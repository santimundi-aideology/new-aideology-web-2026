import Link from "next/link"
import { Server, CuboidIcon as Cube, Lightbulb, ArrowRight, BotIcon as Robot } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SolutionsSection() {
  const solutions = [
    {
      title: "AI Infrastructure",
      icon: <Server className="h-12 w-12 text-accent-green" />,
      description: "From GPU clusters to storage fabrics, turnkey HPC-AI stacks tailored to workload.",
      link: "/solutions/ai-infrastructure",
    },
    {
      title: "3D AI",
      icon: <Cube className="h-12 w-12 text-accent-green" />,
      description: "End-to-end metaverse & digital-twins implementation, rendering to simulation.",
      link: "/solutions/3d-ai",
    },
    {
      title: "AI Consulting",
      icon: <Lightbulb className="h-12 w-12 text-accent-green" />,
      description: "Model integration, MLOps pipelines, and business-case acceleration.",
      link: "/solutions/ai-consulting",
    },
    {
      title: "Physical AI",
      icon: <Robot className="h-12 w-12 text-accent-green" />,
      description: "Robotics, automation, and embodied AI solutions for real-world applications.",
      link: "/solutions/physical-ai",
    },
  ]

  return (
    <section id="solutions" className="py-20 relative bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Solutions</h2>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
            Comprehensive AI solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="bg-[#f4f4f4] border border-accent-green/20 text-charcoal hover-lift">
              <CardHeader>
                <div className="mb-4">{solution.icon}</div>
                <CardTitle className="text-2xl">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-charcoal/70 text-base">{solution.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Link
                  href={solution.link}
                  className="text-electric-green hover:text-electric-green/80 flex items-center group font-medium"
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
