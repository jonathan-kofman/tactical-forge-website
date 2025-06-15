import React from 'react';

export default function LegalPage() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4 text-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-blue-300">Legal & Compliance</h1>
      
      {/* Regulatory Compliance Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-blue-200">Regulatory Compliance</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-blue-300">ITAR Compliance</h3>
            <p className="text-gray-300 mb-3">
              Zephyr Defense operates under full compliance with International Traffic in Arms Regulations (ITAR) 
              as administered by the U.S. Department of State, Directorate of Defense Trade Controls (DDTC).
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• ITAR Registration: [Registration Number Pending]</li>
              <li>• Export License Requirements: Strictly Enforced</li>
              <li>• Personnel Security Clearances: Required for ITAR Access</li>
              <li>• Facility Security: DSS Approved Secure Areas</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-blue-300">DFARS Compliance</h3>
            <p className="text-gray-300 mb-3">
              Full compliance with Defense Federal Acquisition Regulation Supplement (DFARS) 
              requirements for defense contractors.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• NIST 800-171 Cybersecurity Framework</li>
              <li>• Supply Chain Risk Management (SCRM)</li>
              <li>• Controlled Unclassified Information (CUI) Handling</li>
              <li>• Small Business Set-Aside Compliance</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3 text-blue-300">Additional Certifications</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <strong className="text-blue-200">ISO 9001:2015</strong>
              <p className="text-gray-400">Quality Management Systems</p>
            </div>
            <div>
              <strong className="text-blue-200">AS9100D</strong>
              <p className="text-gray-400">Aerospace Quality Management</p>
            </div>
            <div>
              <strong className="text-blue-200">CMMC Level 3</strong>
              <p className="text-gray-400">Cybersecurity Maturity Model</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-blue-200">Privacy Policy</h2>
        <div className="bg-gray-800 p-6 rounded-lg space-y-4">
          <p className="text-gray-300">
            <strong>Effective Date:</strong> [Date]
          </p>
          
          <h3 className="text-xl font-bold text-blue-300">Information Collection</h3>
          <p className="text-gray-300">
            Zephyr Defense collects information necessary for defense contracting operations, including:
          </p>
          <ul className="text-gray-300 ml-6 space-y-1">
            <li>• Business contact information for authorized personnel</li>
            <li>• Technical specifications for manufacturing requirements</li>
            <li>• Security clearance verification data</li>
            <li>• Manufacturing performance and quality metrics</li>
          </ul>
          
          <h3 className="text-xl font-bold text-blue-300">Data Protection</h3>
          <p className="text-gray-300">
            All data handling complies with federal security requirements including:
          </p>
          <ul className="text-gray-300 ml-6 space-y-1">
            <li>• NIST 800-171 cybersecurity controls</li>
            <li>• Controlled Unclassified Information (CUI) protections</li>
            <li>• ITAR-controlled technical data safeguards</li>
            <li>• End-to-end encryption for all data transmission</li>
          </ul>
          
          <h3 className="text-xl font-bold text-blue-300">Information Sharing</h3>
          <p className="text-gray-300">
            Information is shared only as required for:
          </p>
          <ul className="text-gray-300 ml-6 space-y-1">
            <li>• Fulfillment of defense contracts</li>
            <li>• Regulatory compliance and auditing</li>
            <li>• Security clearance verification processes</li>
            <li>• Authorized government oversight activities</li>
          </ul>
        </div>
      </section>

      {/* Terms of Service Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-blue-200">Terms of Service</h2>
        <div className="bg-gray-800 p-6 rounded-lg space-y-4">
          <h3 className="text-xl font-bold text-blue-300">Service Agreement</h3>
          <p className="text-gray-300">
            These terms govern the provision of distributed additive manufacturing services 
            for defense applications by Zephyr Defense.
          </p>
          
          <h3 className="text-xl font-bold text-blue-300">Security Requirements</h3>
          <p className="text-gray-300">
            All users must comply with:
          </p>
          <ul className="text-gray-300 ml-6 space-y-1">
            <li>• Valid security clearance requirements</li>
            <li>• ITAR access authorization</li>
            <li>• Facility security protocols</li>
            <li>• Need-to-know information restrictions</li>
          </ul>
          
          <h3 className="text-xl font-bold text-blue-300">Manufacturing Standards</h3>
          <p className="text-gray-300">
            All manufactured components must meet:
          </p>
          <ul className="text-gray-300 ml-6 space-y-1">
            <li>• Military specification (MIL-SPEC) requirements</li>
            <li>• Quality assurance standards per AS9100D</li>
            <li>• Material traceability and certification</li>
            <li>• First article inspection protocols</li>
          </ul>
          
          <h3 className="text-xl font-bold text-blue-300">Intellectual Property</h3>
          <p className="text-gray-300">
            Technical data and manufacturing processes are protected under:
          </p>
          <ul className="text-gray-300 ml-6 space-y-1">
            <li>• ITAR technical data controls</li>
            <li>• Proprietary manufacturing processes</li>
            <li>• Government-owned technical data restrictions</li>
            <li>• Non-disclosure agreement requirements</li>
          </ul>
        </div>
      </section>

      {/* Export Control Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-blue-200">Export Control Notice</h2>
        <div className="bg-red-900 border border-red-700 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3 text-red-200">ITAR Controlled Technology</h3>
          <p className="text-red-100 mb-4">
            <strong>WARNING:</strong> The technical data and services offered by Zephyr Defense may be subject 
            to the International Traffic in Arms Regulations (ITAR), 22 CFR Parts 120-130.
          </p>
          <p className="text-red-100 mb-4">
            Export, re-export, transfer, or disclosure of ITAR-controlled technical data to foreign 
            persons, whether in the United States or abroad, without the required export license or 
            other authorization is prohibited and may constitute a violation of U.S. law.
          </p>
          <p className="text-red-100">
            By accessing this system, you acknowledge that you are a U.S. person or authorized 
            foreign person with appropriate export licenses.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-6 text-blue-200">Legal Contact Information</h2>
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-blue-300">Compliance Officer</h3>
              <p className="text-gray-300">
                [Jonathan Kofman], Chief Compliance Officer<br/>
                Email: compliance@nexarisdefense.com<br/>
                Phone: [908-798-8082]<br/>
                Secure Phone: [Secure Line]
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-blue-300">Legal Counsel</h3>
              <p className="text-gray-300">
                [Law Firm Name]<br/>
                Defense and Aerospace Practice<br/>
                Email: legal@nexarisdefense.com<br/>
                Phone: [908-798-8082]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Security */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-6 text-blue-200">Facility Security Officer (FSO)</h2>
        <div className="bg-gray-800 p-6 rounded-lg">
          <p className="text-gray-300 mb-4">
            For all security-related matters, cleared personnel access, and facility security requirements:
          </p>
          <p className="text-gray-300">
            <strong>FSO:</strong> [Jonathan Kofman]<br/>
            <strong>Email:</strong> fso@nexarisdefense.com<br/>
            <strong>Secure Phone:</strong> [Secure Line]<br/>
            <strong>Facility Clearance:</strong> [Level 3] (Application Pending)
          </p>
        </div>
      </section>

      {/* Footer Notice */}
      <div className="text-center text-sm text-gray-400 border-t border-gray-700 pt-6">
        <p>
          This document contains forward-looking statements regarding regulatory compliance. 
          Actual compliance status may vary based on ongoing certification processes.
        </p>
        <p className="mt-2">
          <strong>Last Updated:</strong> [Date] | <strong>Version:</strong> 1.0
        </p>
      </div>
    </div>
  );
}