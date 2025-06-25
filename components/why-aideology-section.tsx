import { Card, CardContent } from "@/components/ui/card"

export default function WhyAIdeologySection() {
  const kpis = [
    {
      value: "+500",
      label: "NVIDIA Servers implemented",
      color: "bg-accent-green/10 border-accent-green/30",
    },
    {
      value: "+50",
      label: "projects",
      color: "bg-accent-green/20 border-accent-green/40",
    },
    {
      value: "+5,000",
      label: "Petaflops (FP16)",
      color: "bg-accent-green/30 border-accent-green/50",
    },
  ]

  return (
    <section className="py-20 bg-[#f4f4f4] relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text */}
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-charcoal">Why AIdeology?</h2>
            <div className="space-y-4 text-gray-600">
              <p className="text-lg">
                As an <span className="text-electric-green font-semibold">NVIDIA Elite Solution Provider</span> with
                certified architects, we bring unparalleled expertise to your AI infrastructure needs.
              </p>
              <p className="text-lg">
                Our strategic contracts with industry leaders like Lenovo, HPE & Supermicro ensure you get the
                best hardware configurations optimized for your specific workloads.
              </p>
              <p className="text-lg">
                We don't just build systems—we architect solutions that accelerate your AI journey from concept to
                production, with measurable performance improvements.
              </p>
            </div>
          </div>

          {/* Right Column - KPIs and Elite Partner */}
          <div className="space-y-8">
            {/* KPIs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {kpis.map((kpi, index) => (
                <Card
                  key={index}
                  className={`${kpi.color} border text-charcoal hover-lift transition-all duration-300 hover:scale-105 animate-fade-in-up`}
                  style={{
                    animationDelay: `${200 + index * 150}ms`,
                    animationFillMode: "both",
                  }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold mb-2 text-electric-green">{kpi.value}</div>
                    <div className="text-charcoal/80">{kpi.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* NVIDIA Elite Partner Certification */}
            <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <div className="bg-white p-6 rounded-lg shadow-lg w-full">
                <div className="flex items-start gap-6 mb-4">
                  <img 
                    src="/elite-partner.webp" 
                    alt="NVIDIA Elite Partner" 
                    className="w-36 h-auto rounded flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-charcoal mb-2">NVIDIA Elite Partner</h4>
                    <p className="text-gray-700 text-sm">Demonstrating the highest level of expertise and commitment.</p>
                  </div>
                </div>
                <div className="w-full">
                  <h5 className="text-md font-semibold text-charcoal mb-3 border-b pb-1">Elite Competencies:</h5>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                    <li>Networking</li>
                    <li>DGX AI Compute Systems</li>
                    <li>DGX Cloud</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background gradient effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-green/0 via-accent-green/50 to-accent-green/0"></div>
    </section>
  )
}
