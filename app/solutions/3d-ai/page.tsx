import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CuboidIcon as Cube, Layers, Workflow, Zap, Wand2, ArrowRight } from "lucide-react"

// Full global partners list (condensed for brevity in this edit, will be pasted in full)
const allPartners = [
    { name: "Meta", logo: "/partner-logos/meta-logo.webp", category: "3d-ai", categories: ["3d-ai"], website: "https://about.meta.com/" },
    { name: "Autodesk", logo: "/partner-logos/autodesk-logo.webp", category: "3d-ai", categories: ["3d-ai"], website: "https://www.autodesk.com/" },
    { name: "Unity", logo: "/partner-logos/unity-logo.webp", category: "3d-ai", categories: ["3d-ai"], website: "https://unity.com/" },
    { name: "Unreal Engine", logo: "/partner-logos/unreal-logo.webp", category: "3d-ai", categories: ["3d-ai"], website: "https://www.unrealengine.com/" },
    { name: "Supermicro", logo: "/partner-logos/supermicro-logo.webp", category: "infra-ai", categories: ["infra-ai"], website: "https://www.supermicro.com/" },
    { name: "Hewlett Packard Enterprise", logo: "/partner-logos/hpe-logo.webp", category: "infra-ai", categories: ["infra-ai"], website: "https://www.hpe.com/" },
    { name: "Dell", logo: "/partner-logos/dell-logo.webp", category: "infra-ai", categories: ["infra-ai"], website: "https://www.dell.com/" },
    { name: "Lenovo", logo: "/partner-logos/lenovo-logo.webp", category: "infra-ai", categories: ["infra-ai"], website: "https://www.lenovo.com/" },
    { name: "NetApp", logo: "/partner-logos/netapp-logo.webp", category: "infra-ai", categories: ["infra-ai"], website: "https://www.netapp.com/" },
    { name: "Cerebras", logo: "/partner-logos/cerebras-logo.webp", category: "infra-ai", categories: ["infra-ai"], website: "https://www.cerebras.net/" },
    { name: "DDN", logo: "/partner-logos/ddn-logo.webp", category: "infra-ai", categories: ["infra-ai"], website: "https://www.ddn.com/" },
    { name: "WEKA", logo: "/partner-logos/weka-logo.webp", category: "infra-ai", categories: ["infra-ai"], website: "https://www.weka.io/" },
    { name: "VAST", logo: "/partner-logos/vast_logo.webp", category: "infra-ai", categories: ["infra-ai"], website: "https://www.vastdata.com/" },
    { name: "OpenAI", logo: "/partner-logos/openai-logo.webp", category: "gen-ai", categories: ["gen-ai"], website: "https://openai.com/" },
    { name: "Google", logo: "/partner-logos/google-logo.webp", category: "gen-ai", categories: ["gen-ai"], website: "https://ai.google/" },
    { name: "Hugging Face", logo: "/partner-logos/huggingface-logo.webp", category: "gen-ai", categories: ["gen-ai"], website: "https://huggingface.co/" },
    { name: "TheCliff", logo: "/partner-logos/thecliff-logo.webp", category: "cross-category", categories: ["3d-ai", "infra-ai"], website: "https://the-cliff.com/" },
    { name: "NVIDIA Omniverse", logo: "/partner-logos/omniverse-logo.webp", category: "cross-category", categories: ["3d-ai", "gen-ai"], website: "https://www.nvidia.com/en-us/omniverse/" },
    { name: "Run:ai", logo: "/partner-logos/runai-logo.webp", category: "cross-category", categories: ["infra-ai", "gen-ai"], website: "https://www.run.ai/" },
    { name: "Weights & Biases", logo: "/partner-logos/wandb-logo.webp", category: "cross-category", categories: ["infra-ai", "gen-ai"], website: "https://wandb.ai/" },
    { name: "Maind", logo: "/partner-logos/maind-logo.webp", category: "cross-category", categories: ["3d-ai", "infra-ai", "gen-ai"], website: "https://maind.pro/" },
    { name: "NVIDIA", logo: "/partner-logos/nvidia-logo.webp", category: "cross-category", categories: ["3d-ai", "infra-ai", "gen-ai"], website: "https://www.nvidia.com/" },
    { name: "NVIDIA NEMO", logo: "/partner-logos/nemo-logo.webp", category: "cross-category", categories: ["infra-ai", "gen-ai"], website: "https://www.nvidia.com/en-us/ai-data-science/generative-ai/nemo-framework/" },
  ].sort((a, b) => a.name.localeCompare(b.name));

export default function ThreeDimensionalAIPage() {
  const capabilities = [
    {
      icon: <Cube className="h-8 w-8 text-accent-green" />,
      title: "Digital Twins",
      description:
        "Create virtual replicas of physical assets, processes, and systems for simulation and optimization.",
    },
    {
      icon: <Layers className="h-8 w-8 text-accent-green" />,
      title: "3D Rendering",
      description:
        "High-fidelity rendering solutions powered by AI for realistic visualization and real-time interaction.",
    },
    {
      icon: <Workflow className="h-8 w-8 text-accent-green" />,
      title: "Simulation Pipelines",
      description:
        "End-to-end simulation workflows for testing, training, and validating AI models in virtual environments.",
    },
    {
      icon: <Zap className="h-8 w-8 text-accent-green" />,
      title: "Real-time Processing",
      description: "Low-latency processing of 3D data streams for interactive applications and immersive experiences.",
    },
    {
      icon: <Wand2 className="h-8 w-8 text-accent-green" />,
      title: "Generative 3D",
      description:
        "AI-powered generation of 3D assets, environments, and animations from simple prompts or references.",
    },
  ]

  const relevantPartners = allPartners.filter(partner => 
    partner.categories.includes("3d-ai")
  ).sort((a, b) => a.name.localeCompare(b.name));

  return (
    <main className="min-h-screen bg-[#f4f4f4] text-charcoal">
      <Navbar forceDarkLogo={true} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">3D AI Solutions</h1>
              <p className="text-xl mb-8 text-charcoal/80 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                End-to-end metaverse & digital-twins implementation, from rendering to simulation, powered by
                cutting-edge AI technologies.
              </p>
              <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <Button asChild className="bg-accent-green text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 hover:scale-105">
                  <Link href="#contact">Explore 3D AI possibilities</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <Image src="/3d-ai.webp" alt="3D AI Solutions" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>3D AI Capabilities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card 
                key={index} 
                className="border border-accent-green/20 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4">{capability.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                  <p className="text-charcoal/70">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-[#f4f4f4]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>3D AI Use Cases</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Industrial Digital Twins",
                description:
                  "Virtual replicas of industrial equipment and processes for predictive maintenance and optimization.",
                image: "/industrial-digital-twin.png",
              },
              {
                title: "Architectural Visualization",
                description:
                  "AI-enhanced 3D visualization for architectural projects with real-time rendering and interaction.",
                image: "/architectural-visualization-ai.png",
              },
              {
                title: "Virtual Production",
                description:
                  "Real-time 3D environments for film and media production, powered by AI rendering technologies.",
                image: "/virtual-production-studio.png",
              },
              {
                title: "Immersive Training",
                description: "3D simulations for training and education with AI-driven scenarios and feedback systems.",
                image: "/immersive-training.webp",
              },
            ].map((useCase, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover-lift animate-fade-in-up flex flex-col min-h-[500px]"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <div className="relative h-[320px]">
                  <Image src={useCase.image || "/placeholder.svg"} alt={useCase.title} fill className="object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                  <p className="text-charcoal/70">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-charcoal text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>Our 3D AI Technology Stack</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { title: "Hardware", items: ["NVIDIA RTX and A-series GPUs", "High-performance compute clusters", "Specialized rendering hardware", "Low-latency networking infrastructure"] },
              { title: "Software", items: ["NVIDIA Omniverse platform", "Custom rendering engines", "Physics simulation frameworks", "Real-time collaboration tools"] },
              { title: "AI Models", items: ["Generative 3D neural networks", "Physics-informed ML models", "Real-time optimization algorithms", "Custom diffusion models for 3D"] }
            ].map((techCategory, index) => (
              <Card 
                key={techCategory.title} 
                className="bg-charcoal/50 border border-accent-green/20 text-white animate-fade-in-up"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-accent-green">{techCategory.title}</h3>
                  <ul className="space-y-2">
                    {techCategory.items.map((item, itemIndex) => (
                      <li 
                        key={itemIndex} 
                        className="flex items-center animate-fade-in-up"
                        style={{ animationDelay: `${300 + index * 100 + itemIndex * 50}ms` }}
                      >
                        <ArrowRight className="h-4 w-4 mr-2 text-accent-green" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>Our 3D AI Partners</h2>
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

      {/* CTA Section */}
      <section className="py-20 bg-[#f4f4f4]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>Ready to bring your 3D vision to life?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-charcoal/80 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Let's discuss how our 3D AI solutions can transform your ideas into immersive digital experiences.
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Button asChild size="lg" className="bg-accent-green text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 hover:scale-105">
              <Link href="#contact">Schedule a demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
