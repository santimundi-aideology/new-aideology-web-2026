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
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link
          href={backLink}
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {backText}
        </Link>
      </div>

      <div className="prose prose-lg max-w-none">{children}</div>
    </div>
  )
}
