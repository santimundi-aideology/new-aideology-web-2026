import ServiceLayout from "@/components/layouts/service-layout"
import type { ReactNode } from "react"

export default function AiInfrastructureLayout({ children }: { children: ReactNode }) {
  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: "/services/ai-infrastructure", label: "AI Infrastructure" },
  ]
  const sidebarNavItems = [
    { href: "/services/ai-infrastructure/networking", label: "Networking" },
    { href: "/services/ai-infrastructure/ai-data-platform", label: "AI Data Platform (Infra)" },
    { href: "/services/ai-infrastructure/mlops", label: "MLOps" },
    { href: "/services/ai-infrastructure/accelerated-computing", label: "Accelerated Computing" },
    { href: "/services/ai-infrastructure/virtualization", label: "Virtualization" },
    { href: "/services/ai-infrastructure/sustainable-computing", label: "Sustainable Computing" },
  ]
  return (
    <ServiceLayout title="AI Infrastructure" breadcrumbs={breadcrumbs} sidebarNavItems={sidebarNavItems}>
      {children}
    </ServiceLayout>
  )
}
