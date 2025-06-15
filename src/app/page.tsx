import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col font-sans w-full">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] w-full px-0 text-center overflow-hidden bg-gradient-to-b from-gray-950 via-blue-950 to-blue-900">
        {/* Hero background image with dark overlay */}
        <div className="absolute inset-0 -z-10 w-full h-full">
          <Image
            src="/images/hero-bg.jpg"
            alt="Defense background"
            fill
            className="object-cover object-center opacity-60 w-full h-full transition-opacity duration-700 hover:opacity-70"
            priority
          />
          {/* Subtle digital grid overlay */}
          <div className="absolute inset-0 w-full h-full bg-[url('/images/grid.svg')] opacity-20 mix-blend-overlay pointer-events-none animate-pulse" />
        </div>
        <nav className="w-full flex justify-between items-center py-6 px-4 md:px-12 backdrop-blur-sm bg-black/20">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-extrabold tracking-widest text-yellow-400 drop-shadow-lg hover:text-yellow-300 transition-colors duration-300">NEXARIS</span>
            <span className="text-blue-400 font-bold text-lg tracking-widest hover:text-blue-300 transition-colors duration-300">DEFENSE</span>
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
      <section id="vision" className="relative bg-blue-950 py-16 w-full text-left flex flex-col md:flex-row items-center gap-12 group">
        {/* Angled SVG divider (top) */}
        <svg className="absolute -top-16 left-0 w-full h-16 md:h-24 transition-transform duration-700 group-hover:-translate-y-1" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 100L1440 0V100H0Z" fill="#0f172a"/></svg>
        <div className="flex-1 z-10 px-4 md:px-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-widest uppercase text-yellow-400 drop-shadow group-hover:text-yellow-300 transition-colors duration-300">DESIGNED FOR SPEED. TRUSTED FOR PRECISION.</h2>
          <p className="text-yellow-300 text-xl font-bold mb-2 tracking-wide group-hover:text-yellow-200 transition-colors duration-300">Built for What&apos;s Next</p>
          <p className="mb-4 text-lg group-hover:text-blue-100 transition-colors duration-300">
            Nexaris Defense delivers cutting-edge solutions for today&apos;s evolving threats—starting with smart, cost-effective payloads that fit seamlessly into what warfighters already carry.
          </p>
          <p className="text-md text-blue-100 group-hover:text-blue-50 transition-colors duration-300">
            With deep operational insight and a proven history of rapid product development, Nexaris Defense exists to solve the urgent needs of modern defense with never-fail reliability.
          </p>
        </div>
        <div className="flex-1 flex justify-center z-10 px-4 md:px-0">
          <div className="w-64 h-64 bg-yellow-400 rounded-full shadow-2xl flex items-center justify-center border-8 border-blue-900 group-hover:border-blue-800 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-yellow-400/50">
            <span className="text-5xl font-black text-gray-900 tracking-widest group-hover:text-gray-800 transition-colors duration-300">NDN</span>
          </div>
        </div>
        {/* Angled SVG divider (bottom) */}
        <svg className="absolute bottom-0 left-0 w-full h-16 md:h-24 transition-transform duration-700 group-hover:translate-y-1" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0L1440 100H0V0Z" fill="#0f172a"/></svg>
      </section>

      {/* Product/Capability Highlights - Interactive Grid */}
      <section id="products" className="relative bg-gray-950 py-16 w-full group overflow-x-hidden">
        {/* Angled SVG divider (top) */}
        <svg className="absolute -top-16 left-0 w-full h-16 md:h-24 transition-transform duration-700 group-hover:-translate-y-1" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 100L1440 0V100H0Z" fill="#172554"/></svg>
        <h2 className="text-4xl font-black mb-8 text-center transition-colors duration-300 group-hover:text-yellow-400 cursor-pointer tracking-widest uppercase w-full">Introducing Nexaris Defense Network (NDN)</h2>
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
            Our team comes from domains where failure isn&apos;t an option and speed saves lives. We bring that mindset to modern defense—designing intuitive, field-ready systems that deliver decisive effects without delay.
          </p>
          <p className="mb-4 text-blue-100">
            By repurposing trusted systems to meet new threats, Nexaris delivers unmatched cost-efficiency and speed-to-field. We build what warfighters reach for first—because when it matters most, they shouldn&apos;t have to think twice.
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
              <a href="#" className="hover:text-yellow-400 transition-colors duration-300">Careers</a>
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
