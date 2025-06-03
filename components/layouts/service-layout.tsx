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
    <div className="px-4 pt-20 pb-12">
      <div className="prose prose-lg max-w-none">{children}</div>
    </div>
  )
}
