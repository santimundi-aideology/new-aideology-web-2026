import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Cpu, Zap, Shield, Cloud, Sparkles, Wifi, Database, Activity, BarChart3, Globe, Factory, Monitor, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const EdgeAIPage = () => {
  const breadcrumbPath = [
    { name: "Solutions", href: "/#solutions" },
    { name: "Robotics & Edge AI", href: "/solutions/robotics-edge-ai" },
    { name: "Edge AI" }
  ];

  const hardwareSpecs = [
    {
      category: "NVIDIA Jetson Series",
      devices: [
        { name: "Jetson AGX Orin", performance: "275 TOPS", power: "15-60W", useCase: "Autonomous Machines" },
        { name: "Jetson Orin NX", performance: "100 TOPS", power: "10-25W", useCase: "Industrial IoT" },
        { name: "Jetson Orin Nano", performance: "40 TOPS", power: "5-15W", useCase: "Smart Cameras" }
      ]
    },
    {
      category: "Intel Edge Processors",
      devices: [
        { name: "Movidius VPU", performance: "4 TOPS", power: "1-2W", useCase: "Vision Processing" },
        { name: "OpenVINO Toolkit", performance: "Variable", power: "5-50W", useCase: "Inference Optimization" }
      ]
    }
  ]

  const deploymentModels = [
    {
      title: "Edge-First Architecture",
      description: "AI processing starts at the edge with cloud backup",
      icon: <Cpu className="w-8 h-8 text-accent-green" />,
      benefits: ["Ultra-low latency", "Reduced bandwidth", "Privacy protection"],
      latency: "< 1ms"
    },
    {
      title: "Hybrid Edge-Cloud",
      description: "Intelligent workload distribution between edge and cloud",
      icon: <Cloud className="w-8 h-8 text-accent-green" />,
      benefits: ["Flexible scaling", "Cost optimization", "Fallback reliability"],
      latency: "1-10ms"
    },
    {
      title: "Federated Edge Learning",
      description: "Distributed learning across multiple edge devices",
      icon: <Globe className="w-8 h-8 text-accent-green" />,
      benefits: ["Privacy-preserving ML", "Collective intelligence", "No data centralization"],
      latency: "Variable"
    }
  ]

  const performanceMetrics = [
    { metric: "Inference Speed", value: "< 1ms", description: "Real-time processing capability" },
    { metric: "Model Compression", value: "90%", description: "Size reduction vs cloud models" },
    { metric: "Power Efficiency", value: "10x", description: "Better than traditional computing" },
    { metric: "Bandwidth Reduction", value: "95%", description: "Less data transmission needed" }
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
      {/* Technical Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-charcoal via-gray-900 to-charcoal text-white py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,200,245,.1)_50%,transparent_75%)] bg-[length:60px_60px] animate-pulse"></div>
        </div>

        <div className="w-full relative z-10">
          <div className="w-full text-center px-6 lg:px-12">
            <div className="inline-flex items-center bg-accent-green/20 text-accent-green px-6 py-3 rounded-full text-sm font-medium mb-8 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <Cpu className="w-4 h-4 mr-2" />
              Edge AI • High-Performance Computing
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <span className="text-accent-green">Edge AI</span>
              <span className="block text-white">Infrastructure</span>
            </h1>

            <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              Deploy high-performance AI inference at the network edge with specialized hardware and optimized models for real-time processing
            </p>

            {/* Performance Metrics Grid */}
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              {performanceMetrics.map((metric, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all animate-fade-in-up" style={{ animationDelay: `${500 + index * 100}ms` }}>
                  <div className="text-3xl font-bold text-accent-green mb-2">{metric.value}</div>
                  <div className="text-lg font-medium mb-1">{metric.metric}</div>
                  <div className="text-sm text-gray-400">{metric.description}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '900ms' }}>
              <Button
                size="lg"
                className="bg-accent-green text-charcoal font-semibold text-lg px-10 py-5 rounded-2xl hover:bg-white hover:text-charcoal hover:scale-105 transition-all duration-300 ease-in-out"
                asChild
              >
                <Link href="#consultation">
                  Configure Edge AI
                  <Cpu className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-charcoal text-lg px-10 py-5 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 ease-in-out"
                asChild
              >
                <Link href="#hardware-specs">View Hardware Specs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Specifications Section */}
      <section id="hardware-specs" className="py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                Edge AI Hardware Portfolio
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Specialized hardware platforms optimized for edge AI inference and training
              </p>
            </div>

            <div className="space-y-12">
              {hardwareSpecs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="animate-fade-in-up" style={{ animationDelay: `${300 + categoryIndex * 150}ms` }}>
                  <h3 className="text-2xl font-bold text-charcoal mb-6">{category.category}</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.devices.map((device, deviceIndex) => (
                      <Card key={deviceIndex} className="hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <CardTitle className="text-lg">{device.name}</CardTitle>
                            <Badge variant="outline" className="text-accent-green border-accent-green">
                              {device.performance}
                            </Badge>
                          </div>
                          <CardDescription>{device.useCase}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600">AI Performance:</span>
                              <span className="text-sm font-medium">{device.performance}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600">Power Consumption:</span>
                              <span className="text-sm font-medium">{device.power}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600">Primary Use Case:</span>
                              <span className="text-sm font-medium">{device.useCase}</span>
                            </div>
                          </div>
                          <Button className="w-full mt-4" variant="outline">
                            Technical Specs
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Models Section */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                Edge AI Deployment Models
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Choose the optimal deployment strategy for your edge AI requirements
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {deploymentModels.map((model, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${300 + index * 150}ms` }}>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-accent-green/10 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                      {model.icon}
                    </div>
                    <CardTitle className="text-xl">{model.title}</CardTitle>
                    <CardDescription>{model.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-accent-green">{model.latency}</div>
                        <div className="text-sm text-gray-600">Typical Latency</div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Key Benefits:</h4>
                        <ul className="space-y-1">
                          {model.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm">
                              <div className="w-2 h-2 bg-accent-green rounded-full mr-2"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className="w-full" variant="outline">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications with Technical Focus */}
      <section className="py-20 bg-charcoal text-white">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                Technical Implementation Examples
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Real-world edge AI deployments with technical specifications
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <div className="flex items-center mb-6">
                  <Factory className="w-8 h-8 text-accent-green mr-3" />
                  <h3 className="text-2xl font-bold">Smart Factory Vision</h3>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-400">Hardware:</div>
                      <div>NVIDIA Jetson AGX Orin</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Performance:</div>
                      <div>275 TOPS AI</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Inference Time:</div>
                      <div>&lt; 5ms per frame</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Camera Input:</div>
                      <div>8x 4K cameras</div>
                    </div>
                  </div>
                  <p className="text-gray-300">Real-time quality inspection with 99.9% accuracy on production lines</p>
                </div>
              </div>

              <div className="bg-gray-800 rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <div className="flex items-center mb-6">
                  <Monitor className="w-8 h-8 text-accent-green mr-3" />
                  <h3 className="text-2xl font-bold">Autonomous Vehicle Perception</h3>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-400">Hardware:</div>
                      <div>NVIDIA Drive AGX</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Performance:</div>
                      <div>1000+ TOPS</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Processing:</div>
                      <div>360° perception</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Latency:</div>
                      <div>&lt; 10ms decision time</div>
                    </div>
                  </div>
                  <p className="text-gray-300">Multi-sensor fusion for safe autonomous navigation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="consultation" className="py-20 bg-accent-green text-charcoal">
        <div className="w-full px-6 lg:px-12 text-center">
          <h2 className="text-5xl font-bold mb-6 text-charcoal animate-fade-in-up" style={{ animationDelay: '100ms' }}>Ready to See the Difference?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-charcoal animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Let AIdeology help you implement edge AI solutions that transform how you process and understand your data in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Button
              size="lg"
              className="bg-charcoal text-white hover:bg-white hover:text-charcoal font-semibold text-lg px-10 py-5 rounded-2xl hover:scale-105 transition-all duration-300 ease-in-out"
              asChild
            >
              <Link href="/book-discovery-call?type=consultation">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white text-lg px-10 py-5 rounded-2xl hover:scale-105 transition-all duration-300 ease-in-out"
              asChild
            >
              <Link href="/#solutions">
                Explore All Solutions
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EdgeAIPage
