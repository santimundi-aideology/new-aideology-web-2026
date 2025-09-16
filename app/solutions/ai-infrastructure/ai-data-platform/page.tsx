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
  ChevronRight,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Video from "@/components/video-player"
import Footer from "@/components/footer"

export default function AiDataPlatformPage() {
  const breadcrumbPath = [
    { name: "Solutions", href: "/#solutions" },
    { name: "AI Infrastructure", href: "/solutions/ai-infrastructure" },
    { name: "AI Data Platform" }
  ];
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
      image: "/products/ai-storage.webp",
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
      image: "/gpu-data-visualization.webp",
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
      image: "/high-speed-network-data.webp",
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
      image: "/data-governance-security-dashboard.webp",
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
    { name: "NVIDIA DGX Systems", logo: "/nvidia-dgx-logo.webp" },
    { name: "NVIDIA RAPIDS", logo: "/solutions/rapids-logo.webp" },
    { name: "NVIDIA Magnum IO", logo: "/solutions/nvidia_magnum_io.webp" },
    { name: "Apache Spark", logo: "/solutions/apache_spark.webp" },
    { name: "Kubernetes", logo: "/solutions/kubernetes_logo.webp" },
    { name: "Leading Storage Vendors (DDN, VAST, Weka)", logo: "/solutions/storage_vendors.webp" },
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
    <>
      <div className="min-h-screen bg-white text-charcoal pt-24">
        {/* Breadcrumb Navigation */}
        <div className="hidden md:block mb-6">
          <nav className="mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-500 flex items-center" aria-label="Breadcrumb">
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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charcoal via-charcoal to-gray-800 text-white py-24 md:py-32">
        <div className="absolute inset-0 point-cloud-bg opacity-10"></div>
        <div className="w-full px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-accent-green/20 text-accent-green px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <Database className="w-4 h-4 mr-2" />
              AI Infrastructure
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              High-Performance AI <span className="text-accent-green">Data Platforms</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              Fuel your AI ambitions with a robust, scalable, and optimized data foundation. AIdeology engineers
              end-to-end data platforms that unleash the full potential of your AI workloads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <Button 
                asChild
                size="lg" 
                className="bg-accent-green text-charcoal font-semibold hover:bg-white hover:text-charcoal hover:scale-105 transition-all duration-300 ease-in-out px-8 py-3"
              >
                <Link href="#consultation">
                  Design Your Data Platform
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-charcoal hover:scale-105 transition-all duration-300 ease-in-out px-8 py-3"
                asChild
              >
                <Link href="#platform-services">
                  Explore Use Cases
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 id="video" className="text-3xl md:text-4xl font-bold text-charcoal mb-4 animate-fade-in-up">
                Intelligent Data Platform Architecture
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Learn how our AI-optimized data platforms handle massive datasets and power next-generation machine learning workflows
              </p>
            </div>
            
            <Video
              src="/ai-data-platform-video.mp4"
              poster="/thumbnail.webp"
              className="w-full max-w-5xl mx-auto animate-fade-in-up"
              style={{ animationDelay: '400ms' }}
            />
          </div>
        </div>
      </section>

      {/* Introduction to AI Data Platforms */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              The Engine of Modern AI: The Data Platform
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              An AI data platform is more than just storage; it's a comprehensive ecosystem designed to efficiently
              manage the entire lifecycle of data for AI. From ingestion and preparation to training and inference, a
              well-architected data platform is critical for unlocking transformative AI capabilities, ensuring speed,
              scalability, and reliability.
            </p>
            <Image
              src="/solutions/ai_data_platform.webp"
              alt="AI Data Platform Architecture Diagram"
              width={800}
              height={400}
              className="rounded-lg shadow-xl mx-auto animate-fade-in-up"
              style={{ animationDelay: '300ms' }}
            />
          </div>
        </div>
      </section>

      {/* Data Challenges Section */}
      <section className="py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                Why AI Demands High-Performance Data Platforms
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Traditional data infrastructure falls short of AI's unique demands. Here's why:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {dataChallenges.map((challenge, index) => (
                <Card 
                  key={index} 
                  className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <div className="flex justify-center mb-4">{challenge.icon}</div>
                  <h3 className="text-xl font-bold text-charcoal mb-3 text-center">{challenge.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{challenge.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Services Section */}
      <section id="platform-services" className="py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                AIdeology's AI Data Platform Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Comprehensive solutions engineered to unlock the full potential of your AI data
              </p>
            </div>

            <div className="space-y-16">
              {platformServices.map((service, index) => (
                <div 
                  key={index} 
                  className={`grid lg:grid-cols-2 gap-12 items-center animate-fade-in-up ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                  style={{ animationDelay: `${300 + index * 150}ms` }}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                      <CardHeader>
                        <div className="flex items-center mb-4">
                          {service.icon}
                          <CardTitle className="text-2xl font-bold text-charcoal ml-3">{service.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600 text-base leading-relaxed mb-6">
                          {service.description}
                        </CardDescription>
                        <ul className="space-y-3">
                          {service.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-accent-green mr-3 mt-1 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  <div className={`relative h-[400px] rounded-xl overflow-hidden shadow-lg ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Technologies Section */}
      <section className="py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                Key Technologies & Partners
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                We leverage industry-leading technologies to build robust AI data platforms
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {keyTechnologies.map((tech, index) => (
                <Card 
                  key={index} 
                  className="bg-white border-2 border-gray-200 p-6 flex items-center justify-center h-24 hover:border-accent-green/50 transition-colors duration-300 animate-fade-in-up group"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={160}
                    height={80}
                    className="max-h-20 w-auto opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-out"
                  />
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                Industry Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Tailored solutions for diverse industry requirements
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industryApplications.map((application, index) => (
                <Card 
                  key={index} 
                  className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <div className="flex justify-center">{application.icon}</div>
                  <h3 className="text-xl font-bold text-charcoal mb-3 text-center">{application.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{application.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                Why Choose AIdeology for AI Data Platforms
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Accelerate your AI journey with our proven expertise and cutting-edge solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <div className="flex items-start">
                    {benefit.icon}
                    <div>
                      <h3 className="text-lg font-bold text-charcoal mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="consultation" className="py-20 bg-accent-green text-charcoal">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>Ready to Build Your AI Data Foundation?</h2>
            <p className="text-xl text-charcoal mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Let AIdeology be your trusted partner in designing and implementing a high-performance AI data platform.
              Contact our experts today to discuss your project and unlock the true power of your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <Button 
                asChild
                size="lg" 
                className="bg-charcoal text-white font-semibold hover:bg-white hover:text-charcoal hover:scale-105 transition-all duration-300 ease-in-out px-8 py-3"
              >
                <Link href="/book-discovery-call?type=consultation">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white hover:scale-105 transition-all duration-300 ease-in-out px-8 py-3"
                asChild
              >
                <Link href="/#solutions">
                  Explore More Solutions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl font-bold text-charcoal mb-8 text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Explore Related AI Infrastructure Services
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/services/ai-infrastructure/professional-services" className="group animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 h-full border-0 shadow-lg">
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
              <Link href="/services/ai-infrastructure/mlops" className="group animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
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
              <Link href="/services/ai-infrastructure/accelerated-computing" className="group animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
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
      
      <Footer />
    </>
  )
}

export const metadata = {
  title: "High-Performance AI Data Platform Solutions | AIdeology",
  description:
    "AIdeology designs, builds, and manages end-to-end AI data platforms, leveraging NVIDIA technologies and best-in-class solutions for efficient data storage, processing, access, and governance to accelerate your AI initiatives.",
}
