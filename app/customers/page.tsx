import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, CheckCircle, Quote } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

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
  image: string
  logo?: string
  testimonial?: Testimonial
  slug: string
}

export default function CustomersPage() {
  // Sample use cases data
  const useCases: UseCase[] = [
    {
      id: "1",
      title: "G42 Scales AI Cloud Infrastructure with NVIDIA DGX SuperPOD",
      industry: "AI Infrastructure",
      challenge:
        "G42's Core42 needed to rapidly scale their AI cloud offering to meet growing demand for enterprise AI workloads across the Middle East and beyond. They required a high-performance, scalable infrastructure that could support diverse AI applications while maintaining enterprise-grade reliability and security.",
      solution:
        "AIdeology designed and deployed a comprehensive 5 Scalable unit DGX SuperPOD infrastructure featuring over 159 NVIDIA DGX H100 systems. The solution included optimized networking, storage fabric, and management systems specifically configured for multi-tenant AI cloud operations.",
      results: [
        "5 Scalable DGX SuperPOD units deployed",
        "159+ NVIDIA DGX H100 systems implemented",
        "Massive scale AI cloud infrastructure operational",
        "Enhanced AI capabilities across the region",
      ],
      image: "/customers/g42-infrastructure-case-study.png",
      logo: "/customers/g42-logo.png",
      testimonial: {
        quote:
          "The partnership with AIdeology enabled us to rapidly deploy enterprise-grade AI infrastructure at scale. The DGX SuperPOD implementation has significantly enhanced our ability to serve AI workloads across diverse industries.",
        author: "Talal Al Kaissi",
        position: "CEO",
        company: "Core42 (G42)",
        image: "/customers/testimonials/talal-al-kaissi.png",
      },
      slug: "g42-ai-cloud-infrastructure",
    },
    {
      id: "2",
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
          "AIdeology's 3D AI solution has revolutionized how we present designs to clients. The ability to create photorealistic visualizations in a fraction of the time has given us a significant competitive advantage.",
        author: "Elena Martinez",
        position: "Creative Director",
        company: "Beauty & The Bit",
        image: "/customers/testimonials/elena-martinez.png",
      },
      slug: "architectural-visualization",
    },
    {
      id: "3",
      title: "Manufacturing Company Optimizes Production with AI Agents",
      industry: "AI Consulting",
      challenge:
        "A manufacturing company was experiencing inefficiencies in their production line due to manual quality control processes and lack of predictive maintenance capabilities. They needed an intelligent system that could identify potential issues before they caused downtime.",
      solution:
        "AIdeology developed and deployed a custom AI agent system that integrated with their existing IoT sensors and production management software. The solution included computer vision for quality control, predictive maintenance algorithms, and a centralized dashboard for monitoring and analytics.",
      results: [
        "37% reduction in production downtime",
        "28% decrease in maintenance costs",
        "42% improvement in defect detection accuracy",
        "Annual savings of $4.2M through efficiency improvements",
      ],
      image: "/customers/manufacturing-case-study.png",
      logo: "/customers/mrfactory-logo.png",
      testimonial: {
        quote:
          "The AI consulting and implementation services from AIdeology have transformed our manufacturing operations. The predictive maintenance capabilities alone have paid for the investment many times over.",
        author: "Michael Chen",
        position: "Operations Director",
        company: "MrFactory",
        image: "/customers/testimonials/michael-chen.png",
      },
      slug: "manufacturing-optimization",
    },
    {
      id: "4",
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
      id: "5",
      title: "Healthcare Provider Enhances Diagnostics with AI",
      industry: "AI Consulting",
      challenge:
        "A healthcare provider needed to improve their diagnostic capabilities and reduce the workload on their radiologists, who were overwhelmed with the volume of medical imaging that needed to be analyzed.",
      solution:
        "AIdeology implemented an AI-powered diagnostic assistant that integrated with their existing PACS (Picture Archiving and Communication System). The solution included custom-trained models for detecting anomalies in various types of medical imaging, a prioritization system for urgent cases, and an intuitive interface for radiologists.",
      results: [
        "42% improvement in early detection rates",
        "30% reduction in radiologist workload",
        "25% decrease in time-to-diagnosis",
        "Improved patient outcomes through faster intervention",
      ],
      image: "/customers/healthcare-case-study.png",
      logo: "/customers/healthcare-logo.png",
      testimonial: {
        quote:
          "The AI diagnostic system from AIdeology has been a game-changer for our radiology department. It allows our specialists to focus on the most critical cases while ensuring nothing is missed in routine scans.",
        author: "Dr. Amanda Lee",
        position: "Chief of Radiology",
        company: "Global Health Systems",
        image: "/customers/testimonials/amanda-lee.png",
      },
      slug: "healthcare-diagnostics",
    },
    {
      id: "6",
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
    <main className="min-h-screen bg-[#f4f4f4] text-charcoal">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white">
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
                  <Image
                    src={useCases[0].logo || "/placeholder.svg"}
                    alt={useCases[0].testimonial?.company || "Company logo"}
                    width={120}
                    height={60}
                    className="h-12 w-auto mr-4"
                  />
                )}
                <span className="text-accent-green font-semibold">{useCases[0].industry}</span>
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
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full max-w-4xl mx-auto mb-8">
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
                          <Image
                            src={useCase.image || "/placeholder.svg"}
                            alt={useCase.title}
                            fill
                            className="object-cover"
                          />
                          {useCase.logo && (
                            <div className="absolute bottom-4 left-4 bg-white/90 p-2 rounded-md">
                              <Image
                                src={useCase.logo || "/placeholder.svg"}
                                alt={useCase.testimonial?.company || "Company logo"}
                                width={80}
                                height={40}
                                className="h-8 w-auto"
                              />
                            </div>
                          )}
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
