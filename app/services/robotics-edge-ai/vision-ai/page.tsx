import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Eye, Camera, Search, Shield, Sparkles, Video, Scan, Target, Brain, BarChart3, CheckCircle, TrendingUp, DollarSign, Lock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const VisionAIPage = () => {
  const visionSolutions = [
    {
      icon: <Eye className="w-8 h-8 text-accent-green" />,
      title: "Object Recognition",
      description: "Intelligent systems that can identify and classify objects in real-time with high accuracy.",
      applications: ["Quality control", "Inventory management", "Security monitoring"]
    },
    {
      icon: <Camera className="w-8 h-8 text-accent-green" />,
      title: "Image Analysis",
      description: "Advanced image processing capabilities for extracting insights from visual data.",
      applications: ["Medical imaging", "Document processing", "Content moderation"]
    },
    {
      icon: <Search className="w-8 h-8 text-accent-green" />,
      title: "Visual Search",
      description: "Enable users to search using images instead of text for enhanced user experiences.",
      applications: ["E-commerce", "Product discovery", "Similar item finding"]
    },
    {
      icon: <Video className="w-8 h-8 text-accent-green" />,
      title: "Video Analytics",
      description: "Real-time analysis of video streams for actionable intelligence and automation.",
      applications: ["Traffic monitoring", "Crowd analysis", "Behavior detection"]
    }
  ]

  const benefits = [
    { title: "Improved Accuracy", description: "Reduce human error with AI-powered visual recognition", icon: <TrendingUp className="w-8 h-8 text-accent-green" /> },
    { title: "Cost Reduction", description: "Automate visual inspection tasks to cut operational costs", icon: <DollarSign className="w-8 h-8 text-accent-green" /> },
    { title: "Enhanced Safety", description: "Monitor environments for safety compliance automatically", icon: <Lock className="w-8 h-8 text-accent-green" /> },
    { title: "Better Insights", description: "Extract valuable data from images and videos", icon: <BarChart3 className="w-8 h-8 text-accent-green" /> }
  ]

  const industries = [
    {
      name: "Manufacturing",
      icon: <Target className="w-6 h-6 text-accent-green" />,
      useCase: "Quality control and defect detection on production lines"
    },
    {
      name: "Healthcare",
      icon: <Shield className="w-6 h-6 text-accent-green" />,
      useCase: "Medical image analysis and diagnostic assistance"
    },
    {
      name: "Retail",
      icon: <Sparkles className="w-6 h-6 text-accent-green" />,
      useCase: "Inventory management and customer behavior analysis"
    },
    {
      name: "Security",
      icon: <Scan className="w-6 h-6 text-accent-green" />,
      useCase: "Surveillance and threat detection systems"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-charcoal via-charcoal to-gray-800 text-white py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,.1),transparent_50%)] animate-pulse"></div>
        </div>

        <div className="w-full relative z-10">
          <div className="w-full text-center px-6 lg:px-12">
            <div className="inline-flex items-center bg-accent-green/20 text-accent-green px-6 py-3 rounded-full text-sm font-medium mb-8 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <Eye className="w-4 h-4 mr-2" />
              Computer Vision • Visual Intelligence
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <span className="text-accent-green">Vision</span>
              <span className="block text-white">AI</span>
            </h1>

            <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              Transform your business with intelligent computer vision solutions that see, understand, and act on visual data
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <Button
                size="lg"
                className="bg-accent-green text-charcoal font-semibold text-lg px-10 py-5 rounded-2xl hover:bg-white hover:text-charcoal hover:scale-105 transition-all duration-300 ease-in-out"
                asChild
              >
                <Link href="/book-discovery-call?type=consultation">
                  Start Vision AI Project
                  <Eye className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-charcoal text-lg px-10 py-5 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 ease-in-out"
                asChild
              >
                <Link href="#solutions">View Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Solutions Section */}
      <section id="solutions" className="py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                Vision AI Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Comprehensive computer vision capabilities to automate visual tasks and extract insights from images and videos
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {visionSolutions.map((solution, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${300 + index * 150}ms` }}>
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-accent-green/10 rounded-2xl flex items-center justify-center mr-4">
                        {solution.icon}
                      </div>
                      <CardTitle className="text-xl">{solution.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base leading-relaxed">{solution.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">Applications:</h4>
                    <div className="space-y-2">
                      {solution.applications.map((app, appIndex) => (
                        <div key={appIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                          <span className="text-sm text-gray-700">{app}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                Why Choose Vision AI?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Transform your operations with the power of computer vision
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${300 + index * 100}ms` }}>
                  <div className="w-16 h-16 bg-accent-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-charcoal mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-charcoal text-white">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Vision AI solutions tailored for your industry's specific needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-gray-800 rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: `${300 + index * 150}ms` }}>
                  <div className="flex items-center mb-4">
                    {industry.icon}
                    <h3 className="text-2xl font-bold ml-3">{industry.name}</h3>
                  </div>
                  <p className="text-gray-300">{industry.useCase}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent-green text-charcoal">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Ready to See the Difference?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Let AIdeology help you implement computer vision solutions that transform how you see and understand your visual data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <Button 
                asChild
                size="lg" 
                className="bg-charcoal text-white font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-300 ease-in-out px-8 py-3"
              >
                <Link href="/book-discovery-call?type=consultation">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white hover:scale-105 transition-all duration-300 ease-in-out px-8 py-3"
                asChild
              >
                <Link href="/solutions/robotics-edge-ai">
                  Explore All Solutions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VisionAIPage
