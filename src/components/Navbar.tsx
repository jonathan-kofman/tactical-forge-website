import Link from 'next/link';

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
  return (
    <nav className="bg-gray-900 text-white px-4 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          TacticalForge
        </Link>
        <div className="space-x-4 hidden md:block">
          {navLinks.map(link => (
            <Link key={link.name} href={link.href} className="hover:text-blue-400 transition-colors">
              {link.name}
            </Link>
          ))}
        </div>
        {/* Mobile menu placeholder for future expansion */}
      </div>
    </nav>
  );
} 