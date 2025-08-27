import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MessageSquare, Mic, Bot, BarChart3, Users, Clock, Zap, Sparkles, Brain, Layers, AudioLines, FileText, Network, CheckCircle, Headphones, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ConversationalAiPage() {
  const breadcrumbPath = [
    { name: "Solutions", href: "/#solutions" },
    { name: "AI Consulting", href: "/solutions/ai-consulting" },
    { name: "Conversational AI" }
  ];

  const conversationalSolutions = [
    {
      icon: <MessageSquare className="w-8 h-8 text-accent-green" />,
      title: "Smart Chatbots",
      description: "Friendly AI chatbots that chat naturally with your customers and help solve their problems instantly.",
      features: ["Always available", "Speaks many languages", "Remembers context", "Hands off to humans when needed"]
    },
    {
      icon: <Bot className="w-8 h-8 text-accent-green" />,
      title: "AI Assistants",
      description: "Smart helpers that can handle tasks, answer questions, and make your customers' lives easier.",
      features: ["Voice commands", "Task completion", "Personal touch", "Smart scheduling"]
    },
    {
      icon: <Headphones className="w-8 h-8 text-accent-green" />,
      title: "Voice AI",
      description: "Talk to your apps and services naturally - just like talking to a friend.",
      features: ["Speech understanding", "Natural conversations", "Voice responses", "Works with any accent"]
    }
  ]

  const benefits = [
    {
      title: "Happy Customers",
      description: "Give instant, helpful answers that make customers smile",
      icon: <Users className="w-6 h-6 text-accent-green" />
    },
    {
      title: "Always Open",
      description: "Never miss a customer - AI works 24/7 without breaks",
      icon: <Clock className="w-6 h-6 text-accent-green" />
    },
    {
      title: "Save Money",
      description: "Handle more customers with less staff while improving service",
      icon: <BarChart3 className="w-6 h-6 text-accent-green" />
    },
    {
      title: "Grow Easily",
      description: "Handle thousands of conversations at once without hiring more people",
      icon: <Zap className="w-6 h-6 text-accent-green" />
    }
  ]

  const useCases = [
    {
      title: "Customer Help",
      description: "Answer customer questions quickly and solve problems automatically.",
      icon: <Sparkles className="w-8 h-8 text-accent-green" />,
      examples: ["Answer common questions", "Route to right person", "Fix simple issues", "Get help when needed"]
    },
    {
      title: "Sales & Marketing",
      description: "Talk to potential customers and help them find what they need.",
      icon: <Brain className="w-8 h-8 text-accent-green" />,
      examples: ["Find good leads", "Suggest products", "Book meetings", "Follow up campaigns"]
    },
    {
      title: "Team Helper",
      description: "Help your employees get things done faster with AI assistance.",
      icon: <Layers className="w-8 h-8 text-accent-green" />,
      examples: ["HR questions", "IT help", "Schedule meetings", "Find information"]
    }
  ]

  // NVIDIA Riva technology section
  const rivaFeatures = [
    {
      title: "Speech-to-Text",
      description: "Convert spoken words into text with high accuracy",
      icon: <Mic className="w-6 h-6 text-accent-green" />
    },
    {
      title: "Text-to-Speech",
      description: "Generate natural-sounding voice responses",
      icon: <Headphones className="w-6 h-6 text-accent-green" />
    },
    {
      title: "Language Understanding",
      description: "Understand what customers really mean",
      icon: <Brain className="w-6 h-6 text-accent-green" />
    },
    {
      title: "Multi-Language",
      description: "Support conversations in multiple languages",
      icon: <MessageSquare className="w-6 h-6 text-accent-green" />
    }
  ]

  return (
    <div className="min-h-screen bg-white">
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
      <section className="relative overflow-hidden bg-gradient-to-br from-charcoal via-charcoal to-gray-800 text-white py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,.1),transparent_50%)] animate-pulse"></div>
        </div>

        <div className="w-full relative z-10">
          <div className="w-full text-center px-6 lg:px-12">
            <div className="inline-flex items-center bg-accent-green/20 text-accent-green px-6 py-3 rounded-full text-sm font-medium mb-8 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <MessageSquare className="w-4 h-4 mr-2" />
              Chatbots • Virtual Assistants • Voice AI
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <span className="text-accent-green">Conversational</span>
              <span className="block text-white">AI</span>
            </h1>

            <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              Make talking to your business as easy as talking to a friend with smart AI that understands and helps
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <Button
                size="lg"
                className="bg-accent-green text-charcoal font-semibold text-lg px-10 py-5 rounded-2xl hover:bg-white hover:text-charcoal hover:scale-105 transition-all duration-300 ease-in-out"
                asChild
              >
                <Link href="#consultation">
                  Build Your AI Assistant
                  <MessageSquare className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-charcoal text-lg px-10 py-5 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 ease-in-out"
                asChild
              >
                <Link href="#solutions">Explore Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Conversational AI Solutions */}
      <section id="solutions" className="py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                Conversational AI Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Simple AI solutions that make talking to your business easy and helpful
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {conversationalSolutions.map((solution, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${300 + index * 150}ms` }}>
                  <CardHeader>
                    <div className="w-16 h-16 bg-accent-green/10 rounded-2xl flex items-center justify-center mb-4">
                      {solution.icon}
                    </div>
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{solution.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NVIDIA Riva Technology Section */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                Powered by NVIDIA Riva
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Advanced voice AI technology that makes conversations feel natural and seamless
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {rivaFeatures.map((feature, index) => (
                <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${300 + index * 100}ms` }}>
                  <div className="w-16 h-16 bg-accent-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-charcoal mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gray-50 rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-charcoal mb-4">Why NVIDIA Riva?</h3>
                <p className="text-gray-600 max-w-4xl mx-auto">
                  NVIDIA Riva is the industry-leading platform for voice AI. It provides the fastest, most accurate speech recognition and natural voice generation, making your conversational AI feel truly human-like.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                Why Choose Conversational AI?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Make your customers happier and your business more successful
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${300 + index * 100}ms` }}>
                  <div className="w-16 h-16 bg-accent-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-charcoal mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                How It Helps Your Business
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                See how conversational AI can make different parts of your business work better
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${300 + index * 150}ms` }}>
                  <CardHeader>
                    <div className="w-16 h-16 bg-accent-green/10 rounded-2xl flex items-center justify-center mb-4">
                      {useCase.icon}
                    </div>
                    <CardTitle className="text-xl">{useCase.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{useCase.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">What It Can Do:</h4>
                    <div className="space-y-2">
                      {useCase.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                          <span className="text-sm text-gray-700">{example}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="consultation" className="py-20 bg-accent-green text-charcoal">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Ready to Start Talking?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Let AIdeology help you build smart conversational AI that makes your customers happy and grows your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <Button 
                asChild
                size="lg" 
                className="bg-charcoal text-white font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-300 ease-in-out px-8 py-3"
              >
                <Link href="/book-discovery-call?type=consultation">
                  Schedule Consultation
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
                  Explore All Solutions
                </Link>
              </Button>
            </div>
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
