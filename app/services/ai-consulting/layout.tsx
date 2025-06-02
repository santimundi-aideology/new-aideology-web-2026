import ServiceLayout from "@/components/layouts/service-layout"
import type { ReactNode } from "react"

export default function AiConsultingLayout({ children }: { children: ReactNode }) {
  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: "/services/ai-consulting", label: "AI Consulting" },
  ]
  const sidebarNavItems = [
    { href: "/services/ai-consulting/conversational-ai", label: "Conversational AI" },
    { href: "/services/ai-consulting/generative-ai", label: "Generative AI" },
    { href: "/services/ai-consulting/ai-agents", label: "AI Agents" },
    { href: "/services/ai-consulting/ai-data-platform", label: "AI Data Platform (Consulting)" },
    { href: "/services/ai-consulting/machine-learning", label: "Machine Learning" },
  ]

  // Note: Title and description will be set by individual MDX pages via frontmatter or props.
  // This layout component primarily sets up the structure and shared navigation.
  // The actual title passed to ServiceLayout would ideally come from the child page's metadata.
  // For simplicity here, we pass a generic one or it could be omitted if pages handle it.
  return (
    <ServiceLayout
      title="AI Consulting" // This will be overridden by MDX frontmatter if set up
      breadcrumbs={breadcrumbs}
      sidebarNavItems={sidebarNavItems}
    >
      {children}
    </ServiceLayout>
  )
}
