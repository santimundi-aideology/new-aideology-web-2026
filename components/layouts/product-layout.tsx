import type React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface ProductLayoutProps {
  children: React.ReactNode
  backLink?: string
  backText?: string
}

export default function ProductLayout({
  children,
  backLink = "/products",
  backText = "Back to Products",
}: ProductLayoutProps) {
  return (
    <div className="px-4 pt-20 pb-12">
      <div className="container mx-auto">
        <div className="mb-6">
          <Link
            href={backLink}
            className="flex items-center text-accent-green hover:text-accent-green/80 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {backText}
          </Link>
        </div>
        <div className="prose prose-lg max-w-none">{children}</div>
      </div>
    </div>
  )
}
