import { Button } from "@/components/ui/button"
import Link from "next/link"

const RoboticsEdgeAIPage = () => {
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Robotics & Edge AI</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Empowering intelligent automation and real-time decision-making at the edge.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-charcoal">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-charcoal">Intelligent Robotics</h3>
              <p className="text-gray-700">
                AI-powered robotic solutions for manufacturing, logistics, and service industries.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-charcoal">Edge AI Computing</h3>
              <p className="text-gray-700">Real-time AI processing at the network edge for instant decision-making.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-charcoal">Computer Vision</h3>
              <p className="text-gray-700">
                Advanced vision AI systems for intelligent video analytics and automation.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-charcoal">Autonomous Systems</h3>
              <p className="text-gray-700">End-to-end autonomous solutions from perception to action.</p>
            </div>
          </div>

          <div className="bg-charcoal text-white p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-4">Why AIdeology?</h3>
            <p className="text-lg leading-relaxed">
              AIdeology combines cutting-edge robotics with edge AI to deliver intelligent automation solutions that
              operate in real-time. Our expertise spans from robotic simulation and training to deployment of
              production-ready autonomous systems, ensuring your business stays ahead in the age of intelligent
              machines.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Link href="/services/robotics-edge-ai/robotics" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-charcoal group-hover:text-accent-green">Robotics</h3>
                <p className="text-gray-700">
                  AI-powered robotic solutions for industrial automation and service applications.
                </p>
              </div>
            </Link>
            <Link href="/services/robotics-edge-ai/edge-ai" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-charcoal group-hover:text-accent-green">Edge AI</h3>
                <p className="text-gray-700">Real-time AI inferencing and decision-making at the network's edge.</p>
              </div>
            </Link>
            <Link href="/services/robotics-edge-ai/vision-ai" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-charcoal group-hover:text-accent-green">Vision AI</h3>
                <p className="text-gray-700">Intelligent video analytics and computer vision solutions.</p>
              </div>
            </Link>
          </div>

          {/* Call to Action */}
          <div className="bg-accent-green text-charcoal p-8 rounded-lg flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Ready to Automate with AI?</h3>
              <p className="text-lg">
                Book a strategy call to explore robotics and edge AI solutions for your business.
              </p>
            </div>
            <Button 
              asChild 
              size="lg" 
              className="bg-charcoal text-white hover:bg-white hover:text-charcoal hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <Link href="/book-discovery-call?type=consultation">Book a Call</Link>
            </Button>
          </div>

          {/* Learn More Link */}
          <div className="text-center">
            <a
              href="https://www.nvidia.com/en-us/industries/robotics/?ncid=no-ncid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-green hover:underline text-lg font-medium"
            >
              Learn more about NVIDIA Robotics →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RoboticsEdgeAIPage
