import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

import { solutions } from "@/data/solutions"
import { capabilities } from "@/data/capabilities"
import { useCases } from "@/data/use-cases"
import { relevantPartners } from "@/data/partners"
import { technologies } from "@/data/technologies"

export default function DesignSimulation() {
  const designSimulationSolutions = solutions.filter((solution) => solution.category === "design-simulation")

  const designSimulationCapabilities = capabilities.filter((capability) => capability.category === "design-simulation")

  const designSimulationUseCases = useCases.filter((useCase) => useCase.category === "design-simulation")

  const designSimulationPartners = relevantPartners.filter((partner) =>
    partner.categories.includes("design-simulation"),
  )

  const designSimulationTechnologies = technologies.filter((technology) => technology.category === "design-simulation")

  return (
    <main className="container mx-auto py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">Design & Simulation Solutions</h1>
        <p className="text-lg text-gray-600 mb-8">
          Accelerate innovation and optimize designs with our cutting-edge Design & Simulation solutions.
        </p>
        <Image
          src="/images/design-simulation-hero.png"
          alt="Design & Simulation Solutions"
          width={1200}
          height={600}
          className="rounded-lg shadow-md"
        />
      </section>

      {/* Solutions Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-charcoal">Our Design & Simulation Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designSimulationSolutions.map((solution) => (
            <div
              key={solution.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-charcoal">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-charcoal">Key Design & Simulation Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designSimulationCapabilities.map((capability) => (
            <div
              key={capability.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-charcoal">{capability.title}</h3>
              <p className="text-gray-600">{capability.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-charcoal">Design & Simulation Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {designSimulationUseCases.map((useCase) => (
            <div
              key={useCase.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-charcoal">{useCase.title}</h3>
              <p className="text-gray-600">{useCase.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-charcoal">Our Design & Simulation Technology Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designSimulationTechnologies.map((technology) => (
            <div
              key={technology.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-charcoal">{technology.title}</h3>
              <p className="text-gray-600">{technology.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-charcoal">Our Design & Simulation Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designSimulationPartners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-charcoal">{partner.name}</h3>
              <p className="text-gray-600">{partner.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-8 text-charcoal">Ready to Transform Your Designs?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Contact us today to learn more about our Design & Simulation solutions.
        </p>
        <Button size="lg">
          Get Started <ArrowRight className="ml-2" />
        </Button>
      </section>
    </main>
  )
}
