"use client"

import { useState } from "react"
// import Image from "next/image" // No longer using Next.js Image, using <img>
import Link from "next/link"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
// Card component from shadcn/ui is not used directly in the loop to avoid previous issues.
// We use a div styled like a card.

export default function PartnerEcosystemSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const partnerCategories = [
    { id: "all", name: "All Partners" },
    { id: "infra-ai", name: "Infra AI" },
    { id: "gen-ai", name: "Gen AI" },
    { id: "3d-ai", name: "3D AI" },
  ]

  const partners = [
    // 3D AI Partners
    { name: "Meta", logo: "/partner-logos/meta-logo.webp", categories: ["3d-ai"], website: "https://about.meta.com/" },
    { name: "Autodesk", logo: "/partner-logos/autodesk-logo.webp", categories: ["3d-ai"], website: "https://www.autodesk.com/" },
    { name: "Unity", logo: "/partner-logos/unity-logo.webp", categories: ["3d-ai"], website: "https://unity.com/" },
    { name: "Unreal Engine", logo: "/partner-logos/unreal-logo.webp", categories: ["3d-ai"], website: "https://www.unrealengine.com/" },
    // Infra AI Partners
    { name: "Supermicro", logo: "/partner-logos/supermicro-logo.webp", categories: ["infra-ai"], website: "https://www.supermicro.com/" },
    { name: "Hewlett Packard Enterprise", logo: "/partner-logos/hpe-logo.webp", categories: ["infra-ai"], website: "https://www.hpe.com/" },
    { name: "Dell", logo: "/partner-logos/dell-logo.webp", categories: ["infra-ai"], website: "https://www.dell.com/" },
    { name: "Lenovo", logo: "/partner-logos/lenovo-logo.webp", categories: ["infra-ai"], website: "https://www.lenovo.com/" },
    { name: "NetApp", logo: "/partner-logos/netapp-logo.webp", categories: ["infra-ai"], website: "https://www.netapp.com/" },
    { name: "Cerebras", logo: "/partner-logos/cerebras-logo.webp", categories: ["infra-ai"], website: "https://www.cerebras.net/" },
    { name: "DDN", logo: "/partner-logos/ddn-logo.webp", categories: ["infra-ai"], website: "https://www.ddn.com/" },
    { name: "WEKA", logo: "/partner-logos/weka-logo.webp", categories: ["infra-ai"], website: "https://www.weka.io/" },
    { name: "VAST", logo: "/partner-logos/vast_logo.webp", categories: ["infra-ai"], website: "https://www.vastdata.com/" },
    // Gen AI Partners
    { name: "OpenAI", logo: "/partner-logos/openai-logo.webp", categories: ["gen-ai"], website: "https://openai.com/" },
    { name: "Google", logo: "/partner-logos/google-logo.webp", categories: ["gen-ai"], website: "https://ai.google/" },
    { name: "Hugging Face", logo: "/partner-logos/huggingface-logo.webp", categories: ["gen-ai"], website: "https://huggingface.co/" },
    // Cross-Category Partners
    { name: "TheCliff", logo: "/partner-logos/thecliff-logo.webp", categories: ["3d-ai", "infra-ai"], website: "https://the-cliff.com/" },
    { name: "NVIDIA Omniverse", logo: "/partner-logos/omniverse-logo.webp", categories: ["3d-ai", "gen-ai"], website: "https://www.nvidia.com/en-us/omniverse/" },
    { name: "Run:ai", logo: "/partner-logos/runai-logo.webp", categories: ["infra-ai", "gen-ai"], website: "https://www.run.ai/" },
    { name: "Weights & Biases", logo: "/partner-logos/wandb-logo.webp", categories: ["infra-ai", "gen-ai"], website: "https://wandb.ai/" },
    // Center Partners
    { name: "Maind", logo: "/partner-logos/maind-logo.webp", categories: ["3d-ai", "infra-ai", "gen-ai"], website: "https://maind.pro/" },
    { name: "NVIDIA", logo: "/partner-logos/nvidia-logo.webp", categories: ["3d-ai", "infra-ai", "gen-ai"], website: "https://www.nvidia.com/" },
    { name: "NVIDIA NEMO", logo: "/partner-logos/nemo-logo.webp", categories: ["infra-ai", "gen-ai"], website: "https://www.nvidia.com/en-us/ai-data-science/generative-ai/nemo-framework/" },
  ].sort((a, b) => a.name.localeCompare(b.name));

  const filteredPartners = activeCategory === "all" 
    ? partners 
    : partners.filter((partner) => 
        (partner.categories && partner.categories.includes(activeCategory))
      )

  const handleCategoryChange = (newCategory: string) => {
    setActiveCategory(newCategory)
  }

  return (
    <section id="partners" className="py-20 bg-[#f4f4f4]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Partner Ecosystem</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Strategic partnerships with industry leaders across AI infrastructure, generative AI, and 3D technologies</p>
        </div>

        <Tabs value={activeCategory} defaultValue="all" className="mb-12" onValueChange={handleCategoryChange}>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-3xl mx-auto bg-white/80 transition-all duration-300">
            {partnerCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="text-sm md:text-base text-gray-600 data-[state=active]:bg-accent-green data-[state=active]:text-charcoal transition-all duration-300 hover:bg-accent-green/20"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div 
          // key={activeCategory} // Intentionally removed to prevent re-animation issues
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 justify-items-center"
        >
          {filteredPartners.length > 0 ? (
            filteredPartners.map((partner, index) => (
              <div // Styled div acting as a Card
                key={`${partner.name}-${activeCategory}-${index}-card`} // Key for item identity is kept
                className="bg-white border border-accent-green/10 rounded-lg p-6 flex items-center justify-center hover:border-accent-green/50 hover:shadow-lg hover:scale-105 transition-all duration-300 w-full h-32 group"
                // Removed: animate-fade-in-up and style={{ animationDelay: ... }}
              >
                <Link
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    className="w-auto h-auto max-w-[140px] max-h-[70px] object-contain transition-all duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  {partner.categories && partner.categories.length > 1 && (
                    <div className="absolute -top-2 -right-2 flex flex-wrap gap-1">
                      {partner.categories.map((cat, i) => (
                        <div
                          key={`${partner.name}-cat-${cat}-${i}`}
                          className={`w-2 h-2 rounded-full transition-all duration-300 group-hover:scale-125 ${
                            cat === "3d-ai" ? "bg-blue-500" :
                            cat === "infra-ai" ? "bg-green-500" :
                            cat === "gen-ai" ? "bg-purple-500" : "bg-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </Link>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400">No partners found for this category.</p>
            </div>
          )}
        </div>

        <div className="flex justify-center mt-8 space-x-6 text-sm text-gray-600 animate-fade-in-up" style={{animationDelay: '400ms'}}>
          <div className="flex items-center space-x-2 transition-all duration-300 hover:scale-105">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span>3D AI</span>
          </div>
          <div className="flex items-center space-x-2 transition-all duration-300 hover:scale-105">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span>Infra AI</span>
          </div>
          <div className="flex items-center space-x-2 transition-all duration-300 hover:scale-105">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span>Gen AI</span>
          </div>
        </div>

        {/* NVIDIA Certifications Section */}
        <div className="mt-16 pt-10 border-t border-gray-300">
          <h3 className="text-2xl md:text-3xl font-bold text-charcoal text-center mb-20 animate-fade-in-up">NVIDIA Certifications</h3>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Elite Partner Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{animationDelay: '100ms'}}>
              <div className="flex flex-col items-center text-center md:text-left md:flex-row md:items-start mb-6">
                <img 
                  src="/elite-partner.webp" 
                  alt="NVIDIA Elite Partner" 
                  className="w-28 h-auto md:w-32 mb-4 md:mb-0 md:mr-5 rounded"
                />
                <div>
                  <h4 className="text-xl lg:text-2xl font-bold text-charcoal mb-2">Elite Partner</h4>
                  <p className="text-gray-700 mb-1 text-sm">Demonstrating the highest level of expertise and commitment.</p>
                </div>
              </div>
              <div>
                <h5 className="text-md font-semibold text-charcoal mb-3 border-b pb-1">Elite Competencies:</h5>
                <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                  <li>Networking</li>
                  <li>DGX AI Compute Systems</li>
                </ul>
              </div>
            </div>

            {/* Preferred Partner Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{animationDelay: '300ms'}}>
              <div className="flex flex-col items-center text-center md:text-left md:flex-row md:items-start mb-6">
                <img 
                  src="/preferred-partner.webp" 
                  alt="NVIDIA Preferred Partner" 
                  className="w-28 h-auto md:w-32 mb-4 md:mb-0 md:mr-5 rounded"
                />
                <div>
                  <h4 className="text-xl lg:text-2xl font-bold text-charcoal mb-2">Preferred Partner</h4>
                  <p className="text-gray-700 mb-1 text-sm">Recognized for specialization and capability in specific NVIDIA technologies.</p>
                </div>
              </div>
              <div>
                <h5 className="text-md font-semibold text-charcoal mb-3 border-b pb-1">Preferred Competencies:</h5>
                <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                  <li>DGX Cloud</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End NVIDIA Certifications Section */}

        {/* NVIDIA Expertise Section */}
        <div className="mt-16 pt-10 border-t border-gray-300">
          <h3 className="text-2xl md:text-3xl font-bold text-charcoal text-center mb-12 animate-fade-in-up">Our NVIDIA Expertise</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center items-center animate-fade-in-up" style={{animationDelay: '200ms'}}>
            {[ 
              { src: "/cuda-logo.webp", alt: "NVIDIA CUDA" },
              { src: "/triton-inference-server-logo.webp", alt: "NVIDIA Triton Inference Server" },
              { src: "/omniverse-logo.webp", alt: "NVIDIA Omniverse" },
              { src: "/cudnn-logo.webp", alt: "NVIDIA cuDNN" },
              { src: "/rapids-logo.webp", alt: "NVIDIA RAPIDS" },
              { src: "/tensorrt-logo.webp", alt: "NVIDIA TensorRT" },
            ].map((logo, index) => (
              <div 
                key={logo.alt}
                className="group p-4 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex justify-center items-center h-24 w-full"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="max-h-16 w-auto object-contain transition-all duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        {/* End NVIDIA Expertise Section */}

      </div>
    </section>
  )
}
