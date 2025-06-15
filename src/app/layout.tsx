import './globals.css';
import type { Metadata } from 'next';
import Layout from '../components/Layout';

export const metadata: Metadata = {
  title: 'TacticalForge Technologies',
  description: 'Distributed Additive Manufacturing for Defense Applications',
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