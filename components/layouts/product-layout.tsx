import type React from "react"
// Link and ArrowLeft are no longer needed
// import Link from "next/link" 
// import { ArrowLeft } from "lucide-react"
import Footer from "@/components/footer" // Assuming Footer is here

interface ProductLayoutProps {
  children: React.ReactNode
  // backLink and backText props are removed
}

export default function ProductLayout({
  children,
}: ProductLayoutProps) {
  return (
    <>
      <div className="px-4 pt-32 pb-12"> {/* Changed pt-28 to pt-32 */}
        <div className="container mx-auto">
          {/* The 'Back to Products' Link div has been removed */}
          {/* 
          <div className="mb-6">
            <Link
              href={backLink} // This was using the removed props
              className="flex items-center text-accent-green hover:text-accent-green/80 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {backText} // This was using the removed props
            </Link>
          </div>
          */}
          <div className="prose prose-lg max-w-none">{children}</div>
        </div>
      </div>
      <Footer />
    </>
  )
}
