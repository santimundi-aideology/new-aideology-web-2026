"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowLeft, Tag, Share2, Linkedin, Twitter, Maximize2, X } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useState } from "react"

const getArticleBySlug = (slug: string) => {
  return {
    title: "AIdeology at LEAP 2024, KSA",
    date: "April 5, 2024",
    category: "Events",
    relatedArticles: [
      {
        id: "1",
        title: "Driving Enterprise AI Adoption at LEAP 2025: From Data to Decisions with Intelligent Agents",
        snippet: "Our latest showcase of AI solutions and innovations at LEAP 2025 in Riyadh.",
        date: "April 16, 2025",
        image: "/news_images/image_1.webp",
        category: "Events",
        slug: "leap-2025",
      },
      {
        id: "2",
        title: "Revolutionizing Industry Boundaries: A Week of Innovation at GITEX GLOBAL 2024",
        snippet: "Our experience and achievements at GITEX GLOBAL 2024, showcasing cutting-edge AI solutions.",
        date: "October 17, 2024",
        image: "/news_images/image_2.webp",
        category: "Events",
        slug: "gitex-2024",
      },
    ],
  }
}

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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

      {/* Article Content */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6 text-charcoal/80 prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold">Exciting Connections and AI Innovation: Our Successful Participation at LEAP24 with Lenovo and MDS</h2>

              <p>We are thrilled to share that we recently participated in the highly anticipated LEAP24 technology event in Riyadh, Saudi Arabia. We were honored to be part of this dynamic and innovative conference, where we had the opportunity to showcase our AI solutions and connect with industry leaders, partners, and customers.</p>

              {/* Image Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="relative w-full h-60 sm:h-72 group cursor-pointer">
                  <Image 
                    src="/news_images/leap_2024-image_1.webp" 
                    alt="LEAP 2024 Image 1" 
                    fill 
                    className="object-cover rounded-lg transition-transform duration-200 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <button 
                    className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => setSelectedImage("/news_images/leap_2024-image_1.webp")}
                  >
                    <Maximize2 className="h-5 w-5 text-white" />
                  </button>
                </div>
                <div className="relative w-full h-60 sm:h-72 group cursor-pointer">
                  <Image 
                    src="/news_images/leap_2024-image_2.webp" 
                    alt="LEAP 2024 Image 2" 
                    fill 
                    className="object-cover rounded-lg transition-transform duration-200 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <button 
                    className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => setSelectedImage("/news_images/leap_2024-image_2.webp")}
                  >
                    <Maximize2 className="h-5 w-5 text-white" />
                  </button>
                </div>
                <div className="relative w-full h-60 sm:h-72 group cursor-pointer">
                  <Image 
                    src="/news_images/leap_2024_image3.webp" 
                    alt="LEAP 2024 Image 3" 
                    fill 
                    className="object-cover rounded-lg transition-transform duration-200 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <button 
                    className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => setSelectedImage("/news_images/leap_2024-image_3.webp")}
                  >
                    <Maximize2 className="h-5 w-5 text-white" />
                  </button>
                </div>
                <div className="relative w-full h-60 sm:h-72 group cursor-pointer">
                  <Image 
                    src="/news_images/leap_2024-image_4.webp" 
                    alt="LEAP 2024 Image 4" 
                    fill 
                    className="object-cover rounded-lg transition-transform duration-200 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <button 
                    className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => setSelectedImage("/news_images/leap_2024-image_4.webp")}
                  >
                    <Maximize2 className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>

              <p>We would like to thank everyone who stopped by to engage in conversations about our solutions; Our Digital Twins built in NVIDIA Omniverse, HPC AI implementations, and particularly our Generative AI solution Maind. We were very privileged to be able to talk about and explain our company, as well as our partner and client ecosystem, to the event attendees.</p>

              <h2 className="text-2xl font-semibold">So, what is Maind?</h2>

              {/* Maind Video */}
              <div className="mb-4">
                <video controls className="w-full rounded-lg shadow-lg">
                  <source src="/news_images/maind.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <p>Maind is a cutting-edge Generative AI platform, leveraging state-of-the-art Retrieval Augmented Generation (RAG) technology to revolutionize information processing within companies. This solution is engineered to extract insights and generate content dynamically from diverse sources such as financial reports, PDF documents, and other proprietary files.</p>

              <p>At its core, Maind facilitates seamless collaboration among users, empowering teams to harness the power of AI together with human expertise. Through its advanced architecture, Maind seamlessly integrates with external applications, enabling enhanced workflow efficiency and interoperability.</p>

              <p>One of Maind's standout features is its ability to provide a tailored interaction with Large Language Models (LLMs), allowing for customization and functionality. Users can seamlessly switch between different LLMs, adapting the platform to their specific needs and preferences while maintaining integration with their data and external applications.</p>

              <p>Maind prioritizes the highest levels of security for information by providing a secure environment for data processing. With options for cloud, local, or on-premise deployment, organizations have the flexibility to choose the deployment model that best aligns with their security requirements and infrastructure preferences.</p>

              <p>Maind is at the forefront of Generative AI as a Service (Gen AIaaS), offering organizations a comprehensive solution to streamline information processing, foster collaboration, and unlock new levels of productivity and innovation while ensuring data security and flexibility in deployment.</p>

              <h2 className="text-2xl font-semibold">See you next year at LEAP25!</h2>

              <p>We are extremely grateful for the continued support from Lenovo and MDS who hosted us in their booths. It is always a privilege to collaborate with them. We look forward to continuing to innovate and collaborate with our partners and clients in the region, and hope to see everyone that visited us this time again next year!</p>

              {/* Share Links */}
              <div className="mt-12 pt-6 border-t border-accent-green/10">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Share2 className="mr-2 h-5 w-5 text-accent-green" />
                  Share this article
                </h3>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Twitter className="h-4 w-4" />
                    Twitter
                  </Button>
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
                          <Link href={`/news/${related.slug}`} className="text-electric-green hover:text-electric-green/80 text-sm flex items-center">
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
                    Discover how AIdeology can help you design, deploy, and operate cutting-edge AI infrastructure tailored to your specific needs.
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

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-7xl w-full h-[80vh]">
            <button
              className="absolute top-4 right-4 bg-black/50 p-2 rounded-full z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6 text-white" />
            </button>
            <Image
              src={selectedImage}
              alt="Enlarged view"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

    </main>
  )
}
