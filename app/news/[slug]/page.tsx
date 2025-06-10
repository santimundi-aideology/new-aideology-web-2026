import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowLeft, Tag, Share2, Linkedin, Twitter } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// This would typically come from a database or CMS
const getArticleBySlug = (slug: string) => {
  // Sample article data
  return {
    title: "AIdeology Announces Partnership with NVIDIA for AI Infrastructure Solutions",
    date: "May 10, 2025",
    category: "Partnerships",
    image: "/news/nvidia-partnership.png",
    content: `
      <p>AIdeology is proud to announce a strategic partnership with NVIDIA to deliver cutting-edge AI infrastructure solutions for enterprise clients. This collaboration will enable us to provide our clients with the most advanced GPU-accelerated computing solutions for their AI workloads.</p>
      
      <p>As an NVIDIA Elite Solution Provider, AIdeology has demonstrated exceptional expertise in designing, deploying, and operating NVIDIA-powered AI infrastructure. This partnership strengthens our ability to deliver optimized solutions that accelerate AI development and deployment for our clients.</p>
      
      <h2>Key Benefits of the Partnership</h2>
      
      <ul>
        <li>Early access to NVIDIA's latest GPU technologies and software platforms</li>
        <li>Enhanced technical support and training for AIdeology's engineering team</li>
        <li>Joint development of reference architectures for specific industry use cases</li>
        <li>Collaborative go-to-market strategies to reach more enterprise clients</li>
      </ul>
      
      <p>"This partnership with NVIDIA represents a significant milestone in our mission to simplify and transform ideas into rational systems-engineering AI solutions," said the CEO of AIdeology. "By combining NVIDIA's cutting-edge technology with our expertise in AI infrastructure design and deployment, we can help our clients accelerate their AI initiatives and achieve better results."</p>
      
      <p>The partnership will initially focus on solutions for the visual effects, architectural visualization, and manufacturing industries, with plans to expand to additional sectors in the future.</p>
      
      <p>For more information about how this partnership can benefit your organization, please contact our sales team.</p>
    `,
    relatedArticles: [
      {
        id: "2",
        title: "New 3D AI Pipeline Accelerates Digital Twin Development by 40%",
        snippet:
          "Our latest 3D AI pipeline technology significantly reduces time-to-deployment for digital twin projects.",
        date: "April 28, 2025",
        image: "/news/3d-ai-pipeline.png",
        category: "Technology",
        slug: "3d-ai-pipeline",
      },
      {
        id: "4",
        title: "AIdeology Achieves NVIDIA Elite Solution Provider Status",
        snippet:
          "Recognition of our expertise in designing and implementing NVIDIA-powered AI infrastructure solutions.",
        date: "March 22, 2025",
        image: "/news/nvidia-elite.png",
        category: "Achievements",
        slug: "nvidia-elite-status",
      },
    ],
  }
}

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)

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
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-8">
                <Image
                  src={article.image || "/placeholder.svg?height=600&width=1200&query=AI technology partnership"}
                  alt={article.title}
                  fill
                  className="object-cover"
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
              <div className="sticky top-24">
                <h3 className="text-xl font-bold mb-6">Related Articles</h3>
                <div className="space-y-6">
                  {article.relatedArticles.map((related) => (
                    <Card key={related.id} className="border border-accent-green/20 hover-lift">
                      <CardContent className="p-0">
                        <div className="relative h-40">
                          <Image
                            src={related.image || "/placeholder.svg?height=300&width=500&query=AI technology news"}
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

      <Footer />
    </main>
  )
}
