import type { Metadata } from "next"
import HctConciergeNvidiaWhitePaper from "@/components/white-papers/hct-concierge-nvidia-page"

export const metadata: Metadata = {
  title: "HCT Concierge — Physical AI Humanoid | NVIDIA Partner Solution Profile | AIdeology",
  description:
    "Partner solution profile for NVIDIA teams: the HCT Concierge, a bilingual Physical AI humanoid built simulation-first on NVIDIA Isaac, GR00T, Cosmos and Riva.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noarchive: true,
    nosnippet: true,
  },
}

export default function HctConciergeNvidiaWhitePaperPage() {
  return <HctConciergeNvidiaWhitePaper />
}
