"use client"

import Image from "next/image"
import Link from "next/link"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowLeft, Tag, Share2, Linkedin, Twitter } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ImageGallery from "@/components/image-gallery"

// This would typically come from a database or CMS
const getArticleBySlug = (slug: string) => {
  return {
    title: "Revolutionizing Industry Boundaries: A Week of Innovation at GITEX GLOBAL 2024",
    date: "October 17, 2024",
    category: "Events",
    imageGallery: [
      "/news_images/gitex-2024-image_1.webp",
      "/news_images/gitex-2024-image_2.webp",
      "/news_images/gitex-2024-image_3.webp"
    ],
    content: `
      <p>From October 14 to 18, 2024, AIdeology was proud to participate in GITEX GLOBAL 2024, one of the world's most influential technology conferences. This year's event was particularly significant as we showcased our latest advancements in AI infrastructure and digital transformation solutions.</p>

      <h2 class="text-2xl font-semibold mt-10 mb-6">Our Participation</h2>

      <p>At GITEX GLOBAL 2024, we had the opportunity to present our cutting-edge AI solutions to a diverse audience of industry professionals, technology enthusiasts, and potential partners. Our booth became a hub of innovation, featuring live demonstrations of our enterprise AI platforms and digital twin technologies.</p>

      <h2 class="text-2xl font-semibold mt-10 mb-6">Key Highlights</h2>

      <p>This year's GITEX was marked by several groundbreaking announcements and partnerships that will shape the future of AI adoption across industries:</p>

      <ul class="list-disc pl-6 mb-8 space-y-2">
        <li><strong>AI Infrastructure Showcase:</strong> We demonstrated our latest AI infrastructure solutions, including high-performance computing clusters optimized for machine learning workloads.</li>
        <li><strong>Digital Twin Technology:</strong> Our interactive digital twin demonstrations attracted significant attention, showcasing applications across manufacturing, healthcare, and smart city development.</li>
        <li><strong>Strategic Partnerships:</strong> We announced new partnerships with leading technology providers to expand our AI ecosystem and enhance our service offerings.</li>
        <li><strong>Client Success Stories:</strong> We shared compelling case studies of how our AI solutions have transformed operations for clients across various industries.</li>
      </ul>

      <h2 class="text-2xl font-semibold mt-10 mb-6">Innovation in Action</h2>

      <p>The week was filled with engaging presentations, interactive demonstrations, and meaningful connections with industry leaders. We showcased how our AI solutions are not just theoretical concepts but practical tools that are already making a difference in real-world applications.</p>

      <p>Our team engaged with hundreds of visitors, from startups looking to implement their first AI solutions to enterprise clients seeking to scale their existing AI initiatives. The diversity of interests and applications discussed reinforced our belief that AI is truly becoming the cornerstone of digital transformation across all sectors.</p>

      <h2 class="text-2xl font-semibold mt-10 mb-6">Looking Forward</h2>

      <p>GITEX GLOBAL 2024 has set the stage for an exciting year ahead. The connections made, partnerships formed, and insights gained will undoubtedly contribute to advancing the AI landscape in the region and beyond.</p>

      <p>We want to thank everyone who visited our booth, participated in our demonstrations, and engaged with our team. Your interest and feedback continue to drive our innovation and commitment to delivering exceptional AI solutions.</p>

      <p>As we look toward the future, we remain committed to pushing the boundaries of what's possible with AI technology, ensuring that our clients and partners are equipped with the tools they need to thrive in an increasingly digital world.</p>
    `
  }
}

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  const [currentImage, setCurrentImage] = useState(0)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    slideChanged(s) {
      setCurrentImage(s.track.details.rel)
    },
  })

  // Prepare images for the gallery component
  const galleryImages = article.imageGallery.map((src, index) => ({
    src,
    alt: `GITEX 2024 image ${index + 1}`
  }))

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
              {/* Image Gallery */}
              <div className="mb-8">
                <ImageGallery 
                  images={galleryImages}
                  gridCols="grid-cols-1 sm:grid-cols-3"
                  className="mb-4"
                />
              </div>

              <div
                className="prose prose-lg max-w-none text-charcoal/80"
                dangerouslySetInnerHTML={{ __html: article.content }}
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
              <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Related Articles</h3>
                <div className="space-y-4">
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-sm mb-2">
                        <Link href="/news/leap-2024" className="hover:text-accent-green">
                          LEAP 2024: Showcasing AI Innovation
                        </Link>
                      </h4>
                      <p className="text-xs text-charcoal/60">March 15, 2024</p>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-sm mb-2">
                        <Link href="/news/gitex-global" className="hover:text-accent-green">
                          GITEX Global: Partnership Success
                        </Link>
                      </h4>
                      <p className="text-xs text-charcoal/60">October 20, 2023</p>
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
