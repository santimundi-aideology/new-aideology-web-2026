"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface Location {
  id: string
  name: string
  coords: { lat: number; lng: number }
  description?: string
}

interface InteractiveMapProps {
  locations: Location[]
  height?: string
  className?: string
}

export default function InteractiveMap({ locations, height = "500px", className = "" }: InteractiveMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [activeLocation, setActiveLocation] = useState<string | null>(null)
  const [map, setMap] = useState<any>(null)
  const [markers, setMarkers] = useState<any[]>([])

  useEffect(() => {
    if (typeof window === "undefined") return

    // Dynamically import Leaflet to avoid SSR issues
    import("leaflet").then((L) => {
      // Fix icon paths
      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      })

      if (!mapRef.current || map) return

      // Initialize map
      const mapInstance = L.map(mapRef.current, { worldCopyJump: true }).setView([20, 0], 2)

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(mapInstance)

      // Add custom style to the map
      const mapContainer = mapRef.current
      if (mapContainer) {
        const mapEl = mapContainer.querySelector(".leaflet-container") as HTMLElement
        if (mapEl) {
          mapEl.style.backgroundColor = "#f4f4f4"
          mapEl.style.borderRadius = "0.5rem"
        }
      }

      // Add markers for each location
      const bounds = L.latLngBounds()
      const newMarkers = locations.map((location) => {
        const marker = L.marker([location.coords.lat, location.coords.lng])
          .addTo(mapInstance)
          .bindPopup(`<strong>${location.name}</strong>`)
          .on("click", () => {
            setActiveLocation(location.id)
          })

        bounds.extend(marker.getLatLng())
        return marker
      })

      setMarkers(newMarkers)
      mapInstance.fitBounds(bounds, { padding: [50, 50] })
      setMap(mapInstance)

      return () => {
        if (mapInstance) {
          mapInstance.remove()
        }
      }
    })
  }, [locations, map])

  // Update active location when marker is clicked
  useEffect(() => {
    if (!map || !markers.length) return

    markers.forEach((marker, index) => {
      if (locations[index].id === activeLocation) {
        marker.openPopup()
      }
    })
  }, [activeLocation, locations, map, markers])

  return (
    <div className={`relative ${className}`}>
      <div
        ref={mapRef}
        style={{ height }}
        className="rounded-lg overflow-hidden border border-accent-green/10 z-10"
      ></div>

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
