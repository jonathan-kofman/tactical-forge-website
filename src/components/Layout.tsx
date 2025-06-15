import Navbar from './Navbar';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-gray-900 text-white text-center py-4 mt-8">
        &copy; {new Date().getFullYear()} TacticalForge Technologies. All rights reserved.
      </footer>
    </div>
  );
} 