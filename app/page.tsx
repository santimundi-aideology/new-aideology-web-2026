import Navbar from "@/components/navbar"
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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f4f4] text-charcoal">
      <Navbar />
      <HeroSection />
      <SolutionsSection />
      <WhyAIdeologySection />
      <ProductsPromo />
      <GlobalPresenceSection />
      <CustomerLogosSection />
      <PartnerEcosystemSection />
      <MissionQuoteSection />
      <LatestNewsSection />

      {/* Newsletter Signup Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-md">
          <NewsletterSignup />
        </div>
      </section>

      <Footer />
    </main>
  )
}
