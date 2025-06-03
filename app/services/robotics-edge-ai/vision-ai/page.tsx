import { Button } from "@/components/ui/button"
import Link from "next/link"

const VisionAIPage = () => {
  return (
    <div className="bg-white text-charcoal">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-charcoal to-charcoal/90 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('/placeholder.svg?height=600&width=1200')",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Vision AI Solutions</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Transforming visual data into intelligent insights with advanced computer vision.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-charcoal">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-charcoal">Intelligent Video Analytics</h3>
              <p className="text-gray-700">
                Real-time analysis of video streams for security, retail, and operational insights.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-charcoal">Object Detection & Recognition</h3>
              <p className="text-gray-700">
                Advanced AI models for accurate identification and tracking of objects and people.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-charcoal">Anomaly Detection</h3>
              <p className="text-gray-700">Automated detection of unusual patterns and behaviors in visual data.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-charcoal">Quality Inspection</h3>
              <p className="text-gray-700">
                AI-powered visual inspection systems for manufacturing and quality control.
              </p>
            </div>
          </div>

          <div className="bg-charcoal text-white p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-4">Why AIdeology?</h3>
            <p className="text-lg leading-relaxed">
              AIdeology's Vision AI solutions leverage state-of-the-art computer vision technologies to extract
              meaningful insights from visual data. Our expertise in deploying scalable vision AI systems helps
              businesses automate processes, enhance security, and gain competitive advantages through intelligent
              visual analytics.
            </p>
          </div>

          {/* Call to Action */}
          <div className="bg-accent-green text-charcoal p-8 rounded-lg flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Ready to See with AI?</h3>
              <p className="text-lg">Book a strategy call to explore Vision AI solutions for your business.</p>
            </div>
            <Button asChild size="lg" className="bg-charcoal text-white hover:bg-charcoal/90">
              <Link href="#contact">Book a Call</Link>
            </Button>
          </div>

          {/* Learn More Link */}
          <div className="text-center">
            <a
              href="https://www.nvidia.com/en-us/autonomous-machines/intelligent-video-analytics-platform/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-green hover:underline text-lg font-medium"
            >
              Learn more about NVIDIA Intelligent Video Analytics →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VisionAIPage
