import Link from "next/link"
import Image from "next/image"
import { Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-charcoal/90 border-t border-accent-green/20 pt-16 pb-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Logo and Tagline */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/placeholder-c8ilc.png"
                alt="AIdeology Logo"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-white/80 mb-6">Elite AI Infrastructure & 3D AI Solutions Provider</p>
            <div className="flex space-x-4">
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-accent-green transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Middle Column - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <nav className="grid grid-cols-1 gap-3">
              <Link href="/" className="text-white/70 hover:text-accent-green transition-colors">
                Home
              </Link>
              <Link href="#solutions" className="text-white/70 hover:text-accent-green transition-colors">
                Solutions
              </Link>
              <Link href="#customers" className="text-white/70 hover:text-accent-green transition-colors">
                Customers
              </Link>
              <Link href="#partners" className="text-white/70 hover:text-accent-green transition-colors">
                Partners
              </Link>
              <Link href="#news" className="text-white/70 hover:text-accent-green transition-colors">
                News
              </Link>
            </nav>
          </div>

          {/* Right Column - Contact Details */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-accent-green mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-white/70">+971 50 963 7367</p>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-accent-green mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-white/70">aideology@aideology.ai</p>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-accent-green mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-white/70">101 Building – Office A2 IFZA-11257, Dubai Silicon Oasis, UAE</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50 text-sm">
          <p>© {currentYear} AIdeology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
