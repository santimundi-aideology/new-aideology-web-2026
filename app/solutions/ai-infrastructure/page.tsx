import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import Footer from "@/components/footer"
import { Server, Database, Network, Cpu, Shield, ArrowRight, Zap, Globe, Settings, CheckCircle } from "lucide-react"
import { allPartners } from "@/lib/partners"

export default function AIInfrastructurePage() {
  const features = [
    {
      icon: <Server className="h-8 w-8 text-accent-green" />,
      title: "GPU Clusters",
      description:
        "High-performance GPU clusters optimized for AI workloads, featuring the latest NVIDIA hardware configurations.",
    },
    {
      icon: <Database className="h-8 w-8 text-accent-green" />,
      title: "Storage Fabrics",
      description:
        "High-throughput, low-latency storage solutions designed specifically for AI data pipelines and large datasets.",
    },
    {
      icon: <Network className="h-8 w-8 text-accent-green" />,
      title: "Network Architecture",
      description:
        "Optimized network infrastructure with high-bandwidth interconnects for distributed training and inference.",
    },
    {
      icon: <Cpu className="h-8 w-8 text-accent-green" />,
      title: "Compute Optimization",
      description: "Tailored hardware configurations to maximize performance for specific AI and HPC workloads.",
    },
    {
      icon: <Shield className="h-8 w-8 text-accent-green" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security measures and compliance frameworks for sensitive AI applications.",
    },
  ]

  const services = [
    {
      icon: <Server className="w-12 h-12 text-accent-green" />,
      title: "Professional Services",
      description: "Expert consultation and strategic planning for your AI infrastructure initiatives.",
      features: [
        "Infrastructure assessment and planning",
        "Technology selection and architecture design",
        "Implementation and deployment support",
        "Ongoing optimization and maintenance"
      ],
      link: "/services/ai-infrastructure/professional-services"
    },
    {
      icon: <Database className="w-12 h-12 text-accent-green" />,
      title: "AI Data Platform",
      description: "Comprehensive data platform solutions designed for AI workloads and analytics.",
      features: [
        "High-performance data storage systems",
        "Real-time data processing pipelines",
        "AI-optimized data architectures",
        "Scalable analytics infrastructure"
      ],
      link: "/services/ai-infrastructure/ai-data-platform"
    },
    {
      icon: <Settings className="w-12 h-12 text-accent-green" />,
      title: "MLOps",
      description: "End-to-end machine learning operations for automated model deployment and management.",
      features: [
        "Automated ML pipeline orchestration",
        "Model versioning and lifecycle management",
        "Continuous integration and deployment",
        "Performance monitoring and optimization"
      ],
      link: "/services/ai-infrastructure/mlops"
    },
    {
      icon: <Zap className="w-12 h-12 text-accent-green" />,
      title: "Accelerated Computing",
      description: "High-performance computing solutions optimized for AI and HPC workloads.",
      features: [
        "GPU cluster design and deployment",
        "Parallel computing architectures",
        "Performance optimization services",
        "Workload-specific acceleration"
      ],
      link: "/services/ai-infrastructure/accelerated-computing"
    },
    {
      icon: <Globe className="w-12 h-12 text-accent-green" />,
      title: "Virtualization",
      description: "Advanced virtualization solutions for efficient resource utilization and management.",
      features: [
        "Containerized AI workload deployment",
        "Resource orchestration and scaling",
        "Multi-tenant infrastructure solutions",
        "Virtual desktop infrastructure for AI"
      ],
      link: "/services/ai-infrastructure/virtualization"
    },
    {
      icon: <Shield className="w-12 h-12 text-accent-green" />,
      title: "Sustainable Computing",
      description: "Energy-efficient and environmentally conscious computing solutions.",
      features: [
        "Green data center design",
        "Energy optimization strategies",
        "Carbon footprint reduction",
        "Sustainable infrastructure practices"
      ],
      link: "/services/ai-infrastructure/sustainable-computing"
    }
  ]

  const relevantPartners = allPartners.filter(partner => 
    partner.categories.includes("infra-ai")
  ).sort((a, b) => a.name.localeCompare(b.name)); // Ensure filtered list is also sorted for display

  return (
    <main className="min-h-screen bg-[#f4f4f4] text-charcoal">

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative bg-gradient-to-br from-charcoal via-charcoal to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="inline-flex items-center bg-accent-green/20 text-accent-green px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Server className="w-4 h-4 mr-2" />
                Enterprise AI Infrastructure
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in-up" style={{ animationDelay: '200ms' }}>AI Infrastructure</h1>
              <p className="text-xl mb-8 text-gray-300 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                From GPU clusters to storage fabrics, we design and deploy turnkey HPC-AI stacks tailored to your
                specific workloads and requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <Button size="lg" className="bg-accent-green text-charcoal hover:bg-white hover:text-charcoal font-semibold px-8 py-4 rounded-2xl hover:scale-105 transition-all duration-300" asChild>
                  <Link href="/book-discovery-call?type=consultation">
                    Schedule a consultation
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
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg animate-fade-in-up hover:scale-105 transition-all duration-300" style={{ animationDelay: '500ms' }}>
              <div className="absolute inset-0 bg-accent-green/10 rounded-3xl blur-3xl"></div>
              <Image src="/data-center.webp" alt="AI Infrastructure" fill className="object-cover relative z-10 rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Comprehensive Infrastructure Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Discover our full spectrum of AI infrastructure services designed to accelerate your AI initiatives.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-0 shadow-lg animate-fade-in-up" 
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

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>Key Infrastructure Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border border-accent-green/20 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-charcoal/70">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#f4f4f4]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>Our Infrastructure Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: "01", title: "Assessment", description: "We analyze your workloads and requirements" },
              { number: "02", title: "Design", description: "Custom architecture tailored to your needs" },
              { number: "03", title: "Deployment", description: "Expert installation and configuration" },
              { number: "04", title: "Management", description: "Ongoing support and optimization" },
            ].map((step, index) => (
              <div 
                key={index} 
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <div className="text-6xl font-bold text-accent-green">{step.number}</div>
                <h3 className="text-xl font-bold mt-2">{step.title}</h3>
                <p className="text-charcoal/70 mt-2">{step.description}</p>
                {index < 3 && <ArrowRight className="hidden md:block absolute -right-3 top-8 text-accent-green/50" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* G42 Case Study Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div 
              className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg order-last lg:order-first animate-fade-in-up hover:scale-105 transition-all duration-300"
              style={{ animationDelay: '200ms' }}
            >
              <Image 
                src="/g42-data-center.webp" 
                alt="National AI Supercomputing Infrastructure - G42 SuperPOD"
                fill 
                className="object-cover" 
              />
            </div>
            <div className="order-first lg:order-last animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <h2 className="text-3xl font-bold mb-6 text-charcoal">Case Study: G42 AI Supercomputing Infrastructure</h2>
              <p className="text-lg mb-6 text-charcoal/80">
                AIdeology deployed an NVIDIA DGX SuperPOD for G42, establishing the #1 ranked supercomputer in the Gulf region and achieving 25th position globally on the TOP500 list.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "159 NVIDIA DGX servers forming the SuperPOD",
                  "1,272 cutting-edge NVIDIA H100 GPUs",
                  "TOP500 #25 global, #9 EMEA, #1 Gulf region ranking"
                ].map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-center text-charcoal/80 animate-fade-in-up"
                    style={{ animationDelay: `${300 + index * 100}ms` }}
                  >
                    <svg className="w-5 h-5 mr-3 text-accent-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partners Section - Ensure this section remains if needed, or remove if G42 case study replaces general partner display here */}
      <section className="py-20 bg-[#f4f4f4]"> {/* Changed background for visual separation */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>Our Infrastructure Partners</h2>
          {relevantPartners.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-center"> {/* Adjusted columns for better fit if many partners */}
              {relevantPartners.map((partner, index) => (
                <Card
                  key={partner.name} // Use partner name or unique ID for key
                  className="bg-white border border-accent-green/10 rounded-md p-6 flex items-center justify-center w-full h-32 group transition-all duration-300 hover:border-accent-green/50 hover:shadow-lg hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${200 + index * 100}ms` }}
                >
                  <Link href={partner.website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={140} // Slightly reduced max size for consistency
                      height={70}
                      className="h-auto w-auto max-h-[70px] max-w-[140px] object-contain opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110"
                    />
                  </Link>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 animate-fade-in-up" style={{ animationDelay: '200ms' }}>No relevant partners to display at this time.</p>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white"> {/* Changed background for visual separation */}
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>Ready to transform your AI infrastructure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-charcoal/80 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Let's discuss how our tailored infrastructure solutions can accelerate your AI initiatives.
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Button asChild size="lg" className="bg-accent-green text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 hover:scale-105">
              <Link href="/book-discovery-call">Book a discovery call</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
