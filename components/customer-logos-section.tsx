"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CustomerLogosSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Sample customer logos
  const customers = [
    { name: "Beauty & the Bit", logo: "/customers/beauty-and-the-bit-logo.png" },
    { name: "El Ranchito", logo: "/customers/el-ranchito-logo.png" },
    { name: "MrFactory", logo: "/customers/mrfactory-logo.png" },
    { name: "Serena TV", logo: "/customers/serena-tv-logo.png" },
    { name: "VFX Studio 1", logo: "/customers/vfx-studio-1-logo.png" },
    { name: "VFX Studio 2", logo: "/customers/vfx-studio-2-logo.png" },
    { name: "VFX Studio 3", logo: "/customers/vfx-studio-3-logo.png" },
    { name: "G42", logo: "/customers/g42-logo.png" },
    { name: "Broadcom", logo: "/customers/broadcom-logo.png" },
    { name: "VMware", logo: "/customers/vmware-logo.png" },
    { name: "Mindware", logo: "/customers/mindware-logo.png" },
    { name: "NEOM", logo: "/customers/neom-logo.png" },
    { name: "KAUST", logo: "/customers/kaust-logo.png" },
    { name: "Nakheel", logo: "/customers/nakheel-logo.png" },
    { name: "Oman Data Park", logo: "/customers/oman-data-park-logo.png" },
    { name: "Ooredoo", logo: "/customers/ooredoo-logo.png" },
  ]

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
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Customers</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Trusted by leading companies in VFX and creative industries
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Gradient fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-charcoal to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-charcoal to-transparent"></div>

          {/* Scrolling logos container */}
          <div className="overflow-hidden">
            <div ref={scrollRef} className="flex items-center space-x-12 py-6" style={{ width: "fit-content" }}>
              {/* Double the logos for infinite scroll effect */}
              {[...customers, ...customers].map((customer, index) => (
                <div key={index} className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src={customer.logo || "/placeholder.svg"}
                    alt={`${customer.name} logo`}
                    width={160}
                    height={80}
                    className="h-16 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" className="border-white text-black hover:bg-white/10">
            <Link href="/customers" className="flex items-center">
              View customer success stories
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
