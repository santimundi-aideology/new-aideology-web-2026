import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProductLayout from "@/components/layouts/product-layout"
import ScrollAnimations from "@/components/scroll-animations"

export const metadata = {
  title: "Enterprise AI Platforms Built by HPE, Lenovo, and Supermicro (NVIDIA HGX Systems) | GPU-Accelerated Computing | AIdeology",
  description:
    "AIdeology offers the complete range of Enterprise AI Platforms Built by HPE, Lenovo, and Supermicro (NVIDIA HGX Systems), from HGX B200 Blackwell to HGX H100 Hopper systems for AI training, inference, and HPC workloads.",
}

export default function NvidiaHGXPage() {
  const partners = [
    {
      name: 'Dell',
      logo: '/partner-logos/dell-logo.webp',
      description: 'Authorized Partner',
      website: 'https://www.dell.com'
    },
    {
      name: 'HPE',
      logo: '/partner-logos/hpe-logo.webp',
      description: 'Authorized Partner',
      website: 'https://www.hpe.com'
    },
    {
      name: 'Lenovo',
      logo: '/partner-logos/lenovo-logo.webp',
      description: 'Authorized Partner',
      website: 'https://www.lenovo.com'
    },
    {
      name: 'Supermicro',
      logo: '/partner-logos/supermicro-logo.webp',
      description: 'Authorized Partner',
      website: 'https://www.supermicro.com'
    }
  ];

  return (
    <ProductLayout>
      <ScrollAnimations />
      <div className="w-full px-6 lg:px-12 mb-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-charcoal animate-fade-in-up">Enterprise AI Platforms Built by HPE, Lenovo, and Supermicro (NVIDIA HGX Systems)</h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            The foundation for AI infrastructure - high-performance GPU-accelerated computing platforms designed for the
            most demanding AI and HPC workloads.
          </p>
                     <div className="relative h-[500px] rounded-lg mb-8 animate-fade-in-up cursor-pointer group" style={{ animationDelay: '200ms' }}>
            <div className="w-full h-full overflow-hidden rounded-lg">
              <Image
                src="/products/nvidia_hgx_systems.webp"
                alt="NVIDIA HGX GPU-accelerated computing systems in a modern data center"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 origin-center"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-6 lg:px-12 mb-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-charcoal animate-fade-in-up" style={{ animationDelay: '100ms' }}>The Evolution of AI Computing</h2>
          <p className="mb-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            NVIDIA HGX is the foundational GPU-accelerated platform that powers the world's leading AI systems. From the
            latest Blackwell architecture to proven Hopper designs, Enterprise AI Platforms combine cutting-edge GPUs, high-speed
            NVLink interconnects, and optimized system designs to deliver exceptional performance for AI training,
            inference, and high-performance computing workloads.
          </p>
          <p className="mb-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            AIdeology offers the complete range of NVIDIA HGX-based systems through our partnerships with leading server
            manufacturers, providing organizations with flexible options to build their AI infrastructure at any scale.
          </p>
        </div>
      </div>

      {/* AIdeology Partnership Section */}
      <div className="w-full px-6 lg:px-12 mb-16">
        <div className="max-w-7xl mx-auto">
                     <div className="bg-gradient-to-r from-accent-green/10 to-blue-50 rounded-lg p-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
             {/* Text Section on Top */}
             <div className="w-full mb-8">
               <h2 className="text-3xl font-bold mb-4 text-charcoal animate-fade-in-up" style={{ animationDelay: '200ms' }}>AIdeology: Your Trusted HGX Partner</h2>
               <p className="text-lg text-gray-700 mb-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                 As an authorized AI consulting and reseller partner, AIdeology works directly with leading server
                 manufacturers to deliver NVIDIA HGX-based solutions tailored to your specific requirements. Our
                 partnerships with Dell, HPE, Lenovo, and Supermicro ensure you receive certified, enterprise-grade
                 systems backed by comprehensive support.
               </p>
               <p className="text-gray-600 mb-6 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                 From initial consultation and system design to deployment and ongoing support, our team of AI
                 infrastructure specialists guides you through every step of your HGX implementation, ensuring optimal
                 performance and ROI for your AI initiatives.
               </p>
               <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                 <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm">
                   <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                   <span className="text-sm font-medium text-gray-700">Authorized Reseller</span>
                 </div>
                 <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm">
                   <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                   <span className="text-sm font-medium text-gray-700">AI Consulting Expertise</span>
                 </div>
                 <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm">
                   <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                   <span className="text-sm font-medium text-gray-700">End-to-End Support</span>
                 </div>
               </div>
             </div>

             {/* Partner Logos on Bottom - Side by side */}
             <div className="w-full">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                 {partners.map((partner, index) => (
                   <a 
                     key={partner.name} 
                     href={partner.website}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                   >
                     <div className="relative h-16 mb-3 flex items-center justify-center">
                       <Image
                         src={partner.logo}
                         alt={`${partner.name} logo`}
                         width={partner.name === 'Dell' || partner.name === 'Lenovo' ? 100 : 120}
                         height={partner.name === 'Dell' || partner.name === 'Lenovo' ? 50 : 60}
                         className="object-contain group-hover:scale-110 transition-transform duration-300"
                       />
                     </div>
                     <div className="text-center">
                       <p className="text-xs text-gray-600 group-hover:text-accent-green transition-colors duration-300">{partner.description}</p>
                     </div>
                   </a>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* 2x2 Grid Layout for HGX Products */}
      <div className="w-full px-6 lg:px-12 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-charcoal text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>Enterprise AI Platform Family</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* HGX B200 Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up flex flex-col" style={{ animationDelay: '200ms' }}>
              <h3 className="text-2xl font-bold mb-4 text-charcoal">HGX B200 (Blackwell, 8-GPU Board)</h3>
              <div className="relative h-[320px] rounded-lg overflow-hidden bg-black mb-6">
                <Image
                  src="/products/hgx-b200.webp"
                  alt="NVIDIA HGX B200 Blackwell 8-GPU board with advanced cooling and NVLink connectivity"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 mb-4 flex-grow">
                Latest generation Enterprise AI Platform featuring eight B200 GPUs linked by 5th-generation NVLink switches for unprecedented performance.
              </p>
              <div className="space-y-3 mt-auto">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">
                    <strong>144 PFLOPS FP4</strong> compute capability
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">
                    <strong>1.44 TB</strong> pooled HBM3e memory
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">
                    <strong>5th-gen NVLink</strong> switches
                  </span>
                </div>
              </div>
            </div>

            {/* HGX B300 Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up flex flex-col" style={{ animationDelay: '300ms' }}>
              <h3 className="text-2xl font-bold mb-4 text-charcoal">HGX B300 NVL16 (Blackwell Ultra, 16GPUs)</h3>
              <div className="relative h-[320px] rounded-lg overflow-hidden mb-6">
                <Image
                  src="/products/hgx_b300.webp"
                  alt="NVIDIA HGX B300 NVL16 Blackwell Ultra 16-GPU board in enterprise server configuration"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-gray-600 mb-4 flex-grow">
                Most powerful Enterprise AI Platform with sixteen Blackwell Ultra GPUs wired into a single NVLink-5 domain for maximum performance.
              </p>
              <div className="space-y-3 mt-auto">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">
                    <strong>2.3 TB HBM3e</strong> on board
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">
                    <strong>≈11× faster</strong> LLM inference vs HGX H100
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">
                    <strong>1.8 TB/s</strong> NVLink interconnect bandwidth
                  </span>
                </div>
              </div>
            </div>

            {/* HGX H200 Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up flex flex-col" style={{ animationDelay: '400ms' }}>
              <h3 className="text-2xl font-bold mb-4 text-charcoal">HGX H200 (Hopper+, 8-GPU Board)</h3>
              <div className="relative h-[320px] rounded-lg overflow-hidden mb-6">
                <Image
                  src="/products/hgx-h200.webp"
                  alt="NVIDIA HGX H200 Hopper+ 8-GPU board with enhanced memory capacity"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-gray-600 mb-4 flex-grow">
                Enhanced Hopper architecture with significantly increased memory capacity for large language models and complex AI workloads.
              </p>
              <div className="space-y-3 mt-auto">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">
                    <strong>1.1 TB</strong> aggregate memory capacity
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">
                    <strong>~1.9× faster</strong> Llama-2 70B inference vs H100
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">
                    <strong>Drop-in compatible</strong> with Hopper servers
                  </span>
                </div>
              </div>
            </div>

            {/* HGX H100 Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up flex flex-col" style={{ animationDelay: '500ms' }}>
              <h3 className="text-2xl font-bold mb-4 text-charcoal">HGX H100 (Hopper, 4- or 8-GPU Board)</h3>
              <div className="relative h-[320px] rounded-lg overflow-hidden mb-6">
                <Image
                  src="/products/hgx-h100.webp"
                  alt="NVIDIA HGX H100 Hopper 8-GPU board - the proven workhorse for AI training and inference"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-gray-600 mb-4 flex-grow">
                Proven workhorse for AI training and inference with broad ecosystem support across all major OEM platforms.
              </p>
              <div className="space-y-3 mt-auto">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">
                    <strong>640 GB HBM3</strong> total capacity
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">
                    <strong>Widely certified</strong> across every Tier-1 OEM
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">
                    <strong>3rd-generation</strong> NVLink across board
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OEM Partners Section */}
      <div className="w-full px-6 lg:px-12 mb-12">
        <div className="max-w-7xl mx-auto">
                     <h2 className="text-3xl font-bold mb-6 text-charcoal animate-fade-in-up" style={{ animationDelay: '100ms' }}>Enterprise AI Infrastructure powered by NVIDIA GPUs</h2>
          <p className="text-gray-600 mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            AIdeology offers HGX-based systems from leading server manufacturers, providing flexible options to meet your
            specific AI infrastructure requirements.
          </p>

                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
           {/* Dell PowerEdge */}
           <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up group relative overflow-hidden" style={{ animationDelay: '150ms' }}>
             <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 group-hover:from-blue-500/10 group-hover:to-blue-600/20 transition-all duration-300"></div>
             <div className="relative z-10">
                               <div className="h-12 flex items-center justify-center mb-4">
                  <Image 
                    src="/partner-logos/dell-logo.webp" 
                    alt="Dell Logo" 
                    width={80} 
                    height={40} 
                    className="object-contain max-h-10" 
                  />
                </div>
                               <div className="h-40 flex items-center justify-center mb-4 bg-white rounded-lg border border-gray-100 group-hover:border-gray-200 transition-colors duration-300">
                  <Image 
                    src="/products/dell-poweredge.webp" 
                    alt="Dell PowerEdge XE9680" 
                    width={200} 
                    height={120} 
                    className="object-contain group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
               <h3 className="text-lg font-bold mb-2 text-charcoal">Dell PowerEdge XE9680</h3>
               <p className="text-sm text-gray-600">High-performance HGX-powered servers optimized for enterprise AI workloads.</p>
             </div>
           </div>

           {/* HPE Apollo & ProLiant */}
           <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up group relative overflow-hidden" style={{ animationDelay: '200ms' }}>
             <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-600/10 group-hover:from-green-500/10 group-hover:to-green-600/20 transition-all duration-300"></div>
             <div className="relative z-10">
                               <div className="h-12 flex items-center justify-center mb-4">
                  <Image 
                    src="/partner-logos/hpe-logo.webp" 
                    alt="HPE Logo" 
                    width={80} 
                    height={40} 
                    className="object-contain max-h-10" 
                  />
                </div>
                               <div className="h-40 flex items-center justify-center mb-4 bg-white rounded-lg border border-gray-100 group-hover:border-gray-200 transition-colors duration-300">
                  <Image 
                    src="/products/apollo_proliant.webp" 
                    alt="Apollo & ProLiant Series" 
                    width={200} 
                    height={120} 
                    className="object-contain group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
               <h3 className="text-lg font-bold mb-2 text-charcoal">Apollo & ProLiant Series</h3>
               <p className="text-sm text-gray-600">Enterprise-grade HGX systems with HPE's reliability and support ecosystem.</p>
             </div>
           </div>

           {/* Lenovo ThinkSystem */}
           <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up group relative overflow-hidden" style={{ animationDelay: '300ms' }}>
             <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/10 group-hover:from-red-500/10 group-hover:to-red-600/20 transition-all duration-300"></div>
             <div className="relative z-10">
                               <div className="h-12 flex items-center justify-center mb-4">
                  <Image 
                    src="/partner-logos/lenovo-logo.webp" 
                    alt="Lenovo Logo" 
                    width={80} 
                    height={40} 
                    className="object-contain max-h-10" 
                  />
                </div>
                               <div className="h-40 flex items-center justify-center mb-4 bg-white rounded-lg border border-gray-100 group-hover:border-gray-200 transition-colors duration-300">
                  <Image 
                    src="/products/Thinksystem.webp" 
                    alt="ThinkSystem Series" 
                    width={200} 
                    height={120} 
                    className="object-contain group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
               <h3 className="text-lg font-bold mb-2 text-charcoal">ThinkSystem Series</h3>
               <p className="text-sm text-gray-600">Advanced HGX platforms optimized for AI training and high-performance computing.</p>
             </div>
           </div>

           {/* Supermicro */}
           <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up group relative overflow-hidden" style={{ animationDelay: '400ms' }}>
             <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-600/10 group-hover:from-purple-500/10 group-hover:to-purple-600/20 transition-all duration-300"></div>
             <div className="relative z-10">
                               <div className="h-12 flex items-center justify-center mb-4">
                  <Image 
                    src="/partner-logos/supermicro-logo.webp" 
                    alt="Supermicro Logo" 
                    width={80} 
                    height={40} 
                    className="object-contain max-h-10" 
                  />
                </div>
                               <div className="h-40 flex items-center justify-center mb-4 bg-white rounded-lg border border-gray-100 group-hover:border-gray-200 transition-colors duration-300">
                  <Image
                    src="/products/supermicro.webp"
                    alt="SYS & BigTwin Series"
                    width={200}
                    height={120}
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
               <h3 className="text-lg font-bold mb-2 text-charcoal">SYS & BigTwin Series</h3>
               <p className="text-sm text-gray-600">Cutting-edge HGX platforms with advanced cooling and optimization features.</p>
             </div>
           </div>
           </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="w-full px-6 lg:px-12 mb-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-charcoal animate-fade-in-up" style={{ animationDelay: '100ms' }}>Why Choose HGX Systems</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h3 className="text-xl font-semibold mb-3 text-charcoal">Flexible Deployment</h3>
              <p className="text-gray-600">
                Enterprise AI Platforms integrate into diverse server designs, allowing organizations to choose the optimal form
                factor and features for their specific AI workloads and infrastructure requirements.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <h3 className="text-xl font-semibold mb-3 text-charcoal">Scalable Architecture</h3>
              <p className="text-gray-600">
                Start with a single HGX system and scale to multiple nodes as your AI initiatives grow, maintaining
                consistent architecture and software compatibility across your infrastructure.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <h3 className="text-xl font-semibold mb-3 text-charcoal">Comprehensive Software Stack</h3>
              <p className="text-gray-600">
                HGX systems are supported by NVIDIA's complete software ecosystem, including CUDA, cuDNN, TensorRT, and
                domain-specific libraries for optimal performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Comparison */}
      <div className="w-full px-6 lg:px-12 mb-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-charcoal animate-fade-in-up" style={{ animationDelay: '100ms' }}>Performance Evolution</h2>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="pb-3 text-charcoal font-semibold">Platform</th>
                    <th className="pb-3 text-charcoal font-semibold">Architecture</th>
                    <th className="pb-3 text-charcoal font-semibold">GPU Count</th>
                    <th className="pb-3 text-charcoal font-semibold">Total Memory</th>
                    <th className="pb-3 text-charcoal font-semibold">Key Advantage</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b">
                    <td className="py-3 font-medium">HGX B300 NVL16</td>
                    <td className="py-3">Blackwell Ultra</td>
                    <td className="py-3">16</td>
                    <td className="py-3">2.3 TB HBM3e</td>
                    <td className="py-3">11× faster LLM inference vs H100</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium">HGX B200</td>
                    <td className="py-3">Blackwell</td>
                    <td className="py-3">8</td>
                    <td className="py-3">1.44 TB HBM3e</td>
                    <td className="py-3">1.4 EFLOPS FP4 performance</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium">HGX H200</td>
                    <td className="py-3">Hopper+</td>
                    <td className="py-3">8</td>
                    <td className="py-3">1.1 TB HBM3e</td>
                    <td className="py-3">1.9× faster Llama-2 70B vs H100</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">HGX H100</td>
                    <td className="py-3">Hopper</td>
                    <td className="py-3">4/8</td>
                    <td className="py-3">640 GB HBM3</td>
                    <td className="py-3">Proven workhorse, broad ecosystem</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-accent-green/10 rounded-lg p-8 text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <h2 className="text-3xl font-bold mb-4 text-charcoal">Build Your AI Infrastructure with HGX</h2>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              Contact our team to discuss your AI computing requirements and learn how Enterprise AI Platforms Built by HPE, Lenovo, and Supermicro (NVIDIA HGX Systems) can provide the
              optimal foundation for your AI infrastructure, from single nodes to large-scale deployments.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                asChild 
                className="bg-accent-green text-charcoal hover:bg-charcoal hover:text-white hover:scale-105 transition-all duration-300 ease-in-out px-8 py-3"
              >
                <Link href="/contact">Contact our HGX specialists</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-accent-green text-accent-green hover:bg-accent-green hover:text-white hover:scale-105 transition-all duration-300 ease-in-out px-8 py-3"
              >
                <Link href="https://www.nvidia.com/en-us/data-center/hgx/" target="_blank" rel="noopener noreferrer">
                  Learn more on NVIDIA's website
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ProductLayout>
  )
}
