import type React from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow w-full min-h-screen">{children}</main>
      <Footer />
    </div>
  )
}

export const metadata = {
  title: "Services | AIdeology",
  description: "Explore AIdeology's comprehensive AI services and solutions.",
}
