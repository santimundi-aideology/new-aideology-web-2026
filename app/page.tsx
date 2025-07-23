import HeroSection from "@/components/hero-section"
import SolutionsSection from "@/components/solutions-section"
import WhyAIdeologySection from "@/components/why-aideology-section"
import GlobalPresenceSection from "@/components/global-presence-section"
import CustomerLogosSection from "@/components/customer-logos-section"
import PartnerEcosystemSection from "@/components/partner-ecosystem-section"
import MissionQuoteSection from "@/components/mission-quote-section"
import LatestNewsSection from "@/components/latest-news-section"
import NewsletterSignup from "@/components/newsletter-signup"
import Footer from "@/components/footer"
import ProductsPromo from "@/components/products-promo"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f4f4] text-charcoal">
      <HeroSection />
      <SolutionsSection />
      <WhyAIdeologySection />
      <ProductsPromo />
      
      {/* Liquid Model Section */}
      <section className="py-5 bg-white relative">
        {/* Top green line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-green to-transparent"></div>
        
        <div className="w-full px-0">
          <div className="w-full text-center">
            <div className="relative w-full animate-fade-in-up no-image-hover">
              <Image
                src="/liquid-model.webp"
                alt="Liquid AI Model Visualization"
                width={1920}
                height={800}
                className="w-full h-auto object-cover"
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

      {/* Newsletter Signup Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-md animate-fade-in-up">
          <NewsletterSignup />
        </div>
      </section>

      <Footer />
    </main>
  )
}
