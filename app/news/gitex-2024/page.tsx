"use client"

import Image from "next/image"
import Link from "next/link"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowLeft, Tag, Share2, Linkedin, Twitter, Maximize2 } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// This would typically come from a database or CMS
const getArticleBySlug = (slug: string) => {
  return {
    title: "Revolutionizing Industry Boundaries: A Week of Innovation at GITEX GLOBAL 2024",
    date: "October 17, 2024",
    category: "Events",
    imageGallery: [
      "/news_images/gitex-2024-image_1.jpg",
      "/news_images/gitex-2024-image_2.jpg",
      "/news_images/gitex-2024-image_3.jpg"
    ],
    content: `
      <p class="mb-8">We are thrilled to share with you the excitement and insights from this year's GITEX GLOBAL, the largest tech and startup show in the world. We were honored to showcase our cutting-edge Gen AI platform, Maind, alongside other innovative technologies that are shaping the future of industries.</p>

      <p class="mb-8">The past few days have been an exhilarating experience, filled with engaging discussions, thought-provoking debates, and awe-inspiring demonstrations of what's possible when technology meets human ingenuity. We were delighted to connect with like-minded individuals from around the globe, exploring the vast potential of AI, robotics, digital twins, and high-performance computing.</p>

      <h2 class="text-2xl font-semibold mt-10 mb-6">Showcasing Maind at GITEX</h2>

      <p class="mb-8">At our booth with Lenovo (H6-B30), we shared our vision for Maind, a revolutionary Gen AI platform that is poised to transform industries by providing unparalleled scalability, flexibility, and performance. Our team was thrilled to see the interest and enthusiasm from attendees who were eager to learn more about how Maind can help solve real-world problems.</p>

      <h2 class="text-2xl font-semibold mt-10 mb-6">Digital Twins and Physical AI Innovation</h2>

      <p class="mb-8">We also had the opportunity to collaborate with Mindware (H2-A30), where we showcased Digital Twins and Physical AI. Through this collaboration, we demonstrated how Digital Twins drive operational efficiencies, enabling Real-time monitoring, Predictive maintenance, and Streamlined processes.</p>

      <p class="mb-8">Our showcase of Physical AI emphasized how these advancements are bridging the gap between digital and physical worlds, presenting robust solutions for robotics, autonomous systems, and interactive environments.</p>

      <h2 class="text-2xl font-semibold mt-10 mb-6">Looking Ahead</h2>

      <p class="mb-8">This year's GITEX GLOBAL has been a resounding success, and we're grateful to have had the chance to be a part of it. As we look ahead to the next chapter in our journey, we're more confident than ever that our technologies will make a meaningful impact on industries worldwide.</p>

      <p class="mb-8">We'd like to extend our heartfelt thanks to everyone who visited us at GITEX GLOBAL, shared their insights and ideas with us, and supported our mission to revolutionize the future of tech. We can't wait to see what the future holds for Maind and our partners!</p>

      <p class="mb-8">Stay tuned for more updates as we continue to push the boundaries of innovation and excellence in AI and beyond!</p>
    `,
    relatedArticles: [
      {
        id: "1",
        title: "Driving Enterprise AI Adoption at LEAP 2025: From Data to Decisions with Intelligent Agents",
        snippet: "Our latest showcase of AI solutions and innovations at LEAP 2025 in Riyadh.",
        date: "April 16, 2025",
        image: "/news_images/image_1.jpeg",
        category: "Events",
        slug: "leap-2025",
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
  const [currentImage, setCurrentImage] = useState(0)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    slideChanged(s) {
      setCurrentImage(s.track.details.rel)
    },
  })

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
              {/* Image Carousel */}
              <div className="mb-4">
                <div ref={sliderRef} className="keen-slider rounded-lg overflow-hidden">
                  {article.imageGallery.map((src, index) => (
                    <div 
                      key={index} 
                      className="keen-slider__slide relative h-[300px] md:h-[400px] group cursor-pointer" 
                      onClick={() => setSelectedImage(src)}
                    >
                      <Image
                        src={src}
                        alt={`GITEX 2024 image ${index + 1}`}
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
                {/* Pagination dots */}
                <div className="flex justify-center items-center gap-2 mt-4">
                  {article.imageGallery.map((_, idx) => (
                    <button
                      key={idx}
                      aria-label={`Go to image ${idx + 1}`}
                      className={`w-3 h-3 rounded-full border border-accent-green transition-all duration-200 ${currentImage === idx ? 'bg-accent-green' : 'bg-white'}`}
                      onClick={() => instanceRef.current?.moveToIdx(idx)}
                    />
                  ))}
                </div>
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
