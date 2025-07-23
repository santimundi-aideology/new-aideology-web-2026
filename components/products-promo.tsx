"use client";

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Server, Database, Network, Shield, Cpu, HardDrive, BrainCog } from "lucide-react"

export default function ProductsPromo() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative w-full h-[563px] md:h-[656px] lg:h-[750px] rounded-lg group cursor-pointer animate-fade-in-up">
              <Image
                src="/ai-products.webp"
                alt="Advanced AI Products and Infrastructure Solutions"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Pioneering AI Products to Power Your Vision
            </h2>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in-up" style={{animationDelay: '100ms'}}>
              Aideology offers a curated selection of industry-leading AI hardware and software. Equip your organization with the best tools to accelerate innovation, from powerful GPU systems to enterprise-grade AI software and robust infrastructure components.
            </p>
            
            <div className="mb-8 animate-fade-in-up" style={{animationDelay: '150ms'}}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Product Categories</h3>
              <div className="space-y-4">
                <Link href="/products/nvidia-dgx" className="flex items-center gap-3 hover:text-accent-green transition-colors duration-300">
                  <Server className="h-5 w-5 text-accent-green" />
                  <span className="text-gray-700 font-medium hover:text-accent-green">NVIDIA DGX Systems</span>
                </Link>
                <Link href="/products/enterprise-ai" className="flex items-center gap-3 hover:text-accent-green transition-colors duration-300">
                  <Cpu className="h-5 w-5 text-accent-green" />
                  <span className="text-gray-700 font-medium hover:text-accent-green">Enterprise AI Platforms</span>
                </Link>
                <Link href="/products/storage-systems" className="flex items-center gap-3 hover:text-accent-green transition-colors duration-300">
                  <HardDrive className="h-5 w-5 text-accent-green" />
                  <span className="text-gray-700 font-medium hover:text-accent-green">Storage Systems</span>
                </Link>
                <Link href="/products/nvidia-ai-enterprise" className="flex items-center gap-3 hover:text-accent-green transition-colors duration-300">
                  <Shield className="h-5 w-5 text-accent-green" />
                  <span className="text-gray-700 font-medium hover:text-accent-green">NVIDIA AI Enterprise</span>
                </Link>
              </div>
            </div>
            
            <div className="animate-fade-in-up" style={{animationDelay: '200ms'}}>
              <Button asChild className="bg-black text-white hover:bg-gray-800 hover:scale-105 transition-all duration-300">
                <Link href="/products">Explore Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
