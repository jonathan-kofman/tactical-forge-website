"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col font-sans w-full">
      {/* Clean, minimal navbar */}
      <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <Image
                src="/images/logo/nexaris defense logo.png"
                alt="Nexaris Defense Logo"
                width={60}
                height={60}
                className="h-15 w-auto"
                priority
              />
              <div className="flex flex-col">
                <span className="text-3xl font-bold tracking-tight text-gray-900">
                  NEXARIS
                </span>
                <span className="text-base font-medium text-gray-600 -mt-1">
                  DEFENSE
                </span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#solutions" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Solutions</a>
              <a href="#products" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Products</a>
              <a href="#why" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Why Nexaris</a>
              <a href="#contact" className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Clean and Bold */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
              Solutions for Today&apos;s<br />
              <span className="text-gray-600">Evolving Threats</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
              With Never-Fail Reliability. 
            </p>
            <p className="text-lg text-gray-500 mb-12 lowercase tracking-wide">
              Designed for speed. Trusted for precision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#products" className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium text-lg">
                Explore Products
              </a>
              <a href="#solutions" className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium text-lg">
                Our Solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Built for What&apos;s Next Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Built for What&apos;s Next
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Built with Tier 1 operational insight and elite product development experience, <strong className="text-gray-900">Nexaris Defense™</strong> delivers cutting-edge solutions for today&apos;s evolving threats — starting with smart, cost-effective payloads that fit seamlessly into what warfighters already carry.
                </p>
                <p>
                  With nearly 200 patents, nearly $1B in revenue, and a proven history of bringing game-changing products to market fast, Nexaris Defense exists to solve the urgent needs of modern defense with never-fail reliability.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden">
                <Image 
                  src="/images/metal_print2.webp" 
                  alt="Nexaris Defense Technology" 
                  width={600} 
                  height={600} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase - TacticalForge */}
      <section id="products" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Precision Manufacturing<br />
                For Evolving Threats
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                  Revolutionary distributed manufacturing network that brings secure, rapid production capabilities directly to the field.
                </p>
                <p>
                  Combining military-grade cybersecurity with AI-powered optimization, TacticalForge delivers mission-critical components when and where they&apos;re needed most.
                </p>
              </div>
              <a href="#contact" className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium inline-block">
                Learn More
              </a>
            </div>
            <div className="lg:order-1">
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden">
                <Image 
                  src="/images/military.webp" 
                  alt="TacticalForge System" 
                  width={800} 
                  height={600} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Nexaris Section */}
      <section id="why" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Why Nexaris?
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                Traditional defense manufacturing faces critical vulnerabilities: fragile supply chains, slow response times, limited forward deployment capabilities, and inadequate cybersecurity. These challenges leave warfighters without the rapid, secure manufacturing support they need in evolving threat environments.                </p>
                <p>
                Nexaris Defense solves these problems with our TacticalForge™ Distributed Manufacturing Network — delivering secure, AI-optimized production cells that can be rapidly deployed anywhere, anytime. Our quantum-encrypted design distribution and military-grade cybersecurity ensure mission-critical components are manufactured with never-fail reliability.
                </p>
                <p className="font-medium text-gray-900">
                We transform manufacturing from a supply chain weakness into a tactical advantage — because when every second counts, warfighters need manufacturing solutions they can trust completely.
                </p>
              </div>
              <a href="#contact" className="text-gray-900 font-medium hover:text-gray-700 transition-colors inline-flex items-center">
                Read More <span className="ml-2">→</span>
              </a>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden">
                  <Image 
                    src="/images/robots.webp" 
                    alt="Robotics and Automation" 
                    width={600} 
                    height={600} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement & Solution */}
      <section id="solutions" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Critical Defense Manufacturing Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern defense faces unprecedented manufacturing and deployment challenges that require innovative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "Supply Chain Fragility",
                desc: "Over-dependence on foreign suppliers makes the defense industry vulnerable to disruptions.",
                impact: "COVID-19 pandemic exposed critical supply chain weaknesses across defense sectors."
              },
              {
                title: "Slow Response Times", 
                desc: "Traditional manufacturing cannot keep pace with rapid deployment needs.",
                impact: "Ukraine conflict demonstrates need for rapid adaptation and component replacement."
              },
              {
                title: "Forward Deployment Limitations",
                desc: "Military units in remote locations lack manufacturing capabilities.",
                impact: "Remote bases and naval vessels cannot repair or replace critical components quickly."
              },
              {
                title: "Security Risks",
                desc: "Current manufacturing processes lack sufficient cybersecurity measures for sensitive defense applications.",
                impact: "30,659 cybersecurity attacks on federal agencies in 2022 alone."
              }
            ].map((challenge, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{challenge.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{challenge.desc}</p>
                <p className="text-sm text-gray-500 italic">{challenge.impact}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 text-white p-8 md:p-12 rounded-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Comprehensive Solution: TacticalForge DMN
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Secure Manufacturing Cells",
                  desc: "Hardened mobile 3D printing units with military-grade cybersecurity, multi-material capability, and real-time quality monitoring.",
                  solves: "Forward deployment limitations and security risks"
                },
                {
                  title: "Quantum-Encrypted Design Distribution",
                  desc: "Blockchain-secured blueprints with zero-trust architecture, automated IP protection, and emergency protocols.",
                  solves: "Security risks and supply chain fragility"
                },
                {
                  title: "AI-Powered Production Optimization",
                  desc: "Predictive maintenance, automated quality control, supply chain optimization, and real-time analytics.",
                  solves: "Slow response times and limited customization"
                },
                {
                  title: "Modular Material Systems",
                  desc: "Standardized cartridges with advanced composites, bio-compatible materials, and rapid switching capabilities.",
                  solves: "Limited customization and supply chain fragility"
                }
              ].map((solution, index) => (
                <div key={index} className="border-l-4 border-white pl-6">
                  <h4 className="text-xl font-bold mb-3">{solution.title}</h4>
                  <p className="text-gray-300 mb-3 leading-relaxed">{solution.desc}</p>
                  <p className="text-sm text-gray-400">
                    <strong>Solves:</strong> {solution.solves}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">4 Hours</div>
              <div className="text-gray-600">vs. 2-6 weeks deployment speed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">STIG-compliance certification</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">30-50%</div>
              <div className="text-gray-600">cost reduction achieved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Core Capabilities
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Never-Fail Reliability",
                desc: "Mission-critical performance, every time."
              },
              {
                title: "Cost-Effective Payloads",
                desc: "Smart, scalable, and affordable solutions."
              },
              {
                title: "Modular & Scalable",
                desc: "Adaptable to any mission or platform."
              },
              {
                title: "Rapidly Deployable",
                desc: "High precision, field-ready systems."
              },
              {
                title: "Lightweight & Mobile",
                desc: "Field adaptable, highly mobile designs."
              },
              {
                title: "Platform Integration",
                desc: "Works with existing launch systems."
              }
            ].map((capability, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{capability.title}</h3>
                <p className="text-gray-600 leading-relaxed">{capability.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Contact Nexaris Defense
          </h2>
          
          <div className="bg-gray-800 p-8 rounded-2xl mb-8">
            <div className="space-y-4 text-lg">
              <div className="font-bold text-xl">Jonathan Kofman</div>
              <div>
                <a href="mailto:jonkofm@hotmail.com" className="hover:text-gray-300 transition-colors">
                  jonkofm@hotmail.com
                </a>
              </div>
              <div>
                <a href="tel:908-798-8082" className="hover:text-gray-300 transition-colors">
                  908-798-8082
                </a>
              </div>
              <div className="text-gray-400">Boston, MA, USA</div>
            </div>
          </div>
          
          <a href="mailto:jonkofm@hotmail.com" className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg inline-block">
            Get In Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-4 mb-6 md:mb-0">
              <Image
                src="/images/logo/nexaris defense logo.png"
                alt="Nexaris Defense Logo"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold">NEXARIS</span>
                <span className="text-base text-gray-400">DEFENSE</span>
              </div>
            </div>
            
            <div className="flex items-center gap-8 text-sm">
              <span className="text-gray-400">&copy; {new Date().getFullYear()} Nexaris Defense</span>
              <a href="/legal" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a>
            </div>

            
          </div>
        </div>
      </footer>
    </div>
  );
}