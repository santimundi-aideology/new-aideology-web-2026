import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProductLayout from "@/components/layouts/product-layout" // Assuming ProductLayout can be used or a more generic one
import { CheckCircle, Lightbulb, Users, Briefcase, Zap, ArrowRight, Mail } from "lucide-react"

export const metadata = {
  title: "AI Professional Services | Expert AI Consulting & Implementation | AIdeology",
  description:
    "Leverage AIdeology's expert Professional Services for AI strategy, custom model development, MLOps, AI infrastructure design, and specialized training to accelerate your AI journey.",
}

export default function ProfessionalServicesPage() {
  const serviceOfferings = [
    {
      icon: <Lightbulb className="w-10 h-10 text-accent-green mb-4" />,
      title: "AI Strategy & Consulting",
      description:
        "Develop a clear roadmap for AI adoption. Our experts help identify high-impact use cases, assess readiness, and create a tailored AI strategy aligned with your business objectives.",
      points: [
        "AI readiness assessment",
        "Use case identification & prioritization",
        "Technology stack evaluation",
        "ROI analysis & business case development",
        "Change management planning",
      ],
    },
    {
      icon: <Zap className="w-10 h-10 text-accent-green mb-4" />,
      title: "Custom AI Model Development",
      description:
        "Build bespoke AI models tailored to your unique data and challenges. We specialize in machine learning, deep learning, NLP, computer vision, and generative AI solutions.",
      points: [
        "Data collection & preparation",
        "Feature engineering",
        "Model selection & training",
        "Fine-tuning foundation models",
        "Performance optimization & validation",
      ],
    },
    {
      icon: <Briefcase className="w-10 h-10 text-accent-green mb-4" />,
      title: "MLOps & Deployment",
      description:
        "Operationalize your AI models efficiently and reliably. We implement robust MLOps pipelines for continuous integration, delivery, monitoring, and governance of AI systems.",
      points: [
        "CI/CD for ML pipelines",
        "Scalable model deployment (cloud/on-prem)",
        "Model monitoring & retraining",
        "Data versioning & experiment tracking",
        "Automated workflows",
      ],
    },
    {
      icon: <Users className="w-10 h-10 text-accent-green mb-4" />,
      title: "AI Infrastructure Design & Optimization",
      description:
        "Architect and implement high-performance AI infrastructure. We provide expertise in GPU clusters, accelerated networking, storage solutions, and cloud AI platforms.",
      points: [
        "Compute resource planning (GPU, CPU)",
        "High-speed networking design",
        "Optimized storage for AI workloads",
        "Kubernetes & containerization",
        "Cloud & hybrid AI infrastructure setup",
      ],
    },
  ]

  const whyChooseUs = [
    {
      title: "Deep Expertise",
      description:
        "Our team comprises seasoned AI strategists, data scientists, MLOps engineers, and infrastructure architects with extensive industry experience.",
      icon: <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />,
    },
    {
      title: "Proven Methodologies",
      description:
        "We employ agile, results-driven methodologies to deliver AI solutions that provide measurable business value quickly and efficiently.",
      icon: <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />,
    },
    {
      title: "Collaborative Partnership",
      description:
        "We work as an extension of your team, ensuring knowledge transfer and fostering a culture of AI innovation within your organization.",
      icon: <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />,
    },
    {
      title: "Vendor-Agnostic Approach",
      description:
        "We recommend and implement the best-fit technologies for your specific needs, leveraging our partnerships with leading AI hardware and software providers.",
      icon: <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />,
    },
  ]

  return (
    <ProductLayout
      // pageTitle="AI Professional Services"
      // breadcrumbPath={[{ name: "Products", href: "/products" }, { name: "Professional Services" }]}
    >
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">Unlock Your AI Potential with Expert Services</h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          AIdeology\'s Professional Services provide the expertise and support you need to successfully navigate the complexities of AI adoption. From strategy and development to deployment and optimization, we partner with you at every stage of your AI journey.
        </p>
        <div className="relative h-[450px] rounded-lg overflow-hidden mb-8 shadow-xl">
          <Image
            src="/services/consulting-team.webp" // Placeholder - needs a relevant image for professional services
            alt="Team of AI experts collaborating on a project"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <section className="py-12 md:py-16 bg-gray-100 rounded-lg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Our Comprehensive AI Service Offerings</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide a full spectrum of services to help you leverage AI effectively.
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

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Why Partner with AIdeology?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Gain a competitive edge with our tailored AI expertise and commitment to your success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((reason) => (
              <div key={reason.title} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  {reason.icon}
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-1">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-accent-green to-emerald-600 text-white rounded-lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Accelerate Your AI Transformation?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Let\'s discuss how our Professional Services can help you achieve your AI goals. Contact us today for a consultation.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-accent-green hover:bg-charcoal hover:text-white font-semibold text-lg px-10 py-5 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <Link href="/contact" className="inline-flex items-center">
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </Link>
          </Button>
        </div>
      </section>
    </ProductLayout>
  )
} 