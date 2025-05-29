import { Quote } from "lucide-react"

const MissionQuoteSection = () => {
  return (
    <section className="py-20 bg-brand-gray-2">
      <div className="max-w-4xl mx-auto">
        {/* Mission */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Our mission is to simplify and transform ideas into rational systems-engineering AI solutions.
          </p>
        </div>

        {/* Quote */}
        <div className="relative">
          <Quote className="absolute -top-6 -left-6 h-16 w-16 text-accent-green opacity-20" />
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-light italic text-center px-8">
            "We may hope that machines will eventually compete with men in all purely intellectual fields."
          </blockquote>
          <div className="text-right mt-4 text-white/70">
            <p className="text-lg">— Alan Turing</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionQuoteSection
