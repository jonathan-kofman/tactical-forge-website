import React from 'react';

export default function MarketPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 text-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-blue-300">Market Opportunity</h1>
      <p className="mb-4 text-lg">
        The U.S. defense market is valued at $320.86B (2025), growing to $382.56B by 2030. The defense additive manufacturing (AM) market is projected to grow from $4.2B to $10.08B at a 17.8% CAGR.
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Addressable market: $10B+ by 2030</li>
        <li>Target market: $60M revenue by 2030 (5% market share)</li>
        <li>Critical need for secure, distributed manufacturing</li>
      </ul>
      <p className="text-md text-blue-200">Nexaris Defense is positioned to capture a significant share of this rapidly growing market.</p>
      {/* Future: Add market charts, competitor analysis, and industry reports here */}
    </div>
  );
} 