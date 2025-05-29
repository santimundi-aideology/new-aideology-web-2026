"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, PhoneCall } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 bg-charcoal text-white">
      {/* YouTube Video Background with Dark Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-charcoal/70 z-10"></div>
        <div className="absolute inset-0 z-0">
          <iframe
            src="https://www.youtube.com/embed/DFKdU6AIseI?autoplay=1&mute=1&loop=1&playlist=DFKdU6AIseI&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&iv_load_policy=3&enablejsapi=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="absolute w-[300%] h-[300%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ border: "none" }}
            title="AI Infrastructure Background"
          ></iframe>
        </div>
        {/* Fallback image if video doesn't load */}
        <img
          src="/gpu-server-racks.png"
          alt="AI Infrastructure"
          className="absolute inset-0 w-full h-full object-cover opacity-0"
          onError={(e) => {
            e.currentTarget.style.opacity = "1"
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            One-stop-shop for Artificial Intelligence solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Simplify and transform ideas into rational systems engineering artificial intelligence solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-accent-green text-charcoal hover:bg-accent-green/90">
              <Link href="#contact">
                <PhoneCall className="mr-2 h-5 w-5" />
                Book a discovery call
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 bg-charcoal/50 font-medium"
            >
              <Link href="#download">
                <Download className="mr-2 h-5 w-5" />
                Download one-pager
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Animated gradient line at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-green via-accent-green/50 to-accent-green animate-gradient"></div>
    </section>
  )
}
