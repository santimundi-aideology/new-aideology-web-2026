import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Lightbulb, BrainCircuit, GitBranch, BarChart, Users, CheckCircle, ArrowRight } from "lucide-react"

export default function AIConsultingPage() {
  const services = [
    {
      icon: <BrainCircuit className="h-8 w-8 text-accent-green" />,
      title: "Model Integration",
      description: "Seamlessly integrate state-of-the-art AI models into your existing systems and workflows.",
    },
    {
      icon: <GitBranch className="h-8 w-8 text-accent-green" />,
      title: "MLOps Pipelines",
      description:
        "Build robust, scalable machine learning operations pipelines for continuous training and deployment.",
    },
    {
      icon: <BarChart className="h-8 w-8 text-accent-green" />,
      title: "Business Case Acceleration",
      description: "Accelerate your AI initiatives with strategic guidance and practical implementation roadmaps.",
    },
    {
      icon: <Users className="h-8 w-8 text-accent-green" />,
      title: "Team Enablement",
      description: "Upskill your team with hands-on training and knowledge transfer from our AI experts.",
    },
  ]

  const partnersGenAI = [
    { name: "NVIDIA NEMO", logo: "/partners/nvidia-nemo-logo.png" },
    { name: "OpenAI", logo: "/partners/openai-logo.png" },
    { name: "Google", logo: "/partners/google-logo.png" },
    { name: "Anthropic", logo: "/partners/anthropic-logo.png" },
    { name: "Hugging Face", logo: "/partners/hugging-face-logo.png" },
    { name: "NVIDIA Omniverse", logo: "/partners/nvidia-omniverse-logo.png" },
    { name: "Run:ai", logo: "/partners/runai-logo.png" },
    { name: "Maind", logo: "/partners/maind-logo.png" },
    { name: "Weights & Biases", logo: "/partners/wandb-logo.png" },
  ]

  return (
    <main className="min-h-screen bg-[#f4f4f4] text-charcoal">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">AI Consulting</h1>
              <p className="text-xl mb-8 text-charcoal/80">
                Expert guidance on model integration, MLOps pipelines, and business-case acceleration to maximize your
                AI investments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-accent-green text-charcoal hover:bg-accent-green/90">
                  <Link href="#contact">Get strategic AI guidance</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-accent-green text-charcoal hover:bg-accent-green/10"
                >
                  <Link href="/solutions/ai-consulting/ai-agent-components">
                    <span className="flex items-center">
                      Explore AI Agent Components
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image src="/ai-consulting-client-meeting.png" alt="AI Consulting" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* AI Agent Components Teaser Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">AI Agent Components & AIdeology Services</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Discover our comprehensive approach to AI agent architecture and implementation
            </p>
          </div>

          <div className="relative w-full max-w-5xl mx-auto h-[500px] md:h-[600px] mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-23%20at%2012.38.10-yECsTgQ6btsGyGfQBAfUZZaeMyOuc1.png"
              alt="AI Agent Components Diagram"
              fill
              className="object-contain rounded-lg shadow-md"
            />
          </div>

          <div className="text-center">
            <Button asChild className="bg-accent-green text-charcoal hover:bg-accent-green/90">
              <Link href="/solutions/ai-consulting/ai-agent-components">
                <span className="flex items-center">
                  Explore Interactive Diagram
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-[#f4f4f4]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Generative AI Partners</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
            {partnersGenAI.map((partner, index) => (
              <Card
                key={index}
                className="bg-white border border-accent-green/10 rounded-md p-6 flex items-center justify-center hover:border-accent-green/30 transition-colors w-full h-32"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  width={160}
                  height={80}
                  className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Consulting Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border border-accent-green/20 hover-lift">
                <CardContent className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-charcoal/70">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-[#f4f4f4]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Consulting Methodology</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent-green/30 transform md:translate-x-[-0.5px]"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {[
                {
                  title: "Discovery & Assessment",
                  description:
                    "We analyze your current capabilities, challenges, and objectives to identify the most impactful AI opportunities.",
                  icon: <Lightbulb className="h-6 w-6 text-white" />,
                },
                {
                  title: "Strategy Development",
                  description:
                    "We create a tailored AI roadmap aligned with your business goals, including technology selection and implementation planning.",
                  icon: <BrainCircuit className="h-6 w-6 text-white" />,
                },
                {
                  title: "Implementation Support",
                  description:
                    "Our experts work alongside your team to implement AI solutions, establish best practices, and overcome technical challenges.",
                  icon: <GitBranch className="h-6 w-6 text-white" />,
                },
                {
                  title: "Optimization & Scale",
                  description:
                    "We help you refine your AI systems, measure outcomes, and scale successful implementations across your organization.",
                  icon: <BarChart className="h-6 w-6 text-white" />,
                },
              ].map((step, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-accent-green rounded-full flex items-center justify-center transform translate-x-0 md:-translate-x-4 z-10">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}`}
                  >
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-charcoal/70">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-charcoal text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our AI Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Computer Vision",
              "Natural Language Processing",
              "Reinforcement Learning",
              "Generative AI",
              "Time Series Analysis",
              "Recommendation Systems",
              "Anomaly Detection",
              "Federated Learning",
              "Edge AI Deployment",
            ].map((expertise, index) => (
              <div
                key={index}
                className="flex items-center bg-charcoal/50 border border-accent-green/20 rounded-lg p-4"
              >
                <CheckCircle className="h-6 w-6 text-accent-green mr-3 flex-shrink-0" />
                <span>{expertise}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Success Stories</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border border-accent-green/20 hover-lift">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-full min-h-[200px]">
                    <Image src="/manufacturing-ai.png" alt="Manufacturing AI" fill className="object-cover" />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <h3 className="text-xl font-bold mb-2">Manufacturing Optimization</h3>
                    <p className="text-charcoal/70 mb-4">
                      Implemented predictive maintenance AI for a global manufacturer, reducing downtime by 37% and
                      maintenance costs by 28%.
                    </p>
                    <div className="flex items-center text-electric-green">
                      <span className="font-bold mr-2">Results:</span>
                      <span>$4.2M annual savings</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-accent-green/20 hover-lift">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-full min-h-[200px]">
                    <Image src="/healthcare-ai-diagnostics.png" alt="Healthcare AI" fill className="object-cover" />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <h3 className="text-xl font-bold mb-2">Healthcare Diagnostics</h3>
                    <p className="text-charcoal/70 mb-4">
                      Developed and deployed an AI diagnostic system for a healthcare provider, improving early
                      detection rates by 42%.
                    </p>
                    <div className="flex items-center text-electric-green">
                      <span className="font-bold mr-2">Results:</span>
                      <span>Lives saved through early intervention</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#f4f4f4]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to accelerate your AI journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-charcoal/80">
            Our expert consultants are ready to help you navigate the complexities of AI implementation and
            optimization.
          </p>
          <Button asChild size="lg" className="bg-accent-green text-charcoal hover:bg-accent-green/90">
            <Link href="#contact">Book a consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
