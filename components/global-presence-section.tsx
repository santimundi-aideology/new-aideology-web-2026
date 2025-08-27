"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Clock } from "lucide-react"
import LoadingSkeleton from "./loading-skeleton"

export default function GlobalPresenceSection() {
  const [currentTimes, setCurrentTimes] = useState<{ [key: string]: string }>({})
  const [imageLoaded, setImageLoaded] = useState(false)
  const [timesLoaded, setTimesLoaded] = useState(false)

  const locations = [
    {
      id: "london",
      name: "London",
      timezone: "Europe/London",
      coords: { x: 49.8, y: 25 },
      description: "Our London office serves as our European headquarters, providing comprehensive AI solutions.",
    },
    {
      id: "madrid",
      name: "Madrid",
      timezone: "Europe/Madrid",
      coords: { x: 47.5, y: 35 },
      description: "The Madrid hub focuses on AI infrastructure and works closely with our Barcelona team.",
    },
    {
      id: "barcelona",
      name: "Barcelona",
      timezone: "Europe/Madrid",
      coords: { x: 50.8, y: 37 },
      description: "Our Barcelona office specializes in 3D AI solutions and serves clients throughout Southern Europe.",
    },
    {
      id: "riyadh",
      name: "Riyadh",
      timezone: "Asia/Riyadh",
      coords: { x: 65, y: 45 },
      description:
        "The Riyadh hub specializes in AI infrastructure for government and enterprise clients in Saudi Arabia.",
    },
    {
      id: "doha",
      name: "Doha",
      timezone: "Asia/Qatar",
      coords: { x: 68, y: 47 },
      description: "Our Doha office provides AI consulting and infrastructure services throughout Qatar.",
    },
    {
      id: "abu-dhabi",
      name: "Abu Dhabi",
      timezone: "Asia/Dubai",
      coords: { x: 71, y: 48 },
      description: "The Abu Dhabi hub serves clients across the Emirates with cutting-edge AI solutions.",
    },
    {
      id: "dubai",
      name: "Dubai",
      timezone: "Asia/Dubai",
      coords: { x: 72, y: 49 },
      description: "Our Dubai hub serves as our headquarters and main operations center for the Middle East region.",
    },
    {
      id: "nairobi",
      name: "Nairobi",
      timezone: "Africa/Nairobi",
      coords: { x: 60, y: 65 },
      description: "Our Nairobi office serves clients across East Africa with comprehensive AI solutions.",
    },
  ]

  // Update times every second
  useEffect(() => {
    const updateTimes = () => {
      const times: { [key: string]: string } = {}
      locations.forEach((location) => {
        const now = new Date()
        const timeString = now.toLocaleTimeString("en-US", {
          timeZone: location.timezone,
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
        times[location.id] = timeString
      })
      setCurrentTimes(times)
      setTimesLoaded(true)
    }

    // Update immediately
    updateTimes()

    // Update every second
    const interval = setInterval(updateTimes, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="global-presence" className="py-20 bg-white">
      {/* Title Section - Always has container */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Presence</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Strategically located hubs to serve clients worldwide
          </p>
        </div>
      </div>

      {/* Desktop Map - Has container */}
      <div className="hidden lg:block relative">
        <div className="container mx-auto px-4">
          <div className="relative w-full max-w-4xl mx-auto mb-12 animate-scale-in" style={{animationDelay: '200ms'}}>
            <div className="relative h-[600px] rounded-lg overflow-hidden border border-accent-green/10 bg-white hover-glow transition-all duration-300 hover:scale-105">
              <Image
                src="/world-map.webp"
                alt="AIdeology Global Presence Map"
                fill
                className="object-contain rounded-lg"
                sizes="1200px"
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  console.warn('World map image failed to load')
                  setImageLoaded(true)
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Map - Has container for consistent width */}
      <div className="block lg:hidden relative mb-12 animate-scale-in" style={{animationDelay: '200ms'}}>
        <div className="container mx-auto px-4">
          <div className="relative w-full max-w-4xl mx-auto h-[500px] md:h-[600px] bg-white rounded-lg overflow-hidden border border-accent-green/10">
            <Image
              src="/world-map-vertical.webp"
              alt="AIdeology Global Presence Map"
              fill
              className="object-contain"
              sizes="100vw"
              onLoad={() => setImageLoaded(true)}
              onError={() => {
                console.warn('Vertical world map image failed to load')
                setImageLoaded(true)
              }}
            />
          </div>
        </div>
      </div>

      {/* Real-time Clocks - Always has container */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {locations.map((location, index) => (
            <Card 
              key={location.id} 
              className="bg-white border border-accent-green/20 hover:border-accent-green/40 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up group"
              style={{
                animationDelay: `${400 + index * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              <CardContent className="p-3 md:p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-4 w-4 md:h-4 md:w-4 text-accent-green mr-1 md:mr-2" />
                  <h3 className="font-bold text-base md:text-lg text-charcoal group-hover:text-accent-green transition-colors duration-300 truncate">{location.name}</h3>
                </div>
                <div className="text-lg md:text-xl lg:text-2xl font-mono font-bold text-charcoal">
                  {!timesLoaded ? (
                    <div className="animate-pulse bg-gray-200 h-6 md:h-7 rounded"></div>
                  ) : (
                    <span className="text-charcoal">
                      {currentTimes[location.id] || "00:00:00"}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
