import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProductLayout from "@/components/layouts/product-layout"
import {
  CheckCircle,
  Cpu,
  Layers,
  Lightbulb,
  ShieldCheck,
  Users,
  Zap,
  SlidersHorizontal,
  TerminalSquare,
} from "lucide-react" // Added SlidersHorizontal and TerminalSquare

export const metadata = {
  title: "NVIDIA AI Enterprise | Comprehensive AI Software Suite | AIdeology",
  description:
    "Unlock enterprise AI with NVIDIA AI Enterprise, Run:ai, and NVIDIA Base Command. AIdeology provides this end-to-end suite for AI development, orchestration, and management.",
}

const features = [
  {
    icon: <Layers className="h-8 w-8 text-accent-green" />,
    title: "AI Frameworks & SDKs",
    description:
      "Access enterprise-grade versions of leading AI frameworks like PyTorch and TensorFlow, plus NVIDIA SDKs such as TensorRT, Triton Inference Server, and RAPIDS.",
    image: "/ai-frameworks-logos.png",
    alt: "Logos of AI frameworks and SDKs",
  },
  {
    icon: <Cpu className="h-8 w-8 text-accent-green" />,
    title: "Pre-trained Models",
    description:
      "Accelerate development with a vast catalog of pre-trained models for vision, speech, language, and recommenders, ready for fine-tuning and deployment.",
    image: "/ai-model-network.png",
    alt: "Visualization of a neural network or AI model",
  },
  {
    icon: <Zap className="h-8 w-8 text-accent-green" />,
    title: "Optimized Performance",
    description:
      "Achieve maximum performance on NVIDIA GPUs with continuously optimized software, ensuring your AI applications run efficiently and at scale.",
    image: "/gpu-accelerator-chip.png",
    alt: "Close-up of an NVIDIA GPU",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-accent-green" />,
    title: "Enterprise-Grade Support",
    description:
      "Benefit from NVIDIA's enterprise support, including security patches, maintenance, and direct access to AI experts for mission-critical deployments.",
    image: "/products/comprehensive_support.webp",
    alt: "Team of support engineers collaborating",
  },
]

const industrySolutions = [
  {
    name: "Healthcare & Life Sciences",
    description:
      "Accelerate drug discovery, medical imaging analysis, and genomics research with specialized AI tools and models.",
    image: "/ai-medical-imaging.png",
    alt: "AI analyzing a medical scan",
    link: "https://www.nvidia.com/en-us/industries/healthcare/",
  },
  {
    name: "Manufacturing & Industrials",
    description:
      "Enhance quality control, predictive maintenance, and robotics automation with robust vision AI and simulation capabilities.",
    image: "/ai-in-manufacturing.png",
    alt: "Robotic arms working in a smart factory",
    link: "https://www.nvidia.com/en-us/industries/manufacturing/",
  },
  {
    name: "Financial Services",
    description:
      "Improve fraud detection, risk management, and customer analytics with high-performance data processing and machine learning.",
    image: "/ai-in-finance.png",
    alt: "Financial data analytics dashboard with AI insights",
    link: "https://www.nvidia.com/en-us/industries/financial-services/",
  },
  {
    name: "Retail & E-commerce",
    description:
      "Optimize supply chains, personalize customer experiences, and improve demand forecasting with advanced AI models.",
    image: "/ai-in-retail.png",
    alt: "AI providing personalized recommendations in a retail setting",
    link: "https://www.nvidia.com/en-us/industries/retail/",
  },
]

export default function NvidiaAIEnterprisePage() {
  return (
    <ProductLayout>
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-5xl font-bold mb-6 text-charcoal leading-tight">
          NVIDIA AI Enterprise: Powering the Future of AI
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          AIdeology brings you NVIDIA AI Enterprise, an end-to-end, cloud-native software platform that accelerates data
          science pipelines and streamlines the development and deployment of production AI.
        </p>
        <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/products/ai_enterprise.webp"
            alt="Abstract visualization of NVIDIA AI Enterprise platform"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* What is NVIDIA AI Enterprise? */}
      <section className="mb-16 py-12 bg-gray-50 rounded-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/products/software-stack.webp"
                alt="Diagram of NVIDIA AI Enterprise software stack"
                width={600}
                height={450}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-charcoal">The Operating System for Enterprise AI</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                NVIDIA AI Enterprise is a secure, cloud-native suite of AI software that enables organizations to
                harness the power of AI on NVIDIA-Certified Systems™, in the cloud, or on mainstream data center
                infrastructure. It provides a complete stack of essential AI tools and frameworks, optimized for
                performance and backed by enterprise-grade support from NVIDIA.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                From data preparation and model training to inference deployment and management, NVIDIA AI Enterprise
                simplifies the complexities of building and scaling AI applications, allowing your teams to focus on
                innovation and delivering business value.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="bg-accent-green text-charcoal hover:bg-charcoal hover:text-white hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <Link
                  href="https://www.nvidia.com/en-us/data-center/products/ai-enterprise/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore Official NVIDIA Documentation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features & Components */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-charcoal">Core Components of NVIDIA AI Enterprise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-2xl font-semibold ml-4 text-charcoal">{feature.title}</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
              <div className="relative h-48 rounded-md overflow-hidden">
                <Image src={feature.image || "/placeholder.svg"} alt={feature.alt} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Run:ai Section */}
      <section className="mb-16 py-12 bg-gray-50 rounded-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/products/run-ai-dashboard.webp"
                alt="Run:ai platform dashboard showing GPU utilization and workload management"
                width={600}
                height={450}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <SlidersHorizontal className="h-10 w-10 text-accent-green mr-3" />
                <h2 className="text-3xl font-bold text-charcoal">Orchestrate AI Workloads with Run:ai</h2>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Run:ai, an NVIDIA company, supercharges NVIDIA AI Enterprise by providing a sophisticated AI workload
                orchestration and resource management platform. It enables efficient GPU virtualization, allowing
                multiple workloads to share GPU resources dynamically and maximizing utilization.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                With Run:ai, organizations can automate the scheduling of AI training and inference jobs, manage quotas
                and priorities, and gain deep visibility into GPU cluster performance. This ensures that your valuable
                AI infrastructure is used to its full potential, accelerating research and development cycles.
              </p>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-green mr-2 mt-1 shrink-0" />
                  <span>Dynamic GPU sharing and virtualization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-green mr-2 mt-1 shrink-0" />
                  <span>Automated job scheduling and queuing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-green mr-2 mt-1 shrink-0" />
                  <span>Fair-share policies and resource quotas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-green mr-2 mt-1 shrink-0" />
                  <span>Enhanced visibility and control over GPU resources</span>
                </li>
              </ul>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-accent-green text-accent-green hover:bg-accent-green hover:text-white hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <Link href="https://www.run.ai/" target="_blank" rel="noopener noreferrer">
                  Learn More About Run:ai
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* NVIDIA Base Command Manager Section */}
      <section className="mb-16 py-12 rounded-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/products/base_command.webp"
                alt="NVIDIA Base Command Manager interface showing cluster management tools"
                width={600}
                height={450}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <TerminalSquare className="h-10 w-10 text-accent-green mr-3" />
                <h2 className="text-3xl font-bold text-charcoal">Manage AI Infrastructure with NVIDIA Base Command</h2>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                NVIDIA Base Command™ Manager provides comprehensive tools for managing your AI infrastructure at scale.
                It simplifies the complexities of provisioning, monitoring, and operating large clusters of NVIDIA DGX™
                systems and other NVIDIA-accelerated infrastructure.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Base Command Manager streamlines tasks such as system deployment, software updates, health monitoring,
                and job management, enabling IT administrators to efficiently manage resources for AI training, HPC, and
                data analytics workloads. It integrates seamlessly with NVIDIA AI Enterprise to provide a cohesive AI
                development and operations environment.
              </p>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-green mr-2 mt-1 shrink-0" />
                  <span>Centralized cluster management and provisioning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-green mr-2 mt-1 shrink-0" />
                  <span>Real-time system monitoring and telemetry</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-green mr-2 mt-1 shrink-0" />
                  <span>Simplified software and firmware updates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-green mr-2 mt-1 shrink-0" />
                  <span>Integration with workload schedulers and MLOps tools</span>
                </li>
              </ul>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-accent-green text-accent-green hover:bg-accent-green hover:text-white hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <Link
                  href="https://www.nvidia.com/en-us/data-center/base-command-platform/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discover NVIDIA Base Command
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16 py-12 bg-charcoal text-white rounded-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-accent-green">
            Unlock Transformative AI Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Accelerate Time-to-Solution",
                description:
                  "Reduce development cycles and deploy AI applications faster with optimized software and pre-trained models.",
              },
              {
                title: "Maximize Performance & ROI",
                description:
                  "Leverage the full potential of NVIDIA GPUs for training and inference, improving efficiency and resource utilization.",
              },
              {
                title: "Simplify AI Operations",
                description:
                  "Streamline MLOps with a consistent platform across development, testing, and production environments.",
              },
              {
                title: "Ensure Enterprise Readiness",
                description: "Deploy with confidence using a secure, stable, and fully supported AI software stack.",
              },
              {
                title: "Drive Innovation",
                description:
                  "Empower data scientists and developers with the latest AI tools and technologies to build cutting-edge solutions.",
              },
              {
                title: "Scale with Confidence",
                description: "Seamlessly scale your AI initiatives from pilot projects to enterprise-wide deployments.",
              },
            ].map((benefit, index) => (
              <div key={index} className="p-6 bg-gray-700 rounded-lg shadow-md">
                <Lightbulb className="h-8 w-8 text-accent-green mb-3" />
                <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-charcoal">Tailored AI Solutions Across Industries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industrySolutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <div className="relative h-56 w-full">
                <Image src={solution.image || "/placeholder.svg"} alt={solution.alt} fill className="object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-charcoal">{solution.name}</h3>
                <p className="text-gray-600 leading-relaxed flex-grow mb-4">{solution.description}</p>
                <Button asChild variant="link" className="text-accent-green p-0 self-start hover:underline">
                  <Link href={solution.link || "#"} target="_blank" rel="noopener noreferrer">
                    Learn More on NVIDIA
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AIdeology & NVIDIA AI Enterprise */}
      <section className="mb-16 py-12 bg-gray-100 rounded-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-charcoal">Your Trusted Partner for NVIDIA AI Enterprise</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                AIdeology is a premier partner for NVIDIA AI Enterprise, offering deep expertise in designing,
                deploying, and managing AI solutions powered by this cutting-edge software suite. Our certified experts
                work closely with your team to understand your unique business challenges and tailor NVIDIA AI
                Enterprise to your specific needs.
              </p>
              <ul className="space-y-3 mb-6 text-gray-700">
                {[
                  "Strategic AI consulting and roadmap development",
                  "Seamless integration with existing infrastructure",
                  "Custom AI model development and fine-tuning",
                  "Performance optimization and MLOps best practices",
                  "Comprehensive training and ongoing support",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-accent-green mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button 
                asChild 
                size="lg" 
                className="bg-accent-green text-charcoal hover:bg-charcoal hover:text-white hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <Link href="#contact">Consult with Our AI Experts</Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/products/ai-consulting-meeting.webp"
                alt="AIdeology team discussing an AI solution with a client"
                width={600}
                height={450}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-accent-green/10 rounded-lg">
        <Users className="h-16 w-16 text-accent-green mx-auto mb-6" />
        <h2 className="text-4xl font-bold mb-6 text-charcoal">Ready to Revolutionize Your Business with AI?</h2>
        <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
          Discover how AIdeology and NVIDIA AI Enterprise can help you unlock new opportunities, optimize operations,
          and achieve unparalleled results. Let's build the future of AI, together.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Button 
            asChild 
            size="lg" 
            className="bg-charcoal text-white hover:bg-white hover:text-charcoal hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <Link href="/book-discovery-call?type=demo">Request a Demo</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <Link href="/products">Explore All Our Products</Link>
          </Button>
        </div>
      </section>
    </ProductLayout>
  )
}
