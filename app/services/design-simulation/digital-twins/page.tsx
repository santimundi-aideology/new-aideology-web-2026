import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Layers, Monitor } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Digital Twin Solutions | AIdeology",
  description:
    "AIdeology creates sophisticated digital twin solutions powered by NVIDIA Omniverse and AI technologies, enabling real-time monitoring, simulation, and optimization of complex physical systems and environments.",
}

export default function DigitalTwinsPage() {
  const twinCapabilities = [
    {
      title: "Real-time Monitoring",
      description: "Monitor physical systems through their digital counterparts",
      icon: "📊"
    },
    {
      title: "Predictive Analytics",
      description: "Simulate future scenarios and predict outcomes",
      icon: "🔮"
    },
    {
      title: "Virtual Testing",
      description: "Test changes virtually before implementing physically",
      icon: "🧪"
    },
    {
      title: "Remote Management",
      description: "Access and interact with systems from anywhere",
      icon: "🌐"
    }
  ]

  const services = [
    {
      title: "Industrial Digital Twins",
      description: "We create digital replicas of manufacturing facilities, production lines, and industrial equipment that enable real-time monitoring, predictive maintenance, and process optimization.",
      features: [
        "Manufacturing facility twins",
        "Production line optimization",
        "Equipment performance monitoring",
        "Predictive maintenance systems"
      ]
    },
    {
      title: "Building & Infrastructure Twins",
      description: "AIdeology develops digital twins of buildings, campuses, and infrastructure that provide insights into energy usage, occupancy patterns, and system performance.",
      features: [
        "Smart building management",
        "Energy optimization systems",
        "Occupancy analytics",
        "Infrastructure monitoring"
      ]
    },
    {
      title: "Product Digital Twins",
      description: "We implement digital twin solutions that track individual products throughout their lifecycle, from design and manufacturing to deployment and maintenance.",
      features: [
        "Product lifecycle tracking",
        "Performance analytics",
        "Maintenance optimization",
        "Quality assurance systems"
      ]
    },
    {
      title: "AI-Enhanced Simulation",
      description: "AIdeology integrates AI and machine learning with digital twins to enable predictive analytics, anomaly detection, and autonomous optimization.",
      features: [
        "Machine learning integration",
        "Anomaly detection systems",
        "Autonomous optimization",
        "Predictive modeling"
      ]
    }
  ]

  const benefits = [
    "Enhanced operational visibility and control",
    "Reduced downtime through predictive maintenance",
    "Optimized performance and efficiency",
    "Accelerated innovation and testing",
    "Data-driven decision making",
    "Cost reduction and ROI improvement"
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charcoal via-charcoal to-gray-800 text-white py-20">
        <div className="absolute inset-0 point-cloud-bg opacity-10"></div>
        <div className="w-full px-6 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center bg-accent-green/20 text-accent-green px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <Monitor className="w-4 h-4 mr-2" />
              3D AI
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <span className="text-accent-green">Digital Twin</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              Create sophisticated virtual replicas of physical assets, processes, and environments for real-time monitoring, simulation, and optimization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <Button size="lg" className="bg-accent-green hover:bg-accent-green/90 text-charcoal font-semibold">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-charcoal"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Twin Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>The Power of Digital Twins</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Transform how you understand, optimize, and predict the behavior of physical systems
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {twinCapabilities.map((capability, index) => (
                <Card key={capability.title} className="hover-lift border-0 shadow-lg text-center animate-fade-in-up" style={{ animationDelay: `${300 + index * 100}ms` }}>
                  <CardHeader>
                    <div className="text-4xl mb-4">{capability.icon}</div>
                    <CardTitle className="text-xl">{capability.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {capability.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>AIdeology's Digital Twin Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Comprehensive solutions for creating and managing digital twins across industries
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={service.title} className="hover-lift border-0 shadow-lg animate-fade-in-up" style={{ animationDelay: `${300 + index * 100}ms` }}>
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {service.description}
                    </CardDescription>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NVIDIA Technology Highlight */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-r-lg animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-blue-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-2xl font-semibold text-blue-800 mb-2">NVIDIA Omniverse & Digital Twin Technologies</h3>
                  <p className="text-blue-700 text-lg">
                    AIdeology leverages NVIDIA Omniverse as a foundation for creating photorealistic, physically accurate digital twins. This platform enables real-time simulation, collaboration, and AI integration, providing a comprehensive environment for digital twin development and operation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>Transform Your Operations</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Digital twins deliver measurable business value across multiple dimensions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={benefit} className="flex items-center p-4 bg-gray-50 rounded-lg animate-fade-in-up" style={{ animationDelay: `${300 + index * 100}ms` }}>
                  <CheckCircle className="w-6 h-6 text-accent-green mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal text-white">
        <div className="w-full px-6 lg:px-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Ready to Create Your Digital Twin?
            </h2>
            <p className="text-xl mb-8 text-gray-300 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Transform how you understand and manage physical assets with digital twins
            </p>
            <Button
              size="lg"
              className="bg-accent-green text-charcoal hover:bg-white hover:text-charcoal font-semibold text-lg px-10 py-4 animate-fade-in-up"
              style={{ animationDelay: '300ms' }}
              asChild
            >
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
