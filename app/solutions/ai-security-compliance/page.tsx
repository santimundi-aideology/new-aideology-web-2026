import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import Footer from "@/components/footer"
import { Shield, Lock, FileText, CheckCircle, ArrowRight, Eye, AlertTriangle, Users, Code } from "lucide-react"

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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charcoal via-charcoal to-gray-800 text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-charcoal/50"></div>
        </div>
        
        <div className="w-full text-center px-6 lg:px-12 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <div className="inline-flex items-center bg-accent-green/20 text-accent-green px-6 py-3 rounded-full text-sm font-medium mb-8 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <Shield className="w-4 h-4 mr-2" />
            AI Solutions • Security & Compliance
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            Secure AI
            <span className="block text-accent-green">
              Excellence
            </span>
          </h1>
          
          <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            Build trustworthy AI systems with enterprise-grade security, compliance frameworks, and risk management
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            <Button
              size="lg"
              className="bg-accent-green text-charcoal font-semibold text-lg px-10 py-5 rounded-2xl hover:bg-white hover:text-charcoal hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Secure Your AI
              <Shield className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-charcoal text-lg px-10 py-5 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Assessment Report
            </Button>
          </div>
        </div>
      </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
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
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden animate-fade-in-up" style={{ animationDelay: '200ms' }}>
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
            <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Our AI Security & Compliance Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center p-6 animate-fade-in-up transition-transform duration-300 hover:scale-105" style={{ animationDelay: `${200 + index * 100}ms` }}>
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-charcoal/70">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="w-full px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <h2 className="text-4xl font-bold text-charcoal mb-4">Security Implementation Process</h2>
                <p className="text-xl text-gray-600">Our proven methodology for implementing AI security</p>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent-green rounded-full animate-fade-in-up" style={{ animationDelay: '200ms' }}></div>

                <div className="space-y-16">
                  {/* Step 1 */}
                  <div className="flex items-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                    <div className="w-1/2 pr-12 text-right">
                      <div className="bg-white rounded-2xl p-8 shadow-lg border">
                        <h3 className="text-2xl font-bold text-charcoal mb-4">Security Assessment</h3>
                        <p className="text-gray-600">
                          Comprehensive evaluation of your current AI systems, identifying vulnerabilities and security gaps.
                        </p>
                      </div>
                    </div>
                    <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center relative z-10">
                      <span className="text-white font-bold text-xl">1</span>
                    </div>
                    <div className="w-1/2 pl-12"></div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                    <div className="w-1/2 pr-12"></div>
                    <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center relative z-10">
                      <span className="text-white font-bold text-xl">2</span>
                    </div>
                    <div className="w-1/2 pl-12">
                      <div className="bg-white rounded-2xl p-8 shadow-lg border">
                        <h3 className="text-2xl font-bold text-charcoal mb-4">Risk Mitigation</h3>
                        <p className="text-gray-600">
                          Implementation of security controls and risk mitigation strategies tailored to your environment.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-center animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                    <div className="w-1/2 pr-12 text-right">
                      <div className="bg-white rounded-2xl p-8 shadow-lg border">
                        <h3 className="text-2xl font-bold text-charcoal mb-4">Compliance Alignment</h3>
                        <p className="text-gray-600">
                          Ensure your AI systems meet regulatory requirements and industry standards.
                        </p>
                      </div>
                    </div>
                    <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center relative z-10">
                      <span className="text-white font-bold text-xl">3</span>
                    </div>
                    <div className="w-1/2 pl-12"></div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex items-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                    <div className="w-1/2 pr-12"></div>
                    <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center relative z-10">
                      <span className="text-white font-bold text-xl">4</span>
                    </div>
                    <div className="w-1/2 pl-12">
                      <div className="bg-white rounded-2xl p-8 shadow-lg border">
                        <h3 className="text-2xl font-bold text-charcoal mb-4">Continuous Monitoring</h3>
                        <p className="text-gray-600">
                          Ongoing security monitoring and incident response to maintain protection over time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                Navigating Compliance Frameworks
              </h2>
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="bg-gray-50 rounded-lg p-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                  <h3 className="text-2xl font-bold mb-3">GDPR</h3>
                  <p className="text-charcoal/70 mb-4">Ensuring data protection and privacy for users in the European Union.</p>
                  <Image src="/logos/gdpr.svg" alt="GDPR Logo" width={80} height={40} />
                </div>
                <div className="bg-gray-50 rounded-lg p-6 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                  <h3 className="text-2xl font-bold mb-3">HIPAA</h3>
                  <p className="text-charcoal/70 mb-4">Protecting sensitive patient health information in the United States.</p>
                  <Image src="/logos/hipaa.svg" alt="HIPAA Logo" width={80} height={40} />
                </div>
                <div className="bg-gray-50 rounded-lg p-6 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                  <h3 className="text-2xl font-bold mb-3">AI Act</h3>
                  <p className="text-charcoal/70 mb-4">Adhering to the upcoming European Union regulations for artificial intelligence.</p>
                   <Image src="/logos/eu_ai_act.svg" alt="AI Act Logo" width={80} height={40} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-charcoal text-white">
          <div className="w-full px-6 lg:px-12 text-center">
            <h2 className="text-4xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>Secure Your AI Advantage</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Don't let security be an afterthought. Build trust and compliance into your AI systems from the ground up.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <Button
                size="lg" 
                className="bg-accent-green text-charcoal font-semibold text-lg px-8 py-4 hover:bg-white hover:text-charcoal hover:scale-105 transition-all duration-300 ease-in-out"
                asChild
              >
                <Link href="/contact" className="flex items-center">
                  Schedule Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-charcoal text-lg px-8 py-4 hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Download Whitepaper
              </Button>
            </div>
          </div>
        </section>
      <Footer />
    </main>
  )
}
