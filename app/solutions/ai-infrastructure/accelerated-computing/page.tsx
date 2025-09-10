import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
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
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// If you don't have an Nvidia icon, you can use a generic one or omit it.
// For this example, I'll use a placeholder or a generic icon if Nvidia is not available.
// const NvidiaIcon = () => <Cpu className="h-8 w-8 text-green-500" />; // Placeholder

export default function AcceleratedComputingPage() {
  const breadcrumbPath = [
    { name: "Solutions", href: "/#solutions" },
    { name: "AI Infrastructure", href: "/solutions/ai-infrastructure" },
    { name: "Accelerated Computing" }
  ];

  const capabilities = [
    {
      icon: <Zap className="h-10 w-10 text-accent-green" />,
      title: "Massive Parallelism",
      description: "Thousands of cores working simultaneously on complex calculations.",
    },
    {
      icon: <Cpu className="h-10 w-10 text-accent-green" />,
      title: "Specialized Architecture",
      description: "Hardware optimized for AI, graphics, and scientific computing.",
    },
    {
      icon: <Gauge className="h-10 w-10 text-accent-green" />,
      title: "Energy Efficiency",
      description: "Higher performance per watt compared to CPU-only solutions.",
    },
    {
      icon: <Layers className="h-10 w-10 text-accent-green" />,
      title: "Scalability",
      description: "From workstations to supercomputers with consistent architecture.",
    },
  ]

  const services = [
    {
      icon: <ServerCog className="h-8 w-8 text-accent-green" />,
      title: "GPU Infrastructure Design & Implementation",
      description:
        "We design and build optimized GPU infrastructure—from individual workstations to large-scale clusters—tailored to your specific workloads and performance requirements.",
    },
    {
      icon: <Box className="h-8 w-8 text-accent-green" />, // Using Box as a stand-in for DGX system
      title: "NVIDIA DGX Systems Deployment",
      description:
        "AIdeology specializes in deploying NVIDIA DGX systems—purpose-built AI supercomputers—and integrating them into your existing infrastructure for maximum performance and efficiency.",
    },
    {
      icon: <BarChartBig className="h-8 w-8 text-accent-green" />,
      title: "GPU Cluster Management",
      description:
        "We implement comprehensive management solutions for GPU clusters, including workload scheduling, resource allocation, and monitoring to ensure optimal utilization and performance.",
    },
    {
      icon: <Rocket className="h-8 w-8 text-accent-green" />,
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
    <>
      <div className="bg-white text-gray-800 pt-24">
        {/* Breadcrumb Navigation */}
        <div className="hidden md:block mb-6">
          <nav className="mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-500 flex items-center" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            {breadcrumbPath.map((item, index) => (
              <div key={item.name} className="flex items-center">
                <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
                {item.href ? (
                  <Link href={item.href} className="hover:text-gray-700">
                    {item.name}
                  </Link>
                ) : (
                  <span className="font-medium text-gray-700">{item.name}</span>
                )}
              </div>
            ))}
          </nav>
        </div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charcoal via-charcoal to-gray-800 text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <Badge className="mb-4 bg-accent-green/20 text-accent-green border-accent-green/30 hover:bg-accent-green/30 px-3 py-1 text-sm animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                AI Infrastructure
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Accelerated Computing <span className="block text-accent-green">Infrastructure</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                Transform your computational capabilities with GPU-accelerated infrastructure that powers the most
                demanding AI, HPC, and data analytics workloads.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <Button
                  size="lg"
                  className="bg-accent-green text-charcoal hover:bg-white hover:text-charcoal shadow-lg transition-transform hover:scale-105"
                  asChild
                >
                  <Link href="#consultation">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-charcoal shadow-lg transition-transform hover:scale-105"
                  asChild
                >
                  <Link href="#services">Explore Services</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <Image
                src="/gpu-server-racks.webp"
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

      {/* Video Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 animate-fade-in-up">
                GPU-Accelerated Performance Revolution
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Witness the dramatic performance gains achieved through GPU acceleration in AI, HPC, and data analytics workloads
              </p>
            </div>
            
            <div className="relative w-full max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
                <video
                  className="w-full h-full"
                  controls
                  preload="metadata"
                  poster="/accelerated-computing-video-thumbnail.webp"
                >
                  <source src="/accelerated-computing-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Optional overlay for branding */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Power of Accelerated Computing Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>The Power of Accelerated Computing</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Traditional CPU-only infrastructure struggles with modern AI & HPC demands. GPU acceleration offers
              transformative advantages.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {capabilities.map((item, index) => (
              <Card
                key={item.title}
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-accent-green animate-fade-in-up"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-accent-green/10">{item.icon}</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>Our Accelerated Computing Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Comprehensive solutions to design, deploy, and optimize your GPU-accelerated infrastructure for peak
              performance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${300 + index * 150}ms` }}>
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-accent-green/10 mr-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NVIDIA Technology Highlight Section */}
      <section className="py-16 md:py-24 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              {/* You can use an actual NVIDIA logo image here if available */}
              {/* <Image src="/nvidia-logo-white.webp" alt="NVIDIA Logo" width={200} height={100} className="mb-6" /> */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-green/20 text-accent-green border border-accent-green/50 mb-4 text-sm">
                <Nvidia className="h-5 w-5 text-accent-green" /> {/* Using placeholder Nvidia icon */}
                Powered by NVIDIA
              </div>
              <h3 className="text-3xl font-bold mb-4">Leveraging NVIDIA's Ecosystem</h3>
              <p className="text-gray-300 mb-6 text-lg">
                AIdeology harnesses NVIDIA's comprehensive accelerated computing portfolio, including A100 & H100 Tensor
                Core GPUs, DGX systems, and Enterprise AI Platforms. These technologies form the bedrock of our high-performance
                solutions, delivering unparalleled performance for AI training, inference, and HPC.
              </p>
              <Button
                variant="outline"
                className="border-accent-green text-accent-green hover:bg-accent-green hover:text-charcoal"
                asChild
              >
                <Link href="/products/nvidia-dgx">
                  Explore NVIDIA DGX Systems <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="hidden md:block">
              <Image
                src="/gpu-accelerator-chip.webp" // Replace with a more specific NVIDIA tech image if available
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Transform Your Organization with Accelerated Computing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Unlock unprecedented performance, efficiency, and capabilities for your most demanding workloads.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${300 + index * 100}ms` }}>
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-accent-green/10 mr-4">
                    <div className="text-accent-green">{benefit.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="consultation" className="py-16 md:py-24 bg-accent-green text-charcoal">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Ready to Accelerate Your Computing Infrastructure?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Let AIdeology design and implement a GPU-accelerated infrastructure solution that transforms your
            organization's computational capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Button
              size="lg"
              className="bg-charcoal text-white hover:bg-gray-800 shadow-lg transition-transform hover:scale-105"
              asChild
            >
              <Link href="/book-discovery-call?type=consultation">
                Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white shadow-lg transition-transform hover:scale-105"
              asChild
            >
              <Link href="/#solutions">
                Explore More Solutions
              </Link>
            </Button>
          </div>
        </div>
      </section>
      </div>
      
      <Footer />
    </>
  )
}

export const metadata = {
  title: "Accelerated Computing Infrastructure Solutions | AIdeology",
  description:
    "AIdeology designs, builds, and optimizes NVIDIA GPU-accelerated computing infrastructure, from workstations and servers to DGX systems and supercomputers, to power the most demanding AI, HPC, and data analytics workloads.",
}
