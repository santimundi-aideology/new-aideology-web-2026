import type { Metadata } from "next"
import Footer from "@/components/footer"
import BuildingProcessStory from "@/components/building-process-story"

export const metadata: Metadata = {
  title: "Building Process | AIdeology",
  description:
    "Explore how AIdeology moves from business analysis and feasibility assessment to agentic systems, platform design, user experience, and enterprise-scale AI operations.",
}

export default function BuildingProcessPage() {
  return (
    <>
      <BuildingProcessStory />
      <Footer />
    </>
  )
}
