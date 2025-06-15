"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col font-sans w-full">
      {/* Sticky Navbar - moved outside hero section */}
      <nav className="sticky top-0 z-50 w-full flex justify-between items-center py-6 px-4 md:px-12 backdrop-blur-sm bg-black/20 transition-all duration-300">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo/nexaris defense logo.png"
            alt="Nexaris Defense Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
            priority
          />
          <span className="text-3xl font-extrabold tracking-widest text-yellow-400 drop-shadow-lg hover:text-yellow-300 transition-colors duration-300">
            NEXARIS
          </span>
          {!scrolled && (
            <span className="text-blue-400 font-bold text-lg tracking-widest hover:text-blue-300 transition-colors duration-300">
              DEFENSE
            </span>
          )}
        </div>
        <div className="hidden md:flex gap-8 text-base font-bold tracking-widest">
          <a href="#vision" className="hover:text-yellow-400 transition-colors duration-300 transform hover:scale-105">OUR VISION</a>
          <a href="#products" className="hover:text-yellow-400 transition-colors duration-300 transform hover:scale-105">PRODUCTS</a>
          <a href="#why" className="hover:text-yellow-400 transition-colors duration-300 transform hover:scale-105">WHY NEXARIS</a>
          <a href="#contact" className="hover:text-yellow-400 transition-colors duration-300 transform hover:scale-105">CONTACT</a>
          <a href="/legal" className="hover:text-yellow-400 transition-colors duration-300 transform hover:scale-105">Privacy Policy</a>
        </div>
        <a href="#contact" className="bg-yellow-400 text-gray-900 font-bold px-5 py-2 rounded shadow-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 hover:shadow-yellow-400/50">CONTACT</a>
      </nav>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] w-full px-0 text-center overflow-hidden bg-gradient-to-b from-gray-950 via-blue-950 to-blue-900">
        {/* Hero background image with dark overlay */}
        <div className="absolute inset-0 -z-10 w-full h-full">
          <Image
            src="/images/metal_print2.webp"
            alt="Defense background"
            fill
            className="object-cover object-center opacity-60 w-full h-full transition-opacity duration-700 hover:opacity-70"
            priority
          />
          {/* Subtle digital grid overlay */}
          <div className="absolute inset-0 w-full h-full bg-[url('/images/grid.svg')] opacity-20 mix-blend-overlay pointer-events-none animate-pulse" />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center mt-12 w-full">
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-widest drop-shadow-xl uppercase w-full px-4 md:px-0 animate-fade-in" style={{letterSpacing: '0.05em'}}>SOLUTIONS FOR TODAY&apos;S EVOLVING THREATS</h1>
          <p className="text-2xl md:text-3xl mb-6 text-yellow-400 font-bold tracking-wider w-full px-4 md:px-0 animate-fade-in-delayed">With Never-Fail Reliability</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full px-4 md:px-0">
            <a href="#products" className="bg-white/10 border border-white/30 text-white font-bold py-3 px-8 rounded shadow-lg hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-yellow-400/50">EXPLORE PRODUCTS</a>
            <a href="#vision" className="bg-transparent border border-white/30 text-white font-bold py-3 px-8 rounded shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-blue-400/50">SEE OUR VISION</a>
          </div>
        </div>
        {/* Angled SVG divider */}
        <svg className="absolute bottom-0 left-0 w-full h-16 md:h-24 transition-transform duration-700 hover:translate-y-1" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0L1440 100H0V0Z" fill="#172554"/></svg>
      </section>

      {/* Feature/Value Proposition Section */}
      <section id="vision" className="relative bg-blue-950 py-16 w-full flex flex-col md:flex-row items-center gap-12 group">
        {/* Angled SVG divider (top) */}
        <svg className="absolute -top-16 left-0 w-full h-16 md:h-24 transition-transform duration-700 group-hover:-translate-y-1" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 100L1440 0V100H0Z" fill="#0f172a"/></svg>
        <div className="flex-1 z-10 px-4 md:px-12 flex flex-col gap-8">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-widest uppercase text-yellow-400 drop-shadow group-hover:text-yellow-300 transition-colors duration-300">Problem Statement & Solution</h2>
          <h3 className="text-2xl font-bold text-yellow-300 mb-2">Critical Defense Manufacturing Challenges</h3>
          <ul className="list-disc pl-6 text-blue-100 text-lg mb-4 space-y-2">
            <li><span className="font-bold text-yellow-200">Supply Chain Fragility:</span> Over-dependence on foreign suppliers makes the defense industry vulnerable to disruptions. <span className="italic">COVID-19 pandemic exposed critical supply chain weaknesses across defense sectors.</span></li>
            <li><span className="font-bold text-yellow-200">Slow Response Times:</span> Traditional manufacturing cannot keep pace with rapid deployment needs. <span className="italic">Ukraine conflict demonstrates need for rapid adaptation and component replacement.</span></li>
            <li><span className="font-bold text-yellow-200">Forward Deployment Limitations:</span> Military units in remote locations lack manufacturing capabilities. <span className="italic">Remote bases and naval vessels cannot repair or replace critical components quickly.</span></li>
            <li><span className="font-bold text-yellow-200">Security Risks:</span> Current manufacturing processes lack sufficient cybersecurity measures for sensitive defense applications. <span className="italic">30,659 cybersecurity attacks on federal agencies in 2022 alone.</span></li>
            <li><span className="font-bold text-yellow-200">Limited Customization:</span> Traditional manufacturing cannot rapidly adapt to unique mission requirements. <span className="italic">Modern warfare requires rapid adaptation to new threats and environments.</span></li>
          </ul>
          <h3 className="text-2xl font-bold text-yellow-300 mb-2">Comprehensive Solution: TacticalForge Distributed Manufacturing Network (DMN)</h3>
          <ul className="list-disc pl-6 text-blue-100 text-lg mb-4 space-y-2">
            <li><span className="font-bold text-yellow-200">Secure Manufacturing Cells:</span> Hardened mobile 3D printing units, military-grade cybersecurity, multi-material capability, real-time quality monitoring. <span className="italic">Solves: Forward deployment limitations and security risks.</span></li>
            <li><span className="font-bold text-yellow-200">Quantum-Encrypted Design Distribution:</span> Blockchain-secured blueprints, zero-trust architecture, automated IP protection, emergency protocols. <span className="italic">Solves: Security risks and supply chain fragility.</span></li>
            <li><span className="font-bold text-yellow-200">AI-Powered Production Optimization:</span> Predictive maintenance, automated quality control, supply chain optimization, real-time analytics. <span className="italic">Solves: Slow response times and limited customization.</span></li>
            <li><span className="font-bold text-yellow-200">Modular Material Systems:</span> Standardized cartridges, advanced composites, bio-compatible materials, rapid switching. <span className="italic">Solves: Limited customization and supply chain fragility.</span></li>
          </ul>
          <div className="text-blue-100 text-md space-y-2">
            <div><span className="font-bold text-yellow-200">Key Differentiators:</span> Security-first design, rapid deployment, complete ecosystem, mission-critical reliability.</div>
            <div><span className="font-bold text-yellow-200">Impact Metrics:</span> Deployment speed (4 hours vs. 2-6 weeks), 100% STIG-compliance, real-time customization, supply chain resilience, 30-50% cost reduction.</div>
            <div><span className="font-bold text-yellow-200">Technology Readiness:</span> Proven hardware, advanced software, certified materials, full integration, comprehensive support.</div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-8 items-center z-10 px-4 md:px-0">
          <img src="/images/metal_print2.webp" alt="Advanced Metal Printing" className="rounded-lg shadow-lg w-full max-w-xs object-cover" />
          <img src="/images/military.webp" alt="Military Application" className="rounded-lg shadow-lg w-full max-w-xs object-cover" />
        </div>
        {/* Angled SVG divider (bottom) */}
        <svg className="absolute bottom-0 left-0 w-full h-16 md:h-24 transition-transform duration-700 group-hover:translate-y-1" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0L1440 100H0V0Z" fill="#0f172a"/></svg>
      </section>

      {/* Product/Capability Highlights - Interactive Grid */}
      <section id="products" className="relative bg-gray-950 py-16 w-full group overflow-x-hidden">
        {/* Angled SVG divider (top) */}
        <svg className="absolute -top-16 left-0 w-full h-16 md:h-24 transition-transform duration-700 group-hover:-translate-y-1" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 100L1440 0V100H0Z" fill="#172554"/></svg>
        <h2 className="text-4xl font-black mb-8 text-center transition-colors duration-300 group-hover:text-yellow-400 cursor-pointer tracking-widest uppercase w-full">Introducing Nexaris Defense</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-4 md:px-0">
          {[
            {
              number: "01",
              title: "NEVER-FAIL RELIABILITY",
              desc: "Mission-critical performance, every time.",
            },
            {
              number: "02",
              title: "COST-EFFECTIVE PAYLOADS",
              desc: "Smart, scalable, and affordable solutions.",
            },
            {
              number: "03",
              title: "MODULAR & SCALABLE",
              desc: "Adaptable to any mission or platform.",
            },
            {
              number: "04",
              title: "RAPIDLY DEPLOYABLE",
              desc: "High precision, field-ready systems.",
            },
            {
              number: "05",
              title: "LIGHTWEIGHT & MOBILE",
              desc: "Field adaptable, highly mobile designs.",
            },
            {
              number: "06",
              title: "INTEGRATES WITH PLATFORMS",
              desc: "Works with existing launch systems.",
            },
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-blue-900/50 p-6 rounded-lg border border-blue-800/50 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/20 group"
            >
              <span className="text-4xl font-black text-yellow-400/50 group-hover:text-yellow-400 transition-colors duration-300">{item.number}</span>
              <h3 className="text-xl font-bold mb-2 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">{item.title}</h3>
              <p className="text-blue-100 group-hover:text-blue-50 transition-colors duration-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About/Why Nexaris Section */}
      <section id="why" className="relative bg-blue-950 py-16 w-full flex flex-col md:flex-row items-center gap-12">
        {/* Angled SVG divider (top) */}
        <svg className="absolute -top-16 left-0 w-full h-16 md:h-24" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 100L1440 0V100H0Z" fill="#1e293b"/></svg>
        <div className="flex-1 flex justify-center mb-8 md:mb-0 z-10 px-4 md:px-0">
          <div className="w-64 h-64 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center border-8 border-blue-900">
            {/* Replace with actual team/product image */}
            <span className="text-3xl text-gray-400">TEAM PHOTO</span>
          </div>
        </div>
        <div className="flex-1 z-10 px-4 md:px-12">
          <h2 className="text-4xl font-black mb-4 text-yellow-400 tracking-widest uppercase">WHY NEXARIS?</h2>
          <p className="mb-4 text-lg">
            Our team is forged from environments where precision and speed are non-negotiable. We channel this expertise into modern defense—engineering intuitive, mission-ready systems that deliver decisive results when they matter most.
          </p>
          <p className="mb-4 text-blue-100">
            By leveraging proven technologies to counter emerging threats, Nexaris delivers exceptional cost-efficiency and rapid deployment. We create the solutions warfighters rely on first—ensuring that when every second counts, they have absolute confidence in their equipment.
          </p>
          <a href="#contact" className="inline-block mt-4 px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded shadow-lg hover:bg-yellow-300 transition">READ MORE</a>
        </div>
        {/* Angled SVG divider (bottom) */}
        <svg className="absolute bottom-0 left-0 w-full h-16 md:h-24" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0L1440 100H0V0Z" fill="#0f172a"/></svg>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="relative bg-gray-950 py-16 w-full text-center">
        {/* Angled SVG divider (top) */}
        <svg className="absolute -top-16 left-0 w-full h-16 md:h-24" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 100L1440 0V100H0Z" fill="#0f172a"/></svg>
        <h2 className="text-4xl font-black mb-4 tracking-widest uppercase">Contact Nexaris Defense</h2>
        <p className="mb-6 text-lg text-blue-100">Jonathan Kofman<br />jonkofm@hotmail.com<br />908-798-8082<br />Boston, MA, USA</p>
        <a href="mailto:jonkofm@hotmail.com" className="inline-block bg-yellow-400 text-gray-900 font-bold px-8 py-3 rounded shadow-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 hover:shadow-yellow-400/50">Email Us</a>
      </section>

      {/* Footer */}
      <footer className="relative bg-blue-950 text-white w-full pt-16 pb-8 px-4 md:px-16 overflow-hidden">
        {/* Large low-opacity wordmark/logo as background watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[12vw] md:text-[8vw] font-black uppercase tracking-widest text-blue-900/60 whitespace-nowrap">NEXARIS</span>
        </div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between w-full max-w-[1600px] mx-auto">
          {/* Left: Tagline and copyright */}
          <div className="flex flex-col gap-6 md:gap-10 md:justify-between md:h-40">
            <div className="mb-2">
              <span className="block text-yellow-400 font-black text-2xl md:text-3xl tracking-widest leading-tight">TRUSTED NOW.<br />TRANSFORMATIVE NEXT.</span>
            </div>
            <div className="text-xs text-blue-200 flex gap-4 items-center">
              <span>&copy; {new Date().getFullYear()} Nexaris Defense</span>
              <span>|</span>
              <a href="/legal" className="hover:text-yellow-400 transition-colors duration-300">Privacy Policy</a>
            </div>
          </div>
          {/* Center: Navigation links */}
          <div className="hidden md:flex flex-1 justify-center items-end gap-10 text-base font-bold tracking-widest uppercase">
            <a href="#vision" className="hover:text-yellow-400 transition-colors duration-300 transform hover:scale-105">Our Vision</a>
            <a href="#products" className="hover:text-yellow-400 transition-colors duration-300 transform hover:scale-105">Products</a>
            <a href="#why" className="hover:text-yellow-400 transition-colors duration-300 transform hover:scale-105">Why Nexaris</a>
            <a href="#contact" className="hover:text-yellow-400 transition-colors duration-300 transform hover:scale-105">Contact</a>
          </div>
          {/* Right: Social links */}
          <div className="flex flex-col items-end gap-4 md:gap-10 md:justify-between md:h-40">
            <div className="flex gap-6 text-base font-bold tracking-widest uppercase mt-8 md:mt-0">
              <a 
                href="https://www.facebook.com/nexarisdefense" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110 flex items-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
                <span className="hidden md:inline">Facebook</span>
              </a>
              <a 
                href="https://www.linkedin.com/company/nexaris-defense" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110 flex items-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="hidden md:inline">LinkedIn</span>
              </a>
              <a 
                href="https://twitter.com/nexarisdefense" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110 flex items-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                <span className="hidden md:inline">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
