import type React from "react"
import ServiceLayout from "@/components/layouts/service-layout"

const breadcrumbs = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/services/design-simulation", label: "Design & Simulation" },
]

const sidebarNavItems = [
  {
    title: "Design Visualization",
    href: "/services/design-simulation/design-visualization",
  },
  {
    title: "Robotic Simulation",
    href: "/services/design-simulation/robotic-simulation",
  },
  {
    title: "Extended Reality",
    href: "/services/design-simulation/extended-reality",
  },
  {
    title: "Digital Twins",
    href: "/services/design-simulation/digital-twins",
  },
]

export default function DesignSimulationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ServiceLayout title="Design & Simulation" breadcrumbs={breadcrumbs} sidebarNavItems={sidebarNavItems}>
      {children}
    </ServiceLayout>
  )
}
