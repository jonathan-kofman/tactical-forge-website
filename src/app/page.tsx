import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-blue-900 text-white flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 py-16 px-4 text-center relative">
        {/* Optional: Add a subtle background image or SVG accent here */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
          Zephyr Defense
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-8 text-blue-200">
          Revolutionizing Defense Manufacturing with Secure, Distributed Additive Manufacturing
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/about" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow transition">Learn More</Link>
          <Link href="/contact" className="bg-transparent border border-blue-400 hover:bg-blue-800 text-blue-200 font-semibold py-3 px-8 rounded-full transition">Contact Us</Link>
        </div>
      </section>

      {/* About/Opportunity Section */}
      <section className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-300">The Opportunity</h2>
        <p className="text-lg text-gray-200 mb-4">
          The U.S. defense industry faces a $320.86B market opportunity with critical manufacturing vulnerabilities. Zephyr Defense enables rapid, secure, distributed 3D printing of mission-critical components—anywhere, anytime.
        </p>
        <p className="text-md text-blue-200">
          Traditional supply chains are fragile and slow. Our solution empowers defense organizations to respond instantly, securely, and at scale.
        </p>
      </section>

      {/* Solution Highlights Section */}
      <section className="bg-gray-900 py-12 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-400">Secure Cells</h3>
            <p className="text-gray-300">Deployable manufacturing cells for any environment</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-400">Quantum Encryption</h3>
            <p className="text-gray-300">Design distribution with quantum-level security</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-400">AI Optimization</h3>
            <p className="text-gray-300">Production powered by advanced AI algorithms</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-400">Military-Grade Security</h3>
            <p className="text-gray-300">STIG compliance and 99.9% uptime guarantee</p>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="max-w-5xl mx-auto py-12 px-4 grid md:grid-cols-4 gap-8 text-center">
        <div>
          <span className="block text-3xl font-bold text-blue-400 mb-1">$10B+</span>
          <span className="text-gray-300">Addressable Market by 2030</span>
        </div>
        <div>
          <span className="block text-3xl font-bold text-blue-400 mb-1">65%</span>
          <span className="text-gray-300">Gross Margin (Year 5)</span>
        </div>
        <div>
          <span className="block text-3xl font-bold text-blue-400 mb-1">4hr</span>
          <span className="text-gray-300">Deployment Time</span>
        </div>
        <div>
          <span className="block text-3xl font-bold text-blue-400 mb-1">99.9%</span>
          <span className="text-gray-300">Uptime Guarantee</span>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-900 to-gray-900 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-200">Ready to Forge the Future of Defense?</h2>
        <p className="text-lg text-gray-200 mb-6">Partner with Zephyr Defense to secure, accelerate, and transform your defense manufacturing capabilities.</p>
        <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow transition">Get in Touch</Link>
      </section>

      {/* Future extensibility: Add more sections, animations, or interactive features here */}
    </div>
  );
}
