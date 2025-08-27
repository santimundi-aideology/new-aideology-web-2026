"use client";

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Server, Database, Network, Cpu, HardDrive, BrainCog } from "lucide-react"

export default function ProductsPromo() {
  return (
    <section className="bg-white">
      {/* Mobile Layout - Image first, then content */}
      <div className="block lg:hidden">
        {/* Mobile Image - Completely unconstrained, full width */}
        <div className="w-full group cursor-pointer animate-fade-in-up mt-24">
          <Image
            src="/ai-products.webp"
            alt="Advanced AI Products and Infrastructure Solutions"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="100vw"
            priority
          />
        </div>
        
        {/* Mobile Content - With padding and top margin */}
        <div className="px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Pioneering AI Products to Power Your Vision
          </h2>
          <p className="text-lg text-gray-600 mb-6 animate-fade-in-up" style={{animationDelay: '100ms'}}>
            AIdeology offers a curated selection of industry-leading AI hardware and software. Equip your organization with the best tools to accelerate innovation, from powerful GPU systems to enterprise-grade AI software and robust infrastructure components.
          </p>
          
          <div className="mb-6 animate-fade-in-up" style={{animationDelay: '150ms'}}>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Product Categories</h3>
            <div className="space-y-3">
              <Link href="/products/nvidia-dgx" className="flex items-center gap-3 hover:text-accent-green transition-colors duration-300 group">
                <Server className="h-5 w-5 text-accent-green group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-700 font-medium hover:text-accent-green text-base">NVIDIA DGX Systems</span>
              </Link>
              <Link href="/products/enterprise-ai" className="flex items-center gap-3 hover:text-accent-green transition-colors duration-300 group">
                <Cpu className="h-5 w-5 text-accent-green group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-700 font-medium hover:text-accent-green text-base">Enterprise AI Platforms</span>
              </Link>
              <Link href="/products/storage-systems" className="flex items-center gap-3 hover:text-accent-green transition-colors duration-300 group">
                <HardDrive className="h-5 w-5 text-accent-green group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-700 font-medium hover:text-accent-green text-base">Storage Systems</span>
              </Link>

              <Link href="/products/nvidia-ai-enterprise" className="flex items-center gap-3 hover:text-accent-green transition-colors duration-300 group">
                <BrainCog className="h-5 w-5 text-accent-green group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-700 font-medium hover:text-accent-green text-base">NVIDIA AI Enterprise</span>
              </Link>
            </div>
          </div>
          
          <div className="animate-fade-in-up" style={{animationDelay: '200ms'}}>
            <Button 
              asChild 
              size="lg" 
              className="w-full bg-accent-green text-charcoal hover:bg-charcoal hover:text-white hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <Link href="/products">
                Explore All Products
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Side by side */}
      <div className="hidden lg:flex lg:items-center py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-row items-center gap-12">
            {/* Desktop Image - Left column */}
            <div className="w-1/2">
              <div className="relative w-full h-[563px] xl:h-[656px] 2xl:h-[750px] rounded-lg group cursor-pointer animate-fade-in-up">
                <Image
                  src="/ai-products.webp"
                  alt="Advanced AI Products and Infrastructure Solutions"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                  sizes="50vw"
                  priority
                />
              </div>
            </div>
            
            {/* Desktop Content - Right column */}
            <div className="w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up">
                Pioneering AI Products to Power Your Vision
              </h2>
              <p className="text-xl text-gray-600 mb-8 animate-fade-in-up" style={{animationDelay: '100ms'}}>
                AIdeology offers a curated selection of industry-leading AI hardware and software. Equip your organization with the best tools to accelerate innovation, from powerful GPU systems to enterprise-grade AI software and robust infrastructure components.
              </p>
              
              <div className="mb-8 animate-fade-in-up" style={{animationDelay: '150ms'}}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Product Categories</h3>
                <div className="space-y-4">
                  <Link href="/products/nvidia-dgx" className="flex items-center gap-3 hover:text-accent-green transition-colors duration-300 group">
                    <Server className="h-5 w-5 text-accent-green group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-700 font-medium hover:text-accent-green text-lg">NVIDIA DGX Systems</span>
                  </Link>
                  <Link href="/products/enterprise-ai" className="flex items-center gap-3 hover:text-accent-green transition-colors duration-300 group">
                    <Cpu className="h-5 w-5 text-accent-green group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-700 font-medium hover:text-accent-green text-lg">Enterprise AI Platforms</span>
                  </Link>
                  <Link href="/products/storage-systems" className="flex items-center gap-3 hover:text-accent-green transition-colors duration-300 group">
                    <HardDrive className="h-5 w-5 text-accent-green group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-700 font-medium hover:text-accent-green text-lg">Storage Systems</span>
                  </Link>

                  <Link href="/products/nvidia-ai-enterprise" className="flex items-center gap-3 hover:text-accent-green transition-colors duration-300 group">
                    <BrainCog className="h-5 w-5 text-accent-green group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-700 font-medium hover:text-accent-green text-lg">NVIDIA AI Enterprise</span>
                  </Link>
                </div>
              </div>
              
              <div className="animate-fade-in-up" style={{animationDelay: '200ms'}}>
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-accent-green text-charcoal hover:bg-charcoal hover:text-white hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  <Link href="/products">
                    Explore All Products
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
