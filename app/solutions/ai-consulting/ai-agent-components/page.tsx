"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AIAgentComponentsPage() {
  const [activeComponent, setActiveComponent] = useState(1)
  const breadcrumbPath = [
    { name: "Solutions", href: "/#solutions" },
    { name: "AI Consulting", href: "/solutions/ai-consulting" },
    { name: "AI Agent Components" }
  ];
  const mainContainerRef = useRef<HTMLDivElement>(null)
  const componentsRef = useRef<HTMLDivElement[]>([])
  const diagramRef = useRef<HTMLDivElement>(null)

  // Enhanced component data with deliverables
  const components = [
    {
      id: 1,
      title: "User Interface",
      description:
        "The user interface provides an intuitive front-end for customers to interact with the AI agent through various channels including web, mobile, and voice interfaces.",
      detailedDescription:
        "The User Interface layer is the primary touchpoint between users and your AI system. It determines how users interact with your AI agent and shapes their overall experience. From conversational interfaces to immersive 3D avatars, the right UI can dramatically increase engagement and adoption of your AI solution. Our implementations focus on creating intuitive, responsive, and accessible interfaces that align with your brand identity while providing seamless AI interactions.",
      image: "/ai-components/user-interface.webp",
      deliverables: [
        {
          name: "Real Human Avatar",
          description:
            "A photorealistic, animated avatar driven by AI to represent a live human in customer interactions.",
        },
        {
          name: "Mobile App",
          description: "Native iOS/Android app embedding your AI agent for on-the-go user engagement.",
        },
        {
          name: "Website Popup Agent",
          description: "Lightweight chat widget that pops up on your website to greet and assist visitors.",
        },
        {
          name: "Voice Cloning",
          description:
            "AI-powered cloning of a natural-sounding voice from sample recordings for TTS or conversational uses.",
        },
        {
          name: "Hologram",
          description: "Projection-based, interactive 3D hologram interface that users can engage with in real space.",
        },
      ],
    },
    {
      id: 2,
      title: "Reasoning Layer",
      description:
        "The reasoning layer enables smart selection of data and LLM options based on the input prompt, functioning as an intermediary coordinating interactions between LLMs and customer data.",
      detailedDescription:
        "The Reasoning Layer is the 'brain' of your AI agent, responsible for understanding user requests, determining intent, and orchestrating the appropriate actions. This layer makes critical decisions about which data sources to query, which models to use, and how to structure the final response. Our reasoning implementations can range from simple prompt-based systems to sophisticated multi-agent architectures that can handle complex, multi-step tasks while maintaining context across interactions.",
      image: "/ai-components/reasoning-layer.webp",
      deliverables: [
        {
          name: "Enterprise Reasoning",
          description:
            "A scalable, centralized reasoning engine with governance and context management for the organization.",
        },
        {
          name: "Vertical Business Reasoning",
          description: "Pre-built logic modules tailored to specific industries (finance, healthcare, retail, etc.).",
        },
        {
          name: "Custom Reasoning Agents",
          description: 'Fully bespoke "brains" that encode your unique workflows, policies, and decision-trees.',
        },
      ],
    },
    {
      id: 3,
      title: "Governance & Security",
      description:
        "Real-time monitoring, risk assessment, data privacy protection, and bias mitigation to maintain transparency and accountability throughout the AI system.",
      detailedDescription:
        "As AI systems become more integrated into critical business processes, governance and security become paramount. This layer ensures your AI operates within defined ethical boundaries, complies with relevant regulations, and protects sensitive data. Our governance implementations include comprehensive monitoring systems that track AI behavior, detect anomalies, and provide audit trails for all AI actions. We also implement robust security measures to protect against prompt injection, data leakage, and other AI-specific vulnerabilities.",
      image: "/ai-components/governance-security.webp",
      deliverables: [
        {
          name: "AI Observability",
          description: "End-to-end monitoring, logging, and dashboarding of AI model performance, usage and drift.",
        },
        {
          name: "License Software",
          description:
            "Legal/compliance review and licensing of any third-party or open-source AI software components.",
        },
        {
          name: "AI Observability Layer",
          description:
            "Technologies to analyze and create reports of the usage, performance and accuracy of the models and all its components.",
        },
      ],
    },
    {
      id: 4,
      title: "Data Processing / RAG",
      description:
        "The AI Agent, with access to data, acquires context and information through Retrieval Augmented Generation to provide accurate and relevant responses.",
      detailedDescription:
        "The Data Processing layer is where your AI connects with your organization's knowledge and data. Through Retrieval Augmented Generation (RAG), your AI can access, process, and leverage information from various sources to provide accurate, contextual responses. Our RAG implementations include sophisticated document processing pipelines, vector database integrations, and custom retrieval strategies optimized for your specific data types and query patterns. This ensures your AI provides responses grounded in your organization's actual data rather than generic or potentially hallucinated information.",
      image: "/ai-components/data-processing.webp",
      deliverables: [
        {
          name: "Supervised Doc Ingestion",
          description:
            "Manual-guided ingestion and indexing of up to 500 pages (or equivalent data) for retrieval and QA.",
        },
        {
          name: "Database Connection",
          description:
            "Include Data base & entities analysis, ingestion, connection, integration with AI and QA testing for SQL and NoSQL databases.",
        },
        {
          name: "Vectorial Database",
          description:
            "Include design, deploy, connection, integration with data sources and AI using technologies like Qdrant, Weka, Pinecone, etc.",
        },
        {
          name: "BI Connection",
          description:
            "Include BI & entities analysis, ingestion, connection, integration with AI for platforms like Power BI, Tableau, etc.",
        },
      ],
    },
    {
      id: 5,
      title: "Large Language Model",
      description:
        "An LLM model processes the data and prompt, using its capabilities to interpret context and generate the most accurate and relevant response, ensuring it aligns with the user's intent.",
      detailedDescription:
        "The Large Language Model (LLM) is the core AI engine that powers your agent's understanding and generation capabilities. Selecting the right model—or combination of models—is crucial for balancing performance, cost, and capabilities. Our LLM implementations include comprehensive model evaluation, fine-tuning on your domain-specific data, and optimization for production deployment. We work with all major LLM providers and can help you navigate the rapidly evolving landscape of foundation models to find the optimal solution for your specific use case.",
      image: "/ai-components/llm.webp",
      deliverables: [
        {
          name: "Model Selection & Benchmark",
          description:
            "Evaluate candidate LLMs (OpenAI, Llama, Anthropic, etc.) on latency, accuracy, cost, and domain fit.",
        },
        {
          name: "Fine-tuning & Custom Training",
          description:
            "Tailor an open or foundation model on your proprietary data, including hyperparameter tuning and validation.",
        },
        {
          name: "Prompt Engineering & Testing",
          description:
            "Craft, test and iterate prompt templates, few-shot examples and guardrails for reliable output.",
        },
      ],
    },
    {
      id: 6,
      title: "Automations",
      description:
        "Autonomously execute tasks by integrating with apps, systems, and workflows to perform actions based on user requests and AI understanding.",
      detailedDescription:
        "The Automations layer transforms your AI from a conversational tool into an action-oriented system that can perform real-world tasks. By connecting your AI agent to your business systems and workflows, it can execute actions on behalf of users or trigger automated processes based on specific conditions. Our automation implementations range from simple API integrations to complex workflow orchestration systems that can coordinate multi-step business processes across multiple systems. This capability is what elevates AI agents from information providers to true digital assistants that can get work done.",
      image: "/ai-components/automations.webp",
      deliverables: [
        {
          name: "Workflow Orchestration",
          description: "Design and configure end-to-end workflows (e.g. Airflow, Prefect) to sequence AI tasks.",
        },
        {
          name: "Event-Driven Automation",
          description: "Trigger AI pipelines in response to webhooks, message queues or file drops.",
        },
        {
          name: "Scheduled Job Setup",
          description: "Set up cron-style or calendar-based jobs for periodic data refresh, training or reporting.",
        },
        {
          name: "Error Handling & Retry Logic",
          description: "Build robust retry, dead-letter queues and fallback paths to handle failures gracefully.",
        },
      ],
    },
    {
      id: 7,
      title: "Response Format",
      description:
        "Delivers responses in various formats including text-based NLP, audio and speech, reports and templates, and plots and graphics to suit different user needs.",
      detailedDescription:
        "The Response Format layer determines how your AI communicates its outputs to users. While simple text responses are sufficient for many use cases, more sophisticated formats can significantly enhance the user experience and effectiveness of your AI solution. Our response format implementations include multimodal outputs ranging from voice synthesis and audio generation to dynamic data visualizations and interactive 3D elements. We ensure your AI can communicate in the most effective format for each specific use case and user preference.",
      image: "/ai-components/response-format.webp",
      deliverables: [
        {
          name: "S2T, T2S",
          description: "Voice interface for AI and users input and output using standard S2T cloud services.",
        },
        {
          name: "Custom Character 3D",
          description: "Fully modeled and textured 3D character tailored to your brand, ready for real-time rendering.",
        },
      ],
    },
    {
      id: 8,
      title: "Hosting",
      description:
        "Flexible deployment options including cloud (AWS, Azure, Google Cloud), on-premise solutions (HPE, NVIDIA), and hybrid cloud configurations to meet specific security and performance requirements.",
      detailedDescription:
        "The Hosting layer provides the infrastructure foundation for your AI system. The right hosting strategy balances performance, cost, security, and compliance requirements. Our hosting implementations include cloud-based deployments on major providers, on-premises solutions for organizations with strict data sovereignty requirements, and hybrid approaches that combine the benefits of both. We handle all aspects of infrastructure setup, including high-availability configurations, auto-scaling, and performance optimization specifically for AI workloads.",
      image: "/ai-components/hosting.webp",
      deliverables: [
        {
          name: "Deploy in existing client Cloud",
          description: "Azure, GCP, AWS. Include deploy of two environments (pro and PRE) and end2end testing.",
        },
        {
          name: "Deploy in Client On-Prem Server",
          description: "Include configuration, deploy of two environments (pro and PRE) and end2end testing.",
        },
        {
          name: "Deploy in new client Cloud",
          description:
            "Azure, GCP, AWS. Include cloud configuration, deploy of two environments (pro and PRE) and end2end testing.",
        },
        {
          name: "Hybrid Deployment",
          description: "Combine cloud and on-premises infrastructure with secure connectivity, data synchronization, and unified management across both environments.",
        },
      ],
    },
  ]

  // Integrations component (separate from the main 8 components)
  const integrationsComponent = {
    title: "Integrations",
    description:
      "Connect your AI agent with third-party applications, services, and custom systems to extend functionality and access data.",
    detailedDescription:
      "The Integrations layer connects your AI agent to the broader ecosystem of applications and services your organization uses. Through these integrations, your AI can access data, trigger actions, and coordinate with existing systems to deliver a seamless experience. Our integration implementations include pre-built connectors for popular enterprise applications, custom adapters for proprietary systems, and API-based integrations that can connect virtually any service with an accessible interface.",
    image: "/ai-components/integrations.webp",
    deliverables: [
      {
        name: "3rd Party Apps / services integration",
        description: "Include integration analysis, connection, deploy and QA testing with supported integrations.",
      },
      {
        name: "Custom Apps / services integration",
        description:
          "Include integration analysis, connection, deploy and QA testing with proprietary apps or unsupported 3rd party Apps.",
      },
      {
        name: "API Connection (per API)",
        description: "Include API analysis, connection, integration with AI and QA testing for standard REST APIs.",
      },
    ],
  }

  // Setup scroll animations
  useEffect(() => {
    if (typeof window === "undefined") return

    // Animate the main diagram on page load
    if (diagramRef.current) {
      gsap.fromTo(diagramRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
    }

    // Create scroll-triggered animations for each component section
    componentsRef.current.forEach((section, index) => {
      if (!section) return

      // Create a timeline for each section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          onEnter: () => setActiveComponent(index + 1),
          onEnterBack: () => setActiveComponent(index + 1),
          markers: false,
        },
      })

      // Animate the component card
      tl.fromTo(section.querySelector(".component-title"), { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.6 })

      // Animate the component description
      tl.fromTo(
        section.querySelector(".component-description"),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4",
      )

      // Animate the component image
      tl.fromTo(
        section.querySelector(".component-image"),
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6 },
        "-=0.4",
      )

      // Animate the detailed description
      tl.fromTo(
        section.querySelector(".component-detailed-description"),
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.6 },
        "-=0.4",
      )

      // Animate the deliverables cards with stagger
      tl.fromTo(
        section.querySelectorAll(".deliverable-card"),
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: "power1.out",
        },
        "-=0.3",
      )
    })

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  // Function to scroll to a specific component section
  const scrollToComponent = (id: number) => {
    const section = componentsRef.current[id - 1]
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="min-h-dvh bg-[#f4f4f4] text-charcoal">
      <Navbar />

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
      <section className="pb-20 relative bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal font-montserrat">
            AI Agent Components & AIdeology Services
          </h1>
          <p className="text-xl mb-8 text-charcoal/80 max-w-3xl mx-auto">
            Explore our comprehensive AI agent architecture and how AIdeology's consulting services can help you
            implement each component for your business needs.
          </p>

          {/* Main Diagram */}
          <div ref={diagramRef} className="relative w-full mx-auto mt-12">
            <div className="relative h-[400px] md:h-[600px] lg:h-[700px]">
              <Image
                src="/ai-agent-detailed-diagram.webp"
                alt="AI Agent Components Architecture Diagram"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Component Navigation */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {components.map((component) => (
              <button
                key={component.id}
                onClick={() => scrollToComponent(component.id)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeComponent === component.id
                    ? "bg-accent-green text-charcoal font-medium"
                    : "bg-white text-charcoal/70 hover:bg-accent-green/10"
                }`}
              >
                {component.id}. {component.title}
              </button>
            ))}
          </div>

          <p className="mt-8 text-charcoal/70">Scroll down to explore each component and our available deliverables</p>
          <div className="mt-4 animate-bounce">
            <ArrowRight className="h-6 w-6 mx-auto transform rotate-90 text-accent-green" />
          </div>
        </div>
      </section>

      {/* Component Sections */}
      <div ref={mainContainerRef} className="relative">
        {components.map((component, index) => (
          <section
            key={component.id}
            ref={(el) => el && (componentsRef.current[index] = el)}
            className="py-24 min-h-dvh flex items-center"
            style={{
              backgroundColor: index % 2 === 0 ? "#f4f4f4" : "white",
            }}
          >
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                {/* Component Header */}
                <div className="mb-12">
                  <div className="flex items-center mb-4 component-title">
                    <div className="w-12 h-12 rounded-full bg-accent-green flex items-center justify-center mr-4">
                      <span className="text-charcoal font-bold text-xl">{component.id}</span>
                    </div>
                    <h2 className="text-3xl font-bold font-montserrat">{component.title}</h2>
                  </div>
                  <p className="text-xl text-charcoal/80 component-description">{component.description}</p>
                </div>

                {/* Component Image and Detailed Description */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
                  <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg component-image">
                    <Image
                      src={component.image || `/placeholder.svg?height=600&width=800&query=${component.title}`}
                      alt={`${component.title} visualization`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="component-detailed-description">
                    <h3 className="text-2xl font-bold mb-4">How It Works</h3>
                    <p className="text-lg text-charcoal/80">{component.detailedDescription}</p>
                  </div>
                </div>

                {/* Deliverables */}
                <div className="mt-8">
                  <h3 className="text-2xl font-bold mb-6">Available Deliverables</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {component.deliverables.map((deliverable, i) => (
                      <div
                        key={i}
                        className="bg-white p-6 rounded-lg shadow-md border-l-4 border-accent-green deliverable-card hover:shadow-xl transition-all duration-300"
                      >
                        <h4 className="text-lg font-bold mb-3">{deliverable.name}</h4>
                        <p className="text-charcoal/80">{deliverable.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Integration Section (shown only after component 6) */}
                {component.id === 6 && (
                  <div className="mt-20 p-8 bg-charcoal/5 rounded-lg border border-accent-green/20">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-accent-green/20 flex items-center justify-center mr-4">
                        <span className="text-electric-green font-bold text-xl">+</span>
                      </div>
                      <h2 className="text-2xl font-bold font-montserrat">{integrationsComponent.title}</h2>
                    </div>
                    <p className="text-lg text-charcoal/80 mb-6">{integrationsComponent.description}</p>

                    {/* Integration Image and Detailed Description */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 items-center">
                      <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={
                            integrationsComponent.image ||
                            "/placeholder.svg?height=600&width=800&query=API Integrations"
                          }
                          alt="Integrations visualization"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-4">How It Works</h3>
                        <p className="text-lg text-charcoal/80">{integrationsComponent.detailedDescription}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {integrationsComponent.deliverables.map((deliverable, i) => (
                        <div
                          key={i}
                          className="bg-white p-6 rounded-lg shadow-md border-l-4 border-accent-green/50 hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                          <h4 className="text-lg font-bold mb-3">{deliverable.name}</h4>
                          <p className="text-charcoal/80">{deliverable.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal text-white relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">Ready to implement your AI agent?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
            Let our experts guide you through each component of the AI agent architecture to create a solution tailored
            to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent-green text-charcoal hover:bg-accent-green/90">
              <Link href="/book-discovery-call?type=consultation">Schedule a consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/#solutions">Explore More Solutions</Link>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 p-6 rounded-lg">
              <CheckCircle className="h-8 w-8 text-accent-green mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Customizable Components</h3>
              <p className="text-white/80">Mix and match components based on your specific business requirements</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <CheckCircle className="h-8 w-8 text-accent-green mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
              <p className="text-white/80">Clear deliverables and timeframes for each component implementation</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <CheckCircle className="h-8 w-8 text-accent-green mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Expert Implementation</h3>
              <p className="text-white/80">Experienced AI engineers and consultants to guide your project</p>
            </div>
          </div>
        </div>

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-b from-accent-green/5 to-transparent"></div>
          <div className="point-cloud-bg absolute inset-0"></div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
