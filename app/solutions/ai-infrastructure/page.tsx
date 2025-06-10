import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Server, Database, Network, Cpu, Shield, ArrowRight } from "lucide-react"

// Full global partners list (ensure this is sorted alphabetically if not already)
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
  ].sort((a, b) => a.name.localeCompare(b.name)); // Ensuring it's sorted

export default function AIInfrastructurePage() {
  const features = [
    {
      icon: <Server className="h-8 w-8 text-accent-green" />,
      title: "GPU Clusters",
      description:
        "High-performance GPU clusters optimized for AI workloads, featuring the latest NVIDIA hardware configurations.",
    },
    {
      icon: <Database className="h-8 w-8 text-accent-green" />,
      title: "Storage Fabrics",
      description:
        "High-throughput, low-latency storage solutions designed specifically for AI data pipelines and large datasets.",
    },
    {
      icon: <Network className="h-8 w-8 text-accent-green" />,
      title: "Network Architecture",
      description:
        "Optimized network infrastructure with high-bandwidth interconnects for distributed training and inference.",
    },
    {
      icon: <Cpu className="h-8 w-8 text-accent-green" />,
      title: "Compute Optimization",
      description: "Tailored hardware configurations to maximize performance for specific AI and HPC workloads.",
    },
    {
      icon: <Shield className="h-8 w-8 text-accent-green" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security measures and compliance frameworks for sensitive AI applications.",
    },
  ]

  const relevantPartners = allPartners.filter(partner => 
    partner.categories.includes("infra-ai")
  ).sort((a, b) => a.name.localeCompare(b.name)); // Ensure filtered list is also sorted for display

  return (
    <main className="min-h-screen bg-[#f4f4f4] text-charcoal">
      <Navbar forceDarkLogo={true} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">AI Infrastructure</h1>
              <p className="text-xl mb-8 text-charcoal/80 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                From GPU clusters to storage fabrics, we design and deploy turnkey HPC-AI stacks tailored to your
                specific workloads and requirements.
              </p>
              <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <Button asChild className="bg-accent-green text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 hover:scale-105">
                  <Link href="/book-discovery-call?type=consultation">Schedule a consultation</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <Image src="/data-center.webp" alt="AI Infrastructure" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>Key Infrastructure Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border border-accent-green/20 hover-lift hover:scale-105 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-charcoal/70">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#f4f4f4]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>Our Infrastructure Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: "01", title: "Assessment", description: "We analyze your workloads and requirements" },
              { number: "02", title: "Design", description: "Custom architecture tailored to your needs" },
              { number: "03", title: "Deployment", description: "Expert installation and configuration" },
              { number: "04", title: "Management", description: "Ongoing support and optimization" },
            ].map((step, index) => (
              <div 
                key={index} 
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <div className="text-6xl font-bold text-accent-green">{step.number}</div>
                <h3 className="text-xl font-bold mt-2">{step.title}</h3>
                <p className="text-charcoal/70 mt-2">{step.description}</p>
                {index < 3 && <ArrowRight className="hidden md:block absolute -right-3 top-8 text-accent-green/50" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* G42 Case Study Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div 
              className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg order-last lg:order-first animate-fade-in-up"
              style={{ animationDelay: '200ms' }}
            >
              <Image 
                src="/g42-data-center.webp" 
                alt="National AI Supercomputing Infrastructure - G42 SuperPOD"
                fill 
                className="object-cover" 
              />
            </div>
            <div className="order-first lg:order-last animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <h2 className="text-3xl font-bold mb-6 text-charcoal">Case Study: G42 AI Supercomputing Infrastructure</h2>
              <p className="text-lg mb-6 text-charcoal/80">
                AIdeology deployed an NVIDIA DGX SuperPOD for G42, establishing the #1 ranked supercomputer in the Gulf region and achieving 25th position globally on the TOP500 list.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "159 NVIDIA DGX servers forming the SuperPOD",
                  "1,272 cutting-edge NVIDIA H100 GPUs",
                  "TOP500 #25 global, #9 EMEA, #1 Gulf region ranking"
                ].map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-center text-charcoal/80 animate-fade-in-up"
                    style={{ animationDelay: `${300 + index * 100}ms` }}
                  >
                    <svg className="w-5 h-5 mr-3 text-accent-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partners Section - Ensure this section remains if needed, or remove if G42 case study replaces general partner display here */}
      <section className="py-20 bg-[#f4f4f4]"> {/* Changed background for visual separation */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>Our Infrastructure Partners</h2>
          {relevantPartners.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-center"> {/* Adjusted columns for better fit if many partners */}
              {relevantPartners.map((partner, index) => (
                <Card
                  key={partner.name} // Use partner name or unique ID for key
                  className="bg-white border border-accent-green/10 rounded-md p-6 flex items-center justify-center w-full h-32 group transition-all duration-300 hover:border-accent-green/50 hover:shadow-lg hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${200 + index * 100}ms` }}
                >
                  <Link href={partner.website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={140} // Slightly reduced max size for consistency
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
      <section className="py-20 bg-white"> {/* Changed background for visual separation */}
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>Ready to transform your AI infrastructure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-charcoal/80 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Let's discuss how our tailored infrastructure solutions can accelerate your AI initiatives.
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Button asChild size="lg" className="bg-accent-green text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 hover:scale-105">
              <Link href="/book-discovery-call">Book a discovery call</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
