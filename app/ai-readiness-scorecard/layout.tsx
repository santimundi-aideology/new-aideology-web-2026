import type { Metadata } from "next"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "AI Readiness Scorecard | AIdeology",
  description:
    "Assess your organization's readiness for successful AI adoption across strategy, data, technology, governance, talent, and operations. Get a maturity score and prioritized recommendations in 5–7 minutes.",
  openGraph: {
    title: "AI Readiness Scorecard | AIdeology",
    description:
      "Assess your organization's AI readiness across 11 dimensions and get tailored recommendations.",
  },
}

export default function ScorecardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-dvh bg-[#f4f4f4] text-charcoal">
      {children}
      <Footer />
    </main>
  )
}
