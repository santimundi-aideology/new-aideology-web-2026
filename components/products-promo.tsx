"use client";

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Server, Database, Network, Shield, Cpu, HardDrive, BrainCog } from "lucide-react"

export default function ProductsPromo() {
  const imageUrl = "/ai-products.webp";

  const productCategories = [
    { name: "NVIDIA DGX Systems", href: "/products/nvidia-dgx", icon: Server },
    { name: "Enterprise AI Platforms", href: "/products/nvidia-hgx", icon: Cpu },
    { name: "Storage Systems", href: "/products/storage-systems", icon: HardDrive },
    { name: "NVIDIA AI Enterprise", href: "/products/nvidia-ai-enterprise", icon: BrainCog },
  ]

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div 
            className="w-full md:w-1/2 animate-fade-in-up transition-transform duration-300 ease-in-out hover:scale-110"
            style={{
              animationDelay: '100ms',
            }}
          >
            <div className="relative w-full">
              <Image
                src={imageUrl}
                alt="Advanced AI data center with high-performance GPU server racks and cooling infrastructure"
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-lg shadow-lg"
                style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
              />
            </div>
          </div>

          <div 
            className="w-full md:w-1/2 animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">
             Pioneering AI Products to Power Your Vision
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              AIdeology offers a curated selection of industry-leading AI hardware and software. Equip your organization
              with the best tools to accelerate innovation, from powerful GPU systems to enterprise-grade AI software
              and robust infrastructure components.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-charcoal">Our Product Categories</h3>
              <ul className="space-y-3">
                {productCategories.map((category) => {
                  const IconComponent = category.icon
                  return (
                    <li key={category.name}>
                      <Link
                        href={category.href}
                        className="text-gray-700 hover:text-accent-green flex items-center group"
                      >
                        <IconComponent className="mr-3 h-5 w-5 text-gray-500 group-hover:text-accent-green" />
                        {category.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            <Button 
              asChild 
              className="bg-charcoal text-white hover:bg-accent-green hover:text-charcoal hover:scale-105 transition-all duration-300 ease-in-out px-8 py-3"
            >
              <Link href="/products">Explore Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
