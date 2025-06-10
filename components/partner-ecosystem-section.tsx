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

  // Simple filtering logic
  const partnersToShow = activeCategory === "all" 
    ? allPartners 
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

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-20">
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
                className="max-h-12 w-auto object-contain opacity-100 visible"
                style={{
                  display: 'block',
                  visibility: 'visible',
                  opacity: '1'
                }}
              />
            </Link>
          ))}
        </div>
        
        {/* NVIDIA Certifications Section */}
        
          <h3 className="text-2xl md:text-3xl font-bold text-charcoal text-center mb-12 animate-fade-in-up">NVIDIA Certifications</h3>
          
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            {/* Elite Partner Section */}
            <a 
              href="https://marketplace.nvidia.com/en-us/enterprise/partners/?page=1&limit=15&name=aideology-plc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 animate-fade-in-up hover:no-underline hover:scale-105"
            >
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
               <div className="flex-grow">
                 <h5 className="text-md font-semibold text-charcoal mb-3 border-b pb-1">Elite Competencies:</h5>
                 <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                   <li>Networking</li>
                   <li>DGX AI Compute Systems</li>
                 </ul>
               </div>
            </a>
            {/* Preferred Partner Section */}
            <a 
              href="https://marketplace.nvidia.com/en-us/enterprise/partners/?page=1&limit=15&name=aideology-plc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 animate-fade-in-up hover:no-underline hover:scale-105"
            >
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
               <div className="flex-grow">
                 <h5 className="text-md font-semibold text-charcoal mb-3 border-b pb-1">Preferred Competencies:</h5>
                 <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                   <li>DGX Cloud</li>
                 </ul>
               </div>
            </a>
          </div>
        
      </div>
    </section>
  )
}
