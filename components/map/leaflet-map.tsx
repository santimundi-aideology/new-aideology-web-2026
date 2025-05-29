"use client"

import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { Card, CardContent } from "@/components/ui/card"

// Fix Leaflet icon issues
const fixLeafletIcon = () => {
  delete (L.Icon.Default.prototype as any)._getIconUrl
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  })
}

// Component to fit bounds
function SetBoundsToMarkers({ locations }: { locations: Location[] }) {
  const map = useMap()

  useEffect(() => {
    if (locations.length > 0) {
      const bounds = L.latLngBounds(locations.map((loc) => [loc.coords.lat, loc.coords.lng]))
      map.fitBounds(bounds, { padding: [50, 50] })
    }
  }, [locations, map])

  return null
}

export interface Location {
  id: string
  name: string
  coords: { lat: number; lng: number }
  description?: string
}

interface LeafletMapProps {
  locations: Location[]
  height?: string
  onLocationSelect?: (locationId: string) => void
}

export default function LeafletMap({ locations, height = "500px", onLocationSelect }: LeafletMapProps) {
  const [activeLocation, setActiveLocation] = useState<string | null>(null)

  useEffect(() => {
    fixLeafletIcon()
  }, [])

  const handleMarkerClick = (locationId: string) => {
    setActiveLocation(locationId)
    if (onLocationSelect) {
      onLocationSelect(locationId)
    }
  }

  return (
    <div className="relative">
      <div style={{ height }} className="rounded-lg overflow-hidden border border-accent-green/10 z-10">
        <MapContainer
          center={[20, 0]}
          zoom={2}
          style={{ height: "100%", width: "100%" }}
          className="z-10"
          worldCopyJump={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {locations.map((location) => (
            <Marker
              key={location.id}
              position={[location.coords.lat, location.coords.lng]}
              eventHandlers={{
                click: () => handleMarkerClick(location.id),
              }}
            >
              <Popup>
                <strong>{location.name}</strong>
              </Popup>
            </Marker>
          ))}

          <SetBoundsToMarkers locations={locations} />
        </MapContainer>
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
