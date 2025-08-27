import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Eye, Layers, Building, Globe, Users, Search, Headphones, Monitor, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/footer"

export const metadata = {
  title: "Extended Reality (XR) Solutions | AIdeology",
  description:
    "AIdeology creates immersive virtual reality (VR), augmented reality (AR), and mixed reality (MR) experiences for training, visualization, and collaboration, powered by NVIDIA CloudXR and Omniverse technologies.",
}

export default function ExtendedRealityPage() {
  const breadcrumbPath = [
    { name: "Solutions", href: "/#solutions" },
    { name: "Design & Simulation", href: "/solutions/design-simulation" },
    { name: "Extended Reality" }
  ];
  const xrCapabilities = [
    {
      title: "Immersive Training",
      description: "Create realistic, risk-free training environments",
      icon: <Building className="w-8 h-8 text-accent-green" />
    },
    {
      title: "Spatial Computing", 
      description: "Interact with 3D data in natural, intuitive ways",
      icon: <Globe className="w-8 h-8 text-accent-green" />
    },
    {
      title: "Remote Collaboration",
      description: "Connect teams across physical locations in shared virtual spaces",
      icon: <Users className="w-8 h-8 text-accent-green" />
    },
    {
      title: "Enhanced Visualization",
      description: "Experience complex data and models at human scale",
      icon: <Eye className="w-8 h-8 text-accent-green" />
    }
  ]

  const services = [
    {
      title: "Immersive Training Solutions",
      description: "We create VR training environments that enable employees to practice complex procedures, emergency responses, and specialized skills in safe, realistic virtual settings.",
      features: [
        "Emergency response training",
        "Equipment operation simulation", 
        "Safety protocol practice",
        "Skills assessment and certification"
      ]
    },
    {
      title: "Collaborative VR Environments", 
      description: "AIdeology implements multi-user virtual environments that enable teams to collaborate on 3D models, data visualization, and complex planning tasks regardless of physical location.",
      features: [
        "Multi-user virtual workspaces",
        "3D model collaboration",
        "Real-time design reviews",
        "Cross-platform accessibility"
      ]
    },
    {
      title: "AR for Enterprise",
      description: "We develop augmented reality solutions that overlay digital information on the physical world, enhancing maintenance procedures, assembly operations, and field service activities.",
      features: [
        "Maintenance guidance overlays",
        "Assembly instruction visualization",
        "Remote expert assistance",
        "Equipment status displays"
      ]
    },
    {
      title: "XR Infrastructure & Integration",
      description: "AIdeology designs and implements the technical infrastructure required to support enterprise XR deployments, including hardware, networking, and integration with existing systems.",
      features: [
        "High-performance XR hardware setup",
        "Network optimization for XR",
        "Enterprise system integration",
        "Scalable deployment architecture"
      ]
    }
  ]

  return (
    <>
      <div className="min-h-screen bg-white pt-24">
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
      <section className="relative bg-gradient-to-br from-charcoal via-charcoal to-gray-800 text-white py-20">
        <div className="absolute inset-0 point-cloud-bg opacity-10"></div>
        <div className="w-full px-6 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center bg-accent-green/20 text-accent-green px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <Eye className="w-4 h-4 mr-2" />
              3D AI
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Extended Reality <span className="text-accent-green">(XR)</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              Transform how organizations train, visualize, and collaborate with immersive virtual reality, augmented reality, and mixed reality experiences
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

      {/* XR Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>The Transformative Power of XR</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Extended reality is revolutionizing how we interact with digital content and physical environments
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {xrCapabilities.map((capability, index) => (
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
              <h2 className="text-4xl font-bold text-charcoal mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>AIdeology's Extended Reality Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Comprehensive XR solutions for enterprise training, collaboration, and visualization
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
                  <h3 className="text-2xl font-semibold text-blue-800 mb-2">NVIDIA CloudXR & Omniverse Technologies</h3>
                  <p className="text-blue-700 text-lg">
                    AIdeology leverages NVIDIA CloudXR for streaming high-quality XR experiences to a variety of devices, and
                    NVIDIA Omniverse for creating collaborative virtual environments. These technologies enable immersive,
                    photorealistic XR experiences that can be accessed from anywhere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal text-white">
        <div className="w-full px-6 lg:px-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Ready to Transform Your Reality?
            </h2>
            <p className="text-xl mb-8 text-gray-300 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Create immersive experiences that drive real business outcomes with extended reality
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
      
      <Footer />
    </>
  )
}
