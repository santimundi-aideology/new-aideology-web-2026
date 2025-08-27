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
    title: "AIdeology at LEAP 2023, KSA",
    date: "February 10, 2023",
    category: "Events",
    image: "/news_images/image_10.webp",
    content: `
      <h2 class="text-2xl font-semibold mt-10 mb-6">We went to LEAP with LENOVO to showcase NVIDIA's Omniverse Platform running on Lenovo OVX infrastructure</h2>

      <p class="mb-8">We went to LEAP, the world's most attended tech event to Showcase NVIDIA's Omniverse Platform Running on Lenovo OVX Everyscale Solution, with the new OVX 2.0 node configuration announced on September 2022.</p>

       <div class="relative w-full h-64 mb-8">
        <img src="/news_images/image_10.webp" alt="LEAP Event" class="object-cover w-full h-full rounded-lg" />
      </div>



      <p class="mb-8">This year at LEAP, we went to Lenovo's Booth, placed at Hall 1 Stand C30 in order to help them showcase their latest solutions designed to accelerate digital transformation in the Kingdom under the theme of 'Smarter Knows That Together is Better'.</p>

      <p class="mb-8">We presented these technologies through presentations of the solutions, and interactive digital twin demos that help us showcase NVIDIA Omniverse capabilites, focusing on medical research, genomics, weather forecast, Oil & Gas among others.</p>

      <p class="mb-8">Come visit us from February 6, 2023, to February 9, 2023, at Lenovo's booth and learn how these technologies can revolutionize your industry and be a part of turning Saudi Vision 2030 into a reality.</p>

      <h2 class="text-2xl font-semibold mt-10 mb-6">What is NVIDIA Omniverse?</h2>

      <p class="mb-8">NVIDIA Omniverse is a platform designed by NVIDIA for building and operating 3D AI applications. It is a collaborative and simulation environment that specifically targets creators, designers, and engineers, allowing them to work together in real-time across various software applications. Here are some key aspects of NVIDIA Omniverse:</p>

      <ol class="list-decimal list-inside mb-8">
        <li>Real-Time Collaboration: Omniverse enables professionals from different disciplines to collaborate in real-time on complex projects. For instance, artists, designers, and engineers can work together seamlessly, each using their preferred tools and software.</li>
        <li>Physically Accurate Simulations: The platform is built to support physically accurate simulations. This includes realistic lighting, materials, and physics, making it highly suitable for creating detailed, lifelike 3D models and environments.</li>
        <li>Based on Universal Scene Description (USD): Omniverse leverages USD, initially developed by Pixar, as its foundation. USD is a framework that allows the creation of complex scenes and helps in maintaining a consistent, fully editable scene representation across different applications.</li>
        <li>Wide Range of Applications: It's used in various fields including architecture, engineering, construction, media and entertainment, and more. For instance, it can be used for creating digital twins of real-world locations, visual effects in movies, or complex design simulations in engineering.</li>
        <li>Extensibility and Compatibility: Omniverse is designed to be an open platform, supporting a wide range of industry-standard software, plugins, and tools, making it highly adaptable and versatile.</li>
      </ol>

      <div class="aspect-w-16 aspect-h-9 mb-8">
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/MPd3nCBlECY" title="NVIDIA Omniverse Overview" frameborder="0" allowfullscreen></iframe>
      </div>

      <h2 class="text-2xl font-semibold mt-10 mb-6">What is Lenovo Everyscale OVX?</h2>

      <p class="mb-8">Lenovo Eveyscale OVX is a robust server infrastructure aimed at providing a high-performance, scalable, and secure platform for virtualization needs, this solution is optimal for Digital Twins, particularly when it comes to managing the complexities and demands of creating and maintaining digital twins within NVIDIA's Omniverse platform. Here are some features that makes this solution interesting:</p>

      <ol class="list-decimal list-inside mb-8">
        <li>High-Performance Computing Capabilities: Digital twin simulations in Omniverse require significant computational resources, especially for real-time rendering and physics simulations. Lenovo OVX Everscale provides the high-performance computing power necessary to handle these intensive tasks efficiently.</li>
        <li>Enhanced GPU Performance: NVIDIA Omniverse leverages GPU-accelerated computing for rendering and simulations. Lenovo OVX Everscale's integration with NVIDIA technology, including powerful GPUs, makes it an ideal platform for running GPU-intensive applications like Omniverse.</li>
        <li>Scalability: The scalability of Lenovo OVX Everscale is crucial for digital twin projects, which can vary greatly in size and complexity. The ability to scale resources up or down allows for efficient handling of varying workloads and the growth of the digital twin environment over time.</li>
        <li>Data Center Efficiency: Running digital twin simulations can be resource-intensive, potentially leading to high energy consumption and heat generation. Lenovo OVX Everscale is designed to optimize power consumption and cooling, which is essential for maintaining cost-effective and sustainable data center operations.</li>
        <li>Integration Capabilities: Lenovo OVX Everscale's ability to integrate with various software and systems is vital for digital twins, which often need to pull data from multiple sources and work with different tools and platforms.</li>
        <li>Security: Digital twins can contain sensitive or proprietary data, making security a top priority. Lenovo OVX Everscale provides robust security features to protect data and ensure secure operations.</li>
      </ol>

      <div class="aspect-w-16 aspect-h-9 mb-8">
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/80Rr3KVMm5k" title="Lenovo OVX" frameborder="0" allowfullscreen></iframe>
      </div>
    `,
    relatedArticles: [
      {
        id: "1",
        title: "LEAP 2024: Driving Enterprise AI",
        snippet: "Our latest showcase of AI solutions at LEAP 2024 in Riyadh.",
        date: "April 5, 2024",
        image: "/news_images/image_5.webp",
        category: "Events",
        slug: "leap-2024",
      },
      {
        id: "2",
        title: "GITEX 2024: A Week of Innovation",
        snippet: "Our latest showcase at GITEX GLOBAL 2024, featuring cutting-edge AI solutions.",
        date: "October 17, 2024",
        image: "/news_images/image_2.webp",
        category: "Events",
        slug: "gitex-2024",
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
