"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export interface Location {
  id: string
  name: string
  coords: { x: number; y: number } // Percentage coordinates (0-100)
  description?: string
}

interface CustomWorldMapProps {
  locations: Location[]
  height?: string
  className?: string
  onLocationSelect?: (locationId: string | null) => void
}

export default function CustomWorldMap({
  locations,
  height = "500px",
  className = "",
  onLocationSelect,
}: CustomWorldMapProps) {
  const [activeLocation, setActiveLocation] = useState<string | null>(null)

  const handleLocationClick = (locationId: string) => {
    const newActiveLocation = activeLocation === locationId ? null : locationId
    setActiveLocation(newActiveLocation)
    if (onLocationSelect) {
      onLocationSelect(newActiveLocation)
    }
  }

  return (
    <div className={`relative ${className}`}>
      {/* Map Container */}
      <div
        className="relative rounded-lg overflow-hidden border border-accent-green/10 bg-[#f4f4f4]"
        style={{ height }}
      >
        {/* World Map Image */}
        <Image src="/world-map-blue.png" alt="World Map" fill className="object-cover opacity-90" priority />

        {/* Location Markers */}
        {locations.map((location) => (
          <button
            key={location.id}
            className={`absolute w-4 h-4 md:w-6 md:h-6 rounded-full 
              ${activeLocation === location.id ? "bg-accent-green scale-125" : "bg-accent-green/70"} 
              transition-all duration-300 hover:scale-125 hover:bg-accent-green`}
            style={{
              left: `${location.coords.x}%`,
              top: `${location.coords.y}%`,
              transform: "translate(-50%, -50%)",
            }}
            onClick={() => handleLocationClick(location.id)}
            aria-label={`Show ${location.name} information`}
          />
        ))}

        {/* Location Labels */}
        {locations.map((location) => (
          <div
            key={`label-${location.id}`}
            className={`absolute hidden md:block text-xs font-semibold bg-white/80 px-2 py-1 rounded shadow-sm
              ${activeLocation === location.id ? "opacity-100" : "opacity-70"} 
              transition-opacity duration-300`}
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

      {/* Location Info Card */}
      {activeLocation && (
        <div className="absolute inset-x-0 bottom-4 flex justify-center z-20">
          <Card className="bg-white border border-accent-green/30 text-charcoal max-w-xs">
            <CardContent className="p-4">
              <h3 className="font-bold text-electric-green">{locations.find((l) => l.id === activeLocation)?.name}</h3>
              <p className="text-sm text-charcoal/70">
                {locations.find((l) => l.id === activeLocation)?.description ||
                  `AIdeology ${locations.find((l) => l.id === activeLocation)?.name} hub provides regional support and infrastructure solutions.`}
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
