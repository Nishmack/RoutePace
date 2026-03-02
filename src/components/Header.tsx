import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Product', path: '/features' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tight">
            <span className="text-red-500">Route</span>
            <span className="text-[#0407ae]">Pace</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#0407ae]",
                location.pathname === item.path ? "text-[#0407ae] font-bold" : "text-slate-600"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden md:block text-sm font-semibold text-slate-700 hover:text-[#0407ae] px-4">
            Login
          </button>
          <button className="bg-[#0407ae] text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-all shadow-lg shadow-[#0407ae]/20">
            Get Started
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "block text-base font-medium transition-colors hover:text-[#0407ae]",
                location.pathname === item.path ? "text-[#0407ae] font-bold" : "text-slate-600"
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <button className="w-full text-left text-base font-medium text-slate-600 py-2">
            Login
          </button>
        </div>
      )}
    </header>
  );
}
