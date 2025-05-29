import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, Quote, BarChart, Clock, DollarSign, Zap } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// This would typically come from a database or CMS
const getCaseStudyBySlug = (slug: string) => {
  // Sample case study data for VFX studio
  return {
    title: "VFX Studio Accelerates Rendering with AI Infrastructure",
    industry: "Media & Entertainment",
    company: "El Ranchito",
    logo: "/customers/el-ranchito-logo.png",
    heroImage: "/customers/vfx-studio-case-study-hero.png",
    challenge:
      "A leading VFX studio was struggling with long rendering times that were impacting project deadlines and increasing costs. They needed a high-performance computing solution that could handle complex 3D rendering workloads while being scalable and cost-effective.",
    challengeDetails:
      "El Ranchito, a renowned visual effects studio known for their work on major film and television productions, was facing significant challenges with their rendering infrastructure. As projects became more complex and clients demanded higher quality visuals with shorter turnaround times, their existing render farm was struggling to keep up.\n\nSpecific challenges included:\n\n- Render times of up to 72 hours for complex scenes\n- Limited ability to iterate on designs due to long feedback cycles\n- Difficulty scaling resources during peak production periods\n- High operational costs for maintaining and cooling on-premises hardware\n- Inconsistent performance across different types of rendering workloads",
    solution:
      "AIdeology designed and deployed a custom GPU cluster with 128 NVIDIA A100 GPUs, optimized storage fabric, and a specialized job scheduling system. The solution included a hybrid cloud approach that allowed for dynamic scaling during peak rendering periods.",
    solutionDetails:
      "After a comprehensive assessment of El Ranchito's workflows and requirements, AIdeology designed a custom AI infrastructure solution that addressed their specific needs:\n\n1. **High-Performance GPU Cluster**: A core infrastructure of 128 NVIDIA A100 GPUs in a high-density configuration, optimized for both traditional rendering and AI-accelerated denoising and upscaling.\n\n2. **High-Throughput Storage Fabric**: A 1 PB storage system with 200GB/s throughput, ensuring that I/O bottlenecks wouldn't limit GPU performance.\n\n3. **Intelligent Workload Management**: A custom-developed scheduler that intelligently distributed rendering tasks based on their characteristics and priority.\n\n4. **Hybrid Cloud Integration**: Seamless integration with cloud resources for dynamic scaling during peak periods, with automated provisioning and deprovisioning to control costs.\n\n5. **AI-Enhanced Rendering Pipeline**: Implementation of AI denoising and upscaling techniques that reduced the number of samples needed for high-quality output.\n\n6. **Monitoring and Analytics**: Comprehensive monitoring system that provided real-time insights into resource utilization and job progress.",
    implementation:
      "The implementation was carried out in phases to minimize disruption to ongoing projects. AIdeology worked closely with El Ranchito's technical team to ensure smooth integration with their existing workflows and software tools. The deployment included comprehensive training for the studio's artists and technical staff.",
    results: [
      "60% reduction in rendering times",
      "40% decrease in infrastructure costs",
      "Ability to handle 3x more projects simultaneously",
      "Improved artist productivity with real-time feedback",
    ],
    resultsDetails:
      "The impact of the new AI infrastructure was immediate and significant:\n\n- **Rendering Performance**: Average render times decreased by 60%, with some complex scenes seeing even greater improvements.\n\n- **Cost Efficiency**: Despite the increased performance, overall infrastructure costs decreased by 40% due to better resource utilization and the hybrid cloud approach.\n\n- **Capacity**: The studio was able to take on 3x more projects simultaneously without adding additional staff.\n\n- **Artist Productivity**: Artists could now get feedback on their work in minutes rather than hours, enabling more iterations and higher quality output.\n\n- **Competitive Advantage**: Faster turnaround times and higher quality work led to increased client satisfaction and new business opportunities.\n\n- **Energy Efficiency**: The new infrastructure consumed 35% less power per frame rendered, aligning with the studio's sustainability goals.",
    testimonial: {
      quote:
        "The AI infrastructure solution from AIdeology has transformed our rendering pipeline. What used to take days now takes hours, allowing our artists to iterate faster and deliver higher quality work to our clients. The expertise and support from the AIdeology team throughout the implementation and beyond has been exceptional.",
      author: "Carlos Rodriguez",
      position: "CTO",
      company: "El Ranchito",
      image: "/customers/testimonials/carlos-rodriguez.png",
    },
    metrics: [
      {
        label: "Rendering Time Reduction",
        value: "60%",
        icon: <Clock className="h-6 w-6 text-accent-green" />,
      },
      {
        label: "Cost Savings",
        value: "40%",
        icon: <DollarSign className="h-6 w-6 text-accent-green" />,
      },
      {
        label: "Capacity Increase",
        value: "3x",
        icon: <BarChart className="h-6 w-6 text-accent-green" />,
      },
      {
        label: "Energy Efficiency Improvement",
        value: "35%",
        icon: <Zap className="h-6 w-6 text-accent-green" />,
      },
    ],
    relatedCaseStudies: [
      {
        id: "2",
        title: "Architectural Firm Enhances Visualization with 3D AI",
        industry: "Architecture & Design",
        image: "/customers/architecture-firm-case-study.png",
        slug: "architectural-visualization",
      },
      {
        id: "4",
        title: "Media Production Studio Implements Virtual Production Pipeline",
        industry: "Media & Entertainment",
        image: "/customers/virtual-production-case-study.png",
        slug: "virtual-production",
      },
    ],
  }
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = getCaseStudyBySlug(params.slug)

  return (
    <main className="min-h-screen bg-[#f4f4f4] text-charcoal">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Link href="/customers" className="text-electric-green hover:text-electric-green/80 flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4 text-accent-green" />
              Back to Customer Stories
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="bg-accent-green/10 text-electric-green px-3 py-1 rounded-full text-sm font-medium">
              {caseStudy.industry}
            </span>
          </div>

          <div className="flex items-center mb-6">
            {caseStudy.logo && (
              <Image
                src={caseStudy.logo || "/placeholder.svg"}
                alt={caseStudy.company}
                width={160}
                height={80}
                className="h-16 w-auto mr-6"
              />
            )}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">{caseStudy.title}</h1>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-white pb-16">
        <div className="container mx-auto px-4">
          <div className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={caseStudy.heroImage || caseStudy.heroImage}
              alt={caseStudy.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-16 bg-[#f4f4f4]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Challenge Section */}
              <div className="bg-white rounded-lg p-8 mb-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-accent-green/10 flex items-center justify-center mr-3">
                    <span className="text-electric-green font-bold">1</span>
                  </span>
                  Challenge
                </h2>
                <p className="text-charcoal/80 mb-4">{caseStudy.challenge}</p>
                <div className="text-charcoal/80 whitespace-pre-line">{caseStudy.challengeDetails}</div>
              </div>

              {/* Solution Section */}
              <div className="bg-white rounded-lg p-8 mb-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-accent-green/10 flex items-center justify-center mr-3">
                    <span className="text-electric-green font-bold">2</span>
                  </span>
                  Solution
                </h2>
                <p className="text-charcoal/80 mb-4">{caseStudy.solution}</p>
                <div className="text-charcoal/80 whitespace-pre-line">{caseStudy.solutionDetails}</div>
                <div className="mt-6">
                  <h3 className="text-xl font-bold mb-3">Implementation Approach</h3>
                  <p className="text-charcoal/80">{caseStudy.implementation}</p>
                </div>
              </div>

              {/* Results Section */}
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-accent-green/10 flex items-center justify-center mr-3">
                    <span className="text-electric-green font-bold">3</span>
                  </span>
                  Results
                </h2>

                {/* Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {caseStudy.metrics.map((metric, index) => (
                    <div
                      key={index}
                      className="bg-accent-green/5 border border-accent-green/20 rounded-lg p-4 flex items-center"
                    >
                      <div className="mr-4">{metric.icon}</div>
                      <div>
                        <div className="text-2xl font-bold text-electric-green">{metric.value}</div>
                        <div className="text-sm text-charcoal/70">{metric.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-charcoal/80 whitespace-pre-line mb-8">{caseStudy.resultsDetails}</div>

                {/* Testimonial */}
                {caseStudy.testimonial && (
                  <div className="bg-accent-green/10 rounded-lg p-6">
                    <div className="flex items-start">
                      <Quote className="h-8 w-8 text-accent-green opacity-20 flex-shrink-0 mr-3" />
                      <div>
                        <p className="italic text-charcoal/80 mb-4">{caseStudy.testimonial.quote}</p>
                        <div className="flex items-center">
                          {caseStudy.testimonial.image && (
                            <Image
                              src={caseStudy.testimonial.image || "/placeholder.svg"}
                              alt={caseStudy.testimonial.author}
                              width={50}
                              height={50}
                              className="h-12 w-12 rounded-full object-cover mr-4"
                            />
                          )}
                          <div>
                            <p className="font-semibold">{caseStudy.testimonial.author}</p>
                            <p className="text-sm text-charcoal/60">
                              {caseStudy.testimonial.position}, {caseStudy.testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Key Results Summary */}
                <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Key Results</h3>
                  <ul className="space-y-3">
                    {caseStudy.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-accent-green mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-charcoal/80">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Related Case Studies */}
                <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Related Case Studies</h3>
                  <div className="space-y-4">
                    {caseStudy.relatedCaseStudies.map((related) => (
                      <Card key={related.id} className="border border-accent-green/20 hover-lift">
                        <CardContent className="p-0">
                          <div className="relative h-32">
                            <Image
                              src={related.image || "/placeholder.svg"}
                              alt={related.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <div className="text-xs font-semibold bg-accent-green/10 text-electric-green px-2 py-1 rounded-full inline-block mb-2">
                              {related.industry}
                            </div>
                            <h4 className="font-bold mb-2">{related.title}</h4>
                            <Link
                              href={`/customers/${related.slug}`}
                              className="text-electric-green hover:text-electric-green/80 text-sm flex items-center"
                            >
                              Read case study
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-charcoal rounded-lg p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Need Similar Results?</h3>
                  <p className="text-white/80 mb-4">
                    Discover how AIdeology can help your organization achieve similar outcomes with our tailored AI
                    solutions.
                  </p>
                  <Button asChild className="bg-accent-green text-charcoal hover:bg-accent-green/90 w-full">
                    <Link href="#contact">Schedule a Consultation</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto mb-8">
            Let's discuss how AIdeology's solutions can help you achieve your goals and overcome your challenges.
          </p>
          <Button asChild size="lg" className="bg-accent-green text-charcoal hover:bg-accent-green/90">
            <Link href="#contact">Get Started Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
