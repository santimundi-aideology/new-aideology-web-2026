import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Network, Zap, Shield, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function NetworkingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charcoal via-charcoal to-gray-800 text-white py-20">
        <div className="absolute inset-0 point-cloud-bg opacity-10"></div>
        <div className="w-full relative z-10">
          <div className="w-full text-center px-6 lg:px-12">
            <div className="inline-flex items-center bg-accent-green/20 text-accent-green px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Network className="w-4 h-4 mr-2" />
              AI Infrastructure
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              High-Performance <span className="text-accent-green">Networking</span> for AI & HPC
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Eliminate network bottlenecks and accelerate distributed AI training with cutting-edge NVIDIA networking
              solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

      {/* Key Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="text-center mb-16 max-w-7xl">
            <h2 className="text-4xl font-bold text-charcoal mb-4">Why Network Performance Matters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In the era of large-scale AI and HPC, the network is no longer just a conduit—it's a critical component of
              the compute fabric itself
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-7xl">
            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-accent-green" />
                </div>
                <CardTitle>Distributed Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Workloads spread across hundreds or thousands of GPUs and CPUs require ultra-low latency communication
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-accent-green" />
                </div>
                <CardTitle>Massive Data Movement</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Terabytes or petabytes of data need efficient movement between compute nodes and storage systems
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-accent-green" />
                </div>
                <CardTitle>Low-Latency Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Synchronous operations like gradient exchange in AI training require minimal network delay
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg max-w-7xl">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-blue-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">NVIDIA Networking: Engineered for AI & HPC</h3>
                <p className="text-blue-700">
                  NVIDIA offers a comprehensive portfolio of networking solutions designed from the ground up for AI and
                  HPC demands. NVIDIA Quantum InfiniBand provides the highest throughput and lowest latency for
                  GPU-accelerated systems, while NVIDIA Spectrum Ethernet offers best-in-class performance for AI data
                  centers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="text-center mb-16 max-w-7xl">
            <h2 className="text-4xl font-bold text-charcoal mb-4">AIdeology's Networking Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive networking solutions tailored for your AI and HPC workloads
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-7xl">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-xl">Network Architecture & Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  We assess your workload requirements and design tailored network architecture that optimizes for
                  performance, scalability, and cost-effectiveness.
                </CardDescription>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                    <span className="text-sm">InfiniBand, Ethernet, or hybrid approaches</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                    <span className="text-sm">Scalability planning for future growth</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                    <span className="text-sm">Cost-performance optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-xl">NVIDIA Quantum InfiniBand Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Expert deployment and configuration of NVIDIA's InfiniBand solutions for extreme performance GPU
                  clusters.
                </CardDescription>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                    <span className="text-sm">Switches and HCAs configuration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                    <span className="text-sm">Software stack optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                    <span className="text-sm">Performance tuning and validation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-xl">NVIDIA Spectrum Ethernet Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  High-performance Ethernet fabrics using NVIDIA Spectrum switches for AI storage and data center
                  connectivity.
                </CardDescription>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                    <span className="text-sm">AI storage optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                    <span className="text-sm">Enterprise workload support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                    <span className="text-sm">Robust data center connectivity</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-xl">Network Optimization & Tuning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Fine-tune network parameters, routing protocols, and congestion control for maximum application
                  performance.
                </CardDescription>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                    <span className="text-sm">Performance parameter optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                    <span className="text-sm">Routing protocol configuration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                    <span className="text-sm">Network stability assurance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="text-center mb-16 max-w-7xl">
            <h2 className="text-4xl font-bold text-charcoal mb-4">Benefits of AIdeology's Networking Solutions</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl">
            <div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent-green mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Maximized AI/HPC Application Performance</h3>
                    <p className="text-gray-600">
                      Eliminate network bottlenecks to achieve faster training times and quicker results
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent-green mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Increased GPU Efficiency</h3>
                    <p className="text-gray-600">Ensure your valuable GPU resources are fully utilized</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent-green mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Scalability for Future Growth</h3>
                    <p className="text-gray-600">
                      Design networks that scale to support larger clusters and more demanding workloads
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent-green mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Investment Protection</h3>
                    <p className="text-gray-600">
                      Build a future-proof network foundation based on industry-leading technologies
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <Network className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">High-Performance Networking Infrastructure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal text-white">
        <div className="w-full px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Accelerate Your AI Infrastructure?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Build a network that powers your AI and HPC ambitions. Contact AIdeology to learn how our expertise with
            NVIDIA networking technologies can transform your infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent-green hover:bg-accent-green/90 text-charcoal font-semibold">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <h3 className="text-2xl font-bold text-charcoal mb-8 text-center">Related AI Infrastructure Services</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-7xl">
            <Link href="/services/ai-infrastructure/accelerated-computing" className="group">
              <Card className="hover-lift h-full">
                <CardHeader>
                  <CardTitle className="group-hover:text-accent-green transition-colors">
                    Accelerated Computing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>GPU-accelerated infrastructure for demanding AI and HPC workloads</CardDescription>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/ai-infrastructure/ai-data-platform" className="group">
              <Card className="hover-lift h-full">
                <CardHeader>
                  <CardTitle className="group-hover:text-accent-green transition-colors">AI Data Platform</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>High-performance data infrastructure for AI workloads</CardDescription>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/ai-infrastructure/mlops" className="group">
              <Card className="hover-lift h-full">
                <CardHeader>
                  <CardTitle className="group-hover:text-accent-green transition-colors">MLOps</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Infrastructure and automation for the ML lifecycle</CardDescription>
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
  title: "High-Performance Networking for AI & HPC | AIdeology",
  description:
    "AIdeology designs and deploys cutting-edge networking solutions, featuring NVIDIA Quantum InfiniBand and Spectrum Ethernet, to eliminate bottlenecks and accelerate distributed AI training and HPC workloads.",
}
