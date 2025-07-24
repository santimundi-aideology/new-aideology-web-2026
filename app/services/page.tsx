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

  // Define services by category
  const servicesData = {
    "ai-infrastructure": [
      {
        title: "Accelerated Computing",
        description:
          "High-performance GPU computing solutions for the most demanding AI workloads. From NVIDIA DGX systems to custom HPC clusters, we design and deploy infrastructure that accelerates your AI development and training processes.",
        features: [
          "NVIDIA DGX & HGX system integration",
          "Custom GPU cluster design and deployment",
          "Performance optimization and tuning",
          "Multi-node scaling for large workloads",
        ],
        image: "/services/accelerated_computing.webp",
      },
      {
        title: "AI Data Platform",
        description:
          "Comprehensive data infrastructure that powers your AI initiatives. We build robust, scalable platforms that handle massive datasets, provide real-time processing capabilities, and ensure your data is ready for AI consumption.",
        features: [
          "High-performance storage solutions (DDN, NetApp, VAST)",
          "Real-time data processing pipelines",
          "Data governance and security frameworks",
          "Multi-cloud and hybrid architectures",
        ],
        image: "/services/ai_data_platform.webp",
      },
      {
        title: "MLOps & Deployment",
        description:
          "Streamline your machine learning operations with automated pipelines, model versioning, and production-ready deployment strategies. Ensure your AI models transition seamlessly from development to production.",
        features: [
          "Automated ML pipeline development",
          "Model versioning and governance",
          "Container orchestration with Kubernetes",
          "Monitoring and performance optimization",
        ],
        image: "/services/mlops.webp",
      },
      {
        title: "Virtualization & Resource Management",
        description:
          "Maximize your GPU utilization and enable multi-tenant AI environments. Our virtualization solutions allow efficient sharing of expensive GPU resources across teams and projects.",
        features: [
          "GPU virtualization with NVIDIA vGPU",
          "Resource scheduling and allocation",
          "Multi-tenant security and isolation",
          "Usage monitoring and optimization",
        ],
        image: "/services/virtualization.webp",
      },
    ],
    "3d-ai": [
      {
        title: "Digital Twins",
        description:
          "Create real-time digital replicas of physical systems, processes, and environments. Our digital twin solutions provide unprecedented visibility and predictive capabilities for manufacturing, healthcare, and smart city applications.",
        features: [
          "IoT sensor integration and data fusion",
          "Real-time simulation and modeling",
          "Predictive analytics and optimization",
          "3D visualization and interaction interfaces",
        ],
        image: "/services/digital_twin.webp",
      },
      {
        title: "Design Visualization",
        description:
          "Transform your design and engineering workflows with photorealistic rendering, virtual prototyping, and collaborative 3D environments. Accelerate product development and reduce time-to-market.",
        features: [
          "Real-time ray tracing with NVIDIA RTX",
          "Virtual reality design reviews",
          "Collaborative 3D workspaces",
          "Photorealistic rendering and animation",
        ],
        image: "/services/design_visualization.webp",
      },
      {
        title: "Extended Reality (XR)",
        description:
          "Immersive training, collaboration, and visualization solutions that blend virtual and augmented reality. Perfect for employee training, remote collaboration, and customer engagement.",
        features: [
          "VR/AR application development",
          "Immersive training environments",
          "Real-time collaboration platforms",
          "Mixed reality industrial applications",
        ],
        image: "/services/extended_reality.webp",
      },
      {
        title: "Robotic Simulation",
        description:
          "Advanced robotics simulation powered by NVIDIA Isaac Sim. Test, train, and optimize robotic systems in photorealistic virtual environments before real-world deployment.",
        features: [
          "Physics-accurate robot simulation",
          "AI behavior training and testing",
          "Virtual factory and warehouse environments",
          "Integration with real robotic systems",
        ],
        image: "/services/robotic_simulation.webp",
      },
    ],
    "ai-consulting": [
      {
        title: "AI Agents",
        description:
          "Intelligent autonomous agents that can understand, reason, and act on your behalf. From customer service chatbots to complex business process automation, we build AI agents that enhance productivity and user experience.",
        features: [
          "Natural language processing and understanding",
          "Multi-modal interaction capabilities",
          "Integration with existing business systems",
          "Continuous learning and improvement",
        ],
        image: "/services/ai_agent.webp",
      },
      {
        title: "Generative AI",
        description:
          "Harness the power of large language models and generative AI to create content, code, and insights. From document generation to creative applications, we help you leverage cutting-edge generative AI technologies.",
        features: [
          "Custom LLM fine-tuning and deployment",
          "Content generation and automation",
          "Code generation and development assistance",
          "Creative AI applications for media and design",
        ],
        image: "/services/gen_ai.webp",
      },
      {
        title: "Conversational AI",
        description:
          "Natural, intelligent conversations between humans and machines. Our conversational AI solutions provide sophisticated dialog management, context understanding, and multi-language support for customer service and internal operations.",
        features: [
          "Multi-language speech recognition and synthesis",
          "Context-aware dialog management",
          "Integration with CRM and helpdesk systems",
          "Voice and text-based interfaces",
        ],
        image: "/services/conversational_ai.webp",
      },
      {
        title: "Machine Learning Strategy",
        description:
          "Strategic consulting to identify, prioritize, and implement machine learning opportunities within your organization. We help you build ML capabilities that align with business objectives and deliver measurable ROI.",
        features: [
          "ML maturity assessment and roadmapping",
          "Use case identification and prioritization",
          "Team capability building and training",
          "Technology selection and architecture design",
        ],
        image: "/services/ml_strategy.webp",
      },
    ],
  }

  return (
    <main className="min-h-screen bg-[#f4f4f4] text-charcoal">
      {/* Hero Section */}
      <section className="pt-20 pb-12 lg:pb-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-charcoal">Our Services</h1>
          <p className="text-lg lg:text-xl text-charcoal/70 max-w-3xl">
            Comprehensive AI solutions tailored to your business needs, from infrastructure design to strategic
            consulting.
          </p>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-12 lg:py-16 bg-white border-b border-accent-green/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {serviceCategories.map((category) => (
              <Card key={category.id} className="bg-[#f4f4f4] border border-accent-green/20 hover-lift">
                <CardHeader className="pb-4">
                  <div className="mb-4">{category.icon}</div>
                  <CardTitle className="text-xl lg:text-2xl">{category.name}</CardTitle>
                  <CardDescription className="text-charcoal/70 text-sm lg:text-base">{category.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link
                    href={`#${category.id}`}
                    className="text-electric-green hover:text-electric-green/80 flex items-center group font-medium text-sm lg:text-base"
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
      <section className="py-12 lg:py-20 bg-[#f4f4f4]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 lg:mb-12 text-center">Explore Our Services</h2>

          <Tabs defaultValue="ai-infrastructure" className="w-full">
            <TabsList className="grid grid-cols-1 md:grid-cols-3 w-full max-w-3xl mx-auto mb-8 lg:mb-12 bg-white/80 h-auto">
              {serviceCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  id={category.id}
                  className="text-sm md:text-base data-[state=active]:bg-accent-green data-[state=active]:text-charcoal p-3 lg:p-4"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(servicesData).map(([categoryId, categoryServices]) => (
              <TabsContent key={categoryId} value={categoryId} className="mt-6">
                <div className="space-y-12 lg:space-y-16">
                  {categoryServices.map((service, index) => (
                    <div
                      key={index}
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                    >
                      <div className={`relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                        <Image
                          src={service.image || `/placeholder.svg?height=600&width=800&query=${service.title}`}
                          alt={service.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                        />
                      </div>
                      
                      <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                        <h3 className="text-xl md:text-2xl font-bold mb-3 lg:mb-4">{service.title}</h3>
                        <p className="text-charcoal/80 mb-4 lg:mb-6 text-sm lg:text-base leading-relaxed">{service.description}</p>
                        <h4 className="font-semibold text-electric-green mb-2 lg:mb-3 text-sm lg:text-base">Key Features:</h4>
                        <ul className="space-y-2 mb-4 lg:mb-6">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="h-4 w-4 lg:h-5 lg:w-5 text-accent-green mr-2 lg:mr-3 flex-shrink-0 mt-0.5" />
                              <span className="text-sm lg:text-base">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button 
                          asChild 
                          className="w-full sm:w-auto bg-accent-green text-charcoal hover:bg-charcoal hover:text-white hover:scale-105 transition-all duration-300 ease-in-out px-6 lg:px-8 py-2 lg:py-3"
                        >
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
      <section className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 lg:mb-12 text-center">Our Service Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We begin with a thorough assessment of your needs, challenges, and objectives to understand your unique requirements.",
                icon: <Lightbulb className="h-6 w-6 lg:h-8 lg:w-8 text-accent-green" />,
              },
              {
                step: "02",
                title: "Design",
                description:
                  "Our experts design a tailored solution that addresses your specific challenges and aligns with your business goals.",
                icon: <BrainCircuit className="h-6 w-6 lg:h-8 lg:w-8 text-accent-green" />,
              },
              {
                step: "03",
                title: "Implementation",
                description:
                  "We deploy your solution with minimal disruption, ensuring seamless integration with your existing systems and workflows.",
                icon: <GitBranch className="h-6 w-6 lg:h-8 lg:w-8 text-accent-green" />,
              },
              {
                step: "04",
                title: "Optimization",
                description:
                  "We continuously monitor and refine your solution to ensure optimal performance and adapt to changing requirements.",
                icon: <BarChart className="h-6 w-6 lg:h-8 lg:w-8 text-accent-green" />,
              },
            ].map((step, index) => (
              <Card key={index} className="bg-white border border-gray-200 hover-lift text-center">
                <CardContent className="p-4 lg:p-6">
                  <div className="text-3xl lg:text-4xl font-bold text-accent-green mb-3 lg:mb-4">{step.step}</div>
                  <div className="mb-3 lg:mb-4 flex justify-center">{step.icon}</div>
                  <h3 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 lg:py-20 bg-charcoal text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 lg:mb-12 text-center">Why Choose AIdeology?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Elite Expertise",
                description:
                  "As an NVIDIA Elite Solution Provider with certified architects, we bring unparalleled expertise to your AI initiatives.",
                icon: <Shield className="h-6 w-6 lg:h-8 lg:w-8 text-accent-green" />,
              },
              {
                title: "End-to-End Solutions",
                description:
                  "From infrastructure design to model deployment, we provide comprehensive solutions that address all aspects of your AI journey.",
                icon: <Workflow className="h-6 w-6 lg:h-8 lg:w-8 text-accent-green" />,
              },
              {
                title: "Strategic Partnerships",
                description:
                  "Our partnerships with industry leaders like NVIDIA, HPE, and Lenovo ensure you get the best technology for your specific needs.",
                icon: <Users className="h-6 w-6 lg:h-8 lg:w-8 text-accent-green" />,
              },
              {
                title: "Proven Results",
                description:
                  "Our clients have achieved significant improvements in performance, efficiency, and ROI through our services.",
                icon: <BarChart className="h-6 w-6 lg:h-8 lg:w-8 text-accent-green" />,
              },
              {
                title: "Global Presence",
                description:
                  "With hubs across the globe, we provide local support with global expertise, ensuring responsive service wherever you are.",
                icon: <Network className="h-6 w-6 lg:h-8 lg:w-8 text-accent-green" />,
              },
              {
                title: "Innovation Focus",
                description:
                  "We continuously explore and implement cutting-edge technologies to keep your AI capabilities at the forefront of innovation.",
                icon: <Wand2 className="h-6 w-6 lg:h-8 lg:w-8 text-accent-green" />,
              },
            ].map((advantage, index) => (
              <Card key={index} className="bg-charcoal/50 border border-accent-green/20 hover-lift">
                <CardContent className="p-4 lg:p-6">
                  <div className="mb-3 lg:mb-4">{advantage.icon}</div>
                  <h3 className="text-lg lg:text-xl font-bold mb-2 lg:mb-3">{advantage.title}</h3>
                  <p className="text-white/80 text-sm lg:text-base leading-relaxed">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16 bg-[#f4f4f4]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 lg:mb-6">Ready to Transform Your AI Capabilities?</h2>
          <p className="text-lg lg:text-xl mb-6 lg:mb-8 max-w-2xl mx-auto text-charcoal/80 leading-relaxed">
            Let's discuss how our services can help you achieve your AI goals and overcome your challenges.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="w-full sm:w-auto bg-accent-green text-charcoal hover:bg-charcoal hover:text-white hover:scale-105 transition-all duration-300 ease-in-out px-6 lg:px-8 py-3"
          >
            <Link href="/book-discovery-call?type=consultation">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
