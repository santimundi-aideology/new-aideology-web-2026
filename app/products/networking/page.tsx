import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProductLayout from "@/components/layouts/product-layout"

export const metadata = {
  title: "AI Networking Solutions | High-Performance Connectivity | AIdeology",
  description:
    "AIdeology offers high-performance networking solutions optimized for AI data centers, including NVIDIA Quantum-2 InfiniBand and Spectrum Ethernet technologies.",
}

export default function NetworkingPage() {
  return (
    <ProductLayout>
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-6 text-charcoal">AI Networking Solutions</h1>
        <p className="text-xl text-gray-600 mb-8">
          High-performance, low-latency networking infrastructure optimized for AI data centers and large-scale
          computing environments.
        </p>
        <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
          <Image
            src="/services/network-architecture.png"
            alt="High-performance networking infrastructure for AI data centers"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-charcoal">The Backbone of AI Infrastructure</h2>
        <p className="mb-4">
          In modern AI environments, networking is a critical component that can significantly impact overall system
          performance. AI workloads generate massive data transfers between compute nodes, storage systems, and other
          infrastructure components, requiring specialized networking solutions designed for high bandwidth, low
          latency, and intelligent data handling.
        </p>
        <p className="mb-4">
          AIdeology provides comprehensive networking solutions optimized for AI infrastructure, from high-performance
          InfiniBand and Ethernet technologies to complete data center fabric designs and implementation services.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-charcoal">Our Networking Solutions</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-2 text-charcoal">NVIDIA Quantum-2 InfiniBand</h3>
            <p className="text-gray-600 mb-4">
              The world's leading high-performance networking platform, delivering 400Gb/s per port with extremely low
              latency and in-network computing capabilities.
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-600">
              <li>400Gb/s NDR InfiniBand switches and adapters</li>
              <li>NVIDIA Quantum-2 switch systems (QM9700)</li>
              <li>NVIDIA ConnectX-7 SmartNICs</li>
              <li>In-Network Computing with SHARP technology</li>
              <li>Ideal for large-scale AI clusters and HPC environments</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-2 text-charcoal">NVIDIA Spectrum Ethernet</h3>
            <p className="text-gray-600 mb-4">
              High-performance Ethernet networking solutions designed for AI and cloud data centers.
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-600">
              <li>NVIDIA Spectrum-4 Ethernet switches</li>
              <li>400GbE connectivity with advanced telemetry</li>
              <li>NVIDIA DOCA software framework support</li>
              <li>NVIDIA BlueField DPUs for accelerated networking</li>
              <li>Perfect for enterprise AI deployments and cloud environments</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-2 text-charcoal">Fiber Optic Infrastructure</h3>
            <p className="text-gray-600 mb-4">
              Complete fiber optic cabling solutions for high-speed data center connectivity.
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-600">
              <li>Corning and CommScope structured cabling systems</li>
              <li>OM4 and OM5 multimode fiber solutions</li>
              <li>OS2 single-mode fiber for extended distances</li>
              <li>MPO/MTP high-density connectivity</li>
              <li>Complete design and installation services</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-2 text-charcoal">Network Design & Implementation</h3>
            <p className="text-gray-600 mb-4">
              Expert services for designing, deploying, and managing high-performance AI networks.
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-600">
              <li>Network architecture design</li>
              <li>Performance optimization and tuning</li>
              <li>Network security implementation</li>
              <li>Monitoring and management solutions</li>
              <li>24/7 support and maintenance services</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-charcoal">Why Choose AIdeology for Networking</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2 text-charcoal">AI-Optimized Designs</h3>
            <p className="text-gray-600">
              Our networking solutions are specifically designed for the unique demands of AI workloads, ensuring
              optimal performance for your AI infrastructure.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2 text-charcoal">End-to-End Solutions</h3>
            <p className="text-gray-600">
              We provide complete networking solutions, from hardware selection and architecture design to
              implementation and ongoing support.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2 text-charcoal">Certified Expertise</h3>
            <p className="text-gray-600">
              Our team includes NVIDIA certified networking specialists with extensive experience in designing and
              implementing high-performance AI networks.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-accent-green/10 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4 text-charcoal">Build Your AI Network Infrastructure</h2>
        <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
          Contact our team to discuss your AI networking requirements and learn how our solutions can optimize your AI
          infrastructure performance.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="bg-accent-green text-charcoal hover:bg-accent-green/90">
            <Link href="#contact">Contact us</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-accent-green text-accent-green hover:bg-accent-green hover:text-white"
          >
            <Link href="https://www.nvidia.com/en-us/networking/" target="_blank" rel="noopener noreferrer">
              Learn more about NVIDIA Networking
            </Link>
          </Button>
        </div>
      </div>
    </ProductLayout>
  )
}
