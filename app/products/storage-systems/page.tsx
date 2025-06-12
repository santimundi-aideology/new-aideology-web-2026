import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProductLayout from "@/components/layouts/product-layout"
import ScrollAnimations from "@/components/scroll-animations"

export const metadata = {
  title: "AI Storage Systems | High-Performance Data Solutions | AIdeology",
  description:
    "AIdeology offers high-performance storage solutions designed for AI data pipelines, featuring technologies from DDN, NetApp, VAST Data, and Weka.",
}

export default function StorageSystemsPage() {
  return (
    <ProductLayout>
      <ScrollAnimations />
      <div className="w-full px-6 lg:px-12 mb-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-charcoal animate-fade-in-up">AI Storage Systems</h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            High-performance storage solutions designed for AI data pipelines, large-scale training, and inference
            workloads.
          </p>
          <div className="relative h-[400px] rounded-lg overflow-hidden mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <Image
              src="/products/ai-storage.webp"
              alt="High-performance storage systems optimized for AI workloads"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-full px-6 lg:px-12 mb-12">
        <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-charcoal animate-fade-in-up">Storage for the AI Era</h2>
        <p className="mb-4 animate-fade-in-up">
          AI workloads place unique demands on storage infrastructure, requiring systems that can deliver massive
          throughput, handle small and large files efficiently, and scale seamlessly as datasets grow. Traditional
          enterprise storage solutions often fall short in meeting these requirements, leading to bottlenecks that limit
          the effectiveness of AI initiatives.
        </p>
        <p className="mb-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          AIdeology partners with leading AI storage vendors to provide purpose-built storage solutions that address the
          specific needs of AI workloads, from data preparation and training to inference and archiving.
        </p>
        </div>
      </div>

      <div className="w-full px-6 lg:px-12 mb-12">
        <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-charcoal animate-fade-in-up">Our Storage Solutions</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 animate-fade-in-up">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-2 text-charcoal animate-fade-in-up">DDN AI Storage</h3>
            <p className="text-gray-600 mb-4 animate-fade-in-up">
              Industry-leading storage solutions specifically designed for AI and high-performance computing
              environments.
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-600 animate-fade-in-up">
              <li>DDN A3I with NVIDIA DGX systems</li>
              <li>EXAScaler parallel file system</li>
              <li>Extreme IOPs and throughput performance</li>
              <li>Seamless scaling from terabytes to petabytes</li>
              <li>Optimized for large-scale AI training workloads</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-2 text-charcoal animate-fade-in-up">VAST Data</h3>
            <p className="text-gray-600 mb-4 animate-fade-in-up">
              All-flash storage platform that combines the performance of flash with archive economics.
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-600 animate-fade-in-up">
              <li>Universal Storage architecture</li>
              <li>NFS, S3, and GPU Direct Storage support</li>
              <li>QLC flash technology with innovative data reduction</li>
              <li>Disaggregated, shared-everything design</li>
              <li>Ideal for mixed AI workloads and data lakes</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-2 text-charcoal animate-fade-in-up">Weka Data Platform</h3>
            <p className="text-gray-600 mb-4 animate-fade-in-up">
              High-performance, scalable file system designed for data-intensive applications and AI workloads.
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-600 animate-fade-in-up">
              <li>WekaFS distributed file system</li>
              <li>Native GPU Direct Storage support</li>
              <li>Hybrid cloud capabilities</li>
              <li>Integrated tiering to object storage</li>
              <li>Perfect for GPU-accelerated computing environments</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-2 text-charcoal animate-fade-in-up">NetApp AI Solutions</h3>
            <p className="text-gray-600 mb-4 animate-fade-in-up">
              Enterprise-grade storage solutions with advanced data management capabilities for AI workflows.
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-600 animate-fade-in-up">
              <li>NetApp ONTAP AI reference architecture</li>
              <li>AFF A-Series all-flash storage</li>
              <li>Cloud-integrated data management</li>
              <li>AI data pipeline automation</li>
              <li>Ideal for enterprise AI deployments</li>
            </ul>
          </div>
        </div>
        </div>
      </div>

      <div className="w-full px-6 lg:px-12 mb-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-charcoal animate-fade-in-up">Key Considerations for AI Storage</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up">
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in-up">
            <h3 className="text-xl font-semibold mb-2 text-charcoal animate-fade-in-up">Performance</h3>
            <p className="text-gray-600 animate-fade-in-up">
              AI workloads require exceptional throughput and IOPs to prevent GPUs from waiting for data. Our solutions
              deliver the performance needed to keep AI systems running at peak efficiency.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in-up">
            <h3 className="text-xl font-semibold mb-2 text-charcoal animate-fade-in-up">Scalability</h3>
            <p className="text-gray-600 animate-fade-in-up">
              AI datasets are growing exponentially. Our storage solutions scale seamlessly from terabytes to petabytes,
              allowing your infrastructure to grow with your AI initiatives.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in-up">
            <h3 className="text-xl font-semibold mb-2 text-charcoal animate-fade-in-up">Data Management</h3>
            <p className="text-gray-600 animate-fade-in-up">
              Effective AI requires sophisticated data management. Our solutions include tools for data versioning,
              cataloging, and lifecycle management to streamline AI workflows.
            </p>
          </div>
        </div>
        </div>
      </div>

      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-accent-green/10 rounded-lg p-8 text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-4 text-charcoal animate-fade-in-up">Optimize Your AI Data Infrastructure</h2>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto animate-fade-in-up">
              Contact our team to discuss your AI storage requirements and learn how our solutions can accelerate your AI
              initiatives.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up">
              <Button 
                asChild 
                className="bg-accent-green text-charcoal hover:bg-charcoal hover:text-white hover:scale-105 transition-all duration-300 ease-in-out px-8 py-3 animate-fade-in-up"
              >
                <Link href="/contact">Contact us</Link>
              </Button>
              <Button
                asChild
                className="bg-charcoal text-white hover:bg-accent-green hover:text-charcoal hover:scale-105 transition-all duration-300 ease-in-out animate-fade-in-up"
              >
                <Link
                  href="https://www.nvidia.com/en-au/data-center/resources/pure-storage-airi-reference-architecture/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more about AI storage
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ProductLayout>
  )
}
