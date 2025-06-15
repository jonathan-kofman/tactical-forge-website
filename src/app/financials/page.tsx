import React from 'react';

export default function FinancialsPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 text-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-blue-300">Financial Projections</h1>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Year 1: $1.2M revenue (SBIR + pilots)</li>
        <li>Year 2: $5.8M revenue (45% gross margin)</li>
        <li>Year 3: $18M revenue (55% gross margin)</li>
        <li>Year 4: $42M revenue (60% gross margin)</li>
        <li>Year 5: $85M revenue (65% gross margin)</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-blue-200">Funding Requirements</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Seed Round: $2.5M (completed)</li>
        <li>Series A: $8M (Month 18)</li>
        <li>Series B: $20M (Month 30)</li>
      </ul>
      {/* Future: Add financial charts, investor info, and downloadable reports here */}
    </div>
  );
} 