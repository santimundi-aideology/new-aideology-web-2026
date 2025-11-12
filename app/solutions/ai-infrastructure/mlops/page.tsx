import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, GitBranch, Cog, Monitor, Rocket, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/footer"

export default function MlopsPage() {
  const breadcrumbPath = [
    { name: "Solutions", href: "/#solutions" },
    { name: "AI Infrastructure", href: "/solutions/ai-infrastructure" },
    { name: "MLOps" }
  ];

  return (
    <>
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
      <section className="relative bg-gradient-to-br from-charcoal via-charcoal to-gray-800 text-white py-20">
        <div className="absolute inset-0 point-cloud-bg opacity-10"></div>
        <div className="w-full px-6 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center bg-accent-green/20 text-accent-green px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <GitBranch className="w-4 h-4 mr-2" />
              AI Infrastructure
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <span className="text-accent-green">MLOps</span> Infrastructure & Automation
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              Streamline the entire machine learning lifecycle with robust infrastructure and automation pipelines
            </p>
          </div>
        </div>
      </section>

      {/* MLOps Challenge Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>The MLOps Challenge</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Organizations face significant challenges when moving AI from experimentation to production
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16 max-w-7xl mx-auto">
              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 text-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Cog className="w-6 h-6 text-accent-green" />
                  </div>
                  <CardTitle className="text-lg">Reproducibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Ensuring consistent environments across development and production</CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 text-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Rocket className="w-6 h-6 text-accent-green" />
                  </div>
                  <CardTitle className="text-lg">Scalability</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Managing resources efficiently as AI initiatives grow</CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 text-center animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <GitBranch className="w-6 h-6 text-accent-green" />
                  </div>
                  <CardTitle className="text-lg">Governance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Tracking model lineage, versions, and approvals</CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 text-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Monitor className="w-6 h-6 text-accent-green" />
                  </div>
                  <CardTitle className="text-lg">Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Detecting model drift and performance issues</CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 text-center animate-fade-in-up" style={{ animationDelay: '700ms' }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <ArrowRight className="w-6 h-6 text-accent-green" />
                  </div>
                  <CardTitle className="text-lg">Deployment</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Efficiently moving models from development to production</CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg animate-fade-in-up" style={{ animationDelay: '800ms' }}>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-blue-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">NVIDIA AI Enterprise & Fleet Command</h3>
                  <p className="text-blue-700">
                    AIdeology leverages NVIDIA AI Enterprise—a comprehensive software suite with enterprise-grade AI
                    tools—and NVIDIA Fleet Command for simplified, secure deployment and management of AI applications
                    across distributed infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="mlops-services" className="py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>AIdeology's MLOps Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Comprehensive MLOps solutions for your AI development lifecycle
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <CardHeader>
                  <CardTitle className="text-xl">MLOps Infrastructure Design & Implementation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Foundational infrastructure for MLOps including containerization, orchestration, and CI/CD pipelines
                    optimized for AI workflows.
                  </CardDescription>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Container orchestration platforms</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">AI-optimized CI/CD pipelines</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Infrastructure as Code implementation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <CardHeader>
                  <CardTitle className="text-xl">Model Development Environment</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Collaborative development environments with version control, experiment tracking, and resource
                    management.
                  </CardDescription>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Jupyter Hub and notebook environments</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Experiment tracking and versioning</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Resource allocation and scheduling</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                <CardHeader>
                  <CardTitle className="text-xl">Model Deployment Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Automated pipelines for model deployment across diverse environments with consistent performance and
                    security.
                  </CardDescription>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Multi-environment deployment</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">A/B testing and canary deployments</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Edge deployment capabilities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <CardHeader>
                  <CardTitle className="text-xl">Model Monitoring & Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Comprehensive monitoring solutions that track model performance, detect drift, and enable efficient
                    updates.
                  </CardDescription>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Real-time performance monitoring</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Data and model drift detection</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Automated rollback capabilities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>Benefits of AIdeology's MLOps Solutions</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <ul className="space-y-6">
                  <li className="flex items-start animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                    <CheckCircle className="w-6 h-6 text-accent-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Accelerated Time-to-Production</h3>
                      <p className="text-gray-600">Reduce the time to deploy models from months to days</p>
                    </div>
                  </li>
                  <li className="flex items-start animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                    <CheckCircle className="w-6 h-6 text-accent-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Improved Model Quality</h3>
                      <p className="text-gray-600">
                        Ensure consistent performance through rigorous testing and validation
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                    <CheckCircle className="w-6 h-6 text-accent-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Enhanced Collaboration</h3>
                      <p className="text-gray-600">
                        Enable seamless workflows between data scientists, ML engineers, and IT
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                    <CheckCircle className="w-6 h-6 text-accent-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Governance & Compliance</h3>
                      <p className="text-gray-600">
                        Maintain comprehensive audit trails and ensure regulatory compliance
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative animate-fade-in-up" style={{ animationDelay: '700ms' }}>
                <Image
                  src="/solutions/mlops.webp"
                  alt="MLOps infrastructure and automation"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-accent-green text-charcoal">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>Ready to Transform Your AI Development Lifecycle?</h2>
            <p className="text-xl text-charcoal mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Transform your AI development lifecycle with robust MLOps infrastructure. Contact AIdeology to learn how
              our MLOps solutions can accelerate your AI initiatives and ensure production success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <Button 
                asChild
                size="lg" 
                className="bg-charcoal text-white font-semibold hover:bg-white hover:text-charcoal hover:scale-105 transition-all duration-300 ease-in-out px-8 py-3"
              >
                <Link href="/book-discovery-call?type=consultation">
                  Schedule a Consultation
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
                  Explore More Solutions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl font-bold text-charcoal mb-8 text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>Related AI Infrastructure Services</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/services/ai-infrastructure/ai-data-platform" className="group animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                  <CardHeader>
                    <CardTitle className="group-hover:text-accent-green transition-colors">AI Data Platform</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>High-performance data infrastructure for AI workloads</CardDescription>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/ai-infrastructure/accelerated-computing" className="group animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                  <CardHeader>
                    <CardTitle className="group-hover:text-accent-green transition-colors">
                      Accelerated Computing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>GPU-accelerated infrastructure for demanding workloads</CardDescription>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/ai-infrastructure/virtualization" className="group animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                  <CardHeader>
                    <CardTitle className="group-hover:text-accent-green transition-colors">Virtualization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>Flexible GPU resource utilization through virtualization</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
      
      <Footer />
    </>
  )
}

export const metadata = {
  title: "MLOps Infrastructure & Automation Solutions | AIdeology",
  description:
    "AIdeology designs and implements robust MLOps infrastructure and automation pipelines, leveraging NVIDIA AI Enterprise and Fleet Command™, to streamline the entire machine learning lifecycle from development to production.",
}
