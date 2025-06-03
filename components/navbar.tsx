"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

interface NavbarProps {
  forceDarkLogo?: boolean
}

// Define navItems outside the component for stability and to be used by useEffect
const navItems = [
  { href: "/", label: "Home", sectionId: "hero" }, // Ensure an element with id="hero" (or similar, like the first main section) exists
  { href: { pathname: "/", hash: "#solutions" }, label: "Solutions", sectionId: "solutions" },
  { href: { pathname: "/", hash: "#partners" }, label: "Partners", sectionId: "partners" },
  { href: { pathname: "/", hash: "#customers" }, label: "Customers", sectionId: "customers" },
  { href: { pathname: "/", hash: "#news" }, label: "News", sectionId: "news" },
]

export default function Navbar({ forceDarkLogo = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const pathname = usePathname()
  const isOnServiceSubpage = pathname.startsWith("/services/")

  // Add state for managing the submenu
  const [showSubmenu, setShowSubmenu] = useState(false)
  const [selectedSubmenu, setSelectedSubmenu] = useState<string | null>("AI Infrastructure")

  const submenuTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      if (pathname === "/") {
        let currentActiveSection = ""
        // Adjust scrollPosition to be slightly lower than viewport top for better detection
        const scrollPosition = window.scrollY + window.innerHeight * 0.33

        for (const item of navItems) {
          const elementId = item.sectionId
          if (!elementId) continue

          const element = document.getElementById(elementId)

          if (element) {
            // HTMLElement allows offsetHeight
            const rect = element.getBoundingClientRect()
            const elementTop = window.scrollY + rect.top
            const elementBottom = elementTop + element.offsetHeight

            if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
              currentActiveSection = elementId
              break
            }
          }
        }

        // Fallback for hero section if at the very top and no other section is matched
        if (!currentActiveSection && window.scrollY < window.innerHeight * 0.33) {
          const heroItem = navItems.find((item) => item.sectionId === "hero")
          if (heroItem) {
            currentActiveSection = heroItem.sectionId
          }
        }
        setActiveSection(currentActiveSection)
      } else {
        setActiveSection("") // Clear active section if not on homepage
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  const handleNavigation = (href: string, sectionId?: string) => {
    setIsMobileMenuOpen(false)

    if (href.startsWith("/#") && pathname === "/") {
      // If already on the homepage and there's a hash, scroll to section
      const targetHash = href.substring(2)
      const element = document.getElementById(targetHash)
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }
    // For other cases, Next.js Link handles navigation
  }

  const navItems = [
    { href: "/", label: "Home", sectionId: "" },
    { href: "/#solutions", label: "Solutions", sectionId: "solutions" },
    { href: "/#partners", label: "Partners", sectionId: "partners" },
    { href: "/#customers", label: "Customers", sectionId: "customers" },
    { href: "/#news", label: "News", sectionId: "news" },
  ]

  const submenuItems = {
    "AI Infrastructure": [
      { href: "/services/ai-infrastructure/networking", label: "Networking" },
      { href: "/services/ai-infrastructure/ai-data-platform", label: "AI Data Platform" },
      { href: "/services/ai-infrastructure/mlops", label: "MLOps" },
      { href: "/services/ai-infrastructure/accelerated-computing", label: "Accelerated Computing" },
      { href: "/services/ai-infrastructure/virtualization", label: "Virtualization" },
      { href: "/services/ai-infrastructure/sustainable-computing", label: "Sustainable Computing" },
    ],
    "3D AI": [
      { href: "/services/3d-ai/design-visualization", label: "Design Visualization" },
      { href: "/services/3d-ai/robotic-simulation", label: "Robotic Simulation" },
      { href: "/services/3d-ai/extended-reality", label: "Extended Reality" },
      { href: "/services/3d-ai/digital-twins", label: "Digital Twins" },
    ],
    "AI Consulting": [
      { href: "/services/ai-consulting/conversational-ai", label: "Conversational AI" },
      { href: "/services/ai-consulting/generative-ai", label: "Generative AI" },
      { href: "/services/ai-consulting/ai-agents", label: "AI Agents" },
      { href: "/services/ai-consulting/ai-data-platform", label: "AI Data Platform" },
      { href: "/services/ai-consulting/machine-learning", label: "Machine Learning" },
    ],
    "Robotics & Edge AI": [
      { href: "/services/robotics-edge-ai/edge-ai", label: "Edge AI" },
      { href: "/services/robotics-edge-ai/vision-ai", label: "Vision AI" },
    ],
  }

  const mainServices = ["AI Infrastructure", "3D AI", "AI Consulting", "Robotics & Edge AI"]

  const handleSubmenuEnter = () => {
    if (submenuTimeoutRef.current) {
      clearTimeout(submenuTimeoutRef.current)
    }
    setShowSubmenu(true)
    setSelectedSubmenu("AI Infrastructure")
  }

  const handleSubmenuLeave = () => {
    submenuTimeoutRef.current = setTimeout(() => {
      setShowSubmenu(false)
    }, 300) // 300ms delay before hiding
  }

  useEffect(() => {
    return () => {
      if (submenuTimeoutRef.current) {
        clearTimeout(submenuTimeoutRef.current)
      }
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-white/90 shadow-lg py-3 text-charcoal" : "bg-transparent py-6 text-white"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center" onClick={() => handleNavigation("/")}>
          <Image
            src={isScrolled || forceDarkLogo ? "/aideology.webp" : "/aideology-white.webp"}
            alt="AIdeology Logo"
            width={200}
            height={50}
            className="h-12 md:h-14 w-auto transition-all duration-300"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            if (item.label === "Solutions") {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={handleSubmenuEnter}
                  onMouseLeave={handleSubmenuLeave}
                >
                  <span
                    className={`relative transition-all duration-300 hover:text-accent-green cursor-pointer ${
                      isScrolled || forceDarkLogo ? "text-charcoal" : "text-white"
                    } ${activeSection === item.sectionId ? "text-accent-green font-semibold" : ""}`}
                  >
                    {item.label}
                    {activeSection === item.sectionId && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-green animate-scale-in" />
                    )}
                  </span>

                  {/* Submenu */}
                  {showSubmenu && (
                    <div
                      className="absolute top-full left-0 mt-1 bg-white shadow-xl rounded-lg border border-gray-200 z-50 w-[600px] p-6"
                      onMouseEnter={handleSubmenuEnter}
                      onMouseLeave={handleSubmenuLeave}
                    >
                      <div className="flex">
                        {/* Left side - Main services */}
                        <div className="w-1/2 pr-4 border-r border-gray-200">
                          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                            Solutions
                          </h3>
                          {mainServices.map((service) => (
                            <div
                              key={service}
                              className={`py-2 px-3 rounded cursor-pointer transition-colors ${
                                selectedSubmenu === service
                                  ? "bg-accent-green/10 text-accent-green"
                                  : "text-charcoal hover:bg-gray-50"
                              }`}
                              onMouseEnter={() => setSelectedSubmenu(service)}
                            >
                              <Link href={`/services/${service.toLowerCase().replace(" ", "-")}`} className="block">
                                {service}
                              </Link>
                            </div>
                          ))}
                        </div>

                        {/* Right side - Sub-services */}
                        <div className="w-1/2 pl-4">
                          {selectedSubmenu && (
                            <>
                              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                                {selectedSubmenu} Services
                              </h3>
                              {submenuItems[selectedSubmenu as keyof typeof submenuItems]?.map((subItem) => (
                                <Link
                                  key={subItem.label}
                                  href={subItem.href}
                                  className="block py-2 px-3 text-charcoal hover:text-accent-green hover:bg-accent-green/5 rounded transition-colors"
                                  onClick={() => {
                                    setShowSubmenu(false)
                                  }}
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            } else {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => handleNavigation(item.href, item.sectionId)}
                  className={`relative transition-all duration-300 hover:text-accent-green cursor-pointer ${
                    isScrolled || forceDarkLogo ? "text-charcoal" : "text-white"
                  } ${activeSection === item.sectionId ? "text-accent-green font-semibold" : ""}`}
                >
                  {item.label}
                  {activeSection === item.sectionId && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-green animate-scale-in" />
                  )}
                </Link>
              )
            }
          })}
          <Button
            asChild
            className="bg-accent-green text-charcoal hover:bg-accent-green/90 transition-all duration-300 hover:scale-105"
          >
            <Link href="#contact" onClick={() => handleNavigation("#contact", "contact")}>
              Contact Us
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled || forceDarkLogo ? "text-charcoal" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled || forceDarkLogo ? "text-charcoal" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-accent-green/20">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => {
              if (item.label === "Solutions") {
                return (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => handleNavigation(item.href, item.sectionId)}
                      className={`block py-2 transition-colors hover:text-accent-green ${
                        activeSection === item.sectionId ? "text-accent-green font-semibold" : "text-charcoal"
                      }`}
                    >
                      {item.label}
                    </Link>
                    <div className="ml-4 mt-2 space-y-2">
                      {mainServices.map((service) => (
                        <div key={service}>
                          <Link
                            href={`/services/${service.toLowerCase().replace(" ", "-")}`}
                            className="block py-1 text-sm text-gray-600 hover:text-accent-green"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {service}
                          </Link>
                          <div className="ml-4 space-y-1">
                            {submenuItems[service as keyof typeof submenuItems]?.map((subItem) => (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                className="block py-1 text-xs text-gray-500 hover:text-accent-green"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              } else {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => handleNavigation(item.href, item.sectionId)}
                    className={`block py-2 transition-colors hover:text-accent-green ${
                      activeSection === item.sectionId ? "text-accent-green font-semibold" : "text-charcoal"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              }
            })}
            <Button asChild className="w-full bg-accent-green text-charcoal hover:bg-accent-green/90">
              <Link href="#contact" onClick={() => handleNavigation("#contact", "contact")}>
                Contact Us
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
