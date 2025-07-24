"use client";

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Server, Database, Network, Shield, Cpu, HardDrive, BrainCog } from "lucide-react"

export default function ProductsPromo() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Image - First on mobile, left on desktop */}
          <div className="w-full lg:w-1/2 order-1 lg:order-1">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[563px] xl:h-[656px] 2xl:h-[750px] rounded-lg group cursor-pointer animate-fade-in-up">
              <Image
                src="/ai-products.webp"
                alt="Advanced AI Products and Infrastructure Solutions"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                priority
              />
            </div>
          </div>
          
          {/* Content - Second on mobile, right on desktop */}
          <div className="w-full lg:w-1/2 order-2 lg:order-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6 animate-fade-in-up">
              Pioneering AI Products to Power Your Vision
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8 animate-fade-in-up" style={{animationDelay: '100ms'}}>
              Aideology offers a curated selection of industry-leading AI hardware and software. Equip your organization with the best tools to accelerate innovation, from powerful GPU systems to enterprise-grade AI software and robust infrastructure components.
            </p>
            
            <div className="mb-6 lg:mb-8 animate-fade-in-up" style={{animationDelay: '150ms'}}>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Our Product Categories</h3>
              <div className="space-y-3 lg:space-y-4">
                <Link href="/products/nvidia-dgx" className="flex items-center gap-3 hover:text-accent-green transition-colors duration-300 group">
                  <Server className="h-5 w-5 text-accent-green group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-700 font-medium hover:text-accent-green text-base lg:text-lg">NVIDIA DGX Systems</span>
                </Link>
                <Link href="/products/enterprise-ai" className="flex items-center gap-3 hover:text-accent-green transition-colors duration-300 group">
                  <Cpu className="h-5 w-5 text-accent-green group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-700 font-medium hover:text-accent-green text-base lg:text-lg">Enterprise AI Platforms</span>
                </Link>
                <Link href="/products/storage-systems" className="flex items-center gap-3 hover:text-accent-green transition-colors duration-300 group">
                  <HardDrive className="h-5 w-5 text-accent-green group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-700 font-medium hover:text-accent-green text-base lg:text-lg">Storage Systems</span>
                </Link>
                <Link href="/products/networking" className="flex items-center gap-3 hover:text-accent-green transition-colors duration-300 group">
                  <Network className="h-5 w-5 text-accent-green group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-700 font-medium hover:text-accent-green text-base lg:text-lg">High-Performance Networking</span>
                </Link>
                <Link href="/products/nvidia-ai-enterprise" className="flex items-center gap-3 hover:text-accent-green transition-colors duration-300 group">
                  <BrainCog className="h-5 w-5 text-accent-green group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-700 font-medium hover:text-accent-green text-base lg:text-lg">NVIDIA AI Enterprise</span>
                </Link>
                <Link href="/products/professional-services" className="flex items-center gap-3 hover:text-accent-green transition-colors duration-300 group">
                  <Shield className="h-5 w-5 text-accent-green group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-700 font-medium hover:text-accent-green text-base lg:text-lg">Professional Services</span>
                </Link>
              </div>
            </div>
            
            <div className="animate-fade-in-up" style={{animationDelay: '200ms'}}>
              <Button 
                asChild 
                size="lg" 
                className="w-full sm:w-auto bg-accent-green text-charcoal hover:bg-charcoal hover:text-white hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <Link href="/products">
                  Explore All Products
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
