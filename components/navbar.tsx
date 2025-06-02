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

  // Handle scroll effects for navbar appearance and active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      if (pathname === "/") {
        const sections = [
          { href: "/", label: "Home", sectionId: "hero" },
          { href: { pathname: '/', hash: '#solutions' }, label: "Solutions", sectionId: "solutions" },
          { href: { pathname: '/', hash: '#partners' }, label: "Partners", sectionId: "partners" },
          { href: { pathname: '/', hash: '#customers' }, label: "Customers", sectionId: "customers" },
          { href: { pathname: '/', hash: '#news' }, label: "News", sectionId: "news" },
        ]
          .map(item => typeof item.href !== 'string' && item.href.pathname === "/" && item.href.hash ? item.href.hash : null)
          .filter(Boolean) as string[];
        
        const scrollPosition = window.scrollY + (window.innerHeight / 3); // Adjust detection point

        let currentActiveSection = "";
        for (const sectionId of sections) {
          const element = document.getElementById(sectionId.substring(1)); // remove # from hash
          if (element) {
            const rect = element.getBoundingClientRect();
            const elementTop = window.scrollY + rect.top;
            const elementBottom = elementTop + element.offsetHeight;

            if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
              currentActiveSection = sectionId.substring(1); // Store ID without #
              break;
            }
          }
        }
        setActiveSection(currentActiveSection);
      } else {
        setActiveSection(""); // Clear active section if not on homepage
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  const handleNavLinkClick = (href: string | { pathname: string; hash?: string }, sectionId?: string) => {
    setIsMobileMenuOpen(false) // Always close mobile menu

    const targetPath = typeof href === 'string' ? href.split('#')[0] : href.pathname;
    const targetHash = typeof href === 'string' ? (href.includes('#') ? href.substring(href.indexOf('#')) : undefined) : href.hash;

    // If it's a hash link for the *current* page, then smooth scroll
    if (targetHash && (targetPath === pathname || (targetPath === "/" && pathname === "/"))) {
      const element = document.getElementById(targetHash.substring(1)) // Remove #
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start"
        })
        // Optionally, update URL hash manually if Link component doesn't always do it
        // window.history.pushState(null, "", targetHash);
        setActiveSection(targetHash.substring(1)); // Set active section immediately
        return; // Prevent Link default navigation if we handle scroll
      }
    }
    // For all other cases (different page, or same page without hash, or hash element not found for smooth scroll),
    // let Next.js Link component handle the navigation normally.
    // If navigating to a different page with a hash, Link will handle it.
  }

  const navItems = [
    { href: "/", label: "Home", sectionId: "hero" },
    { href: { pathname: '/', hash: '#solutions' }, label: "Solutions", sectionId: "solutions" },
    { href: { pathname: '/', hash: '#partners' }, label: "Partners", sectionId: "partners" },
    { href: { pathname: '/', hash: '#customers' }, label: "Customers", sectionId: "customers" },
    { href: { pathname: '/', hash: '#news' }, label: "News", sectionId: "news" },
  ]

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
              onClick={(e) => {
                const targetPath = typeof item.href === 'string' ? item.href.split('#')[0] : item.href.pathname;
                const targetHash = typeof item.href === 'string' ? (item.href.includes('#') ? item.href.substring(item.href.indexOf('#')) : undefined) : item.href.hash;
                if (targetHash && (targetPath === pathname || (targetPath === "/" && pathname === "/"))) {
                  e.preventDefault(); // Prevent default Link behavior only if we are handling scroll
                }
                handleNavLinkClick(item.href, item.sectionId)
              }}
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
            <Link href="/#contact" onClick={() => handleNavLinkClick({pathname: '/', hash: '#contact'}, "contact")}>
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
                onClick={(e) => {
                  const targetPath = typeof item.href === 'string' ? item.href.split('#')[0] : item.href.pathname;
                  const targetHash = typeof item.href === 'string' ? (item.href.includes('#') ? item.href.substring(item.href.indexOf('#')) : undefined) : item.href.hash;
                  if (targetHash && (targetPath === pathname || (targetPath === "/" && pathname === "/"))) {
                    e.preventDefault(); // Prevent default Link behavior only if we are handling scroll
                  }
                  handleNavLinkClick(item.href, item.sectionId)
                }}
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
              <Link href="/#contact" onClick={() => handleNavLinkClick({pathname: '/', hash: '#contact'}, "contact")}>
                Contact Us
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
