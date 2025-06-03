import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"
// import ScrollToTop from "@/components/scroll-to-top" // Commented out
import ScrollAnimations from "@/components/scroll-animations"
import Navbar from "@/components/navbar"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "AIdeology | Elite AI Infrastructure & 3D AI Solutions",
  description:
    "AIdeology is an NVIDIA Elite Solution Provider that designs, deploys, and operates AI & HPC infrastructure, 3D AI pipelines, and AI consulting services.",
  icons: {
    icon: "/favicon.ico",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} font-sans bg-[#f4f4f4] text-charcoal`}>
        <Navbar />
        <ScrollAnimations />
        {children}
      </body>
    </html>
  )
}
