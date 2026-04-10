import { Card, CardContent } from "@/components/ui/card"

export default function WhyAIdeologySection() {
  const kpis = [
    {
      value: "+500",
      label: "AI environments architected",
      color: "bg-accent-green/10 border-accent-green/30",
    },
    {
      value: "+50",
      label: "enterprise projects delivered",
      color: "bg-accent-green/20 border-accent-green/40",
    },
    {
      value: "+5,000",
      label: "petaflops designed for AI workloads",
      color: "bg-accent-green/30 border-accent-green/50",
    },
  ]

  return (
    <section className="py-20 bg-[#f4f4f4] relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-6 lg:space-y-8">
            {/* Text Content */}
            <div className="animate-fade-in-up">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-charcoal">
                We Build Systems, Not Just Agents
              </h2>
              <div className="space-y-3 lg:space-y-4 text-gray-600">
                <p className="text-base lg:text-lg">
                  AIdeology helps organizations move toward an AI operating system for their business, connecting
                  strategy, user experience, agents, data, integrations, governance, and deployment into one
                  executable model.
                </p>
                <p className="text-base lg:text-lg">
                  We do not stop at strategy decks or isolated proofs of concept. We translate business needs into
                  operational AI systems that can be implemented quickly and expanded across the enterprise.
                </p>
                <p className="text-base lg:text-lg">
                  Backed by deep NVIDIA expertise and strong regional execution, we advise clients on the right
                  architecture, platforms, and deployment decisions needed for secure, scalable AI adoption.
                </p>
              </div>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              {kpis.map((kpi, index) => (
                <Card
                  key={index}
                  className={`${kpi.color} border text-charcoal hover-lift transition-all duration-300 hover:scale-110 hover:-translate-y-3 hover:shadow-xl animate-fade-in-up cursor-pointer group`}
                  style={{
                    animationDelay: `${400 + index * 150}ms`,
                    animationFillMode: "both",
                  }}
                >
                  <CardContent className="p-4 lg:p-6 text-center">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-electric-green">{kpi.value}</div>
                    <div className="text-sm lg:text-base text-charcoal/80">{kpi.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 lg:space-y-8">
            {/* NVIDIA Elite Partner Certification */}
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-white p-4 lg:p-6 rounded-lg shadow-lg w-full hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                {/* Logo and Title Row */}
                <div className="flex items-center gap-4 lg:gap-6 mb-4">
                  <img 
                    src="/elite-partner.webp" 
                    alt="NVIDIA Elite Partner" 
                    className="w-20 sm:w-24 lg:w-32 h-auto rounded flex-shrink-0"
                  />
                  <h4 className="text-lg lg:text-xl font-bold text-charcoal">NVIDIA Elite Partner</h4>
                </div>
                
                {/* Description */}
                <p className="text-gray-700 text-sm lg:text-base mb-4">
                  A strategic trust signal for enterprise AI architecture, sovereign deployments, and production-grade
                  execution.
                </p>
                
                {/* Elite Competencies */}
                <div className="w-full">
                  <h5 className="text-sm lg:text-base font-semibold text-charcoal mb-3 border-b pb-1">Why It Matters:</h5>
                  <ul className="list-disc list-inside space-y-1 lg:space-y-2 text-gray-600 text-sm lg:text-base">
                    <li>Advanced AI platform and deployment expertise</li>
                    <li>Confidence in regulated and sovereign environments</li>
                    <li>Strong alignment with production AI architecture decisions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Midis Group - Our Investor */}
            <div className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <div className="bg-white p-4 lg:p-6 rounded-lg shadow-lg w-full hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                {/* Logo and Title Row */}
                <div className="flex items-center gap-4 lg:gap-6 mb-4">
                  <img 
                    src="/partner-logos/midis-group-logo.webp" 
                    alt="Midis Group" 
                    className="w-20 sm:w-24 lg:w-32 h-auto rounded flex-shrink-0"
                  />
                  <h4 className="text-lg lg:text-xl font-bold text-charcoal">Midis Group - our investor</h4>
                </div>
                
                {/* Description */}
                <p className="text-gray-700 text-sm lg:text-base mb-4">
                  Midis Group adds regional scale, ecosystem strength, and enterprise access across the Middle East,
                  Africa, Europe, and Central and Eastern Europe.
                </p>
                
                {/* Additional Info */}
                <div className="w-full">
                  <p className="text-gray-600 text-sm lg:text-base mb-3">
                    This gives AIdeology stronger reach across large enterprise, public sector, and sovereign AI
                    opportunities, while reinforcing our ability to deliver with both strategic depth and execution
                    capacity.
                  </p>
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
