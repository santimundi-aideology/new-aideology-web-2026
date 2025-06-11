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
    title: "AIdeology at the Circuit of Catalunya with Lenovo and Aston Martin",
    date: "September 15, 2023",
    category: "Partnerships",
    image: "/news_images/image_7.jpeg",
    relatedArticles: [
      {
        id: "1",
        title: "GITEX 2024: A Week of Innovation",
        snippet: "Our latest showcase at GITEX GLOBAL 2024, featuring cutting-edge AI solutions and partnerships.",
        date: "October 17, 2024",
        image: "/news_images/image_2.jpeg",
        category: "Events",
        slug: "gitex-2024",
      },
      {
        id: "2",
        title: "AIdeology at LEAP 2024, KSA",
        snippet: "Showcasing our latest AI innovations at LEAP 2024 in Riyadh.",
        date: "April 5, 2024",
        image: "/news_images/image_5.jpeg",
        category: "Events",
        slug: "leap-2024",
      },
    ],
  }
}

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const images = [
    {
      src: "/news_images/astonmartin-image_1.jpg",
      alt: "Aston Martin Event 1"
    },
    {
      src: "/news_images/astonmartin-image_2.jpg",
      alt: "Aston Martin Event 2"
    },
    {
      src: "/news_images/astonmartin-image_3.jpg",
      alt: "Aston Martin Event 3"
    },
    {
      src: "/news_images/astonmartin-image_4.jpg",
      alt: "Aston Martin Event 4"
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
                <h2 className="text-2xl font-semibold mt-10 mb-6">We went to showcase Aston Martin's Digital Twin with Lenovo and Varjo</h2>

                <p className="mb-8">We joined forces with the Lenovo team again to showcase the prowess of Aston Martin's high-performance DBX in human-eye resolution VR and XR powered by the Lenovo ThinkStation P7 with NVIDIA RTX A6000 and the latest Varjo XR-3.</p>

                <p className="mb-8">In that private event, we supported Lenovo with the installation and implementation of the workstation and digital twin, providing a seamless XR experience to all the team.</p>

                <p className="mb-8">The event was held at the famous F1 Circuit of Catalunya, where Aston Martin showed alongside their Digital Twin, their two main cars, the Aston Martin DBX and the Aston Martin DBS.</p>

                {/* 2x2 Grid Image Layout */}
                <div className="grid grid-cols-2 gap-4 my-8">
                  {images.map((image, index) => (
                    <div 
                      key={index} 
                      className="relative w-full aspect-square group cursor-pointer" 
                      onClick={() => setSelectedImage(image.src)}
                    >
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

                <p className="mb-8">Supporting Lenovo in those projects was always a nice experience. Its always nice working with our partners, who are at the technological forefront, exploring new ways to experience things and pushing the boundaries of tech and innovation.</p>

                <h2 className="text-2xl font-semibold mt-10 mb-6">What were the reasons that led Aston Martin to create a digital twin of their DBX model?</h2>

                <p className="mb-8">Creating a digital twin of the DBX model was a strategic move by Aston Martin to enhance customer engagement and streamline design processes. Collaborating with Lenovo and Varjo, they've leveraged virtual and mixed reality technologies to offer a detailed and interactive experience of their luxury SUV. This initiative addresses the challenges of the pandemic, which limited in-person interactions at dealerships and collaborative design efforts.</p>

                <p className="mb-8">The digital twin not only facilitates a better customer experience but also aids in remote collaboration among designers. Aston Martin's use of these technologies is set to expand into other areas such as dealer training and marketing, demonstrating their commitment to innovation and customer service.</p>

                {/* YouTube Video Embed */}
                <div className="my-10">
                  <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.youtube.com/embed/EJxchAvXkpo"
                      title="Aston Martin Digital Twin"
                      width="100%"
                      height="100%"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
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
