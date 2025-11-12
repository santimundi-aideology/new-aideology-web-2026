import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Database, BarChart3, Zap, Shield, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AiDataPlatformPage() {
  const breadcrumbPath = [
    { name: "Solutions", href: "/#solutions" },
    { name: "AI Consulting", href: "/solutions/ai-consulting" },
    { name: "AI Data Platform" }
  ];

  return (
    <div className="min-h-dvh bg-white">
      {/* Breadcrumb Navigation */}
      <div className="bg-white pt-24 pb-6">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-sm text-gray-500 flex items-center hidden md:flex" aria-label="Breadcrumb">
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
      </div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charcoal via-charcoal to-gray-800 text-white py-24">
        <div className="absolute inset-0 point-cloud-bg opacity-10"></div>
        <div className="w-full relative z-10">
          <div className="w-full text-center px-6 lg:px-12">
            <div className="inline-flex items-center bg-accent-green/20 text-accent-green px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Database className="w-4 h-4 mr-2" />
              AI Consulting
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Strategic <span className="text-accent-green">AI Data Platform</span> Consulting
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              Design and implement AI-ready data platforms that fuel high-performing, reliable AI applications at
              enterprise scale
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent-green text-charcoal font-semibold text-lg px-8 py-4 hover:bg-white hover:text-charcoal hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Start Planning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-charcoal text-lg px-8 py-4 hover:scale-105 transition-all duration-300 ease-in-out"
              >
                View Architecture
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-charcoal mb-2">10x</div>
              <div className="text-gray-600">Faster Data Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-charcoal mb-2">99.9%</div>
              <div className="text-gray-600">Platform Reliability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-charcoal mb-2">50%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-charcoal mb-2">24/7</div>
              <div className="text-gray-600">Data Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-charcoal">The Foundation of AI Success</h2>
                <p className="text-lg mb-6 text-gray-600 leading-relaxed">
                  Your AI initiatives are only as strong as the data platform that powers them. We design and implement
                  comprehensive data architectures that ensure your AI models have access to clean, reliable, and
                  real-time data at the scale and speed your business demands.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-accent-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Enterprise-Scale Architecture</h3>
                      <p className="text-gray-600">
                        Platforms designed to handle petabytes of data with enterprise-grade security
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-accent-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Real-Time Processing</h3>
                      <p className="text-gray-600">
                        Stream processing capabilities for immediate AI model inference and updates
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-accent-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">AI-Optimized Storage</h3>
                      <p className="text-gray-600">
                        Data lakes and warehouses optimized for machine learning workloads
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="AI Data Platform Architecture"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-4">Comprehensive Data Platform Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                End-to-end consulting for AI-ready data infrastructure
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="hover-lift border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Database className="w-8 h-8 text-accent-green" />
                  </div>
                  <CardTitle className="text-xl">Data Architecture</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Design scalable, secure data architectures optimized for AI and machine learning workloads
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-lift border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Zap className="w-8 h-8 text-accent-green" />
                  </div>
                  <CardTitle className="text-xl">Real-Time Processing</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Implement streaming data pipelines for real-time AI inference and continuous model updates
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-lift border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <BarChart3 className="w-8 h-8 text-accent-green" />
                  </div>
                  <CardTitle className="text-xl">Data Governance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Establish comprehensive data governance frameworks for compliance and quality assurance
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-lift border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Shield className="w-8 h-8 text-accent-green" />
                  </div>
                  <CardTitle className="text-xl">Security & Privacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Implement enterprise-grade security measures and privacy controls for sensitive data
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="hover-lift border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Platform Strategy & Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Develop comprehensive data platform strategies aligned with your AI objectives and business goals.
                  </CardDescription>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Architecture assessment</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Technology selection</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Roadmap development</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-lift border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Implementation & Migration</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Execute platform implementation with minimal disruption to existing operations and maximum
                    performance optimization.
                  </CardDescription>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Zero-downtime migration</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Performance tuning</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Team training</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-lift border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Optimization & Scaling</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Continuously optimize platform performance and scale infrastructure to meet growing AI demands.
                  </CardDescription>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Performance monitoring</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Auto-scaling setup</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Cost optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 p-8 rounded-xl mb-16">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-cyan-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-cyan-900 mb-3">Enterprise-Grade Data Technologies</h3>
                  <p className="text-cyan-800 text-lg leading-relaxed">
                    Our data platform solutions leverage leading technologies including Apache Spark, Kafka, Snowflake,
                    Databricks, and cloud-native services from AWS, Azure, and GCP. We ensure your platform is built on
                    proven, scalable technologies that can grow with your AI initiatives.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-4">Build Your AI Data Foundation</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="AI data platform dashboard"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
              <div>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-accent-green font-bold text-lg">1</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-2 text-lg">Strategic Assessment</h3>
                      <p className="text-gray-600">
                        Evaluate your current data landscape and identify opportunities for AI-driven transformation and
                        optimization.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-accent-green font-bold text-lg">2</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-2 text-lg">Architecture Design</h3>
                      <p className="text-gray-600">
                        Design scalable, secure data architectures that support current needs while enabling future AI
                        innovations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-accent-green font-bold text-lg">3</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-2 text-lg">Implementation Excellence</h3>
                      <p className="text-gray-600">
                        Execute platform deployment with proven methodologies that minimize risk and maximize
                        performance outcomes.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-accent-green font-bold text-lg">4</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-2 text-lg">Continuous Optimization</h3>
                      <p className="text-gray-600">
                        Monitor, optimize, and evolve your data platform to ensure peak performance and cost efficiency
                        over time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal text-white">
        <div className="w-full px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your AI-Powered Data Platform?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our expert consultants will help you design, implement, and optimize a data platform that accelerates
            your AI initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent-green text-charcoal font-semibold text-lg px-8 py-4 hover:bg-white hover:text-charcoal hover:scale-105 transition-all duration-300 ease-in-out"
              asChild
            >
              <Link href="/book-discovery-call?type=consultation">
                Discuss Your Platform
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-charcoal text-lg px-8 py-4 hover:scale-105 transition-all duration-300 ease-in-out"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <h3 className="text-3xl font-bold text-charcoal mb-12 text-center">Related AI Consulting Services</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/services/ai-consulting/machine-learning" className="group">
              <Card className="hover-lift h-full border-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="group-hover:text-accent-green transition-colors text-xl">
                    Machine Learning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    End-to-end machine learning solutions from development to deployment
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/ai-infrastructure/ai-data-platform" className="group">
              <Card className="hover-lift h-full border-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="group-hover:text-accent-green transition-colors text-xl">
                    AI Infrastructure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    High-performance infrastructure solutions for AI and data workloads
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/ai-consulting/ai-agents" className="group">
              <Card className="hover-lift h-full border-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="group-hover:text-accent-green transition-colors text-xl">AI Agents</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Autonomous AI systems that can perceive, reason, and act intelligently
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export const metadata = {
  title: "Strategic AI Data Platform Consulting | AIdeology",
  description:
    "AIdeology provides expert consulting for designing, architecting, and implementing AI-ready data platforms, ensuring your data effectively fuels high-performing and reliable AI applications.",
}
