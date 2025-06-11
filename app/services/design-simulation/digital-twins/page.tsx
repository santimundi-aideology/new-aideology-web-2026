import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Digital Twin Solutions for Design & Simulation | AIdeology",
  description:
    "Explore AIdeology's Digital Twin solutions for Design & Simulation, enabling real-time monitoring, predictive maintenance, and optimized performance.",
}

const DigitalTwinsPage = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Digital Twin Solutions for Design & Simulation</h1>
      <p className="text-gray-700 leading-relaxed mb-8 text-center">
        AIdeology offers cutting-edge Digital Twin technology to revolutionize your Design & Simulation processes. Our
        solutions provide real-time insights, predictive maintenance capabilities, and optimized performance for your
        assets and operations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Section 1: Real-time Monitoring */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Real-time Monitoring</h2>
          <p className="text-gray-600">
            Gain complete visibility into your assets with real-time data streams and interactive dashboards. Monitor
            performance metrics, identify anomalies, and respond proactively to potential issues.
          </p>
        </div>

        {/* Section 2: Predictive Maintenance */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Predictive Maintenance</h2>
          <p className="text-gray-600">
            Leverage advanced analytics and machine learning to predict equipment failures and optimize maintenance
            schedules. Reduce downtime, minimize costs, and extend the lifespan of your assets.
          </p>
        </div>

        {/* Section 3: Optimized Performance */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Optimized Performance</h2>
          <p className="text-gray-600">
            Optimize the performance of your assets and operations with data-driven insights and intelligent automation.
            Identify areas for improvement, streamline processes, and maximize efficiency.
          </p>
        </div>

        {/* Section 4: Design & Simulation Capabilities */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Design & Simulation Capabilities</h2>
          <p className="text-gray-600">
            Our Digital Twin solutions enable you to simulate various scenarios and test different design options in a
            virtual environment. Optimize your designs, reduce risks, and accelerate innovation.
          </p>
        </div>
      </div>
    </div>
  )
}

export default DigitalTwinsPage
