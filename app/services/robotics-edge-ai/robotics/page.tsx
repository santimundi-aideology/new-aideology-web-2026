import { Button } from "@/components/ui/button"
import Link from "next/link"

const RoboticsPage = () => {
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Robotics Solutions</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Intelligent robotic systems powered by AI for next-generation automation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-charcoal">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-charcoal">Industrial Automation</h3>
              <p className="text-gray-700">
                AI-powered robotic systems for manufacturing, assembly, and logistics operations.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-charcoal">Autonomous Navigation</h3>
              <p className="text-gray-700">
                Advanced path planning and navigation systems for mobile robots and vehicles.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-charcoal">Robotic Simulation</h3>
              <p className="text-gray-700">
                Virtual environments for training and testing robotic systems before deployment.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-charcoal">Human-Robot Collaboration</h3>
              <p className="text-gray-700">
                Safe and efficient collaborative robotics solutions for shared workspaces.
              </p>
            </div>
          </div>

          <div className="bg-charcoal text-white p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-4">Why AIdeology?</h3>
            <p className="text-lg leading-relaxed">
              AIdeology delivers comprehensive robotics solutions that combine AI, simulation, and real-world deployment
              expertise. Our approach ensures seamless integration of intelligent robotic systems into your operations,
              maximizing efficiency while maintaining safety and reliability standards.
            </p>
          </div>

          {/* Call to Action */}
          <div className="bg-accent-green text-charcoal p-8 rounded-lg flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Ready to Automate with Robotics?</h3>
              <p className="text-lg">Book a strategy call to explore robotics solutions for your business.</p>
            </div>
            <Button asChild size="lg" className="bg-charcoal text-white hover:bg-charcoal/90">
              <Link href="#contact">Book a Call</Link>
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

export default RoboticsPage
