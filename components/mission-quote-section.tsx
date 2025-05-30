"use client"; // Keep as client component if other client-side logic exists or might be added, or remove if not needed.

import { Quote } from "lucide-react";
// Removed useState, useEffect, useRef as typewriter is being removed.

export default function MissionQuoteSection() {
  const fullQuote = "We may hope that machines will eventually compete with men in all purely intellectual fields.";

  return (
    // The id="mission-quote-section-observable" and ref={sectionRef} can be removed if no other JS targets this specifically.
    // For now, keeping the ID in case general scroll animations target it via class.
    <section id="mission-quote-section-observable" className="py-20 bg-charcoal relative overflow-hidden text-white">
      <div className="absolute inset-0 point-cloud-bg opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up"> {/* General animation class */} 
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Mission</h2>
            <div className="relative">
              <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-white max-w-4xl mx-auto relative z-10 font-montserrat">
                Our mission is to simplify and transform ideas into rational systems-engineering AI solutions.
              </p>
            </div>
          </div>
          <div className="relative animate-fade-in-up" style={{animationDelay: '200ms'}}> {/* General animation class */} 
            <Quote className="absolute -top-6 -left-6 h-16 w-16 text-accent-green opacity-20" />
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-light italic text-center px-8 text-white min-h-[3em]">
              {fullQuote} {/* Display full quote statically */}
              {/* Removed typing cursor */}
            </blockquote>
            <div className="text-right mt-4 text-white/70 animate-fade-in-up" style={{animationDelay: '400ms'}}> {/* General animation class */} 
              <p className="text-lg">— Alan Turing</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-green/0 via-accent-green/50 to-accent-green/0 animate-gradient"></div>
    </section>
  );
}
