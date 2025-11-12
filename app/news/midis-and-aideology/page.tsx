import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowLeft, Tag } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// This would typically come from a database or CMS
const getArticleBySlug = (slug: string) => {
  return {
    title: "AIdeology Embarks on New Chapter with Midis Group: A Partnership for Accelerated Innovation",
    date: "October 10, 2024",
    category: "Partnerships",
    image: "/news_images/image_3.webp",
    content: `
      <p class="mb-8">We are thrilled to announce that we, at AIdeology FZCO, have embarked on an exciting new chapter alongside Midis Group. This strategic partnership will empower us to scale our impact and bring cutting-edge AI technologies to more businesses across the Middle East and beyond.</p>

      <h2 class="text-2xl font-semibold mt-10 mb-6">Strategic Partnership Details</h2>

      <p class="mb-8">With Midis Group's support, we're eager to accelerate innovation and extend our reach, delivering AI-driven solutions that create real value for our clients. We'd like to extend a heartfelt thank you to the Senior Leaders at Midis Group for believing in our vision and joining us on this journey.</p>

      <p class="mb-8">As part of this partnership, <a href="https://mdssigroup.com/" target="_blank" rel="noopener noreferrer" class="text-electric-green hover:text-electric-green/80">Mideast Data Systems, System Integration Group</a> (MDS SI), a subsidiary of Midis Group, has acquired a majority stake in AIdeology. This acquisition is expected to expand MDS SI's capability in AI technologies and accelerate AIdeology's go-to-market efforts.</p>

      <p class="mb-8">At AIdeology, we've quickly grown a niche business in the past three years, accelerating demand for enterprise AI infrastructure and platforms. With this partnership, we'll be able to leverage MDS SI's thousands of professionals in multiple countries to accelerate growth and tap into their integrators' customers.</p>

      <h2 class="text-2xl font-semibold mt-10 mb-6">NVIDIA Elite Partnership</h2>

      <p class="mb-8">This deal will also allow us to bring our expertise as an NVIDIA Elite Partner to more organizations across the Middle East and Turkey. As one of only 10 NVIDIA Elite Partners in the region, we're proud to be part of this exclusive group and look forward to continuing to drive innovation in AI technologies.</p>

      <p class="mb-8">We're excited about the opportunities that this partnership presents and are confident that together, we'll push the boundaries of what's possible in AI. With Midis Group's support, we're ready to take our business to the next level and make a meaningful impact on the region.</p>

     

      <h2 class="text-2xl font-semibold mt-10 mb-6">About MDS SI</h2>

      <p class="mb-8">MDS System Integration Group is an experienced and agile Digital Systems Integrator that analyses, assists, and accelerates business growth with a team of 2,600+ professionals, holding over 1,400 technology and 250+ service delivery certifications, and serving a diverse clientele of more than 5,000 customers. MDS SI is ranked #1 by IDC on "IT Services revenues across several countries in the GCC."</p>

      <p class="mb-8">The Group holds 60 affiliates across the Middle East and Turkey with presence in 11 countries and 18 cities, effectively driving digital and business sustainable transformation across enterprises and industries. MDS SI, part of the Midis Group, is committed to driving business excellence by utilizing world-class technology solutions, backed by the most powerful ecosystem.</p>

      <p class="mb-8"><a href="https://mdssigroup.com/" target="_blank" rel="noopener noreferrer" class="text-electric-green hover:text-electric-green/80 underline underline-offset-4 font-medium inline-flex items-center">Visit MDS SI Group Website <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 ml-1"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd" /></svg></a></p>
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
        id: "2",
        title: "Revolutionizing Industry Boundaries: A Week of Innovation at GITEX GLOBAL 2024",
        snippet: "Our experience and achievements at GITEX GLOBAL 2024, showcasing cutting-edge AI solutions.",
        date: "October 17, 2024",
        image: "/news_images/image_2.webp",
        category: "Events",
        slug: "gitex-2024"
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
                  src="/news_images/aideology_midis.webp"
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-sm text-charcoal/70 mt-2 mb-8 italic">
                Shaking hands on the agreement: left, Jorge Colotto, CEO and Founder of AIdeology, right, Sami Abi Esber, President of MDS SI. Photo credit: MDS SI
              </div>

              <div
                className="prose prose-lg max-w-none text-charcoal/80"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Inserted Logo Image Block */}
              <div className="py-2 w-full bg-white">
                <div className="max-w-[1000px] h-[300px] relative mx-auto">
                  <Image
                    src="/news_images/midis-aideology-logo.webp"
                    alt="MDS System Integration and AIdeology.ai logos"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              
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
