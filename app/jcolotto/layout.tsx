import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Jorge Colotto - CEO | AIdeology",
  description:
    "Contact Jorge Colotto, CEO of AIdeology. Leading AI infrastructure and 3D AI solutions across the Middle East and beyond.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
  },
}

export default function JorgeColottoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
