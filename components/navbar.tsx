"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, ArrowRight, ChevronUp } from "lucide-react"
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

  const submenuItems: Record<string, { href: string; label: string }[]> = {
    Solutions: [
      { href: "/solutions/ai-infrastructure", label: "AI Infrastructure" },
      { href: "/solutions/3d-ai", label: "3D AI" },
      { href: "/solutions/ai-consulting", label: "AI Consulting" },
      { href: "/solutions/robotics-edge-ai", label: "Robotics & Edge AI" },
    ],
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
      { href: "/products/nvidia-dgx", label: "NVIDIA DGX Systems" },
      { href: "/products/nvidia-hgx", label: "NVIDIA HGX Systems" },
      { href: "/products/professional-services", label: "Professional Services" },
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
  
  const [flyoutSubmenu, setFlyoutSubmenu] = useState<string | null>(null);
  const flyoutTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleFlyoutEnter = (menu: string) => {
    if (flyoutTimeoutRef.current) {
      clearTimeout(flyoutTimeoutRef.current);
    }
    setFlyoutSubmenu(menu);
  };

  const handleFlyoutLeave = () => {
    flyoutTimeoutRef.current = setTimeout(() => {
      setFlyoutSubmenu(null);
    }, 300);
  };


  useEffect(() => {
    return () => {
      if (submenuTimeoutRef.current) {
        clearTimeout(submenuTimeoutRef.current)
      }
      if (flyoutTimeoutRef.current) {
        clearTimeout(flyoutTimeoutRef.current);
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerClasses}`}
      onMouseLeave={handleSubmenuLeave}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex-shrink-0">
          <Image src={logoSrc} alt="AIdeology Logo" width={150} height={40} priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map(item => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => (item.label === "Solutions" || item.label === "Products") && handleSubmenuEnter(item.label)}
              onMouseLeave={() => (item.label === "Solutions" || item.label === "Products") && handleSubmenuLeave()}
            >
              <Link
                href={getLinkHref(item.href)}
                onClick={e => handleNavigation(e, item.href)}
                className={`
                  flex items-center text-base font-medium transition-all duration-300
                  ${linkTextColor}
                  ${activeSection === item.sectionId ? "text-accent-green" : "group-hover:text-accent-green"}
                `}
              >
                {item.label}
                {(item.label === "Solutions" || item.label === "Products") && (
                  <>
                    {showSubmenu && selectedSubmenu === item.label ? (
                      <ChevronUp className="h-4 w-4 ml-1" />
                    ) : (
                      <ChevronDown className="h-4 w-4 ml-1" />
                    )}
                  </>
                )}
              </Link>
               {showSubmenu && selectedSubmenu === item.label && (
                <div
                  className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg border border-gray-200 z-50 p-4"
                   onMouseEnter={() => handleSubmenuEnter(item.label)}
                   onMouseLeave={handleSubmenuLeave}
                >
                  {(submenuItems[selectedSubmenu] || []).map(subItem => (
                    <div 
                      key={subItem.label} 
                      className="relative"
                      onMouseEnter={() => handleFlyoutEnter(subItem.label)}
                      onMouseLeave={handleFlyoutLeave}
                    >
                      <Link
                        href={subItem.href}
                        className="flex justify-between items-center w-full text-left px-4 py-2 text-charcoal hover:bg-gray-100 rounded-md whitespace-nowrap"
                      >
                        {subItem.label}
                         {submenuItems[subItem.label] && <ArrowRight className="h-4 w-4 ml-2 text-gray-400" />}
                      </Link>
                      {flyoutSubmenu === subItem.label && submenuItems[subItem.label] && (
                        <div 
                          className="absolute left-full top-0 ml-1 bg-white shadow-lg rounded-lg border border-gray-200 z-50 p-4"
                          onMouseEnter={() => handleFlyoutEnter(subItem.label)}
                          onMouseLeave={handleFlyoutLeave}
                        >
                          {submenuItems[subItem.label].map(flyoutItem => (
                            <Link
                              key={flyoutItem.label}
                              href={flyoutItem.href}
                              className="block px-4 py-2 text-charcoal hover:bg-gray-100 rounded-md whitespace-nowrap"
                            >
                              {flyoutItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
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
        <div className="lg:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${mobileMenuIconColor}`} />
            ) : (
              <Menu className={`h-6 w-6 ${mobileMenuIconColor}`} />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white text-charcoal absolute top-full left-0 w-full h-screen p-4">
          <nav className="flex flex-col space-y-4">
            {navItems.map(item => (
              <Link
                key={item.label}
                href={getLinkHref(item.href)}
                onClick={e => handleNavigation(e, item.href)}
                className="text-lg font-medium hover:text-accent-green"
              >
                {item.label}
              </Link>
            ))}
            <SheetFooter>
              <Button asChild className="mt-4">
                <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </SheetFooter>
          </nav>
        </div>
      )}
    </header>
  )
}
