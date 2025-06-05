"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { SheetFooter } from "@/components/ui/sheet"

interface NavbarProps {
  forceDarkLogo?: boolean
}

// Type for nav items that have a hash link
interface NavItemWithHash {
  pathname: string;
  hash: string;
}

// Helper function to stringify href for Link component
const getLinkHref = (href: string | NavItemWithHash): string => {
  if (typeof href === 'string') return href;
  return href.pathname + (href.hash || '');
};

// Exported scroll utility function
export const performScrollToSection = (
  targetId: string,
  navbarHeight: number,
  scrollBehavior: ScrollBehavior = 'smooth' // Default to 'smooth'
) => {
  const element = document.getElementById(targetId);
  if (element) {
    const heading = element.querySelector('h2');
    const scrollTarget = heading || element; // Prefer heading if available for more precise positioning under navbar
    const elementPosition = scrollTarget.getBoundingClientRect().top + window.scrollY;

    const sectionPaddingTop = parseFloat(window.getComputedStyle(element).paddingTop) || 0;
    let headingHeight = 0;
    if (heading) {
      headingHeight = heading.offsetHeight;
    }
    // User's current formula for offset, consistent with existing Navbar logic
    const extraOffset = sectionPaddingTop - headingHeight * 3;
    const offsetPosition = elementPosition - navbarHeight + extraOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: scrollBehavior,
    });
    return true; // Indicate scroll was attempted
  }
  return false; // Indicate element not found
};

export default function Navbar({ forceDarkLogo = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const pathname = usePathname()
  const navbarRef = useRef<HTMLElement>(null); // Ref for the header element

  // Add state for managing the submenu
  const [showSubmenu, setShowSubmenu] = useState(false)
  const [selectedSubmenu, setSelectedSubmenu] = useState<string | null>(null); // Defaulting to null as per typical initial state

  const submenuTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Determine if the navbar should always be dark based on the current page or forceDarkLogo prop
  const alwaysDark = forceDarkLogo || pathname.startsWith("/services/") || pathname.startsWith("/products/") || pathname === "/customers" || pathname === "/news";

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
          if (item.sectionId && typeof item.href === 'object' && 'hash' in item.href && item.href.hash) {
            const hrefObj = item.href as NavItemWithHash; // Explicit cast for clarity, though check is sufficient
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
      const hash = window.location.hash;
      if (hash) {
        const targetId = hash.substring(1); // Remove #
        // Use a timeout to ensure the DOM is fully ready after page navigation
        setTimeout(() => {
          if (navbarRef.current) {
            const navbarHeight = navbarRef.current.offsetHeight;
            performScrollToSection(targetId, navbarHeight, 'auto'); // Use utility function
          }
        }, 100); // 100ms delay, adjust if necessary
      }
    }
  }, [pathname]); // Rerun when pathname changes

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    hrefInput: string | NavItemWithHash
  ) => {
    setIsMobileMenuOpen(false);
    const targetHref = getLinkHref(hrefInput); // e.g., "/#solutions", "#contact", "/news"

    // Handle same-page hash navigation if currently on the homepage
    if (pathname === "/") {
      let hashTargetId: string | null = null;

      if (targetHref.startsWith("/#")) { // e.g., "/#solutions"
        hashTargetId = targetHref.substring(2);
      } else if (targetHref.startsWith("#") && !targetHref.startsWith("/#")) { // e.g., "#contact"
        hashTargetId = targetHref.substring(1);
      }

      if (hashTargetId && navbarRef.current) {
        event.preventDefault(); // Prevent default only for same-page smooth scroll
        const navbarHeight = navbarRef.current.offsetHeight;
        performScrollToSection(hashTargetId, navbarHeight, 'smooth'); // Use utility function
        return; // Exit after handling same-page scroll
      }
    }
    // For other cases (like navigating to a different page, or to the homepage with a hash from another page),
    // let Next.js Link component handle the navigation.
    // The new useEffect will then handle scrolling if the destination is the homepage with a hash.
  };

  const navItems = [
    { href: "/", label: "Home", sectionId: "hero" },
    { href: { pathname: "/", hash: "#solutions" }, label: "Solutions", sectionId: "solutions" },
    { href: { pathname: "/", hash: "#partners" }, label: "Partners", sectionId: "partners" },
    { href: { pathname: "/", hash: "#products" }, label: "Products", sectionId: "products" },
    { href: "/customers", label: "Customers", sectionId: "" },
    { href: "/news", label: "News", sectionId: "" },
  ]

  const submenuItems = {
    "AI Infrastructure": [
      { href: "/services/ai-infrastructure/professional-services", label: "Professional Services" },
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
    Products: [
      { href: "/products/nvidia-dgx", label: "NVIDIA DGX Systems" },
      { href: "/products/nvidia-hgx", label: "NVIDIA HGX Systems" },
      { href: "/products/professional-services", label: "Professional Services" },
      { href: "/products/storage-systems", label: "Storage Systems" },
      { href: "/products/nvidia-ai-enterprise", label: "NVIDIA AI Enterprise" },
    ],
  }

  const mainServices = ["AI Infrastructure", "3D AI", "AI Consulting", "Robotics & Edge AI"]

  const handleSubmenuEnter = () => {
    if (submenuTimeoutRef.current) {
      clearTimeout(submenuTimeoutRef.current)
    }
    setShowSubmenu(true)
    // Set selectedSubmenu to the first main service if not already a main service
    // This ensures the Solutions submenu populates correctly when first hovered.
    if (!selectedSubmenu || !mainServices.includes(selectedSubmenu)) {
      setSelectedSubmenu(mainServices[0]) // e.g., "AI Infrastructure"
    }
  }

  const handleSubmenuLeave = () => {
    submenuTimeoutRef.current = setTimeout(() => {
      setShowSubmenu(false)
      setSelectedSubmenu(null)
    }, 300) // 300ms delay before hiding
  }

  useEffect(() => {
    return () => {
      if (submenuTimeoutRef.current) {
        clearTimeout(submenuTimeoutRef.current)
      }
    }
  }, [])

  // Determine navbar appearance
  const isHomepage = pathname === '/';
  // Solid nav appears if scrolled, or forced, or not on homepage, or on specific content pages needing dark text from start
  const showSolidNav = forceDarkLogo || isScrolled || pathname !== '/';

  const headerClasses = showSolidNav
    ? "bg-white/80 shadow-lg text-charcoal py-3"
    : "bg-transparent text-white py-6";
  const logoSrc = showSolidNav ? "/aideology.webp" : "/aideology-white.webp";
  const linkTextColor = showSolidNav ? "text-charcoal" : "text-white";
  const mobileMenuIconColor = showSolidNav ? "text-charcoal" : "text-white";

  return (
    <header
      ref={navbarRef}
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${headerClasses}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center" onClick={(e) => handleNavigation(e, "/")}>
          <Image
            src={logoSrc}
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
                  onMouseLeave={() => {
                    submenuTimeoutRef.current = setTimeout(() => {
                      setShowSubmenu(false)
                    }, 300)
                  }}
                >
                  <span
                    className={`relative transition-all duration-300 hover:text-accent-green cursor-pointer ${linkTextColor} ${
                      activeSection === item.sectionId ? "text-accent-green font-semibold" : ""}`}
                  >
                    {item.label}
                    {activeSection === item.sectionId && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-green animate-scale-in" />
                    )}
                  </span>

                  {/* Submenu for Solutions */}
                  {showSubmenu && selectedSubmenu && mainServices.includes(selectedSubmenu) && (
                    <div
                      className="absolute top-full left-0 mt-1 bg-white shadow-xl rounded-lg border border-gray-200 z-50 w-[600px] p-6"
                      onMouseEnter={() => {
                        if (submenuTimeoutRef.current) clearTimeout(submenuTimeoutRef.current);
                        setShowSubmenu(true);
                        // Ensure selectedSubmenu remains a valid service, or default
                        if (!selectedSubmenu || !mainServices.includes(selectedSubmenu)) {
                            setSelectedSubmenu(mainServices[0]);
                        }
                      }}
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
            } else if (item.label === "Products") {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => {
                    if (submenuTimeoutRef.current) {
                      clearTimeout(submenuTimeoutRef.current)
                    }
                    setShowSubmenu(true)
                    setSelectedSubmenu("Products")
                  }}
                  onMouseLeave={() => {
                    submenuTimeoutRef.current = setTimeout(() => {
                      setShowSubmenu(false)
                      setSelectedSubmenu(null)
                    }, 300)
                  }}
                >
                  <span
                    className={`relative transition-all duration-300 hover:text-accent-green cursor-pointer ${linkTextColor} ${
                      activeSection === item.sectionId ? "text-accent-green font-semibold" : ""}`}
                  >
                    {item.label}
                    {activeSection === item.sectionId && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-green animate-scale-in" />
                    )}
                  </span>

                  {/* Products Submenu - Only show when Products is selected */}
                  {showSubmenu && selectedSubmenu === "Products" && (
                    <div
                      className="absolute top-full left-0 mt-1 bg-white shadow-xl rounded-lg border border-gray-200 z-50 w-[400px] p-6"
                      onMouseEnter={() => {
                        if (submenuTimeoutRef.current) {
                          clearTimeout(submenuTimeoutRef.current)
                        }
                        setShowSubmenu(true)
                        setSelectedSubmenu("Products")
                      }}
                      onMouseLeave={handleSubmenuLeave}
                    >
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                        Product Categories
                      </h3>
                      {submenuItems.Products?.map((productItem) => (
                        <Link
                          key={productItem.label}
                          href={productItem.href}
                          className="block py-2 px-3 text-charcoal hover:text-accent-green hover:bg-accent-green/5 rounded transition-colors"
                          onClick={() => {
                            setShowSubmenu(false)
                            setSelectedSubmenu(null)
                          }}
                        >
                          {productItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            } else {
              return (
                <Link
                  key={item.label}
                  href={getLinkHref(item.href)}
                  onClick={(e) => handleNavigation(e, item.href)}
                  className={`relative transition-all duration-300 hover:text-accent-green cursor-pointer ${linkTextColor} ${
                    // Condition for highlighting hash links on the same page OR direct page links
                    (activeSection === item.sectionId && item.sectionId !== "") || (typeof item.href === 'string' && pathname === item.href)
                      ? "text-accent-green font-semibold"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              )
            }
          })}
          <div className="hidden lg:flex items-center gap-x-2">
            <Link href="/contact">
              <Button 
                className={`bg-accent-green text-charcoal font-semibold hover:scale-105 transition-all duration-300 ease-in-out ${ 
                  showSolidNav 
                    ? 'hover:bg-charcoal hover:text-white' 
                    : 'hover:bg-white hover:text-charcoal' 
                }`}
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <X className={`h-6 w-6 ${mobileMenuIconColor}`} />
          ) : (
            <Menu className={`h-6 w-6 ${mobileMenuIconColor}`} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-accent-green/20">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => {
              const linkHref = getLinkHref(item.href);
              if (item.label === "Solutions") {
                return (
                  <div key={item.label}>
                    <Link
                      href={linkHref}
                      onClick={(e) => handleNavigation(e, item.href)}
                      className={`block px-4 py-3 text-lg transition-colors duration-300 hover:text-accent-green ${
                        // Condition for highlighting hash links on the same page OR direct page links in mobile nav
                        (activeSection === item.sectionId && item.sectionId !== "") || (typeof item.href === 'string' && pathname === item.href)
                          ? "text-accent-green font-semibold"
                          : "text-foreground/80"
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
              } else if (item.label === "Products") {
                return (
                  <div key={item.label}>
                    <Link
                      href={linkHref}
                      onClick={(e) => handleNavigation(e, item.href)}
                      className={`block px-4 py-3 text-lg transition-colors duration-300 hover:text-accent-green ${
                        // Condition for highlighting hash links on the same page OR direct page links in mobile nav
                        (activeSection === item.sectionId && item.sectionId !== "") || (typeof item.href === 'string' && pathname === item.href)
                          ? "text-accent-green font-semibold"
                          : "text-foreground/80"
                      }`}
                    >
                      {item.label}
                    </Link>
                    <div className="ml-4 mt-2 space-y-2">
                      {submenuItems.Products?.map((productItem) => (
                        <Link
                          key={productItem.label}
                          href={productItem.href}
                          className="block py-1 text-sm text-gray-600 hover:text-accent-green"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {productItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              } else {
                return (
                  <Link
                    key={item.label}
                    href={linkHref}
                    onClick={(e) => handleNavigation(e, item.href)}
                    className={`block px-4 py-3 text-lg transition-colors duration-300 hover:text-accent-green ${
                      // Condition for highlighting hash links on the same page OR direct page links in mobile nav
                      (activeSection === item.sectionId && item.sectionId !== "") || (typeof item.href === 'string' && pathname === item.href)
                        ? "text-accent-green font-semibold"
                        : "text-foreground/80"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              }
            })}
            <SheetFooter className="mt-6 pt-6 border-t border-gray-700">
              <Link href="/contact" className="w-full">
                <Button className="w-full bg-accent-green text-charcoal font-semibold hover:bg-charcoal hover:text-white hover:scale-105 transition-all duration-300 ease-in-out">
                  Contact Us
                </Button>
              </Link>
            </SheetFooter>
          </nav>
        </div>
      )}
    </header>
  )
}