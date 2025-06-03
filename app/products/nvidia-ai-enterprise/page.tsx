import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProductLayout from "@/components/layouts/product-layout"

export const metadata = {
  title: "NVIDIA AI Enterprise | End-to-End AI Software | AIdeology",
  description:
    "AIdeology offers NVIDIA AI Enterprise, a comprehensive software suite for AI development, deployment, and management in enterprise environments.",
}

export default function NvidiaAIEnterprisePage() {
  return (
    <ProductLayout>
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-6 text-charcoal">NVIDIA AI Enterprise</h1>
        <p className="text-xl text-gray-600 mb-8">
          End-to-end software suite for AI development, deployment, and management in enterprise environments.
        </p>
        <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
          <Image
            src="/services/mlops.png"
            alt="NVIDIA AI Enterprise software suite for AI development and deployment"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-charcoal">Enterprise-Ready AI Software</h2>
        <p className="mb-4">
          NVIDIA AI Enterprise is a comprehensive software suite that streamlines the development and deployment of AI
          applications in enterprise environments. It includes enterprise-grade versions of NVIDIA AI frameworks, tools,
          and pre-trained models, all optimized for NVIDIA-Certified Systems and supported with enterprise-level
          service.
        </p>
        <p className="mb-4">
          As an authorized NVIDIA partner, AIdeology provides NVIDIA AI Enterprise licensing, implementation services,
          and ongoing support to help organizations accelerate their AI initiatives with enterprise-grade reliability
          and performance.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-charcoal">Key Components</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-2 text-charcoal">AI Frameworks & Tools</h3>
            <p className="text-gray-600 mb-4">
              Enterprise-ready, optimized versions of popular AI frameworks and development tools.
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-600">
              <li>NVIDIA TensorRT for high-performance inference</li>
              <li>NVIDIA RAPIDS for accelerated data science</li>
              <li>NVIDIA Triton Inference Server</li>
              <li>NVIDIA TAO Toolkit for transfer learning</li>
              <li>NVIDIA CUDA-X libraries</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-2 text-charcoal">Pre-Trained Models</h3>
            <p className="text-gray-600 mb-4">Production-ready AI models for common enterprise use cases.</p>
            <ul className="list-disc list-inside mb-4 text-gray-600">
              <li>Computer vision models for image classification and object detection</li>
              <li>Natural language processing models</li>
              <li>Conversational AI and speech recognition</li>
              <li>Recommender systems</li>
              <li>Anomaly detection and predictive analytics</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-2 text-charcoal">Enterprise Platform Support</h3>
            <p className="text-gray-600 mb-4">Certified support for leading enterprise platforms and environments.</p>
            <ul className="list-disc list-inside mb-4 text-gray-600">
              <li>VMware vSphere with Tanzu</li>
              <li>Red Hat OpenShift</li>
              <li>NVIDIA-Certified Systems</li>
              <li>Kubernetes and container orchestration</li>
              <li>Multi-node, multi-GPU deployments</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-2 text-charcoal">Enterprise Support</h3>
            <p className="text-gray-600 mb-4">Comprehensive support and services for enterprise AI deployments.</p>
            <ul className="list-disc list-inside mb-4 text-gray-600">
              <li>Enterprise-grade software quality and reliability</li>
              <li>Long-term support and maintenance</li>
              <li>Regular security updates and patches</li>
              <li>Direct access to NVIDIA AI experts</li>
              <li>Deployment and optimization assistance</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-charcoal">Use Cases & Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2 text-charcoal">Computer Vision</h3>
            <p className="text-gray-600">
              Deploy vision AI applications for quality control, safety monitoring, retail analytics, and more with
              pre-trained models and optimization tools.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2 text-charcoal">Conversational AI</h3>
            <p className="text-gray-600">
              Build and deploy virtual assistants, chatbots, and speech-enabled applications with enterprise-grade NLP
              models and tools.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2 text-charcoal">Data Science</h3>
            <p className="text-gray-600">
              Accelerate data analytics and machine learning workflows with GPU-optimized tools for data preparation,
              model training, and deployment.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-charcoal">Why Choose NVIDIA AI Enterprise with AIdeology</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2 text-charcoal">Expert Implementation</h3>
            <p className="text-gray-600">
              Our certified engineers ensure your NVIDIA AI Enterprise deployment is properly configured and optimized
              for your specific AI workloads and infrastructure.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2 text-charcoal">Integrated Solutions</h3>
            <p className="text-gray-600">
              We provide complete AI solutions that integrate NVIDIA AI Enterprise with the right hardware, networking,
              and storage components for optimal performance.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2 text-charcoal">Ongoing Support</h3>
            <p className="text-gray-600">
              From initial setup to ongoing maintenance and optimization, our team provides comprehensive support for
              your NVIDIA AI Enterprise environment.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-accent-green/10 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4 text-charcoal">Accelerate Your Enterprise AI Journey</h2>
        <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
          Contact our team to discuss your AI software requirements and learn how NVIDIA AI Enterprise can streamline
          your organization's AI initiatives.
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
            <Link
              href="https://www.nvidia.com/en-us/data-center/products/ai-enterprise/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more on NVIDIA's website
            </Link>
          </Button>
        </div>
      </div>
    </ProductLayout>
  )
}
