import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProductLayout from "@/components/layouts/product-layout"

export const metadata = {
  title: "NVIDIA DGX Systems | Enterprise AI Supercomputers | AIdeology",
  description:
    "AIdeology offers the complete portfolio of NVIDIA DGX systems, from the latest Blackwell-powered DGX B200 to massive DGX SuperPOD installations for enterprise AI at scale.",
}

export default function NvidiaDGXPage() {
  return (
    <ProductLayout>
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-6 text-charcoal">NVIDIA DGX Systems</h1>
        <p className="text-xl text-gray-600 mb-8">
          The world's most advanced AI supercomputing platform, engineered to accelerate breakthrough discoveries and
          transform industries through the power of artificial intelligence.
        </p>
        <div className="relative h-[500px] rounded-lg overflow-hidden mb-8">
          <Image
            src="/products/nvidia_dgx_products_image.jpg"
            alt="NVIDIA DGX AI supercomputing systems in enterprise data center environment"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-charcoal">Next-Generation DGX Portfolio</h2>
        <p className="text-lg mb-8 text-gray-600">
          AIdeology delivers the complete spectrum of NVIDIA DGX systems, from cutting-edge Blackwell architecture to
          proven Hopper-based platforms, ensuring your organization has access to the most powerful AI infrastructure
          available.
        </p>

        {/* DGX B200 Section */}
        <div className="mb-16 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8">
              <h3 className="text-2xl font-bold mb-4 text-charcoal">NVIDIA DGX B200</h3>
              <p className="text-gray-600 mb-4">
                The flagship single-node AI supercomputer powered by NVIDIA's revolutionary Blackwell architecture. The
                DGX B200 represents a quantum leap in AI performance and efficiency.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    <strong>Eight B200 GPUs</strong> with 1440GB total HBM3e memory
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    <strong>5th-generation NVLink switches</strong> for unprecedented interconnect bandwidth
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    <strong>~72 PFLOPS FP8 training</strong> performance
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    <strong>144 PFLOPS FP4 inference</strong> capability
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    <strong>3× training uplift</strong> and <strong>15× inference uplift</strong> vs DGX H100
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative h-64 lg:h-auto">
              <Image
                src="/products/dgx_b200_image.png"
                alt="NVIDIA DGX B200 Blackwell architecture AI supercomputer"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* DGX H200 Section */}
        <div className="mb-16 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row-reverse">
            <div className="lg:w-1/2 p-8">
              <h3 className="text-2xl font-bold mb-4 text-charcoal">NVIDIA DGX H200</h3>
              <p className="text-gray-600 mb-4">
                The enhanced Hopper-based system featuring upgraded H200 GPUs with significantly increased memory
                capacity, enabling larger models to remain entirely on-GPU for optimal performance.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    <strong>Eight H200 GPUs</strong> with 1128GB total HBM3e memory
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    <strong>7.2TB/s of bidirectional GPU-to-GPU bandwidth</strong>, 1.5X more than previous generation
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    <strong>1TB/s</strong> of peak bidirectional network bandwidth
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    Powerful <strong>Dual Intel Xeon Platinum 8480C processors, 112 cores total, and 2TB System Memory</strong> for the most intensive AI jobs
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative h-64 lg:h-auto">
              <Image
                src="/products/dgx_h200_image.jpg"
                alt="NVIDIA DGX H200 system with enhanced memory capacity"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* DGX GB200 NVL72 Section */}
        <div className="mb-16 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8">
              <h3 className="text-2xl font-bold mb-4 text-charcoal">NVIDIA DGX GB200 NVL72 (Rack-Scale)</h3>
              <p className="text-gray-600 mb-4">
                Revolutionary rack-scale AI supercomputer combining Grace CPUs with Blackwell GPUs in a unified,
                liquid-cooled architecture designed for the most demanding AI workloads.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    <strong>36 Grace CPUs + 72 Blackwell GPUs</strong> in single rack
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    <strong>72-GPU NVLink domain</strong> for maximum interconnect performance
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    <strong>Liquid-cooled architecture</strong> for optimal thermal management
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    <strong>30× faster real-time inference</strong> for trillion-parameter LLMs vs H100 cluster
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative h-64 lg:h-auto">
              <Image
                src="/products/dgx_gb200_image.jpg"
                alt="NVIDIA DGX GB200 NVL72 rack-scale liquid-cooled AI supercomputer"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* DGX GH200 Section */}
        <div className="mb-16 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row-reverse">
            <div className="lg:w-1/2 p-8">
              <h3 className="text-2xl font-bold mb-4 text-charcoal">NVIDIA DGX GH200 AI Supercomputer</h3>
              <p className="text-gray-600 mb-4">
                The ultimate AI supercomputing platform that clusters hundreds of Grace Hopper superchips into a unified
                system with unprecedented memory capacity and computational power.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    <strong>256 Grace Hopper superchips</strong> interconnected via NVLink-Switch
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    <strong>144 TB unified memory</strong> across the entire system
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    <strong>1 EFLOP FP8 performance</strong> for extreme-scale AI training
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    <strong>Now deploying</strong> at leading hyperscalers and research institutions
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative h-64 lg:h-auto">
              <Image
                src="/products/dgx_gh200_image.jpg"
                alt="NVIDIA DGX GH200 AI supercomputer installation at enterprise scale"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* DGX Infrastructure Solutions */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-charcoal">Enterprise-Scale DGX Infrastructure</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/products/dgx_basepod_image.jpeg"
                alt="DGX BasePOD modular AI infrastructure deployment"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-charcoal">DGX BasePOD</h3>
            <p className="text-gray-600 mb-4">
              Modular, scalable AI infrastructure building blocks that provide a validated reference architecture for
              deploying DGX systems with integrated networking, storage, and management software.
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-600 space-y-1">
              <li>Pre-validated hardware and software stack</li>
              <li>Scalable from small clusters to enterprise deployments</li>
              <li>Integrated NVIDIA Base Command platform</li>
              <li>Simplified deployment and management</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/products/dgx_superpod_image.jpg"
                alt="DGX SuperPOD large-scale AI data center infrastructure"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-charcoal">DGX SuperPOD</h3>
            <p className="text-gray-600 mb-4">
              Turnkey AI data center infrastructure that combines hundreds of DGX systems with high-performance
              networking, storage, and software into a unified supercomputing environment.
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-600 space-y-1">
              <li>Scalable from 20 to 1,000+ GPUs</li>
              <li>NVIDIA InfiniBand networking fabric</li>
              <li>High-performance parallel file systems</li>
              <li>Complete software stack and orchestration</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Why Choose AIdeology */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-charcoal">Why Choose AIdeology for NVIDIA DGX</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/ai-consulting-client-meeting.png"
                alt="AIdeology expert consultation for DGX deployment"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-charcoal">Expert Consultation & Design</h3>
            <p className="text-gray-600">
              Our certified AI infrastructure specialists work with you to design the optimal DGX configuration for your
              specific workloads, performance requirements, and growth plans.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/products/prof_services_image.png"
                alt="Professional DGX system deployment and integration"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-charcoal">Professional Deployment</h3>
            <p className="text-gray-600">
              From site preparation to system commissioning, our experienced engineers ensure your DGX systems are
              properly installed, configured, and optimized for maximum performance and reliability.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/products/comp_support_image.png"
                alt="Ongoing DGX system support and optimization"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-charcoal">Comprehensive Support</h3>
            <p className="text-gray-600">
              Our support extends beyond deployment with ongoing system monitoring, performance optimization, software
              updates, and 24/7 technical assistance to keep your AI infrastructure running at peak efficiency.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-accent-green/10 to-accent-green/5 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4 text-charcoal">Ready to Transform Your AI Capabilities?</h2>
        <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
          Whether you need a single DGX system for your research team or a complete SuperPOD for enterprise-scale AI,
          AIdeology has the expertise and partnerships to deliver the perfect solution for your organization.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            asChild 
            className="bg-accent-green text-charcoal hover:bg-charcoal hover:text-white hover:scale-105 transition-all duration-300 ease-in-out px-8 py-3"
          >
            <Link href="#contact">Schedule a Consultation</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-accent-green text-accent-green hover:bg-accent-green hover:text-white hover:scale-105 transition-all duration-300 ease-in-out px-8 py-3"
          >
            <Link href="https://www.nvidia.com/en-us/data-center/dgx/" target="_blank" rel="noopener noreferrer">
              Explore NVIDIA DGX Technical Specs
            </Link>
          </Button>
        </div>
      </div>
    </ProductLayout>
  )
}
