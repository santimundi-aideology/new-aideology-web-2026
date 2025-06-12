import type React from "react"
import ServiceLayout from "@/components/layouts/service-layout"

const breadcrumbs = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/services/design-simulation", label: "Design & Simulation" },
]

const navigationItems = [
  { href: "/services/3d-ai", label: "Design & Simulation" },
  {
    label: "Services",
    children: [
      {
        href: "/services/3d-ai/design-visualization",
        label: "Design Visualization",
      },
      {
        href: "/services/3d-ai/robotic-simulation",
        label: "Robotic Simulation",
      },
      {
        href: "/services/3d-ai/extended-reality",
        label: "Extended Reality",
      },
      {
        href: "/services/3d-ai/digital-twins",
        label: "Digital Twins",
      },
    ],
  },
]

export default function DesignSimulationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ServiceLayout title="Design & Simulation" breadcrumbs={breadcrumbs} sidebarNavItems={navigationItems}>
      {children}
    </ServiceLayout>
  )
}
