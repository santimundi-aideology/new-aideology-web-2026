import ServiceLayout from "@/components/layouts/service-layout"
import type { ReactNode } from "react"

export default function ThreeDAiLayout({ children }: { children: ReactNode }) {
  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: "/services/3d-ai", label: "3D AI" },
  ]
  const sidebarNavItems = [
    { href: "/services/3d-ai/design-visualization", label: "Design & Visualization" },
    { href: "/services/3d-ai/robotic-simulation", label: "Robotic Simulation" },
    { href: "/services/3d-ai/extended-reality", label: "Extended Reality (XR)" },
    { href: "/services/3d-ai/digital-twins", label: "Digital Twins" },
  ]
  return (
    <ServiceLayout title="3D AI" breadcrumbs={breadcrumbs} sidebarNavItems={sidebarNavItems}>
      {children}
    </ServiceLayout>
  )
}
