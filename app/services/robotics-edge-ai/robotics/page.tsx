import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Bot, Factory, Car, Users, Shield, Sparkles, CheckCircle, TrendingUp, Zap, Settings, Wrench, Brain } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const RoboticsPage = () => {
  const roboticsSolutions = [
    {
      icon: <Factory className="w-8 h-8 text-accent-green" />,
      title: "Factory Robots",
      description: "Smart robots that help make products faster, safer, and with fewer mistakes.",
      features: ["Assembly line help", "Quality checking", "Heavy lifting", "Precise positioning"]
    },
    {
      icon: <Car className="w-8 h-8 text-accent-green" />,
      title: "Delivery Robots",
      description: "Robots that can move around and deliver things without human drivers.",
      features: ["Warehouse navigation", "Package delivery", "Inventory tracking", "Route optimization"]
    },
    {
      icon: <Users className="w-8 h-8 text-accent-green" />,
      title: "Helper Robots",
      description: "Friendly robots that work alongside people to make jobs easier and safer.",
      features: ["Safe collaboration", "Task assistance", "Learning capabilities", "User-friendly interface"]
    },
    {
      icon: <Brain className="w-8 h-8 text-accent-green" />,
      title: "Smart Robots",
      description: "Robots that can learn, adapt, and make decisions to handle complex tasks.",
      features: ["AI-powered decisions", "Adaptive learning", "Problem solving", "Continuous improvement"]
    }
  ]

  const benefits = [
    {
      title: "Work Faster",
      description: "Robots can work 24/7 without breaks to get more done",
      icon: <Zap className="w-6 h-6 text-accent-green" />
    },
    {
      title: "Safer Workplace",
      description: "Keep people away from dangerous tasks and environments",
      icon: <Shield className="w-6 h-6 text-accent-green" />
    },
    {
      title: "Better Quality",
      description: "Robots make fewer mistakes and keep quality consistent",
      icon: <CheckCircle className="w-6 h-6 text-accent-green" />
    },
    {
      title: "Save Money",
      description: "Reduce costs while increasing productivity and efficiency",
      icon: <TrendingUp className="w-6 h-6 text-accent-green" />
    }
  ]

  const applications = [
    {
      title: "Manufacturing",
      description: "Robots that help build cars, electronics, and other products on assembly lines.",
      icon: <Factory className="w-8 h-8 text-accent-green" />,
      examples: ["Car assembly", "Electronics manufacturing", "Food processing", "Packaging systems"]
    },
    {
      title: "Logistics",
      description: "Robots that move and organize items in warehouses and distribution centers.",
      icon: <Car className="w-8 h-8 text-accent-green" />,
      examples: ["Warehouse picking", "Inventory management", "Package sorting", "Delivery systems"]
    },
    {
      title: "Healthcare",
      description: "Robots that help doctors and nurses provide better patient care.",
      icon: <Shield className="w-8 h-8 text-accent-green" />,
      examples: ["Surgery assistance", "Patient monitoring", "Medicine delivery", "Rehabilitation therapy"]
    }
  ]

  const features = [
    "Easy to use and control",
    "Works safely with people",
    "Learns and gets better over time",
    "Connects to your existing systems",
    "24/7 technical support",
    "Custom solutions for your needs"
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
              <Bot className="w-4 h-4 mr-2" />
              Automation • Smart Robots • AI-Powered
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <span className="text-accent-green">Robotics</span>
            </h1>

            <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              Smart robots that work with your team to make your business faster, safer, and more efficient
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <Button
                size="lg"
                className="bg-accent-green text-charcoal font-semibold text-lg px-10 py-5 rounded-2xl hover:bg-white hover:text-charcoal hover:scale-105 transition-all duration-300 ease-in-out"
                asChild
              >
                <Link href="/book-discovery-call?type=consultation">
                  Get Started with Robotics
                  <Bot className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-charcoal text-lg px-10 py-5 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 ease-in-out"
                asChild
              >
                <Link href="#solutions">See Our Robots</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Robotics Solutions */}
      <section id="solutions" className="py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                Types of Robots We Build
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Different kinds of smart robots to help with different jobs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
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
                    <h4 className="font-semibold mb-3">What They Do:</h4>
                    <div className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                          <span className="text-sm text-gray-700">{feature}</span>
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
                Why Use Robots?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                See how robots can help your business succeed
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

      {/* Applications Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                Where Robots Help
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Robots are helping businesses in many different industries
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {applications.map((application, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${300 + index * 150}ms` }}>
                  <CardHeader>
                    <div className="w-16 h-16 bg-accent-green/10 rounded-2xl flex items-center justify-center mb-4">
                      {application.icon}
                    </div>
                    <CardTitle className="text-xl">{application.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{application.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">Examples:</h4>
                    <div className="space-y-2">
                      {application.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                          <span className="text-sm text-gray-700">{example}</span>
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

      {/* Features Section */}
      <section className="py-20 bg-charcoal text-white">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                What Makes Our Robots Special
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                We build robots that are designed to work perfectly with your business
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-800 rounded-2xl p-6 text-center animate-fade-in-up" style={{ animationDelay: `${300 + index * 100}ms` }}>
                  <CheckCircle className="w-8 h-8 text-accent-green mx-auto mb-3" />
                  <p className="text-white font-medium">{feature}</p>
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
              Ready to Meet Your New Robot Team?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Let AIdeology help you find the perfect robots to make your business better, faster, and more successful.
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

export default RoboticsPage
