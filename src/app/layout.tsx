import './globals.css';
import type { Metadata } from 'next';
import Layout from '../components/Layout';
// import Navbar from './Navbar'; // Removed, not needed
// import React from 'react'; // Removed, not needed

export const metadata: Metadata = {
  title: 'Zephyr Defense',
  description: 'Secure, Distributed Additive Manufacturing for Defense Applications',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
} 