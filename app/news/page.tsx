import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"
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
      link: "https://www.aideology.ai/post/leap-2025",
      image: "/news_images/image_1.jpeg"
    },
    {
      id: "2",
      title: "Revolutionizing Industry Boundaries: A Week of Innovation at GITEX GLOBAL 2024",
      date: "October 17, 2024",
      category: "Events",
      link: "https://www.aideology.ai/post/revolutionizing-industry-boundaries-a-week-of-innovation-at-gitex-global-2024",
      image: "/news_images/image_2.jpeg"
    },
    {
      id: "3",
      title: "AIdeology Embarks on New Chapter with Midis Group: A Partnership for Accelerated Innovation",
      date: "October 10, 2024",
      category: "Partnerships",
      link: "https://www.aideology.ai/post/midis-and-aideology",
      image: "/news_images/image_3.jpeg"
    },
    {
      id: "4",
      title: "Seamless Integration: AIREV and AIdeology Unite",
      date: "September 30, 2024",
      category: "Partnerships",
      link: "https://www.aideology.ai/post/airev-and-aideology",
      image: "/news_images/image_4.jpeg"
    },
    {
      id: "5",
      title: "AIdeology at LEAP 2024, KSA",
      date: "April 5, 2024",
      category: "Events",
      link: "https://www.aideology.ai/post/leap24",
      image: "/news_images/image_5.jpeg"
    },
    {
      id: "6",
      title: "AIdeology at GITEX Global",
      date: "October 2, 2023",
      category: "Events",
      link: "https://www.aideology.ai/post/gitex-gobal-23",
      image: "/news_images/image_6.jpeg"
    },
    {
      id: "7",
      title: "AIdeology at the Circuit of Catalunya with Lenovo and Aston Martin",
      date: "July 2, 2023",
      category: "Events",
      link: "https://www.aideology.ai/post/lenovo-aston-martin",
      image: "/news_images/image_7.jpeg"
    },
    {
      id: "8",
      title: "AIdeology at GITEX Africa (Morocco)",
      date: "May 25, 2023",
      category: "Events",
      link: "https://www.aideology.ai/post/gitex-africa-23",
      image: "/news_images/image_8.jpeg"
    },
    {
      id: "9",
      title: "AIdeology & Lenovo at their 2023 EMEA Kick Off, Barcelona",
      date: "March 3, 2023",
      category: "Events",
      link: "https://www.aideology.ai/post/lenovo-emea-kickoff",
      image: "/news_images/image_9.jpeg"
    },
    {
      id: "10",
      title: "AIdeology at LEAP 2023, KSA",
      date: "February 4, 2023",
      category: "Events",
      link: "https://www.aideology.ai/post/leap23",
      image: "/news_images/image_10.jpeg"
    }
  ]

  const categories = Array.from(new Set(newsItems.map((item) => item.category)))

  return (
    <main className="min-h-screen bg-[#f4f4f4] text-charcoal">
      <Navbar />

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

      <section className="py-8 bg-white border-b border-accent-green/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="bg-accent-green text-charcoal hover:bg-accent-green/90">
              All News
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="border-accent-green/20 hover:border-accent-green/50 hover:bg-accent-green/10"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <Card key={item.id} className="relative min-h-[320px] overflow-hidden bg-gray-900 text-white border border-accent-green/10 shadow-md hover-lift group animate-fade-in-up flex flex-col justify-end">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 z-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-300"
                />
                <div className="relative z-10 p-4 bg-gradient-to-t from-black/80 to-transparent h-full flex flex-col justify-end">
                  <CardHeader className="flex-shrink-0 p-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-white bg-accent-green/20 px-2 py-1 rounded-full">
                        {item.category}
                      </span>
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
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-accent-green flex items-center group font-semibold drop-shadow-md"
                    >
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 text-accent-green" />
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-charcoal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Stay informed about the latest developments in AI infrastructure, 3D AI, and our company updates.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent-green"
            />
            <Button className="bg-accent-green text-charcoal hover:bg-accent-green/90">Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}