import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProductLayout from "@/components/layouts/product-layout"
import ScrollAnimations from "@/components/scroll-animations"
import { ChevronRight, Zap, Shield, TrendingUp, Users, Server, Database, Cpu, Network, CheckCircle, ArrowRight } from "lucide-react"

export const metadata = {
  title: "DGX Spark: Your AI Lab in a Box | Private AI Copilot | AIdeology",
  description:
    "DGX Spark is a petaflop-class NVIDIA system that runs your own copilots, RAG, and AI agents on your data, inside your perimeter. Fast to deploy, easy to scale into a full AI Factory.",
}

export default function DGXSparkPage() {
  const breadcrumbPath = [
    { name: "Products", href: "/products" },
    { name: "DGX Spark" }
  ];

  return (
    <ProductLayout>
      <ScrollAnimations />
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
      <div className="w-full px-6 lg:px-12 mb-16 pt-16">
        <div className="max-w-7xl mx-auto">
          {/* Full-width header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-accent-green/10 px-3 py-1 text-sm font-semibold text-accent-green border border-accent-green/20">
              NEW
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal animate-fade-in-up">
            DGX Spark: Your AI Lab in a Box
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 animate-fade-in-up max-w-4xl" style={{ animationDelay: '100ms' }}>
            Private AI Copilot in a Box – Powered by NVIDIA DGX Spark
          </p>

          {/* Two-column layout: content left, image right */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] items-center">
            {/* Left column - content */}
            <div>
              <p className="text-lg text-gray-700 mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                DGX Spark is a petaflop-class NVIDIA system that runs your own copilots, RAG, and AI agents on your data, inside your perimeter. Fast to deploy, easy to scale into a full AI Factory.
              </p>
              
              {/* Key Bullets */}
              <div className="grid grid-cols-1 gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent-green flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-800 font-medium">Run advanced open models and RAG locally</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent-green flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-800 font-medium">Keep data fully sovereign and compliant</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent-green flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-800 font-medium">Scale from 1 box to DGX / OVX and full AI Factories</p>
                  </div>
                </div>
              </div>

              {/* CTAs - visible on desktop */}
              <div className="hidden lg:flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <Button 
                  asChild 
                  className="bg-accent-green text-charcoal hover:bg-charcoal hover:text-white hover:scale-105 transition-all duration-300 ease-in-out px-8 py-6 text-lg"
                >
                  <Link href="/book-discovery-call">Book a DGX Spark Strategy Call</Link>
                </Button>
              </div>
            </div>

            {/* Right column - image */}
            <div className="relative w-full animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              {/* Desktop image */}
              <Image
                src="/spark.png"
                alt="DGX Spark - Compact AI Lab in a Box for enterprise AI development"
                width={800}
                height={450}
                className="hidden lg:block w-full h-auto rounded-lg transition-transform duration-300 ease-out hover:scale-105"
                priority
              />
              {/* Mobile image */}
              <Image
                src="/spark-mobile.png"
                alt="DGX Spark - Compact AI Lab in a Box for enterprise AI development"
                width={600}
                height={800}
                className="lg:hidden w-full h-auto rounded-lg transition-transform duration-300 ease-out hover:scale-105"
                priority
              />
            </div>
          </div>

          {/* CTA button - visible on mobile below image */}
          <div className="lg:hidden flex flex-col gap-4 mt-8 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <Button 
              asChild 
              className="bg-accent-green text-charcoal hover:bg-charcoal hover:text-white hover:scale-105 transition-all duration-300 ease-in-out px-8 py-6 text-lg w-full"
            >
              <Link href="/book-discovery-call">Book a DGX Spark Strategy Call</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* What Is DGX Spark Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 animate-fade-in-up">
              What Is DGX Spark
            </h2>
            <p className="text-lg text-gray-700 mb-12 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              DGX Spark is a compact NVIDIA system built on the same architecture as DGX, OVX, and DGX Cloud. It brings enterprise-grade AI capability into a desktop-sized form factor, ideal for pilots, labs, and secure environments.
            </p>

            {/* Four Pillars */}
            <div className="space-y-8 mb-12">
              {/* Top row - 2 larger boxes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-accent-green/10 to-accent-green/5 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                  <Server className="h-12 w-12 text-accent-green mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-charcoal">AI Lab in a Box</h3>
                  <p className="text-gray-600 mb-4">
                    Build, test, and refine AI projects in days. Extremely portable with a small footprint (≈15×15×5 cm, 1.2 kg), carry it between offices or countries, place it on a boardroom table, or install in any office space.
                  </p>
                  <p className="text-gray-600">
                    Run AI anywhere with just electricity—no internet required for inference once models and data are downloaded. Perfect for secure facilities, remote branches, and temporary project sites.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                  <TrendingUp className="h-12 w-12 text-charcoal mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-charcoal">Scale When Ready</h3>
                  <p className="text-gray-600 mb-4">
                    Clear upgrade path with the same software concepts as DGX/OVX/Cloud—containers, APIs, and model serving frameworks. Whatever works on Spark can be promoted to DGX/OVX clusters or mirrored in DGX Cloud.
                  </p>
                  <p className="text-gray-600">
                    ConnectX networking enables linking multiple Sparks or connecting to broader DGX/OVX environments. Spark isn't a dead-end gadget—it's how you start your AI factory.
                  </p>
                </div>
              </div>

              {/* Bottom row - 2 smaller boxes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                  <Shield className="h-10 w-10 text-charcoal mb-3" />
                  <h3 className="text-xl font-bold mb-3 text-charcoal">Sovereign AI Sandbox</h3>
                  <p className="text-gray-600 mb-3">
                    All compute and data stays inside your perimeter with full offline capability.
                  </p>
                  <p className="text-gray-600 mb-2">
                    Easier compliance conversations with:
                  </p>
                  <ul className="text-gray-600 space-y-1 ml-4">
                    <li>• Regulators</li>
                    <li>• Security teams</li>
                    <li>• Legal departments</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-accent-green/10 to-accent-green/5 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '450ms' }}>
                  <Database className="h-10 w-10 text-accent-green mb-3" />
                  <h3 className="text-xl font-bold mb-3 text-charcoal">Predictable Economics + Performance</h3>
                  <p className="text-gray-600">
                    One-time CapEx for years of usage with no per-hour cloud GPU billing or surprise costs from usage spikes. Dedicated hardware means consistent, reliable performance that never varies—unlike shared cloud instances where performance can degrade with multi-tenancy. Total cost and performance predictability for budget and project planning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center animate-fade-in-up">
              High-Impact Use Cases on Day One
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              DGX Spark delivers immediate value across diverse AI applications
            </p>

            <div className="space-y-6">
              {/* First row - 3 boxes */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                  <div className="h-12 w-12 bg-accent-green/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-accent-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-charcoal">Private Copilots & Knowledge Assistants</h3>
                  <p className="text-gray-600">
                    Deploy secure, internal copilots for HR, compliance, or operations. Keep sensitive knowledge within your organization.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                  <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <Database className="h-6 w-6 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-charcoal">Secure Document Intelligence</h3>
                  <p className="text-gray-600">
                    Automate extraction, tagging, and summarization of confidential reports or forms without cloud exposure.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                  <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <Network className="h-6 w-6 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-charcoal">Branch / Plant Intelligence Node</h3>
                  <p className="text-gray-600">
                    Analyze sensor and camera feeds locally, summarize insights with LLMs at the edge for real-time decision making.
                  </p>
                </div>
              </div>

              {/* Second row - 2 boxes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                  <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <Cpu className="h-6 w-6 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-charcoal">Multi-Agent Workflows</h3>
                  <p className="text-gray-600">
                    Run coordinated agents for reporting, scheduling, or data-driven automation. Orchestrate complex AI workflows.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                  <div className="h-12 w-12 bg-accent-green/10 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-accent-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-charcoal">Data Science Turbo Node</h3>
                  <p className="text-gray-600">
                    Accelerate existing analytics, training, and feature engineering using GPU-optimized frameworks for faster insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why DGX Spark Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center animate-fade-in-up">
              Why DGX Spark – Clear Advantages
            </h2>

            {/* vs Cloud GPUs */}
            <div className="bg-gray-50 rounded-lg p-8 mb-8 shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h3 className="text-2xl font-bold mb-6 text-charcoal">vs Cloud GPUs</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent-green flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Total Control</p>
                    <p className="text-gray-600">Complete control over data and cost with no cloud dependencies</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent-green flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Predictable Pricing</p>
                    <p className="text-gray-600">No per-hour GPU billing or surprise costs from usage spikes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent-green flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Consistent Performance</p>
                    <p className="text-gray-600">No shared tenancy or performance variability</p>
                  </div>
                </div>
              </div>
            </div>

            {/* vs DIY Workstations */}
            <div className="bg-gray-50 rounded-lg p-8 mb-8 shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <h3 className="text-2xl font-bold mb-6 text-charcoal">vs DIY Workstations</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent-green flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">128 GB Unified Memory</p>
                    <p className="text-gray-600">Handles large models effortlessly without memory constraints</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent-green flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Ready to Run</p>
                    <p className="text-gray-600">Ships with DGX OS and NVIDIA AI Enterprise pre-configured</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent-green flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Enterprise Networking</p>
                    <p className="text-gray-600">ConnectX networking enables multi-Spark or cluster expansion</p>
                  </div>
                </div>
              </div>
            </div>

            {/* vs Full DGX / OVX */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <h3 className="text-2xl font-bold mb-6 text-charcoal">vs Full DGX / OVX</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent-green flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Ideal Entry Point</p>
                    <p className="text-gray-600">Perfect for labs and small teams before scaling up</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent-green flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Seamless Upgrade Path</p>
                    <p className="text-gray-600">Direct migration to full-scale DGX/OVX clusters when ready</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent-green flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Same Software Stack</p>
                    <p className="text-gray-600">Use identical tools throughout your AI journey</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Factory Journey Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center animate-fade-in-up">
              From One Box to an AI Factory
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Start small and scale seamlessly with a unified architecture
            </p>

            <div className="relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-accent-green to-charcoal transform -translate-y-1/2 z-0"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
                <div className="bg-white border-2 border-accent-green/30 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                  <div className="h-12 w-12 bg-accent-green rounded-full flex items-center justify-center mb-4 text-charcoal font-bold">1</div>
                  <h3 className="text-xl font-bold mb-3 text-charcoal">DGX Spark on Your Desk</h3>
                  <p className="text-gray-600">
                    Run pilots and prototypes. Validate AI use cases with real data in a secure environment.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-300 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                  <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center mb-4 text-charcoal font-bold">2</div>
                  <h3 className="text-xl font-bold mb-3 text-charcoal">Multiple Sparks Connected</h3>
                  <p className="text-gray-600">
                    Scale workloads and teams. Add capacity by connecting multiple Spark systems together.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-300 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                  <div className="h-12 w-12 bg-gray-300 rounded-full flex items-center justify-center mb-4 text-charcoal font-bold">3</div>
                  <h3 className="text-xl font-bold mb-3 text-charcoal">DGX / OVX Cluster</h3>
                  <p className="text-gray-600">
                    Move to production-grade AI Factory. Deploy enterprise-scale infrastructure with proven ROI.
                  </p>
                </div>

                <div className="bg-white border-2 border-charcoal/30 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                  <div className="h-12 w-12 bg-charcoal rounded-full flex items-center justify-center mb-4 text-white font-bold">4</div>
                  <h3 className="text-xl font-bold mb-3 text-charcoal">Hybrid with DGX Cloud</h3>
                  <p className="text-gray-600">
                    Extend capacity securely when needed. Burst to cloud while maintaining on-prem control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AIdeology Delivery Process Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center animate-fade-in-up">
              How AIdeology Delivers DGX Spark Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 bg-accent-green rounded-lg flex items-center justify-center text-charcoal font-bold text-xl">1</div>
                  <h3 className="text-xl font-bold text-charcoal">Strategy & Use-Case Discovery</h3>
                </div>
                <p className="text-gray-600">
                  Identify high-value opportunities aligned with your business goals. We work with your team to prioritize AI use cases that can deliver impact quickly.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 bg-gray-200 rounded-lg flex items-center justify-center text-charcoal font-bold text-xl">2</div>
                  <h3 className="text-xl font-bold text-charcoal">Enablement & Integration</h3>
                </div>
                <p className="text-gray-600">
                  Since Spark arrives pre-configured, our focus is on enabling your team: connecting data sources, deploying your chosen copilots or frameworks, and ensuring security and governance are properly aligned.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 bg-gray-300 rounded-lg flex items-center justify-center text-charcoal font-bold text-xl">3</div>
                  <h3 className="text-xl font-bold text-charcoal">Pilot Build-Out (4–8 Weeks)</h3>
                </div>
                <p className="text-gray-600">
                Deploy multiple AI use cases across different functions using your own data — from copilots and document intelligence to analytics or automation. Demonstrate measurable business value and establish a repeatable framework for scaling across the enterprise.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 bg-charcoal rounded-lg flex items-center justify-center text-white font-bold text-xl">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal">Scale-Up Roadmap</h3>
                    <span className="text-sm text-gray-500 italic">(Optional / If Necessary)</span>
                  </div>
                </div>
                <p className="text-gray-600">
                  Define the path from pilot to full AI Factory. Plan expansion to DGX or OVX clusters, including performance benchmarking, ROI modeling, and training for internal teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center animate-fade-in-up">
            Common Questions About DGX Spark
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <h3 className="text-xl font-bold mb-3 text-charcoal">Can it run offline?</h3>
                <p className="text-gray-600">
                  Yes, fully air-gapped once data and models are downloaded. This makes it perfect for secure environments, classified networks, or locations with limited connectivity. All AI processing happens locally on the device.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <h3 className="text-xl font-bold mb-3 text-charcoal">Is it for my entire organization?</h3>
                <p className="text-gray-600">
                  It's ideal for small AI teams or pilot labs. Think of it as your AI experimentation platform for 5-15 users. For enterprise-wide deployments, you'll want to scale to DGX or OVX clusters, but everything you build on Spark will transfer seamlessly.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <h3 className="text-xl font-bold mb-3 text-charcoal">How do I scale later?</h3>
                <p className="text-gray-600">
                  Everything you build on Spark runs on DGX or OVX. The same software stack, tools, and workflows transfer directly. You can connect multiple Sparks together, or when ready, migrate to full DGX BasePOD or SuperPOD configurations without rewriting code.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                <h3 className="text-xl font-bold mb-3 text-charcoal">What models can I run on DGX Spark?</h3>
                <p className="text-gray-600">
                  DGX Spark can run popular open models including Llama, Mistral, Falcon, and domain-specific models. With 128GB of unified memory, you can run large language models up to 200B parameters and handle complex multi-modal AI workloads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-accent-green/10 to-accent-green/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 animate-fade-in-up">
              Ready to Start Your AI Factory?
            </h2>
            <p className="text-xl text-gray-700 mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              DGX Spark is the fastest, safest way to make AI real with your data and your rules — a single box that grows with your ambition.
            </p>
            
            <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <Button 
                asChild 
                className="bg-accent-green text-charcoal hover:bg-charcoal hover:text-white hover:scale-105 transition-all duration-300 ease-in-out px-8 py-6 text-lg"
              >
                <Link href="/book-discovery-call">Book a Discovery Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </ProductLayout>
  )
}

