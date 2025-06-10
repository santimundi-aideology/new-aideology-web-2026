import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Lightbulb, BrainCircuit, GitBranch, BarChart, Users, CheckCircle, ArrowRight } from "lucide-react"

// Sorted partner list
const allPartners = [
    { name: "Autodesk", logo: "/partner-logos/autodesk-logo.webp", category: "3d-ai", categories: ["3d-ai"], website: "https://www.autodesk.com/" },
    { name: "Cerebras", logo: "/partner-logos/cerebras-logo.webp", category: "infra-ai", categories: ["infra-ai"], website: "https://www.cerebras.net/" },
    { name: "DDN", logo: "/partner-logos/ddn-logo.webp", category: "infra-ai", categories: ["infra-ai"], website: "https://www.ddn.com/" },
    { name: "Dell", logo: "/partner-logos/dell-logo.webp", category: "infra-ai", categories: ["infra-ai"], website: "https://www.dell.com/" },
    { name: "Google", logo: "/partner-logos/google-logo.webp", category: "gen-ai", categories: ["gen-ai"], website: "https://ai.google/" },
    { name: "Hewlett Packard Enterprise", logo: "/partner-logos/hpe-logo.webp", category: "infra-ai", categories: ["infra-ai"], website: "https://www.hpe.com/" },
    { name: "Hugging Face", logo: "/partner-logos/huggingface-logo.webp", category: "gen-ai", categories: ["gen-ai"], website: "https://huggingface.co/" },
    { name: "Lenovo", logo: "/partner-logos/lenovo-logo.webp", category: "infra-ai", categories: ["infra-ai"], website: "https://www.lenovo.com/" },
    { name: "Maind", logo: "/partner-logos/maind-logo.webp", category: "cross-category", categories: ["3d-ai", "infra-ai", "gen-ai"], website: "https://maind.pro/" },
    { name: "Meta", logo: "/partner-logos/meta-logo.webp", category: "3d-ai", categories: ["3d-ai"], website: "https://about.meta.com/" },
    { name: "NetApp", logo: "/partner-logos/netapp-logo.webp", category: "infra-ai", categories: ["infra-ai"], website: "https://www.netapp.com/" },
    { name: "NVIDIA", logo: "/partner-logos/nvidia-logo.webp", category: "cross-category", categories: ["3d-ai", "infra-ai", "gen-ai"], website: "https://www.nvidia.com/" },
    { name: "NVIDIA NEMO", logo: "/partner-logos/nemo-logo.webp", category: "cross-category", categories: ["infra-ai", "gen-ai"], website: "https://www.nvidia.com/en-us/ai-data-science/generative-ai/nemo-framework/" },
    { name: "NVIDIA Omniverse", logo: "/partner-logos/omniverse-logo.webp", category: "cross-category", categories: ["3d-ai", "gen-ai"], website: "https://www.nvidia.com/en-us/omniverse/" },
    { name: "OpenAI", logo: "/partner-logos/openai-logo.webp", category: "gen-ai", categories: ["gen-ai"], website: "https://openai.com/" },
    { name: "Run:ai", logo: "/partner-logos/runai-logo.webp", category: "cross-category", categories: ["infra-ai", "gen-ai"], website: "https://www.run.ai/" },
    { name: "Supermicro", logo: "/partner-logos/supermicro-logo.webp", category: "infra-ai", categories: ["infra-ai"], website: "https://www.supermicro.com/" },
    { name: "TheCliff", logo: "/partner-logos/thecliff-logo.webp", category: "cross-category", categories: ["3d-ai", "infra-ai"], website: "https://the-cliff.com/" },
    { name: "Unity", logo: "/partner-logos/unity-logo.webp", category: "3d-ai", categories: ["3d-ai"], website: "https://unity.com/" },
    { name: "Unreal Engine", logo: "/partner-logos/unreal-logo.webp", category: "3d-ai", categories: ["3d-ai"], website: "https://www.unrealengine.com/" },
    { name: "VAST", logo: "/partner-logos/vast_logo.webp", category: "infra-ai", categories: ["infra-ai"], website: "https://www.vastdata.com/" },
    { name: "WEKA", logo: "/partner-logos/weka-logo.webp", category: "infra-ai", categories: ["infra-ai"], website: "https://www.weka.io/" },
    { name: "Weights & Biases", logo: "/partner-logos/wandb-logo.webp", category: "cross-category", categories: ["infra-ai", "gen-ai"], website: "https://wandb.ai/" },
  ].sort((a, b) => a.name.localeCompare(b.name));

export default function AIConsultingPage() {
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
      image: "/manufacturing-ai.png",
      alt: "Manufacturing AI",
      title: "Manufacturing Optimization",
      description: "Implemented predictive maintenance AI for a global manufacturer, reducing downtime by 37% and maintenance costs by 28%.",
      results: "$4.2M annual savings"
    },
    {
      image: "/healthcare-ai-diagnostics.png",
      alt: "Healthcare AI",
      title: "Healthcare Diagnostics",
      description: "Developed and deployed an AI diagnostic system for a healthcare provider, improving early detection rates by 42%.",
      results: "Lives saved through early intervention"
    }
  ];

  return (
    <main className="min-h-screen bg-[#f4f4f4] text-charcoal">
      <Navbar forceDarkLogo={true} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">AI Consulting</h1>
              <p className="text-xl mb-8 text-charcoal/80 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Expert guidance on model integration, MLOps pipelines, and business-case acceleration to maximize your
                AI investments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <Button asChild className="bg-accent-green text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 hover:scale-105">
                  <Link href="#contact">Get strategic AI guidance</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-accent-green text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <Link href="/solutions/ai-consulting/ai-agent-components">
                    <span className="flex items-center">
                      Explore AI Agent Components
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <Image src="/ai-consulting-client-meeting.png" alt="AI Consulting" fill className="object-cover" />
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

          <div className="relative w-full max-w-5xl mx-auto h-[500px] md:h-[600px] mb-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-23%20at%2012.38.10-yECsTgQ6btsGyGfQBAfUZZaeMyOuc1.png"
              alt="AI Agent Components Diagram"
              fill
              className="object-contain rounded-lg shadow-md"
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
                className="border border-accent-green/20 hover-lift shadow-xl hover:shadow-2xl animate-fade-in-up"
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-center">
              {relevantPartners.map((partner, index) => (
                <Card
                  key={partner.name}
                  className="bg-[#f4f4f4] border border-accent-green/10 rounded-md p-6 flex items-center justify-center w-full h-32 group transition-all duration-300 hover:border-accent-green/50 hover:shadow-lg hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${200 + index * 100}ms` }}
                >
                  <Link href={partner.website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={140}
                      height={70}
                      className="h-auto w-auto max-h-[70px] max-w-[140px] object-contain opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110"
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
