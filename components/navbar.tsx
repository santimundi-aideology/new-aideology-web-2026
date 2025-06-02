"use client"

import { useState, useEffect } from "react"
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
  { href: { pathname: '/', hash: '#solutions' }, label: "Solutions", sectionId: "solutions" },
  { href: { pathname: '/', hash: '#partners' }, label: "Partners", sectionId: "partners" },
  { href: { pathname: '/', hash: '#customers' }, label: "Customers", sectionId: "customers" },
  { href: { pathname: '/', hash: '#news' }, label: "News", sectionId: "news" },
]

export default function Navbar({ forceDarkLogo = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const pathname = usePathname()

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

          if (element) { // HTMLElement allows offsetHeight
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
          const heroItem = navItems.find(item => item.sectionId === "hero")
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

  const handleNavLinkClick = (href: string | { pathname: string; hash?: string }) => {
    setIsMobileMenuOpen(false)

    const targetPath = typeof href === 'string' ? href.split('#')[0] : href.pathname
    const targetHash = typeof href === 'string' ? (href.includes('#') ? href.substring(href.indexOf('#')) : undefined) : href.hash

    // Handle smooth scroll for same-page hash links on the homepage
    if (targetHash && targetPath === "/" && pathname === "/") {
      const elementId = targetHash.substring(1) // Remove #
      const element = document.getElementById(elementId)
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start"
        })
        // No e.preventDefault() needed, Link component will update URL if necessary
        // setActiveSection(elementId); // Optionally set active, scroll handler will catch it too
      }
    }
    // For other navigations (different page, or to homepage from another page with hash),
    // Next.js Link component handles it, and browser scrolls to hash if present.
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-white/90 shadow-lg py-3 text-charcoal" : "bg-transparent py-6 text-white"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center" onClick={() => handleNavLinkClick("/")}>
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
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={typeof item.href === 'string' ? item.href : { pathname: item.href.pathname, hash: item.href.hash }}
              onClick={() => handleNavLinkClick(item.href)}
              className={`relative transition-all duration-300 hover:text-accent-green ${
                isScrolled || forceDarkLogo ? "text-charcoal" : "text-white"
              } ${
                activeSection === item.sectionId ? "text-accent-green font-semibold" : ""
              }`}
            >
              {item.label}
              {activeSection === item.sectionId && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-green animate-scale-in" />
              )}
            </Link>
          ))}
          <Button
            asChild
            className="bg-accent-green text-charcoal hover:bg-accent-green/90 transition-all duration-300 hover:scale-105"
          >
            <Link href="/#contact" onClick={() => handleNavLinkClick({pathname: '/', hash: '#contact'})}>
              Contact Us
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
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
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={typeof item.href === 'string' ? item.href : { pathname: item.href.pathname, hash: item.href.hash }}
                onClick={() => handleNavLinkClick(item.href)}
                className={`block py-2 transition-colors hover:text-accent-green ${
                  activeSection === item.sectionId ? "text-accent-green font-semibold" : "text-charcoal"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              asChild 
              className="w-full bg-accent-green text-charcoal hover:bg-accent-green/90"
            >
              <Link href="/#contact" onClick={() => handleNavLinkClick({pathname: '/', hash: '#contact'})}>
                Contact Us
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
