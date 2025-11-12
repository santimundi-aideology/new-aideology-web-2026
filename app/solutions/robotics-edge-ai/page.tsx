import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Cpu, Wrench, Shield, Zap, Factory, Car, Brain, Cog, Bot, Settings, ChevronRight, CheckCircle, TrendingUp, DollarSign, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/footer"

const RoboticsEdgeAIPage = () => {
  const breadcrumbPath = [
    { name: "Solutions", href: "/#solutions" },
    { name: "Robotics & Edge AI" }
  ];

  const roboticsSolutions = [
    {
      icon: <Factory className="w-8 h-8 text-accent-green" />,
      title: "Industrial Automation",
      description: "Smart robotic systems that optimize manufacturing processes and increase production efficiency.",
      applications: ["Assembly line automation", "Quality inspection", "Material handling"]
    },
    {
      icon: <Bot className="w-8 h-8 text-accent-green" />,
      title: "Service Robots",
      description: "Intelligent robots designed to assist humans in various service-oriented tasks.",
      applications: ["Healthcare assistance", "Customer service", "Cleaning robots"]
    },
    {
      icon: <Brain className="w-8 h-8 text-accent-green" />,
      title: "Smart Edge Computing",
      description: "Real-time AI processing at the edge for immediate decision-making without cloud dependency.",
      applications: ["Real-time analytics", "Predictive maintenance", "Local data processing"]
    }
  ]

  const benefits = [
    { 
      title: "Increased Efficiency", 
      description: "Automate repetitive tasks to boost productivity",
      icon: <TrendingUp className="w-8 h-8 text-accent-green" />
    },
    { 
      title: "Cost Savings", 
      description: "Reduce operational costs through smart automation",
      icon: <DollarSign className="w-8 h-8 text-accent-green" />
    },
    { 
      title: "Enhanced Safety", 
      description: "Minimize human exposure to dangerous environments",
      icon: <Shield className="w-8 h-8 text-accent-green" />
    },
    { 
      title: "Real-time Processing", 
      description: "Make instant decisions with edge AI capabilities",
      icon: <Zap className="w-8 h-8 text-accent-green" />
    }
  ]

  const industries = [
    {
      name: "Manufacturing",
      icon: <Factory className="w-6 h-6 text-accent-green" />,
      useCase: "Automated production lines and quality control systems"
    },
    {
      name: "Transportation",
      icon: <Car className="w-6 h-6 text-accent-green" />,
      useCase: "Autonomous vehicles and fleet management solutions"
    },
    {
      name: "Logistics",
      icon: <Settings className="w-6 h-6 text-accent-green" />,
      useCase: "Warehouse automation and inventory management"
    }
  ]

  const edgeSolutions = [
    {
      title: "Vision AI Solutions",
      description: "Computer vision systems for intelligent visual perception",
      href: "/services/robotics-edge-ai/vision-ai",
      icon: <Brain className="w-5 h-5" />
    },
    {
      title: "Edge AI Platform",
      description: "Comprehensive edge computing infrastructure",
      href: "/services/robotics-edge-ai/edge-ai",
      icon: <Cpu className="w-5 h-5" />
    },
    {
      title: "Robotics Solutions",
      description: "End-to-end robotics solutions design and implementation",
      href: "/services/robotics-edge-ai/robotics/",
      icon: <Cog className="w-5 h-5" />
    }
  ]

  return (
    <div className="min-h-dvh bg-white pt-24">
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
      <section className="relative overflow-hidden bg-gradient-to-br from-charcoal via-charcoal to-gray-800 text-white py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,.1),transparent_50%)] animate-pulse"></div>
        </div>

        <div className="w-full relative z-10">
          <div className="w-full text-center px-6 lg:px-12">
            <div className="inline-flex items-center bg-accent-green/20 text-accent-green px-6 py-3 rounded-full text-sm font-medium mb-8 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <Bot className="w-4 h-4 mr-2" />
              Robotics • Edge AI • Automation
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <span className="text-accent-green">Robotics</span>
              <span className="block text-white">& Edge AI</span>
            </h1>

            <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              Intelligent robotic systems powered by edge AI for real-time automation and decision-making
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <Button
                size="lg"
                className="bg-accent-green text-charcoal font-semibold text-lg px-10 py-5 rounded-2xl hover:bg-white hover:text-charcoal hover:scale-105 transition-all duration-300 ease-in-out"
                asChild
              >
                <Link href="/book-discovery-call?type=consultation">
                  Start Robotics Project
                  <Bot className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-charcoal text-lg px-10 py-5 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 ease-in-out"
                asChild
              >
                <Link href="#solutions">Explore All Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Robotics Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                Robotics & Edge AI Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Advanced robotic systems and edge computing solutions for intelligent automation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {roboticsSolutions.map((solution, index) => (
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
                Why Choose Robotics & Edge AI?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Transform your operations with intelligent automation
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

      {/* Solutions Grid */}
      <section id="solutions" className="py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                Specialized AI Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Discover our comprehensive suite of robotics and edge AI technologies
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {edgeSolutions.map((solution, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up flex flex-col" style={{ animationDelay: `${300 + index * 150}ms` }}>
                  <CardHeader className="text-center flex-grow">
                    <div className="w-16 h-16 bg-accent-green/10 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-accent-green/20 transition-all">
                      {solution.icon}
                    </div>
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                    <CardDescription className="flex-grow">{solution.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center mt-auto">
                    <Button asChild variant="outline" className="group-hover:bg-accent-green group-hover:text-white transition-all">
                      <Link href={solution.href}>
                        Learn More
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
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
                Robotics and edge AI solutions tailored for your industry
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
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
              Ready to Automate Your Future?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Partner with AIdeology to build intelligent robotic systems that transform your operations and drive innovation.
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
                <Link href="/#solutions">
                  Explore All Solutions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default RoboticsEdgeAIPage
