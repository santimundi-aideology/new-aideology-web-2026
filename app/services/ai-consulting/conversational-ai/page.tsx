import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, Mic, Bot, BarChart3, Users, Clock, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ConversationalAiPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Split Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="w-full grid lg:grid-cols-2 min-h-screen">
          {/* Left Content */}
          <div className="bg-gradient-to-br from-charcoal via-charcoal to-gray-800 text-white flex items-center">
            <div className="w-full px-6 lg:px-12 py-20 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="inline-flex items-center bg-accent-green/20 text-accent-green px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MessageSquare className="w-4 h-4 mr-2" />
                AI Consulting
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-accent-green">Conversational AI</span> That Understands
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform customer interactions with intelligent, empathetic AI that understands context, intent, and
                emotion like never before.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">24/7 Availability</div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">99% Accuracy</div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Multi-Language</div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-accent-green text-charcoal font-semibold text-lg px-8 py-4 hover:bg-white hover:text-charcoal hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  Start Conversation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-charcoal text-lg px-8 py-4 hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  See Demo
                </Button>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="bg-gray-50 flex items-center justify-center p-8">
            <div className="relative w-full max-w-lg animate-fade-in-up group" style={{ animationDelay: '300ms' }}>
              <Image
                src="/aideology-robot.webp"
                alt="AIdeology Conversational AI Robot Interface"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl object-contain group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-accent-green text-charcoal px-4 py-2 rounded-lg font-semibold shadow-lg">
                Real-time Processing
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white px-4 py-2 rounded-lg shadow-lg border">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">AI Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <h2 className="text-4xl font-bold text-charcoal mb-4">AI That Speaks Your Language</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our conversational AI doesn't just respond—it understands, empathizes, and delivers personalized
                experiences
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl h-full group-hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">Smart Chatbots</h3>
                  <p className="text-gray-600 mb-4">
                    Context-aware bots that maintain conversation flow and understand complex queries
                  </p>
                </div>
              </div>

              <div className="group animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl h-full group-hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-6">
                    <Mic className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">Voice AI</h3>
                  <p className="text-gray-600 mb-4">
                    Natural speech recognition and synthesis for hands-free interactions
                  </p>
                </div>
              </div>

              <div className="group animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl h-full group-hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-6">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">Customer Service</h3>
                  <p className="text-gray-600 mb-4">
                    Automated support that resolves issues instantly while maintaining human touch
                  </p>
                </div>
              </div>

              <div className="group animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl h-full group-hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-6">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">Analytics</h3>
                  <p className="text-gray-600 mb-4">Deep insights into customer behavior and conversation patterns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="p-12">
                  <h2 className="text-3xl font-bold text-charcoal mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>See It In Action</h2>
                  <p className="text-lg text-gray-600 mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    Experience how our conversational AI handles real customer interactions with intelligence and
                    empathy.
                  </p>

                  <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-accent-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-4 h-4 text-accent-green" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-charcoal mb-1">Instant Response</h3>
                        <p className="text-gray-600">Sub-second response times for real-time conversations</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-accent-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Zap className="w-4 h-4 text-accent-green" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-charcoal mb-1">Context Awareness</h3>
                        <p className="text-gray-600">Remembers conversation history and user preferences</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-accent-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-accent-green" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-charcoal mb-1">Human Handoff</h3>
                        <p className="text-gray-600">Seamless escalation to human agents when needed</p>
                      </div>
                    </div>
                  </div>

                  <Button className="mt-8 bg-accent-green text-charcoal font-semibold hover:bg-charcoal hover:text-white animate-fade-in-up hover:scale-105 transition-all duration-300 ease-in-out" style={{ animationDelay: '400ms' }}>
                    Try Interactive Demo
                  </Button>
                </div>

                <div className="bg-gradient-to-br from-charcoal to-gray-800 p-12 flex items-center animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                  <div className="w-full">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                      <div className="space-y-4">
                        <div className="bg-white/20 rounded-lg p-3">
                          <div className="text-white text-sm">Customer: "I need help with my order"</div>
                        </div>
                        <div className="bg-accent-green/20 rounded-lg p-3">
                          <div className="text-white text-sm">
                            AI: "I'd be happy to help! Can you provide your order number?"
                          </div>
                        </div>
                        <div className="bg-white/20 rounded-lg p-3">
                          <div className="text-white text-sm">Customer: "It's #12345"</div>
                        </div>
                        <div className="bg-accent-green/20 rounded-lg p-3">
                          <div className="text-white text-sm">
                            AI: "Found it! Your order is being prepared and will ship tomorrow."
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-4">Powered by Advanced AI</h2>
              <p className="text-xl text-gray-600">Built on NVIDIA Riva and cutting-edge language models</p>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>NVIDIA Riva Platform</h3>
                  <p className="text-blue-100 mb-6 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                    GPU-accelerated speech AI that delivers real-time processing with exceptional accuracy and natural
                    conversations.
                  </p>
                  <div className="mt-6">
                    <Link href="https://www.nvidia.com/en-us/ai-data-science/products/riva/" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        className="border-accent-purple text-accent-purple hover:bg-accent-purple hover:text-white hover:scale-105 transition-all duration-300 ease-in-out"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                      <div className="text-3xl font-bold mb-2">10ms</div>
                      <div className="text-blue-100">Response Time</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                      <div className="text-3xl font-bold mb-2">99.5%</div>
                      <div className="text-blue-100">Accuracy</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                      <div className="text-3xl font-bold mb-2">50+</div>
                      <div className="text-blue-100">Languages</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                      <div className="text-3xl font-bold mb-2">24/7</div>
                      <div className="text-blue-100">Availability</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal text-white overflow-hidden">
        <div className="w-full px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>Ready to Transform Customer Conversations?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Join industry leaders who've revolutionized their customer experience with intelligent conversational AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-accent-green text-charcoal font-semibold text-lg px-10 py-5 rounded-2xl hover:bg-white hover:text-charcoal hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-charcoal text-lg px-10 py-5 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Explore Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="w-full px-6 lg:px-12">
          <h3 className="text-3xl font-bold text-charcoal mb-12 text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>Related AI Consulting Services</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/services/ai-consulting/generative-ai" className="group animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <Card className="hover-lift h-full border-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="group-hover:text-accent-green transition-colors text-xl">
                    Generative AI
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Create content, enhance creativity, and automate complex tasks with generative AI
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/ai-consulting/ai-agents" className="group animate-fade-in-up" style={{ animationDelay: '300ms' }}>
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
            <Link href="/services/ai-consulting/machine-learning" className="group animate-fade-in-up" style={{ animationDelay: '400ms' }}>
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
  title: "Conversational AI Solutions | AIdeology",
  description:
    "Transform customer interactions with AIdeology's advanced Conversational AI solutions. Leverage NVIDIA Riva and cutting-edge NLP for intelligent, natural language interfaces.",
}
