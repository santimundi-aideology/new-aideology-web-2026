import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Layers } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DesignVisualizationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charcoal via-charcoal to-gray-800 text-white py-20">
        <div className="absolute inset-0 point-cloud-bg opacity-10"></div>
        <div className="w-full px-6 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center bg-accent-green/20 text-accent-green px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Layers className="w-4 h-4 mr-2" />
              3D AI
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Advanced <span className="text-accent-green">3D Design</span> & Visualization
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform how architects, designers, and creative professionals bring their visions to life with
              cutting-edge visualization technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent-green hover:bg-accent-green/90 text-charcoal font-semibold">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-charcoal"
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
              <div className="relative">
                <Image
                  src="/architectural-visualization-ai.png"
                  alt="Architectural Visualization"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Revolutionizing Design Visualization</h2>
                <p className="text-lg mb-6">
                  Traditional design visualization processes are often slow, iterative, and limited in their ability to
                  convey complex ideas. Modern GPU-accelerated visualization offers transformative advantages:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-green mr-2 mt-0.5" />
                    <span>
                      <strong>Real-time Photorealism</strong>: Instant feedback with physically accurate lighting and
                      materials
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-green mr-2 mt-0.5" />
                    <span>
                      <strong>Interactive Exploration</strong>: Navigate and modify complex scenes in real time
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-green mr-2 mt-0.5" />
                    <span>
                      <strong>Collaborative Workflows</strong>: Enable multiple stakeholders to review and provide
                      feedback
                    </span>
                  </li>
                  <li className="flex items-start">
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
              <h2 className="text-4xl font-bold text-charcoal mb-4">AIdeology's Design Visualization Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions to transform your creative workflows
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover-lift">
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

              <Card className="hover-lift">
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

              <Card className="hover-lift">
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

              <Card className="hover-lift">
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
                      <span className="text-sm">Automated optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-16">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-blue-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">NVIDIA RTX & Omniverse Technologies</h3>
                  <p className="text-blue-700">
                    AIdeology leverages NVIDIA RTX technology for real-time ray tracing and AI-accelerated denoising,
                    along with NVIDIA Omniverse for collaborative design and visualization. These technologies enable
                    unprecedented levels of visual fidelity and workflow efficiency for design professionals.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-4">
                Benefits of AIdeology's Design Visualization Solutions
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-accent-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Accelerated Design Cycles</h3>
                      <p className="text-gray-600">Reduce iteration time with real-time feedback</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-accent-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Enhanced Client Communication</h3>
                      <p className="text-gray-600">Present designs in photorealistic detail</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-accent-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Improved Decision Making</h3>
                      <p className="text-gray-600">Enable stakeholders to experience designs virtually</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-accent-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Reduced Physical Prototyping</h3>
                      <p className="text-gray-600">Save costs with comprehensive digital prototypes</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="RTX-powered architectural visualization"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal text-white">
        <div className="w-full px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Design Visualization?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact AIdeology to learn how our advanced 3D visualization solutions can elevate your creative processes
            and outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent-green hover:bg-accent-green/90 text-charcoal font-semibold">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <h3 className="text-2xl font-bold text-charcoal mb-8 text-center">Related 3D AI Services</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <Link href="/services/3d-ai/digital-twins" className="group">
              <Card className="hover-lift h-full">
                <CardHeader>
                  <CardTitle className="group-hover:text-accent-green transition-colors">Digital Twins</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Virtual replicas of physical assets for real-time monitoring and simulation
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/3d-ai/extended-reality" className="group">
              <Card className="hover-lift h-full">
                <CardHeader>
                  <CardTitle className="group-hover:text-accent-green transition-colors">Extended Reality</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Immersive VR, AR, and MR experiences for training, visualization, and collaboration
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/3d-ai/robotic-simulation" className="group">
              <Card className="hover-lift h-full">
                <CardHeader>
                  <CardTitle className="group-hover:text-accent-green transition-colors">Robotic Simulation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Accelerate development and testing of autonomous systems and robotics
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export const metadata = {
  title: "Advanced 3D Design & Visualization Solutions | AIdeology",
  description:
    "AIdeology creates stunning, photorealistic 3D renderings and interactive visualizations for architecture, product design, and media, powered by NVIDIA RTX technology and Omniverse.",
}
