"use client"

import { Mail, Phone, Building, Globe, User, Download, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import LinkedInIcon from "@/components/icons/linkedin-icon"


const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "jcolotto@aideology.ai",
    href: "mailto:jcolotto@aideology.ai",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+971 56 573 9276",
    href: "tel:+971565739276",
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.aideology.ai",
    href: "https://www.aideology.ai",
  },
]

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/jorgecolotto/",
    icon: LinkedInIcon,
    label: "LinkedIn",
    color: "hover:text-blue-400 hover:bg-blue-400/10",
  },
]

export default function JorgeColottoPage() {
  const handleDownloadVCard = () => {
    // Create a download link for the VCF file
    const link = document.createElement('a');
    link.href = '/JorgeColotto.vcf';
    link.download = 'JorgeColotto.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      
      <main className="bg-gray-50 pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Profile Section */}
          <section className="bg-white rounded-xl shadow-xl p-6 md:p-8 mb-8 animate-fade-in-up">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg border-4 border-accent-green">
                  <Image
                    src="/jcolotto.jpg"
                    alt="Jorge Colotto - CEO of AIdeology"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              
              {/* Profile Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-2">
                  Jorge Colotto
                </h1>
                <p className="text-xl md:text-2xl text-accent-green font-semibold mb-4">
                  Chief Executive Officer
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  AIdeology.ai
                </p>
                
                {/* Add to Contacts Button */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <Button
                    onClick={handleDownloadVCard}
                    className="bg-accent-green text-charcoal font-semibold hover:bg-charcoal hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Add to Contacts
                  </Button>
                  
                  {/* Social Links */}
                  <div className="flex justify-center md:justify-start">
                    {socialLinks.map((social) => (
                      <Link
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`h-10 w-10 flex items-center justify-center rounded-lg text-charcoal bg-gray-200 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${social.color} group relative overflow-hidden ml-3`}
                        aria-label={social.label}
                      >
                        <social.icon className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:rotate-12" />
                        <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-charcoal text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
                          {social.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {contactDetails.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center group"
                  >
                    <div className="w-12 h-12 bg-accent-green/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-accent-green/20 transition-colors">
                      <item.icon className="w-6 h-6 text-accent-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-charcoal group-hover:text-accent-green transition-colors">
                        {item.label}
                      </h3>
                      <p className="text-gray-600 break-words">{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-accent-green/10 rounded-lg flex items-center justify-center mr-4">
                      <item.icon className="w-6 h-6 text-accent-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-charcoal">
                        {item.label}
                      </h3>
                      <p className="text-gray-600">{item.value}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </section>

          {/* About AIdeology Section */}
          <section className="bg-white rounded-xl shadow-xl p-6 md:p-8 mt-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
                  About AIdeology
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  AIdeology is an NVIDIA Elite Solution Provider that designs, deploys, and operates AI & HPC infrastructure, 
                  3D AI pipelines, and AI consulting services. We help organizations unlock the 
                  transformative power of artificial intelligence through cutting-edge solutions and expert guidance.
                </p>
                
                {/* NVIDIA Elite Partner Logo - Mobile (above buttons) */}
                <div className="flex justify-center mb-6 md:hidden">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                    <Image
                      src="/elite-partner.webp"
                      alt="NVIDIA Elite Partner"
                      width={200}
                      height={100}
                      className="w-auto h-16 object-contain"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/" className="flex-1">
                    <Button variant="outline" className="w-full border-accent-green text-accent-green hover:bg-accent-green hover:text-charcoal transition-all duration-300">
                      Learn More About AIdeology
                    </Button>
                  </Link>
                  <Link href="/contact" className="flex-1">
                    <Button className="w-full bg-charcoal text-white hover:bg-accent-green hover:text-charcoal transition-all duration-300">
                      Contact Our Team
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* NVIDIA Elite Partner Logo - Desktop (right side) */}
              <div className="flex-shrink-0 justify-center md:justify-end hidden md:flex">
                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <Image
                    src="/elite-partner.webp"
                    alt="NVIDIA Elite Partner"
                    width={200}
                    height={100}
                    className="w-auto h-20 object-contain"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
