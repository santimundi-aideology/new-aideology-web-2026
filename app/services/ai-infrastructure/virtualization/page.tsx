import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Zap,
  CloudCog,
  TerminalSquare,
  Building,
  Gauge,
  ArrowRight,
  Layers,
  GitFork,
  SlidersHorizontal,
  ShieldCheck,
  Laptop,
  Cpu,
  Users2,
  Shuffle,
  DollarSign,
  Wrench,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function VirtualizationPage() {
  const capabilities = [
    {
      icon: <GitFork className="h-8 w-8 text-accent-green mb-4" />,
      title: "Resource Sharing",
      description: "Multiple users and workloads can share GPU resources efficiently.",
    },
    {
      icon: <Layers className="h-8 w-8 text-accent-green mb-4" />,
      title: "Workload Consolidation",
      description: "Run diverse applications on the same infrastructure, optimizing hardware use.",
    },
    {
      icon: <SlidersHorizontal className="h-8 w-8 text-accent-green mb-4" />,
      title: "Simplified Management",
      description: "Centralize deployment and management of GPU resources with ease.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-accent-green mb-4" />,
      title: "Enhanced Security",
      description: "Maintain isolated environments with consistent and robust security policies.",
    },
    {
      icon: <Laptop className="h-8 w-8 text-accent-green mb-4" />,
      title: "Flexible Access",
      description: "Enable remote access to GPU computing power from virtually any device.",
    },
  ]

  const services = [
    {
      title: "NVIDIA vGPU Infrastructure Design",
      description:
        "We design virtualized GPU infrastructure tailored to your specific workload mix, user requirements, and performance expectations, ensuring optimal resource allocation and utilization.",
      icon: <CloudCog className="h-10 w-10 text-accent-green" />,
    },
    {
      title: "Virtual Desktop Infrastructure (VDI) for AI",
      description:
        "AIdeology implements GPU-accelerated VDI solutions that provide data scientists and researchers with powerful, secure workspaces accessible from anywhere.",
      icon: <TerminalSquare className="h-10 w-10 text-accent-green" />,
    },
    {
      title: "Multi-Tenant AI Infrastructure",
      description:
        "We create virtualized AI environments that enable multiple teams or departments to share GPU resources while maintaining isolation and ensuring quality of service.",
      icon: <Building className="h-10 w-10 text-accent-green" />,
    },
    {
      title: "Virtualized AI Platform Management",
      description:
        "AIdeology implements comprehensive management solutions for virtualized GPU environments, including monitoring, resource optimization, and automated scaling.",
      icon: <Gauge className="h-10 w-10 text-accent-green" />,
    },
  ]

  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Improved GPU Utilization",
      description: "Increase ROI by sharing GPU resources across users and workloads.",
    },
    {
      icon: <Users2 className="h-6 w-6" />,
      title: "Enhanced Collaboration",
      description: "Enable teams to access consistent AI development environments.",
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Simplified IT Management",
      description: "Centralize deployment, updates, and security policies.",
    },
    {
      icon: <Shuffle className="h-6 w-6" />,
      title: "Workload Flexibility",
      description: "Support diverse applications from AI development to inference.",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Cost Efficiency",
      description: "Reduce hardware requirements through efficient resource sharing.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charcoal via-charcoal to-gray-800 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge
                variant="outline"
                className="mb-4 border-accent-green/30 text-accent-green bg-accent-green/20 text-sm py-1 px-3"
              >
                AI Infrastructure
              </Badge>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 tracking-tight">
                AI & GPU <span className="text-accent-green">Virtualization</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                Enable flexible, efficient utilization of GPU resources across diverse AI, VDI, and graphics workloads
                with AIdeology's advanced virtualization solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-accent-green text-charcoal hover:bg-white hover:text-charcoal transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-charcoal transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <Link href="#services">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <Image
                src="/ai-server-configuration.png"
                alt="GPU Virtualization Infrastructure"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl object-cover"
                priority
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-green/50 rounded-full opacity-50"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent-green/30 rounded-lg opacity-30 transform rotate-12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Value of GPU Virtualization (Capabilities) */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The <span className="text-accent-green">Value</span> of GPU Virtualization
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              GPU virtualization transforms how organizations deploy and manage accelerated computing resources,
              unlocking unprecedented flexibility, efficiency, and scalability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card
                key={index}
                className="border-l-4 border-accent-green bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
              >
                <CardContent className="p-6 pt-8">
                  {capability.icon}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{capability.title}</h3>
                  <p className="text-gray-600 text-sm">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              AIdeology's GPU <span className="text-accent-green">Virtualization Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive virtualization solutions designed to maximize the value of your GPU investments and
              accelerate your AI initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-gray-50 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent-green/10 rounded-lg text-accent-green transition-transform duration-300 group-hover:scale-110">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 mt-1">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NVIDIA Technology Highlight */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-charcoal to-gray-800 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative order-2 lg:order-1 mt-8 lg:mt-0">
              <Image
                src="/nvidia-ai-enterprise-stack.png" // Assuming you have this or a similar image
                alt="NVIDIA AI Enterprise Stack"
                width={500}
                height={450}
                className="rounded-lg shadow-2xl mx-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-4">
                <Cpu className="h-10 w-10 text-accent-green mr-3" />
                <h3 className="text-2xl md:text-3xl font-bold">NVIDIA AI Enterprise & vGPU Software</h3>
              </div>
              <p className="text-gray-300 text-lg mb-6">
                AIdeology leverages NVIDIA AI Enterprise—a comprehensive software suite optimized for virtualized
                environments—and NVIDIA vGPU software to create flexible, high-performance virtualized AI
                infrastructure. These technologies enable organizations to run AI workloads in virtualized environments
                with near-bare-metal performance, security, and manageability.
              </p>
              <Button
                variant="outline"
                className="border-accent-green text-accent-green hover:bg-accent-green hover:text-charcoal transition-colors"
                asChild
              >
                <Link href="/products/nvidia-ai-enterprise">
                  Explore NVIDIA AI Enterprise <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Key <span className="text-accent-green">Benefits</span> of Our Virtualization Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Partnering with AIdeology for GPU virtualization offers tangible advantages for your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-accent-green/10 rounded-full w-fit mx-auto mb-4 text-accent-green">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-charcoal via-charcoal to-gray-800 text-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight">Maximize Your GPU Investments Today</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your AI infrastructure with AIdeology's expert GPU virtualization solutions. Let's discuss how we
            can tailor a strategy to your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent-green text-charcoal hover:bg-white hover:text-charcoal transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="/contact">
                Contact AIdeology
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-charcoal transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="/solutions/ai-infrastructure">View AI Infrastructure Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export const metadata = {
  title: "AI & GPU Virtualization Solutions | AIdeology",
  description:
    "AIdeology enables flexible and efficient utilization of GPU resources through virtualization, leveraging NVIDIA vGPU software and AI Enterprise to power diverse AI, VDI, and graphics workloads on shared infrastructure.",
}
