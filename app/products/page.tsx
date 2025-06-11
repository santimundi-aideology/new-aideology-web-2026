import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Footer from "@/components/footer"

export const metadata = {
  title: "Enterprise AI Hardware & Software Solutions | AIdeology",
  description:
    "Explore AIdeology's comprehensive portfolio of enterprise AI hardware and software, including NVIDIA DGX & HGX systems, advanced networking, high-performance storage, and NVIDIA AI Enterprise.",
}

const productCategories = [
  {
    name: "NVIDIA DGX Systems",
    href: "/products/nvidia-dgx",
    description:
      "Unlock transformative AI with NVIDIA DGX systems, the universal platform for AI infrastructure. From individual workstations to large-scale supercomputers like DGX SuperPOD, these systems provide unparalleled performance for training, inference, and data analytics. AIdeology helps you deploy and manage DGX solutions tailored to your enterprise needs, ensuring you have the power to tackle any AI challenge.",
    image: "/products/nvidia_dgx_systems.webp", // Image for DGX Systems
    alt: "NVIDIA DGX system in a data center environment, showcasing its powerful AI computing capabilities.",
  },
  {
    name: "NVIDIA HGX Systems",
    href: "/products/nvidia-hgx",
    description:
      "Power the most demanding AI and HPC workloads with NVIDIA HGX platforms. Combining high-performance NVIDIA GPUs, NVLink, and InfiniBand networking, HGX delivers extreme scalability and efficiency for complex model training and large-scale simulations. AIdeology offers custom HGX server solutions, architected to accelerate your most ambitious AI projects.",
    image: "/products/nvidia_hgx_systems.webp", // Image for HGX Systems
    alt: "Close-up of an NVIDIA HGX system with multiple GPUs, highlighting its dense computing power for AI.",
  },
  {
    name: "Storage Systems",
    href: "/products/storage-systems",
    description:
      "Fuel your AI data pipelines with high-performance, scalable storage. AIdeology partners with leading vendors like DDN, NetApp, VAST Data, and Weka to deliver optimized storage solutions. These systems are designed to handle the massive datasets and intense I/O demands of AI training and inference, ensuring no bottlenecks in your workflow and rapid access to your critical data.",
    image: "/products/ai_storage.webp", // Image for Storage
    alt: "Illustration of a modern, high-capacity storage system array for AI and big data.",
  },
  {
    name: "NVIDIA AI Enterprise",
    href: "/products/nvidia-ai-enterprise",
    description:
      "Accelerate your AI journey from development to production with NVIDIA AI Enterprise. This end-to-end, cloud-native suite of AI and data analytics software is optimized, certified, and supported by NVIDIA to run on mainstream data center platforms. AIdeology helps you leverage NVAIE for streamlined AI workflows, faster time-to-value, and enterprise-grade support for your AI initiatives.",
    image: "/ai-enterprise.webp", 
    alt: "NVIDIA AI Enterprise",
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-charcoal">Enterprise AI Hardware & Software</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AIdeology delivers a comprehensive suite of cutting-edge AI infrastructure solutions. Explore our curated
            selection of powerful computing platforms, high-performance networking, scalable storage, and
            enterprise-grade AI software designed to accelerate your AI journey.
          </p>
        </div>
      </div>

      {productCategories.map((category, index) => (
        <section
          key={category.name}
          className={`py-12 md:py-16 ${index < productCategories.length - 1 ? "border-b border-gray-200" : ""}`}
        >
          <div className="container mx-auto px-4">
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 md:gap-12 lg:gap-16`}
            >
              <div className="w-full md:w-5/12">
                <div className="relative aspect-[4/3] rounded-lg shadow-xl overflow-hidden bg-gray-100">
                  <Image
                    src={
                      category.image ||
                      "/placeholder.svg?width=800&height=600&query=" + encodeURIComponent(category.name)
                    }
                    alt={category.alt}
                    fill
                    className="object-contain p-4" // Changed to object-contain and added padding for logos/diagrams
                  />
                </div>
              </div>
              <div className="w-full md:w-7/12">
                <h2 className="text-3xl font-bold mb-4 text-charcoal">{category.name}</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">{category.description}</p>
                <Button
                  asChild
                  className="bg-accent-green text-charcoal hover:bg-charcoal hover:text-white hover:scale-105 transition-all duration-300 ease-in-out"
                  size="lg"
                >
                  <Link href={category.href} className="inline-flex items-center">
                    Learn more about {category.name}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}

      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 my-16">
          <h2 className="text-3xl font-bold mb-6 text-charcoal text-center">Why Choose AIdeology for AI Hardware?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2 text-charcoal">Expert Consultation</h3>
              <p className="text-gray-600">
                Our AI infrastructure specialists provide tailored guidance, helping you design the optimal hardware and
                software stack for your specific AI workloads and strategic goals.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2 text-charcoal">End-to-End Integration</h3>
              <p className="text-gray-600">
                We manage the entire lifecycle, from procurement and deployment to configuration and ongoing support,
                ensuring a seamless integration into your existing environment.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2 text-charcoal">Certified Partnerships</h3>
              <p className="text-gray-600">
                As an NVIDIA Elite Partner and certified provider for leading technologies, we offer direct access to
                the latest AI hardware, software, and exclusive support channels.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-accent-green">
        <div className="container mx-auto px-4">
          <div className="rounded-lg shadow-xl p-8 md:p-12 text-center text-charcoal">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your AI Infrastructure?</h2>
            <p className="text-xl text-charcoal mb-8 max-w-2xl mx-auto">
              Contact our team today to discuss your AI hardware and software requirements. Let us help you architect a
              customized, high-performance solution proposal.
            </p>
            <Button
              asChild
              className="bg-charcoal text-white hover:bg-white hover:text-charcoal hover:scale-105 transition-all duration-300 ease-in-out"
              size="lg"
            >
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
