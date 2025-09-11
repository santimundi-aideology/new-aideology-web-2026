"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"

interface VideoWithLoadingProps {
  src: string
  poster?: string
  className?: string
  title?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export default function VideoWithLoading({ 
  src, 
  poster = "/thumbnail.webp", 
  className = "", 
  title,
  style,
  children 
}: VideoWithLoadingProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  const handleLoadStart = () => {
    setIsLoading(true)
    setHasError(false)
  }

  const handleCanPlay = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  return (
    <div className={`relative ${className}`} style={style}>
      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-900 video-poster-zoom">
        <video
          className="w-full h-full"
          controls
          preload="metadata"
          poster={poster}
          onLoadStart={handleLoadStart}
          onCanPlay={handleCanPlay}
          onError={handleError}
          title={title}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Loading Indicator */}
        {isLoading && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <Loader2 className="h-12 w-12 text-accent-green animate-spin" />
                {/* Pulsing ring effect */}
                <div className="absolute inset-0 h-12 w-12 border-2 border-accent-green/30 rounded-full animate-pulse"></div>
              </div>
              <p className="text-white text-sm font-medium">Loading video...</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {hasError && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
            <div className="text-center text-white">
              <p className="text-lg font-medium mb-2">Unable to load video</p>
              <p className="text-sm text-gray-300">Please check your connection and try again</p>
            </div>
          </div>
        )}
        
        {/* Optional overlay for branding */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        
        {children}
      </div>
    </div>
  )
}
