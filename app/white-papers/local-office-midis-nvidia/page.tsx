import type { Metadata } from "next"
import LocalOfficeMidisNvidiaWhitePaper from "@/components/white-papers/local-office-midis-nvidia-page"

export const metadata: Metadata = {
  title: "Agentic AI Lead-to-Cash | Local Office · NVIDIA White Paper | AIdeology",
  description:
    "Draft white paper for NVIDIA partner teams: agentic AI across the Lead-to-Cash lifecycle for Local Office (Midis Group), delivered by AIdeology.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noarchive: true,
    nosnippet: true,
  },
}

export default function LocalOfficeMidisNvidiaWhitePaperPage() {
  return <LocalOfficeMidisNvidiaWhitePaper />
}
