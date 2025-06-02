export default function AcceleratedComputingPage() {
  return (
    <div className="w-full py-12">
      <div className="w-full px-6 lg:px-12">
        <h1 className="text-4xl font-bold mb-6">Accelerated Computing Infrastructure</h1>

        <p className="text-lg mb-8">
          AIdeology designs, builds, and optimizes GPU-accelerated computing infrastructure that powers the most
          demanding AI, HPC, and data analytics workloads. Our solutions leverage NVIDIA's comprehensive portfolio of
          accelerated computing technologies to deliver exceptional performance, efficiency, and scalability.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">The Power of Accelerated Computing</h2>

        <p className="mb-6">
          Traditional CPU-only infrastructure cannot meet the computational demands of modern AI and HPC applications.
          GPU-accelerated computing provides:
        </p>

        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <strong>Massive Parallelism</strong>: Thousands of cores working simultaneously on complex calculations
          </li>
          <li>
            <strong>Specialized Architecture</strong>: Hardware optimized for AI, graphics, and scientific computing
          </li>
          <li>
            <strong>Energy Efficiency</strong>: Higher performance per watt compared to CPU-only solutions
          </li>
          <li>
            <strong>Scalability</strong>: From workstations to supercomputers with consistent architecture
          </li>
        </ul>

        <p className="mb-8">
          AIdeology's accelerated computing solutions harness these advantages to transform your computational
          capabilities.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">AIdeology's Accelerated Computing Services</h2>

        <div className="space-y-6 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">GPU Infrastructure Design & Implementation</h3>
            <p>
              We design and build optimized GPU infrastructure—from individual workstations to large-scale
              clusters—tailored to your specific workloads and performance requirements.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">NVIDIA DGX Systems Deployment</h3>
            <p>
              AIdeology specializes in deploying NVIDIA DGX systems—purpose-built AI supercomputers—and integrating them
              into your existing infrastructure for maximum performance and efficiency.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">GPU Cluster Management</h3>
            <p>
              We implement comprehensive management solutions for GPU clusters, including workload scheduling, resource
              allocation, and monitoring to ensure optimal utilization and performance.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Performance Optimization</h3>
            <p>
              AIdeology's experts fine-tune your accelerated computing infrastructure for maximum performance,
              identifying and eliminating bottlenecks in computation, memory access, and data movement.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <h3 className="font-bold text-blue-800">NVIDIA Accelerated Computing Portfolio</h3>
          <p className="text-blue-700">
            AIdeology leverages NVIDIA's comprehensive accelerated computing portfolio, including NVIDIA A100 and H100
            Tensor Core GPUs, NVIDIA DGX systems, and NVIDIA HGX platforms. These technologies form the foundation of
            our high-performance computing solutions, delivering exceptional performance for AI training, inference, and
            HPC workloads.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">Benefits of AIdeology's Accelerated Computing Solutions</h2>

        <ul className="list-disc pl-6 mb-10 space-y-2">
          <li>
            <strong>Transformative Performance</strong>: Achieve 10-100x speedups for AI and HPC workloads
          </li>
          <li>
            <strong>Improved Productivity</strong>: Enable researchers and data scientists to iterate faster
          </li>
          <li>
            <strong>Infrastructure Consolidation</strong>: Do more with less hardware through higher compute density
          </li>
          <li>
            <strong>Future-Ready Architecture</strong>: Build on a platform that evolves with advancing AI capabilities
          </li>
          <li>
            <strong>Energy Efficiency</strong>: Reduce power consumption while increasing computational capacity
          </li>
        </ul>

        <p className="text-lg font-semibold">
          Unlock the full potential of accelerated computing for your organization. Contact AIdeology to learn how our
          GPU-accelerated infrastructure solutions can transform your computational capabilities.
        </p>
      </div>
    </div>
  )
}

export const metadata = {
  title: "Accelerated Computing Infrastructure Solutions | AIdeology",
  description:
    "AIdeology designs and deploys NVIDIA GPU-accelerated computing infrastructure, from workstations and servers to DGX systems and supercomputers, to power the most demanding AI, HPC, and data analytics workloads.",
}
