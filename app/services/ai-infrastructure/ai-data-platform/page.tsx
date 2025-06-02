import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Database, Zap, Shield, BarChart3 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AiDataPlatformPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charcoal via-charcoal to-gray-800 text-white py-20">
        <div className="absolute inset-0 point-cloud-bg opacity-10"></div>
        <div className="w-full px-6 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center bg-accent-green/20 text-accent-green px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Database className="w-4 h-4 mr-2" />
              AI Infrastructure
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              AI <span className="text-accent-green">Data Platform</span> Infrastructure
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive data infrastructure that enables efficient management of the entire data lifecycle for AI
              workloads
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

      {/* Data Challenge Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-4">The Data Challenge in AI</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Data is the lifeblood of AI, but managing it effectively presents significant challenges
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="hover-lift text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <BarChart3 className="w-6 h-6 text-accent-green" />
                  </div>
                  <CardTitle>Volume</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>AI training datasets can reach petabyte scale</CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-lift text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Zap className="w-6 h-6 text-accent-green" />
                  </div>
                  <CardTitle>Velocity</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>High-throughput data pipelines needed for efficient model training</CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-lift text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Database className="w-6 h-6 text-accent-green" />
                  </div>
                  <CardTitle>Variety</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Diverse data types require specialized processing and storage</CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-lift text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Shield className="w-6 h-6 text-accent-green" />
                  </div>
                  <CardTitle>Governance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Data must be managed securely and in compliance with regulations</CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-blue-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">NVIDIA AI Data Platform Technologies</h3>
                  <p className="text-blue-700">
                    AIdeology leverages NVIDIA's comprehensive suite of data platform technologies, including RAPIDS for
                    GPU-accelerated data science, DALI for optimized data loading, and GPUDirect Storage for high-speed
                    data access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-4">AIdeology's AI Data Platform Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive data infrastructure solutions for your AI initiatives
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-xl">High-Performance Data Storage</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Storage solutions optimized for AI workloads, including high-throughput parallel file systems and
                    tiered storage architectures.
                  </CardDescription>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Parallel file systems for high throughput</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Object storage for scalability</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Tiered storage for cost optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-xl">Data Processing Infrastructure</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    GPU-accelerated data processing pipelines for ETL, feature engineering, and data augmentation using
                    NVIDIA RAPIDS.
                  </CardDescription>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">GPU-accelerated ETL pipelines</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Feature engineering automation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Data augmentation workflows</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-xl">Data Access and Delivery</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    High-speed data access layers using technologies like NVIDIA GPUDirect Storage for direct data
                    paths.
                  </CardDescription>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">GPUDirect Storage implementation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Low-latency data access</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Optimized data delivery pipelines</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-xl">Data Management and Governance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Robust data management practices including metadata management, data lineage tracking, and
                    governance controls.
                  </CardDescription>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Metadata management systems</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Data lineage tracking</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Compliance and security controls</span>
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
              <h2 className="text-4xl font-bold text-charcoal mb-4">
                Benefits of AIdeology's AI Data Platform Solutions
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-accent-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Accelerated AI Development</h3>
                      <p className="text-gray-600">Reduce data preparation time from weeks to hours</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-accent-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Optimized Resource Utilization</h3>
                      <p className="text-gray-600">Ensure GPUs are never starved for data</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-accent-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Scalable Architecture</h3>
                      <p className="text-gray-600">Support growing data volumes and increasing model complexity</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-accent-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Reduced Time-to-Insight</h3>
                      <p className="text-gray-600">Speed up the entire AI workflow from data to deployment</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <Image
                  src="/data-center.webp"
                  alt="AI data platform infrastructure"
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
      <section className="py-20 bg-charcoal text-white">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Build Your AI Data Foundation?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Build the data foundation for your AI success. Contact AIdeology to learn how our AI data platform
                infrastructure solutions can accelerate your AI initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent-green hover:bg-accent-green/90 text-charcoal font-semibold">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-charcoal"
                >
                  View All Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl font-bold text-charcoal mb-8 text-center">Related AI Infrastructure Services</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/services/ai-infrastructure/networking" className="group">
                <Card className="hover-lift h-full">
                  <CardHeader>
                    <CardTitle className="group-hover:text-accent-green transition-colors">Networking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>High-performance networking for AI and HPC workloads</CardDescription>
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
              <Link href="/services/ai-infrastructure/accelerated-computing" className="group">
                <Card className="hover-lift h-full">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export const metadata = {
  title: "AI Data Platform Infrastructure | AIdeology",
  description:
    "AIdeology designs and implements high-performance data infrastructure for AI workloads, leveraging NVIDIA technologies to enable efficient data processing, storage, and delivery for machine learning and deep learning applications.",
}
