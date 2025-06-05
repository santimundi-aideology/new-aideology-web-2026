import type React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface ServiceLayoutProps {
  children: React.ReactNode
  backLink?: string
  backText?: string
}

export default function ServiceLayout({
  children,
  backLink = "/services",
  backText = "Back to Services",
}: ServiceLayoutProps) {
  return (
    <div className="bg-white pt-20">
      {/* Children are now responsible for their own width, centering, and prose styling internally */}
      {children}
    </div>
  )
}
