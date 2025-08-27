"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowLeft, Tag } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const getArticleBySlug = (slug: string) => {
  return {
    title: "AIdeology at GITEX Africa (Morocco)",
    date: "May 31, 2023",
    category: "Events",
    image: "/news_images/image_8.webp",
    relatedArticles: [
      {
        id: "1",
        title: "GITEX 2024: A Week of Innovation",
        snippet: "Our latest showcase at GITEX GLOBAL 2024, featuring cutting-edge AI solutions.",
        date: "October 17, 2024",
        image: "/news_images/image_2.webp",
        category: "Events",
        slug: "gitex-2024",
      },
      {
        id: "2",
        title: "GITEX 2023: Showcasing AI Innovation",
        snippet: "Highlights from our participation at GITEX GLOBAL 2023.",
        date: "October 20, 2023",
        image: "/news_images/image_6.webp",
        category: "Events",
        slug: "gitex-global",
      },
    ],
  }
}

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)

  return (
    <main className="min-h-screen bg-[#f4f4f4] text-charcoal">
      <Navbar />

      {/* Article Header */}
      <section className="pt-32 pb-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Link href="/news" className="text-electric-green hover:text-electric-green/80 flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4 text-accent-green" />
              Back to News
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="text-charcoal/60 flex items-center text-sm">
              <Calendar className="mr-1 h-4 w-4 text-accent-green" />
              {article.date}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-charcoal">{article.title}</h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none text-charcoal/80 space-y-6">
                <h2 className="text-2xl font-semibold mt-10 mb-6">AIdeology at GITEX Africa: Pioneering Technology Innovation in Morocco</h2>

                <p className="mb-8">We went to GITEX Africa, the first edition held in the African continent of the largest and most inclusive tech show in the digital economy. As Africa's largest tech sourcing event, it played a crucial role in unlocking Africa's Digital Economy in Marrakech, Morocco. Our team was at Hall 4 from May 31 to June 2, 2023, in partnership with Lenovo, presenting their OVX Everyscale solution paired with NVIDIA Omniverse.</p>

                {/* Embedded Banner Image */}
                <div className="w-full h-auto relative rounded-lg overflow-hidden">
                  <Image
                    src="/news_images/gitex_africa_banner.webp"
                    alt="GITEX Africa Banner"
                    width={1200}
                    height={300}
                    className="object-cover w-full h-auto"
                  />
                </div>

                <h2 className="text-2xl font-semibold mt-10 mb-6">Interactive Digital Twin Demonstrations</h2>

                <p className="mb-8">As we did in previous events, we showcased a few interactive digital twins with the VARJO-XR headset so people could experience some of the possibilities of digital twins, such as:</p>

                <ul className="list-none space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">1.</span>
                    <span>Interacting and customizing a kitchen to your style in the middle of Venice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">2.</span>
                    <span>Popping confetti-filled balloons in an artist's studio</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">3.</span>
                    <span>Exploring physically accurate simulations and engineering capabilities</span>
                  </li>
                </ul>

                <p className="mb-8">These demonstrations allowed us to showcase key features of digital twins in a fun and easily understandable manner, highlighting the physical accuracy and engineering simulation capabilities that can be developed, as well as the intuitive interaction with 3D models.</p>

                <p className="mb-8">We were thrilled to partner with Lenovo again to showcase their scalable GPU-based HPC solution. It was an excellent opportunity to demonstrate the impressive capabilities of Digital Twin technology using the OVX Everyscale solution with NVIDIA Omniverse. The combination of advanced hardware and software continues to push the boundaries in digital simulations.</p>

                <h2 className="text-2xl font-semibold mt-10 mb-6">Why are Digital Twins Important?</h2>

                <ul className="list-none space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">1.</span>
                    <span><strong>Real-time Monitoring and Analysis:</strong> Digital twins enable continuous monitoring of physical counterparts, providing real-time data for analysis and understanding system functionality.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">2.</span>
                    <span><strong>Predictive Maintenance:</strong> They enable early identification of potential issues, reducing downtime and repair costs.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">3.</span>
                    <span><strong>Enhanced Design and Innovation:</strong> Facilitates risk-free experimentation and optimization without physical prototypes.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">4.</span>
                    <span><strong>Improved Efficiency:</strong> Optimizes workflows through process simulation and operation analysis.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">5.</span>
                    <span><strong>Training and Education:</strong> Provides safe, realistic environments for training in high-risk industries.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">6.</span>
                    <span><strong>Customization:</strong> Enables personalized product development and treatment plans through simulation.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">7.</span>
                    <span><strong>Environmental Impact:</strong> Helps model and improve sustainability in product design.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">8.</span>
                    <span><strong>Data-Driven Decisions:</strong> Enables agile, informed decision-making based on comprehensive data analysis.</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-semibold mt-10 mb-6">Lenovo Everyscale OVX: Powering Digital Innovation</h2>

                <p className="mb-8">Lenovo Everyscale OVX is a robust server infrastructure providing a high-performance, scalable, and secure platform for virtualization needs. This solution is optimal for Digital Twins, particularly for managing the complexities of creating and maintaining digital twins within NVIDIA's Omniverse platform. Key features include:</p>

                <ul className="list-none space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">1.</span>
                    <span><strong>High-Performance Computing:</strong> Delivers the computational power needed for real-time rendering and physics simulations in Omniverse.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">2.</span>
                    <span><strong>Enhanced GPU Performance:</strong> Leverages NVIDIA technology for optimal GPU-accelerated computing in Omniverse applications.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">3.</span>
                    <span><strong>Scalability:</strong> Adapts to varying project sizes and complexities with flexible resource allocation.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">4.</span>
                    <span><strong>Data Center Efficiency:</strong> Optimizes power consumption and cooling for sustainable operations.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">5.</span>
                    <span><strong>Integration Capabilities:</strong> Seamlessly connects with various software and data sources.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">6.</span>
                    <span><strong>Security:</strong> Provides robust protection for sensitive digital twin data.</span>
                  </li>
                </ul>

                {/* YouTube Video Embed */}
                <div className="my-8">
                  <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.youtube.com/embed/80Rr3KVMm5k"
                      title="Lenovo OVX Everyscale Platform"
                      width="100%"
                      height="100%"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>

              
              {/* Bottom spacing */}
              <div className="mb-12"></div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-xl font-bold mb-6">Related Articles</h3>
                <div className="space-y-6">
                  {article.relatedArticles.map((related) => (
                    <Card key={related.id} className="border border-accent-green/20 hover-lift">
                      <CardContent className="p-0">
                        <div className="relative h-40">
                          <Image
                            src={related.image}
                            alt={related.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex items-center mb-2">
                            <span className="text-xs font-semibold bg-accent-green/10 text-electric-green px-2 py-1 rounded-full">
                              {related.category}
                            </span>
                            <span className="text-xs text-charcoal/60 ml-2 flex items-center">
                              <Calendar className="h-3 w-3 mr-1 text-accent-green" />
                              {related.date}
                            </span>
                          </div>
                          <h4 className="font-bold mb-2">{related.title}</h4>
                          <p className="text-sm text-charcoal/60 mb-2">{related.snippet}</p>
                          <Link
                            href={`/news/${related.slug}`}
                            className="text-electric-green hover:text-electric-green/80 text-sm flex items-center"
                          >
                            Read article
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 bg-accent-green/10 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Need AI Infrastructure Solutions?</h3>
                  <p className="text-charcoal/80 mb-4">
                    Discover how AIdeology can help you design, deploy, and operate cutting-edge AI infrastructure
                    tailored to your specific needs.
                  </p>
                  <Button asChild className="bg-accent-green text-charcoal hover:bg-accent-green/90 w-full">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
