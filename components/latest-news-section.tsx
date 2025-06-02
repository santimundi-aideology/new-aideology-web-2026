import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, MoveRight, Calendar } from "lucide-react"

export default function LatestNewsSection() {
  // Sample news items (static placeholders)
  const newsItems = [
    {
      title: "AIdeology Launches New HPC-AI Optimized Server Line",
      snippet: "Discover our latest range of servers, engineered for maximum AI performance and efficiency.",
      date: "July 22, 2024",
      link: "/news/hpc-ai-server-launch"
    },
    {
      title: "Strategic Partnership with NVIDIA to Advance 3D AI",
      snippet: "AIdeology and NVIDIA collaborate to push the boundaries of metaverse and digital twin technologies.",
      date: "July 15, 2024",
      link: "/news/nvidia-partnership-3dai"
    },
    {
      title: "AIdeology Expands Operations to Europe",
      snippet: "New offices in London and Madrid to better serve our growing European clientele.",
      date: "July 5, 2024",
      link: "/news/europe-expansion"
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
              className="bg-[#f4f4f4] border border-accent-green/10 shadow-md hover-lift group animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${100 + index * 150}ms` }}
            >
              <CardHeader className="flex-shrink-0">
                <CardTitle className="text-xl group-hover:text-accent-green transition-colors duration-300">
                  {item.title}
                </CardTitle>
                <CardDescription className="flex items-center text-gray-500 pt-2">
                  <Calendar className="h-4 w-4 mr-2 text-accent-green" />
                  {item.date}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600">
                  {item.snippet}
                </p>
              </CardContent>
              <CardFooter className="flex-shrink-0 mt-auto">
                <Link
                  href={item.link}
                  className="text-electric-green hover:text-electric-green/80 flex items-center group font-medium"
                >
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 text-accent-green" />
                </Link>
              </CardFooter>
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
