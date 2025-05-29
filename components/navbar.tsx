"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Function to handle navigation and close mobile menu
  const handleNavigation = () => {
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg py-3 text-charcoal" : "bg-transparent py-6 text-white"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center" onClick={handleNavigation}>
          <Image 
            src={isScrolled ? "/aideology.webp" : "/aideology-white.webp"}
            alt="AIdeology Logo" 
            width={200} 
            height={50} 
            className="h-12 md:h-14 w-auto transition-all duration-300" 
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={`${isScrolled ? "text-charcoal" : "text-white"} hover:text-accent-green transition-colors`}
          >
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger
              className={`${isScrolled ? "text-charcoal" : "text-white"} hover:text-accent-green transition-colors flex items-center`}
            >
              Solutions <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/solutions/ai-infrastructure">AI Infrastructure</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/solutions/3d-ai">3D AI</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/solutions/ai-consulting">AI Consulting</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/solutions/physical-ai">Physical AI</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/customers"
            className={`${isScrolled ? "text-charcoal" : "text-white"} hover:text-accent-green transition-colors`}
          >
            Customers
          </Link>
          <Link
            href="/news"
            className={`${isScrolled ? "text-charcoal" : "text-white"} hover:text-accent-green transition-colors`}
          >
            News
          </Link>
          <Button asChild className="bg-accent-green text-charcoal hover:bg-accent-green/90">
            <Link href="#contact">Contact</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isScrolled ? "text-charcoal" : "text-white"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md text-charcoal">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-charcoal hover:text-accent-green transition-colors py-2"
              onClick={handleNavigation}
            >
              Home
            </Link>
            <div className="flex flex-col">
              <span className="text-charcoal hover:text-accent-green transition-colors py-2 font-medium">
                Solutions
              </span>
              <div className="pl-4 flex flex-col space-y-2 mt-2">
                <Link
                  href="/solutions/ai-infrastructure"
                  className="text-charcoal/80 hover:text-accent-green transition-colors py-1"
                  onClick={handleNavigation}
                >
                  AI Infrastructure
                </Link>
                <Link
                  href="/solutions/3d-ai"
                  className="text-charcoal/80 hover:text-accent-green transition-colors py-1"
                  onClick={handleNavigation}
                >
                  3D AI
                </Link>
                <Link
                  href="/solutions/ai-consulting"
                  className="text-charcoal/80 hover:text-accent-green transition-colors py-1"
                  onClick={handleNavigation}
                >
                  AI Consulting
                </Link>
                <Link
                  href="/solutions/physical-ai"
                  className="text-charcoal/80 hover:text-accent-green transition-colors py-1"
                  onClick={handleNavigation}
                >
                  Physical AI
                </Link>
              </div>
            </div>
            <Link
              href="/customers"
              className="text-charcoal hover:text-accent-green transition-colors py-2"
              onClick={handleNavigation}
            >
              Customers
            </Link>
            <Link
              href="/news"
              className="text-charcoal hover:text-accent-green transition-colors py-2"
              onClick={handleNavigation}
            >
              News
            </Link>
            <Button asChild className="bg-accent-green text-charcoal hover:bg-accent-green/90 w-full">
              <Link href="#contact" onClick={handleNavigation}>
                Contact
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
