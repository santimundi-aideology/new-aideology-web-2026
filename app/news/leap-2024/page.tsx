"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowLeft, Tag, Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react"
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

// Define all gallery images for this article
const galleryImages = [
  "/news_images/leap_2024-image_1.webp",
  "/news_images/leap_2024-image_2.webp", 
  "/news_images/leap_2024_image3.webp",
  "/news_images/leap_2024-image_4.webp"
]

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const openGallery = (imageIndex: number) => {
    setSelectedImageIndex(imageIndex)
  }

  const closeGallery = () => {
    setSelectedImageIndex(null)
  }

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex > 0 ? selectedImageIndex - 1 : galleryImages.length - 1)
    }
  }

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex < galleryImages.length - 1 ? selectedImageIndex + 1 : 0)
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImageIndex !== null) {
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'ArrowRight') goToNext()
      if (e.key === 'Escape') closeGallery()
    }
  }

  // Add keyboard event listeners
  useState(() => {
    if (typeof window !== 'undefined') {
      document.addEventListener('keydown', handleKeyDown as any)
      return () => document.removeEventListener('keydown', handleKeyDown as any)
    }
  })

  return (
    <main className="min-h-dvh bg-[#f4f4f4] text-charcoal">
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
            <div className="lg:col-span-2 space-y-6 text-charcoal/80 prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold">Exciting Connections and AI Innovation: Our Successful Participation at LEAP24 with Lenovo and MDS</h2>

              <p>We are thrilled to share that we recently participated in the highly anticipated LEAP24 technology event in Riyadh, Saudi Arabia. We were honored to be part of this dynamic and innovative conference, where we had the opportunity to showcase our AI solutions and connect with industry leaders, partners, and customers.</p>

              {/* Enhanced Image Gallery */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                {galleryImages.map((imageSrc, index) => (
                  <div key={index} className="relative w-full h-60 sm:h-72 group cursor-pointer rounded-lg overflow-hidden">
                    <Image 
                      src={imageSrc} 
                      alt={`LEAP 2024 Image ${index + 1}`} 
                      fill 
                      className="object-cover transition-transform duration-300 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <button 
                      className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                      onClick={() => openGallery(index)}
                    >
                      <Maximize2 className="h-5 w-5 text-white" />
                    </button>
                    <div className="absolute bottom-3 left-3 bg-black/60 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-sm">{index + 1} / {galleryImages.length}</span>
                    </div>
                  </div>
                ))}
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
              
              {/* Bottom spacing */}
              <div className="mb-16"></div>
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

      {/* Enhanced Image Gallery Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center" onClick={closeGallery}>
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 bg-black/50 hover:bg-black/70 p-3 rounded-full z-20 transition-all duration-300 hover:scale-110"
              onClick={closeGallery}
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Image Counter */}
            <div className="absolute top-6 left-6 bg-black/50 px-4 py-2 rounded-full z-20">
              <span className="text-white text-sm">
                {selectedImageIndex + 1} / {galleryImages.length}
              </span>
            </div>

            {/* Navigation Arrows */}
            {galleryImages.length > 1 && (
              <>
                <button
                  className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-4 rounded-full z-20 transition-all duration-300 hover:scale-110"
                  onClick={(e) => {
                    e.stopPropagation()
                    goToPrevious()
                  }}
                >
                  <ChevronLeft className="h-8 w-8 text-white" />
                </button>
                <button
                  className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-4 rounded-full z-20 transition-all duration-300 hover:scale-110"
                  onClick={(e) => {
                    e.stopPropagation()
                    goToNext()
                  }}
                >
                  <ChevronRight className="h-8 w-8 text-white" />
                </button>
              </>
            )}

            {/* Main Image */}
            <div 
              className="relative max-w-7xl max-h-85dvh w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selectedImageIndex]}
                alt={`LEAP 2024 Image ${selectedImageIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 p-3 rounded-lg">
              {galleryImages.map((imageSrc, index) => (
                <button
                  key={index}
                  className={`relative w-16 h-12 rounded overflow-hidden transition-all duration-300 ${
                    index === selectedImageIndex ? 'ring-2 ring-accent-green' : 'opacity-60 hover:opacity-100'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImageIndex(index)
                  }}
                >
                  <Image
                    src={imageSrc}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

    </main>
  )
}
