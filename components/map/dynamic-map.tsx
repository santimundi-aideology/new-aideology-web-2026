"use client"

import dynamic from "next/dynamic"
import type { Location } from "./leaflet-map"

// Dynamically import the LeafletMap component with no SSR
const LeafletMap = dynamic(() => import("./leaflet-map"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center bg-gray-100 rounded-lg" style={{ height: "500px" }}>
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-green mx-auto mb-4"></div>
        <p className="text-charcoal">Loading map...</p>
      </div>
    </div>
  ),
})

interface DynamicMapProps {
  locations: Location[]
  height?: string
  onLocationSelect?: (locationId: string) => void
}

export default function DynamicMap({ locations, height, onLocationSelect }: DynamicMapProps) {
  return <LeafletMap locations={locations} height={height} onLocationSelect={onLocationSelect} />
}
