"use client"

import { useState } from "react"
// import Image from "next/image" // No longer using Next.js Image, using <img>
import Link from "next/link"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { allPartners, partnerCategories } from "@/lib/partners"
// Card component from shadcn/ui is not used directly in the loop to avoid previous issues.
// We use a div styled like a card.

export default function PartnerEcosystemSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  // Simple filtering logic - exclude NVIDIA specific products from "all" view
  const partnersToShow = activeCategory === "all" 
    ? allPartners.filter(partner => 
        partner.name !== "NVIDIA Omniverse" && 
        partner.name !== "NVIDIA NEMO"
      )
    : allPartners.filter(partner => partner.categories.includes(activeCategory))

  const handleCategoryChange = (newCategory: string) => {
    setActiveCategory(newCategory)
  }

  return (
    <section id="partners" className="py-20 bg-[#f4f4f4]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 animate-fade-in-up">
            Partner Ecosystem
          </h2>
          <p className="text-lg text-charcoal/70 mb-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Strategic partnerships with industry leaders across AI infrastructure,
            generative AI, and 3D technologies
          </p>
        </div>

        {/* NVIDIA Logo Section */}
        <div className="flex flex-col items-center mb-16 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <Link
            href="https://www.nvidia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border-2 border-gray-200 p-8 rounded-lg shadow-lg flex justify-center items-center min-h-[180px] w-[330px] hover:border-accent-green/50 hover:shadow-xl transition-all duration-300 hover:scale-105 mb-4"
          >
            <img
              src="/partner-logos/nvidia-logo.webp"
              alt="NVIDIA logo"
              className="h-30 w-auto object-contain"
            />
          </Link>
          <p className="text-lg text-charcoal/80 font-medium text-center ">
              Built on NVIDIA: Powering our AI Foundation
          </p>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <Tabs value={activeCategory} onValueChange={handleCategoryChange} className="w-full flex justify-center">
            <TabsList>
              {partnerCategories.map(category => (
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
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {partnersToShow.map((partner, index) => (
            <Link
              key={`${partner.name}-${activeCategory}`}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-gray-200 p-4 rounded-lg shadow-lg flex flex-col justify-center items-center min-h-[100px] opacity-100 visible z-10 hover:border-accent-green/50 hover:shadow-xl transition-transform duration-300 hover:scale-105"
              style={{ 
                animationDelay: `${index * 50}ms`,
                display: 'flex',
                visibility: 'visible',
                opacity: '1'
              }}
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className={`${partner.name === "NVIDIA NEMO" || partner.name === "Run:ai" ? "max-h-16" : "max-h-12"} w-auto object-contain opacity-100 visible`}
                style={{
                  display: 'block',
                  visibility: 'visible',
                  opacity: '1'
                }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
