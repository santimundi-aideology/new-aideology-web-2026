import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Bot, Brain, Zap, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AiAgentsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charcoal via-charcoal to-gray-800 text-white py-24">
        <div className="absolute inset-0 point-cloud  -bg opacity-10"></div>
        <div className="w-full relative z-10">
          <div className="w-full text-center px-6 lg:px-12">
            <div className="inline-flex items-center bg-accent-green/20 text-accent-green px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <Bot className="w-4 h-4 mr-2" />
              AI Consulting
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <span className="text-accent-green">AI Agents</span> & Autonomous Systems
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              Deploy intelligent AI agents that can perceive, reason, and act autonomously to solve complex business
              challenges
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <Button
                size="lg"
                className="bg-accent-green text-charcoal font-semibold text-lg px-8 py-4 hover:bg-white hover:text-charcoal hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Deploy AI Agents
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-charcoal text-lg px-8 py-4 hover:scale-105 transition-all duration-300 ease-in-out"
              >
                See Capabilities
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="text-3xl md:text-4xl font-bold text-charcoal mb-2">90%</div>
              <div className="text-gray-600">Task Automation</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="text-3xl md:text-4xl font-bold text-charcoal mb-2">24/7</div>
              <div className="text-gray-600">Operation</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="text-3xl md:text-4xl font-bold text-charcoal mb-2">5x</div>
              <div className="text-gray-600">Faster Decisions</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="text-3xl md:text-4xl font-bold text-charcoal mb-2">99%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <h2 className="text-4xl font-bold mb-6 text-charcoal">The Future of Autonomous Intelligence</h2>
                <p className="text-lg mb-6 text-gray-600 leading-relaxed">
                  AI agents represent the next evolution in artificial intelligence - autonomous systems that can
                  perceive their environment, make intelligent decisions, and take actions to achieve specific goals.
                  Our AI agents work continuously, learning and adapting to optimize performance and outcomes.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                    <CheckCircle className="w-6 h-6 text-accent-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Autonomous Decision Making</h3>
                      <p className="text-gray-600">
                        Make complex decisions without human intervention using advanced reasoning
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                    <CheckCircle className="w-6 h-6 text-accent-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Multi-Agent Coordination</h3>
                      <p className="text-gray-600">
                        Deploy teams of AI agents that collaborate to solve complex problems
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                    <CheckCircle className="w-6 h-6 text-accent-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Continuous Learning</h3>
                      <p className="text-gray-600">Agents that improve performance through experience and feedback</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <Image
                  src="/agent-web.webp"
                  alt="Conceptual visualization of AI agents interacting with data and systems"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-2xl object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>AI Agent Capabilities</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Comprehensive autonomous systems for every business challenge
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Brain className="w-8 h-8 text-accent-green" />
                  </div>
                  <CardTitle className="text-xl">Reasoning Agents</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Advanced problem-solving agents that can analyze complex scenarios and make optimal decisions
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Zap className="w-8 h-8 text-accent-green" />
                  </div>
                  <CardTitle className="text-xl">Action Agents</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Agents that can execute tasks, interact with systems, and perform actions in digital environments
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Target className="w-8 h-8 text-accent-green" />
                  </div>
                  <CardTitle className="text-xl">Goal-Oriented</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Agents designed to achieve specific objectives through strategic planning and execution
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Bot className="w-8 h-8 text-accent-green" />
                  </div>
                  <CardTitle className="text-xl">Collaborative</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Multi-agent systems that work together to solve complex, multi-faceted challenges
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg animate-fade-in-up" style={{ animationDelay: '700ms' }}>
                <CardHeader>
                  <CardTitle className="text-xl">Business Process Agents</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Deploy AI agents that can handle end-to-end business processes, from data analysis to decision
                    execution and reporting.
                  </CardDescription>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Workflow automation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Exception handling</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Performance optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                <CardHeader>
                  <CardTitle className="text-xl">Customer Service Agents</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Intelligent agents that can handle customer inquiries, resolve issues, and escalate complex cases
                    with human-like understanding.
                  </CardDescription>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Multi-channel support</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Sentiment analysis</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Personalized responses</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg animate-fade-in-up" style={{ animationDelay: '900ms' }}>
                <CardHeader>
                  <CardTitle className="text-xl">Research & Analysis Agents</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Agents that can conduct research, analyze data, generate insights, and produce comprehensive reports
                    autonomously.
                  </CardDescription>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Data mining</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Pattern recognition</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Report generation</span>
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
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-8 rounded-xl mb-16 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="flex items-start">
                <div className="flex-shrink-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <div className="ml-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                  <h3 className="text-2xl font-bold text-green-900 mb-3">Advanced AI Agent Architecture</h3>
                  <p className="text-green-800 text-lg leading-relaxed">
                    Our AI agents are built using cutting-edge frameworks including LangChain, AutoGPT, and custom
                    neural architectures. They leverage reinforcement learning, multi-agent systems, and advanced
                    reasoning capabilities to deliver autonomous intelligence that adapts and improves over time.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>Transform Operations with AI Agents</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative group animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                <Image
                  src="/solutions/ai_agent.webp"
                  alt="AI agent operations dashboard"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <div className="space-y-8">
                  <div className="flex items-start animate-fade-in-up" style={{ animationDelay: '700ms' }}>
                    <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-accent-green font-bold text-lg">1</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-2 text-lg">Autonomous Operation</h3>
                      <p className="text-gray-600">
                        Deploy agents that work 24/7 without supervision, handling complex tasks and making intelligent
                        decisions in real-time.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                    <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-accent-green font-bold text-lg">2</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-2 text-lg">Scalable Intelligence</h3>
                      <p className="text-gray-600">
                        Scale your operations with AI agents that can handle increasing workloads while maintaining
                        consistent quality and performance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start animate-fade-in-up" style={{ animationDelay: '900ms' }}>
                    <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-accent-green font-bold text-lg">3</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-2 text-lg">Adaptive Learning</h3>
                      <p className="text-gray-600">
                        Agents that continuously learn from interactions and outcomes, becoming more effective and
                        efficient over time.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
                    <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-accent-green font-bold text-lg">4</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-2 text-lg">Strategic Integration</h3>
                      <p className="text-gray-600">
                        Seamlessly integrate AI agents into existing workflows and systems for maximum impact and
                        minimal disruption.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-charcoal text-white flex-grow flex flex-col pt-16">
        <div className="w-full px-6 lg:px-12">
          <h3 className="text-3xl font-bold text-white mb-12 text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>Related AI Consulting Services</h3>
          <div className="rounded-2xl p-8 max-w-6xl mx-auto mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/services/ai-consulting/conversational-ai" className="group animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 h-full border-0 shadow-lg">
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
              <Link href="/services/ai-consulting/generative-ai" className="group animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 h-full border-0 shadow-lg">
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
              <Link href="/services/ai-consulting/machine-learning" className="group animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 h-full border-0 shadow-lg">
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
        </div>
      </section>
    </div>
  )
}

export const metadata = {
  title: "AI Agents & Autonomous Systems | AIdeology",
  description:
    "Deploy intelligent AI agents with AIdeology that can perceive, reason, and act autonomously. Transform your operations with autonomous systems that work 24/7 and continuously improve.",
}
