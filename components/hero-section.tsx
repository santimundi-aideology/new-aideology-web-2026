"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, PhoneCall } from "lucide-react"

// Dual Video Component for seamless playback
function DualVideoBackground() {
  const video1Ref = useRef<HTMLVideoElement>(null)
  const video2Ref = useRef<HTMLVideoElement>(null)
  const [currentVideo, setCurrentVideo] = useState<1 | 2>(1)
  const [video2Loaded, setVideo2Loaded] = useState(false)
  const [video2Loading, setVideo2Loading] = useState(false)

  useEffect(() => {
    const video1 = video1Ref.current
    const video2 = video2Ref.current

    if (!video1 || !video2) return

    // Start preloading video2 immediately
    const startVideo2Loading = () => {
      if (!video2Loading) {
        setVideo2Loading(true)
        video2.load()
      }
    }

    // Multiple events to detect when video2 is ready
    const handleVideo2Ready = () => {
      if (video2.readyState >= 3) { // HAVE_FUTURE_DATA or better
        setVideo2Loaded(true)
      }
    }

    const handleVideo2CanPlay = () => {
      setVideo2Loaded(true)
    }

    const handleVideo2LoadedData = () => {
      setVideo2Loaded(true)
    }

    const handleVideo1Ended = () => {
      // Check if video2 is actually ready to play
      if (video2Loaded && video2.readyState >= 3) {
        setCurrentVideo(2)
        video2.currentTime = 0
        video2.play().catch((error) => {
          console.error('Error playing video2:', error)
          // Fallback to video1
          setCurrentVideo(1)
          video1.currentTime = 0
          video1.play()
        })
      } else {
        // Video2 not ready, loop video1
        video1.currentTime = 0
        video1.play()
        // Continue trying to load video2
        startVideo2Loading()
      }
    }

    const handleVideo2Ended = () => {
      // Loop back to video1
      setCurrentVideo(1)
      video1.currentTime = 0
      video1.play()
    }

    // Start video2 loading as soon as video1 starts playing
    const handleVideo1Playing = () => {
      startVideo2Loading()
    }

    // Event listeners for video1
    video1.addEventListener('playing', handleVideo1Playing)
    video1.addEventListener('ended', handleVideo1Ended)

    // Event listeners for video2 - multiple events for better reliability
    video2.addEventListener('canplay', handleVideo2CanPlay)
    video2.addEventListener('loadeddata', handleVideo2LoadedData)
    video2.addEventListener('canplaythrough', handleVideo2Ready)
    video2.addEventListener('ended', handleVideo2Ended)

    // Start playing video1
    video1.play().catch(console.error)

    // Also start loading video2 after a short delay as backup
    const backupTimeout = setTimeout(() => {
      startVideo2Loading()
    }, 1000)

    return () => {
      clearTimeout(backupTimeout)
      video1.removeEventListener('playing', handleVideo1Playing)
      video1.removeEventListener('ended', handleVideo1Ended)
      video2.removeEventListener('canplay', handleVideo2CanPlay)
      video2.removeEventListener('loadeddata', handleVideo2LoadedData)
      video2.removeEventListener('canplaythrough', handleVideo2Ready)
      video2.removeEventListener('ended', handleVideo2Ended)
    }
  }, [video2Loading, video2Loaded])

  return (
    <div className="absolute inset-0 z-0">
      {/* Video 1 */}
      <video
        ref={video1Ref}
        muted
        playsInline
        preload="auto"
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none object-cover transition-opacity duration-300 ${
          currentVideo === 1 ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ width: "100vw", height: "100dvh" }}
      >
        <source src="/homepage-video-1.mp4" type="video/mp4" />
      </video>

      {/* Video 2 */}
      <video
        ref={video2Ref}
        muted
        playsInline
        preload="none"
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none object-cover transition-opacity duration-300 ${
          currentVideo === 2 ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ width: "100vw", height: "100dvh" }}
      >
        <source src="/homepage-video-2.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="relative min-h-dvh flex items-center pt-16 bg-charcoal text-white overflow-hidden">
      {/* Dual Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-charcoal/70 z-10"></div>
        <DualVideoBackground />
        
        {/* Fallback image if videos don't load */}
        <img
          src="/gpu-server-racks.webp"
          alt="Enterprise AI services background"
          className="absolute inset-0 w-full h-full object-cover opacity-0"
          onError={(e) => {
            e.currentTarget.style.opacity = "1"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4">
        <div className="max-w-4xl">
          <div className="inline-flex items-center rounded-full border border-accent-green/30 bg-charcoal/50 px-4 py-2 text-sm font-medium text-accent-green backdrop-blur-sm animate-fade-in-up">
            Enterprise AI strategy, delivery, and advisory
          </div>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white min-h-[1.2em]">
            Enterprise AI Services for Real Operations
          </h1>
          <p className="max-w-3xl text-xl md:text-2xl mb-4 text-white/90 animate-fade-in-up">
            We help organizations move from AI ambition to deployed enterprise systems.
          </p>
          <p className="max-w-3xl text-lg md:text-xl mb-8 text-white/80 animate-fade-in-up" style={{ animationDelay: "150ms" }}>
            Strategy, rapid delivery, and architecture guidance for agent-enabled operations at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-accent-green text-charcoal hover:bg-white hover:text-charcoal transition-all duration-300 hover:scale-105"
            >
              <Link href="/book-discovery-call" className="flex items-center">
                <PhoneCall className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                Book a strategy session
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-charcoal bg-charcoal/50 font-medium transition-all duration-300 hover:scale-105"
            >
              <Link href="/#solutions" className="flex items-center transition-transform hover:translate-x-1">
                <ArrowRight className="mr-2 h-5 w-5" />
                Explore services
              </Link>
            </Button>
          </div>
          <p className="mt-6 max-w-2xl text-sm md:text-base text-white/70 animate-fade-in-up" style={{ animationDelay: "250ms" }}>
            Trusted across the Middle East for enterprise, public-sector, and sovereign AI engagements.
          </p>
        </div>
      </div>

      {/* Animated gradient line at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-green via-accent-green/50 to-accent-green animate-gradient"></div>
    </section>
  )
}
