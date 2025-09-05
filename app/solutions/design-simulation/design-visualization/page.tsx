import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Layers, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/footer"

export default function DesignVisualizationPage() {
  const breadcrumbPath = [
    { name: "Solutions", href: "/#solutions" },
    { name: "Design & Simulation", href: "/solutions/design-simulation" },
    { name: "Design Visualization" }
  ];
  return (
    <>
      <div className="min-h-screen bg-white pt-24">
        {/* Breadcrumb Navigation */}
        <div className="hidden md:block mb-6">
          <nav className="mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-500 flex items-center" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            {breadcrumbPath.map((item, index) => (
              <div key={item.name} className="flex items-center">
                <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
                {item.href ? (
                  <Link href={item.href} className="hover:text-gray-700">
                    {item.name}
                  </Link>
                ) : (
                  <span className="font-medium text-gray-700">{item.name}</span>
                )}
              </div>
            ))}
          </nav>
        </div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charcoal via-charcoal to-gray-800 text-white py-20">
        <div className="absolute inset-0 point-cloud-bg opacity-10"></div>
        <div className="w-full px-6 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center bg-accent-green/20 text-accent-green px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <Layers className="w-4 h-4 mr-2" />
              3D AI
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Advanced <span className="text-accent-green">3D Design</span> & Visualization
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              Transform how architects, designers, and creative professionals bring their visions to life with
              cutting-edge visualization technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <Button size="lg" className="bg-accent-green hover:bg-accent-green/90 text-charcoal font-semibold hover:scale-105 transition-all duration-300">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-charcoal hover:scale-105 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
              <div className="relative animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <Image
                  src="/architectural-visualization-ai.webp"
                  alt="Architectural Visualization"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <h2 className="text-3xl font-bold mb-6">Revolutionizing Design Visualization</h2>
                <p className="text-lg mb-6">
                  Traditional design visualization processes are often slow, iterative, and limited in their ability to
                  convey complex ideas. Modern GPU-accelerated visualization offers transformative advantages:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                    <CheckCircle className="w-5 h-5 text-accent-green mr-2 mt-0.5" />
                    <span>
                      <strong>Real-time Photorealism</strong>: Instant feedback with physically accurate lighting and
                      materials
                    </span>
                  </li>
                  <li className="flex items-start animate-fade-in-up" style={{ animationDelay: '350ms' }}>
                    <CheckCircle className="w-5 h-5 text-accent-green mr-2 mt-0.5" />
                    <span>
                      <strong>Interactive Exploration</strong>: Navigate and modify complex scenes in real time
                    </span>
                  </li>
                  <li className="flex items-start animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                    <CheckCircle className="w-5 h-5 text-accent-green mr-2 mt-0.5" />
                    <span>
                      <strong>Collaborative Workflows</strong>: Enable multiple stakeholders to review and provide
                      feedback
                    </span>
                  </li>
                  <li className="flex items-start animate-fade-in-up" style={{ animationDelay: '450ms' }}>
                    <CheckCircle className="w-5 h-5 text-accent-green mr-2 mt-0.5" />
                    <span>
                      <strong>AI-Enhanced Creation</strong>: Leverage AI to automate repetitive tasks and enhance
                      creativity
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>AIdeology's Design Visualization Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Comprehensive solutions to transform your creative workflows
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <CardHeader>
                  <CardTitle className="text-xl">Architectural Visualization</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    We create photorealistic architectural visualizations that bring building designs to life, enabling
                    clients and stakeholders to experience spaces before they're built.
                  </CardDescription>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Photorealistic rendering</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Interactive walkthroughs</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Lighting and material studies</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <CardHeader>
                  <CardTitle className="text-xl">Product Design & Prototyping</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    AIdeology implements visualization solutions that accelerate product development through rapid
                    digital prototyping and realistic product visualization.
                  </CardDescription>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Digital prototyping</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Product configurators</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Marketing visualization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                <CardHeader>
                  <CardTitle className="text-xl">Collaborative Design Platforms</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    We deploy NVIDIA Omniverse-based collaborative environments that enable teams to work together
                    seamlessly across different design applications and locations.
                  </CardDescription>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Multi-user collaboration</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Cross-application workflows</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Version control for 3D assets</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <CardHeader>
                  <CardTitle className="text-xl">AI-Enhanced Design Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    AIdeology integrates AI-powered tools that automate repetitive tasks, generate design variations,
                    and enhance creative workflows.
                  </CardDescription>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Generative design</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Style transfer and adaptation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Automated asset generation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>Industry Applications</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Our visualization solutions serve diverse industries with specialized requirements
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <CardHeader>
                  <CardTitle className="text-xl">Architecture & Real Estate</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Create compelling architectural presentations, property marketing materials, and immersive
                    experiences that help clients visualize finished projects.
                  </CardDescription>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Pre-construction visualization</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Property marketing assets</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Virtual property tours</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <CardHeader>
                  <CardTitle className="text-xl">Manufacturing & Product Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Accelerate product development cycles with photorealistic prototypes, streamlined reviews, and
                    enhanced collaboration across distributed teams.
                  </CardDescription>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Digital twin creation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Assembly process visualization</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Quality control visualization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                <CardHeader>
                  <CardTitle className="text-xl">Entertainment & Media</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Support content creation workflows with real-time rendering, virtual production capabilities, and
                    collaborative tools for creative teams.
                  </CardDescription>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Virtual set design</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Pre-visualization workflows</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                      <span className="text-sm">Interactive experiences</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent-green text-charcoal">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Ready to Transform Your Design Process?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Let AIdeology help you implement cutting-edge visualization solutions that accelerate creativity and enhance collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <Button 
                asChild
                size="lg" 
                className="bg-charcoal text-white font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-300 px-8 py-3"
              >
                <Link href="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white hover:scale-105 transition-all duration-300 px-8 py-3"
                asChild
              >
                <Link href="/solutions/design-simulation">
                  Explore Design & Simulation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      </div>
      
      <Footer />
    </>
  )
}

export const metadata = {
  title: "Advanced 3D Design & Visualization Solutions | AIdeology",
  description:
    "AIdeology creates stunning, photorealistic 3D renderings and interactive visualizations for architecture, product design, and media, powered by NVIDIA RTX technology and Omniverse.",
}
