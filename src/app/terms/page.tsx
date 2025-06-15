import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
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
              <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Home</Link>
              <Link href="/#solutions" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Solutions</Link>
              <Link href="/#products" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Products</Link>
              <Link href="/#contact" className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900">Terms & Conditions</h1>
        
        {/* General Terms Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">General Terms</h2>
          <div className="bg-gray-50 p-8 rounded-xl space-y-6">
            <p className="text-gray-600">
              <strong className="text-gray-900">Effective Date:</strong> [Date]
            </p>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                By accessing and using Nexaris Defense&apos;s services, you agree to be bound by these Terms and Conditions.
                If you do not agree to these terms, please do not use our services.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Service Description</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Nexaris Defense provides distributed additive manufacturing services for defense applications.
                Our services are subject to all applicable laws and regulations.
              </p>
            </div>
          </div>
        </section>

        {/* User Obligations Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">User Obligations</h2>
          <div className="bg-gray-50 p-8 rounded-xl space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Security Requirements</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Users must maintain:
              </p>
              <ul className="text-gray-600 space-y-2 pl-6">
                <li>• Valid security clearances</li>
                <li>• ITAR compliance</li>
                <li>• Facility security protocols</li>
                <li>• Data protection measures</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Standards</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                All manufacturing must comply with:
              </p>
              <ul className="text-gray-600 space-y-2 pl-6">
                <li>• Military specifications</li>
                <li>• Quality assurance standards</li>
                <li>• Material certifications</li>
                <li>• Inspection protocols</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Intellectual Property Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Intellectual Property</h2>
          <div className="bg-gray-50 p-8 rounded-xl space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rights and Restrictions</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                All intellectual property rights are protected under:
              </p>
              <ul className="text-gray-600 space-y-2 pl-6">
                <li>• ITAR technical data controls</li>
                <li>• Proprietary manufacturing processes</li>
                <li>• Government-owned technical data</li>
                <li>• Non-disclosure agreements</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Limitation of Liability Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Limitation of Liability</h2>
          <div className="bg-gray-50 p-8 rounded-xl space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Disclaimer</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Nexaris Defense shall not be liable for any indirect, incidental, special, consequential, or punitive damages
                resulting from your use of or inability to use our services.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Contact Information</h2>
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Legal Department</h3>
                <div className="text-gray-600 leading-relaxed">
                  Email: legal@nexarisdefense.com<br/>
                  Phone: 908-798-8082
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Compliance Department</h3>
                <div className="text-gray-600 leading-relaxed">
                  Email: compliance@nexarisdefense.com<br/>
                  Phone: 908-798-8082
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}