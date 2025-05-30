"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface LoadingSkeletonProps {
  variant?: "card" | "text" | "image" | "list"
  count?: number
  className?: string
}

export default function LoadingSkeleton({ 
  variant = "card", 
  count = 1, 
  className = "" 
}: LoadingSkeletonProps) {
  const renderSkeleton = () => {
    switch (variant) {
      case "card":
        return (
          <Card className={`animate-pulse ${className}`}>
            <CardHeader>
              <div className="w-12 h-12 bg-gray-200 rounded-lg mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
              </div>
              <div className="mt-4 h-4 bg-gray-200 rounded w-24"></div>
            </CardContent>
          </Card>
        )
      
      case "text":
        return (
          <div className={`animate-pulse space-y-2 ${className}`}>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        )
      
      case "image":
        return (
          <div className={`animate-pulse ${className}`}>
            <div className="bg-gray-200 rounded-lg aspect-video"></div>
          </div>
        )
      
      case "list":
        return (
          <div className={`animate-pulse space-y-3 ${className}`}>
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i} className="flex space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <div key={i}>{renderSkeleton()}</div>
      ))}
    </>
  )
} 