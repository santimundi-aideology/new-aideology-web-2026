import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { BotIcon as Robot, Cpu, Cog, Zap, Radar, ArrowRight, CheckCircle } from "lucide-react"

export default function PhysicalAIPage() {
  const capabilities = [
    {
      icon: <Robot className="h-8 w-8 text-accent-green" />,
      title: "Robotics Systems",
      description:
        "Advanced robotics systems powered by AI for automation, manipulation, and interaction in complex environments.",
    },
    {
      icon: <Cpu className="h-8 w-8 text-accent-green" />,
      title: "Embedded AI",
      description:
        "Optimized AI models for deployment on edge devices and embedded systems with limited computational resources.",
    },
    {
      icon: <Cog className="h-8 w-8 text-accent-green" />,
      title: "Automation Solutions",
      description:
        "End-to-end automation solutions that combine AI decision-making with physical actuation and control systems.",
    },
    {
      icon: <Zap className="h-8 w-8 text-accent-green" />,
      title: "Real-time Processing",
      description: "Ultra-low latency processing pipelines for real-time perception, decision-making, and control.",
    },
    {
      icon: <Radar className="h-8 w-8 text-accent-green" />,
      title: "Sensor Fusion",
      description:
        "Integration of multiple sensor modalities (vision, lidar, radar, IMU) for comprehensive environmental perception.",
    },
  ]

  const partnersPhysicalAI = [
    { name: "NVIDIA Jetson", logo: "/partners/nvidia-jetson-logo.png" },
    { name: "Boston Dynamics", logo: "/partners/boston-dynamics-logo.png" },
    { name: "ABB Robotics", logo: "/partners/abb-robotics-logo.png" },
    { name: "Intel RealSense", logo: "/partners/intel-realsense-logo.png" },
    { name: "Qualcomm Robotics", logo: "/partners/qualcomm-robotics-logo.png" },
    { name: "NVIDIA Isaac", logo: "/partners/nvidia-isaac-logo.png" },
  ]

  return (
    <main className="min-h-screen bg-[#f4f4f4] text-charcoal">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">Physical AI Solutions</h1>
              <p className="text-xl mb-8 text-charcoal/80">
                Robotics, automation, and embodied AI solutions that bridge the gap between digital intelligence and
                physical action in the real world.
              </p>
              <Button asChild className="bg-accent-green text-charcoal hover:bg-accent-green/90">
                <Link href="#contact">Explore Physical AI possibilities</Link>
              </Button>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image src="/physical-ai-robotics.png" alt="Physical AI Solutions" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Physical AI Capabilities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="border border-accent-green/20 hover-lift">
                <CardContent className="p-6">
                  <div className="mb-4">{capability.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                  <p className="text-charcoal/70">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-[#f4f4f4]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Physical AI Use Cases</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Industrial Automation",
                description:
                  "AI-powered robotic systems for manufacturing, assembly, and quality control with adaptive capabilities.",
                image: "/physical-ai-industrial-automation.png",
              },
              {
                title: "Autonomous Vehicles",
                description:
                  "Perception, planning, and control systems for self-driving vehicles and mobile robots in complex environments.",
                image: "/physical-ai-autonomous-vehicles.png",
              },
              {
                title: "Smart Agriculture",
                description:
                  "Robotic systems for precision agriculture, including crop monitoring, harvesting, and field management.",
                image: "/physical-ai-smart-agriculture.png",
              },
              {
                title: "Healthcare Robotics",
                description:
                  "Assistive robots and automation systems for healthcare applications, from surgery to patient care.",
                image: "/physical-ai-healthcare-robotics.png",
              },
            ].map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover-lift">
                <div className="relative h-[200px]">
                  <Image
                    src={useCase.image || `/placeholder.svg?height=400&width=600&query=${useCase.title}`}
                    alt={useCase.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                  <p className="text-charcoal/70">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-charcoal text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Physical AI Technology Stack</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="bg-charcoal/50 border border-accent-green/20 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-accent-green">Hardware</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-accent-green" />
                    Edge AI computing platforms
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-accent-green" />
                    Robotic actuators and control systems
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-accent-green" />
                    Multi-modal sensor arrays
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-accent-green" />
                    Custom embedded systems
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-charcoal/50 border border-accent-green/20 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-accent-green">Software</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-accent-green" />
                    Real-time operating systems
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-accent-green" />
                    Robotics middleware (ROS/ROS2)
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-accent-green" />
                    Perception and sensor fusion frameworks
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-accent-green" />
                    Motion planning and control libraries
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-charcoal/50 border border-accent-green/20 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-accent-green">AI Models</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-accent-green" />
                    Optimized vision models for edge devices
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-accent-green" />
                    Reinforcement learning for control
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-accent-green" />
                    Real-time object detection and tracking
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-accent-green" />
                    Multimodal sensor fusion networks
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Physical AI Development Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Requirements Analysis",
                description:
                  "We analyze your physical environment, automation needs, and performance requirements to define the solution scope.",
              },
              {
                step: "02",
                title: "System Design",
                description:
                  "Our experts design a comprehensive solution architecture, including hardware selection, software stack, and AI models.",
              },
              {
                step: "03",
                title: "Prototype & Testing",
                description:
                  "We develop and test prototypes in controlled environments, iteratively refining the solution based on performance data.",
              },
              {
                step: "04",
                title: "Deployment & Optimization",
                description:
                  "The solution is deployed in your environment with ongoing monitoring, maintenance, and optimization.",
              },
            ].map((phase, index) => (
              <Card key={index} className="border border-accent-green/20 hover-lift">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-accent-green/20 mb-4">{phase.step}</div>
                  <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-charcoal/70">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-[#f4f4f4]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Case Study: Automated Quality Inspection</h2>
              <p className="mb-4">
                We developed an AI-powered robotic inspection system for a manufacturing client that reduced defect
                rates by 85% while increasing throughput by 40%.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-green mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    Custom vision system with 6-axis robotic arm for comprehensive inspection from multiple angles
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-green mr-2 flex-shrink-0 mt-0.5" />
                  <span>Edge AI processing for real-time defect detection with sub-millimeter precision</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-green mr-2 flex-shrink-0 mt-0.5" />
                  <span>Integration with existing production line and MES systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-green mr-2 flex-shrink-0 mt-0.5" />
                  <span>Continuous learning system that improved over time with production data</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="border-accent-green text-charcoal hover:bg-accent-green/10">
                <Link href="#case-studies">View more case studies</Link>
              </Button>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/physical-ai-case-study.png"
                alt="Automated Quality Inspection System"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Physical AI Partners</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
            {partnersPhysicalAI.map((partner, index) => (
              <Card
                key={index}
                className="bg-[#f4f4f4] border border-accent-green/10 rounded-md p-6 flex items-center justify-center hover:border-accent-green/30 transition-colors w-full h-32"
              >
                <Image
                  src={partner.logo || `/placeholder.svg?height=80&width=160&query=${partner.name} logo`}
                  alt={`${partner.name} logo`}
                  width={160}
                  height={80}
                  className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#f4f4f4]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to bring AI into the physical world?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-charcoal/80">
            Let's discuss how our Physical AI solutions can transform your operations with intelligent automation and
            robotics.
          </p>
          <Button asChild size="lg" className="bg-accent-green text-charcoal hover:bg-accent-green/90">
            <Link href="#contact">Schedule a consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
