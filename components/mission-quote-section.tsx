import { Quote } from "lucide-react"

export default function MissionQuoteSection() {
  return (
    <section className="py-20 bg-charcoal relative overflow-hidden text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 point-cloud-bg opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Quote */}
          <div className="mb-12 relative">
            <Quote className="absolute -top-6 -left-6 h-16 w-16 text-accent-green opacity-20" />
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-light italic text-center px-8">
              "We may hope that machines will eventually compete with men in all purely intellectual fields."
            </blockquote>
            <div className="text-right mt-4 text-white/70">
              <p className="text-lg">— Alan Turing</p>
            </div>
          </div>

          {/* Mission */}
          <div className="text-center mt-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our mission is to simplify and transform ideas into rational systems-engineering AI solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Animated gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-green/0 via-accent-green/50 to-accent-green/0 animate-gradient"></div>
    </section>
  )
}
