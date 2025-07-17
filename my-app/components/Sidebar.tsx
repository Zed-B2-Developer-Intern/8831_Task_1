'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users, Package } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Dashboard', icon: <Home size={18} /> },
    { href: '/users', label: 'Users', icon: <Users size={18} /> },
    { href: '/products', label: 'Products', icon: <Package size={18} /> },
  ];

  return (
    <aside className="w-60 bg-gray-100 p-4 border-r border-gray-300 min-h-screen">
      <div className="flex items-center gap-2 mb-6">
      </div>

      <nav className="flex flex-col space-y-2">
        {links.map(({ href, label, icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-3 px-4 py-2 rounded-md font-medium ${
              pathname === href
                ? 'bg-purple-600 text-white'
                : 'text-purple-700 hover:bg-purple-100'
            }`}
          >
            <span>{icon}</span>
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
