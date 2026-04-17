export default function MissionQuoteSection() {
  return (
    <section id="mission-quote-section-observable" className="py-20 bg-charcoal relative overflow-hidden text-white">
      <div className="absolute inset-0 point-cloud-bg opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <p className="text-sm uppercase tracking-[0.25em] text-accent-green mb-4">Our Mission</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-8">
            Turn AI Ambition into<br />Operating Capability
          </h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-white/80 max-w-3xl mx-auto">
            We help organizations move from isolated AI ideas to production-ready enterprise systems — through
            strategy, rapid execution, and architecture that holds up at scale.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-green/0 via-accent-green/50 to-accent-green/0 animate-gradient"></div>
    </section>
  );
}
