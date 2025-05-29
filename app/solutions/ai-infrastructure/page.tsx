import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Server, Database, Network, Cpu, Shield, ArrowRight } from "lucide-react"

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

  const partnersInfraAI = [
    { name: "Hewlett Packard Enterprise", logo: "/partners/hpe-logo.png" },
    { name: "NVIDIA", logo: "/partners/nvidia-logo.png" },
    { name: "NetApp", logo: "/partners/netapp-logo.png" },
    { name: "DDN", logo: "/partners/ddn-logo.png" },
    { name: "WEKA", logo: "/partners/weka-logo.png" },
    { name: "VAST", logo: "/partners/vast-logo.png" },
    { name: "NVIDIA Omniverse", logo: "/partners/nvidia-omniverse-logo.png" },
    { name: "Atenea Suite", logo: "/partners/atenea-suite-logo.png" },
    { name: "Run:ai", logo: "/partners/runai-logo.png" },
    { name: "Maind", logo: "/partners/maind-logo.png" },
    { name: "Weights & Biases", logo: "/partners/wandb-logo.png" },
  ]

  return (
    <main className="min-h-screen bg-[#f4f4f4] text-charcoal">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">AI Infrastructure</h1>
              <p className="text-xl mb-8 text-charcoal/80">
                From GPU clusters to storage fabrics, we design and deploy turnkey HPC-AI stacks tailored to your
                specific workloads and requirements.
              </p>
              <Button asChild className="bg-accent-green text-charcoal hover:bg-accent-green/90">
                <Link href="#contact">Schedule a consultation</Link>
              </Button>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image src="/ai-server-room-gpus.png" alt="AI Infrastructure" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Infrastructure Components</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border border-accent-green/20 hover-lift">
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
          <h2 className="text-3xl font-bold mb-12 text-center">Our Infrastructure Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: "01", title: "Assessment", description: "We analyze your workloads and requirements" },
              { number: "02", title: "Design", description: "Custom architecture tailored to your needs" },
              { number: "03", title: "Deployment", description: "Expert installation and configuration" },
              { number: "04", title: "Management", description: "Ongoing support and optimization" },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-accent-green/20">{step.number}</div>
                <h3 className="text-xl font-bold mt-2">{step.title}</h3>
                <p className="text-charcoal/70 mt-2">{step.description}</p>
                {index < 3 && <ArrowRight className="hidden md:block absolute -right-3 top-8 text-accent-green/50" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Infrastructure Partners</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
            {partnersInfraAI.map((partner, index) => (
              <Card
                key={index}
                className="bg-[#f4f4f4] border border-accent-green/10 rounded-md p-6 flex items-center justify-center hover:border-accent-green/30 transition-colors w-full h-32"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
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

      {/* Case Study Section */}
      <section className="py-20 bg-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Case Study: VFX Studio Infrastructure</h2>
              <p className="mb-4">
                We designed and deployed a 10-petaflop GPU cluster for a leading VFX studio, reducing their rendering
                times by 60% and enabling real-time collaboration.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-accent-green mr-2">✓</span> 128 NVIDIA A100 GPUs in a high-density configuration
                </li>
                <li className="flex items-start">
                  <span className="text-accent-green mr-2">✓</span> 1 PB high-performance storage with 200GB/s
                  throughput
                </li>
                <li className="flex items-start">
                  <span className="text-accent-green mr-2">✓</span> Custom scheduler for optimal resource allocation
                </li>
              </ul>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="#case-studies">View more case studies</Link>
              </Button>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image src="/vfx-studio-server-room.png" alt="VFX Studio Infrastructure" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#f4f4f4]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your AI infrastructure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-charcoal/80">
            Let's discuss how our tailored infrastructure solutions can accelerate your AI initiatives.
          </p>
          <Button asChild size="lg" className="bg-accent-green text-charcoal hover:bg-accent-green/90">
            <Link href="#contact">Book a discovery call</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
