import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, Quote, BarChart, Clock, DollarSign, Zap } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// This would typically come from a database or CMS
const getCaseStudyBySlug = (slug: string) => {
  // Sample case study data for VFX studio
  if (slug === "g42-ai-cloud-infrastructure") {
    return {
      title: "Core42 Scales AI Cloud Infrastructure with NVIDIA DGX SuperPOD",
      industry: "AI Infrastructure",
      company: "Core42",
      logo: "/customer-logos/core42-logo.png",
      heroImage: "/customers/core42_image.jpg",
      challenge:
        "G42\'s Core42 needed to rapidly scale their AI cloud offering to meet growing demand for enterprise AI workloads across the Middle East and beyond. They required a high-performance, scalable infrastructure that could support diverse AI applications while maintaining enterprise-grade reliability and security.",
    
      solution:
        "AIdeology designed and deployed a comprehensive 5 Scalable unit DGX SuperPOD infrastructure featuring over 159 NVIDIA DGX H100 systems. The solution included optimized networking, storage fabric, and management systems specifically configured for multi-tenant AI cloud operations.",
      
      implementation:
        "The implementation was carried out in phases to minimize disruption to ongoing projects. AIdeology worked closely with El Ranchito's technical team to ensure smooth integration with their existing workflows and software tools. The deployment included comprehensive training for the studio's artists and technical staff.",
      results: [
        "5 Scalable DGX SuperPOD units deployed",
        "159+ NVIDIA DGX H100 systems implemented",
        "Massive scale AI cloud infrastructure operational",
        "Enhanced AI capabilities across the region",
      ],
      resultsDetails:
        "The impact of the new AI infrastructure was immediate and significant:\n\n- **Rendering Performance**: Average render times decreased by 60%, with some complex scenes seeing even greater improvements.\n\n- **Cost Efficiency**: Despite the increased performance, overall infrastructure costs decreased by 40% due to better resource utilization and the hybrid cloud approach.\n\n- **Capacity**: The studio was able to take on 3x more projects simultaneously without adding additional staff.\n\n- **Artist Productivity**: Artists could now get feedback on their work in minutes rather than hours, enabling more iterations and higher quality output.\n\n- **Competitive Advantage**: Faster turnaround times and higher quality work led to increased client satisfaction and new business opportunities.\n\n- **Energy Efficiency**: The new infrastructure consumed 35% less power per frame rendered, aligning with the studio's sustainability goals.",
      testimonial: {
        quote:
          "The partnership with AIdeology enabled us to rapidly deploy enterprise-grade AI infrastructure at scale. The DGX SuperPOD implementation has significantly enhanced our ability to serve AI workloads across diverse industries.",
        author: "Talal Al Kaissi",
        position: "CEO",
        company: "Core42 (G42)",
        image: "/customers/talal_image.jpeg",
      },
      metrics: [
        {
          label: "Rendering Time Reduction",
          value: "60%",
          icon: <Clock className="h-6 w-6 text-accent-green" />,
        },
        {
          label: "Cost Savings",
          value: "40%",
          icon: <DollarSign className="h-6 w-6 text-accent-green" />,
        },
        {
          label: "Capacity Increase",
          value: "3x",
          icon: <BarChart className="h-6 w-6 text-accent-green" />,
        },
        {
          label: "Energy Efficiency Improvement",
          value: "35%",
          icon: <Zap className="h-6 w-6 text-accent-green" />,
        },
      ],
      relatedCaseStudies: [
        {
          id: "2",
          title: "Architectural Firm Enhances Visualization with 3D AI",
          industry: "Architecture & Design",
          image: "/customers/architecture-firm-case-study.png",
          slug: "architectural-visualization",
        },
        {
          id: "4",
          title: "Media Production Studio Implements Virtual Production Pipeline",
          industry: "Media & Entertainment",
          image: "/customers/virtual-production-case-study.png",
          slug: "virtual-production",
        },
      ],
    }
  }
  if (slug === "tonomus-neom-cognitive-cloud") {
    return {
      title: "Tonomus – 20 × NVIDIA DGX A100 Cluster for NEOM Cognitive Cloud",
      industry: "AI Infrastructure",
      company: "NEOM",
      logo: "/customers/neom-logo.png",
      heroImage: "/customers/tonomus_image.jpg",
      challenge:
        "Tonomus, the digital-infrastructure engine of the NEOM smart-city project, needed a high-density AI platform to power real-time analytics, digital-twin modelling, and generative-AI services for city-scale use cases across energy, mobility, and urban planning. They required extreme performance, multi-tenant isolation, and enterprise-grade security—delivered on an aggressive timeline.",
      solution:
        "AIdeology designed, delivered, and tuned a turnkey 20-node NVIDIA DGX A100 cluster inside NEOM\'s regional data facilities.",
      implementation:
        "The implementation was carried out in phases to minimize disruption to ongoing projects. AIdeology worked closely with El Ranchito's technical team to ensure smooth integration with their existing workflows and software tools. The deployment included comprehensive training for the studio's artists and technical staff.",
      results: [
        "[ ___ PFLOPS / ___ TFLOPS ] aggregate AI compute online in < [ X ] weeks",
        "Cut model-training time for [ geospatial maps / traffic predictors / … ] by [ __ ]%",
        "Supports smart-city analytics for [ __ ] million sensors & resident digital twins",
        "Enabled Tonomus to launch its cognitive-cloud service [ __ ] months ahead of schedule, attracting [ __ ] new enterprise tenants",
      ],
      resultsDetails:
        "The impact of the new AI infrastructure was immediate and significant:\n\n- **Rendering Performance**: Average render times decreased by 60%, with some complex scenes seeing even greater improvements.\n\n- **Cost Efficiency**: Despite the increased performance, overall infrastructure costs decreased by 40% due to better resource utilization and the hybrid cloud approach.\n\n- **Capacity**: The studio was able to take on 3x more projects simultaneously without adding additional staff.\n\n- **Artist Productivity**: Artists could now get feedback on their work in minutes rather than hours, enabling more iterations and higher quality output.\n\n- **Competitive Advantage**: Faster turnaround times and higher quality work led to increased client satisfaction and new business opportunities.\n\n- **Energy Efficiency**: The new infrastructure consumed 35% less power per frame rendered, aligning with the studio's sustainability goals.",
      testimonial: {
        quote: "AIdeology delivered a secure, role-based AI finance agent that:",
        author: "Robert Thompson",
        position: "Grid Operations Manager",
        company: "PowerGrid Solutions",
        image: "/customers/testimonials/robert-thompson.png",
      },
      metrics: [
        {
          label: "Rendering Time Reduction",
          value: "60%",
          icon: <Clock className="h-6 w-6 text-accent-green" />,
        },
        {
          label: "Cost Savings",
          value: "40%",
          icon: <DollarSign className="h-6 w-6 text-accent-green" />,
        },
        {
          label: "Capacity Increase",
          value: "3x",
          icon: <BarChart className="h-6 w-6 text-accent-green" />,
        },
        {
          label: "Energy Efficiency Improvement",
          value: "35%",
          icon: <Zap className="h-6 w-6 text-accent-green" />,
        },
      ],
      relatedCaseStudies: [
        {
          id: "1",
          title: "Core42 Scales AI Cloud Infrastructure with NVIDIA DGX SuperPOD",
          industry: "AI Infrastructure",
          image: "/customers/g42-infrastructure-case-study.png",
          slug: "g42-ai-cloud-infrastructure",
        },
        {
          id: "2",
          title: "Architectural Firm Enhances Visualization with 3D AI",
          industry: "Architecture & Design",
          image: "/customers/architecture-firm-case-study.png",
          slug: "architectural-visualization",
        },
      ],
    }
  }
  if (slug === "broadcom-vmware-crm-automation") {
    return {
      title: "Broadcom – VMware & Broadcom Invoice + CRM AI Automation",
      industry: "AI Consulting",
      company: "Broadcom",
      logo: "/customers/broadcom-logo.png",
      heroImage: "/customers/crm_ai_image.jpg",
      challenge:
        "Broadcom\'s Southern Europe and GCC teams were drowning in paperwork: more than 25 000 invoices and quotes each quarter (100 000+ per year) had to be keyed manually into separate VMware and Broadcom CRM instances. Constant licensing model changes (users → nodes), intricate long-tail contracts, and a \"hockey-stick\" surge of low-value renewals left 120 full-time employees struggling to keep up—driving delays, errors, and rising operating costs.",
      
      solution: "AIdeology delivered a tailored, end-to-end automation stack that fuses Generative AI with RPA:",

      implementation:
        "The implementation was carried out in phases to minimize disruption to ongoing projects. AIdeology worked closely with El Ranchito's technical team to ensure smooth integration with their existing workflows and software tools. The deployment included comprehensive training for the studio's artists and technical staff.",
      results: [
        "100 000+ invoices/year processed fully autonomously via Salesforce integration",
        "12 000 quotes cleared in 24 h vs. 3 months—a 90-day cycle shrunk to one day",
        "Workforce re-allocation: 120 FTE ➜ 5 FTE, freeing 115 people for higher-value tasks",
        "97.5 % data accuracy and near-zero manual rework",
        "1 200 % ROI in the first year, driven by labour savings and faster revenue recognition",
      ],
      resultsDetails:
        "The impact of the new AI infrastructure was immediate and significant:\n\n- **Rendering Performance**: Average render times decreased by 60%, with some complex scenes seeing even greater improvements.\n\n- **Cost Efficiency**: Despite the increased performance, overall infrastructure costs decreased by 40% due to better resource utilization and the hybrid cloud approach.\n\n- **Capacity**: The studio was able to take on 3x more projects simultaneously without adding additional staff.\n\n- **Artist Productivity**: Artists could now get feedback on their work in minutes rather than hours, enabling more iterations and higher quality output.\n\n- **Competitive Advantage**: Faster turnaround times and higher quality work led to increased client satisfaction and new business opportunities.\n\n- **Energy Efficiency**: The new infrastructure consumed 35% less power per frame rendered, aligning with the studio's sustainability goals.",
      testimonial: {
        quote: "AIdeology delivered a tailored, end-to-end automation stack that fuses Generative AI with RPA:",
        author: "Robert Thompson",
        position: "Grid Operations Manager",
        company: "PowerGrid Solutions",
        image: "/customers/testimonials/robert-thompson.png",
      },
      metrics: [
        {
          label: "Rendering Time Reduction",
          value: "60%",
          icon: <Clock className="h-6 w-6 text-accent-green" />,
        },
        {
          label: "Cost Savings",
          value: "40%",
          icon: <DollarSign className="h-6 w-6 text-accent-green" />,
        },
        {
          label: "Capacity Increase",
          value: "3x",
          icon: <BarChart className="h-6 w-6 text-accent-green" />,
        },
        {
          label: "Energy Efficiency Improvement",
          value: "35%",
          icon: <Zap className="h-6 w-6 text-accent-green" />,
        },
      ],
      relatedCaseStudies: [
        {
          id: "1",
          title: "Core42 Scales AI Cloud Infrastructure with NVIDIA DGX SuperPOD",
          industry: "AI Infrastructure",
          image: "/customers/g42-infrastructure-case-study.png",
          slug: "g42-ai-cloud-infrastructure",
        },
        {
          id: "2",
          title: "Architectural Firm Enhances Visualization with 3D AI",
          industry: "Architecture & Design",
          image: "/customers/architecture-firm-case-study.png",
          slug: "architectural-visualization",
        },
      ],
    }
  }
  if (slug === "midis-group-generative-ai-finance") {
    return {
      title: "Midis Group – Generative-AI Finance Agent for Real-Time Consolidation & Forecasting",
      industry: "AI Consulting",
      company: "Midis Group",
      logo: "/customers/mindware-logo.png",
      heroImage: "/customers/finance_agent_image.png",
      challenge:
        "With dozens of operating companies spread across the Middle East & North Africa, Midis Group\'s finance team spent days each month reconciling spreadsheets, PDFs, and ERP exports to prepare group-level reports. Manual data entry introduced errors, template versions drifted, and late adjustments left decision-makers with out-of-date information. Midis needed a faster, more reliable way to aggregate data and generate forward-looking insights—without burdening regional controllers or expanding head-count.",
      
      solution: "AIdeology delivered a secure, role-based AI finance agent that:",
    
      implementation:
        "The implementation was carried out in phases to minimize disruption to ongoing projects. AIdeology worked closely with El Ranchito's technical team to ensure smooth integration with their existing workflows and software tools. The deployment included comprehensive training for the studio's artists and technical staff.",
      results: [
        "Days-long consolidation cycles cut to minutes, freeing controllers for analysis rather than data wrangling",
        "Data-entry errors virtually eliminated thanks to automated validation and lineage tracking",
        "Self-service forecasting enables finance leaders to test scenarios live during executive reviews",
        "Rapid adoption across subsidiaries—the chat UI required < 1 hour of training for most users",
        "Positioned Midis Group to scale seamlessly as new entities and reporting requirements are added",
      ],
      resultsDetails:
        "The impact of the new AI infrastructure was immediate and significant:\n\n- **Rendering Performance**: Average render times decreased by 60%, with some complex scenes seeing even greater improvements.\n\n- **Cost Efficiency**: Despite the increased performance, overall infrastructure costs decreased by 40% due to better resource utilization and the hybrid cloud approach.\n\n- **Capacity**: The studio was able to take on 3x more projects simultaneously without adding additional staff.\n\n- **Artist Productivity**: Artists could now get feedback on their work in minutes rather than hours, enabling more iterations and higher quality output.\n\n- **Competitive Advantage**: Faster turnaround times and higher quality work led to increased client satisfaction and new business opportunities.\n\n- **Energy Efficiency**: The new infrastructure consumed 35% less power per frame rendered, aligning with the studio's sustainability goals.",
      testimonial: {
        quote: "AIdeology delivered a secure, role-based AI finance agent that:",
        author: "Robert Thompson",
        position: "Grid Operations Manager",
        company: "PowerGrid Solutions",
        image: "/customers/testimonials/robert-thompson.png",
      },
      metrics: [
        {
          label: "Rendering Time Reduction",
          value: "60%",
          icon: <Clock className="h-6 w-6 text-accent-green" />,
        },
        {
          label: "Cost Savings",
          value: "40%",
          icon: <DollarSign className="h-6 w-6 text-accent-green" />,
        },
        {
          label: "Capacity Increase",
          value: "3x",
          icon: <BarChart className="h-6 w-6 text-accent-green" />,
        },
        {
          label: "Energy Efficiency Improvement",
          value: "35%",
          icon: <Zap className="h-6 w-6 text-accent-green" />,
        },
      ],
      relatedCaseStudies: [
        {
          id: "1",
          title: "Core42 Scales AI Cloud Infrastructure with NVIDIA DGX SuperPOD",
          industry: "AI Infrastructure",
          image: "/customers/g42-infrastructure-case-study.png",
          slug: "g42-ai-cloud-infrastructure",
        },
        {
          id: "2",
          title: "Architectural Firm Enhances Visualization with 3D AI",
          industry: "Architecture & Design",
          image: "/customers/architecture-firm-case-study.png",
          slug: "architectural-visualization",
        },
      ],
    }
  }
  if (slug === "k-tuin-istyle-digital-twin") {
    return {
      title: "iStyle & K-Tuin – Digital-Twin Retail Analytics for 130+ Apple Stores",
      industry: "AI Consulting",
      company: "Midis Group",
      logo: "/customers/mindware-logo.png",
      heroImage: "/customers/digital_twins_image.png",
      challenge:
        "iStyle and K-Tuin (Midis Group) operate more than 130 Apple Premium Reseller stores across Europe, the Middle East and Africa. Store managers lacked precise, real-time insight into how shoppers moved, waited and interacted with products, so layout tweaks, staffing levels and campaign decisions were driven largely by gut feel. They needed a privacy-safe way to capture granular customer-action data—at scale and in real time—to stay competitive in the high-margin Apple retail market.",
      
      solution: "AIdeology built a complete \"store digital-twin\" platform.",
      
      implementation:
        "The implementation was carried out in phases to minimize disruption to ongoing projects. AIdeology worked closely with El Ranchito's technical team to ensure smooth integration with their existing workflows and software tools. The deployment included comprehensive training for the studio's artists and technical staff.",
      results: [
        "Enterprise roll-out ready for all 130+ stores, giving corporate and field teams a single source of behavioural truth.",
        "Model accuracy boosted thanks to the synthetic-image corpus—allowing reliable detection of complex, low-frequency events (e.g., abandoned check-outs).",
        "Operational uplift: managers can dynamically redeploy staff to cut wait times, optimise merchandising based on real engagement hotspots and measure the ROI of in-store campaigns in hours instead of weeks.",
        "Privacy & compliance by design, meeting GDPR and internal Midis Group policies without intrusive cameras or manual tagging.",
      ],
      resultsDetails:
        "The impact of the new AI infrastructure was immediate and significant:\n\n- **Rendering Performance**: Average render times decreased by 60%, with some complex scenes seeing even greater improvements.\n\n- **Cost Efficiency**: Despite the increased performance, overall infrastructure costs decreased by 40% due to better resource utilization and the hybrid cloud approach.\n\n- **Capacity**: The studio was able to take on 3x more projects simultaneously without adding additional staff.\n\n- **Artist Productivity**: Artists could now get feedback on their work in minutes rather than hours, enabling more iterations and higher quality output.\n\n- **Competitive Advantage**: Faster turnaround times and higher quality work led to increased client satisfaction and new business opportunities.\n\n- **Energy Efficiency**: The new infrastructure consumed 35% less power per frame rendered, aligning with the studio's sustainability goals.",
      testimonial: {
        quote:
          "AIdeology built a complete \"store digital-twin\" platform:",
        author: "Robert Thompson",
        position: "Grid Operations Manager",
        company: "PowerGrid Solutions",
        image: "/customers/testimonials/robert-thompson.png",
      },
      metrics: [
        {
          label: "Rendering Time Reduction",
          value: "60%",
          icon: <Clock className="h-6 w-6 text-accent-green" />,
        },
        {
          label: "Cost Savings",
          value: "40%",
          icon: <DollarSign className="h-6 w-6 text-accent-green" />,
        },
        {
          label: "Capacity Increase",
          value: "3x",
          icon: <BarChart className="h-6 w-6 text-accent-green" />,
        },
        {
          label: "Energy Efficiency Improvement",
          value: "35%",
          icon: <Zap className="h-6 w-6 text-accent-green" />,
        },
      ],
      relatedCaseStudies: [
        {
          id: "1",
          title: "Core42 Scales AI Cloud Infrastructure with NVIDIA DGX SuperPOD",
          industry: "AI Infrastructure",
          image: "/customers/g42-infrastructure-case-study.png",
          slug: "g42-ai-cloud-infrastructure",
        },
        {
          id: "2",
          title: "Architectural Firm Enhances Visualization with 3D AI",
          industry: "Architecture & Design",
          image: "/customers/architecture-firm-case-study.png",
          slug: "architectural-visualization",
        },
      ],
    }
  }

  // Sample case study data for VFX studio
  return {
    title: "VFX Studio Accelerates Rendering with AI Infrastructure",
    industry: "Media & Entertainment",
    company: "El Ranchito",
    logo: "/customers/el-ranchito-logo.png",
    heroImage: "/customers/vfx-studio-case-study-hero.png",
    challenge:
      "A leading VFX studio was struggling with long rendering times that were impacting project deadlines and increasing costs. They needed a high-performance computing solution that could handle complex 3D rendering workloads while being scalable and cost-effective.",
    challengeDetails:
      "El Ranchito, a renowned visual effects studio known for their work on major film and television productions, was facing significant challenges with their rendering infrastructure. As projects became more complex and clients demanded higher quality visuals with shorter turnaround times, their existing render farm was struggling to keep up.\n\nSpecific challenges included:\n\n- Render times of up to 72 hours for complex scenes\n- Limited ability to iterate on designs due to long feedback cycles\n- Difficulty scaling resources during peak production periods\n- High operational costs for maintaining and cooling on-premises hardware\n- Inconsistent performance across different types of rendering workloads",
    solution:
      "AIdeology designed and deployed a custom GPU cluster with 128 NVIDIA A100 GPUs, optimized storage fabric, and a specialized job scheduling system. The solution included a hybrid cloud approach that allowed for dynamic scaling during peak rendering periods.",
    solutionDetails:
      "After a comprehensive assessment of El Ranchito's workflows and requirements, AIdeology designed a custom AI infrastructure solution that addressed their specific needs:\n\n1. **High-Performance GPU Cluster**: A core infrastructure of 128 NVIDIA A100 GPUs in a high-density configuration, optimized for both traditional rendering and AI-accelerated denoising and upscaling.\n\n2. **High-Throughput Storage Fabric**: A 1 PB storage system with 200GB/s throughput, ensuring that I/O bottlenecks wouldn't limit GPU performance.\n\n3. **Intelligent Workload Management**: A custom-developed scheduler that intelligently distributed rendering tasks based on their characteristics and priority.\n\n4. **Hybrid Cloud Integration**: Seamless integration with cloud resources for dynamic scaling during peak periods, with automated provisioning and deprovisioning to control costs.\n\n5. **AI-Enhanced Rendering Pipeline**: Implementation of AI denoising and upscaling techniques that reduced the number of samples needed for high-quality output.\n\n6. **Monitoring and Analytics**: Comprehensive monitoring system that provided real-time insights into resource utilization and job progress.",
    implementation:
      "The implementation was carried out in phases to minimize disruption to ongoing projects. AIdeology worked closely with El Ranchito's technical team to ensure smooth integration with their existing workflows and software tools. The deployment included comprehensive training for the studio's artists and technical staff.",
    results: [
      "60% reduction in rendering times",
      "40% decrease in infrastructure costs",
      "Ability to handle 3x more projects simultaneously",
      "Improved artist productivity with real-time feedback",
    ],
    resultsDetails:
      "The impact of the new AI infrastructure was immediate and significant:\n\n- **Rendering Performance**: Average render times decreased by 60%, with some complex scenes seeing even greater improvements.\n\n- **Cost Efficiency**: Despite the increased performance, overall infrastructure costs decreased by 40% due to better resource utilization and the hybrid cloud approach.\n\n- **Capacity**: The studio was able to take on 3x more projects simultaneously without adding additional staff.\n\n- **Artist Productivity**: Artists could now get feedback on their work in minutes rather than hours, enabling more iterations and higher quality output.\n\n- **Competitive Advantage**: Faster turnaround times and higher quality work led to increased client satisfaction and new business opportunities.\n\n- **Energy Efficiency**: The new infrastructure consumed 35% less power per frame rendered, aligning with the studio's sustainability goals.",
    testimonial: {
      quote:
        "The AI infrastructure solution from AIdeology has transformed our rendering pipeline. What used to take days now takes hours, allowing our artists to iterate faster and deliver higher quality work to our clients. The expertise and support from the AIdeology team throughout the implementation and beyond has been exceptional.",
      author: "Carlos Rodriguez",
      position: "CTO",
      company: "El Ranchito",
      image: "/customers/testimonials/carlos-rodriguez.png",
    },
    metrics: [
      {
        label: "Rendering Time Reduction",
        value: "60%",
        icon: <Clock className="h-6 w-6 text-accent-green" />,
      },
      {
        label: "Cost Savings",
        value: "40%",
        icon: <DollarSign className="h-6 w-6 text-accent-green" />,
      },
      {
        label: "Capacity Increase",
        value: "3x",
        icon: <BarChart className="h-6 w-6 text-accent-green" />,
      },
      {
        label: "Energy Efficiency Improvement",
        value: "35%",
        icon: <Zap className="h-6 w-6 text-accent-green" />,
      },
    ],
    relatedCaseStudies: [
      {
        id: "2",
        title: "Architectural Firm Enhances Visualization with 3D AI",
        industry: "Architecture & Design",
        image: "/customers/architecture-firm-case-study.png",
        slug: "architectural-visualization",
      },
      {
        id: "4",
        title: "Media Production Studio Implements Virtual Production Pipeline",
        industry: "Media & Entertainment",
        image: "/customers/virtual-production-case-study.png",
        slug: "virtual-production",
      },
    ],
  }
}

// Helper to render **bold** text as <strong> in React
function renderWithBold(text: string) {
  if (!text) return null;
  // Replace **text** with <strong>text</strong>
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (/^\*\*[^*]+\*\*$/.test(part)) {
      return <strong key={i}>{part.replace(/\*\*/g, "")}</strong>;
    }
    return part;
  });
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = getCaseStudyBySlug(params.slug)

  return (
    <main className="min-h-screen bg-[#f4f4f4] text-charcoal">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Link href="/customers" className="text-electric-green hover:text-electric-green/80 flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4 text-accent-green" />
              Back to Customer Stories
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="bg-accent-green/10 text-electric-green px-3 py-1 rounded-full text-sm font-medium">
              {caseStudy.industry}
            </span>
          </div>

          <div className="flex items-center mb-6">
            {caseStudy.logo && (
              <Image
                src={caseStudy.logo || "/placeholder.svg"}
                alt={caseStudy.company}
                width={160}
                height={80}
                className="h-16 w-auto mr-6"
              />
            )}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">{caseStudy.title}</h1>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-white pb-16">
        <div className="container mx-auto px-4">
          <div className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={caseStudy.heroImage || caseStudy.heroImage}
              alt={caseStudy.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-16 bg-[#f4f4f4]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Challenge Section */}
              <div className="bg-white rounded-lg p-8 mb-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-accent-green/10 flex items-center justify-center mr-3">
                    <span className="text-electric-green font-bold">1</span>
                  </span>
                  Challenge
                </h2>
                <p className="text-charcoal/80 mb-4">{caseStudy.challenge}</p>
                <div className="text-charcoal/80 whitespace-pre-line">{renderWithBold(caseStudy.challengeDetails || "")}</div>
              </div>

              {/* Solution Section */}
              <div className="bg-white rounded-lg p-8 mb-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-accent-green/10 flex items-center justify-center mr-3">
                    <span className="text-electric-green font-bold">2</span>
                  </span>
                  Solution
                </h2>
                <p className="text-charcoal/80 mb-4">{caseStudy.solution}</p>
                <div className="text-charcoal/80 whitespace-pre-line">{renderWithBold(caseStudy.solutionDetails || "")}</div>
                <div className="mt-6">
                  <h3 className="text-xl font-bold mb-3">Implementation Approach</h3>
                  <p className="text-charcoal/80">{caseStudy.implementation}</p>
                </div>
              </div>

              {/* Results Section */}
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-accent-green/10 flex items-center justify-center mr-3">
                    <span className="text-electric-green font-bold">3</span>
                  </span>
                  Results
                </h2>

                {/* Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {caseStudy.metrics.map((metric, index) => (
                    <div
                      key={index}
                      className="bg-accent-green/5 border border-accent-green/20 rounded-lg p-4 flex items-center"
                    >
                      <div className="mr-4">{metric.icon}</div>
                      <div>
                        <div className="text-2xl font-bold text-electric-green">{metric.value}</div>
                        <div className="text-sm text-charcoal/70">{metric.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-charcoal/80 whitespace-pre-line mb-8">{renderWithBold(caseStudy.resultsDetails || "")}</div>

                {/* Testimonial */}
                {caseStudy.testimonial && (
                  <div className="bg-accent-green/10 rounded-lg p-6">
                    <div className="flex items-start">
                      <Quote className="h-8 w-8 text-accent-green opacity-20 flex-shrink-0 mr-3" />
                      <div>
                        <p className="italic text-charcoal/80 mb-4">{caseStudy.testimonial.quote}</p>
                        <div className="flex items-center">
                          {caseStudy.testimonial.image && (
                            <Image
                              src={caseStudy.testimonial.image || "/placeholder.svg"}
                              alt={caseStudy.testimonial.author}
                              width={50}
                              height={50}
                              className="h-12 w-12 rounded-full object-cover mr-4"
                            />
                          )}
                          <div>
                            <p className="font-semibold">{caseStudy.testimonial.author}</p>
                            <p className="text-sm text-charcoal/60">
                              {caseStudy.testimonial.position}, {caseStudy.testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Key Results Summary */}
                <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Key Results</h3>
                  <ul className="space-y-3">
                    {caseStudy.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-accent-green mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-charcoal/80">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Related Case Studies */}
                <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Related Case Studies</h3>
                  <div className="space-y-4">
                    {caseStudy.relatedCaseStudies.map((related) => (
                      <Card key={related.id} className="border border-accent-green/20 hover-lift">
                        <CardContent className="p-0">
                          <div className="relative h-32">
                            <Image
                              src={related.image || "/placeholder.svg"}
                              alt={related.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <div className="text-xs font-semibold bg-accent-green/10 text-electric-green px-2 py-1 rounded-full inline-block mb-2">
                              {related.industry}
                            </div>
                            <h4 className="font-bold mb-2">{related.title}</h4>
                            <Link
                              href={`/customers/${related.slug}`}
                              className="text-electric-green hover:text-electric-green/80 text-sm flex items-center"
                            >
                              Read case study
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-charcoal rounded-lg p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Need Similar Results?</h3>
                  <p className="text-white/80 mb-4">
                    Discover how AIdeology can help your organization achieve similar outcomes with our tailored AI
                    solutions.
                  </p>
                  <Button asChild className="bg-accent-green text-charcoal hover:bg-accent-green/90 w-full">
                    <Link href="#contact">Schedule a Consultation</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto mb-8">
            Let's discuss how AIdeology's solutions can help you achieve your goals and overcome your challenges.
          </p>
          <Button asChild size="lg" className="bg-accent-green text-charcoal hover:bg-accent-green/90">
            <Link href="#contact">Get Started Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
