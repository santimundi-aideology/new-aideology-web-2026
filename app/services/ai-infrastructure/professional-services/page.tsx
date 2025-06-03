import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  ArrowRight,
  Users,
  Settings,
  HardDrive,
  Wrench,
  Headset,
  ShieldCheck,
  Lightbulb,
  PackageCheck,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProfessionalServicesPage() {
  const serviceLifecycleStages = [
    {
      stage: "Initiation",
      title: "Project Initiation & Site Survey",
      icon: Users,
      image: "/project-planning-meeting.png",
      alt: "Team discussing project initiation for AI infrastructure",
      description:
        "Our meticulous initiation phase ensures your AI infrastructure project is set up for success from day one. We cover all bases, from governance to detailed site readiness.",
      activities: [
        "Comprehensive Site Survey (Cooling, Power, Floor Plan)",
        "Project Governance & Stakeholder Alignment",
        "Detailed Scope of Work Definition",
        "High-Level Solution Design",
        "Procurement & Purchase Order Management",
      ],
    },
    {
      stage: "Delivery",
      title: "Hardware Delivery & Pre-Installation",
      icon: HardDrive,
      image: "/server-racks-delivery.png",
      alt: "Secure delivery of AI hardware components",
      description:
        "We manage the complex logistics of AI hardware delivery and ensure all pre-installation requisites are met for a smooth deployment.",
      activities: [
        "Secure & Timely Hardware Transport to Final Site",
        "Detailed Design & Technical Documentation",
        "Cabling Infrastructure Preparation & Planning",
        "Scalable Unit Configuration & Kick-Off Meeting",
        "Pre-installation Checks & Environmental Readiness",
      ],
    },
    {
      stage: "Implement/Test",
      title: "Onsite Deployment, Configuration & Testing",
      icon: Wrench,
      image: "/ai-server-configuration.png",
      alt: "Engineers performing onsite deployment and configuration of AI servers",
      description:
        "Our expert engineers handle the physical deployment, meticulous configuration, and rigorous testing of your AI infrastructure to ensure optimal performance.",
      activities: [
        "Onsite Preparation & Staging",
        "Physical Deployment of Servers, Storage & Networking",
        "System Bring-Up & Initial Configuration",
        "Ancillary Services Integration (UPS, Monitoring)",
        "Comprehensive Site Acceptance Testing (Validations, Simulation Tests)",
      ],
    },
    {
      stage: "Handover",
      title: "Software Implementation & System Handover",
      icon: PackageCheck,
      image: "/team-reviewing-docs.png",
      alt: "Team reviewing system documentation during project handover",
      description:
        "We ensure a seamless transition with thorough software implementation, comprehensive documentation, and knowledge transfer to your team.",
      activities: [
        "Software Stack Implementation (e.g., Run:AI, Weights & Biases, Base Command)",
        "Creation of Detailed Site Documentation",
        "Validation Reporting & Performance Benchmarking",
        "System Walkthrough & Operational Overview",
        "Customized Training Sessions & Sign-Off",
      ],
    },
    {
      stage: "Operation",
      title: "Operational Enablement & Optimization",
      icon: Settings,
      image: "/ai-cluster-dashboard.png",
      alt: "Dashboard showing AI cluster performance monitoring",
      description:
        "Post-handover, we focus on enabling your team to operate the AI infrastructure efficiently and provide ongoing optimization to maximize your ROI.",
      activities: [
        "Knowledge Transfer & Best Practices Sharing",
        "Performance Monitoring & Tuning Strategies",
        "Workflow Integration Support",
        "Scalability Planning & Future-Proofing",
        "Operational Process Refinement",
      ],
    },
    {
      stage: "Support",
      title: "Maintenance & Ongoing Support",
      icon: Headset,
      image: "/placeholder.svg?width=800&height=600",
      alt: "Support engineer assisting a client with their AI infrastructure",
      description:
        "AIdeology provides continuous maintenance and expert support to ensure your AI infrastructure remains robust, secure, and performs optimally throughout its lifecycle.",
      activities: [
        "Proactive System Health Monitoring",
        "Scheduled Maintenance & Firmware Updates",
        "Rapid Response Technical Support (SLA-driven)",
        "Hardware Replacement & Repair Services",
        "Continuous Security Patching & Vulnerability Management",
      ],
    },
  ]

  const whyChooseUsPoints = [
    {
      icon: ShieldCheck,
      title: "End-to-End Expertise",
      description:
        "From initial site survey to ongoing operational support, we manage every aspect of your AI infrastructure lifecycle.",
    },
    {
      icon: Users,
      title: "Certified Professionals",
      description:
        "Our team comprises certified experts in NVIDIA technologies, data center design, and AI workload optimization.",
    },
    {
      icon: Lightbulb,
      title: "Tailored Solutions",
      description:
        "We don't offer one-size-fits-all. Our professional services are customized to your specific business needs and AI goals.",
    },
    {
      icon: PackageCheck,
      title: "Proven Methodology",
      description:
        "Our structured, phased approach, refined through years of experience, ensures predictable outcomes and minimizes risk.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charcoal via-charcoal to-gray-800 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/placeholder.svg?width=1920&height=1080"
            alt="Abstract background"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="inline-flex items-center bg-accent-green/20 text-accent-green px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Settings className="w-4 h-4 mr-2" />
            AI Infrastructure Professional Services
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Expert Professional Services for Your AI Infrastructure
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            AIdeology delivers comprehensive, end-to-end professional services to design, deploy, optimize, and support
            your high-performance AI infrastructure, ensuring maximum ROI and operational excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent-green hover:bg-accent-green/90 text-charcoal font-semibold">
              Request a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link href="/customers">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-charcoal"
              >
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction to Our Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4">Our Proven Professional Services Lifecycle</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a structured, multi-stage process to deliver robust and scalable AI infrastructure solutions,
              tailored to your unique requirements. This lifecycle ensures quality, predictability, and successful
              outcomes.
            </p>
          </div>
          {/* You can insert the lifecycle image here if desired */}
          <div className="mb-12 flex justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-03%20at%2016.59.09-HpEm2JzsAC20KWgpe4dPbxnLcsQyVS.png"
              alt="AIdeology Professional Services Lifecycle"
              width={1200}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Service Lifecycle Stages */}
      {serviceLifecycleStages.map((item, index) => (
        <section key={item.stage} className={`py-16 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
          <div className="container mx-auto px-6 lg:px-12">
            <div
              className={`flex flex-col md:flex-row items-center gap-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative aspect-video rounded-lg shadow-xl overflow-hidden">
                  <Image src={item.image || "/placeholder.svg"} alt={item.alt} layout="fill" objectFit="cover" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center text-accent-green mb-3">
                  <item.icon className="w-7 h-7 mr-3" />
                  <span className="text-sm font-semibold uppercase tracking-wider">{item.stage}</span>
                </div>
                <h3 className="text-3xl font-bold text-charcoal mb-5">{item.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{item.description}</p>
                <ul className="space-y-3">
                  {item.activities.map((activity) => (
                    <li key={activity} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent-green mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose AIdeology Section */}
      <section className="py-20 bg-charcoal text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Partner with AIdeology for Professional Services?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage our deep expertise and customer-centric approach to build and maintain world-class AI
              infrastructure.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsPoints.map((point) => (
              <Card key={point.title} className="bg-gray-800 border-gray-700 hover-lift text-center">
                <CardHeader className="items-center">
                  <div className="p-3 bg-accent-green/20 rounded-full mb-4">
                    <point.icon className="w-8 h-8 text-accent-green" />
                  </div>
                  <CardTitle className="text-xl text-white">{point.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">{point.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold text-charcoal mb-6">Ready to Elevate Your AI Infrastructure?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Let AIdeology's Professional Services team guide you through every step of your AI journey. Contact us today
            to discuss your project.
          </p>
          <Button
            size="lg"
            className="bg-accent-green hover:bg-accent-green/90 text-charcoal font-semibold px-10 py-4 text-lg"
          >
            Get in Touch
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export const metadata = {
  title: "AI Infrastructure Professional Services | AIdeology",
  description:
    "AIdeology offers end-to-end professional services for AI infrastructure, from site survey and design to deployment, testing, handover, and ongoing support. Maximize your AI investment with our expert guidance.",
}
