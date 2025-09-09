import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import Footer from "@/components/footer"
import { CuboidIcon as Cube, Layers, Workflow, Zap, Wand2, ArrowRight, Eye, Globe, CheckCircle, ChevronRight } from "lucide-react"
import { allPartners } from "@/lib/partners"

export default function ThreeDimensionalAIPage() {
  const breadcrumbPath = [
    { name: "Solutions", href: "/#solutions" },
    { name: "Design & Simulation" }
  ];

  const capabilities = [
    {
      icon: <Cube className="h-8 w-8 text-accent-green" />,
      title: "Digital Twins",
      description:
        "Create virtual replicas of physical assets, processes, and systems for simulation and optimization.",
    },
    {
      icon: <Layers className="h-8 w-8 text-accent-green" />,
      title: "3D Rendering",
      description:
        "High-fidelity rendering solutions powered by AI for realistic visualization and real-time interaction.",
    },
    {
      icon: <Workflow className="h-8 w-8 text-accent-green" />,
      title: "Simulation Pipelines",
      description:
        "End-to-end simulation workflows for testing, training, and validating AI models in virtual environments.",
    },
    {
      icon: <Zap className="h-8 w-8 text-accent-green" />,
      title: "Real-time Processing",
      description: "Low-latency processing of 3D data streams for interactive applications and immersive experiences.",
    },
    {
      icon: <Wand2 className="h-8 w-8 text-accent-green" />,
      title: "Generative 3D",
      description:
        "AI-powered generation of 3D assets, environments, and animations from simple prompts or references.",
    },
  ]

  const services = [
    {
      icon: <Eye className="w-12 h-12 text-accent-green" />,
      title: "Design Visualization",
      description: "Advanced 3D visualization and rendering solutions for design and architecture.",
      features: [
        "Photorealistic 3D rendering",
        "Real-time visualization platforms",
        "Interactive design environments",
        "AR/VR visualization experiences"
      ],
      link: "/solutions/design-simulation/design-visualization"
    },
    {
      icon: <Cube className="w-12 h-12 text-accent-green" />,
      title: "Robotic Simulation",
      description: "High-fidelity robotic simulation environments for development and testing.",
      features: [
        "Physics-accurate robotic modeling",
        "Multi-robot simulation environments",
        "Sensor simulation and validation",
        "Automated testing frameworks"
      ],
      link: "/solutions/design-simulation/robotic-simulation"
    },
    {
      icon: <Globe className="w-12 h-12 text-accent-green" />,
      title: "Extended Reality",
      description: "Immersive XR solutions combining AR, VR, and mixed reality technologies.",
      features: [
        "Virtual reality applications",
        "Augmented reality experiences",
        "Mixed reality environments",
        "Cross-platform XR development"
      ],
      link: "/solutions/design-simulation/extended-reality"
    },
    {
      icon: <Layers className="w-12 h-12 text-accent-green" />,
      title: "Digital Twins",
      description: "Comprehensive digital twin solutions for real-time monitoring and optimization.",
      features: [
        "Real-time data synchronization",
        "Predictive analytics integration",
        "IoT sensor integration",
        "Performance optimization tools"
      ],
      link: "/solutions/design-simulation/digital-twins"
    }
  ]

  const relevantPartners = allPartners.filter(partner => 
    partner.categories.includes("design-simulation")
  ).sort((a, b) => a.name.localeCompare(b.name));

  return (
    <main className="min-h-screen text-charcoal">
      {/* Breadcrumb Navigation */}
      <div className="bg-white pt-24 pb-6">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-500 flex items-center hidden md:flex" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            {breadcrumbPath.map((item, index) => (
              <div key={item.name} className="flex items-center">
                <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
                {item.href ? (
                  <Link href={item.href} className="hover:text-gray-700">
                    {item.name}
                  </Link>
                ) : (
                  <span className="font-medium text-gray-700">{item.name}</span>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-24 md:py-32 relative bg-gradient-to-br from-charcoal via-charcoal to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="inline-flex items-center bg-accent-green/20 text-accent-green px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Cube className="w-4 h-4 mr-2" />
                Advanced 3D Technologies
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in-up" style={{ animationDelay: '200ms' }}>Design & Simulation</h1>
              <p className="text-xl mb-8 text-gray-300 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                End-to-end metaverse & digital-twins implementation, from rendering to simulation, powered by
                cutting-edge AI technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <Button size="lg" className="bg-accent-green text-charcoal hover:bg-white hover:text-charcoal font-semibold px-8 py-4 rounded-2xl hover:scale-105 transition-all duration-300" asChild>
                  <Link href="#contact">
                    Explore Design & Simulation possibilities
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-accent-green text-accent-green hover:bg-accent-green hover:text-charcoal px-8 py-4 rounded-2xl hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link href="#services">
                    Explore Services
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg shadow-lg animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <div className="absolute inset-0 bg-accent-green/10 rounded-3xl blur-3xl"></div>
              <Image src="/3d-ai.webp" alt="Design & Simulation Solutions" fill className="object-cover relative z-10 rounded-2xl shadow-2xl transition-transform duration-300 ease-out hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Comprehensive Design & Simulation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Discover our full spectrum of Design & Simulation solutions from design visualization to robotic simulation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg animate-fade-in-up" 
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-accent-green/10 rounded-xl group-hover:bg-accent-green/20 transition-colors">
                      {service.icon}
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-accent-green transition-colors" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-charcoal group-hover:text-accent-green transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-accent-green mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    className="w-full mt-4 bg-charcoal hover:bg-accent-green text-white hover:text-charcoal transition-all duration-300"
                  >
                    <Link href={service.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>Design & Simulation Capabilities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card 
                key={index} 
                className="border border-accent-green/20 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
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
          <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>Design & Simulation Use Cases</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Industrial Digital Twins",
                description:
                  "Virtual replicas of industrial equipment and processes for predictive maintenance and optimization.",
                image: "/industrial-digital-twin.webp",
              },
              {
                title: "Architectural Visualization",
                description:
                  "AI-enhanced 3D visualization for architectural projects with real-time rendering and interaction.",
                image: "/architectural-visualization-ai.webp",
              },
              {
                title: "Virtual Production",
                description:
                  "Real-time 3D environments for film and media production, powered by AI rendering technologies.",
                image: "/virtual-production-studio.webp",
              },
              {
                title: "Immersive Training",
                description: "3D simulations for training and education with AI-driven scenarios and feedback systems.",
                image: "/immersive-training.webp",
              },
            ].map((useCase, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover-lift animate-fade-in-up flex flex-col min-h-[500px]"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <div className="relative h-[320px]">
                  <Image src={useCase.image || "/placeholder.svg"} alt={useCase.title} fill className="object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
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
          <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>Our Design & Simulation Technology Stack</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { title: "Hardware", items: ["NVIDIA RTX and A-series GPUs", "High-performance compute clusters", "Specialized rendering hardware", "Low-latency networking infrastructure"] },
              { title: "Software", items: ["NVIDIA Omniverse platform", "Custom rendering engines", "Physics simulation frameworks", "Real-time collaboration tools"] },
              { title: "AI Models", items: ["Generative 3D neural networks", "Physics-informed ML models", "Real-time optimization algorithms", "Custom diffusion models for 3D"] }
            ].map((techCategory, index) => (
              <Card 
                key={techCategory.title} 
                className="bg-charcoal/50 border border-accent-green/20 text-white animate-fade-in-up"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-accent-green">{techCategory.title}</h3>
                  <ul className="space-y-2">
                    {techCategory.items.map((item, itemIndex) => (
                      <li 
                        key={itemIndex} 
                        className="flex items-center animate-fade-in-up"
                        style={{ animationDelay: `${300 + index * 100 + itemIndex * 50}ms` }}
                      >
                        <ArrowRight className="h-4 w-4 mr-2 text-accent-green" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>Our Design & Simulation Partners</h2>
          {relevantPartners.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8 justify-items-center">
              {relevantPartners.map((partner, index) => (
                <Link
                  key={partner.name}
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border-2 border-gray-200 p-3 md:p-6 rounded-lg shadow-lg flex items-center justify-center w-full h-24 md:h-32 hover:border-accent-green/50 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in-up group"
                  style={{ animationDelay: `${200 + index * 100}ms` }}
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className={`h-auto w-auto object-contain opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ${
                      partner.name === "Hugging Face" 
                        ? "max-h-[60px] max-w-[120px] md:max-h-[120px] md:max-w-[240px]" 
                        : "max-h-[48px] max-w-[96px] md:max-h-[84px] md:max-w-[168px]"
                    }`}
                  />
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 animate-fade-in-up" style={{ animationDelay: '200ms' }}>No relevant partners to display at this time.</p>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#f4f4f4]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>Ready to bring your 3D vision to life?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-charcoal/80 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Let's discuss how our Design & Simulation solutions can transform your ideas into immersive digital experiences.
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Button asChild size="lg" className="bg-accent-green text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 hover:scale-105">
              <Link href="/book-discovery-call?type=consultation">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
