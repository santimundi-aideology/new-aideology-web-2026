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
  ];

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
  );

  return (
    <main className="min-h-screen bg-[#f4f4f4] text-charcoal">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">3D AI Solutions</h1>
              <p className="text-xl mb-8 text-charcoal/80">
                End-to-end metaverse & digital-twins implementation, from rendering to simulation, powered by
                cutting-edge AI technologies.
              </p>
              <Button asChild className="bg-accent-green text-charcoal hover:bg-accent-green/90">
                <Link href="#contact">Explore 3D AI possibilities</Link>
              </Button>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image src="/digital-twin-ai.png" alt="3D AI Solutions" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">3D AI Capabilities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="border border-accent-green/20 hover-lift">
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
          <h2 className="text-3xl font-bold mb-12 text-center">3D AI Use Cases</h2>

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
                image: "/immersive-vr-training.png",
              },
            ].map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover-lift">
                <div className="relative h-[200px]">
                  <Image src={useCase.image || "/placeholder.svg"} alt={useCase.title} fill className="object-cover" />
                </div>
                <div className="p-6">
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
          <h2 className="text-3xl font-bold mb-12 text-center">Our 3D AI Technology Stack</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="bg-charcoal/50 border border-accent-green/20 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-accent-green">Hardware</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-accent-green" />
                    NVIDIA RTX and A-series GPUs
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-accent-green" />
                    High-performance compute clusters
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-accent-green" />
                    Specialized rendering hardware
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-accent-green" />
                    Low-latency networking infrastructure
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-charcoal/50 border border-accent-green/20 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-accent-green">Software</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-accent-green" />
                    NVIDIA Omniverse platform
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-accent-green" />
                    Custom rendering engines
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-accent-green" />
                    Physics simulation frameworks
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-accent-green" />
                    Real-time collaboration tools
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-charcoal/50 border border-accent-green/20 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-accent-green">AI Models</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-accent-green" />
                    Generative 3D neural networks
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-accent-green" />
                    Physics-informed ML models
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-accent-green" />
                    Real-time optimization algorithms
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-accent-green" />
                    Custom diffusion models for 3D
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our 3D AI Partners</h2>
          {relevantPartners.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
              {relevantPartners.map((partner, index) => (
                <Card
                  key={index}
                  className="bg-[#f4f4f4] border border-accent-green/10 rounded-md p-6 flex items-center justify-center hover:border-accent-green/30 transition-colors w-full h-32"
                  data-delay={`${index * 100}`}
                >
                  <Link href={partner.website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={160} // Adjusted for consistency
                      height={80}  // Adjusted for consistency
                      className="h-16 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300" // Example styling, adjust as needed
                    />
                  </Link>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No relevant partners to display at this time.</p>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#f4f4f4]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to bring your 3D vision to life?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-charcoal/80">
            Let's discuss how our 3D AI solutions can transform your ideas into immersive digital experiences.
          </p>
          <Button asChild size="lg" className="bg-accent-green text-charcoal hover:bg-accent-green/90">
            <Link href="#contact">Schedule a demo</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
