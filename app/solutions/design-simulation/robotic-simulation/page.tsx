import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Zap, Bot, BarChart3, Shield, Cpu, Gauge, Database, Settings, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/footer"

export const metadata = {
  title: "Robotic Simulation & AI Solutions | AIdeology",
  description:
    "AIdeology delivers advanced robotic simulation solutions powered by NVIDIA Isaac Sim and Omniverse, enabling accelerated development, testing, and AI training for autonomous systems and robotics.",
}

export default function RoboticSimulationPage() {
  const breadcrumbPath = [
    { name: "Solutions", href: "/#solutions" },
    { name: "Design & Simulation", href: "/solutions/design-simulation" },
    { name: "Robotic Simulation" }
  ];
  const simulationCapabilities = [
    {
      title: "Accelerated Development",
      description: "Test thousands of scenarios in the time of one physical test",
      icon: <Zap className="w-8 h-8 text-accent-green" />
    },
    {
      title: "Synthetic Data Generation",
      description: "Create vast amounts of training data for AI models",
      icon: <BarChart3 className="w-8 h-8 text-accent-green" />
    },
    {
      title: "Safety Testing",
      description: "Evaluate edge cases and failure modes without physical risk",
      icon: <Shield className="w-8 h-8 text-accent-green" />
    },
    {
      title: "Digital Twins",
      description: "Create virtual replicas of physical environments",
      icon: <Bot className="w-8 h-8 text-accent-green" />
    }
  ]

  const services = [
    {
      title: "Simulation Environment Development",
      description: "We create physically accurate simulation environments tailored to your specific robotics applications, from warehouses and factories to outdoor environments and specialized settings.",
      features: [
        "Custom environment modeling",
        "Physically accurate simulations",
        "Warehouse & factory environments",
        "Outdoor scenario creation"
      ]
    },
    {
      title: "AI Training Infrastructure",
      description: "AIdeology implements end-to-end infrastructure for training robotic AI using simulation, including synthetic data generation, reinforcement learning, and sim-to-real transfer.",
      features: [
        "Reinforcement learning setup",
        "Synthetic data pipelines",
        "Sim-to-real transfer",
        "Multi-agent training"
      ]
    },
    {
      title: "Digital Twin Creation",
      description: "We develop digital twins of physical environments and robotic systems, enabling testing and validation in virtual replicas before deployment to the real world.",
      features: [
        "Environment digital twins",
        "Robot system modeling",
        "Real-world validation",
        "Performance benchmarking"
      ]
    },
    {
      title: "Simulation-Based Testing",
      description: "AIdeology creates comprehensive testing frameworks that leverage simulation to validate robotic system performance across thousands of scenarios and edge cases.",
      features: [
        "Automated testing suites",
        "Edge case simulation",
        "Performance validation",
        "Scenario generation"
      ]
    }
  ]

  const benefits = [
    "Accelerated development cycles for robotic systems",
    "Improved AI performance with diverse synthetic data",
    "Reduced need for expensive physical prototypes",
    "Enhanced safety through virtual testing",
    "Scalable development with parallel simulations",
    "Cost-effective training and validation"
  ]

  const industries = [
    {
      title: "Manufacturing & Logistics",
      description: "Simulate robotic systems for assembly lines, warehouse automation, and material handling to optimize efficiency and safety.",
      applications: [
        "Assembly line robotics",
        "Warehouse automation",
        "Material handling systems",
        "Quality control robotics"
      ]
    },
    {
      title: "Autonomous Vehicles",
      description: "Create comprehensive testing environments for autonomous navigation, obstacle avoidance, and decision-making systems.",
      applications: [
        "Navigation testing",
        "Obstacle avoidance",
        "Traffic scenario simulation",
        "Sensor fusion validation"
      ]
    },
    {
      title: "Healthcare & Service Robotics",
      description: "Develop and test service robots for healthcare, hospitality, and domestic applications in safe virtual environments.",
      applications: [
        "Medical robotics testing",
        "Service robot behavior",
        "Human-robot interaction",
        "Safety validation"
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
              <Bot className="w-4 h-4 mr-2" />
              3D AI
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <span className="text-accent-green">Robotic Simulation</span> & AI
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              Accelerate development, testing, and deployment of autonomous systems with advanced robotic simulation environments
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

      {/* Simulation Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>The Power of Robotic Simulation</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Modern GPU-accelerated simulation offers transformative advantages for robotics development
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {simulationCapabilities.map((capability, index) => (
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
              <h2 className="text-4xl font-bold text-charcoal mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>AIdeology's Robotic Simulation Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                End-to-end solutions for robotic development and AI training
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
                  <h3 className="text-2xl font-semibold text-blue-800 mb-2">NVIDIA Isaac Sim & Omniverse Technologies</h3>
                  <p className="text-blue-700 text-lg">
                    AIdeology leverages NVIDIA Isaac Sim—a robotics simulation platform built on Omniverse—to create physically accurate, photorealistic simulation environments. These technologies enable high-fidelity physics simulation, synthetic data generation, and seamless integration with AI training workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>Industry Applications</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Robotic simulation solutions tailored for diverse industry needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <Card key={industry.title} className="hover-lift border-0 shadow-lg animate-fade-in-up" style={{ animationDelay: `${300 + index * 100}ms` }}>
                  <CardHeader>
                    <CardTitle className="text-xl">{industry.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {industry.description}
                    </CardDescription>
                    <ul className="space-y-2">
                      {industry.applications.map((application, appIndex) => (
                        <li key={appIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                          <span className="text-sm">{application}</span>
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

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>Transform Your Robotics Development</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Achieve faster, safer, and more cost-effective robotics development
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={benefit} className="flex items-center p-4 bg-white rounded-lg shadow animate-fade-in-up" style={{ animationDelay: `${300 + index * 100}ms` }}>
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
              Ready to Accelerate Your Robotics?
            </h2>
            <p className="text-xl mb-8 text-gray-300 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Transform your robotics development with advanced simulation and AI training
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
