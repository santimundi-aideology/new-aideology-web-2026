import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CheckCircle,
  ArrowRight,
  Server,
  CuboidIcon as Cube,
  Lightbulb,
  Network,
  Shield,
  Workflow,
  Wand2,
  BrainCircuit,
  GitBranch,
  BarChart,
  Users,
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ServicesPage() {
  // Define service categories
  const serviceCategories = [
    {
      id: "ai-infrastructure",
      name: "AI Infrastructure",
      icon: <Server className="h-6 w-6 text-accent-green" />,
      description: "High-performance computing solutions tailored for AI workloads",
    },
    {
      id: "3d-ai",
      name: "3D AI",
      icon: <Cube className="h-6 w-6 text-accent-green" />,
      description: "End-to-end metaverse & digital-twins implementation",
    },
    {
      id: "ai-consulting",
      name: "AI Consulting",
      icon: <Lightbulb className="h-6 w-6 text-accent-green" />,
      description: "Strategic guidance and implementation support for AI initiatives",
    },
  ]

  // Define services for each category
  const services = {
    "ai-infrastructure": [
      {
        title: "GPU Cluster Design & Deployment",
        description:
          "Custom-designed GPU clusters optimized for specific AI workloads, featuring the latest NVIDIA hardware configurations and high-performance interconnects.",
        features: [
          "Workload-specific hardware selection",
          "High-density GPU configurations",
          "Optimized cooling solutions",
          "Performance benchmarking",
          "Scalable architecture design",
        ],
        image: "/services/gpu-cluster.png",
      },
      {
        title: "High-Performance Storage Solutions",
        description:
          "High-throughput, low-latency storage fabrics designed specifically for AI data pipelines and large datasets, ensuring optimal performance for training and inference workloads.",
        features: [
          "Parallel file systems",
          "NVMe-based storage arrays",
          "Data tiering strategies",
          "Cache optimization",
          "Distributed storage architecture",
        ],
        image: "/services/storage-solutions.png",
      },
      {
        title: "Network Architecture Optimization",
        description:
          "Specialized network designs with high-bandwidth interconnects for distributed training and inference, minimizing communication overhead in multi-node AI systems.",
        features: [
          "InfiniBand/RoCE implementations",
          "Network topology optimization",
          "Traffic prioritization",
          "Latency reduction strategies",
          "Bandwidth allocation",
        ],
        image: "/services/network-architecture.png",
      },
      {
        title: "Infrastructure Management & Monitoring",
        description:
          "Comprehensive management solutions for AI infrastructure, including resource scheduling, monitoring, and optimization tools to maximize utilization and performance.",
        features: [
          "Workload scheduling",
          "Resource utilization monitoring",
          "Performance analytics",
          "Predictive maintenance",
          "Cost optimization",
        ],
        image: "/services/infrastructure-management.png",
      },
      {
        title: "Hybrid Cloud AI Infrastructure",
        description:
          "Seamless integration of on-premises and cloud resources for flexible, scalable AI infrastructure that adapts to changing workload demands while optimizing costs.",
        features: [
          "Multi-cloud strategy development",
          "Burst capacity planning",
          "Data synchronization",
          "Cost management",
          "Security integration",
        ],
        image: "/services/hybrid-cloud.png",
      },
    ],
    "3d-ai": [
      {
        title: "Digital Twin Development",
        description:
          "Creation of comprehensive digital replicas of physical assets, processes, and systems for simulation, analysis, and optimization in virtual environments.",
        features: [
          "Real-time data integration",
          "Physics-based simulation",
          "Predictive modeling",
          "Interactive visualization",
          "IoT sensor integration",
        ],
        image: "/services/digital-twin.png",
      },
      {
        title: "3D Rendering & Visualization",
        description:
          "High-fidelity rendering solutions powered by AI for realistic visualization and real-time interaction with complex 3D models and environments.",
        features: [
          "AI-accelerated rendering",
          "Real-time ray tracing",
          "Material simulation",
          "Lighting optimization",
          "Interactive visualization tools",
        ],
        image: "/services/3d-rendering.png",
      },
      {
        title: "Virtual Production Pipelines",
        description:
          "End-to-end virtual production solutions for film, television, and media, combining real-time rendering, motion capture, and AI-driven tools.",
        features: [
          "LED wall integration",
          "Camera tracking systems",
          "Real-time compositing",
          "Virtual set design",
          "Asset management",
        ],
        image: "/services/virtual-production.png",
      },
      {
        title: "Simulation Environments",
        description:
          "Custom simulation environments for testing, training, and validating AI models in virtual scenarios before deployment in real-world applications.",
        features: [
          "Physics-accurate simulations",
          "Scenario generation",
          "Synthetic data creation",
          "Model validation",
          "Performance benchmarking",
        ],
        image: "/services/simulation-environments.png",
      },
      {
        title: "Generative 3D Content",
        description:
          "AI-powered generation of 3D assets, environments, and animations from simple prompts or references, accelerating content creation workflows.",
        features: [
          "Text-to-3D generation",
          "Style transfer for 3D",
          "Automated rigging",
          "Texture synthesis",
          "Procedural generation",
        ],
        image: "/services/generative-3d.png",
      },
    ],
    "ai-consulting": [
      {
        title: "AI Strategy Development",
        description:
          "Comprehensive AI strategy development tailored to your business objectives, identifying high-impact use cases and creating implementation roadmaps.",
        features: [
          "Opportunity assessment",
          "ROI analysis",
          "Technology selection",
          "Implementation roadmap",
          "Risk mitigation strategies",
        ],
        image: "/services/ai-strategy.png",
      },
      {
        title: "Model Integration & Deployment",
        description:
          "Seamless integration of state-of-the-art AI models into existing systems and workflows, with optimized deployment strategies for production environments.",
        features: [
          "Model selection and evaluation",
          "Integration architecture design",
          "Performance optimization",
          "Deployment automation",
          "Monitoring setup",
        ],
        image: "/services/model-integration.png",
      },
      {
        title: "MLOps Implementation",
        description:
          "Build robust, scalable machine learning operations pipelines for continuous training, deployment, and monitoring of AI models in production.",
        features: [
          "CI/CD pipeline setup",
          "Model versioning",
          "Automated testing",
          "Drift detection",
          "Infrastructure as code",
        ],
        image: "/services/mlops.png",
      },
      {
        title: "AI Agent Development",
        description:
          "Design and implementation of custom AI agents that can automate complex tasks, make decisions, and interact with users and systems intelligently.",
        features: [
          "Agent architecture design",
          "LLM integration",
          "Tool use capabilities",
          "Reasoning layer development",
          "Governance implementation",
        ],
        image: "/services/ai-agent.png",
      },
      {
        title: "Team Enablement & Training",
        description:
          "Upskill your team with hands-on training and knowledge transfer from our AI experts, enabling them to develop, deploy, and maintain AI solutions.",
        features: [
          "Custom training programs",
          "Hands-on workshops",
          "Best practices guidance",
          "Technical mentorship",
          "Knowledge transfer",
        ],
        image: "/services/team-enablement.png",
      },
    ],
  }

  return (
    <main className="min-h-screen bg-[#f4f4f4] text-charcoal">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-16 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">Our Services</h1>
          <p className="text-xl text-charcoal/70 max-w-3xl">
            Comprehensive AI solutions tailored to your business needs, from infrastructure design to strategic
            consulting.
          </p>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-16 bg-white border-b border-accent-green/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCategories.map((category) => (
              <Card key={category.id} className="bg-[#f4f4f4] border border-accent-green/20 hover-lift">
                <CardHeader>
                  <div className="mb-4">{category.icon}</div>
                  <CardTitle className="text-2xl">{category.name}</CardTitle>
                  <CardDescription className="text-charcoal/70">{category.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link
                    href={`#${category.id}`}
                    className="text-electric-green hover:text-electric-green/80 flex items-center group font-medium"
                  >
                    View services
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 text-accent-green" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Tabs */}
      <section className="py-16 bg-[#f4f4f4]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Explore Our Services</h2>

          <Tabs defaultValue="ai-infrastructure" className="w-full">
            <TabsList className="grid grid-cols-1 md:grid-cols-3 w-full max-w-3xl mx-auto mb-12 bg-white/80">
              {serviceCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  id={category.id}
                  className="text-sm md:text-base data-[state=active]:bg-accent-green data-[state=active]:text-charcoal"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(services).map(([categoryId, categoryServices]) => (
              <TabsContent key={categoryId} value={categoryId} className="mt-6">
                <div className="space-y-16">
                  {categoryServices.map((service, index) => (
                    <div
                      key={index}
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                    >
                      <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={service.image || `/placeholder.svg?height=600&width=800&query=${service.title}`}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                        <p className="text-charcoal/80 mb-6">{service.description}</p>
                        <h4 className="font-semibold text-electric-green mb-3">Key Features:</h4>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-accent-green mr-3 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button asChild className="bg-accent-green text-charcoal hover:bg-accent-green/90">
                          <Link href="#contact">Inquire about this service</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Service Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We begin with a thorough assessment of your needs, challenges, and objectives to understand your unique requirements.",
                icon: <Lightbulb className="h-8 w-8 text-accent-green" />,
              },
              {
                step: "02",
                title: "Design",
                description:
                  "Our experts design a tailored solution that addresses your specific challenges and aligns with your business goals.",
                icon: <BrainCircuit className="h-8 w-8 text-accent-green" />,
              },
              {
                step: "03",
                title: "Implementation",
                description:
                  "We deploy your solution with minimal disruption, ensuring seamless integration with your existing systems and workflows.",
                icon: <GitBranch className="h-8 w-8 text-accent-green" />,
              },
              {
                step: "04",
                title: "Optimization",
                description:
                  "We continuously monitor and refine your solution to ensure optimal performance and adapt to changing requirements.",
                icon: <BarChart className="h-8 w-8 text-accent-green" />,
              },
            ].map((phase, index) => (
              <Card key={index} className="border border-accent-green/20 hover-lift">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-accent-green/20 mb-4">{phase.step}</div>
                  <div className="mb-4">{phase.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-charcoal/70">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-charcoal text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose AIdeology</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Elite Expertise",
                description:
                  "As an NVIDIA Elite Solution Provider with certified architects, we bring unparalleled expertise to your AI initiatives.",
                icon: <Shield className="h-8 w-8 text-accent-green" />,
              },
              {
                title: "End-to-End Solutions",
                description:
                  "From infrastructure design to model deployment, we provide comprehensive solutions that address all aspects of your AI journey.",
                icon: <Workflow className="h-8 w-8 text-accent-green" />,
              },
              {
                title: "Strategic Partnerships",
                description:
                  "Our partnerships with industry leaders like NVIDIA, HPE, and Lenovo ensure you get the best technology for your specific needs.",
                icon: <Users className="h-8 w-8 text-accent-green" />,
              },
              {
                title: "Proven Results",
                description:
                  "Our clients have achieved significant improvements in performance, efficiency, and ROI through our services.",
                icon: <BarChart className="h-8 w-8 text-accent-green" />,
              },
              {
                title: "Global Presence",
                description:
                  "With hubs across the globe, we provide local support with global expertise, ensuring responsive service wherever you are.",
                icon: <Network className="h-8 w-8 text-accent-green" />,
              },
              {
                title: "Innovation Focus",
                description:
                  "We continuously explore and implement cutting-edge technologies to keep your AI capabilities at the forefront of innovation.",
                icon: <Wand2 className="h-8 w-8 text-accent-green" />,
              },
            ].map((advantage, index) => (
              <Card key={index} className="bg-charcoal/50 border border-accent-green/20 hover-lift">
                <CardContent className="p-6">
                  <div className="mb-4">{advantage.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                  <p className="text-white/80">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#f4f4f4]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your AI Capabilities?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-charcoal/80">
            Let's discuss how our services can help you achieve your AI goals and overcome your challenges.
          </p>
          <Button asChild size="lg" className="bg-accent-green text-charcoal hover:bg-accent-green/90">
            <Link href="#contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
