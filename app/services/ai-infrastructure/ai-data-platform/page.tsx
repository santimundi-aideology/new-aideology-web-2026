import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  ArrowRight,
  Database,
  Zap,
  Shield,
  BarChart3,
  Layers,
  Brain,
  Rocket,
  HeartPulse,
  Factory,
  DollarSign,
  ShoppingCart,
  SearchCheck,
  Lightbulb,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AiDataPlatformPage() {
  const dataChallenges = [
    {
      icon: <BarChart3 className="w-8 h-8 text-accent-green" />,
      title: "Massive Data Volume",
      description:
        "AI models, especially deep learning, require vast datasets, often petabytes in scale, for effective training and accurate predictions.",
    },
    {
      icon: <Zap className="w-8 h-8 text-accent-green" />,
      title: "High Data Velocity",
      description:
        "Real-time AI applications and continuous model retraining demand high-throughput data pipelines capable of ingesting and processing data rapidly.",
    },
    {
      icon: <Layers className="w-8 h-8 text-accent-green" />,
      title: "Diverse Data Variety",
      description:
        "AI leverages structured, unstructured, and semi-structured data from myriad sources, including text, images, video, and sensor data, each requiring specialized handling.",
    },
    {
      icon: <Shield className="w-8 h-8 text-accent-green" />,
      title: "Stringent Data Governance",
      description:
        "Ensuring data quality, security, privacy, and compliance with regulations (e.g., GDPR, HIPAA) is paramount throughout the AI data lifecycle.",
    },
  ]

  const platformServices = [
    {
      title: "High-Performance Data Storage",
      description:
        "AIdeology designs and implements scalable, high-throughput storage solutions tailored for AI. We leverage parallel file systems (e.g., Lustre, GPFS), high-performance object storage, and all-flash arrays, optimized with technologies like NVIDIA GPUDirect Storage for direct GPU access. Our solutions ensure low-latency data access for demanding AI training and inference workloads.",
      icon: <Database className="w-6 h-6 text-accent-green mb-4" />,
      image: "/placeholder-ecldt.png",
      alt: "High-Performance Data Storage Infrastructure",
      points: [
        "Parallel file systems (Lustre, GPFS, BeeGFS)",
        "Scalable object storage (Ceph, S3-compatible)",
        "All-flash NVMe storage solutions",
        "NVIDIA GPUDirect Storage integration",
        "Tiered storage for cost optimization",
      ],
    },
    {
      title: "Accelerated Data Processing",
      description:
        "We build GPU-accelerated data processing pipelines for ETL, feature engineering, and data augmentation. Utilizing NVIDIA RAPIDS, Apache Spark with GPU acceleration, and Dask, we significantly reduce data preparation times. Our expertise includes building efficient data lakes and data warehouses optimized for AI analytics.",
      icon: <Zap className="w-6 h-6 text-accent-green mb-4" />,
      image: "/gpu-data-visualization.png",
      alt: "Accelerated Data Processing Pipeline",
      points: [
        "NVIDIA RAPIDS for GPU-accelerated data science",
        "Apache Spark and Dask with GPU support",
        "Optimized ETL and feature engineering workflows",
        "Real-time stream processing for AI",
        "Data lake and data warehouse solutions for AI",
      ],
    },
    {
      title: "Efficient Data Access & Delivery",
      description:
        "AIdeology ensures your AI models are never starved for data. We implement high-speed data access layers using technologies like NVIDIA Magnum IO, RDMA, and InfiniBand/Ethernet networking. Our solutions optimize data loading and delivery to AI training clusters, minimizing I/O bottlenecks and maximizing GPU utilization.",
      icon: <Rocket className="w-6 h-6 text-accent-green mb-4" />,
      image: "/high-speed-network-data.png",
      alt: "Efficient Data Access and Delivery Network",
      points: [
        "NVIDIA Magnum IO integration",
        "High-bandwidth, low-latency networking (InfiniBand, RoCE)",
        "Optimized data loaders (NVIDIA DALI)",
        "Data caching and prefetching strategies",
        "Direct data paths to GPU memory",
      ],
    },
    {
      title: "Robust Data Management & Governance",
      description:
        "We establish comprehensive data management frameworks, including metadata management, data lineage tracking, version control, and robust governance protocols. Our solutions ensure data quality, security, and compliance, incorporating tools for data cataloging, access control, and audit trails, essential for responsible AI development.",
      icon: <Shield className="w-6 h-6 text-accent-green mb-4" />,
      image: "/data-governance-security-dashboard.png",
      alt: "Data Management and Governance Framework",
      points: [
        "Metadata management and data cataloging",
        "Data lineage and version control (DVC, MLflow)",
        "Data security and access control mechanisms",
        "Compliance with industry regulations (HIPAA, GDPR)",
        "Data quality assurance and monitoring",
      ],
    },
  ]

  const keyTechnologies = [
    { name: "NVIDIA DGX Systems", logo: "/nvidia-dgx-logo.png" },
    { name: "NVIDIA RAPIDS", logo: "/placeholder.svg?width=150&height=80" },
    { name: "NVIDIA Magnum IO", logo: "/placeholder.svg?width=150&height=80" },
    { name: "Apache Spark", logo: "/placeholder.svg?width=150&height=80" },
    { name: "Kubernetes", logo: "/placeholder.svg?width=150&height=80" },
    { name: "Leading Storage Vendors (DDN, VAST, Weka)", logo: "/placeholder.svg?width=150&height=80" },
  ]

  const industryApplications = [
    {
      icon: <HeartPulse className="w-10 h-10 text-accent-green mb-4" />,
      title: "Healthcare & Life Sciences",
      description:
        "Accelerating drug discovery, genomic sequencing, and medical imaging analysis with secure and compliant high-performance data platforms.",
    },
    {
      icon: <Factory className="w-10 h-10 text-accent-green mb-4" />,
      title: "Manufacturing",
      description:
        "Enabling predictive maintenance, quality control, and smart factories through real-time data processing and digital twin simulations.",
    },
    {
      icon: <DollarSign className="w-10 h-10 text-accent-green mb-4" />,
      title: "Financial Services",
      description:
        "Powering fraud detection, algorithmic trading, and risk management with high-speed, secure data analytics platforms.",
    },
    {
      icon: <ShoppingCart className="w-10 h-10 text-accent-green mb-4" />,
      title: "Retail & E-commerce",
      description:
        "Optimizing supply chains, personalizing customer experiences, and improving demand forecasting with advanced AI data insights.",
    },
  ]

  const benefits = [
    {
      icon: <Rocket className="w-6 h-6 text-accent-green mr-3 mt-1 flex-shrink-0" />,
      title: "Accelerated AI Development",
      description:
        "Reduce data preparation and model training time from weeks to hours, enabling faster innovation cycles.",
    },
    {
      icon: <Brain className="w-6 h-6 text-accent-green mr-3 mt-1 flex-shrink-0" />,
      title: "Optimized Resource Utilization",
      description: "Ensure GPUs and compute resources are never starved for data, maximizing ROI on AI infrastructure.",
    },
    {
      icon: <Layers className="w-6 h-6 text-accent-green mr-3 mt-1 flex-shrink-0" />,
      title: "Scalable & Future-Proof Architecture",
      description:
        "Build data platforms that seamlessly scale with growing data volumes and evolving AI model complexity.",
    },
    {
      icon: <SearchCheck className="w-6 h-6 text-accent-green mr-3 mt-1 flex-shrink-0" />,
      title: "Enhanced Data Quality & Governance",
      description:
        "Implement robust processes for reliable, secure, and compliant data, fostering trust in AI outcomes.",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-accent-green mr-3 mt-1 flex-shrink-0" />,
      title: "Faster Time-to-Insight & Value",
      description: "Speed up the entire AI workflow from data ingestion to actionable insights and deployment.",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-charcoal">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charcoal via-charcoal to-gray-800 text-white py-24 md:py-32">
        <div className="absolute inset-0 point-cloud-bg opacity-10"></div>
        <div className="w-full px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-accent-green/20 text-accent-green px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Database className="w-4 h-4 mr-2" />
              AI Infrastructure
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              High-Performance AI <span className="text-accent-green">Data Platforms</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
              Fuel your AI ambitions with a robust, scalable, and optimized data foundation. AIdeology engineers
              end-to-end data platforms that unleash the full potential of your AI workloads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent-green text-charcoal font-semibold hover:bg-white hover:text-charcoal hover:scale-105 transition-all duration-300 ease-in-out px-8 py-3"
              >
                Design Your Data Platform
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-charcoal hover:scale-105 transition-all duration-300 ease-in-out px-8 py-3"
              >
                Explore Use Cases
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction to AI Data Platforms */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              The Engine of Modern AI: The Data Platform
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              An AI data platform is more than just storage; it's a comprehensive ecosystem designed to efficiently
              manage the entire lifecycle of data for AI. From ingestion and preparation to training and inference, a
              well-architected data platform is critical for unlocking transformative AI capabilities, ensuring speed,
              scalability, and reliability.
            </p>
            <Image
              src="/placeholder.svg?width=800&height=400"
              alt="AI Data Platform Architecture Diagram"
              width={800}
              height={400}
              className="rounded-lg shadow-xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* The Data Challenge in AI (Expanded) */}
      <section className="py-16 md:py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Navigating the Complexities of AI Data
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Data is the lifeblood of AI, but its inherent characteristics present significant hurdles. AIdeology
                helps you overcome these challenges.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {dataChallenges.map((challenge) => (
                <Card key={challenge.title} className="hover-lift text-center p-6">
                  <div className="flex justify-center mb-4">{challenge.icon}</div>
                  <CardTitle className="text-xl mb-2">{challenge.title}</CardTitle>
                  <CardDescription className="text-gray-600">{challenge.description}</CardDescription>
                </Card>
              ))}
            </div>
            <div className="mt-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-blue-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">
                    Leveraging NVIDIA's Data Platform Innovations
                  </h3>
                  <p className="text-blue-700">
                    AIdeology architects solutions incorporating NVIDIA's cutting-edge data platform technologies,
                    including RAPIDS for accelerated data science, DALI for optimized data loading, Magnum IO for
                    efficient data movement, and GPUDirect Storage for high-speed data access, ensuring your AI
                    infrastructure performs at its peak.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Components of Our AI Data Platform */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                AIdeology's End-to-End AI Data Platform Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide a holistic suite of services to design, build, and manage high-performance data
                infrastructure tailored to your unique AI requirements.
              </p>
            </div>
            {platformServices.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-12 mb-16 md:mb-20`}
              >
                <div className="w-full md:w-1/2">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.alt}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl object-cover aspect-[3/2]"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <div className="flex items-center mb-3">
                    {service.icon} <h3 className="text-2xl font-semibold ml-2">{service.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent-green mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="text-accent-green border-accent-green hover:bg-accent-green hover:text-white hover:scale-105 transition-all duration-300 ease-in-out"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Technologies We Integrate */}
      <section className="py-16 md:py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Powered by Leading-Edge Technologies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI data platforms are built using a curated selection of best-in-class hardware and software to
                ensure optimal performance, scalability, and reliability.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {keyTechnologies.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center text-center">
                  <Image
                    src={tech.logo || "/placeholder.svg"}
                    alt={`${tech.name} logo`}
                    width={120}
                    height={60}
                    className="object-contain mb-2"
                  />
                  <p className="text-sm text-gray-600 font-medium">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Specific Solutions */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Tailored Data Platforms for Your Industry
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We understand that different industries have unique data challenges and AI objectives. Our experts
                design data platforms that address your specific needs.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industryApplications.map((app) => (
                <Card key={app.title} className="hover-lift p-6 flex flex-col items-center text-center">
                  {app.icon}
                  <CardTitle className="text-xl my-3">{app.title}</CardTitle>
                  <CardDescription className="text-gray-600">{app.description}</CardDescription>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Partnering with AIdeology */}
      <section className="py-16 md:py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Why AIdeology for Your AI Data Platform?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Partner with us to build a data foundation that not only supports your current AI initiatives but also
                scales for future innovations.
              </p>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start">
                  {benefit.icon}
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <Image
                src="/placeholder.svg?width=800&height=400"
                alt="AIdeology Team Collaboration"
                width={800}
                height={400}
                className="rounded-lg shadow-xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal text-white">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Build Your AI Data Foundation?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Let AIdeology be your trusted partner in designing and implementing a high-performance AI data platform.
              Contact our experts today to discuss your project and unlock the true power of your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg" 
                className="bg-accent-green text-charcoal font-semibold hover:bg-white hover:text-charcoal hover:scale-105 transition-all duration-300 ease-in-out px-8 py-3"
              >
                <Link href="/book-discovery-call?type=consultation">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-charcoal hover:scale-105 transition-all duration-300 ease-in-out px-8 py-3"
              >
                Download Our Whitepaper
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl font-bold text-charcoal mb-8 text-center">
              Explore Related AI Infrastructure Services
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/services/ai-infrastructure/professional-services" className="group">
                <Card className="hover-lift h-full border-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="group-hover:text-accent-green transition-colors text-xl">
                      Professional Services
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Expert services for AI infrastructure design, deployment, and optimization.
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/ai-infrastructure/mlops" className="group">
                <Card className="hover-lift h-full">
                  <CardHeader>
                    <CardTitle className="group-hover:text-accent-green transition-colors">
                      MLOps Infrastructure
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Streamline your machine learning lifecycle with robust MLOps infrastructure.
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/ai-infrastructure/accelerated-computing" className="group">
                <Card className="hover-lift h-full">
                  <CardHeader>
                    <CardTitle className="group-hover:text-accent-green transition-colors">
                      Accelerated Computing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Leverage powerful GPU-accelerated infrastructure for demanding AI workloads.
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export const metadata = {
  title: "High-Performance AI Data Platform Solutions | AIdeology",
  description:
    "AIdeology designs, builds, and manages end-to-end AI data platforms, leveraging NVIDIA technologies and best-in-class solutions for efficient data storage, processing, access, and governance to accelerate your AI initiatives.",
}
