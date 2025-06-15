"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Solution', href: '/solution' },
  { name: 'Market', href: '/market' },
  { name: 'Financials', href: '/financials' },
  { name: 'Partners', href: '/partners' },
  { name: 'Contact', href: '/contact' },
  { name: 'Legal', href: '/legal' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // Listen for scroll to add background/shadow
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/90 shadow-lg backdrop-blur border-b border-blue-900"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-blue-400 hover:text-blue-300 transition drop-shadow"
        >
          Zephyr Defense
        </Link>
        <div className="space-x-2 md:space-x-6 hidden md:block">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-3 py-2 rounded-md font-semibold transition-colors duration-200 text-sm md:text-base
                ${
                  pathname === link.href
                    ? "bg-blue-700 text-white shadow"
                    : "text-blue-200 hover:bg-blue-800 hover:text-white"
                }
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>
        {/* Future: Add mobile menu here */}
      </div>
    </nav>
  );
} 