"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BrainCog, Cpu, HardDrive, Network, Server } from "lucide-react"

const advisoryFocusAreas = [
  "Business priorities and use-case selection",
  "Architecture and deployment decisions",
  "Data, software, and platform readiness",
  "Governance, scale, and production execution",
]

export default function ProductsPromo() {
  return (
    <section id="advisory" className="bg-white">
      {/* Mobile Layout - Image first, then content */}
      <div className="block lg:hidden">
        {/* Mobile Advisory Panel */}
        <div className="px-4 pt-24 animate-fade-in-up">
          <div className="rounded-2xl bg-charcoal text-white p-6 shadow-xl border border-accent-green/20">
            <div className="flex items-center gap-3 mb-5">
              <div className="rounded-full bg-accent-green/15 p-3">
                <BrainCog className="h-6 w-6 text-accent-green" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-accent-green/80">Advisory focus</p>
                <h3 className="text-2xl font-bold">From roadmap to execution</h3>
              </div>
            </div>
            <div className="space-y-3">
              {advisoryFocusAreas.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-relaxed text-white/85"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Mobile Content - With padding and top margin */}
        <div className="px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            AI Architecture and Technology Advisory
          </h2>
          <p className="text-lg text-gray-600 mb-6 animate-fade-in-up" style={{animationDelay: '100ms'}}>
            We help organizations assess the compute, software, and deployment environment required to support their
            AI ambitions. Our role is to guide architecture decisions, not just point to products.
          </p>
          
          <div className="mb-6 animate-fade-in-up" style={{animationDelay: '150ms'}}>
            <h3 className="text-xl font-bold text-gray-900 mb-4">What We Help Assess</h3>
            <div className="space-y-3">
              <Link href="/solutions/ai-consulting" className="flex items-center gap-3 hover:text-accent-green transition-colors duration-300 group">
                <Server className="h-5 w-5 text-accent-green group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-700 font-medium hover:text-accent-green text-base">AI strategy and platform roadmap</span>
              </Link>
              <Link href="/solutions/ai-infrastructure/ai-data-platform" className="flex items-center gap-3 hover:text-accent-green transition-colors duration-300 group">
                <Cpu className="h-5 w-5 text-accent-green group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-700 font-medium hover:text-accent-green text-base">Data and platform architecture</span>
              </Link>
              <Link href="/solutions/ai-infrastructure/mlops" className="flex items-center gap-3 hover:text-accent-green transition-colors duration-300 group">
                <HardDrive className="h-5 w-5 text-accent-green group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-700 font-medium hover:text-accent-green text-base">MLOps and deployment planning</span>
              </Link>

              <Link href="/solutions/ai-security-compliance" className="flex items-center gap-3 hover:text-accent-green transition-colors duration-300 group">
                <Network className="h-5 w-5 text-accent-green group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-700 font-medium hover:text-accent-green text-base">Security, governance, and compliance</span>
              </Link>

              <Link href="/solutions/ai-infrastructure/virtualization" className="flex items-center gap-3 hover:text-accent-green transition-colors duration-300 group">
                <BrainCog className="h-5 w-5 text-accent-green group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-700 font-medium hover:text-accent-green text-base">Private and virtualized AI environments</span>
              </Link>
            </div>
          </div>
          
          <div className="animate-fade-in-up" style={{animationDelay: '200ms'}}>
            <Button 
              asChild 
              size="lg" 
              className="w-full bg-accent-green text-charcoal hover:bg-charcoal hover:text-white hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <Link href="/book-discovery-call">
                Book an advisory session
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Side by side */}
      <div className="hidden lg:flex lg:items-center py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-row items-center gap-12">
            {/* Desktop Advisory Panel - Left column */}
            <div className="w-1/2">
              <div className="rounded-3xl bg-charcoal text-white p-10 xl:p-12 shadow-xl border border-accent-green/20 animate-fade-in-up min-h-[563px] xl:min-h-[656px] 2xl:min-h-[750px] flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center rounded-full border border-accent-green/30 bg-white/5 px-4 py-2 text-sm font-medium text-accent-green mb-8">
                    Consulting-led delivery
                  </div>
                  <h3 className="text-4xl xl:text-5xl font-bold leading-tight mb-6">
                    We help enterprises make the right AI decisions before they scale the wrong ones.
                  </h3>
                  <p className="text-lg xl:text-xl text-white/75 max-w-xl mb-10">
                    Advisory, architecture, and deployment planning designed to connect business priorities with real
                    operating systems for AI.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {advisoryFocusAreas.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white/85"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Desktop Content - Right column */}
            <div className="w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up">
                AI Architecture and Technology Advisory
              </h2>
              <p className="text-xl text-gray-600 mb-8 animate-fade-in-up" style={{animationDelay: '100ms'}}>
                We help organizations assess the compute, software, and deployment environment required to support
                their AI ambitions. Our role is to guide architecture decisions, not just point to products.
              </p>
              
              <div className="mb-8 animate-fade-in-up" style={{animationDelay: '150ms'}}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Help Assess</h3>
                <div className="space-y-4">
                  <Link href="/solutions/ai-consulting" className="flex items-center gap-3 hover:text-accent-green transition-colors duration-300 group">
                    <Server className="h-5 w-5 text-accent-green group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-700 font-medium hover:text-accent-green text-lg">AI strategy and platform roadmap</span>
                  </Link>
                  <Link href="/solutions/ai-infrastructure/ai-data-platform" className="flex items-center gap-3 hover:text-accent-green transition-colors duration-300 group">
                    <Cpu className="h-5 w-5 text-accent-green group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-700 font-medium hover:text-accent-green text-lg">Data and platform architecture</span>
                  </Link>
                  <Link href="/solutions/ai-infrastructure/mlops" className="flex items-center gap-3 hover:text-accent-green transition-colors duration-300 group">
                    <HardDrive className="h-5 w-5 text-accent-green group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-700 font-medium hover:text-accent-green text-lg">MLOps and deployment planning</span>
                  </Link>

                  <Link href="/solutions/ai-security-compliance" className="flex items-center gap-3 hover:text-accent-green transition-colors duration-300 group">
                    <Network className="h-5 w-5 text-accent-green group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-700 font-medium hover:text-accent-green text-lg">Security, governance, and compliance</span>
                  </Link>

                  <Link href="/solutions/ai-infrastructure/virtualization" className="flex items-center gap-3 hover:text-accent-green transition-colors duration-300 group">
                    <BrainCog className="h-5 w-5 text-accent-green group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-700 font-medium hover:text-accent-green text-lg">Private and virtualized AI environments</span>
                  </Link>
                </div>
              </div>
              
              <div className="animate-fade-in-up" style={{animationDelay: '200ms'}}>
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-accent-green text-charcoal hover:bg-charcoal hover:text-white hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  <Link href="/book-discovery-call">
                    Book an advisory session
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
