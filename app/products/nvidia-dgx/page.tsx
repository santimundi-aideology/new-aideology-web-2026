import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProductLayout from "@/components/layouts/product-layout"
import ScrollAnimations from "@/components/scroll-animations"
import { Zap, ShieldCheck, Award } from "lucide-react"

export const metadata = {
  title: "NVIDIA DGX Systems | Enterprise AI Supercomputers | AIdeology",
  description:
    "AIdeology offers the complete portfolio of NVIDIA DGX systems, from the latest Blackwell-powered DGX B200 to massive DGX SuperPOD installations for enterprise AI at scale.",
}

export default function NvidiaDGXPage() {
  return (
    <ProductLayout>
      <ScrollAnimations />
      <div className="w-full px-6 lg:px-12 mb-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-charcoal animate-fade-in-up">NVIDIA DGX Systems</h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            The world's most advanced AI supercomputing platform, engineered to accelerate breakthrough discoveries and
            transform industries through the power of artificial intelligence.
          </p>
          <div className="relative h-[500px] rounded-lg overflow-hidden mb-8 animate-fade-in-up hover:scale-105 transition-all duration-300" style={{ animationDelay: '200ms' }}>
            <Image
              src="/products/dgx-systems.webp"
              alt="NVIDIA DGX AI supercomputing systems in enterprise data center environment"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-full px-6 lg:px-12 mb-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-charcoal animate-fade-in-up" style={{ animationDelay: '100ms' }}>Enterprise-Scale DGX Infrastructure</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/products/dgx-basepod.webp"
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
                <li>Integrated high-speed networking (InfiniBand/Ethernet)</li>
                <li>Optimized for AI training and inference workloads</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/products/dgx-superpod.webp"
                  alt="DGX SuperPOD large-scale AI infrastructure for enterprises"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-charcoal">DGX SuperPOD</h3>
              <p className="text-gray-600 mb-4">
                Enterprise-grade AI supercomputing infrastructure delivering exascale performance for the most demanding
                AI workloads, including large language model training and scientific computing.
              </p>
              <ul className="list-disc list-inside mb-4 text-gray-600 space-y-1">
                <li>Up to thousands of DGX systems in unified architecture</li>
                <li>Exascale AI computing performance</li>
                <li>Turnkey deployment and management</li>
                <li>Proven reference architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="w-full px-6 lg:px-12 mb-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-charcoal animate-fade-in-up" style={{ animationDelay: '100ms' }}>Why Choose DGX Systems</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h3 className="text-xl font-semibold mb-3 text-charcoal flex items-center">
                <Zap className="h-6 w-6 text-accent-green mr-2" />
                Accelerated Performance
              </h3>
              <p className="text-gray-600">
                Purpose-built for AI with optimized hardware, software, and networking to deliver maximum performance for
                training and inference workloads.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <h3 className="text-xl font-semibold mb-3 text-charcoal flex items-center">
                <ShieldCheck className="h-6 w-6 text-accent-green mr-2" />
                Enterprise Ready
              </h3>
              <p className="text-gray-600">
                Enterprise-grade reliability, security, and support with comprehensive software stack including NVIDIA AI
                Enterprise and management tools.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <h3 className="text-xl font-semibold mb-3 text-charcoal flex items-center">
                <Award className="h-6 w-6 text-accent-green mr-2" />
                Proven Innovation
              </h3>
              <p className="text-gray-600">
                Trusted by leading AI researchers and enterprises worldwide for breakthrough discoveries and production AI
                deployments at scale.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-6 lg:px-12 mb-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-charcoal animate-fade-in-up" style={{ animationDelay: '100ms' }}>Next-Generation DGX Portfolio</h2>
          <p className="text-lg mb-8 text-gray-600 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            AIdeology delivers the complete spectrum of NVIDIA DGX systems, from cutting-edge Blackwell architecture to
            proven Hopper-based platforms, ensuring your organization has access to the most powerful AI infrastructure
            available.
          </p>

          {/* Top Row - DGX B200 and DGX H200 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* DGX B200 Section - 1x2 Layout with image on right */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-fade-in-up h-full" style={{ animationDelay: '200ms' }}>
              <div className="flex h-full">
                <div className="w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-3 text-charcoal">NVIDIA DGX B200</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Next-generation Blackwell-based system delivering unprecedented AI performance and efficiency.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-accent-green rounded-full mr-2"></div>
                      <span className="text-xs text-gray-700">
                        <strong>Eight B200 GPUs</strong> with 1440GB HBM3e
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-accent-green rounded-full mr-2"></div>
                      <span className="text-xs text-gray-700">
                        <strong>18TB/s</strong> GPU-to-GPU bandwidth
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-accent-green rounded-full mr-2"></div>
                      <span className="text-xs text-gray-700">
                        <strong>2.5× performance</strong> improvement
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 relative bg-black">
                  <Image
                    src="/products/dgx-b200.webp"
                    alt="NVIDIA DGX B200 system with Blackwell architecture"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* DGX H200 Section - 1x2 Layout with image on left */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="flex h-full">
                <div className="w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-3 text-charcoal">NVIDIA DGX H200</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Enhanced Hopper-based system with upgraded H200 GPUs for significantly increased memory capacity.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-accent-green rounded-full mr-2"></div>
                      <span className="text-xs text-gray-700">
                        <strong>Eight H200 GPUs</strong> with 1128GB HBM3e
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-accent-green rounded-full mr-2"></div>
                      <span className="text-xs text-gray-700">
                        <strong>7.2TB/s</strong> GPU-to-GPU bandwidth
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-accent-green rounded-full mr-2"></div>
                      <span className="text-xs text-gray-700">
                        <strong>1.5× more bandwidth</strong> than previous generation
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 relative bg-black">
                  <Image
                    src="/products/dgx-h200.webp"
                    alt="NVIDIA DGX H200 system with enhanced memory capacity"
                    fill
                    className="object-contain"
                    style={{ padding: '20px' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row - DGX GB200 and DGX GH200 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* DGX GB200 NVL72 Section - 1x2 Layout with image on left */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-fade-in-up h-full" style={{ animationDelay: '300ms' }}>
              <div className="flex h-full">
                <div className="w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-3 text-charcoal">NVIDIA DGX GB200 NVL72</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Revolutionary Grace Blackwell system combining CPU and GPU in a unified architecture.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-accent-green rounded-full mr-2"></div>
                      <span className="text-xs text-gray-700">
                        <strong>72 B200 GPUs</strong> with 13.5TB HBM3e
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-accent-green rounded-full mr-2"></div>
                      <span className="text-xs text-gray-700">
                        <strong>36 Grace CPUs</strong> integrated design
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-accent-green rounded-full mr-2"></div>
                      <span className="text-xs text-gray-700">
                        <strong>1.3 exaFLOPS</strong> AI performance
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 relative bg-black">
                  <Image
                    src="/products/dgx-gb200-nvl72.webp"
                    alt="NVIDIA DGX GB200 NVL72 system with Grace Blackwell architecture"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* DGX GH200 Section - 1x2 Layout with text on left */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-fade-in-up h-full" style={{ animationDelay: '500ms' }}>
              <div className="flex h-full">
                <div className="w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-3 text-charcoal">NVIDIA DGX GH200</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Grace Hopper superchip combining ARM-based Grace CPU with H100 GPU in unified memory architecture.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-accent-green rounded-full mr-2"></div>
                      <span className="text-xs text-gray-700">
                        <strong>Grace Hopper</strong> superchip architecture
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-accent-green rounded-full mr-2"></div>
                      <span className="text-xs text-gray-700">
                        <strong>144GB</strong> unified memory
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-accent-green rounded-full mr-2"></div>
                      <span className="text-xs text-gray-700">
                        <strong>10× faster</strong> for large model inference
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 relative bg-black">
                  <Image
                    src="/products/dgx-gh200.webp"
                    alt="NVIDIA DGX GH200 system with Grace Hopper architecture"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose AIdeology */}
      <div className="w-full px-6 lg:px-12 mb-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-charcoal animate-fade-in-up" style={{ animationDelay: '100ms' }}>Why Choose AIdeology for NVIDIA DGX</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/ai-consulting-client-meeting.webp"
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

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/products/prof_deployment.webp"
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

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/products/comprehensive_support.webp"
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
      </div>

      {/* CTA Section */}
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-accent-green/10 to-accent-green/5 rounded-lg p-8 text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>
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
                <Link href="/book-discovery-call?type=consultation">Schedule a Consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-accent-green text-accent-green hover:bg-accent-green hover:text-white hover:scale-105 transition-all duration-300 ease-in-out px-8 py-3"
              >
                <Link href="https://www.nvidia.com/en-us/data-center/dgx-platform/" target="_blank" rel="noopener noreferrer">
                  Explore NVIDIA DGX Technical Specs
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ProductLayout>
  )
}
