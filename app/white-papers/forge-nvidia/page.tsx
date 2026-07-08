import type { Metadata } from "next"
import ForgeNvidiaWhitePaper from "@/components/white-papers/forge-nvidia-page"

export const metadata: Metadata = {
  title: "Forge — Agentic Platform Suite | NVIDIA Partner Solution Profile | AIdeology",
  description:
    "Partner solution profile for NVIDIA teams: Forge, AIdeology's NVIDIA-native agentic platform suite — from sales prototype to multi-tenant production service.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noarchive: true,
    nosnippet: true,
  },
}

export default function ForgeNvidiaWhitePaperPage() {
  return <ForgeNvidiaWhitePaper />
}
