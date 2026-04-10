import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Montserrat } from "next/font/google"
import Script from "next/script"
import "./globals.css"
// import ScrollToTop from "@/components/scroll-to-top" // Commented out
import ScrollAnimations from "@/components/scroll-animations"
import Navbar from "@/components/navbar"
import { Toaster } from 'sonner'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

// Declare ElevenLabs custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'agent-id': string;
      };
    }
  }
}

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
  title: "AIdeology | Enterprise AI Strategy, Delivery & Advisory",
  description:
    "AIdeology helps enterprises adopt AI strategically through advisory, agentic AI delivery, and architecture guidance for scalable, sovereign, and production-ready deployments.",
  icons: {
    icon: "/favicon.ico",
  },
  generator: "v0.dev",
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
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
        <Toaster position="top-right" />
        <Analytics />
        <SpeedInsights />
        {/* ElevenLabs Conversational AI Widget */}
        {React.createElement('elevenlabs-convai', { 'agent-id': 'agent_0801k9pbn6hvfv8bwfw9rz5mybb6' })}
        <Script 
          src="https://unpkg.com/@elevenlabs/convai-widget-embed" 
          strategy="lazyOnload"
          type="text/javascript"
        />
      </body>
    </html>
  )
}
