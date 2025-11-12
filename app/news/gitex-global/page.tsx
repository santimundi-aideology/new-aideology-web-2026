"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowLeft, Tag } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ImageGallery from "@/components/image-gallery"
import { useState } from "react"

const getArticleBySlug = (slug: string) => {
  return {
    title: "AIdeology partners with VAST Data and Lenovo at GITEX Dubai, the biggest tech startup show on the planet",
    date: "October 20, 2023",
    category: "Events",
    image: "/news_images/gitex-2023-image_1.webp",
    content: `
      <p class="mb-8">This time, our team was at two booths! We partnered with VAST Data where we showcased the VAST Data Platform paired with the NVIDIA DGX Platform at Stand A40 in Hall 4, and with Lenovo, where we presented the Lenovo OVX Everyscale Solution in combination with NVIDIA Omniverse at Stand A50 in Hall 6. People could see our team from the 16th to the 20th of October!</p>

      <p class="mb-8">We focused on the impact of digital twins across various industries. This included their application in the automotive sector to refine design and performance, their use in telecommunications for network optimization, and their role in energy for asset management. They advanced transportation systems, streamlined logistics operations, and enhanced the development of real estate and smart cities, among many others!</p>

      <p class="mb-8">As always, we had interactive demos powered with the VARJO XR3 headset, which we also used to present our latest real estate & smart city digital twin project that we developed earlier that year. People had to come to learn more.</p>

      <p class="mb-8">We were also thrilled to announce that we presented alongside the VAST Data team, their platform which is Certified for NVIDIA DGX SuperPOD!</p>
    `
  }
}

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)

  const images = [
    {
      src: "/news_images/gitex-2023-image_1.webp",
      alt: "GITEX 2023 Booth 1"
    },
    {
      src: "/news_images/gitex-2023-image_2.webp",
      alt: "GITEX 2023 Booth 2"  
    },
    {
      src: "/news_images/gitex-2023-image_3.webp",
      alt: "VARJO XR3 Demo"
    }
  ]

  return (
    <main className="min-h-dvh bg-[#f4f4f4] text-charcoal">
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

              {/* Image Gallery */}
              <ImageGallery 
                images={images.slice(0, 2)}
                gridCols="grid-cols-1 sm:grid-cols-2"
                className="my-8"
              />

              <p>We focused on the impact of digital twins across various industries. This included their application in the automotive sector to refine design and performance, their use in telecommunications for network optimization, and their role in energy for asset management. They advanced transportation systems, streamlined logistics operations, and enhanced the development of real estate and smart cities, among many others!</p>

              <p>As always, we had interactive demos powered with the VARJO XR3 headset, which we also used to present our latest real estate & smart city digital twin project that we developed earlier that year. People had to come to learn more.</p>

              {/* Single wide image */}
              <ImageGallery 
                images={[images[2]]}
                gridCols="grid-cols-1"
                className="my-8"
              />

              <p>We were also thrilled to announce that we presented alongside the VAST Data team, their platform which is Certified for NVIDIA DGX SuperPOD!</p>

              
              {/* Bottom spacing */}
              <div className="mb-12"></div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Related Articles</h3>
                <div className="space-y-4">
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-sm mb-2">
                        <Link href="/news/gitex-2024" className="hover:text-accent-green">
                          GITEX GLOBAL 2024: Innovation Showcase
                        </Link>
                      </h4>
                      <p className="text-xs text-charcoal/60">October 17, 2024</p>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-sm mb-2">
                        <Link href="/news/leap-2024" className="hover:text-accent-green">
                          LEAP 2024: AI Innovation
                        </Link>
                      </h4>
                      <p className="text-xs text-charcoal/60">March 15, 2024</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="bg-accent-green/10 rounded-lg p-6">
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
      </section>

      <Footer />
    </main>
  )
}
