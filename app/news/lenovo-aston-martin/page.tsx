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
    title: "AIdeology & Lenovo present to the Aston Martin Racing team Digital Twins built with NVIDIA Omniverse",
    date: "November 15, 2023",
    category: "Partnerships",
    image: "/news_images/astonmartin-image_1.webp",
    content: `<p>We had the privilege to support Lenovo in presenting their OVX Everyscale solution paired with NVIDIA Omniverse to the Aston Martin Racing team. This was a remarkable opportunity to showcase how cutting-edge technology is revolutionizing the automotive industry.</p>`
  }
}

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)

  const images = [
    {
      src: "/news_images/astonmartin-image_1.webp",
      alt: "Aston Martin Event 1"
    },
    {
      src: "/news_images/astonmartin-image_2.webp",
      alt: "Aston Martin Event 2"
    },
    {
      src: "/news_images/astonmartin-image_3.webp",
      alt: "Aston Martin Event 3"
    },
    {
      src: "/news_images/astonmartin-image_4.webp",
      alt: "Aston Martin Event 4"
    }
  ]

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
            <div className="lg:col-span-2 space-y-6 text-charcoal/80 prose prose-lg max-w-none">
              <p className="mb-8">We had the privilege to support Lenovo in presenting their OVX Everyscale solution paired with NVIDIA Omniverse to the Aston Martin Racing team. This was a remarkable opportunity to showcase how cutting-edge technology is revolutionizing the automotive industry.</p>

              <p className="mb-8">The demonstration highlighted how digital twins can transform racing car development, from aerodynamic testing to engine optimization, providing Aston Martin with unprecedented insights into vehicle performance.</p>

              {/* Image Gallery */}
              <ImageGallery 
                images={images}
                gridCols="grid-cols-2"
                className="my-8"
              />

              <p className="mb-8">Supporting Lenovo in those projects was always a nice experience. Its always nice working with our partners, who are at the technological forefront, exploring new ways to experience things and pushing the boundaries of tech and innovation.</p>

              <h2 className="text-2xl font-semibold mt-10 mb-6">What were the reasons that led Aston Martin to create a digital twin of their DBX model?</h2>

              <p className="mb-8">Digital twins offer unprecedented opportunities for automotive manufacturers to optimize their vehicles before physical prototypes are built. For Aston Martin, creating a digital twin of their DBX model represents a strategic investment in advanced simulation and testing capabilities.</p>

              <p className="mb-8">The key benefits include:</p>

              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li><strong>Accelerated Development:</strong> Reduced time-to-market through virtual testing and validation</li>
                <li><strong>Cost Efficiency:</strong> Minimized physical prototyping and testing expenses</li>
                <li><strong>Performance Optimization:</strong> Real-time analysis and refinement of vehicle dynamics</li>
                <li><strong>Risk Mitigation:</strong> Early identification and resolution of potential issues</li>
              </ul>

              
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
                        <Link href="/news/gitex-global" className="hover:text-accent-green">
                          GITEX Global Partnership Success
                        </Link>
                      </h4>
                      <p className="text-xs text-charcoal/60">October 20, 2023</p>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-sm mb-2">
                        <Link href="/news/lenovo-emea-2023" className="hover:text-accent-green">
                          Lenovo EMEA 2023 Kick Off
                        </Link>
                      </h4>
                      <p className="text-xs text-charcoal/60">April 15, 2023</p>
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
