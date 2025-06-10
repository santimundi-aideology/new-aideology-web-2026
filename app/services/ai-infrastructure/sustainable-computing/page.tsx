import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Leaf, Zap, TrendingDown, Target, DollarSign, Thermometer, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SustainableComputingPage() {
  const imperatives = [
    {
      title: "Reduce Energy Consumption",
      description: "Minimize the power required for high-performance computation.",
      icon: <Zap className="h-6 w-6 text-accent-green" />,
    },
    {
      title: "Lower Carbon Footprint",
      description: "Decrease greenhouse gas emissions from data center operations.",
      icon: <Leaf className="h-6 w-6 text-accent-green" />,
    },
    {
      title: "Optimize Resource Utilization",
      description: "Achieve more computational output with less physical hardware.",
      icon: <TrendingDown className="h-6 w-6 text-accent-green" />,
    },
    {
      title: "Meet Sustainability Goals",
      description: "Align IT operations with corporate environmental, social, and governance (ESG) objectives.",
      icon: <Target className="h-6 w-6 text-accent-green" />,
    },
  ]

  const services = [
    {
      title: "Energy-Efficient Infrastructure Design",
      description:
        "We design and build computing infrastructure that maximizes computational output per watt, leveraging NVIDIA's energy-efficient GPUs and optimized system architectures.",
      icon: <Zap className="h-8 w-8" />,
    },
    {
      title: "Advanced Liquid Cooling Solutions",
      description:
        "AIdeology implements state-of-the-art cooling technologies, including direct-to-chip liquid cooling, to significantly reduce energy consumption and enable higher performance density.",
      icon: <Thermometer className="h-8 w-8" />,
    },
    {
      title: "AI & HPC Workload Optimization",
      description:
        "Our experts optimize your AI and HPC workloads to minimize resource requirements and energy use, all while maintaining or improving performance and throughput.",
      icon: <TrendingDown className="h-8 w-8" />,
    },
    {
      title: "Power Management & Monitoring",
      description:
        "We implement comprehensive power management and monitoring solutions that provide real-time visibility into energy consumption, enabling dynamic optimization and reporting.",
      icon: <Target className="h-8 w-8" />,
    },
  ]

  const benefits = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Lower Operational Costs",
      description: "Significantly reduce electricity expenses and cooling requirements for a better TCO.",
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Decreased Carbon Footprint",
      description: "Minimize greenhouse gas emissions and support your corporate sustainability initiatives.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Enhanced Performance",
      description: "Achieve more computation in less physical space with higher-density, liquid-cooled systems.",
    },
  ]

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-800 via-teal-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20 backdrop-blur-sm">
                <Leaf className="mr-2 h-4 w-4" />
                AI Infrastructure
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Sustainable & Energy-Efficient Computing
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Design and implement sustainable computing infrastructure for AI and HPC that reduces environmental
                impact without compromising on performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-white text-green-900 hover:bg-green-50">
                  <Link href="/contact">
                    Consult an Expert
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-900"
                >
                  <Link href="#benefits">View Benefits</Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <Image
                src="/data-center.webp"
                alt="A modern, sustainable data center with green ambient lighting"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Imperative Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">The Sustainability Imperative in AI</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As AI workloads grow, so does their environmental impact. AIdeology helps you address these critical
              challenges head-on.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {imperatives.map((item, index) => (
              <Card
                key={index}
                className="bg-white border-0 border-l-4 border-accent-green shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Sustainable Computing Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end solutions to reduce your environmental impact while maximizing computational
              performance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-0 bg-gray-50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-100 rounded-lg text-green-600">{service.icon}</div>
                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NVIDIA Technology Highlight */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Card className="border-l-4 border-green-500 bg-white shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-3 p-8">
                <h3 className="text-2xl font-bold text-green-800 mb-4">Powered by NVIDIA's Green Technologies</h3>
                <p className="text-gray-700 text-lg mb-4">
                  AIdeology leverages NVIDIA's portfolio of energy-efficient computing technologies. From GPUs that
                  deliver more computation per watt to optimized software that maximizes efficiency, these technologies
                  form the bedrock of our sustainable solutions.
                </p>
                <p className="text-gray-600">
                  This includes advanced power management capabilities and support for liquid cooling, enabling data
                  centers to operate with unprecedented efficiency and density.
                </p>
              </div>
              <div className="md:col-span-2 bg-green-900/5 p-8 flex items-center justify-center">
                <Image src="/nvidia-logo.png" alt="NVIDIA Logo" width={200} height={100} className="object-contain" />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Key Benefits of Sustainable AI Infrastructure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Embrace sustainability to unlock significant financial, operational, and reputational advantages.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-0 bg-gray-50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <CardContent className="p-8 text-center">
                  <div className="p-4 bg-green-100 rounded-full w-fit mx-auto mb-4 text-green-600">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-charcoal to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Build a Greener, More Powerful AI Future</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to reduce your operational costs and environmental footprint? Let's design your sustainable AI
              infrastructure together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent-green text-white hover:bg-accent-green/90">
                <Link href="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gray-400 text-white hover:bg-white hover:text-charcoal"
              >
                <Link href="/solutions/ai-infrastructure">Explore Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export const metadata = {
  title: "Sustainable & Energy-Efficient Computing Infrastructure | AIdeology",
  description:
    "AIdeology designs and implements sustainable, energy-efficient computing infrastructure for AI and HPC, leveraging NVIDIA's advanced technologies to help organizations reduce their environmental impact while maximizing performance.",
}
