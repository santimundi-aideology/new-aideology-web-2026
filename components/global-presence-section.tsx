"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Clock } from "lucide-react"

export default function GlobalPresenceSection() {
  const [currentTimes, setCurrentTimes] = useState<{ [key: string]: string }>({})

  const locations = [
    {
      id: "london",
      name: "London",
      timezone: "Europe/London",
      coords: { x: 47, y: 30 },
      description: "Our London office serves as our European headquarters, providing comprehensive AI solutions.",
    },
    {
      id: "madrid",
      name: "Madrid",
      timezone: "Europe/Madrid",
      coords: { x: 48, y: 37 },
      description: "The Madrid hub focuses on AI infrastructure and works closely with our Barcelona team.",
    },
    {
      id: "barcelona",
      name: "Barcelona",
      timezone: "Europe/Madrid",
      coords: { x: 50, y: 35 },
      description: "Our Barcelona office specializes in 3D AI solutions and serves clients throughout Southern Europe.",
    },
    {
      id: "riyadh",
      name: "Riyadh",
      timezone: "Asia/Riyadh",
      coords: { x: 62, y: 42 },
      description:
        "The Riyadh hub specializes in AI infrastructure for government and enterprise clients in Saudi Arabia.",
    },
    {
      id: "doha",
      name: "Doha",
      timezone: "Asia/Qatar",
      coords: { x: 65, y: 45 },
      description: "Our Doha office provides AI consulting and infrastructure services throughout Qatar.",
    },
    {
      id: "abu-dhabi",
      name: "Abu Dhabi",
      timezone: "Asia/Dubai",
      coords: { x: 67, y: 47 },
      description: "The Abu Dhabi hub serves clients across the Emirates with cutting-edge AI solutions.",
    },
    {
      id: "dubai",
      name: "Dubai",
      timezone: "Asia/Dubai",
      coords: { x: 68, y: 48 },
      description: "Our Dubai hub serves as our headquarters and main operations center for the Middle East region.",
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
    }

    // Update immediately
    updateTimes()

    // Update every second
    const interval = setInterval(updateTimes, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="global-presence" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Global Presence</h2>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
            Strategically located hubs to serve clients worldwide
          </p>
        </div>

        <div className="relative">
          {/* Map Container */}
          <div className="relative w-full max-w-5xl mx-auto mb-12">
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden border border-accent-green/10 bg-[#f4f4f4]">
              {/* World Map Image - focusing on Europe and Middle East */}
              <Image
                src="/world-map-europe-middle-east.png"
                alt="AIdeology Global Presence Map"
                fill
                className="object-cover"
                priority
                onError={(e) => {
                  // Fallback to a placeholder if the specific map image doesn't load
                  e.currentTarget.src =
                    "/placeholder.svg?height=600&width=1000&query=World map showing Europe and Middle East"
                }}
              />

              {/* Location Markers */}
              {locations.map((location) => (
                <div
                  key={location.id}
                  className="absolute w-4 h-4 md:w-6 md:h-6 rounded-full bg-accent-green animate-pulse shadow-lg border-2 border-white"
                  style={{
                    left: `${location.coords.x}%`,
                    top: `${location.coords.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  title={location.name}
                />
              ))}

              {/* Location Labels for larger screens */}
              {locations.map((location) => (
                <div
                  key={`label-${location.id}`}
                  className="absolute hidden lg:block text-xs font-semibold bg-white/90 px-2 py-1 rounded shadow-sm border border-accent-green/20"
                  style={{
                    left: `${location.coords.x}%`,
                    top: `${location.coords.y + 5}%`,
                    transform: "translate(-50%, 0)",
                  }}
                >
                  {location.name}
                </div>
              ))}
            </div>
          </div>

          {/* Real-time Clocks */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {locations.map((location) => (
              <Card key={location.id} className="border border-accent-green/20 hover-lift">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Clock className="h-4 w-4 text-accent-green mr-2" />
                    <h3 className="font-bold text-sm">{location.name}</h3>
                  </div>
                  <div className="text-xl md:text-2xl font-mono font-bold text-electric-green">
                    {currentTimes[location.id] || "00:00:00"}
                  </div>
                  <div className="text-xs text-charcoal/60 mt-1">
                    {new Date().toLocaleDateString("en-US", {
                      timeZone: location.timezone,
                      weekday: "short",
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
