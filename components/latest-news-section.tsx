import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar } from "lucide-react"

export default function LatestNewsSection() {
  // Sample news items (static placeholders)
  const newsItems = [
    {
      title: "AIdeology Announces Partnership with NVIDIA for AI Infrastructure Solutions",
      snippet: "Strategic collaboration to deliver cutting-edge AI infrastructure solutions for enterprise clients.",
      date: "May 10, 2025",
      link: "#news/nvidia-partnership",
    },
    {
      title: "New 3D AI Pipeline Accelerates Digital Twin Development by 40%",
      snippet:
        "Our latest 3D AI pipeline technology significantly reduces time-to-deployment for digital twin projects.",
      date: "April 28, 2025",
      link: "#news/3d-ai-pipeline",
    },
    {
      title: "AIdeology Opens New Hub in Miami to Serve North American Clients",
      snippet: "Expanding our global presence with a new hub in Miami to better serve our North American client base.",
      date: "April 15, 2025",
      link: "#news/miami-hub",
    },
  ]

  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Latest News</h2>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
            Stay updated with our latest announcements and industry insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Card
              key={index}
              className="bg-[#f4f4f4] border border-accent-green/20 text-charcoal hover-lift h-full flex flex-col animate-fade-in-up"
              style={{
                animationDelay: `${200 + index * 150}ms`,
                animationFillMode: 'both'
              }}
            >
              <CardHeader>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription className="flex items-center text-charcoal/60">
                  <Calendar className="h-4 w-4 mr-2 text-accent-green" />
                  {item.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal/80">{item.snippet}</p>
              </CardContent>
              <CardFooter className="mt-auto">
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

        <div className="text-center mt-10 animate-fade-in-up" style={{animationDelay: '650ms', animationFillMode: 'both'}}>
          <Link
            href="/news"
            className="text-electric-green hover:text-electric-green/80 text-lg flex items-center justify-center group font-medium"
          >
            View all news
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 text-accent-green" />
          </Link>
        </div>
      </div>
    </section>
  )
}
