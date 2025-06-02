"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

interface NavbarProps {
  forceDarkLogo?: boolean;
}

export default function Navbar({ forceDarkLogo = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const pathname = usePathname()

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Active section detection for homepage
      if (pathname === "/") {
        const sections = ["hero", "solutions", "why-aideology", "global-presence", "customers", "partners", "mission", "news"]
        const scrollPosition = window.scrollY + 100

        for (const section of sections) {
          const element = document.getElementById(section === "hero" ? "" : section)
          if (element) {
            const rect = element.getBoundingClientRect()
            const elementTop = window.scrollY + rect.top
            const elementBottom = elementTop + element.offsetHeight

            if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
              setActiveSection(section)
              break
            }
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  const handleNavigation = (href: string | { pathname: string; hash: string }, sectionId?: string) => {
    setIsMobileMenuOpen(false)
    
    const targetPath = typeof href === 'string' ? href : href.pathname;
    const targetHash = typeof href === 'string' ? (href.startsWith('/#') ? href.substring(2) : undefined) : href.hash;

    if (targetHash && targetPath === "/") {
      // If already on the homepage and there's a hash, scroll to section
      if (pathname === "/") {
        const element = document.getElementById(targetHash)
        if (element) {
          element.scrollIntoView({ 
            behavior: "smooth",
            block: "start"
          })
        }
      } else {
        // If on a different page, Next.js Link component will handle navigation to homepage + hash
        // We don't need to do anything special here for scrolling, as Link will navigate first
      }
    }
    // For other cases, Next.js Link handles navigation.
    // If it's a simple string href like "/" or "#contact", Link handles it.
  }

  const navItems = [
    { href: "/", label: "Home", sectionId: "" },
    { href: { pathname: '/', hash: 'solutions' }, label: "Solutions", sectionId: "solutions" },
    { href: { pathname: '/', hash: 'partners' }, label: "Partners", sectionId: "partners" },
    { href: { pathname: '/', hash: 'customers' }, label: "Customers", sectionId: "customers" },
    { href: { pathname: '/', hash: 'news' }, label: "News", sectionId: "news" },
  ]

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
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={typeof item.href === 'string' ? item.href : { pathname: item.href.pathname, hash: item.href.hash }}
              onClick={() => handleNavigation(item.href, item.sectionId)}
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
            <Link href="#contact" onClick={() => handleNavigation("#contact", "contact")}>
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
                onClick={() => handleNavigation(item.href, item.sectionId)}
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
