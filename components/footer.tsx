"use client";

import Link from "next/link"
import Image from "next/image"
import { Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { usePathname, useRouter } from "next/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const router = useRouter();
  const pathname = usePathname();

  const handleFooterNavigation = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) {
      return;
    }

    const targetId = href.substring(hashIndex + 1);
    event.preventDefault();

    const navbarElement = document.getElementById('main-navbar');
    const navbarHeight = navbarElement ? navbarElement.offsetHeight : 0;

    if (pathname === "/") {
      const element = document.getElementById(targetId);
      if (element) {
        const heading = element.querySelector('h2');
        const scrollTarget = heading || element;
        const elementPosition = scrollTarget.getBoundingClientRect().top + window.scrollY;
        const sectionPaddingTop = parseFloat(window.getComputedStyle(element).paddingTop) || 0;
        let headingHeight = 0;
        if (heading) {
          headingHeight = heading.offsetHeight;
        }
        const extraOffset = sectionPaddingTop - headingHeight * 5;
        const offsetPosition = elementPosition - navbarHeight + extraOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      } else {
        router.push(`/#${targetId}`);
      }
    } else {
      router.push(`/#${targetId}`);
    }
  };

  const socialLinks = [
    {
      href: "https://www.linkedin.com/company/aideology/",
      icon: Linkedin,
      label: "LinkedIn",
      color: "hover:text-blue-400 hover:bg-blue-400/10"
    },
  ]

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/#solutions", label: "Solutions" },
    { href: "/#customers", label: "Customers" },
    { href: "/#partners", label: "Partners" },
    { href: "/news", label: "News" },
    { href: "/#products", label: "Products" }
  ];

  return (
    <footer id="contact" className="bg-charcoal/90 border-t border-accent-green/20 pt-16 pb-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Logo and Tagline */}
          <div className="animate-fade-in-up">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/aideology-white.webp"
                alt="AIdeology Logo"
                width={180}
                height={45}
                className="h-12 w-auto transition-transform duration-300 hover:scale-105"
              />
            </Link>
            <p className="text-white/80 mb-6">Elite AI Infrastructure & 3D AI Solutions Provider</p>
            <div className="flex space-x-2">
              {socialLinks.map((social, index) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full text-white/70 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${social.color} group relative overflow-hidden`}
                  aria-label={social.label}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <social.icon className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:rotate-12" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-charcoal/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
                    {social.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="animate-fade-in-up" style={{animationDelay: '200ms'}}>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <nav className="grid grid-cols-1 gap-3">
              {quickLinks.map(link => (
                <Link 
                  key={link.label}
                  href={link.href} 
                  onClick={(e) => handleFooterNavigation(e, link.href)}
                  className="text-white/70 hover:text-accent-green transition-all duration-300 hover:translate-x-2 flex items-center group"
                >
                  <span className="w-0 h-0.5 bg-accent-green transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Column - Contact Details */}
          <div className="animate-fade-in-up" style={{animationDelay: '400ms'}}>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
            <div className="space-y-4">
              <a href="tel:+971509637367" className="flex items-start group hover:bg-white/5 p-2 rounded transition-colors duration-300">
                <Phone className="h-5 w-5 text-accent-green mr-3 mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <p className="text-white/70 group-hover:text-white transition-colors duration-300">+971 50 963 7367</p>
              </a>
              <a href="mailto:aideology@aideology.ai" className="flex items-start group hover:bg-white/5 p-2 rounded transition-colors duration-300">
                <Mail className="h-5 w-5 text-accent-green mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-white/70 group-hover:text-white transition-colors duration-300">aideology@aideology.ai</p>
              </a>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=AIdeology+Dubai+Silicon+Oasis"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start group hover:bg-white/5 p-2 rounded transition-colors duration-300"
              >
                <MapPin className="h-5 w-5 text-accent-green mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-white/70 group-hover:text-white transition-colors duration-300">101 Building – Office A2 IFZA-11257, Dubai Silicon Oasis, UAE</p>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50 text-sm animate-fade-in-up" style={{animationDelay: '600ms'}}>
          <p>© {currentYear} AIdeology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
