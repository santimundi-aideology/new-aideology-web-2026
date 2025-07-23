"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CustomerLogosSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Customer logos - Real customers only, sorted alphabetically
  const customers = [
    { name: "Broadcom", logo: "/customer-logos/broadcom-logo.webp" },
    { name: "Core42", logo: "/customer-logos/core42-logo.png" },
    { name: "HCT", logo: "/customer-logos/hct-logo.webp" },
    { name: "KAUST", logo: "/customer-logos/kaust-logo.webp" },
    { name: "Nakheel", logo: "/customer-logos/nakheel-logo.webp" },
    { name: "NEOM", logo: "/customer-logos/neom-logo.webp" },
    { name: "VMware", logo: "/customer-logos/vmware-logo.webp" },
    { name: "Ooredoo", logo: "/customer-logos/ooredo-logo.webp" },
    { name: "Midis Group", logo: "/customer-logos/midis-logo.webp" },
    { name: "Rihal", logo: "/customer-logos/rihal-logo.webp" },
    { name: "SEC", logo: "/customer-logos/sec-logo.webp" },
    { name: "Oman Data Park", logo: "/customer-logos/oman-data-park-logo.webp" },
    { name: "Mindware", logo: "/customer-logos/mindware-logo.webp" },
  ].sort((a, b) => a.name.localeCompare(b.name));

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (!scrollElement) return

    let animationId: number
    let position = 0
    const totalWidth = scrollElement.scrollWidth
    const visibleWidth = scrollElement.clientWidth

    const animate = () => {
      if (totalWidth <= visibleWidth) return

      position += 0.5
      if (position >= totalWidth / 2) {
        position = 0
      }

      if (scrollElement) {
        scrollElement.style.transform = `translateX(${-position}px)`
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section id="customers" className="py-16 bg-charcoal text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Customers</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Trusted by leading companies in VFX and creative industries
          </p>
        </div>

        <div className="relative overflow-hidden animate-fade-in-up" style={{animationDelay: '200ms'}}>
          {/* Gradient fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-charcoal to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-charcoal to-transparent"></div>

          {/* Scrolling logos container */}
          <div className="overflow-hidden">
            <div ref={scrollRef} className="flex items-center gap-x-12 py-6" style={{ width: "fit-content" }}>
              {/* Double the logos for infinite scroll effect */}
              {[...customers, ...customers].map((customer, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 p-4 bg-white rounded-lg border border-gray-200 hover:border-accent-green/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <Image
                    src={customer.logo || "/placeholder.svg"}
                    alt={`${customer.name} logo`}
                    width={160}
                    height={80}
                    className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-10 animate-fade-in-up" style={{animationDelay: '400ms'}}>
          {/* TODO: RESTORE CUSTOMERS PAGE - Uncomment the button/link below when customers page is restored */}
          {/* 
          <Button asChild variant="outline" className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-charcoal transition-all duration-300 hover:scale-105 px-6 py-3">
            <Link href="/customers" className="flex items-center">
              View customer success stories
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          */}
          <Button disabled variant="outline" className="border-white/30 bg-white/10 backdrop-blur-sm text-white/50 cursor-not-allowed px-6 py-3">
            <span className="flex items-center">
              View customer success stories (Coming Soon)
              <ArrowRight className="ml-2 h-5 w-5" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}
