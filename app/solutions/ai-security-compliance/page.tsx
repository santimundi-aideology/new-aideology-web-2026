import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/footer"
import { Shield, Lock, FileText, CheckCircle, ArrowRight, Eye, AlertTriangle, Users, Code, Radar, Database, Key, Zap, Cpu, Globe, ChevronRight } from "lucide-react"

const AISecurityCompliancePage = () => {
  const breadcrumbPath = [
    { name: "Solutions", href: "/#solutions" },
    { name: "AI Consulting", href: "/solutions/ai-consulting" },
    { name: "AI Security & Compliance" }
  ];

  const securitySolutions = [
    {
      icon: <Shield className="w-8 h-8 text-accent-green" />,
      title: "AI Model Security",
      description: "Protect your AI models from adversarial attacks and ensure data integrity throughout the AI lifecycle.",
      features: ["Model encryption", "Access control", "Audit trails", "Threat detection"]
    },
    {
      icon: <Lock className="w-8 h-8 text-accent-green" />,
      title: "Data Privacy Protection",
      description: "Safeguard sensitive data with advanced privacy-preserving AI techniques and compliance frameworks.",
      features: ["Data anonymization", "Differential privacy", "Secure computation", "GDPR compliance"]
    },
    {
      icon: <Eye className="w-8 h-8 text-accent-green" />,
      title: "AI Monitoring & Governance",
      description: "Comprehensive monitoring and governance solutions for transparent and accountable AI systems.",
      features: ["Real-time monitoring", "Bias detection", "Performance tracking", "Compliance reporting"]
    }
  ]

  const complianceFeatures = [
    {
      title: "Risk Assessment",
      description: "Comprehensive AI risk evaluation and mitigation strategies",
      icon: <AlertTriangle className="w-6 h-6 text-accent-green" />
    },
    {
      title: "Access Management",
      description: "Secure user authentication and authorization systems",
      icon: <Users className="w-6 h-6 text-accent-green" />
    },
    {
      title: "Data Governance",
      description: "Structured data management and compliance frameworks",
      icon: <Database className="w-6 h-6 text-accent-green" />
    },
    {
      title: "Automated Compliance",
      description: "Streamlined compliance processes and automated reporting",
      icon: <Zap className="w-6 h-6 text-accent-green" />
    }
  ]

  const industries = [
    {
      name: "Financial Services",
      icon: <Key className="w-6 h-6 text-accent-green" />,
      description: "Meet regulatory requirements for AI in banking and finance"
    },
    {
      name: "Healthcare",
      icon: <Shield className="w-6 h-6 text-accent-green" />,
      description: "HIPAA-compliant AI solutions for medical applications"
    },
    {
      name: "Government",
      icon: <Globe className="w-6 h-6 text-accent-green" />,
      description: "Secure AI systems for public sector applications"
    },
    {
      name: "Enterprise",
      icon: <Cpu className="w-6 h-6 text-accent-green" />,
      description: "Corporate AI governance and security frameworks"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <div className="bg-white pt-24 pb-6">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-500 flex items-center hidden md:flex" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            {breadcrumbPath.map((item, index) => (
              <div key={item.name} className="flex items-center">
                <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
                {item.href ? (
                  <Link href={item.href} className="hover:text-gray-700">
                    {item.name}
                  </Link>
                ) : (
                  <span className="font-medium text-gray-700">{item.name}</span>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-charcoal via-charcoal to-gray-800 text-white py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,.1),transparent_50%)] animate-pulse"></div>
        </div>

        <div className="w-full relative z-10">
          <div className="w-full text-center px-6 lg:px-12">
            <div className="inline-flex items-center bg-accent-green/20 text-accent-green px-6 py-3 rounded-full text-sm font-medium mb-8 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <Shield className="w-4 h-4 mr-2" />
              Security • Compliance • Governance
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <span className="text-accent-green">AI Security</span>
              <span className="block text-white">& Compliance</span>
            </h1>

            <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              Secure your AI systems with comprehensive security and compliance solutions that protect data, ensure governance, and meet regulatory requirements
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <Button
                size="lg"
                className="bg-accent-green text-charcoal font-semibold text-lg px-10 py-5 rounded-2xl hover:bg-white hover:text-charcoal hover:scale-105 transition-all duration-300 ease-in-out"
                asChild
              >
                <Link href="#consultation">
                  Secure Your AI
                  <Shield className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-charcoal text-lg px-10 py-5 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 ease-in-out"
                asChild
              >
                <Link href="#solutions">View Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Security Solutions */}
      <section id="solutions" className="py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                AI Security Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Comprehensive security measures to protect your AI systems from threats and ensure compliance
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {securitySolutions.map((solution, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${300 + index * 150}ms` }}>
                  <CardHeader>
                    <div className="w-16 h-16 bg-accent-green/10 rounded-2xl flex items-center justify-center mb-4">
                      {solution.icon}
                    </div>
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{solution.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Security & Compliance Features */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                Core Security Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Essential security and compliance capabilities for enterprise AI systems
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {complianceFeatures.map((feature, index) => (
                <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${300 + index * 100}ms` }}>
                  <div className="w-16 h-16 bg-accent-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-charcoal mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-charcoal text-white">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Tailored security and compliance solutions for your industry
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-gray-800 rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: `${300 + index * 150}ms` }}>
                  <div className="flex items-center mb-4">
                    {industry.icon}
                    <h3 className="text-2xl font-bold ml-3">{industry.name}</h3>
                  </div>
                  <p className="text-gray-300">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="consultation" className="py-20 bg-accent-green text-charcoal">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Ready to Secure Your AI?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Protect your AI investments with comprehensive security and compliance solutions from AIdeology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <Button 
                asChild
                size="lg" 
                className="bg-charcoal text-white font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-300 ease-in-out px-8 py-3"
              >
                <Link href="/book-discovery-call?type=consultation">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white hover:scale-105 transition-all duration-300 ease-in-out px-8 py-3"
                asChild
              >
                <Link href="/#solutions">
                  Explore All Solutions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AISecurityCompliancePage
