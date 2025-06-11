import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Extended Reality (XR) Solutions | AIdeology",
  description:
    "Explore AIdeology's Extended Reality (XR) solutions for Design & Simulation, offering immersive experiences and innovative applications.",
}

const ExtendedRealityPage = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8">Extended Reality (XR) Solutions for Design & Simulation</h1>
      <p className="text-gray-700 leading-relaxed mb-8">
        AIdeology provides cutting-edge Extended Reality (XR) solutions tailored for Design & Simulation. We help
        businesses leverage the power of XR to create immersive experiences, enhance training programs, and drive
        innovation.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our XR Services</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            <strong>Virtual Reality (VR) Development:</strong> Create fully immersive VR experiences for training,
            simulation, and entertainment.
          </li>
          <li>
            <strong>Augmented Reality (AR) Development:</strong> Overlay digital content onto the real world with AR
            applications for various industries.
          </li>
          <li>
            <strong>Mixed Reality (MR) Development:</strong> Blend the physical and digital worlds with MR solutions for
            collaborative design and simulation.
          </li>
          <li>
            <strong>XR Consulting:</strong> Get expert guidance on how to integrate XR technologies into your business
            strategy.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Industries We Serve</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            <strong>Manufacturing:</strong> Improve design processes and training with XR simulations.
          </li>
          <li>
            <strong>Healthcare:</strong> Enhance medical training and patient care with VR and AR applications.
          </li>
          <li>
            <strong>Education:</strong> Create engaging learning experiences with immersive XR content.
          </li>
          <li>
            <strong>Retail:</strong> Offer interactive product demonstrations and virtual shopping experiences.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Benefits of XR for Design & Simulation</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            <strong>Enhanced Visualization:</strong> Visualize complex data and designs in 3D.
          </li>
          <li>
            <strong>Improved Training:</strong> Provide realistic and engaging training simulations.
          </li>
          <li>
            <strong>Increased Collaboration:</strong> Enable remote teams to collaborate in virtual environments.
          </li>
          <li>
            <strong>Reduced Costs:</strong> Minimize the need for physical prototypes and travel.
          </li>
        </ul>
      </section>
    </div>
  )
}

export default ExtendedRealityPage
