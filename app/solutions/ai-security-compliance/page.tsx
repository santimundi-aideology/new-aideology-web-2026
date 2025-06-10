import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Shield, Lock, FileText, CheckCircle, ArrowRight } from "lucide-react"

export default function AISecurityCompliancePage() {
  const features = [
    {
      icon: <Shield className="h-12 w-12 text-accent-green" />,
      title: "Threat Modeling & Risk Assessment",
      description: "We identify and prioritize potential threats to your AI systems, including data poisoning, model evasion, and privacy breaches.",
    },
    {
      icon: <Lock className="h-12 w-12 text-accent-green" />,
      title: "Secure AI Development Lifecycle",
      description: "Integrating security best practices into every stage of your AI development process, from data acquisition to model deployment.",
    },
    {
      icon: <FileText className="h-12 w-12 text-accent-green" />,
      title: "Regulatory Compliance",
      description: "Navigate complex regulatory landscapes like GDPR, HIPAA, and the AI Act with our expert guidance and compliance frameworks.",
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-accent-green" />,
      title: "Model Robustness & Validation",
      description: "Testing and validating your AI models against adversarial attacks to ensure they are robust, reliable, and fair.",
    },
  ]

  return (
    <main className="min-h-screen bg-white text-charcoal">
      <Navbar />
      <div className="pt-20">
        <section className="py-20 text-center bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AI Security & Compliance
            </h1>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Building Trustworthy AI Systems with Robust Security and Regulatory Adherence
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Why AI Security Matters</h2>
                <p className="text-charcoal/80 mb-4">
                  As AI becomes more integrated into critical business functions, the attack surface for malicious actors expands. Securing your AI systems is not just about protecting data; it's about ensuring the integrity, reliability, and trustworthiness of your AI-driven decisions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent-green mr-2" />
                    Protect against data poisoning and model theft.
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent-green mr-2" />
                    Ensure fairness and mitigate algorithmic bias.
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent-green mr-2" />
                    Comply with evolving AI regulations and standards.
                  </li>
                </ul>
              </div>
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                <Image
                  src="/ai-security-placeholder.jpg"
                  alt="AI Security Concept"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our AI Security & Compliance Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center p-6">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-charcoal/70">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Secure Your AI Advantage</h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto mb-8">
              Don't let security be an afterthought. Contact us today to learn how we can help you build secure, compliant, and trustworthy AI systems.
            </p>
            <Button asChild size="lg">
              <Link href="/contact" className="flex items-center">
                Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
