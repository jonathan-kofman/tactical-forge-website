import React from 'react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 text-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-blue-300">About Zephyr Defense</h1>
      <p className="mb-4 text-lg">
        Zephyr Defense is dedicated to revolutionizing defense manufacturing through secure, distributed additive manufacturing. Our mission is to enable rapid, secure production of critical components anywhere, anytime, ensuring national security and supply chain resilience.
      </p>
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-blue-200">Leadership</h2>
      <ul className="space-y-2">
        <li>• Defense industry veterans</li>
        <li>• MIT Engine ecosystem support</li>
        <li>• Strategic partnerships with Tier 1 defense contractors</li>
      </ul>
      {/* Future: Add team bios, photos, and company timeline here */}
    </div>
  );
} 