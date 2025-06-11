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
    title: "Driving Enterprise AI Adoption at LEAP 2025: From Data to Decisions with Intelligent Agents",
    date: "April 16, 2025",
    category: "Events",
    image: "/news_images/image_1.jpeg",
    content: `
      <p class="mb-8">We were thrilled to return to Riyadh for LEAP 2025, marking our fourth consecutive year participating in this dynamic global technology event. The energy and growth of LEAP continue to impress us, and we were honored to connect with so many forward-thinking professionals in the Kingdom.</p>

      <div class="flex flex-row w-full h-[400px] mb-8 overflow-hidden">
        <div class="relative w-1/2 h-full group cursor-pointer">
          <Image
            src="/news_images/image_1.jpeg"
            alt="AIdeology team at LEAP 2025"
            fill
            className="object-cover transition-transform duration-200 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <button class="absolute top-3 right-3 bg-black/60 hover:bg-black/80 p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          </button>
        </div>
        <div class="relative w-1/2 h-full group cursor-pointer">
          <Image
            src="/news_images/leap_2025-lenovo-image.jpeg"
            alt="Lenovo booth at LEAP 2025"
            fill
            className="object-cover transition-transform duration-200 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <button class="absolute top-3 right-3 bg-black/60 hover:bg-black/80 p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          </button>
        </div>
      </div>

      <p class="mb-8">This year, in partnership with Lenovo and NVIDIA, we showcased innovative solutions to accelerate enterprise AI adoption. We focused on demonstrating the power of Digital Twins and the transformative potential of tailored Generative AI implementations. It was exciting to see the enthusiasm for these technologies and their ability to revolutionize various industries.</p>

      <h2 class="text-2xl font-semibold mt-10 mb-6">Introducing the Generative AI Enterprise Pack</h2>

      <p class="mb-8">A highlight of our presence at LEAP was the introduction of our Generative AI Enterprise Pack – a comprehensive suite of AI solutions engineered to transform organizational efficiency. This integrated platform is designed to enhance operations across all key departments, including Legal, Marketing & Sales, Finance, Customer Support, and Human Resources.</p>

      <p class="mb-8">We believe this unified approach to AI is key for businesses looking to thrive in today's data-driven landscape.</p>

      <p class="mb-8">Our team enjoyed demonstrating how our ready-to-deploy AI agents create a unified information ecosystem, enabling organizations to "talk to their data" and streamline workflows. Attendees were able to experience first-hand how this leads to more informed, efficient decisions. The hands-on demonstrations were a great way for visitors to grasp the practical applications of AI in a real-world setting.</p>

      <h2 class="text-2xl font-semibold mt-10 mb-6">Partnership Success</h2>

      <p class="mb-8">Big thanks to Lenovo and NVIDIA – their ongoing support and collaboration are key to our mission of bringing cutting-edge AI solutions to the forefront at events like LEAP 2025. We're incredibly proud of what we've achieved with them.</p>

      <p class="mb-8">Also, a big thank you to everyone who visited us at LEAP! We loved sharing our vision with you! Let's keep shaping the future of enterprise AI together.</p>

      <p class="mb-8">Stay connected with us to learn more about how AI is transforming industries and to explore the innovative solutions we're developing to help organizations unlock their full potential. We're already looking forward to LEAP 2026!</p>
    `,
    relatedArticles: [
      {
        id: "2",
        title: "GITEX 2024: A Week of Innovation",
        snippet: "Our experience and achievements at GITEX GLOBAL 2024, showcasing cutting-edge AI solutions.",
        date: "October 17, 2024",
        image: "/news_images/image_2.jpeg",
        category: "Events",
        slug: "gitex-2024"
      },
      {
        id: "3",
        title: "AIdeology Embarks on New Chapter with Midis Group: A Partnership for Accelerated Innovation",
        snippet: "Strategic partnership announcement with Midis Group to scale AI solutions across the Middle East.",
        date: "October 10, 2024",
        image: "/news_images/image_3.jpeg",
        category: "Partnerships",
        slug: "midis-and-aideology",
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
            <div className="lg:col-span-2">
              <div
                className="prose prose-lg max-w-none text-charcoal/80"
                dangerouslySetInnerHTML={{ __html: article.content }}
                onClick={(e) => {
                  const target = e.target as HTMLElement
                  if (target.tagName === 'BUTTON') {
                    const imageContainer = target.closest('.group') as HTMLElement
                    const image = imageContainer?.querySelector('img')
                    if (image) {
                      setSelectedImage(image.src)
                    }
                  }
                }}
              />

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

      <Footer />
    </main>
  )
}
