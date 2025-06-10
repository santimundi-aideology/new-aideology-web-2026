import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProductLayout from "@/components/layouts/product-layout"

export const metadata = {
  title: "AI Networking Solutions | High-Performance Connectivity | AIdeology",
  description:
    "AIdeology offers cutting-edge AI networking solutions including NVIDIA Spectrum-X, Quantum InfiniBand, ConnectX SuperNICs, and BlueField DPUs for enterprise AI infrastructure.",
}

export default function NetworkingPage() {
  return (
    <ProductLayout>
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-6 text-charcoal">AI Networking Solutions</h1>
        <p className="text-xl text-gray-600 mb-8">
          Advanced networking infrastructure designed for AI data centers, featuring the latest Ethernet and InfiniBand
          technologies optimized for large-scale AI workloads and multi-million-GPU fabrics.
        </p>
        <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
          <Image
            src="/products/ai_network.png"
            alt="Advanced AI networking infrastructure with high-performance switches and adapters"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-charcoal">The Foundation of AI Infrastructure</h2>
        <p className="mb-4">
          Modern AI workloads demand unprecedented networking performance to handle massive data transfers between
          compute nodes, storage systems, and accelerators. From training trillion-parameter models to real-time
          inference at scale, the network fabric becomes the critical bottleneck that determines overall system
          performance.
        </p>
        <p className="mb-4">
          AIdeology delivers state-of-the-art networking solutions that eliminate these bottlenecks, featuring the
          latest NVIDIA networking technologies designed specifically for AI infrastructure requirements.
        </p>
      </div>

      {/* Ethernet Switch ASICs & AI-Fabric Platforms */}
      <div className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-12">
          <div className="w-full md:w-1/2">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/products/ethernet.jpeg"
                alt="NVIDIA Spectrum-4 ASIC and SN5000 switches for AI fabric platforms"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-charcoal">Ethernet Switch ASICs & AI-Fabric Platforms</h2>
            <p className="text-gray-600 mb-6">
              Next-generation Ethernet switching solutions designed specifically for AI workloads, delivering
              unprecedented bandwidth and intelligent traffic management for modern data centers.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-3 text-charcoal">Spectrum-4 ASIC / SN5000 Switches</h3>
            <p className="text-gray-600 mb-4">
              The foundation of 2025 Spectrum-X deployments, delivering massive fabric bandwidth with AI-optimized
              features.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>
                <strong>51.2 Tb/s</strong> fabric bandwidth
              </li>
              <li>
                <strong>Up to 800 Gb/s</strong> per port
              </li>
              <li>RoCE optimizations for AI workloads</li>
              <li>Advanced congestion control</li>
              <li>Foundation for Spectrum-X platforms</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-3 text-charcoal">Spectrum-X Platform</h3>
            <p className="text-gray-600 mb-4">
              Turnkey AI Ethernet fabric combining switches, adapters, and intelligent management for seamless
              deployment.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Spectrum-4 switches + BlueField-3/ConnectX-7</li>
              <li>UFM telemetry and monitoring</li>
              <li>Intelligent congestion control</li>
              <li>Turnkey AI fabric solution</li>
              <li>Optimized for AI training and inference</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-lg p-6 border border-blue-200">
            <h3 className="text-xl font-bold mb-3 text-charcoal">Spectrum-X Photonics</h3>
            <div className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-3">Roadmap</div>
            <p className="text-gray-600 mb-4">
              Next-generation co-packaged optics variant targeting extreme bandwidth with improved power efficiency.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>
                <strong>1.6 Tb/s</strong> per port target
              </li>
              <li>~50% power reduction vs current generation</li>
              <li>Co-packaged optics technology</li>
              <li>Sampling late 2025</li>
              <li>Ultra-high-density AI fabrics</li>
            </ul>
          </div>
        </div>
      </div>

      {/* InfiniBand Switches */}
      <div className="mb-16">
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 mb-12">
          <div className="w-full md:w-1/2">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/products/infiniband.jpg"
                alt="NVIDIA Quantum InfiniBand switches for high-performance computing"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-charcoal">InfiniBand Switches</h2>
            <p className="text-gray-600 mb-6">
              Ultra-low latency InfiniBand switching solutions designed for the most demanding HPC and AI workloads,
              featuring in-network computing and adaptive routing capabilities.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-3 text-charcoal">Quantum-X800</h3>
            <p className="text-gray-600 mb-4">
              High-performance NDR switch with advanced in-network computing capabilities and seamless upgrade path.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4">
              <li>
                <strong>800 Gb/s</strong> per port bandwidth
              </li>
              <li>
                <strong>144-port</strong> NDR configuration
              </li>
              <li>SHARP v4 in-network compute</li>
              <li>Adaptive routing algorithms</li>
              <li>Drop-in upgrade for Quantum-2 clusters</li>
              <li>Ultra-low latency for AI training</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg shadow-lg p-6 border border-purple-200">
            <h3 className="text-xl font-bold mb-3 text-charcoal">Quantum 3450-LD Photonic Switch</h3>
            <div className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full mb-3">
              Roadmap
            </div>
            <p className="text-gray-600 mb-4">
              Revolutionary silicon-photonics InfiniBand ASIC designed for multi-million-GPU fabric deployments.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>
                <strong>1.6 Tb/s</strong> per port capability
              </li>
              <li>Silicon-photonics InfiniBand ASIC</li>
              <li>Multi-million-GPU fabric support</li>
              <li>First customer shipments late 2025</li>
              <li>Exascale computing enablement</li>
            </ul>
          </div>
        </div>
      </div>

      {/* SmartNIC / SuperNIC Adapters */}
      <div className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-12">
          <div className="w-full md:w-1/2">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/products/smartnic.jpg"
                alt="NVIDIA ConnectX SmartNIC and SuperNIC adapters for AI workloads"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-charcoal">SmartNIC / SuperNIC Adapters</h2>
            <p className="text-gray-600 mb-6">
              Advanced network interface cards with integrated compute engines, designed to accelerate networking
              functions and reduce CPU overhead in AI infrastructure deployments.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-3 text-charcoal">ConnectX-8 SuperNIC</h3>
            <p className="text-gray-600 mb-4">
              Next-generation adapter designed for Blackwell-era systems with unprecedented bandwidth and efficiency.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4">
              <li>
                <strong>800 Gb/s</strong> bandwidth capability
              </li>
              <li>
                <strong>PCIe Gen 6</strong> interface
              </li>
              <li>Optimized for Blackwell HGX and NVL72</li>
              <li>Reduced motherboard PCIe-switch requirements</li>
              <li>Direct 800 Gb/s fabric connectivity</li>
              <li>Advanced offload engines</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-3 text-charcoal">ConnectX-7 SmartNIC</h3>
            <p className="text-gray-600 mb-4">
              Proven workhorse adapter with in-network compute engines, standard in Hopper/H200 clusters since 2023.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4">
              <li>
                <strong>400 Gb/s</strong> bandwidth
              </li>
              <li>
                <strong>PCIe 5.0</strong> interface
              </li>
              <li>In-network compute engines</li>
              <li>Standard in Hopper/H200 clusters</li>
              <li>Mature, production-ready platform</li>
              <li>Comprehensive software ecosystem</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Data-Processing Units (DPUs) */}
      <div className="mb-16">
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 mb-12">
          <div className="w-full md:w-1/2">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/products/dpu.jpg"
                alt="NVIDIA BlueField Data Processing Units for AI infrastructure"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-charcoal">Data-Processing Units (DPUs)</h2>
            <p className="text-gray-600 mb-6">
              Programmable data center infrastructure processors that accelerate storage, security, and networking
              functions while offloading these tasks from the main CPU.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-3 text-charcoal">BlueField-3 DPU</h3>
            <p className="text-gray-600 mb-4">
              Current-generation DPU widely adopted in edge-AI stacks, providing comprehensive acceleration
              capabilities.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4">
              <li>
                <strong>400 Gb/s</strong> networking bandwidth
              </li>
              <li>
                <strong>16 Arm A78</strong> CPU cores
              </li>
              <li>DOCA acceleration framework</li>
              <li>Storage, security, and SDN offloads</li>
              <li>Widely adopted in 2025 edge-AI stacks</li>
              <li>Comprehensive software ecosystem</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-lg p-6 border border-green-200">
            <h3 className="text-xl font-bold mb-3 text-charcoal">BlueField-4 DPU</h3>
            <div className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-3">Roadmap</div>
            <p className="text-gray-600 mb-4">
              Next-generation DPU with dramatically improved performance and bandwidth capabilities.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>
                <strong>800 Gb/s</strong> bandwidth (2× BF3)
              </li>
              <li>
                <strong>64-billion-transistor</strong> SoC
              </li>
              <li>~4× integer performance vs BF3</li>
              <li>Currently sampling</li>
              <li>OEM volume production 2H 2025</li>
              <li>Advanced AI acceleration features</li>
            </ul>
          </div>
        </div>
      </div>

      {/* AIdeology Partnership Section */}
      <div className="mb-12 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-charcoal text-center">AIdeology: Your Networking Partner</h2>
        <p className="text-gray-600 mb-6 text-center max-w-3xl mx-auto">
          As an authorized NVIDIA networking partner and AI consulting specialist, AIdeology provides end-to-end
          networking solutions from design and procurement to deployment and optimization.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="text-lg font-semibold mb-2 text-charcoal">Design & Architecture</h3>
            <p className="text-gray-600 text-sm">
              Custom network fabric design optimized for your specific AI workloads and performance requirements.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="text-lg font-semibold mb-2 text-charcoal">Implementation & Deployment</h3>
            <p className="text-gray-600 text-sm">
              Professional installation, configuration, and optimization services for maximum performance.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="text-lg font-semibold mb-2 text-charcoal">Support & Maintenance</h3>
            <p className="text-gray-600 text-sm">
              Ongoing monitoring, maintenance, and performance optimization to ensure peak operation.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-accent-green/10 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4 text-charcoal">Build Your AI Network Infrastructure</h2>
        <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
          Contact our networking specialists to discuss your AI infrastructure requirements and learn how our
          cutting-edge solutions can accelerate your AI initiatives.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="bg-accent-green text-charcoal hover:bg-accent-green/90">
            <Link href="/contact">Contact Our Specialists</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-accent-green text-accent-green hover:bg-accent-green hover:text-white"
          >
            <Link href="https://www.nvidia.com/en-us/networking/" target="_blank" rel="noopener noreferrer">
              Learn More About NVIDIA Networking
            </Link>
          </Button>
        </div>
      </div>
    </ProductLayout>
  )
}
