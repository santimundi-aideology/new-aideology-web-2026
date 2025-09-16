import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Video from "@/components/video-player"

import Footer from "@/components/footer"
import { Lightbulb, BrainCircuit, GitBranch, BarChart, Users, CheckCircle, ArrowRight, Zap, MessageSquare, Bot, Shield, ChevronRight } from "lucide-react"
import { allPartners } from "@/lib/partners"

export default function AIConsultingPage() {
  const breadcrumbPath = [
    { name: "Solutions", href: "/#solutions" },
    { name: "AI Consulting" }
  ];

  const services = [
    {
      icon: <BrainCircuit className="h-8 w-8 text-accent-green" />,
      title: "Model Integration",
      description: "Seamlessly integrate state-of-the-art AI models into your existing systems and workflows.",
    },
    {
      icon: <GitBranch className="h-8 w-8 text-accent-green" />,
      title: "MLOps Pipelines",
      description:
        "Build robust, scalable machine learning operations pipelines for continuous training and deployment.",
    },
    {
      icon: <BarChart className="h-8 w-8 text-accent-green" />,
      title: "Business Case Acceleration",
      description: "Accelerate your AI initiatives with strategic guidance and practical implementation roadmaps.",
    },
    {
      icon: <Users className="h-8 w-8 text-accent-green" />,
      title: "Team Enablement",
      description: "Upskill your team with hands-on training and knowledge transfer from our AI experts.",
    },
  ]

  const consultingServices = [
    {
      icon: <Zap className="w-12 h-12 text-accent-green" />,
      title: "Generative AI",
      description: "Strategic implementation of generative AI solutions for business transformation.",
      features: [
        "Large language model integration",
        "Custom AI model development",
        "Content generation pipelines",
        "AI-powered automation workflows"
      ],
      link: "/services/ai-consulting/generative-ai"
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-accent-green" />,
      title: "Conversational AI",
      description: "Advanced chatbot and conversational AI solutions for customer engagement.",
      features: [
        "Natural language processing",
        "Multi-channel chatbot deployment",
        "Voice assistant integration",
        "Conversational analytics"
      ],
      link: "/services/ai-consulting/conversational-ai"
    },
    {
      icon: <Bot className="w-12 h-12 text-accent-green" />,
      title: "AI Agents",
      description: "Intelligent AI agents for autonomous task execution and decision-making.",
      features: [
        "Multi-agent system architecture",
        "Autonomous workflow execution",
        "Decision-making algorithms",
        "Agent coordination frameworks"
      ],
      link: "/services/ai-consulting/ai-agents"
    },
    {
      icon: <BarChart className="w-12 h-12 text-accent-green" />,
      title: "Machine Learning",
      description: "End-to-end machine learning solutions from data science to production deployment.",
      features: [
        "Predictive analytics models",
        "Custom ML algorithm development",
        "Data science consulting",
        "ML model optimization"
      ],
      link: "/services/ai-consulting/machine-learning"
    },
    {
      icon: <Shield className="w-12 h-12 text-accent-green" />,
      title: "AI Security & Compliance",
      description: "Enterprise-grade security frameworks and compliance solutions for AI systems.",
      features: [
        "AI security risk assessment",
        "Regulatory compliance frameworks",
        "Model robustness validation",
        "Secure AI development lifecycle"
      ],
      link: "/solutions/ai-security-compliance"
    }
  ]

  const relevantPartners = allPartners.filter(partner => 
    partner.categories.includes("gen-ai") || partner.categories.includes("infra-ai")
  ).sort((a, b) => a.name.localeCompare(b.name));

  const methodologySteps = [
    {
      title: "Discovery & Assessment",
      description:
        "We analyze your current capabilities, challenges, and objectives to identify the most impactful AI opportunities.",
      icon: <Lightbulb className="h-6 w-6 text-white" />,
    },
    {
      title: "Strategy Development",
      description:
        "We create a tailored AI roadmap aligned with your business goals, including technology selection and implementation planning.",
      icon: <BrainCircuit className="h-6 w-6 text-white" />,
    },
    {
      title: "Implementation Support",
      description:
        "Our experts work alongside your team to implement AI solutions, establish best practices, and overcome technical challenges.",
      icon: <GitBranch className="h-6 w-6 text-white" />,
    },
    {
      title: "Optimization & Scale",
      description:
        "We help you refine your AI systems, measure outcomes, and scale successful implementations across your organization.",
      icon: <BarChart className="h-6 w-6 text-white" />,
    },
  ];

  const expertiseAreas = [
    "Computer Vision",
    "Natural Language Processing",
    "Reinforcement Learning",
    "Generative AI",
    "Time Series Analysis",
    "Recommendation Systems",
    "Anomaly Detection",
    "Federated Learning",
    "Edge AI Deployment",
  ];

  const successStories = [
    {
      image: "/manufacturing-ai.webp",
      alt: "Manufacturing AI",
      title: "Manufacturing Optimization",
      description: "Implemented predictive maintenance AI for a global manufacturer, reducing downtime by 37% and maintenance costs by 28%.",
      results: "$4.2M annual savings"
    },
    {
      image: "/ai-medical-imaging.webp",
      alt: "Healthcare AI",
      title: "Healthcare Diagnostics",
      description: "Developed and deployed an AI diagnostic system for a healthcare provider, improving early detection rates by 42%.",
      results: "Lives saved through early intervention"
    }
  ];

  return (
    <main className="min-h-screen bg-[#f4f4f4] text-charcoal">
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
      <section className="py-24 md:py-32 relative bg-gradient-to-br from-charcoal via-charcoal to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="inline-flex items-center bg-accent-green/20 text-accent-green px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <BrainCircuit className="w-4 h-4 mr-2" />
                Strategic AI Guidance
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in-up" style={{ animationDelay: '200ms' }}>AI Consulting</h1>
              <p className="text-xl mb-8 text-gray-300 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                Expert guidance on model integration, MLOps pipelines, and business-case acceleration to maximize your
                AI investments.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <Button size="lg" className="bg-accent-green text-charcoal hover:bg-white hover:text-charcoal font-semibold px-8 py-4 rounded-2xl hover:scale-105 transition-all duration-300" asChild>
                  <Link href="#contact">
                    Get strategic AI guidance
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-accent-green text-accent-green hover:bg-accent-green hover:text-charcoal px-8 py-4 rounded-2xl hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link href="#services">
                    Explore Services
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <div className="absolute inset-0 bg-accent-green/10 rounded-3xl blur-3xl"></div>
              <Image src="/ai-consulting-client-meeting.webp" alt="AI Consulting" fill className="object-cover relative z-10 rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 animate-fade-in-up">
                Strategic AI Consulting Excellence
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                See how our AI consulting experts transform business challenges into innovative AI solutions that drive real results
              </p>
            </div>
            
            <Video
              id="video"
              src="/ai-consulting-video.mp4"
              poster="/thumbnail.webp"
              className="w-full max-w-5xl mx-auto animate-fade-in-up"
              style={{ animationDelay: '400ms' }}
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Comprehensive AI Consulting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Discover our full spectrum of AI consulting services from generative AI to machine learning.
            </p>
          </div>

          <div>
            {/* First 3 cards */}
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-8">
              {consultingServices.slice(0, 3).map((service, index) => (
                <Card 
                  key={service.title} 
                  className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg animate-fade-in-up"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-accent-green/10 rounded-xl group-hover:bg-accent-green/20 transition-colors">
                      {service.icon}
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-accent-green transition-colors" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-charcoal group-hover:text-accent-green transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-accent-green mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    className="w-full mt-4 bg-charcoal hover:bg-accent-green text-white hover:text-charcoal transition-all duration-300"
                  >
                    <Link href={service.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
            </div>
            
            {/* Bottom 2 cards - centered */}
            <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {consultingServices.slice(3).map((service, index) => (
                <Card 
                  key={service.title} 
                  className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg animate-fade-in-up"
                  style={{ animationDelay: `${600 + index * 100}ms` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-accent-green/10 rounded-xl group-hover:bg-accent-green/20 transition-colors">
                        {service.icon}
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-accent-green transition-colors" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-charcoal group-hover:text-accent-green transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-accent-green mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      asChild 
                      className="w-full mt-4 bg-charcoal hover:bg-accent-green text-white hover:text-charcoal transition-all duration-300"
                    >
                      <Link href={service.link}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Agent Components Teaser Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <h2 className="text-3xl font-bold mb-4">AI Agent Components & AIdeology Services</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Discover our comprehensive approach to AI agent architecture and implementation
            </p>
          </div>

          <div className="relative w-full mx-auto h-[500px] md:h-[600px] mb-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Image
              src="/ai-agent-detailed-diagram.webp"
              alt="AI Agent Components Diagram"
              fill
              className="object-contain"
            />
          </div>

          <div className="text-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <Button asChild className="bg-accent-green text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 hover:scale-105">
              <Link href="/solutions/ai-consulting/ai-agent-components">
                <span className="flex items-center">
                  Explore Interactive Diagram
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>Our Consulting Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border border-accent-green/20 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-charcoal/70">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Methodology Section */}
      <section className="py-20 bg-[#f4f4f4]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>Our Consulting Methodology</h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent-green/30 transform md:translate-x-[-0.5px] animate-fade-in-up" style={{ animationDelay: '200ms' }}></div>
            <div className="space-y-12">
              {methodologySteps.map((step, index) => (
                <div 
                  key={index} 
                  className="relative flex items-start animate-fade-in-up"
                  style={{ animationDelay: `${300 + index * 150}ms` }}
                >
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-accent-green rounded-full flex items-center justify-center transform translate-x-0 md:-translate-x-4 z-10">
                    {step.icon}
                  </div>
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}`}
                  >
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-charcoal/70">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-charcoal text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>Our AI Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((expertise, index) => (
              <div
                key={index}
                className="flex items-center bg-charcoal/50 border border-accent-green/20 rounded-lg p-4 animate-fade-in-up"
                style={{ animationDelay: `${200 + index * 75}ms` }}
              >
                <CheckCircle className="h-6 w-6 text-accent-green mr-3 flex-shrink-0" />
                <span>{expertise}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>Our Key Technology Partners</h2>
          {relevantPartners.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8 justify-items-center">
              {relevantPartners.map((partner, index) => (
                <Card
                  key={partner.name}
                  className="bg-[#f4f4f4] border border-accent-green/10 rounded-md p-3 md:p-6 flex items-center justify-center w-full h-24 md:h-32 group transition-all duration-300 hover:border-accent-green/50 hover:shadow-lg hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${200 + index * 100}ms` }}
                >
                  <Link href={partner.website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={168}
                      height={84}
                      className={`h-auto w-auto object-contain opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110 ${
                        partner.name === "Hugging Face" 
                          ? "max-h-[60px] max-w-[120px] md:max-h-[120px] md:max-w-[240px]" 
                          : "max-h-[48px] max-w-[96px] md:max-h-[84px] md:max-w-[168px]"
                      }`}
                    />
                  </Link>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 animate-fade-in-up" style={{ animationDelay: '200ms' }}>No relevant partners to display at this time.</p>
          )}
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-[#f4f4f4]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>Success Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {successStories.map((story, index) => (
              <Card 
                key={index} 
                className="border border-accent-green/20 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${200 + index * 150}ms` }}
              >
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="relative h-full min-h-[200px]">
                      <Image src={story.image} alt={story.alt} fill className="object-cover" />
                    </div>
                    <div className="md:col-span-2 p-6">
                      <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                      <p className="text-charcoal/70 mb-4">{story.description}</p>
                      <div className="flex items-center text-electric-green">
                        <span className="font-bold mr-2">Results:</span>
                        <span>{story.results}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>Ready to accelerate your AI journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-charcoal/80 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Our expert consultants are ready to help you navigate the complexities of AI implementation and
            optimization.
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Button asChild size="lg" className="bg-accent-green text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 hover:scale-105">
              <Link href="/book-discovery-call?type=consultation">Book a consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
