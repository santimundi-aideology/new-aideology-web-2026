import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, FileText, ImageIcon, Video, Code, Palette, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function GenerativeAiPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Animated Hero Section */}
      <section className="relative overflow-hidden bg-charcoal text-white py-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-10"></div>
          <div className="absolute inset-0 bg-charcoal/50"></div>
        </div>

        <div className="w-full relative z-10">
          <div className="w-full text-center px-6 lg:px-12 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="inline-flex items-center bg-accent-green/20 text-accent-green px-6 py-3 rounded-full text-sm font-medium mb-8 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <Sparkles className="w-4 h-4 mr-2" />
              AI Consulting • Generative AI
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              Create the
              <span className="block text-accent-green">
                Impossible
              </span>
            </h1>

            <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              Harness the creative power of generative AI to produce content, solve problems, and innovate at the speed
              of imagination
            </p>

            {/* Floating Action Cards */}
            <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all cursor-pointer animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <FileText className="w-8 h-8 text-accent-green mx-auto mb-2" />
                <div className="text-sm font-medium">Text Generation</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all cursor-pointer animate-fade-in-up" style={{ animationDelay: '700ms' }}>
                <ImageIcon className="w-8 h-8 text-accent-green mx-auto mb-2" />
                <div className="text-sm font-medium">Image Creation</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all cursor-pointer animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                <Video className="w-8 h-8 text-accent-green mx-auto mb-2" />
                <div className="text-sm font-medium">Video & Audio</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all cursor-pointer animate-fade-in-up" style={{ animationDelay: '900ms' }}>
                <Code className="w-8 h-8 text-accent-green mx-auto mb-2" />
                <div className="text-sm font-medium">Code Generation</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
              <Button
                size="lg"
                className="bg-accent-green text-charcoal font-semibold text-lg px-10 py-5 rounded-2xl hover:bg-white hover:text-charcoal hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Start Creating
                <Sparkles className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-charcoal text-lg px-10 py-5 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 ease-in-out"
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
            <div className="text-center mb-16 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <h2 className="text-5xl font-bold text-charcoal mb-6">Unleash Creative Potential</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From concept to creation, our generative AI solutions transform ideas into reality across every medium
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1: Multi-Modal Creation */}
              <div className="animate-fade-in-up hover:scale-105 transition-all duration-300" style={{ animationDelay: '200ms' }}>
                <div className="bg-charcoal rounded-3xl p-8 text-white h-full flex flex-col">
                  <div className="w-12 h-12 bg-accent-green/20 rounded-xl flex items-center justify-center mb-6">
                    <Palette className="w-6 h-6 text-accent-green" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Multi-Modal Creation</h3>
                  <p className="text-gray-300 mb-6 flex-grow">
                    Generate text, images, audio, and video with unified AI models that understand context across all mediums.
                  </p>
                  <Button variant="outline" className="border-accent-green text-accent-green w-full hover:bg-accent-green hover:text-charcoal transition-all duration-300">
                    See Examples
                  </Button>
                </div>
              </div>

              {/* Card 2: Enterprise Content */}
              <div className="animate-fade-in-up hover:scale-105 transition-all duration-300" style={{ animationDelay: '300ms' }}>
                <div className="bg-white rounded-3xl p-8 shadow-xl border h-full flex flex-col">
                  <div className="w-12 h-12 bg-accent-green/10 rounded-xl flex items-center justify-center mb-6">
                    <FileText className="w-6 h-6 text-accent-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-4">Enterprise Content</h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Generate reports, documentation, and marketing materials at scale.
                  </p>
                  <Button variant="link" className="text-accent-green p-0">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </div>
              </div>

              {/* Card 3: Real-time Generation */}
              <div className="animate-fade-in-up hover:scale-105 transition-all duration-300" style={{ animationDelay: '400ms' }}>
                <div className="bg-white rounded-3xl p-8 shadow-xl border h-full flex flex-col">
                  <div className="w-12 h-12 bg-accent-green/10 rounded-xl flex items-center justify-center mb-6">
                    <Zap className="w-6 h-6 text-accent-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-4">Real-time Generation</h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Instant content creation with sub-second response times for dynamic applications.
                  </p>
                  <Button variant="link" className="text-accent-green p-0">Try Now <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </div>
              </div>

              {/* Card 4: Visual Content */}
              <div className="animate-fade-in-up hover:scale-105 transition-all duration-300" style={{ animationDelay: '500ms' }}>
                <div className="bg-white rounded-3xl p-8 shadow-xl border h-full flex flex-col">
                  <div className="w-12 h-12 bg-accent-green/10 rounded-xl flex items-center justify-center mb-6">
                    <ImageIcon className="w-6 h-6 text-accent-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-4">Visual Content</h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Create stunning, high-resolution images and visual designs from simple text descriptions.
                  </p>
                  <Button variant="link" className="text-accent-green p-0">Explore <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </div>
              </div>

              {/* Card 5: Code Generation */}
              <div className="animate-fade-in-up hover:scale-105 transition-all duration-300" style={{ animationDelay: '600ms' }}>
                <div className="bg-white rounded-3xl p-8 shadow-xl border h-full flex flex-col">
                  <div className="w-12 h-12 bg-accent-green/10 rounded-xl flex items-center justify-center mb-6">
                    <Code className="w-6 h-6 text-accent-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-4">Code Generation</h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Automate software development tasks by generating clean, efficient code in multiple languages.
                  </p>
                  <Button variant="link" className="text-accent-green p-0">Start Coding <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </div>
              </div>

              {/* Card 6: Media Production */}
              <div className="animate-fade-in-up hover:scale-105 transition-all duration-300" style={{ animationDelay: '700ms' }}>
                <div className="bg-charcoal rounded-3xl p-8 text-white h-full flex flex-col">
                  <div className="w-12 h-12 bg-accent-green/20 rounded-xl flex items-center justify-center mb-6">
                    <Video className="w-6 h-6 text-accent-green" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Media Production</h3>
                  <p className="text-gray-300 mb-6 flex-grow">
                    Generate engaging videos, realistic voiceovers, and complete multimedia content effortlessly.
                  </p>
                  <Button variant="outline" className="border-accent-green text-accent-green w-full hover:bg-accent-green hover:text-charcoal transition-all duration-300">
                    Create Media
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <h2 className="text-4xl font-bold text-charcoal mb-4">From Idea to Reality</h2>
              <p className="text-xl text-gray-600">Our proven process for implementing generative AI solutions</p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent-green rounded-full animate-fade-in-up" style={{ animationDelay: '200ms' }}></div>

              <div className="space-y-16">
                {/* Step 1 */}
                <div className="flex items-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
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
                <div className="flex items-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                  <div className="w-1/2 pr-12"></div>
                  <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center relative z-10">
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
                <div className="flex items-center animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                  <div className="w-1/2 pr-12 text-right">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border">
                      <h3 className="text-2xl font-bold text-charcoal mb-4">Integration & Deployment</h3>
                      <p className="text-gray-600">
                        Seamlessly integrate generative AI into your existing workflows with robust APIs and user
                        interfaces.
                      </p>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center relative z-10">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <div className="w-1/2 pl-12"></div>
                </div>

                {/* Step 4 */}
                <div className="flex items-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                  <div className="w-1/2 pr-12"></div>
                  <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center relative z-10">
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

      {/* Enterprise-Grade AI Foundation (New section based on AI Agents page structure) */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-8 rounded-xl mb-16 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Zap className="h-8 w-8 text-green-600" /> {/* Changed icon to Zap for more general tech feel */}
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-green-900 mb-3">Advanced AI Architecture</h3>
                  <p className="text-green-800 text-lg leading-relaxed">
                    Our solutions are built on cutting-edge frameworks and custom neural architectures. They leverage advanced model training, fine-tuning capabilities, and efficient inference to deliver robust and scalable generative AI.
                  </p>
                </div>
              </div>
            </div>

            {/* This div wraps the badge and the main title of the section */}
            <div className="text-center mb-16"> {/* Removed animation from this wrapper */}
              <div className="inline-flex items-center bg-accent-green text-charcoal px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <Zap className="w-4 h-4 mr-2" />
                Powered by NVIDIA NeMo
              </div>
              <h2 className="text-4xl font-bold text-charcoal mb-4 animate-fade-in-up" style={{ animationDelay: '250ms' }}> {/* Added animation to H2 */}
                Enterprise-Grade AI Foundation
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <div className="space-y-8">
                  <div className="flex items-start animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                    <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-accent-green font-bold text-lg">1</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-2 text-lg">Powerful Model Customization</h3>
                      <p className="text-gray-600">
                        Fine-tune state-of-the-art foundation models on your proprietary data for highly specialized and accurate generative outputs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                    <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-accent-green font-bold text-lg">2</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-2 text-lg">Scalable & Efficient Inference</h3>
                      <p className="text-gray-600">
                        Deploy generative models that scale with your needs, ensuring high throughput and low latency for real-time applications.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                    <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-accent-green font-bold text-lg">3</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-2 text-lg">Robust MLOps Integration</h3>
                      <p className="text-gray-600">
                        Benefit from enterprise-grade MLOps for model versioning, monitoring, and continuous improvement of your generative AI solutions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start animate-fade-in-up" style={{ animationDelay: '700ms' }}>
                    <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-accent-green font-bold text-lg">4</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-2 text-lg">Responsible AI Practices</h3>
                      <p className="text-gray-600">
                        Implement generative AI with a focus on ethical considerations, data privacy, fairness, and transparency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Image Column - Added 'group' for hover effect */}
              <div className="relative animate-fade-in-up group" style={{ animationDelay: '300ms' }}>
                <Image
                  src="/nemo-diagram.webp"
                  alt="NVIDIA NeMo Framework for Generative AI"
                  width={1200} // Adjusted width for potentially larger display
                  height={900} // Adjusted height for potentially larger display
                  className="rounded-xl shadow-2xl object-contain transition-transform duration-300 ease-in-out group-hover:scale-105" // Added hover effect & object-contain
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent-green text-charcoal">
        <div className="w-full px-6 lg:px-12 text-center">
          <h2 className="text-5xl font-bold mb-6 text-charcoal">Ready to Create the Future?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-charcoal">
            Join innovative companies using generative AI to transform their creative processes and business outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-charcoal text-white hover:bg-white hover:text-charcoal font-semibold text-lg px-10 py-5 rounded-2xl hover:scale-105 transition-all duration-300 ease-in-out"
              asChild
            >
              <Link href="/book-discovery-call">
                Start Your AI Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white text-lg px-10 py-5 rounded-2xl hover:scale-105 transition-all duration-300 ease-in-out"
              asChild
            >
              <Link href="/solutions">
                Explore Use Cases
              </Link>
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
