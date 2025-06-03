import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { ArrowRight, MoveRight, Calendar } from "lucide-react"

export default function LatestNewsSection() {
  const newsItems = [
    {
      title: "Driving Enterprise AI Adoption at LEAP 2025: From Data to Decisions with Intelligent Agents",
      date: "April 16, 2025",
      link: "/news/leap-2025",
      image: "/news_images/image_1.jpeg"
    },
    {
      title: "Revolutionizing Industry Boundaries: A Week of Innovation at GITEX GLOBAL 2024",
      date: "October 17, 2024",
      link: "/news/gitex-2024",
      image: "/news_images/image_2.jpeg"
    },
    {
      title: "AIdeology Embarks on New Chapter with Midis Group: A Partnership for Accelerated Innovation",
      date: "October 10, 2024",
      link: "/news/midis-and-aideology",
      image: "/news_images/image_3.jpeg"
    }
  ]

  return (
    <section id="news" className="py-20 pb-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Latest News</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay informed with our latest insights and company updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <Card 
              key={index} 
              className="relative min-h-[320px] overflow-hidden bg-gray-900 text-white border border-accent-green/10 shadow-md hover-lift group animate-fade-in-up flex flex-col justify-end"
              style={{ animationDelay: `${100 + index * 150}ms` }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 z-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-300"
              />

              <div className="relative z-10 p-4 bg-gradient-to-t from-black/80 to-transparent h-full flex flex-col justify-end">
                <CardHeader className="flex-shrink-0 p-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-white bg-accent-green/20 px-2 py-1 rounded-full">
                      News
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

        <div className="text-center animate-fade-in-up" style={{ animationDelay: '550ms' }}>
          <Link
            href="/news"
            className="text-electric-green hover:text-electric-green/80 text-lg font-medium inline-flex items-center group transition-all duration-300 hover:underline hover:underline-offset-4"
          >
            View all news
            <MoveRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 text-accent-green" />
          </Link>
        </div>
      </div>
    </section>
  )
}