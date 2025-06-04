import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, CheckCircle, Quote } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import type { StaticImageData } from 'next/image'

// Define interfaces for our data
interface Testimonial {
  quote: string
  author: string
  position: string
  company: string
  image?: string
}

interface UseCase {
  id: string
  title: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  image: string | StaticImageData
  logo?: string
  testimonial?: Testimonial
  slug: string
}

export default function CustomersPage() {
  // Sample use cases data
  const useCases: UseCase[] = [
    {
      id: "1",
      title: "Core42 Scales AI Cloud Infrastructure with NVIDIA DGX SuperPOD",
      industry: "AI Infrastructure",
      challenge:
        "G42\'s Core42 needed to rapidly scale their AI cloud offering to meet growing demand for enterprise AI workloads across the Middle East and beyond. They required a high-performance, scalable infrastructure that could support diverse AI applications while maintaining enterprise-grade reliability and security.",
      solution:
        "AIdeology designed and deployed a comprehensive 5 Scalable unit DGX SuperPOD infrastructure featuring over 159 NVIDIA DGX H100 systems. The solution included optimized networking, storage fabric, and management systems specifically configured for multi-tenant AI cloud operations.",
      results: [
        "5 Scalable DGX SuperPOD units deployed",
        "159+ NVIDIA DGX H100 systems implemented",
        "Massive scale AI cloud infrastructure operational",
        "Enhanced AI capabilities across the region",
      ],
      image: "/customers/core42_image.jpg",
      logo: "/customer-logos/core42-logo.png",
      testimonial: {
        quote:
          "The partnership with AIdeology enabled us to rapidly deploy enterprise-grade AI infrastructure at scale. The DGX SuperPOD implementation has significantly enhanced our ability to serve AI workloads across diverse industries.",
        author: "Talal Al Kaissi",
        position: "CEO",
        company: "Core42 (G42)",
        image: "/customers/talal_image.jpeg",
      },
      slug: "g42-ai-cloud-infrastructure",
    },
    {
      id: "2",
      title: "Tonomus – 20 × NVIDIA DGX A100 Cluster for NEOM Cognitive Cloud",
      industry: "AI Infrastructure",
      challenge:
        "Tonomus, the digital-infrastructure engine of the NEOM smart-city project, needed a high-density AI platform to power real-time analytics, digital-twin modelling, and generative-AI services for city-scale use cases across energy, mobility, and urban planning. They required extreme performance, multi-tenant isolation, and enterprise-grade security—delivered on an aggressive timeline.",
      solution:
        "AIdeology designed, delivered, and tuned a turnkey 20-node NVIDIA DGX A100 cluster inside NEOM\'s regional data facilities.",
      results: [
        "[ ___ PFLOPS / ___ TFLOPS ] aggregate AI compute online in < [ X ] weeks",
        "Cut model-training time for [ geospatial maps / traffic predictors / … ] by [ __ ]%",
        "Supports smart-city analytics for [ __ ] million sensors & resident digital twins",
        "Enabled Tonomus to launch its cognitive-cloud service [ __ ] months ahead of schedule, attracting [ __ ] new enterprise tenants",
      ],
      image: "/customers/tonomus_image.jpg",
      logo: "/customers/neom-logo.png",
      testimonial: {
        quote: "AIdeology delivered a secure, role-based AI finance agent that:",
        author: "Robert Thompson",
        position: "Grid Operations Manager",
        company: "PowerGrid Solutions",
        image: "/customers/testimonials/robert-thompson.png",
      },
      slug: "tonomus-neom-cognitive-cloud",
    },
    {
      id: "3",
      title: "Broadcom – VMware & Broadcom Invoice + CRM AI Automation",
      industry: "AI Consulting",
      challenge:
        "Broadcom\'s Southern Europe and GCC teams were drowning in paperwork: more than 25 000 invoices and quotes each quarter (100 000+ per year) had to be keyed manually into separate VMware and Broadcom CRM instances. Constant licensing model changes (users → nodes), intricate long-tail contracts, and a \"hockey-stick\" surge of low-value renewals left 120 full-time employees struggling to keep up—driving delays, errors, and rising operating costs.",
      solution: "AIdeology delivered a tailored, end-to-end automation stack that fuses Generative AI with RPA:",
      results: [
        "100 000+ invoices/year processed fully autonomously via Salesforce integration",
        "12 000 quotes cleared in 24 h vs. 3 months—a 90-day cycle shrunk to one day",
        "Workforce re-allocation: 120 FTE ➜ 5 FTE, freeing 115 people for higher-value tasks",
        "97.5 % data accuracy and near-zero manual rework",
        "1 200 % ROI in the first year, driven by labour savings and faster revenue recognition",
      ],
      image: "/customers/vmware-logo.png",
      logo: "/customers/broadcom-logo.png",
      testimonial: {
        quote: "AIdeology delivered a secure, role-based AI finance agent that:",
        author: "Robert Thompson",
        position: "Grid Operations Manager",
        company: "PowerGrid Solutions",
        image: "/customers/testimonials/robert-thompson.png",
      },
      slug: "broadcom-vmware-crm-automation",
    },
    {
      id: "4",
      title: "Midis Group – Generative-AI Finance Agent for Real-Time Consolidation & Forecasting",
      industry: "AI Consulting",
      challenge:
        "With dozens of operating companies spread across the Middle East & North Africa, Midis Group\'s finance team spent days each month reconciling spreadsheets, PDFs, and ERP exports to prepare group-level reports. Manual data entry introduced errors, template versions drifted, and late adjustments left decision-makers with out-of-date information. Midis needed a faster, more reliable way to aggregate data and generate forward-looking insights—without burdening regional controllers or expanding head-count.",
      solution: "AIdeology delivered a secure, role-based AI finance agent that:",
      results: [
        "Days-long consolidation cycles cut to minutes, freeing controllers for analysis rather than data wrangling",
        "Data-entry errors virtually eliminated thanks to automated validation and lineage tracking",
        "Self-service forecasting enables finance leaders to test scenarios live during executive reviews",
        "Rapid adoption across subsidiaries—the chat UI required < 1 hour of training for most users",
        "Positioned Midis Group to scale seamlessly as new entities and reporting requirements are added",
      ],
      image: "/customers/midis-logo.jpeg",
      logo: "/customers/mindware-logo.png",
      testimonial: {
        quote: "AIdeology delivered a secure, role-based AI finance agent that:",
        author: "Robert Thompson",
        position: "Grid Operations Manager",
        company: "PowerGrid Solutions",
        image: "/customers/testimonials/robert-thompson.png",
      },
      slug: "midis-group-generative-ai-finance",
    },
    {
      id: "5",
      title: "iStyle & K-Tuin – Digital-Twin Retail Analytics for 130+ Apple Stores",
      industry: "AI Consulting",
      challenge:
        "iStyle and K-Tuin (Midis Group) operate more than 130 Apple Premium Reseller stores across Europe, the Middle East and Africa. Store managers lacked precise, real-time insight into how shoppers moved, waited and interacted with products, so layout tweaks, staffing levels and campaign decisions were driven largely by gut feel. They needed a privacy-safe way to capture granular customer-action data—at scale and in real time—to stay competitive in the high-margin Apple retail market.",
      solution: "AIdeology built a complete \"store digital-twin\" platform:",
      results: [
        "Enterprise roll-out ready for all 130+ stores, giving corporate and field teams a single source of behavioural truth.",
        "Model accuracy boosted thanks to the synthetic-image corpus—allowing reliable detection of complex, low-frequency events (e.g., abandoned check-outs).",
        "Operational uplift: managers can dynamically redeploy staff to cut wait times, optimise merchandising based on real engagement hotspots and measure the ROI of in-store campaigns in hours instead of weeks.",
        "Privacy & compliance by design, meeting GDPR and internal Midis Group policies without intrusive cameras or manual tagging.",
      ],
      image: "istyle-ktuin-custom",
      logo: "/customers/mindware-logo.png",
      testimonial: {
        quote: "AIdeology built a complete \"store digital-twin\" platform:",
        author: "Robert Thompson",
        position: "Grid Operations Manager",
        company: "PowerGrid Solutions",
        image: "/customers/testimonials/robert-thompson.png",
      },
      slug: "k-tuin-istyle-digital-twin",
    },
    {
      id: "6",
      title: "Architectural Firm Enhances Visualization with 3D AI",
      industry: "3D AI",
      challenge:
        "An architectural firm wanted to improve their client presentations with more realistic visualizations but lacked the in-house expertise and infrastructure to implement advanced 3D rendering technologies.",
      solution:
        "AIdeology implemented a comprehensive 3D AI solution that integrated with their existing design tools. The solution included AI-powered rendering optimization, real-time visualization capabilities, and a custom digital twin framework for interactive presentations.",
      results: [
        "85% faster visualization turnaround time",
        "30% increase in client conversion rate",
        "Ability to offer new services like VR walkthroughs",
        "Reduced need for physical mockups, saving time and materials",
      ],
      image: "/customers/architecture-firm-case-study.png",
      logo: "/customers/beauty-and-the-bit-logo.png",
      testimonial: {
        quote:
          "AIdeology\'s 3D AI solution has revolutionized how we present designs to clients. The ability to create photorealistic visualizations in a fraction of the time has given us a significant competitive advantage.",
        author: "Elena Martinez",
        position: "Creative Director",
        company: "Beauty & The Bit",
        image: "/customers/testimonials/elena-martinez.png",
      },
      slug: "architectural-visualization",
    },
    {
      id: "7",
      title: "Media Production Studio Implements Virtual Production Pipeline",
      industry: "3D AI",
      challenge:
        "A media production studio wanted to transition to virtual production techniques but faced challenges with real-time rendering, camera tracking, and integrating physical and digital elements seamlessly.",
      solution:
        "AIdeology designed a complete virtual production pipeline powered by AI, including LED wall integration, camera tracking systems, real-time rendering servers, and a custom software layer for managing assets and scenes. The solution included training for the studio's team and ongoing support.",
      results: [
        "50% reduction in production time for complex scenes",
        "35% cost savings compared to traditional location shooting",
        "Ability to iterate on scenes in real-time during shooting",
        "New creative possibilities previously impossible with traditional methods",
      ],
      image: "/customers/virtual-production-case-study.png",
      logo: "/customers/serena-tv-logo.png",
      testimonial: {
        quote:
          "AIdeology's virtual production solution has completely changed how we approach production. The ability to see final-quality imagery in-camera has streamlined our workflow and opened up new creative possibilities.",
        author: "Sarah Johnson",
        position: "Head of Production",
        company: "Serena TV",
        image: "/customers/testimonials/sarah-johnson.png",
      },
      slug: "virtual-production",
    },
    {
      id: "8",
      title: "Energy Company Optimizes Grid Management with Digital Twins",
      industry: "Physical AI",
      challenge:
        "An energy company was struggling to optimize their power grid operations, leading to inefficiencies, higher costs, and occasional service disruptions. They needed a way to simulate and predict grid behavior under various conditions.",
      solution:
        "AIdeology created a comprehensive digital twin of their power grid infrastructure, integrating real-time data from sensors and weather forecasts. The solution included AI-powered predictive analytics for demand forecasting, failure prediction, and optimization algorithms for load balancing.",
      results: [
        "22% improvement in grid efficiency",
        "18% reduction in operational costs",
        "65% decrease in unplanned outages",
        "$3.5M annual savings in maintenance and energy costs",
      ],
      image: "/customers/energy-grid-case-study.png",
      logo: "/customers/energy-logo.png",
      testimonial: {
        quote:
          "The digital twin solution from AIdeology has transformed how we manage our grid. The predictive capabilities have allowed us to be proactive rather than reactive, resulting in better service for our customers and lower costs for our operations.",
        author: "Robert Thompson",
        position: "Grid Operations Manager",
        company: "PowerGrid Solutions",
        image: "/customers/testimonials/robert-thompson.png",
      },
      slug: "energy-grid-optimization",
    },
  ]

  // Group use cases by industry
  const gtmCategories = ["AI Infrastructure", "3D AI", "AI Consulting", "Physical AI"]

  return (
    <main className="min-h-screen bg-[#f4f4f4] text-charcoal pt-28">
      <Navbar />

      {/* Hero Section */}
      <section className="pb-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">Customer Success Stories</h1>
          <p className="text-xl text-charcoal/70 max-w-3xl">
            Discover how AIdeology's AI infrastructure, 3D AI, and consulting solutions have helped organizations across
            industries achieve their goals and overcome challenges.
          </p>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-16 bg-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                {useCases[0].logo && (
                  <>
                    <div className="bg-white/80 p-3 rounded-lg shadow-md mr-4">
                      <Image
                        src={useCases[0].logo || "/placeholder.svg"}
                        alt={useCases[0].testimonial?.company || "Company logo"}
                        width={120}
                        height={60}
                        className="h-12 w-auto"
                      />
                    </div>
                    <div className="bg-white/80 p-3 rounded-lg shadow-md mr-4">
                      <Image
                        src="/aideology.webp"
                        alt="AIdeology logo"
                        width={120}
                        height={60}
                        className="h-12 w-auto"
                      />
                    </div>
                  </>
                )}
               
              </div>
              <h2 className="text-3xl font-bold mb-6">{useCases[0].title}</h2>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-accent-green">Challenge</h3>
                <p className="text-white/80">{useCases[0].challenge}</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-accent-green">Solution</h3>
                <p className="text-white/80">{useCases[0].solution}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-accent-green">Results</h3>
                <ul className="space-y-2">
                  {useCases[0].results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-green mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <Button asChild className="bg-accent-green text-charcoal hover:bg-accent-green/90">
                  <Link href={`/customers/${useCases[0].slug}`}>Read full case study</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={useCases[0].image || "/placeholder.svg"}
                  alt={useCases[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              {useCases[0].testimonial && (
                <div className="absolute -bottom-8 right-8 left-8 bg-white text-charcoal p-6 rounded-lg shadow-lg">
                  <div className="flex items-start">
                    <Quote className="h-8 w-8 text-accent-green opacity-20 flex-shrink-0 mr-2" />
                    <div>
                      <p className="italic text-charcoal/80 mb-4">{useCases[0].testimonial.quote}</p>
                      <div className="flex items-center">
                        {useCases[0].testimonial.image && (
                          <Image
                            src={useCases[0].testimonial.image || "/placeholder.svg"}
                            alt={useCases[0].testimonial.author}
                            width={40}
                            height={40}
                            className="h-10 w-10 rounded-full object-cover mr-3"
                          />
                        )}
                        <div>
                          <p className="font-semibold">{useCases[0].testimonial.author}</p>
                          <p className="text-sm text-charcoal/60">
                            {useCases[0].testimonial.position}, {useCases[0].testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Success Stories by GTM</h2>

          <Tabs defaultValue={gtmCategories[0]} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full max-w-4xl mx-auto mb-8 justify-center">
              {gtmCategories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="text-sm md:text-base data-[state=active]:bg-accent-green data-[state=active]:text-charcoal"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {gtmCategories.map((category) => (
              <TabsContent key={category} value={category} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {useCases
                    .filter((useCase) => useCase.industry === category)
                    .map((useCase) => (
                      <Card
                        key={useCase.id}
                        className="bg-[#f4f4f4] border border-accent-green/20 hover-lift overflow-hidden"
                      >
                        <div className="relative h-48">
                          <CardImage useCase={useCase} />
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold mb-4">{useCase.title}</h3>
                          <div className="mb-4">
                            <h4 className="font-semibold text-electric-green mb-1">Challenge:</h4>
                            <p className="text-charcoal/70 line-clamp-2">{useCase.challenge}</p>
                          </div>
                          <div className="mb-4">
                            <h4 className="font-semibold text-electric-green mb-1">Results:</h4>
                            <ul className="space-y-1">
                              {useCase.results.slice(0, 2).map((result, index) => (
                                <li key={index} className="flex items-start text-sm">
                                  <CheckCircle className="h-4 w-4 text-accent-green mr-2 flex-shrink-0 mt-0.5" />
                                  <span className="text-charcoal/70">{result}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <Link
                            href={`/customers/${useCase.slug}`}
                            className="text-electric-green hover:text-electric-green/80 flex items-center group font-medium mt-4"
                          >
                            Read case study
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 text-accent-green" />
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#f4f4f4]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Customers Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases
              .filter((useCase) => useCase.testimonial)
              .slice(0, 3)
              .map((useCase) => (
                <Card key={useCase.id} className="bg-white border border-accent-green/20 hover-lift h-full">
                  <CardContent className="p-6">
                    <Quote className="h-10 w-10 text-accent-green opacity-20 mb-4" />
                    <p className="italic text-charcoal/80 mb-6">{useCase.testimonial?.quote}</p>
                    <div className="flex items-center mt-auto">
                      {useCase.testimonial?.image && (
                        <Image
                          src={useCase.testimonial.image || "/placeholder.svg"}
                          alt={useCase.testimonial.author}
                          width={50}
                          height={50}
                          className="h-12 w-12 rounded-full object-cover mr-4"
                        />
                      )}
                      <div>
                        <p className="font-semibold">{useCase.testimonial?.author}</p>
                        <p className="text-sm text-charcoal/60">
                          {useCase.testimonial?.position}, {useCase.testimonial?.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-charcoal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Become Our Next Success Story?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Let's discuss how AIdeology's AI infrastructure, 3D AI, and consulting solutions can help your organization
            achieve its goals.
          </p>
          <Button asChild size="lg" className="bg-accent-green text-charcoal hover:bg-accent-green/90">
            <Link href="#contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}


// Custom rendering for iStyle & K-Tuin card image
function CardImage({ useCase }: { useCase: UseCase }) {
  if (useCase.image === "istyle-ktuin-custom") {
    return (
      <div className="flex items-center justify-center h-full w-full bg-white px-4">
        <Image
          src="/customers/ktuin_logo.png"
          alt="K-Tuin logo"
          width={100}
          height={60}
          className="object-contain h-12 w-auto mr-2"
        />
        <Image
          src="/customers/istyle_logo.png"
          alt="iStyle logo"
          width={100}
          height={60}
          className="object-contain h-12 w-auto ml-2"
        />
      </div>
    )
  }
  return (
    <Image src={useCase.image || "/placeholder.svg"} alt={useCase.title} fill className="object-cover" />
  )
}
