import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, FileText, ImageIcon, Video, Code, Palette, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function GenerativeAiPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Animated Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50"></div>
        </div>

        <div className="w-full relative z-10">
          <div className="w-full text-center px-6 lg:px-12">
            <div className="inline-flex items-center bg-accent-green/20 text-accent-green px-6 py-3 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              AI Consulting • Generative AI
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              Create the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-green to-blue-400">
                Impossible
              </span>
            </h1>

            <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              Harness the creative power of generative AI to produce content, solve problems, and innovate at the speed
              of imagination
            </p>

            {/* Floating Action Cards */}
            <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all cursor-pointer">
                <FileText className="w-8 h-8 text-accent-green mx-auto mb-2" />
                <div className="text-sm font-medium">Text Generation</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all cursor-pointer">
                <ImageIcon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-sm font-medium">Image Creation</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all cursor-pointer">
                <Video className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-sm font-medium">Video & Audio</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all cursor-pointer">
                <Code className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-sm font-medium">Code Generation</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-accent-green hover:bg-accent-green/90 text-charcoal font-semibold text-lg px-10 py-5 rounded-2xl"
              >
                Start Creating
                <Sparkles className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-purple-900 text-lg px-10 py-5 rounded-2xl backdrop-blur-sm"
              >
                Explore Examples
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Showcase */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-charcoal mb-6">Unleash Creative Potential</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From concept to creation, our generative AI solutions transform ideas into reality across every medium
              </p>
            </div>

            {/* Masonry-style Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Large Feature Card */}
              <div className="md:col-span-2 md:row-span-2">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-12 text-white h-full flex flex-col justify-between min-h-[500px]">
                  <div>
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8">
                      <Palette className="w-8 h-8" />
                    </div>
                    <h3 className="text-4xl font-bold mb-6">Multi-Modal Creation</h3>
                    <p className="text-xl text-purple-100 mb-8">
                      Generate text, images, audio, and video content with unified AI models that understand context
                      across all mediums.
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                      See Examples
                    </Button>
                    <div className="text-purple-200">→ 10x faster creation</div>
                  </div>
                </div>
              </div>

              {/* Smaller Cards */}
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-xl border">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-4">Enterprise Content</h3>
                  <p className="text-gray-600 mb-6">
                    Generate reports, documentation, and marketing materials at scale
                  </p>
                  <div className="text-blue-600 font-semibold">Learn More →</div>
                </div>

                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Real-time Generation</h3>
                  <p className="text-green-100 mb-6">Instant content creation with sub-second response times</p>
                  <div className="text-green-200 font-semibold">Try Now →</div>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <ImageIcon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">Visual Content</h3>
                <p className="text-gray-600 mb-6">Create stunning visuals from simple text descriptions</p>
                <div className="text-orange-600 font-semibold">Explore →</div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <Code className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">Code Generation</h3>
                <p className="text-gray-600 mb-6">Automate software development with AI-generated code</p>
                <div className="text-purple-600 font-semibold">Start Coding →</div>
              </div>

              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Video className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Media Production</h3>
                <p className="text-indigo-100 mb-6">Generate videos, voiceovers, and multimedia content</p>
                <div className="text-indigo-200 font-semibold">Create Media →</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-4">From Idea to Reality</h2>
              <p className="text-xl text-gray-600">Our proven process for implementing generative AI solutions</p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-green to-blue-500 rounded-full"></div>

              <div className="space-y-16">
                {/* Step 1 */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-12 text-right">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border">
                      <h3 className="text-2xl font-bold text-charcoal mb-4">Discovery & Strategy</h3>
                      <p className="text-gray-600">
                        Identify use cases, assess data readiness, and develop a comprehensive generative AI strategy
                        aligned with your business goals.
                      </p>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center relative z-10">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <div className="w-1/2 pl-12"></div>
                </div>

                {/* Step 2 */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-12"></div>
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center relative z-10">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <div className="w-1/2 pl-12">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border">
                      <h3 className="text-2xl font-bold text-charcoal mb-4">Model Selection & Training</h3>
                      <p className="text-gray-600">
                        Choose optimal foundation models and fine-tune them on your data for brand-specific,
                        high-quality outputs.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-12 text-right">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border">
                      <h3 className="text-2xl font-bold text-charcoal mb-4">Integration & Deployment</h3>
                      <p className="text-gray-600">
                        Seamlessly integrate generative AI into your existing workflows with robust APIs and user
                        interfaces.
                      </p>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center relative z-10">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <div className="w-1/2 pl-12"></div>
                </div>

                {/* Step 4 */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-12"></div>
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center relative z-10">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <div className="w-1/2 pl-12">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border">
                      <h3 className="text-2xl font-bold text-charcoal mb-4">Optimization & Scaling</h3>
                      <p className="text-gray-600">
                        Continuously improve model performance and scale your generative AI capabilities across the
                        organization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Spotlight */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center bg-accent-green/20 text-accent-green px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Zap className="w-4 h-4 mr-2" />
                  Powered by NVIDIA NeMo
                </div>
                <h2 className="text-4xl font-bold mb-6">Enterprise-Grade AI Foundation</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Built on NVIDIA NeMo framework and leading foundation models, our solutions deliver unmatched
                  performance, scalability, and reliability for enterprise applications.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-3xl font-bold text-accent-green mb-2">100B+</div>
                    <div className="text-gray-400">Parameters</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent-green mb-2">50ms</div>
                    <div className="text-gray-400">Response Time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent-green mb-2">99.9%</div>
                    <div className="text-gray-400">Uptime</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent-green mb-2">24/7</div>
                    <div className="text-gray-400">Support</div>
                  </div>
                </div>

                <Button className="bg-accent-green hover:bg-accent-green/90 text-charcoal font-semibold">
                  Explore Technology
                </Button>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-accent-green/20 to-blue-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="AI Technology Stack"
                    width={500}
                    height={400}
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-green to-emerald-600 text-white">
        <div className="w-full px-6 lg:px-12 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Create the Future?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            Join innovative companies using generative AI to transform their creative processes and business outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-accent-green hover:bg-gray-100 font-semibold text-lg px-10 py-5 rounded-2xl"
            >
              Start Your AI Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-accent-green text-lg px-10 py-5 rounded-2xl"
            >
              Explore Use Cases
            </Button>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <h3 className="text-3xl font-bold text-charcoal mb-12 text-center">Related AI Consulting Services</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/services/ai-consulting/conversational-ai" className="group">
              <Card className="hover-lift h-full border-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="group-hover:text-accent-green transition-colors text-xl">
                    Conversational AI
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Transform customer interactions with intelligent, natural language interfaces
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
          </div>
        </div>
      </section>
    </div>
  )
}

export const metadata = {
  title: "Generative AI Solutions | AIdeology",
  description:
    "Unlock the creative potential of AI with AIdeology's Generative AI solutions. Leverage NVIDIA NeMo and cutting-edge models to create content, automate workflows, and accelerate innovation.",
}
