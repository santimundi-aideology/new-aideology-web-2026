"use client"

import Link from "next/link"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react"

import Footer from "@/components/footer"

interface NewsArticle {
  id: string
  title: string
  date: string
  category: string
  link: string
  image: string
}

export default function NewsPage() {
  const newsItems: NewsArticle[] = [
    {
      id: "1",
      title: "Driving Enterprise AI Adoption at LEAP 2025: From Data to Decisions with Intelligent Agents",
      date: "April 16, 2025",
      category: "Events",
      link: "/news/leap-2025",
      image: "/news_images/image_1.webp"
    },
    {
      id: "2",
      title: "GITEX 2024: A Week of Innovation",
      date: "October 17, 2024",
      category: "Events",
      link: "/news/gitex-2024",
      image: "/news_images/image_2.webp"
    },
    {
      id: "3",
      title: "AIdeology Embarks on New Chapter with Midis Group: A Partnership for Accelerated Innovation",
      date: "October 10, 2024",
      category: "Partnerships",
      link: "/news/midis-and-aideology",
      image: "/news_images/aideology_midis.webp"
    },
    {
      id: "4",
      title: "Seamless Integration: AIREV and AIdeology Unite",
      date: "September 30, 2024",
      category: "Partnerships",
      link: "/news/airev-and-aideology",
      image: "/news_images/image_4.webp"
    },
    {
      id: "5",
      title: "AIdeology at LEAP 2024, KSA",
      date: "April 5, 2024",
      category: "Events",
      link: "/news/leap-2024",
      image: "/news_images/image_5.webp"
    },
    {
      id: "6",
      title: "GITEX 2023: Showcasing AI Innovation",
      date: "October 20, 2023",
      category: "Events",
      link: "/news/gitex-global",
      image: "/news_images/image_6.webp"
    },
    {
      id: "7",
      title: "AIdeology at the Circuit of Catalunya with Lenovo and Aston Martin",
      date: "September 15, 2023",
      category: "Partnerships",
      link: "/news/lenovo-aston-martin",
      image: "/news_images/image_7.webp"
    },
    {
      id: "8",
      title: "GITEX Africa 2023: Expanding AI Horizons",
      date: "May 31, 2023",
      category: "Events",
      link: "/news/gitex-africa",
      image: "/news_images/image_8.webp"
    },
    {
      id: "9",
      title: "Lenovo EMEA Kickoff 2023: AI Innovation Showcase",
      date: "April 15, 2023",
      category: "Events",
      link: "/news/lenovo-emea-2023",
      image: "/news_images/image_9.webp"
    },
    {
      id: "10",
      title: "LEAP 2023: Pioneering AI Solutions",
      date: "February 10, 2023",
      category: "Events",
      link: "/news/leap-2023",
      image: "/news_images/image_10.webp"
    }
  ]



  return (
    <main className="min-h-screen bg-[#f4f4f4] text-charcoal">


      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Link href="/" className="text-electric-green hover:text-electric-green/80 flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4 text-accent-green" />
              Back to Home
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">Latest News</h1>
          <p className="text-xl text-charcoal/70 max-w-3xl">
            Stay updated with the latest announcements, achievements, and insights from AIdeology.
          </p>
        </div>
      </section>



      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <Card key={item.id} className="relative min-h-[320px] overflow-hidden bg-gray-900 text-white border border-accent-green/10 shadow-md hover-lift group animate-fade-in-up flex flex-col justify-end">
                <div className="absolute inset-0 z-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-300"
                  />
                </div>
                <Link href={item.link} className="relative z-10 p-4 bg-gradient-to-t from-black/80 to-transparent h-full flex flex-col justify-end">
                  <CardHeader className="flex-shrink-0 p-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm text-white flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-accent-green" />
                        {item.date}
                      </span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-accent-green transition-colors duration-300">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="mt-4">
                    <div
                      className="text-white hover:text-accent-green flex items-center group font-semibold drop-shadow-md"
                    >
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 text-accent-green" />
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>



      <Footer />
    </main>
  )
}
