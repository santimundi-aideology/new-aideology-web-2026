import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProductLayout from "@/components/layouts/product-layout"

export const metadata = {
  title: "NVIDIA HGX Systems | GPU-Accelerated Computing | AIdeology",
  description:
    "AIdeology offers the complete range of NVIDIA HGX platforms, from HGX B200 Blackwell to HGX H100 Hopper systems for AI training, inference, and HPC workloads.",
}

export default function NvidiaHGXPage() {
  return (
    <ProductLayout>
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-6 text-charcoal">NVIDIA HGX Systems</h1>
        <p className="text-xl text-gray-600 mb-8">
          The foundation for AI infrastructure - high-performance GPU-accelerated computing platforms designed for the
          most demanding AI and HPC workloads.
        </p>
        <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
          <Image
            src="/products/nvidia_hgx_products.webp"
            alt="NVIDIA HGX GPU-accelerated computing systems in a modern data center"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-charcoal">The Evolution of AI Computing</h2>
        <p className="mb-4">
          NVIDIA HGX is the foundational GPU-accelerated platform that powers the world's leading AI systems. From the
          latest Blackwell architecture to proven Hopper designs, HGX platforms combine cutting-edge GPUs, high-speed
          NVLink interconnects, and optimized system designs to deliver exceptional performance for AI training,
          inference, and high-performance computing workloads.
        </p>
        <p className="mb-4">
          AIdeology offers the complete range of NVIDIA HGX-based systems through our partnerships with leading server
          manufacturers, providing organizations with flexible options to build their AI infrastructure at any scale.
        </p>
      </div>

      {/* AIdeology Partnership Section */}
      <div className="mb-16">
        <div className="bg-gradient-to-r from-accent-green/10 to-blue-50 rounded-lg p-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-2/3">
              <h2 className="text-3xl font-bold mb-4 text-charcoal">AIdeology: Your Trusted HGX Partner</h2>
              <p className="text-lg text-gray-700 mb-4">
                As an authorized AI consulting and reseller partner, AIdeology works directly with leading server
                manufacturers to deliver NVIDIA HGX-based solutions tailored to your specific requirements. Our
                partnerships with HPE, Dell, Supermicro, and Lenovo ensure you receive certified, enterprise-grade
                systems backed by comprehensive support.
              </p>
              <p className="text-gray-600 mb-6">
                From initial consultation and system design to deployment and ongoing support, our team of AI
                infrastructure specialists guides you through every step of your HGX implementation, ensuring optimal
                performance and ROI for your AI initiatives.
              </p>
              <div className="flex flex-wrap gap-4">
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
            <div className="w-full lg:w-1/3">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                  <Image
                    src="/partner-logos/dell-logo.webp"
                    alt="Dell Partner"
                    width={80}
                    height={40}
                    className="mx-auto mb-2"
                  />
                  <p className="text-xs text-gray-600">Authorized Partner</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                  <Image
                    src="/partner-logos/hpe-logo.webp"
                    alt="HPE Partner"
                    width={80}
                    height={40}
                    className="mx-auto mb-2"
                  />
                  <p className="text-xs text-gray-600">Authorized Partner</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                  <Image
                    src="/partner-logos/lenovo-logo.webp"
                    alt="Lenovo Partner"
                    width={80}
                    height={40}
                    className="mx-auto mb-2"
                  />
                  <p className="text-xs text-gray-600">Authorized Partner</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                  <Image
                    src="/partner-logos/supermicro-logo.webp"
                    alt="Supermicro Partner"
                    width={80}
                    height={40}
                    className="mx-auto mb-2"
                  />
                  <p className="text-xs text-gray-600">Authorized Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HGX B200 Section */}
      <div className="mb-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-8">
          <div className="w-full lg:w-1/2">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/products/hgx_b200.png"
                alt="NVIDIA HGX B200 Blackwell 8-GPU board with advanced cooling and NVLink connectivity"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-charcoal">HGX B200 (Blackwell, 8-GPU Board)</h3>
            <p className="text-gray-600 mb-4">
              The latest generation HGX platform featuring eight B200 GPUs linked by 5th-generation NVLink switches,
              acting as a single accelerator delivering unprecedented performance.
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-600 space-y-2">
              <li>
                <strong>Performance:</strong> ≈1.4 EFLOPS FP4 compute capability
              </li>
              <li>
                <strong>Memory:</strong> Up to 30 TB of pooled HBM3e memory
              </li>
              <li>
                <strong>Connectivity:</strong> 5th-gen NVLink switches for optimal GPU-to-GPU communication
              </li>
              <li>
                <strong>Network Support:</strong> 400 Gb/s Quantum-2 / Spectrum-X fabrics
              </li>
              <li>
                <strong>Compatibility:</strong> Designed for x86 hosts with broad OEM support
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* HGX B300 NVL16 Section */}
      <div className="mb-16">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 mb-8">
          <div className="w-full lg:w-1/2">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/products/hgx_b300.jpg"
                alt="NVIDIA HGX B300 NVL16 Blackwell Ultra 16-GPU board in enterprise server configuration"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-charcoal">HGX B300 NVL16 (Blackwell Ultra, 16-GPU Board)</h3>
            <p className="text-gray-600 mb-4">
              The most powerful HGX platform featuring sixteen Blackwell Ultra GPUs wired into a single NVLink-5 domain
              for maximum performance and memory capacity.
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-600 space-y-2">
              <li>
                <strong>GPU Configuration:</strong> 16 Blackwell Ultra GPUs in single NVLink-5 domain
              </li>
              <li>
                <strong>Memory:</strong> 2.3 TB HBM3e on board
              </li>
              <li>
                <strong>Bandwidth:</strong> 1.8 TB/s NVLink interconnect bandwidth
              </li>
              <li>
                <strong>Performance:</strong> ≈11× faster LLM inference vs. HGX H100
              </li>
              <li>
                <strong>Networking:</strong> Eight integrated ConnectX-8 NICs for 800 Gb/s bandwidth
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* HGX H200 Section */}
      <div className="mb-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-8">
          <div className="w-full lg:w-1/2">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/products/hgx_h200.jpg"
                alt="NVIDIA HGX H200 Hopper+ 8-GPU board with enhanced memory capacity"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-charcoal">HGX H200 (Hopper+, 8-GPU Board)</h3>
            <p className="text-gray-600 mb-4">
              Enhanced Hopper architecture with significantly increased memory capacity, providing substantial
              performance improvements for large language models and complex AI workloads.
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-600 space-y-2">
              <li>
                <strong>GPU Memory:</strong> Eight H200 GPUs, each with 141 GB HBM3e
              </li>
              <li>
                <strong>Total Memory:</strong> 1.1 TB aggregate memory capacity
              </li>
              <li>
                <strong>Performance:</strong> Up to 32 PFLOPS FP8 compute
              </li>
              <li>
                <strong>Inference Speed:</strong> ~1.9× faster Llama-2 70B inference than HGX H100
              </li>
              <li>
                <strong>Compatibility:</strong> Drop-in compatible with existing Hopper servers
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* HGX H100 Section */}
      <div className="mb-16">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 mb-8">
          <div className="w-full lg:w-1/2">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/products/hgx_h100.jpeg"
                alt="NVIDIA HGX H100 Hopper 8-GPU board - the proven workhorse for AI training and inference"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-charcoal">HGX H100 (Hopper, 4- or 8-GPU Board)</h3>
            <p className="text-gray-600 mb-4">
              The proven workhorse for AI training and inference, offering exceptional performance and broad ecosystem
              support across all major OEM platforms.
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-600 space-y-2">
              <li>
                <strong>Configuration:</strong> 8-GPU or 4-GPU variants available
              </li>
              <li>
                <strong>Architecture:</strong> Eight H100 GPUs plus four NVSwitch-3 ASICs
              </li>
              <li>
                <strong>Memory:</strong> 640 GB HBM3 total capacity
              </li>
              <li>
                <strong>Interconnect:</strong> 3rd-generation NVLink across the board
              </li>
              <li>
                <strong>Certification:</strong> Widely certified across every Tier-1 OEM
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* OEM Partners Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-charcoal">OEM Partner Solutions</h2>
        <p className="text-gray-600 mb-8">
          AIdeology offers HGX-based systems from leading server manufacturers, providing flexible options to meet your
          specific AI infrastructure requirements.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <Image
              src="/products/poweredge.avif"
              alt="Dell PowerEdge XE Series"
              width={120}
              height={60}
              className="mx-auto mb-2"
            />
            <p className="text-sm text-gray-600">PowerEdge XE Series</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <Image src="/products/apollo_proliant.webp" alt="Apollo & ProLiant Series" width={120} height={60} className="mx-auto mb-2" />
            <p className="text-sm text-gray-600">Apollo & ProLiant Series</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <Image src="/products/Thinksystem.webp" alt="ThinkSystem Series" width={120} height={60} className="mx-auto mb-2" />
            <p className="text-sm text-gray-600">ThinkSystem Series</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <Image
              src="/products/supermicro.webp"
              alt="SYS & BigTwin Series"
              width={120}
              height={60}
              className="mx-auto mb-2"
            />
            <p className="text-sm text-gray-600">SYS & BigTwin Series</p>
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-charcoal">Why Choose HGX Systems</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-charcoal">Flexible Deployment</h3>
            <p className="text-gray-600">
              HGX platforms integrate into diverse server designs, allowing organizations to choose the optimal form
              factor and features for their specific AI workloads and infrastructure requirements.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-charcoal">Scalable Architecture</h3>
            <p className="text-gray-600">
              Start with a single HGX system and scale to multiple nodes as your AI initiatives grow, maintaining
              consistent architecture and software compatibility across your infrastructure.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-charcoal">Comprehensive Software Stack</h3>
            <p className="text-gray-600">
              HGX systems are supported by NVIDIA's complete software ecosystem, including CUDA, cuDNN, TensorRT, and
              domain-specific libraries for optimal performance.
            </p>
          </div>
        </div>
      </div>

      {/* Performance Comparison */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-charcoal">Performance Evolution</h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
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
                  <td className="py-3">30 TB HBM3e</td>
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

      {/* CTA Section */}
      <div className="bg-accent-green/10 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4 text-charcoal">Build Your AI Infrastructure with HGX</h2>
        <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
          Contact our team to discuss your AI computing requirements and learn how NVIDIA HGX systems can provide the
          optimal foundation for your AI infrastructure, from single nodes to large-scale deployments.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="bg-accent-green text-charcoal hover:bg-accent-green/90">
            <Link href="#contact">Contact our HGX specialists</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-accent-green text-accent-green hover:bg-accent-green hover:text-white"
          >
            <Link href="https://www.nvidia.com/en-us/data-center/hgx/" target="_blank" rel="noopener noreferrer">
              Learn more on NVIDIA's website
            </Link>
          </Button>
        </div>
      </div>
    </ProductLayout>
  )
}
