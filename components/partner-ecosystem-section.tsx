"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"

export default function PartnerEcosystemSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const partnerCategories = [
    {
      id: "all",
      name: "All Partners",
    },
    {
      id: "infra-ai",
      name: "Infra AI",
    },
    {
      id: "gen-ai",
      name: "Gen AI",
    },
    {
      id: "3d-ai",
      name: "3D AI",
    },
  ]

  const partners = [
    // 3D AI Partners (Top circle)
    { name: "Meta", logo: "/partner-logos/meta-logo.webp", category: "3d-ai", categories: ["3d-ai"], website: "https://about.meta.com/" },
    { name: "Autodesk", logo: "/partner-logos/autodesk-logo.webp", category: "3d-ai", categories: ["3d-ai"], website: "https://www.autodesk.com/" },
    { name: "Unity", logo: "/partner-logos/unity-logo.webp", category: "3d-ai", categories: ["3d-ai"], website: "https://unity.com/" },
    { name: "Unreal Engine", logo: "/partner-logos/unreal-logo.webp", category: "3d-ai", categories: ["3d-ai"], website: "https://www.unrealengine.com/" },

    // Infra AI Partners (Left circle)
    { name: "Supermicro", logo: "/partner-logos/supermicro-logo.webp", category: "infra-ai", categories: ["infra-ai"], website: "https://www.supermicro.com/" },
    { name: "Hewlett Packard Enterprise", logo: "/partner-logos/hpe-logo.webp", category: "infra-ai", categories: ["infra-ai"], website: "https://www.hpe.com/" },
    { name: "Dell", logo: "/partner-logos/dell-logo.webp", category: "infra-ai", categories: ["infra-ai"], website: "https://www.dell.com/" },
    { name: "Lenovo", logo: "/partner-logos/lenovo-logo.webp", category: "infra-ai", categories: ["infra-ai"], website: "https://www.lenovo.com/" },
    { name: "NetApp", logo: "/partner-logos/netapp-logo.webp", category: "infra-ai", categories: ["infra-ai"], website: "https://www.netapp.com/" },
    { name: "Cerebras", logo: "/partner-logos/cerebras-logo.webp", category: "infra-ai", categories: ["infra-ai"], website: "https://www.cerebras.net/" },
    { name: "DDN", logo: "/partner-logos/ddn-logo.webp", category: "infra-ai", categories: ["infra-ai"], website: "https://www.ddn.com/" },
    { name: "WEKA", logo: "/partner-logos/weka-logo.webp", category: "infra-ai", categories: ["infra-ai"], website: "https://www.weka.io/" },
    { name: "VAST", logo: "/partner-logos/vast_logo.webp", category: "infra-ai", categories: ["infra-ai"], website: "https://www.vastdata.com/" },

    // Gen AI Partners (Right circle)
    { name: "OpenAI", logo: "/partner-logos/openai-logo.webp", category: "gen-ai", categories: ["gen-ai"], website: "https://openai.com/" },
    { name: "Google", logo: "/partner-logos/google-logo.webp", category: "gen-ai", categories: ["gen-ai"], website: "https://ai.google/" },
    { name: "Hugging Face", logo: "/partner-logos/huggingface-logo.webp", category: "gen-ai", categories: ["gen-ai"], website: "https://huggingface.co/" },

    // Cross-Category Partners - 3D AI & Infra AI overlap (Top-Left intersection)
    { name: "TheCliff", logo: "/partner-logos/thecliff-logo.webp", category: "cross-category", categories: ["3d-ai", "infra-ai"], website: "https://the-cliff.com/" },

    // Cross-Category Partners - 3D AI & Gen AI overlap (Top-Right intersection)
    { name: "NVIDIA Omniverse", logo: "/partner-logos/omniverse-logo.webp", category: "cross-category", categories: ["3d-ai", "gen-ai"], website: "https://www.nvidia.com/en-us/omniverse/" },

    // Cross-Category Partners - Infra AI & Gen AI overlap (Bottom intersection)
    { name: "Run:ai", logo: "/partner-logos/runai-logo.webp", category: "cross-category", categories: ["infra-ai", "gen-ai"], website: "https://www.run.ai/" },
    { name: "Weights & Biases", logo: "/partner-logos/wandb-logo.webp", category: "cross-category", categories: ["infra-ai", "gen-ai"], website: "https://wandb.ai/" },

    // Center Partners - All three categories overlap
    { name: "Maind", logo: "/partner-logos/maind-logo.webp", category: "cross-category", categories: ["3d-ai", "infra-ai", "gen-ai"], website: "https://maind.pro/" },
    { name: "NVIDIA", logo: "/partner-logos/nvidia-logo.webp", category: "cross-category", categories: ["3d-ai", "infra-ai", "gen-ai"], website: "https://www.nvidia.com/" },
    { name: "NVIDIA NEMO", logo: "/partner-logos/nemo-logo.webp", category: "cross-category", categories: ["infra-ai", "gen-ai"], website: "https://www.nvidia.com/en-us/ai-data-science/generative-ai/nemo-framework/" },
  ]

  const filteredPartners = activeCategory === "all" 
    ? partners 
    : partners.filter((partner) => 
        partner.category === activeCategory || 
        (partner.categories && partner.categories.includes(activeCategory))
      )

  // Handle tab change
  const handleCategoryChange = (newCategory: string) => {
    setActiveCategory(newCategory)
  }

  return (
    <section id="partners" className="py-20 bg-[#f4f4f4]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Partner Ecosystem</h2>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">Strategic partnerships with industry leaders across AI infrastructure, generative AI, and 3D technologies</p>
        </div>

        {/* Partner Categories Tabs */}
        <Tabs value={activeCategory} defaultValue="all" className="mb-12" onValueChange={handleCategoryChange}>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-3xl mx-auto bg-white/80 transition-all duration-300">
            {partnerCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="text-sm md:text-base data-[state=active]:bg-accent-green data-[state=active]:text-charcoal transition-all duration-300 hover:bg-accent-green/20"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 justify-items-center">
          {filteredPartners.length > 0 ? (
            filteredPartners.map((partner, index) => {
              return (
                <Card
                  key={`${partner.name}-${activeCategory}`}
                  className="bg-white border border-accent-green/10 rounded-lg p-6 flex items-center justify-center hover:border-accent-green/50 hover:shadow-lg hover:scale-105 transition-all duration-300 w-full h-32 group"
                >
                  <Link
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full h-full flex items-center justify-center"
                  >
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={`${partner.name} logo`}
                      width={140}
                      height={70}
                      className="w-auto max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110"
                    />
                    {/* Category badges for cross-category partners */}
                    {partner.categories && partner.categories.length > 1 && (
                      <div className="absolute -top-2 -right-2 flex flex-wrap gap-1">
                        {partner.categories.map((cat, i) => (
                          <div
                            key={i}
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
                </Card>
              )
            })
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-charcoal/50">No partners found for this category.</p>
            </div>
          )}
        </div>

        {/* Legend for category indicators */}
        <div className="flex justify-center mt-8 space-x-6 text-sm text-charcoal/70 animate-fade-in-up" style={{animationDelay: '400ms'}}>
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
      </div>
    </section>
  )
}
