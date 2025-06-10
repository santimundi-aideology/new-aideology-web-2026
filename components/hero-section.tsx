"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, PhoneCall } from "lucide-react"

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [mounted, setMounted] = useState(false)
  
  const fullText = "One-stop-shop for Artificial Intelligence solutions"

  // Ensure client-side only rendering for particles
  useEffect(() => {
    setMounted(true)
  }, [])

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Typewriter effect
  useEffect(() => {
    if (isTyping && currentText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1))
      }, 100)
      return () => clearTimeout(timeout)
    } else if (currentText.length === fullText.length) {
      setIsTyping(false)
    }
  }, [currentText, isTyping, fullText])

  return (
    <section className="relative min-h-screen flex items-center pt-16 bg-charcoal text-white overflow-hidden">
      {/* Floating Particles Removed */}
      {/* {mounted && (
        <div className="absolute inset-0 z-0">
          {Array.from({ length: 25 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-accent-green/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      )} */}

      {/* Local Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-charcoal/70 z-10"></div>
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none object-cover"
            style={{ width: "100vw", height: "100vh" }}
          >
            <source src="/homepage-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
      <div className="relative z-20 container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white min-h-[1.2em]">
            {currentText}
            {isTyping && <span className="animate-pulse">|</span>}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in-up">
            Simplify and transform ideas into rational systems engineering artificial intelligence solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-accent-green text-charcoal hover:bg-white hover:text-charcoal transition-all duration-300 hover:scale-105"
            >
              <Link href="#contact" className="flex items-center transition-transform hover:translate-x-1">
                <PhoneCall className="mr-2 h-5 w-5" />
                Book a discovery call
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-charcoal bg-charcoal/50 font-medium transition-all duration-300 hover:scale-105"
            >
              <Link href="#download" className="flex items-center transition-transform hover:translate-x-1">
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
