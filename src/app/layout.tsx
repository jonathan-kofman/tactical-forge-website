import './globals.css';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Nexaris Defense',
  description: 'Secure, Distributed Additive Manufacturing for Defense Applications',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
} 