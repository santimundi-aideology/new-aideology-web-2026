import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft, ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// News article interface
interface NewsArticle {
  id: string
  title: string
  snippet: string
  content: string
  date: string
  image?: string
  category: string
  slug: string
}

export default function NewsPage() {
  // Sample news items (static placeholders)
  const newsItems: NewsArticle[] = [
    {
      id: "1",
      title: "AIdeology Announces Partnership with NVIDIA for AI Infrastructure Solutions",
      snippet: "Strategic collaboration to deliver cutting-edge AI infrastructure solutions for enterprise clients.",
      content:
        "AIdeology is proud to announce a strategic partnership with NVIDIA to deliver cutting-edge AI infrastructure solutions for enterprise clients. This collaboration will enable us to provide our clients with the most advanced GPU-accelerated computing solutions for their AI workloads.",
      date: "May 10, 2025",
      image: "/news/nvidia-partnership.png",
      category: "Partnerships",
      slug: "nvidia-partnership",
    },
    {
      id: "2",
      title: "New 3D AI Pipeline Accelerates Digital Twin Development by 40%",
      snippet:
        "Our latest 3D AI pipeline technology significantly reduces time-to-deployment for digital twin projects.",
      content:
        "AIdeology has developed a new 3D AI pipeline that accelerates digital twin development by 40%. This breakthrough technology enables our clients to create and deploy digital twins faster than ever before, reducing time-to-value and enabling more rapid iteration and optimization.",
      date: "April 28, 2025",
      image: "/news/3d-ai-pipeline.png",
      category: "Technology",
      slug: "3d-ai-pipeline",
    },
    {
      id: "3",
      title: "AIdeology Opens New Hub in Miami to Serve North American Clients",
      snippet: "Expanding our global presence with a new hub in Miami to better serve our North American client base.",
      content:
        "AIdeology is expanding its global presence with a new hub in Miami to better serve our North American client base. This strategic location will enable us to provide more responsive service and support to our growing client base in the region.",
      date: "April 15, 2025",
      image: "/news/miami-hub.png",
      category: "Company",
      slug: "miami-hub",
    },
    {
      id: "4",
      title: "AIdeology Achieves NVIDIA Elite Solution Provider Status",
      snippet: "Recognition of our expertise in designing and implementing NVIDIA-powered AI infrastructure solutions.",
      content:
        "AIdeology has achieved NVIDIA Elite Solution Provider status, recognizing our expertise in designing and implementing NVIDIA-powered AI infrastructure solutions. This prestigious designation highlights our commitment to delivering the highest quality AI infrastructure solutions to our clients.",
      date: "March 22, 2025",
      image: "/news/nvidia-elite.png",
      category: "Achievements",
      slug: "nvidia-elite-status",
    },
    {
      id: "5",
      title: "AIdeology Delivers 50 Petaflops of Computing Power to VFX Industry",
      snippet: "Major milestone in our mission to accelerate AI adoption in the visual effects industry.",
      content:
        "AIdeology has reached a major milestone in our mission to accelerate AI adoption in the visual effects industry, delivering a total of 50 petaflops of computing power to our VFX clients. This achievement underscores our commitment to providing the most powerful and efficient AI infrastructure solutions for demanding creative workloads.",
      date: "March 10, 2025",
      image: "/news/vfx-computing.png",
      category: "Achievements",
      slug: "vfx-petaflops",
    },
    {
      id: "6",
      title: "AIdeology Launches AI Agent Framework for Enterprise Applications",
      snippet: "New framework simplifies the development and deployment of AI agents for business use cases.",
      content:
        "AIdeology has launched a new AI Agent Framework designed to simplify the development and deployment of AI agents for enterprise applications. This comprehensive framework provides a structured approach to building, testing, and deploying AI agents that can automate complex business processes and enhance decision-making.",
      date: "February 28, 2025",
      image: "/news/ai-agent-framework.png",
      category: "Products",
      slug: "ai-agent-framework",
    },
    {
      id: "7",
      title: "AIdeology Partners with Leading Architecture Firm for 3D AI Visualization",
      snippet: "Collaboration to revolutionize architectural visualization with AI-powered 3D rendering.",
      content:
        "AIdeology has partnered with a leading architecture firm to revolutionize architectural visualization with AI-powered 3D rendering. This collaboration will enable architects to create more realistic and immersive visualizations of their designs, enhancing client communication and decision-making.",
      date: "February 15, 2025",
      image: "/news/architecture-partnership.png",
      category: "Partnerships",
      slug: "architecture-partnership",
    },
    {
      id: "8",
      title: "AIdeology Hosts AI Infrastructure Summit in Dubai",
      snippet: "Industry leaders gather to discuss the future of AI infrastructure and best practices.",
      content:
        "AIdeology recently hosted the AI Infrastructure Summit in Dubai, bringing together industry leaders to discuss the future of AI infrastructure and share best practices. The event featured keynote presentations, panel discussions, and hands-on workshops focused on the latest trends and technologies in AI infrastructure.",
      date: "January 30, 2025",
      image: "/news/dubai-summit.png",
      category: "Events",
      slug: "dubai-summit",
    },
  ]

  // Get unique categories
  const categories = Array.from(new Set(newsItems.map((item) => item.category)))

  return (
    <main className="min-h-screen bg-[#f4f4f4] text-charcoal">
      <Navbar />

      {/* Hero Section */}
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

      {/* Categories Section */}
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

      {/* Featured News */}
      <section className="py-12 bg-[#f4f4f4]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Featured News</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white border border-accent-green/20 overflow-hidden hover-lift">
              <div className="relative h-64">
                <Image
                  src={newsItems[0].image || "/placeholder.svg?height=400&width=600&query=AI technology news"}
                  alt={newsItems[0].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-accent-green px-3 py-1 rounded-full text-xs font-semibold text-charcoal">
                  {newsItems[0].category}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{newsItems[0].title}</CardTitle>
                <CardDescription className="flex items-center text-charcoal/60">
                  <Calendar className="h-4 w-4 mr-2 text-accent-green" />
                  {newsItems[0].date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal/80">{newsItems[0].snippet}</p>
              </CardContent>
              <CardFooter>
                <Link
                  href={`/news/${newsItems[0].slug}`}
                  className="text-electric-green hover:text-electric-green/80 flex items-center group font-medium"
                >
                  Read more
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 text-accent-green" />
                </Link>
              </CardFooter>
            </Card>

            <div className="grid grid-cols-1 gap-6">
              {newsItems.slice(1, 4).map((item) => (
                <Card key={item.id} className="bg-white border border-accent-green/20 hover-lift">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="relative h-32 md:h-full">
                      <Image
                        src={item.image || "/placeholder.svg?height=200&width=300&query=AI technology news"}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="md:col-span-2 p-4">
                      <div className="flex items-center mb-2">
                        <span className="text-xs font-semibold bg-accent-green/10 text-electric-green px-2 py-1 rounded-full">
                          {item.category}
                        </span>
                        <span className="text-xs text-charcoal/60 ml-2 flex items-center">
                          <Calendar className="h-3 w-3 mr-1 text-accent-green" />
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <Link
                        href={`/news/${item.slug}`}
                        className="text-electric-green hover:text-electric-green/80 text-sm flex items-center group font-medium"
                      >
                        Read more
                        <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1 text-accent-green" />
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">All News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.slice(4).map((item) => (
              <Card
                key={item.id}
                className="bg-[#f4f4f4] border border-accent-green/20 hover-lift h-full flex flex-col"
              >
                <div className="relative h-48">
                  <Image
                    src={item.image || "/placeholder.svg?height=300&width=500&query=AI technology news"}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-accent-green px-3 py-1 rounded-full text-xs font-semibold text-charcoal">
                    {item.category}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="flex items-center text-charcoal/60">
                    <Calendar className="h-4 w-4 mr-2 text-accent-green" />
                    {item.date}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-charcoal/80">{item.snippet}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href={`/news/${item.slug}`}
                    className="text-electric-green hover:text-electric-green/80 flex items-center group font-medium"
                  >
                    Read more
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 text-accent-green" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
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
