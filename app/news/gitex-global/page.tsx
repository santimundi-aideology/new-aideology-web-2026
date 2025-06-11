"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowLeft, Tag, Share2, Linkedin, Twitter, Maximize2 } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useState } from "react"

const getArticleBySlug = (slug: string) => {
  return {
    title: "AIdeology at GITEX 2023, Dubai",
    date: "October 25, 2023",
    category: "Events",
    relatedArticles: [
      {
        id: "1",
        title: "GITEX 2024: A Week of Innovation",
        snippet: "Our latest showcase at GITEX GLOBAL 2024, featuring cutting-edge AI solutions.",
        date: "October 17, 2024",
        image: "/news_images/image_2.jpeg",
        category: "Events",
        slug: "gitex-2024"
      },
      {
        id: "2",
        title: "GITEX Africa 2023: Expanding AI Horizons",
        snippet: "Our participation at the first edition of GITEX Africa in Morocco.",
        date: "May 31, 2023",
        image: "/news_images/image_8.jpeg",
        category: "Events",
        slug: "gitex-africa"
      }
    ],
  }
}

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const images = [
    {
      src: "/news_images/gitex-2023-image_1.jpg",
      alt: "GITEX 2023 Booth 1"
    },
    {
      src: "/news_images/gitex-2023-image_2.jpg",
      alt: "GITEX 2023 Booth 2"
    },
    {
      src: "/news_images/gitex-2023-image_3.jpg",
      alt: "VARJO XR3 Demo"
    }
  ]

  return (
    <main className="min-h-screen bg-[#f4f4f4] text-charcoal">
      <Navbar />

      <section className="pt-32 pb-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Link href="/news" className="text-electric-green hover:text-electric-green/80 flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4 text-accent-green" />
              Back to News
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="bg-accent-green/10 text-electric-green px-3 py-1 rounded-full text-sm font-medium flex items-center">
              <Tag className="mr-1 h-4 w-4 text-accent-green" />
              {article.category}
            </span>
            <span className="text-charcoal/60 flex items-center text-sm">
              <Calendar className="mr-1 h-4 w-4 text-accent-green" />
              {article.date}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-charcoal">{article.title}</h1>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6 text-charcoal/80 prose prose-lg max-w-none">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">AIdeology partners with VAST Data and Lenovo at GITEX Dubai, the biggest tech startup show on the planet</h1>

              <p>This time, our team was at two booths! We partnered with VAST Data where we showcased the VAST Data Platform paired with the NVIDIA DGX Platform at Stand A40 in Hall 4, and with Lenovo, where we presented the Lenovo OVX Everyscale Solution in combination with NVIDIA Omniverse at Stand A50 in Hall 6. People could see our team from the 16th to the 20th of October!</p>

              {/* Two side-by-side images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                {images.slice(0, 2).map((image, index) => (
                  <div key={index} className="relative w-full h-60 sm:h-72 group cursor-pointer" onClick={() => setSelectedImage(image.src)}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg">
                      <div className="absolute top-2 right-2 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Maximize2 className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p>Lenovo gave us the opportunity to explain both how their solution focused on powering Digital Twins and our capabilities to develop tailor-made digital twins solutions.</p>

              <p>We focused on the impact of digital twins across various industries. This included their application in the automotive sector to refine design and performance, their use in telecommunications for network optimization, and their role in energy for asset management. They advanced transportation systems, streamlined logistics operations, and enhanced the development of real estate and smart cities, among many others!</p>

              <p>As always, we had interactive demos powered with the VARJO XR3 headset, which we also used to present our latest real estate & smart city digital twin project that we developed earlier that year. People had to come to learn more.</p>

              {/* Standalone wide image */}
              <div className="relative w-full h-96 my-8 group cursor-pointer" onClick={() => setSelectedImage(images[2].src)}>
                <Image
                  src={images[2].src}
                  alt={images[2].alt}
                  fill
                  className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg">
                  <div className="absolute top-2 right-2 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              <p>We were also thrilled to announce that we presented alongside the VAST Data team, their platform which is Certified for NVIDIA DGX SuperPOD!</p>

              <p>Showcasing how the VAST Data Platform paired with NVIDIA DGX Supercomputers has the key advantage of enterprise NAS simplicity was our goal. This solution offered the performance to meet demanding AI workloads, non-stop operations, and unparalleled uptime.</p>

              <p>It was absolutely thrilling being able to present and talk about the latest project we did together in the UAE Region!</p>

              <h2 className="text-2xl font-semibold mt-10 mb-6">What sets VAST Data apart from other storage companies?</h2>

              <p>VAST Data is a storage company that offers an all-flash storage platform designed to simplify data center operations and reduce the complexity traditionally associated with storage infrastructure. Here are some key elements of the VAST Data platform:</p>

              <ul>
                <li><strong>1. Universal Storage:</strong> Designed to consolidate all types of workloads on a single platform, eliminating traditional silos like NAS and object storage.</li>
                <li><strong>2. All-Flash Performance:</strong> Uses flash for all data, offering high-speed access across workloads which isideal for analytics and AI.</li>
                <li><strong>3. Disaggregated, Shared-Everything Architecture:</strong> Separates storage and compute so they can scale independently with optimal efficiency.</li>
                <li><strong>4. Data Reduction Technologies:</strong> Uses compression and deduplication to reduce storage footprint and cost.</li>
                <li><strong>5. QoS and Data Protection:</strong> Offers fast, secure, and reliable operations.</li>
                <li><strong>6. Sustainability:</strong> Maximizes energy efficiency through reduced hardware and flash-based storage.</li>
              </ul>

              {/* YouTube: VAST Data video */}
              <div className="my-10">
                <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.youtube.com/embed/H-J7A8ofhr0"
                    title="GITEX VAST Presentation"
                    width="100%"
                    height="100%"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mt-10 mb-6">What is Lenovo Everyscale OVX?</h2>

              <p>Lenovo Eveyscale OVX is a robust server infrastructure aimed at providing a high-performance, scalable, and secure platform for virtualization needs, this solution is optimal for Digital Twins, particularly when it comes to managing the complexities and demands of creating and maintaining digital twins within NVIDIA's Omniverse platform. Here are some features that makes this solution interesting:</p>

              <ul>
                <li><strong>1. High-Performance Computing Capabilities:</strong> Essential for real-time rendering and simulation tasks in digital twins.</li>
                <li><strong>2. Enhanced GPU Performance:</strong> Tight NVIDIA integration ensures seamless operation of GPU-heavy Omniverse environments.</li>
                <li><strong>3. Scalability:</strong> Easily adapts to the growth and variable demands of digital twin environments.</li>
                <li><strong>4. Data Center Efficiency:</strong> Power-efficient and optimized for sustainability, reducing costs and heat.</li>
                <li><strong>5. Integration Capabilities:</strong> Compatible with a range of tools and systems needed for digital twin ecosystems.</li>
                <li><strong>6. Security:</strong> Strong protection for sensitive, proprietary digital twin data.</li>
              </ul>

              {/* YouTube: Lenovo video */}
              <div className="my-10">
                <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.youtube.com/embed/80Rr3KVMm5k"
                    title="GITEX Lenovo Presentation"
                    width="100%"
                    height="100%"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
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

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-6xl h-[80vh]">
            <Image
              src={selectedImage}
              alt="Enlarged view"
              fill
              className="object-contain"
              quality={100}
            />
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
