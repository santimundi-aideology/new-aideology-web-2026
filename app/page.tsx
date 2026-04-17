import HeroSection from "@/components/hero-section"
import SolutionsSection from "@/components/solutions-section"
import WhyAIdeologySection from "@/components/why-aideology-section"
import GlobalPresenceSection from "@/components/global-presence-section"
import CustomerLogosSection from "@/components/customer-logos-section"
import PartnerEcosystemSection from "@/components/partner-ecosystem-section"
import MissionQuoteSection from "@/components/mission-quote-section"
import LatestNewsSection from "@/components/latest-news-section"
import Video from "@/components/video-player"

import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  

  return (
    <main className="min-h-dvh bg-[#f4f4f4] text-charcoal">
      <HeroSection />

      {/* Video Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 id="video" className="text-3xl md:text-4xl font-bold text-charcoal mb-4 animate-fade-in-up">
                End-to-End AI Delivery, One Partner
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                From strategy and agentic AI to HPC infrastructure and digital twins — we cover every layer of the AI
                stack so you work with one team from roadmap to production.
              </p>
            </div>
            
            <Video
              src="/home-video.mp4"
              poster="/thumbnail.webp"
              className="w-full max-w-5xl mx-auto animate-fade-in-up"
              style={{ animationDelay: '400ms' }}
              title="End-to-End AI Delivery, One Partner"
            />
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-accent-green mb-4 animate-fade-in-up">
              Our approach
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              We Build Systems, Not Just Agents
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              We design the workflows, governance, integrations, and deployment model that turn AI into real
              business operations.
            </p>
            <Link
              href="/building-process"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-green transition-colors hover:text-white animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              See how we build with clients
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      <SolutionsSection />

      

      <WhyAIdeologySection />
      
      {/* Talent Rings Section */}
      <section className="py-12 md:py-16 bg-white relative">
        {/* Top green line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-green to-transparent"></div>
        
        {/* Desktop Version - 4 columns, 2 rows grid */}
        <div className="hidden lg:block">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-4 gap-4 min-h-[500px]">
              {/* Column 1: Text and Vertical Image */}
              <div className="col-span-1 flex flex-col gap-4">
                {/* Text */}
                <div className="flex flex-col justify-center items-start py-8 animate-fade-in-up">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-charcoal">
                    Our<br />
                    Delivery Model
                  </h2>
                  <div className="w-full h-1 bg-accent-green mb-6"></div>
                  <p className="text-lg leading-relaxed text-charcoal">
                    We assemble <span className="font-bold text-charcoal">specialist teams</span> across strategy,
                    architecture, engineering, and delivery so each engagement gets the right blend of business and
                    technical expertise.
                  </p>
                </div>
                
                {/* Vertical Image 1 */}
                <div className="flex-1 animate-fade-in-up no-image-hover" style={{animationDelay: '200ms'}}>
                  <Image
                    src="/liquid-model-vertical-1.webp"
                    alt="Liquid AI Model Visualization - Talent Structure"
                    width={400}
                    height={600}
                    className="w-full h-auto object-contain rounded-lg"
                    priority={false}
                  />
                </div>
              </div>
              
              {/* Columns 2-4: Main Image */}
              <div className="col-span-3 animate-fade-in-up no-image-hover" style={{animationDelay: '100ms'}}>
                <Image
                  src="/liquid-model-main.webp"
                  alt="Liquid AI Model Visualization - Team Ecosystem"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-contain rounded-lg"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Version - Text at top, then vertical images in sequence */}
        <div className="block lg:hidden">
          <div className="container mx-auto px-4">
            {/* Text Section */}
            <div className="text-center mb-8 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">
                Our Delivery Model
              </h2>
              <div className="w-24 h-1 bg-accent-green mx-auto mb-6"></div>
              <p className="text-lg text-charcoal max-w-md mx-auto leading-relaxed">
                We bring together strategy, architecture, engineering, and delivery capabilities to match each
                enterprise AI program with the expertise it needs.
              </p>
            </div>
            
            {/* Image 1 */}
            <div className="relative w-full animate-fade-in-up no-image-hover mb-4" style={{animationDelay: '200ms'}}>
              <Image
                src="/liquid-model-vertical-1.webp"
                alt="Liquid AI Model Visualization - Part 1"
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-lg"
                priority={false}
              />
            </div>
            
            {/* Image 2 */}
            <div className="relative w-full animate-fade-in-up no-image-hover mb-4" style={{animationDelay: '300ms'}}>
              <Image
                src="/liquid-model-vertical-2.webp"
                alt="Liquid AI Model Visualization - Part 2"
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-lg"
                priority={false}
              />
            </div>
            
            {/* Image 3 */}
            <div className="relative w-full animate-fade-in-up no-image-hover" style={{animationDelay: '400ms'}}>
              <Image
                src="/liquid-model-vertical-3.webp"
                alt="Liquid AI Model Visualization - Part 3"
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-lg"
                priority={false}
              />
            </div>
          </div>
        </div>
        
        {/* Bottom green line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-green to-transparent"></div>
      </section>

      <GlobalPresenceSection />
      <CustomerLogosSection />
      <PartnerEcosystemSection />
      <MissionQuoteSection />
      <LatestNewsSection />

      <Footer />
    </main>
  )
}
