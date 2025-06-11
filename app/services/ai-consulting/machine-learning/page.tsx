import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Brain, TrendingUp, Target, Cog } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MachineLearningPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charcoal via-charcoal to-gray-800 text-white py-24">
        <div className="absolute inset-0 point-cloud-bg opacity-10"></div>
        <div className="w-full relative z-10">
          <div className="w-full text-center px-6 lg:px-12">
            <div className="inline-flex items-center bg-accent-green/20 text-accent-green px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI Consulting
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-accent-green">Machine Learning</span> Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              End-to-end machine learning solutions from model development and training to deployment and optimization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent-green text-charcoal font-semibold text-lg px-8 py-4 hover:bg-white hover:text-charcoal hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Build ML Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
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
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-charcoal mb-2">95%</div>
              <div className="text-gray-600">Model Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-charcoal mb-2">80%</div>
              <div className="text-gray-600">Faster Deployment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-charcoal mb-2">100+</div>
              <div className="text-gray-600">Models Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-charcoal mb-2">24/7</div>
              <div className="text-gray-600">Model Monitoring</div>
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
                <h2 className="text-4xl font-bold mb-6 text-charcoal">Enterprise Machine Learning Excellence</h2>
                <p className="text-lg mb-6 text-gray-600 leading-relaxed">
                  Transform your business with machine learning solutions that deliver measurable results. From
                  predictive analytics and recommendation systems to computer vision and natural language processing, we
                  build ML solutions that solve real business problems and drive competitive advantage.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-accent-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Custom Model Development</h3>
                      <p className="text-gray-600">
                        Tailored ML models designed for your specific business requirements and data
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-accent-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Production-Ready Deployment</h3>
                      <p className="text-gray-600">
                        Scalable, reliable deployment with monitoring and automated retraining
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-accent-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Continuous Optimization</h3>
                      <p className="text-gray-600">Ongoing model improvement and performance optimization</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <Image
                  src="/solutions/machine_learning.webp"
                  alt="Machine Learning Development"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-4">Machine Learning Capabilities</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive ML solutions for every business challenge
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="hover-lift border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <TrendingUp className="w-8 h-8 text-accent-green" />
                  </div>
                  <CardTitle className="text-xl">Predictive Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Forecast trends, demand, and outcomes with advanced predictive modeling techniques
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-lift border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Target className="w-8 h-8 text-accent-green" />
                  </div>
                  <CardTitle className="text-xl">Recommendation Systems</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Personalized recommendations that drive engagement and increase revenue
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-lift border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Brain className="w-8 h-8 text-accent-green" />
                  </div>
                  <CardTitle className="text-xl">Computer Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Image and video analysis for quality control, security, and automation
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-lift border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Cog className="w-8 h-8 text-accent-green" />
                  </div>
                  <CardTitle className="text-xl">Process Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Optimize operations, supply chains, and resource allocation with ML insights
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="hover-lift border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Model Development & Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Build custom machine learning models using state-of-the-art algorithms and techniques tailored to
                    your specific use case.
                  </CardDescription>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Algorithm selection</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Feature engineering</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Hyperparameter tuning</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-lift border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">MLOps & Deployment</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Deploy models to production with robust MLOps practices including monitoring, versioning, and
                    automated retraining.
                  </CardDescription>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">CI/CD pipelines</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Model monitoring</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">A/B testing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-lift border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Data Science Consulting</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Strategic guidance on data science initiatives, from problem definition to solution architecture and
                    team building.
                  </CardDescription>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Use case identification</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">ROI assessment</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Team enablement</span>
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
            <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 p-8 rounded-xl mb-16">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-orange-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-orange-900 mb-3">NVIDIA-Accelerated ML Platform</h3>
                  <p className="text-orange-800 text-lg leading-relaxed">
                    Our machine learning solutions leverage NVIDIA's accelerated computing platform, including RAPIDS
                    for GPU-accelerated data science, cuML for machine learning, and TensorRT for optimized inference.
                    This enables dramatically faster training and inference compared to traditional CPU-based
                    approaches.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-4">Accelerate Your ML Journey</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <Image
                  src="/ml-cycle.webp"
                  alt="Machine learning performance dashboard"
                  width={720}
                  height={480}
                  className="group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
              <div>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-accent-green font-bold text-lg">1</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-2 text-lg">Problem Definition</h3>
                      <p className="text-gray-600">
                        Identify high-impact ML use cases aligned with your business objectives and available data
                        assets.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-accent-green font-bold text-lg">2</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-2 text-lg">Model Development</h3>
                      <p className="text-gray-600">
                        Build and train custom models using advanced algorithms and GPU-accelerated frameworks for
                        optimal performance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-accent-green font-bold text-lg">3</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-2 text-lg">Production Deployment</h3>
                      <p className="text-gray-600">
                        Deploy models to production with robust monitoring, versioning, and automated retraining
                        capabilities.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-accent-green font-bold text-lg">4</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-2 text-lg">Continuous Improvement</h3>
                      <p className="text-gray-600">
                        Monitor model performance and continuously optimize for accuracy, efficiency, and business
                        impact.
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
          <h2 className="text-4xl font-bold mb-6">Ready to Leverage Machine Learning?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Partner with AIdeology to build machine learning solutions that drive innovation and deliver tangible
            business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent-green text-charcoal font-semibold text-lg px-8 py-4 hover:bg-white hover:text-charcoal hover:scale-105 transition-all duration-300 ease-in-out"
              asChild
            >
              <Link href="/book-discovery-call?type=consultation">
                Discuss Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-charcoal text-lg px-8 py-4 hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <h3 className="text-3xl font-bold text-charcoal mb-12 text-center">Related AI Consulting Services</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/services/ai-consulting/ai-data-platform" className="group">
              <Card className="hover-lift h-full border-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="group-hover:text-accent-green transition-colors text-xl">
                    AI Data Platform
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Strategic data platform consulting for AI-ready infrastructure
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/ai-infrastructure/mlops" className="group">
              <Card className="hover-lift h-full border-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="group-hover:text-accent-green transition-colors text-xl">
                    MLOps Infrastructure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Infrastructure and automation for the complete ML lifecycle
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
  title: "Machine Learning Solutions & Consulting | AIdeology",
  description:
    "AIdeology delivers end-to-end machine learning solutions, from model development and training to deployment and optimization, leveraging NVIDIA's accelerated computing and AI software.",
}
