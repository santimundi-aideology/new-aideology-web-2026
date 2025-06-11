import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowLeft, Tag, Share2, Linkedin, Twitter } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const getArticleBySlug = (slug: string) => {
  return {
    title: "AIdeology & Lenovo at their 2023 EMEA Kick Off, Barcelona",
    date: "April 15, 2023",
    category: "Events",
    image: "/news_images/image_9.webp",
    content: `
      <h2 class="text-2xl font-semibold mt-10 mb-6">We went to Barcelona with LENOVO to showcase Lenovo OVX Everyscale infrastructure and Digital Twins</h2>

      <p class="mb-8">Since our parthership at LEAP 2023 was really successful, we went to support Lenovo at their EMEA 2023 Kick Off, held at Hilton Diagonal Mar, Barcelona. Our main focus at this event was to support Lenovo showcase their HPC solution, Lenovo OVX Everyscale to the EMEA team, helping them understand the solution and its possible use cases.</p>

      <p class="mb-8">AI is revolutionizing all industries and that's why Lenovo partnered with NVIDIA to create this solution, which focuses on delivering real-time remote work and Digital Twin capabilities as its equipped with NVIDIA Omniverse Enterprise software and Lenovo ThinkSystem platforms leveraging the latest NVIDIA GPU accelerators.</p>

      <p class="mb-8">Digital twins are virtual replicas of physical objects, systems, or processes, used for simulation, analysis, and optimization in real-time. They enable detailed monitoring, troubleshooting, and improvement of their real-world counterparts. These new 3D assets are revolutionizing industries across the board, enabling unprecedented levels of simulation, analysis, and real-time optimization. However, this technological advancement comes with significant requirements in terms of graphical processing power. This is where Lenovo OVX Everscale plays a key role. It provides the necessary robust computational strength and advanced GPU capabilities to handle the intensive demands of these sophisticated 3D models.</p>

      <p class="mb-8">We showcased some interactive demos with VARJO XR3 headset to let people see how incredibly accurrate digital twins are getting while letting the Lenovo team have some fun!</p>

      <div class="w-full h-auto my-8">
        <video controls class="w-full rounded-lg shadow-md">
          <source src="/news_images/lenovo_emea.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <h2 class="text-2xl font-semibold mt-10 mb-6">What is NVIDIA Omniverse?</h2>

      <p class="mb-4">NVIDIA Omniverse provides a comprehensive and advanced set of tools that facilitate the creation, visualization, and operation of digital twins, which are crucial for various applications such as manufacturing, urban planning, and infrastructure management. This are the key points of the solution:</p>

      <ol class="list-decimal pl-6 mb-8 space-y-2">
        <li><strong>Photorealistic Rendering:</strong> Omniverse provides advanced rendering capabilities that can produce highly realistic visualizations. This is essential for digital twins that require accurate and detailed representations of their physical counterparts.</li>
        <li><strong>Real-Time Simulation:</strong> With the platform's real-time simulation capabilities, users can see the immediate impact of changes within the digital twin environment, which is crucial for dynamic analysis and decision-making.</li>
        <li><strong>Scalability:</strong> Omniverse is designed to handle projects of varying scales, from small objects to entire cities, making it versatile for digital twin creation across different industries.</li>
        <li><strong>Collaboration:</strong> Omniverse allows multiple stakeholders to collaborate in a shared virtual space, which is beneficial for complex digital twin projects that require input from diverse disciplines.</li>
        <li><strong>Interoperability:</strong> By supporting Universal Scene Description (USD), Omniverse ensures that data and assets can be shared across different applications and workflows, which is vital for integrating various data streams into a digital twin.</li>
        <li><strong>AI Integration:</strong> Omniverse includes AI-enhanced tools, which can be used to automate processes within the digital twin, such as predictive maintenance, optimization, and scenario planning.</li>
        <li><strong>Extensibility:</strong> The platform can be extended with new capabilities as needed, allowing digital twins to grow and adapt over time with technological advancements.</li>
        <li><strong>Industry-Specific Extensions:</strong> Omniverse offers connectors and extensions for various industry-standard software, enabling professionals to create digital twins using the tools they are already familiar with.</li>
      </ol>

      <div class="w-full aspect-video my-8">
        <iframe
          class="w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/D7F9OQnDC1M"
          title="YouTube Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    `,
    relatedArticles: [
      {
        id: "1",
        title: "AIdeology at the Circuit of Catalunya with Lenovo and Aston Martin",
        snippet: "Our collaboration with Lenovo and Aston Martin in automotive innovation.",
        date: "September 15, 2023",
        image: "/news_images/image_7.webp",
        category: "Partnerships",
        slug: "lenovo-aston-martin",
      },
      {
        id: "2",
        title: "GITEX 2024: A Week of Innovation",
        snippet: "Our latest showcase at GITEX GLOBAL 2024, featuring cutting-edge AI solutions.",
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
    <main className="min-h-screen bg-[#f4f4f4] text-charcoal">
      <Navbar />

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

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div
                className="prose prose-lg max-w-none text-charcoal/80"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

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

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-xl font-bold mb-6">Related Articles</h3>
                <div className="space-y-6">
                  {article.relatedArticles.map((related) => (
                    <Card key={related.id} className="border border-accent-green/20 hover-lift">
                      <CardContent className="p-0">
                        <div className="relative h-40">
                          <Image src={related.image} alt={related.title} fill className="object-cover" />
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
