"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"

interface GalleryImage {
  src: string
  alt: string
}

interface ImageGalleryProps {
  images: GalleryImage[]
  className?: string
  gridCols?: string
}

export default function ImageGallery({ images, className = "", gridCols = "grid-cols-1 sm:grid-cols-2" }: ImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const openGallery = (imageIndex: number) => {
    setSelectedImageIndex(imageIndex)
  }

  const closeGallery = () => {
    setSelectedImageIndex(null)
  }

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex > 0 ? selectedImageIndex - 1 : images.length - 1)
    }
  }

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex < images.length - 1 ? selectedImageIndex + 1 : 0)
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImageIndex !== null) {
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'ArrowRight') goToNext()
      if (e.key === 'Escape') closeGallery()
    }
  }

  // Add keyboard event listeners
  useEffect(() => {
    if (typeof window !== 'undefined' && selectedImageIndex !== null) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedImageIndex])

  return (
    <>
      {/* Image Grid */}
      <div className={`grid ${gridCols} gap-4 ${className}`}>
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-60 sm:h-72 group cursor-pointer rounded-lg overflow-hidden">
            <Image 
              src={image.src} 
              alt={image.alt} 
              fill 
              className="object-cover transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <button 
              className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              onClick={() => openGallery(index)}
              aria-label="View fullscreen"
            >
              <Maximize2 className="h-5 w-5 text-white" />
            </button>
            <div className="absolute bottom-3 left-3 bg-black/60 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-sm">{index + 1} / {images.length}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center" onClick={closeGallery}>
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 bg-black/50 hover:bg-black/70 p-3 rounded-full z-20 transition-all duration-300 hover:scale-110"
              onClick={closeGallery}
              aria-label="Close gallery"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Image Counter */}
            <div className="absolute top-6 left-6 bg-black/50 px-4 py-2 rounded-full z-20">
              <span className="text-white text-sm">
                {selectedImageIndex + 1} / {images.length}
              </span>
            </div>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-4 rounded-full z-20 transition-all duration-300 hover:scale-110"
                  onClick={(e) => {
                    e.stopPropagation()
                    goToPrevious()
                  }}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-8 w-8 text-white" />
                </button>
                <button
                  className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-4 rounded-full z-20 transition-all duration-300 hover:scale-110"
                  onClick={(e) => {
                    e.stopPropagation()
                    goToNext()
                  }}
                  aria-label="Next image"
                >
                  <ChevronRight className="h-8 w-8 text-white" />
                </button>
              </>
            )}

            {/* Main Image */}
            <div
              className="relative max-w-7xl max-h-[85vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedImageIndex].src}
                alt={images[selectedImageIndex].alt}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Thumbnail Strip */}
            {images.length > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 p-3 rounded-lg">
                {images.map((image, index) => (
                  <button
                    key={index}
                    className={`relative w-16 h-12 rounded overflow-hidden transition-all duration-300 ${
                      index === selectedImageIndex ? 'ring-2 ring-accent-green' : 'opacity-60 hover:opacity-100'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedImageIndex(index)
                    }}
                    aria-label={`View image ${index + 1}`}
                  >
                    <Image
                      src={image.src}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
} 