"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import type {
  Map as LeafletMap,
  Marker as LeafletMarker,
  Icon as LeafletIconType,
  LatLngBoundsExpression,
} from "leaflet" // Import types only
import { cn } from "@/lib/utils"

// Declare L on window for TypeScript
declare global {
  interface Window {
    L: typeof import("leaflet")
  }
}

interface LocationMarker {
  id: string
  name: string
  coords: { lat: number; lng: number }
  description?: string
  iconUrl?: string
}

interface InteractiveMapProps {
  locations: LocationMarker[]
  height?: string
  className?: string
  initialZoom?: number
  centerCoords?: { lat: number; lng: number }
}

const LEAFLET_CSS_URL = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
const LEAFLET_JS_URL = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"

export function InteractiveMap({
  locations,
  height = "400px",
  className,
  initialZoom = 2,
  centerCoords,
}: InteractiveMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<LeafletMap | null>(null)
  const [isLeafletLoaded, setIsLeafletLoaded] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  const loadLeaflet = useCallback(() => {
    if (window.L) {
      setIsLeafletLoaded(true)
      return
    }

    // Load CSS
    const cssLink = document.createElement("link")
    cssLink.rel = "stylesheet"
    cssLink.href = LEAFLET_CSS_URL
    document.head.appendChild(cssLink)

    // Load JS
    const script = document.createElement("script")
    script.src = LEAFLET_JS_URL
    script.async = true
    script.onload = () => {
      if (window.L) {
        // Fix for default icon paths in Leaflet
        // @ts-ignore
        delete window.L.Icon.Default.prototype._getIconUrl
        window.L.Icon.Default.mergeOptions({
          iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
          iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
          shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
        })
        setIsLeafletLoaded(true)
      } else {
        console.error("Leaflet loaded but window.L is not defined.")
      }
    }
    script.onerror = () => {
      console.error("Failed to load Leaflet script.")
    }
    document.body.appendChild(script)

    return () => {
      // Cleanup script and link if component unmounts before loading
      document.head.removeChild(cssLink)
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  useEffect(() => {
    if (isMounted) {
      loadLeaflet()
    }
  }, [isMounted, loadLeaflet])

  useEffect(() => {
    if (!isMounted || !isLeafletLoaded || !mapRef.current || mapInstanceRef.current || !window.L) {
      return
    }

    const L = window.L

    const map = L.map(mapRef.current)
    mapInstanceRef.current = map

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map)

    if (locations.length > 0) {
      const markers: LeafletMarker[] = locations.map((location) => {
        const markerOptions: L.MarkerOptions = {}
        if (location.iconUrl) {
          markerOptions.icon = L.icon({
            iconUrl: location.iconUrl,
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32],
          }) as LeafletIconType<L.BaseIconOptions>
        }
        const marker = L.marker([location.coords.lat, location.coords.lng], markerOptions).addTo(map)
        let popupContent = `<strong>${location.name}</strong>`
        if (location.description) {
          popupContent += `<br>${location.description}`
        }
        marker.bindPopup(popupContent)
        return marker
      })

      if (markers.length > 0) {
        const group = L.featureGroup(markers)
        map.fitBounds(group.getBounds().pad(0.1) as LatLngBoundsExpression)
      }
    } else if (centerCoords) {
      map.setView([centerCoords.lat, centerCoords.lng], initialZoom)
    } else {
      map.setView([20, 0], initialZoom)
    }

    setTimeout(() => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize()
      }
    }, 100)
  }, [isMounted, isLeafletLoaded, locations, centerCoords, initialZoom, height])

  if (!isLeafletLoaded && isMounted) {
    return (
      <div style={{ height }} className={cn("w-full flex items-center justify-center bg-gray-100", className)}>
        Loading Map...
      </div>
    )
  }

  if (!isMounted) {
    return null // Or a placeholder if you prefer
  }

  return <div ref={mapRef} style={{ height }} className={cn("w-full", className)} />
}
