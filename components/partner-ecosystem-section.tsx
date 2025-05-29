"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"

export default function PartnerEcosystemSection() {
  const [activeCategory, setActiveCategory] = useState("infra-ai")

  const partnerCategories = [
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
    {
      id: "cross-category",
      name: "Cross-Category",
    },
  ]

  const partners = [
    // 3D AI Partners
    { name: "Epic Games", logo: "/partners/epic-games-logo.png", category: "3d-ai" },
    { name: "Unreal Engine", logo: "/partners/unreal-engine-logo.png", category: "3d-ai" },
    { name: "Autodesk", logo: "/partners/autodesk-logo.png", category: "3d-ai" },
    { name: "Meta", logo: "/partners/meta-logo.png", category: "3d-ai" },
    { name: "Unity", logo: "/partners/unity-logo.png", category: "3d-ai" },

    // Infra AI Partners
    { name: "Hewlett Packard Enterprise", logo: "/partners/hpe-logo.png", category: "infra-ai" },
    { name: "Lenovo", logo: "/lenovo-logo.png", category: "infra-ai" },
    { name: "Dell", logo: "/placeholder-n02xb.png", category: "infra-ai" },
    { name: "Supermicro", logo: "/supermicro-logo.png", category: "infra-ai" },
    { name: "NVIDIA", logo: "/partners/nvidia-logo.png", category: "infra-ai" },
    { name: "NetApp", logo: "/partners/netapp-logo.png", category: "infra-ai" },
    { name: "DDN", logo: "/partners/ddn-logo.png", category: "infra-ai" },
    { name: "WEKA", logo: "/partners/weka-logo.png", category: "infra-ai" },
    { name: "VAST", logo: "/partners/vast-logo.png", category: "infra-ai" },

    // Gen AI Partners
    { name: "NVIDIA NEMO", logo: "/partners/nvidia-nemo-logo.png", category: "gen-ai" },
    { name: "OpenAI", logo: "/partners/openai-logo.png", category: "gen-ai" },
    { name: "Google", logo: "/partners/google-logo.png", category: "gen-ai" },
    { name: "Anthropic", logo: "/partners/anthropic-logo.png", category: "gen-ai" },
    { name: "Hugging Face", logo: "/partners/hugging-face-logo.png", category: "gen-ai" },

    // Cross-Category Partners
    {
      name: "Atenea Suite",
      logo: "/partners/atenea-suite-logo.png",
      category: "cross-category",
      categories: ["3d-ai", "infra-ai"],
    },
    {
      name: "NVIDIA Omniverse",
      logo: "/partners/nvidia-omniverse-logo.png",
      category: "cross-category",
      categories: ["3d-ai", "infra-ai", "gen-ai"],
    },
    {
      name: "Run:ai",
      logo: "/partners/runai-logo.png",
      category: "cross-category",
      categories: ["infra-ai", "gen-ai"],
    },
    { name: "Maind", logo: "/partners/maind-logo.png", category: "cross-category", categories: ["infra-ai", "gen-ai"] },
    {
      name: "Weights & Biases",
      logo: "/partners/wandb-logo.png",
      category: "cross-category",
      categories: ["infra-ai", "gen-ai"],
    },
  ]

  const filteredPartners = partners.filter(
    (partner) =>
      partner.category === activeCategory || (partner.categories && partner.categories.includes(activeCategory)),
  )

  return (
    <section id="partners" className="py-20 bg-[#f4f4f4]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Partner Ecosystem</h2>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">Strategic partnerships with industry leaders</p>
        </div>

        {/* Partner Categories Tabs */}
        <Tabs defaultValue="infra-ai" className="mb-12" onValueChange={setActiveCategory}>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-3xl mx-auto bg-white/80">
            {partnerCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="text-sm md:text-base data-[state=active]:bg-accent-green data-[state=active]:text-charcoal"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-center">
          {filteredPartners.map((partner, index) => (
            <Card
              key={index}
              className="bg-white border border-accent-green/10 rounded-md p-6 flex items-center justify-center hover:border-accent-green/50 hover:shadow-md transition-all w-full h-32"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} logo`}
                width={160}
                height={80}
                className="h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
