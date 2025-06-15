import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function LegalPage() {
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
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900">Legal & Compliance</h1>
        
        {/* Regulatory Compliance Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Regulatory Compliance</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-gray-900">ITAR Compliance</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Nexaris Defense operates under full compliance with International Traffic in Arms Regulations (ITAR) 
                as administered by the U.S. Department of State, Directorate of Defense Trade Controls (DDTC).
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• ITAR Registration: [Registration Number Pending]</li>
                <li>• Export License Requirements: Strictly Enforced</li>
                <li>• Personnel Security Clearances: Required for ITAR Access</li>
                <li>• Facility Security: DSS Approved Secure Areas</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-gray-900">DFARS Compliance</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Full compliance with Defense Federal Acquisition Regulation Supplement (DFARS) 
                requirements for defense contractors.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• NIST 800-171 Cybersecurity Framework</li>
                <li>• Supply Chain Risk Management (SCRM)</li>
                <li>• Controlled Unclassified Information (CUI) Handling</li>
                <li>• Small Business Set-Aside Compliance</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-6 text-gray-900">Additional Certifications</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="font-bold text-gray-900 mb-2">ISO 9001:2015</div>
                <p className="text-gray-600">Quality Management Systems</p>
              </div>
              <div>
                <div className="font-bold text-gray-900 mb-2">AS9100D</div>
                <p className="text-gray-600">Aerospace Quality Management</p>
              </div>
              <div>
                <div className="font-bold text-gray-900 mb-2">CMMC Level 3</div>
                <p className="text-gray-600">Cybersecurity Maturity Model</p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Policy Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Privacy Policy</h2>
          <div className="bg-gray-50 p-8 rounded-xl space-y-6">
            <p className="text-gray-600">
              <strong className="text-gray-900">Effective Date:</strong> [Date]
            </p>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Information Collection</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Nexaris Defense collects information necessary for defense contracting operations, including:
              </p>
              <ul className="text-gray-600 space-y-2 pl-6">
                <li>• Business contact information for authorized personnel</li>
                <li>• Technical specifications for manufacturing requirements</li>
                <li>• Security clearance verification data</li>
                <li>• Manufacturing performance and quality metrics</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Protection</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                All data handling complies with federal security requirements including:
              </p>
              <ul className="text-gray-600 space-y-2 pl-6">
                <li>• NIST 800-171 cybersecurity controls</li>
                <li>• Controlled Unclassified Information (CUI) protections</li>
                <li>• ITAR-controlled technical data safeguards</li>
                <li>• End-to-end encryption for all data transmission</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Information Sharing</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Information is shared only as required for:
              </p>
              <ul className="text-gray-600 space-y-2 pl-6">
                <li>• Fulfillment of defense contracts</li>
                <li>• Regulatory compliance and auditing</li>
                <li>• Security clearance verification processes</li>
                <li>• Authorized government oversight activities</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Terms of Service Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Terms of Service</h2>
          <div className="bg-gray-50 p-8 rounded-xl space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Service Agreement</h3>
              <p className="text-gray-600 leading-relaxed">
                These terms govern the provision of distributed additive manufacturing services 
                for defense applications by Nexaris Defense.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Security Requirements</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                All users must comply with:
              </p>
              <ul className="text-gray-600 space-y-2 pl-6">
                <li>• Valid security clearance requirements</li>
                <li>• ITAR access authorization</li>
                <li>• Facility security protocols</li>
                <li>• Need-to-know information restrictions</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Manufacturing Standards</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                All manufactured components must meet:
              </p>
              <ul className="text-gray-600 space-y-2 pl-6">
                <li>• Military specification (MIL-SPEC) requirements</li>
                <li>• Quality assurance standards per AS9100D</li>
                <li>• Material traceability and certification</li>
                <li>• First article inspection protocols</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Intellectual Property</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Technical data and manufacturing processes are protected under:
              </p>
              <ul className="text-gray-600 space-y-2 pl-6">
                <li>• ITAR technical data controls</li>
                <li>• Proprietary manufacturing processes</li>
                <li>• Government-owned technical data restrictions</li>
                <li>• Non-disclosure agreement requirements</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Export Control Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Export Control Notice</h2>
          <div className="bg-red-50 border border-red-200 p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-red-800">ITAR Controlled Technology</h3>
            <p className="text-red-700 mb-4 leading-relaxed">
              <strong>WARNING:</strong> The technical data and services offered by Nexaris Defense may be subject 
              to the International Traffic in Arms Regulations (ITAR), 22 CFR Parts 120-130.
            </p>
            <p className="text-red-700 mb-4 leading-relaxed">
              Export, re-export, transfer, or disclosure of ITAR-controlled technical data to foreign 
              persons, whether in the United States or abroad, without the required export license or 
              other authorization is prohibited and may constitute a violation of U.S. law.
            </p>
            <p className="text-red-700 leading-relaxed">
              By accessing this system, you acknowledge that you are a U.S. person or authorized 
              foreign person with appropriate export licenses.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Legal Contact Information</h2>
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Compliance Officer</h3>
                <div className="text-gray-600 leading-relaxed">
                  Jonathan Kofman, Chief Compliance Officer<br/>
                  Email: compliance@nexarisdefense.com<br/>
                  Phone: 908-798-8082<br/>
                  Secure Phone: [Secure Line]
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Legal Counsel</h3>
                <div className="text-gray-600 leading-relaxed">
                  [Law Firm Name]<br/>
                  Defense and Aerospace Practice<br/>
                  Email: legal@nexarisdefense.com<br/>
                  Phone: 908-798-8082
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facility Security */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Facility Security Officer (FSO)</h2>
          <div className="bg-gray-50 p-8 rounded-xl">
            <p className="text-gray-600 mb-6 leading-relaxed">
              For all security-related matters, cleared personnel access, and facility security requirements:
            </p>
            <div className="text-gray-600 leading-relaxed">
              <strong className="text-gray-900">FSO:</strong> Jonathan Kofman<br/>
              <strong className="text-gray-900">Email:</strong> fso@nexarisdefense.com<br/>
              <strong className="text-gray-900">Secure Phone:</strong> [Secure Line]<br/>
              <strong className="text-gray-900">Facility Clearance:</strong> Level 3 (Application Pending)
            </div>
          </div>
        </section>

        {/* Footer Notice */}
        <div className="text-center text-gray-500 border-t border-gray-200 pt-8">
          <p className="mb-2 leading-relaxed">
            This document contains forward-looking statements regarding regulatory compliance. 
            Actual compliance status may vary based on ongoing certification processes.
          </p>
          <p>
            <strong>Last Updated:</strong> [Date] | <strong>Version:</strong> 1.0
          </p>
        </div>
      </div>

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
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">Back to Home</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}