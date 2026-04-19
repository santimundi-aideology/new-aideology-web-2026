import type { Metadata } from "next"
import Footer from "@/components/footer"
import HumanoidRoboticsStory from "@/components/humanoid-robotics-story"

export const metadata: Metadata = {
  title: "Humanoid Robotics Deployment | AIdeology",
  description:
    "How AIdeology deploys humanoid robotics in the enterprise — from Omniverse digital twins and Isaac Sim training to fleet operations on NVIDIA AI Enterprise.",
}

export default function HumanoidRoboticsProcessPage() {
  return (
    <>
      <HumanoidRoboticsStory />
      <Footer />
    </>
  )
}
