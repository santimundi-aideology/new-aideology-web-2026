"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"
import { usePathname } from "next/navigation"
import { SheetFooter } from "@/components/ui/sheet"

interface NavbarProps {
  forceDarkLogo?: boolean
}

// Type for nav items that have a hash link
interface NavItemWithHash {
  pathname: string
  hash: string
}

// Helper function to stringify href for Link component
const getLinkHref = (href: string | NavItemWithHash): string => {
  if (typeof href === "string") return href
  return href.pathname + (href.hash || "")
}

// Exported scroll utility function
export const performScrollToSection = (
  targetId: string,
  navbarHeight: number,
  scrollBehavior: ScrollBehavior = "smooth", // Default to 'smooth'
) => {
  const element = document.getElementById(targetId)
  if (element) {
    const heading = element.querySelector("h2")
    const scrollTarget = heading || element // Prefer heading if available for more precise positioning under navbar
    const elementPosition = scrollTarget.getBoundingClientRect().top + window.scrollY

    const sectionPaddingTop = Number.parseFloat(window.getComputedStyle(element).paddingTop) || 0
    let headingHeight = 0
    if (heading) {
      headingHeight = heading.offsetHeight
    }
    // User's current formula for offset, consistent with existing Navbar logic
    const extraOffset = sectionPaddingTop - headingHeight * 3
    const offsetPosition = elementPosition - navbarHeight + extraOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: scrollBehavior,
    })
    return true // Indicate scroll was attempted
  }
  return false // Indicate element not found
}

export default function Navbar({ forceDarkLogo = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const pathname = usePathname()
  const navbarRef = useRef<HTMLElement>(null) // Ref for the header element

  // Add state for managing the submenu
  const [showSubmenu, setShowSubmenu] = useState(false)
  const [selectedSubmenu, setSelectedSubmenu] = useState<string | null>(null) // Defaulting to null as per typical initial state

  const submenuTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Determine if the navbar should always be dark based on the current page or forceDarkLogo prop
  const alwaysDark =
    forceDarkLogo ||
    pathname.startsWith("/services/") ||
    pathname.startsWith("/products/") ||
    // pathname === "/customers" || // TODO: RESTORE CUSTOMERS PAGE - Uncomment this line when customers page is restored
    pathname === "/news"

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      if (pathname === "/") {
        let currentActiveSection = ""
        // Adjust scrollPosition to be slightly lower than viewport top for better detection
        const scrollPosition = window.scrollY + window.innerHeight * 0.33

        for (const item of navItems) {
          // Only consider items with sectionId and object href with hash for active section highlighting
          if (item.sectionId && typeof item.href === "object" && "hash" in item.href && item.href.hash) {
            const hrefObj = item.href as NavItemWithHash // Explicit cast for clarity, though check is sufficient
            const elementId = item.sectionId
            const element = document.getElementById(elementId)

            if (element) {
              const rect = element.getBoundingClientRect()
              const elementTop = window.scrollY + rect.top
              const elementBottom = elementTop + element.offsetHeight

              if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
                currentActiveSection = elementId
                break
              }
            }
          }
        }

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

  // New useEffect for initial hash scrolling on homepage or after cross-page navigation to a hash
  useEffect(() => {
    if (pathname === "/") {
      const hash = window.location.hash
      if (hash) {
        const targetId = hash.substring(1) // Remove #
        // Use a timeout to ensure the DOM is fully ready after page navigation
        setTimeout(() => {
          if (navbarRef.current) {
            const navbarHeight = navbarRef.current.offsetHeight
            performScrollToSection(targetId, navbarHeight, "auto") // Use utility function
          }
        }, 100) // 100ms delay, adjust if necessary
      }
    }
  }, [pathname]) // Rerun when pathname changes

  const handleNavigation = (event: React.MouseEvent<HTMLAnchorElement>, hrefInput: string | NavItemWithHash) => {
    setIsMobileMenuOpen(false)
    const targetHref = getLinkHref(hrefInput) // e.g., "/#solutions", "#contact", "/news"

    // Handle same-page hash navigation if currently on the homepage
    if (pathname === "/") {
      let hashTargetId: string | null = null

      if (targetHref.startsWith("/#")) {
        // e.g., "/#solutions"
        hashTargetId = targetHref.substring(2)
      } else if (targetHref.startsWith("#") && !targetHref.startsWith("/#")) {
        // e.g., "#contact"
        hashTargetId = targetHref.substring(1)
      }

      if (hashTargetId && navbarRef.current) {
        event.preventDefault() // Prevent default only for same-page smooth scroll
        const navbarHeight = navbarRef.current.offsetHeight
        performScrollToSection(hashTargetId, navbarHeight, "smooth") // Use utility function
        return // Exit after handling same-page scroll
      }
    }
    // For other cases (like navigating to a different page, or to the homepage with a hash from another page),
    // let Next.js Link component handle the navigation.
    // The new useEffect will then handle scrolling if the destination is the homepage with a hash.
  }

  const navItems = [
    { href: "/", label: "Home", sectionId: "" },
    { href: { pathname: "/", hash: "#solutions" }, label: "Solutions", sectionId: "solutions" },
    { href: { pathname: "/", hash: "#partners" }, label: "Partners", sectionId: "partners" },
    { href: "/products", label: "Products", sectionId: "" },
    { href: "/news", label: "News", sectionId: "" },
    // { href: "/customers", label: "Customers", sectionId: "" }, // TODO: RESTORE CUSTOMERS PAGE - Uncomment this line and remove this comment when customers page is restored
  ]

  const submenuItems: Record<string, { href: string; label: string }[]> = {
    Solutions: [
      { href: "/solutions/ai-infrastructure", label: "AI Infrastructure" },
      { href: "/solutions/design-simulation", label: "Design & Simulation" },
      { href: "/solutions/ai-consulting", label: "AI Consulting" },
      { href: "/solutions/robotics-edge-ai", label: "Robotics & Edge AI" },
    ],
    "AI Infrastructure": [
      { href: "/solutions/ai-infrastructure/professional-services", label: "Professional Services" },
      { href: "/solutions/ai-infrastructure/ai-data-platform", label: "AI Data Platform" },
      { href: "/solutions/ai-infrastructure/mlops", label: "MLOps" },
      { href: "/solutions/ai-infrastructure/accelerated-computing", label: "Accelerated Computing" },
      { href: "/solutions/ai-infrastructure/virtualization", label: "Virtualization" },
      { href: "/solutions/ai-infrastructure/sustainable-computing", label: "Sustainable Computing" },
    ],
    "Design & Simulation": [
      { href: "/solutions/design-simulation/design-visualization", label: "Design Visualization" },
      { href: "/solutions/design-simulation/robotic-simulation", label: "Robotic Simulation" },
      { href: "/solutions/design-simulation/extended-reality", label: "Extended Reality" },
      { href: "/solutions/design-simulation/digital-twins", label: "Digital Twins" },
    ],
    "AI Consulting": [
      { href: "/solutions/ai-security-compliance", label: "AI Security & Compliance" },
      { href: "/services/ai-consulting/conversational-ai", label: "Conversational AI" },
      { href: "/services/ai-consulting/generative-ai", label: "Generative AI" },
      { href: "/services/ai-consulting/ai-agents", label: "AI Agents" },
      { href: "/services/ai-consulting/machine-learning", label: "Machine Learning" },
    ],
    "Robotics & Edge AI": [
      { href: "/services/robotics-edge-ai/edge-ai", label: "Edge AI" },
      { href: "/services/robotics-edge-ai/vision-ai", label: "Vision AI" },
      { href: "/services/robotics-edge-ai/robotics", label: "Robotics" },
    ],
    Products: [
      { href: "/products/dgx-spark", label: "DGX Spark", isNew: true },
      { href: "/products/nvidia-dgx", label: "NVIDIA DGX Systems" },
      { href: "/products/enterprise-ai", label: "Enterprise AI Platforms" },
      { href: "/products/storage-systems", label: "Storage Systems" },
      { href: "/products/nvidia-ai-enterprise", label: "NVIDIA AI Enterprise" },
    ],
  }

  const mainServices = ["AI Infrastructure", "3D AI", "AI Consulting", "Robotics & Edge AI"]

  const handleSubmenuEnter = (menu: string) => {
    if (submenuTimeoutRef.current) {
      clearTimeout(submenuTimeoutRef.current)
    }
    setShowSubmenu(true)
    setSelectedSubmenu(menu)
  }

  const handleSubmenuLeave = () => {
    submenuTimeoutRef.current = setTimeout(() => {
      setShowSubmenu(false)
      setSelectedSubmenu(null)
    }, 300) // 300ms delay before hiding
  }

  const [flyoutSubmenu, setFlyoutSubmenu] = useState<string | null>(null)
  const flyoutTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleFlyoutEnter = (menu: string) => {
    if (flyoutTimeoutRef.current) {
      clearTimeout(flyoutTimeoutRef.current)
    }
    setFlyoutSubmenu(menu)
  }

  const handleFlyoutLeave = () => {
    flyoutTimeoutRef.current = setTimeout(() => {
      setFlyoutSubmenu(null)
    }, 300)
  }

  useEffect(() => {
    return () => {
      if (submenuTimeoutRef.current) {
        clearTimeout(submenuTimeoutRef.current)
      }
      if (flyoutTimeoutRef.current) {
        clearTimeout(flyoutTimeoutRef.current)
      }
    }
  }, [])

  // Determine navbar appearance
  const isHomepage = pathname === "/"
  // Solid nav appears if scrolled, or forced, or not on homepage, or on specific content pages needing dark text from start
  const showSolidNav = forceDarkLogo || isScrolled || pathname !== "/"

  const headerClasses = showSolidNav ? "bg-white/90 shadow-none text-charcoal" : "bg-transparent text-white"
  const logoSrc = showSolidNav ? "/aideology.webp" : "/aideology-white.webp"
  const linkTextColor = showSolidNav ? "text-charcoal" : "text-white"
  const mobileMenuIconColor = showSolidNav ? "text-charcoal" : "text-white"

  return (
    <header
      ref={navbarRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 h-[80px] flex items-center ${headerClasses}`}
      onMouseLeave={handleSubmenuLeave}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex-shrink-0 outline-none focus:outline-none">
          <Image src={logoSrc || "/placeholder.svg"} alt="AIdeology Logo" width={150} height={40} priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() =>
                (item.label === "Solutions" || item.label === "Products") && handleSubmenuEnter(item.label)
              }
              onMouseLeave={() => (item.label === "Solutions" || item.label === "Products") && handleSubmenuLeave()}
            >
              <Link
                href={getLinkHref(item.href)}
                onClick={(e) => handleNavigation(e, item.href)}
                className={`
                  flex items-center text-base font-medium transition-all duration-300 group outline-none focus:outline-none
                  ${linkTextColor}
                  hover:text-accent-green
                `}
              >
                {item.label}
                {(item.label === "Solutions" || item.label === "Products") && (
                  <ChevronDown
                    className={`h-4 w-4 ml-1 transition-all duration-300 ${
                      showSubmenu && selectedSubmenu === item.label ? "rotate-180" : ""
                    } ${
                      showSolidNav
                        ? "text-charcoal group-hover:text-accent-green"
                        : "text-white group-hover:text-accent-green"
                    }`}
                  />
                )}
              </Link>
              {showSubmenu && selectedSubmenu === item.label && (
                <div
                  className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg border border-gray-200 z-50 submenu-no-hover"
                  onMouseEnter={() => handleSubmenuEnter(item.label)}
                  onMouseLeave={handleSubmenuLeave}
                >
                  {selectedSubmenu === "Solutions" ? (
                    <div className="flex w-[600px]">
                      {/* Left Column */}
                      <div className="w-1/2 p-4 border-r border-gray-200">
                        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 px-4">
                          {selectedSubmenu}
                        </h3>
                        <div className="flex flex-col">
                          {(submenuItems[selectedSubmenu] || []).map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className={`flex justify-between items-center w-full text-left px-4 py-2 text-charcoal rounded-md whitespace-nowrap ${
                                flyoutSubmenu === subItem.label
                                  ? "bg-accent-green/10 font-semibold"
                                  : "hover:bg-accent-green/10 hover:font-semibold"
                              }`}
                              onMouseEnter={() => handleFlyoutEnter(subItem.label)}
                            >
                              {subItem.label}
                              {submenuItems[subItem.label] && <ArrowRight className="h-4 w-4 text-gray-400" />}
                            </Link>
                          ))}
                        </div>
                      </div>
                      {/* Right Column */}
                      <div className="w-1/2 p-4">
                        {flyoutSubmenu && submenuItems[flyoutSubmenu] ? (
                          <>
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 px-4">
                              {flyoutSubmenu} Services
                            </h3>
                            <div className="flex flex-col">
                              {submenuItems[flyoutSubmenu].map((flyoutItem) => (
                                <Link
                                  key={flyoutItem.label}
                                  href={flyoutItem.href}
                                  className="block px-4 py-2 text-charcoal hover:bg-accent-green/10 hover:font-semibold rounded-md whitespace-nowrap"
                                >
                                  {flyoutItem.label}
                                </Link>
                              ))}
                            </div>
                          </>
                        ) : (
                          <>
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 px-4">
                              AI Infrastructure Services
                            </h3>
                            <div className="flex flex-col">
                              {submenuItems["AI Infrastructure"].map((flyoutItem) => (
                                <Link
                                  key={flyoutItem.label}
                                  href={flyoutItem.href}
                                  className="block px-4 py-2 text-charcoal hover:bg-accent-green/10 hover:font-semibold rounded-md whitespace-nowrap"
                                >
                                  {flyoutItem.label}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  ) : (
                    /* Products - Single Column */
                    <div className="w-[350px] p-4">
                      <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 px-4">
                        {selectedSubmenu}
                      </h3>
                      <div className="flex flex-col">
                        {(submenuItems[selectedSubmenu] || []).map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2 text-charcoal hover:bg-accent-green/10 hover:font-semibold rounded-md whitespace-nowrap"
                          >
                            <span className="flex items-center gap-2">
                              {subItem.label}
                              {subItem.isNew && (
                                <Badge className="bg-accent-green text-charcoal text-xs px-2 py-0 hover:bg-accent-green">
                                  NEW
                                </Badge>
                              )}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
          <div className="hidden lg:flex items-center gap-x-2">
            <Link href="/contact" className="outline-none focus:outline-none">
              <Button className="bg-accent-green text-charcoal font-semibold hover:scale-105 hover:bg-charcoal hover:text-white transition-all duration-300 ease-in-out shadow-none outline-none focus:outline-none border-none">
                Contact Us
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="shadow-none outline-none focus:outline-none border-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${mobileMenuIconColor}`} />
            ) : (
              <Menu className={`h-6 w-6 ${mobileMenuIconColor}`} />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-white text-charcoal absolute top-full left-0 w-full transition-all duration-300 ease-in-out overflow-hidden ${
        isMobileMenuOpen 
          ? 'h-screen opacity-100 translate-y-0' 
          : 'h-0 opacity-0 -translate-y-4'
      }`}>
        <nav className={`flex flex-col space-y-4 p-4 transition-all duration-300 delay-100 ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              href={getLinkHref(item.href)}
              onClick={(e) => handleNavigation(e, item.href)}
              className={`text-lg font-medium hover:text-accent-green transition-all duration-300 transform ${
                isMobileMenuOpen 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-4 opacity-0'
              }`}
              style={{
                transitionDelay: isMobileMenuOpen ? `${150 + index * 50}ms` : '0ms'
              }}
            >
              {item.label}
            </Link>
          ))}
          <div className={`mt-4 transition-all duration-300 transform ${
            isMobileMenuOpen 
              ? 'translate-x-0 opacity-100' 
              : 'translate-x-4 opacity-0'
          }`}
          style={{
            transitionDelay: isMobileMenuOpen ? `${150 + navItems.length * 50}ms` : '0ms'
          }}>
            <Button asChild className="w-full bg-accent-green text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact Us
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}