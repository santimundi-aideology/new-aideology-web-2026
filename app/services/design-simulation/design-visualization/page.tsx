import { Layers } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Advanced Design & Simulation Visualization Solutions | AIdeology",
  description:
    "AIdeology creates stunning, photorealistic Design & Simulation renderings and interactive visualizations for architecture, product design, and media, powered by NVIDIA RTX technology and Omniverse.",
}

export default function DesignVisualizationPage() {
  return (
    <div className="container py-24">
      {/* Hero Section */}
      <section className="text-center">
        <div className="inline-flex items-center bg-accent-green/20 text-accent-green px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Layers className="w-4 h-4 mr-2" /> Design & Simulation
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Bring Your Designs to Life with Stunning Visualizations</h1>
        <p className="text-lg text-gray-600 mb-8">
          Transform your concepts into reality with our advanced Design & Simulation visualization services.
        </p>
        {/* Add call to action buttons here if needed */}
      </section>

      {/* Services Overview */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {/* Example Service Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Photorealistic Rendering</h2>
          <p className="text-gray-600">
            Experience your designs in breathtaking detail with our photorealistic Design & Simulation rendering
            services.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Interactive 3D Visualizations</h2>
          <p className="text-gray-600">
            Explore your designs from every angle with our interactive 3D visualization solutions.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Virtual Reality Experiences</h2>
          <p className="text-gray-600">
            Immerse yourself in your designs with our virtual reality experiences, bringing your vision to life.
          </p>
        </div>
      </section>

      {/* Related Services */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-4">Related Services</h2>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/services/design-simulation/digital-twins"
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-md"
          >
            Digital Twins
          </Link>
          <Link
            href="/services/design-simulation/extended-reality"
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-md"
          >
            Extended Reality
          </Link>
          <Link
            href="/services/design-simulation/robotic-simulation"
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-md"
          >
            Robotic Simulation
          </Link>
        </div>
      </section>
    </div>
  )
}
