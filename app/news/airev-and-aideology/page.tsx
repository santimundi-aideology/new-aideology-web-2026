import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowLeft, Tag } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// This would typically come from a database or CMS
const getArticleBySlug = (slug: string) => {
  // Sample article data
  return {
    title: "Seamless Integration: AIREV and AIdeology Unite",
    date: "September 30, 2024",
    category: "Partnerships",
    image: "/news_images/image_4.webp",
    content: `
      <p class="mb-8">We are thrilled to announce our exciting partnership with AIREV HOLDING LIMITED, uniting two industry leaders poised to transform the way we approach artificial intelligence. This strategic alliance marks a significant milestone in our mission to expand human potential with AI and propel global industries forward.</p>
      
      <h2 class="text-2xl font-semibold mt-10 mb-6">Partnership Focus</h2>
      
      <p class="mb-8">As part of this partnership, we will be delivering orchestration and monetization solutions for AI Cloud vendors deploying large-scale GPU clusters. By integrating AIREV's advanced On-Demand AI Operating System with our robust infrastructure, built alongside leading global hardware providers, we are empowering hardware providers worldwide to unlock new revenue streams by monetizing their compute power.</p>
      
      <p class="mb-8">This partnership is a testament to the power of collaboration and innovation in the AI space. We are confident that together, we will pioneer immersive 3D environments and cutting-edge robotics solutions, making advanced robotics more accessible and impactful. Our vision is to drive global transformation through artificial intelligence, and this partnership brings us one step closer to achieving it.</p>
      
      <h2 class="text-2xl font-semibold mt-10 mb-6">AIREV's Impact</h2>
      
      <p class="mb-8">AIREV's pioneering work in AI solutions has been instrumental in shaping the future of industries worldwide. Their On-Demand platform has already demonstrated its potential in empowering hardware providers to unlock new revenue streams. By combining our expertise with AIREV's advanced technology, we are poised to revolutionize the integration of AI in real-world applications.</p>
      
      <h2 class="text-2xl font-semibold mt-10 mb-6">Moving Forward Together</h2>
      
      <p class="mb-8">This Memorandum of Understanding (MoU) represents a powerful synergy between two industry leaders, aiming to drive innovation and accelerate the development of AI solutions that redefine efficiency and scalability across sectors. We are excited to embark on this journey with AIREV HOLDING LIMITED and look forward to the opportunities that this partnership will bring.</p>

      <h2 class="text-2xl font-semibold mt-10 mb-6">About AIREV</h2>
      
      <p class="mb-8">AIREV, headquartered in the UAE, provides tailored AI and digital transformation solutions to accelerate business automation and efficiency. Their expertise spans AI software development, machine learning implementation, data analytics solutions, and edge computing technologies.</p>
      
      <p class="mb-8">Leveraging partnerships with top technology providers, AIREV enables clients to optimize their workflows through cutting-edge hardware and software solutions, including AI-driven platforms and customized digital tools. Visit <a href="https://www.airev.ae/" target="_blank" rel="noopener noreferrer" class="text-electric-green hover:text-electric-green/80 underline underline-offset-4 font-medium">AIREV's website</a> to learn more about their innovative solutions.</p>
    `,
    relatedArticles: [
      {
        id: "1",
        title: "Driving Enterprise AI Adoption at LEAP 2025: From Data to Decisions with Intelligent Agents",
        snippet: "Our latest showcase of AI solutions and innovations at LEAP 2025 in Riyadh.",
        date: "April 16, 2025",
        image: "/news_images/image_1.webp",
        category: "Events",
        slug: "leap-2025",
      },
      {
        id: "3",
        title: "AIdeology Embarks on New Chapter with Midis Group: A Partnership for Accelerated Innovation",
        snippet: "Strategic partnership announcement with Midis Group to scale AI solutions across the Middle East.",
        date: "October 10, 2024",
        image: "/news_images/image_3.webp",
        category: "Partnerships",
        slug: "midis-and-aideology",
      },
    ],
  }
}

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)

  return (
    <main className="min-h-dvh bg-[#f4f4f4] text-charcoal">
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
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-sm text-charcoal/70 mt-2 mb-8 italic">
                Left, Muhammad Khalid, Founder of AIREV, School Hack & OnDemand, right, Jorge Colotto, CEO and Founder of AIdeology
              </div>

              <div
                className="prose prose-lg max-w-none text-charcoal/80"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              
              {/* Bottom spacing */}
              <div className="mb-12"></div>
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

      <Footer />
    </main>
  )
}
