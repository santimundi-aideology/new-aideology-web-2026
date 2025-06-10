import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Zap,
  Cpu,
  Gauge,
  Layers,
  ServerCog,
  Box,
  BarChartBig,
  Rocket,
  ShieldCheck,
  BrainCircuit,
  Combine,
  Milestone,
  NetworkIcon as Nvidia,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// If you don't have an Nvidia icon, you can use a generic one or omit it.
// For this example, I'll use a placeholder or a generic icon if Nvidia is not available.
// const NvidiaIcon = () => <Cpu className="h-8 w-8 text-green-500" />; // Placeholder

export default function AcceleratedComputingPage() {
  const capabilities = [
    {
      icon: <Zap className="h-10 w-10 text-sky-500" />,
      title: "Massive Parallelism",
      description: "Thousands of cores working simultaneously on complex calculations.",
    },
    {
      icon: <Cpu className="h-10 w-10 text-sky-500" />,
      title: "Specialized Architecture",
      description: "Hardware optimized for AI, graphics, and scientific computing.",
    },
    {
      icon: <Gauge className="h-10 w-10 text-sky-500" />,
      title: "Energy Efficiency",
      description: "Higher performance per watt compared to CPU-only solutions.",
    },
    {
      icon: <Layers className="h-10 w-10 text-sky-500" />,
      title: "Scalability",
      description: "From workstations to supercomputers with consistent architecture.",
    },
  ]

  const services = [
    {
      icon: <ServerCog className="h-8 w-8 text-sky-600" />,
      title: "GPU Infrastructure Design & Implementation",
      description:
        "We design and build optimized GPU infrastructure—from individual workstations to large-scale clusters—tailored to your specific workloads and performance requirements.",
    },
    {
      icon: <Box className="h-8 w-8 text-sky-600" />, // Using Box as a stand-in for DGX system
      title: "NVIDIA DGX Systems Deployment",
      description:
        "AIdeology specializes in deploying NVIDIA DGX systems—purpose-built AI supercomputers—and integrating them into your existing infrastructure for maximum performance and efficiency.",
    },
    {
      icon: <BarChartBig className="h-8 w-8 text-sky-600" />,
      title: "GPU Cluster Management",
      description:
        "We implement comprehensive management solutions for GPU clusters, including workload scheduling, resource allocation, and monitoring to ensure optimal utilization and performance.",
    },
    {
      icon: <Rocket className="h-8 w-8 text-sky-600" />,
      title: "Performance Optimization",
      description:
        "AIdeology's experts fine-tune your accelerated computing infrastructure for maximum performance, identifying and eliminating bottlenecks in computation, memory access, and data movement.",
    },
  ]

  const benefits = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Transformative Performance",
      description: "Achieve 10-100x speedups for AI and HPC workloads.",
    },
    {
      icon: <BrainCircuit className="h-8 w-8" />,
      title: "Improved Productivity",
      description: "Enable researchers and data scientists to iterate faster.",
    },
    {
      icon: <Combine className="h-8 w-8" />,
      title: "Infrastructure Consolidation",
      description: "Do more with less hardware through higher compute density.",
    },
    {
      icon: <Milestone className="h-8 w-8" />,
      title: "Future-Ready Architecture",
      description: "Build on a platform that evolves with advancing AI capabilities.",
    },
    {
      icon: <Gauge className="h-8 w-8" />,
      title: "Energy Efficiency",
      description: "Reduce power consumption while increasing computational capacity.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Expert Support",
      description: "Access AIdeology's expertise in deploying and managing accelerated solutions.",
    },
  ]

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-700 via-sky-600 to-blue-700 text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <Badge className="mb-4 bg-sky-500/30 text-sky-100 border-sky-400 hover:bg-sky-500/40 px-3 py-1 text-sm">
                AI Infrastructure
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Accelerated Computing <span className="block text-sky-300">Infrastructure</span>
              </h1>
              <p className="text-lg md:text-xl text-sky-100 mb-8 max-w-2xl mx-auto md:mx-0">
                Transform your computational capabilities with GPU-accelerated infrastructure that powers the most
                demanding AI, HPC, and data analytics workloads.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  size="lg"
                  className="bg-white text-sky-700 hover:bg-sky-50 shadow-lg transition-transform hover:scale-105"
                  asChild
                >
                  <Link href="/contact">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 shadow-lg transition-transform hover:scale-105"
                  asChild
                >
                  <Link href="#services">Explore Services</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="/gpu-server-racks.png"
                alt="GPU Server Racks"
                width={600}
                height={450}
                className="rounded-xl shadow-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Power of Accelerated Computing Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Power of Accelerated Computing</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Traditional CPU-only infrastructure struggles with modern AI & HPC demands. GPU acceleration offers
              transformative advantages.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {capabilities.map((item) => (
              <Card
                key={item.title}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-sky-500"
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-sky-100">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AIdeology's Accelerated Computing Services Section */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Accelerated Computing Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to design, deploy, and optimize your GPU-accelerated infrastructure for peak
              performance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service) => (
              <Card
                key={service.title}
                className="bg-gray-50 shadow-lg hover:shadow-xl transition-shadow duration-300 group overflow-hidden"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-sky-100 rounded-lg text-sky-600 group-hover:bg-sky-200 transition-colors">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-sky-600 transition-colors">
                      {service.title}
                    </CardTitle>
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

      {/* NVIDIA Technology Highlight Section */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              {/* You can use an actual NVIDIA logo image here if available */}
              {/* <Image src="/nvidia-logo-white.png" alt="NVIDIA Logo" width={200} height={100} className="mb-6" /> */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-300 border border-green-400/50 mb-4 text-sm">
                <Nvidia className="h-5 w-5 text-green-400" /> {/* Using placeholder Nvidia icon */}
                Powered by NVIDIA
              </div>
              <h3 className="text-3xl font-bold mb-4">Leveraging NVIDIA's Ecosystem</h3>
              <p className="text-gray-300 mb-6 text-lg">
                AIdeology harnesses NVIDIA's comprehensive accelerated computing portfolio, including A100 & H100 Tensor
                Core GPUs, DGX systems, and HGX platforms. These technologies form the bedrock of our high-performance
                solutions, delivering unparalleled performance for AI training, inference, and HPC.
              </p>
              <Button
                variant="outline"
                className="border-green-400 text-green-300 hover:bg-green-400/10 hover:text-green-200"
                asChild
              >
                <Link href="/products/nvidia-dgx">
                  Explore NVIDIA DGX Systems <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="hidden md:block">
              <Image
                src="/gpu-accelerator-chip.png" // Replace with a more specific NVIDIA tech image if available
                alt="NVIDIA GPU Technology"
                width={500}
                height={400}
                className="rounded-lg shadow-2xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Advantages of AIdeology's Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Partner with AIdeology to unlock significant benefits for your organization through accelerated computing.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 rounded-full bg-sky-100 text-sky-600">{benefit.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-sky-700 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Accelerate Your Innovations?</h2>
          <p className="text-lg md:text-xl text-sky-100 mb-8">
            Let AIdeology design and deploy the optimal GPU-accelerated infrastructure to power your most ambitious
            projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-sky-700 hover:bg-sky-50 shadow-lg transition-transform hover:scale-105"
              asChild
            >
              <Link href="/contact">
                Consult Our Experts <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 shadow-lg transition-transform hover:scale-105"
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
  title: "Accelerated Computing Infrastructure Solutions | AIdeology",
  description:
    "AIdeology designs, builds, and optimizes NVIDIA GPU-accelerated computing infrastructure, from workstations and servers to DGX systems and supercomputers, to power the most demanding AI, HPC, and data analytics workloads.",
}
