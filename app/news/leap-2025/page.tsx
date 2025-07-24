"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowLeft, Tag, Share2, Linkedin, Twitter } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ImageGallery from "@/components/image-gallery"
import { useState } from "react"

const getArticleBySlug = (slug: string) => {
  return {
    title: "Driving Enterprise AI Adoption at LEAP 2025: From Data to Decisions with Intelligent Agents",
    date: "April 16, 2025",
    category: "Events",
    image: "/news_images/image_1.webp",
    content: `
      <p class="mb-8">We were thrilled to return to Riyadh for LEAP 2025, marking our fourth consecutive year participating in this dynamic global technology event. The energy and growth of LEAP continue to impress us, and we were honored to connect with so many forward-thinking professionals in the Kingdom.</p>

      <p class="mb-8">This year, in partnership with Lenovo and NVIDIA, we showcased innovative solutions to accelerate enterprise AI adoption. We focused on demonstrating the power of Digital Twins and the transformative potential of tailored Generative AI implementations. It was exciting to see the enthusiasm for these technologies and their ability to revolutionize various industries.</p>

      <h2 class="text-2xl font-semibold mt-10 mb-6">Introducing the Generative AI Enterprise Pack</h2>

      <p class="mb-8">A highlight of our presence at LEAP was the introduction of our Generative AI Enterprise Pack – a comprehensive suite of AI solutions engineered to transform organizational efficiency. This integrated platform is designed to enhance operations across all key departments, including Legal, Marketing & Sales, Finance, Customer Support, and Human Resources.</p>

      <p class="mb-8">We believe this unified approach to AI is key for businesses looking to thrive in today's data-driven landscape.</p>

      <p class="mb-8">Our team enjoyed demonstrating how our ready-to-deploy AI agents create a unified information ecosystem, enabling organizations to "talk to their data" and streamline workflows. Attendees were able to experience first-hand how this leads to more informed, efficient decisions. The hands-on demonstrations were a great way for visitors to grasp the practical applications of AI in a real-world setting.</p>

      <h2 class="text-2xl font-semibold mt-10 mb-6">Partnership Success</h2>

      <p class="mb-8">Big thanks to Lenovo and NVIDIA – their ongoing support and collaboration are key to our mission of bringing cutting-edge AI solutions to the forefront at events like LEAP 2025. We're incredibly proud of what we've achieved with them.</p>

      <p class="mb-8">Also, a big thank you to everyone who visited us at LEAP! We loved sharing our vision with you! Let's keep shaping the future of enterprise AI together.</p>

      <p class="mb-8">Stay connected with us to learn more about how AI is transforming industries and to explore the innovative solutions we're developing to help organizations unlock their full potential. We're already looking forward to LEAP 2026!</p>
    `
  }
}

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Define images for the gallery
  const images = [
    {
      src: "/news_images/image_1.webp",
      alt: "AIdeology team at LEAP 2025"
    },
    {
      src: "/news_images/lenovo_booth.webp", 
      alt: "Lenovo booth at LEAP 2025"
    }
  ]

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
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none text-charcoal/80">
                <p className="mb-8">We were thrilled to return to Riyadh for LEAP 2025, marking our fourth consecutive year participating in this dynamic global technology event. The energy and growth of LEAP continue to impress us, and we were honored to connect with so many forward-thinking professionals in the Kingdom.</p>

                {/* Image Gallery */}
                <ImageGallery 
                  images={images}
                  gridCols="grid-cols-1 sm:grid-cols-2"
                  className="my-8"
                />

                <p className="mb-8">This year, in partnership with Lenovo and NVIDIA, we showcased innovative solutions to accelerate enterprise AI adoption. We focused on demonstrating the power of Digital Twins and the transformative potential of tailored Generative AI implementations. It was exciting to see the enthusiasm for these technologies and their ability to revolutionize various industries.</p>

                <h2 className="text-2xl font-semibold mt-10 mb-6">Introducing the Generative AI Enterprise Pack</h2>

                <p className="mb-8">A highlight of our presence at LEAP was the introduction of our Generative AI Enterprise Pack – a comprehensive suite of AI solutions engineered to transform organizational efficiency. This integrated platform is designed to enhance operations across all key departments, including Legal, Marketing & Sales, Finance, Customer Support, and Human Resources.</p>

                <p className="mb-8">We believe this unified approach to AI is key for businesses looking to thrive in today's data-driven landscape.</p>

                <p className="mb-8">Our team enjoyed demonstrating how our ready-to-deploy AI agents create a unified information ecosystem, enabling organizations to "talk to their data" and streamline workflows. Attendees were able to experience first-hand how this leads to more informed, efficient decisions. The hands-on demonstrations were a great way for visitors to grasp the practical applications of AI in a real-world setting.</p>

                <h2 className="text-2xl font-semibold mt-10 mb-6">Partnership Success</h2>

                <p className="mb-8">Big thanks to Lenovo and NVIDIA – their ongoing support and collaboration are key to our mission of bringing cutting-edge AI solutions to the forefront at events like LEAP 2025. We're incredibly proud of what we've achieved with them.</p>

                <p className="mb-8">Also, a big thank you to everyone who visited us at LEAP! We loved sharing our vision with you! Let's keep shaping the future of enterprise AI together.</p>

                <p className="mb-8">Stay connected with us to learn more about how AI is transforming industries and to explore the innovative solutions we're developing to help organizations unlock their full potential. We're already looking forward to LEAP 2026!</p>
              </div>

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
              <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Related Articles</h3>
                <div className="space-y-4">
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-sm mb-2">
                        <Link href="/news/leap-2024" className="hover:text-accent-green">
                          LEAP 2024: AI Innovation Showcase
                        </Link>
                      </h4>
                      <p className="text-xs text-charcoal/60">March 15, 2024</p>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-sm mb-2">
                        <Link href="/news/gitex-2024" className="hover:text-accent-green">
                          GITEX GLOBAL 2024
                        </Link>
                      </h4>
                      <p className="text-xs text-charcoal/60">October 17, 2024</p>
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
