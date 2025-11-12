import type React from "react"
import Footer from "@/components/footer"

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col">
      <main className="flex-grow w-full min-h-dvh pt-[0rem]">{children}</main>
      <Footer />
    </div>
  )
}

export const metadata = {
  title: "Services | AIdeology",
  description: "Explore AIdeology's comprehensive AI services and solutions.",
}
