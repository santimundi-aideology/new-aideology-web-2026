export default function RoboticSimulationPage() {
  return (
    <div className="w-full px-6 lg:px-12 py-12">
      <h1 className="text-4xl font-bold mb-6">Robotic Simulation & AI</h1>

      <p className="text-lg mb-8">
        AIdeology delivers advanced robotic simulation solutions that accelerate development, testing, and deployment of
        autonomous systems and robotics. Our solutions leverage NVIDIA Isaac Sim and other cutting-edge technologies to
        create physically accurate, AI-ready simulation environments.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">The Power of Robotic Simulation</h2>

      <p className="mb-6">
        Developing and training robotic systems in the physical world is slow, expensive, and often impractical. Modern
        GPU-accelerated simulation offers transformative advantages:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Accelerated Development</strong>: Test thousands of scenarios in the time it would take to run one
          physical test
        </li>
        <li>
          <strong>Synthetic Data Generation</strong>: Create vast amounts of training data for AI models
        </li>
        <li>
          <strong>Safety Testing</strong>: Evaluate edge cases and failure modes without physical risk
        </li>
        <li>
          <strong>Domain Randomization</strong>: Improve AI robustness by varying simulation parameters
        </li>
        <li>
          <strong>Digital Twins</strong>: Create virtual replicas of physical environments for testing
        </li>
      </ul>

      <p className="mb-8">
        AIdeology's robotic simulation solutions help you realize these advantages and transform your robotics
        development workflow.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">AIdeology's Robotic Simulation Services</h2>

      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">Simulation Environment Development</h3>
          <p>
            We create physically accurate simulation environments tailored to your specific robotics applications, from
            warehouses and factories to outdoor environments and specialized settings.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">AI Training Infrastructure</h3>
          <p>
            AIdeology implements end-to-end infrastructure for training robotic AI using simulation, including synthetic
            data generation, reinforcement learning, and sim-to-real transfer.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Digital Twin Creation</h3>
          <p>
            We develop digital twins of physical environments and robotic systems, enabling testing and validation in
            virtual replicas before deployment to the real world.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Simulation-Based Testing</h3>
          <p>
            AIdeology creates comprehensive testing frameworks that leverage simulation to validate robotic system
            performance across thousands of scenarios and edge cases.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
        <h3 className="font-bold text-blue-800">NVIDIA Isaac Sim & Omniverse Technologies</h3>
        <p className="text-blue-700">
          AIdeology leverages NVIDIA Isaac Sim—a robotics simulation platform built on Omniverse—to create physically
          accurate, photorealistic simulation environments. These technologies enable high-fidelity physics simulation,
          synthetic data generation, and seamless integration with AI training workflows.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">Benefits of AIdeology's Robotic Simulation Solutions</h2>

      <ul className="list-disc pl-6 mb-10 space-y-2">
        <li>
          <strong>Accelerated Development</strong>: Reduce time-to-market for robotic systems
        </li>
        <li>
          <strong>Improved AI Performance</strong>: Train more robust AI models with diverse synthetic data
        </li>
        <li>
          <strong>Reduced Physical Testing</strong>: Minimize the need for expensive physical prototypes
        </li>
        <li>
          <strong>Enhanced Safety</strong>: Thoroughly test edge cases and failure modes virtually
        </li>
        <li>
          <strong>Scalable Development</strong>: Run thousands of simulations in parallel
        </li>
      </ul>

      <p className="text-lg font-semibold">
        Transform your robotics development with advanced simulation. Contact AIdeology to learn how our robotic
        simulation solutions can accelerate your autonomous systems initiatives.
      </p>
    </div>
  )
}

export const metadata = {
  title: "Robotic Simulation & AI Solutions | AIdeology",
  description:
    "AIdeology delivers advanced robotic simulation solutions powered by NVIDIA Isaac Sim and Omniverse, enabling accelerated development, testing, and AI training for autonomous systems and robotics.",
}
