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
  Shield,
  Zap,
  Layers,
  Mail,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ServiceLayout from "@/components/layouts/service-layout"

export const metadata = {
  title: "AI Infrastructure Professional Services | Design, Deployment & Optimization | AIdeology",
  description:
    "AIdeology offers expert Professional Services for your AI infrastructure, including custom design, high-performance deployment, MLOps integration, and ongoing optimization to maximize your AI capabilities.",
}

export default function AiInfrastructureProfessionalServicesPage() {
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

  const serviceOfferings = [
    {
      icon: <Layers className="w-10 h-10 text-accent-green mb-4" />,
      title: "AI Infrastructure Design & Architecture",
      description:
        "Our experts design bespoke AI infrastructure solutions, selecting the optimal combination of compute (GPU/CPU), networking, and storage tailored to your specific workloads and scalability requirements.",
      points: [
        "Workload analysis and requirement gathering",
        "GPU cluster design (NVIDIA DGX, HGX, and custom solutions)",
        "High-performance networking (InfiniBand, Ethernet) strategy",
        "Scalable storage architecture (parallel file systems, object storage)",
        "Power and cooling considerations for data centers",
      ],
    },
    {
      icon: <Zap className="w-10 h-10 text-accent-green mb-4" />,
      title: "Deployment & Integration Services",
      description:
        "Seamless deployment and integration of your AI infrastructure components. We handle everything from hardware racking and cabling to software installation and configuration, ensuring a turnkey solution.",
      points: [
        "Hardware installation and setup",
        "Network fabric deployment and testing",
        "Operating system and driver installation (Linux, CUDA)",
        "Integration with existing IT environments",
        "Acceptance testing and validation",
      ],
    },
    {
      icon: <Shield className="w-10 h-10 text-accent-green mb-4" />,
      title: "MLOps & Orchestration Setup",
      description:
        "Implement robust MLOps practices and orchestration tools (e.g., Kubernetes, Slurm) on your AI infrastructure for efficient resource management, experiment tracking, and reproducible AI workflows.",
      points: [
        "Kubernetes deployment for AI (e.g., NVIDIA AI Enterprise)",
        "Workload manager integration (Slurm, LSF)",
        "Containerization of AI applications (Docker, Singularity)",
        "CI/CD pipeline setup for ML models",
        "Monitoring and logging solutions for infrastructure & workloads",
      ],
    },
    {
      icon: <Users className="w-10 h-10 text-accent-green mb-4" />,
      title: "Performance Optimization & Support",
      description:
        "Maximize the performance and reliability of your AI infrastructure with our ongoing optimization services, health checks, and expert support, ensuring your systems run at peak efficiency.",
      points: [
        "Performance benchmarking and tuning",
        "Bottleneck identification and resolution",
        "Software and firmware updates",
        "Proactive monitoring and maintenance",
        "Dedicated technical support and training",
      ],
    },
  ]

  const breadcrumbPath = [
    { name: "Services", href: "/services" },
    { name: "AI Infrastructure", href: "/services/ai-infrastructure" },
    { name: "Professional Services" }
  ];

  const heroTitle = "Expert Services for Your AI Infrastructure";
  const heroSubtitle = "From design and deployment to optimization and support, AIdeology ensures your AI infrastructure powers innovation at scale.";
  const heroImage = "/services/ai_infra_experts.webp";

  return (
    <ServiceLayout>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-6 text-sm text-gray-500 flex items-center" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          {breadcrumbPath.map((item, index) => (
            <div key={item.name} className="flex items-center">
              <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
              {item.href ? (
                <Link href={item.href} className="hover:text-gray-700">
                  {item.name}
                </Link>
              ) : (
                <span className="font-medium text-gray-700">{item.name}</span>
              )}
            </div>
          ))}
        </nav>
      </div>

      <section className="relative bg-gradient-to-br from-charcoal via-charcoal to-gray-800 text-white py-16 md:py-20 shadow-xl">
        <div className="absolute inset-0 opacity-10">
          {heroImage && (
            <Image
              src={heroImage}
              alt="AI Infrastructure Services"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          )}
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold max-w-3xl">
            {heroTitle}
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl">
            {heroSubtitle}
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-accent-green text-charcoal font-semibold hover:bg-white hover:text-charcoal hover:scale-105 transition-all duration-300 ease-in-out px-8 py-3"
          >
            <Link href="/#contact" className="inline-flex items-center">
              <Mail className="mr-2 h-5 w-5" />
              Discuss Your Project
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
              A Partner for Every Step of Your AI Journey
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              AIdeology's Professional Services provide the deep expertise and hands-on support you need to design,
              deploy, and optimize high-performance AI infrastructure. We de-risk your investment and accelerate your
              time to value.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Our End-to-End Service Lifecycle
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              We provide a structured, comprehensive approach to AI infrastructure projects, ensuring success and a
              seamless experience from initiation to ongoing operation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {serviceOfferings.map((service) => (
              <div key={service.title} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="flex justify-center md:justify-start mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-charcoal mb-3 text-center md:text-left">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-center md:text-left">{service.description}</p>
                <ul className="space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent-green mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Why Partner with AIdeology?</h2>
            <p className="text-lg text-gray-600 mb-12">
              Our services are built on a foundation of deep technical expertise, a proven methodology, and a
              commitment to your success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Deep Technical Expertise", description: "Certified experts in NVIDIA technologies, high-performance computing, and AI data center design.", icon: <Zap className="w-8 h-8 text-accent-green" /> },
              { title: "End-to-End Solutions", description: "From initial consultation and design to deployment, management, and ongoing support.", icon: <Layers className="w-8 h-8 text-accent-green" /> },
              { title: "Proven Track Record", description: "Successful deployments of complex AI infrastructures for leading enterprises and research institutions.", icon: <CheckCircle className="w-8 h-8 text-accent-green" /> },
              { title: "Strategic Partnerships", description: "Strong relationships with leading hardware and software vendors to provide the best solutions.", icon: <Users className="w-8 h-8 text-accent-green" /> }
            ].map(reason => (
              <div key={reason.title} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-accent-green/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center bg-white p-12 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Ready to Build Your AI Future?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our Professional Services team is ready to help. Contact us for a detailed consultation.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-accent-green hover:bg-charcoal hover:text-white font-semibold text-lg px-10 py-5 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <Link href="/#contact" className="inline-flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                Contact an Expert
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </ServiceLayout>
  )
}
