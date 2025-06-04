import { Button } from "@/components/ui/button"
import Link from "next/link"

const EdgeAIPage = () => {
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Edge AI Solutions</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Unlocking real-time AI inferencing and decision-making at the network's edge.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-charcoal">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-charcoal">Real-Time AI Inferencing</h3>
              <p className="text-gray-700">
                Low-latency AI processing for time-critical applications and instant decision-making.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-charcoal">Optimized Edge Models</h3>
              <p className="text-gray-700">
                AI models specifically optimized for edge devices with limited computational resources.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-charcoal">Secure Deployments</h3>
              <p className="text-gray-700">Enterprise-grade security and reliability for edge AI implementations.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-charcoal">Remote Management</h3>
              <p className="text-gray-700">Comprehensive monitoring and management of distributed edge AI devices.</p>
            </div>
          </div>

          <div className="bg-charcoal text-white p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-4">Why AIdeology?</h3>
            <p className="text-lg leading-relaxed">
              AIdeology's Edge AI solutions bring the power of artificial intelligence to the edge, enabling real-time
              data processing and decision-making closer to the source. Our expertise ensures efficient and secure
              deployment of AI models on edge devices, unlocking new possibilities for your business while reducing
              latency and bandwidth costs.
            </p>
          </div>

          {/* Call to Action */}
          <div className="bg-accent-green text-charcoal p-8 rounded-lg flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Ready to Deploy Edge AI?</h3>
              <p className="text-lg">Book a strategy call to explore Edge AI solutions for your business.</p>
            </div>
            <Button 
              asChild 
              size="lg" 
              className="bg-charcoal text-white hover:bg-white hover:text-charcoal hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <Link href="#contact">Book a Call</Link>
            </Button>
          </div>

          {/* Learn More Link */}
          <div className="text-center">
            <a
              href="https://www.nvidia.com/en-us/edge-computing/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-green hover:underline text-lg font-medium"
            >
              Learn more about NVIDIA Edge Computing →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EdgeAIPage
