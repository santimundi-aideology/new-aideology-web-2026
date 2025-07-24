import { Mail, Phone, MapPin, Building, MessageSquare } from "lucide-react"
import Link from "next/link"
import ContactForm from "@/components/contact-form"
import { InteractiveMap } from "@/components/interactive-map" // Using named import
import LinkedInIcon from "@/components/icons/linkedin-icon"

export const metadata = {
  title: "Contact Us | AIdeology",
  description:
    "Get in touch with AIdeology for AI infrastructure, 3D AI solutions, and AI consulting. We are here to help you.",
}

const contactDetails = [
  {
    icon: Mail,
    label: "Email Us",
    value: "aideology@aideology.ai",
    href: "mailto:aideology@aideology.ai",
  },
  {
    icon: Phone,
    label: "Call Us", 
    value: "+971 529345717",
    href: "tel:+971529345717",
  },
  {
    icon: MapPin,
    label: "Our Office",
    value: "Abdullah Omran Taryam St - Al Sufouh - Al Sufouh 2 - Dubai - UAE",
    href: "https://maps.app.goo.gl/AVNuWtct1mzRrL8d9",
  },
]

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/aideology/",
    icon: LinkedInIcon,
    label: "LinkedIn",
    color: "hover:text-blue-400 hover:bg-blue-400/10",
  },
]

export default function ContactPage() {
  return (
    <>
      <main className="bg-gray-50 py-28 md:py-36">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="text-center mb-16 md:mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4 animate-fade-in-up">
              Get in Touch with AIdeology
            </h1>
            <p
              className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              We&apos;re here to help you unlock the power of AI. Whether you have a question about our services, want
              to discuss a project, or need expert advice, our team is ready to assist you.
            </p>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Contact Form Section */}
            <section
              className="bg-white p-8 md:p-10 rounded-xl shadow-xl animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <h2 className="text-3xl font-semibold text-charcoal mb-6 flex items-center">
                <MessageSquare className="w-8 h-8 mr-3 text-accent-green" />
                Send Us a Message
              </h2>
              <ContactForm />
            </section>

            {/* Contact Details Section */}
            <section className="space-y-10 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <div>
                <h2 className="text-3xl font-semibold text-charcoal mb-6 flex items-center">
                  <Building className="w-8 h-8 mr-3 text-accent-green" />
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactDetails.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-start group p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                      <item.icon className="w-6 h-6 text-accent-green mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-medium text-charcoal group-hover:text-accent-green transition-colors">
                          {item.label}
                        </h3>
                        <p className="text-gray-600">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-charcoal mb-4">Connect With Us</h3>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full text-charcoal bg-gray-200 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${social.color} group relative overflow-hidden`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6 relative z-10 transition-transform duration-300 group-hover:rotate-12" />
                      <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-charcoal text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
                        {social.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-12 animate-fade-in-up">
            Visit Our Office
          </h2>
          <div
            className="rounded-xl overflow-hidden shadow-2xl h-[400px] md:h-[500px] animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <InteractiveMap
              locations={[
                {
                  id: "dubai-hq",
                  name: "AIdeology HQ",
                  coords: { lat: 25.089, lng: 55.151 },
                  description:
                    "Abdullah Omran Taryam St - Al Sufouh - Al Sufouh 2 - Dubai - UAE. Visit us for cutting-edge AI solutions.",
                },
              ]}
              height="100%"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </>
  )
}
