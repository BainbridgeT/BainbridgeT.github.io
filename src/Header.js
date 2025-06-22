// Header.jsx
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        
        {/* Left: App Name */}
        <div className="text-xl font-bold text-gray-900">LoungeNavigator</div>

        {/* Hamburger Icon - Mobile only */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
               viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d={menuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Center: Pills (desktop only) */}
        <nav className="hidden md:flex gap-4">
          <a href="#features" className="px-4 py-1 rounded-full bg-gray-100 text-sm font-medium text-gray-700 hover:bg-gray-200 transition">Features</a>
          <a href="#how-it-works" className="px-4 py-1 rounded-full bg-gray-100 text-sm font-medium text-gray-700 hover:bg-gray-200 transition">How it Works</a>
          <a href="#about" className="px-4 py-1 rounded-full bg-gray-100 text-sm font-medium text-gray-700 hover:bg-gray-200 transition">About</a>
          <Link to="/contact" className="px-4 py-1 rounded-full bg-gray-100 text-sm font-medium text-gray-700 hover:bg-gray-200 transition">Contact</Link>
        </nav>

        {/* Right: Download Button */}
        <div className="hidden sm:block">
          <a
            href="https://apps.apple.com/app/lounge-navigator"
            className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Download on iOS
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          <a href="#features" className="block text-sm text-gray-700 py-1 hover:underline">Features</a>
          <a href="#how-it-works" className="block text-sm text-gray-700 py-1 hover:underline">How it Works</a>
          <a href="#about" className="block text-sm text-gray-700 py-1 hover:underline">About</a>
          <Link to="/contact" className="block text-sm text-gray-700 py-1 hover:underline">Contact</Link>
          <a
            href="https://apps.apple.com/app/lounge-navigator"
            className="block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-700 transition mt-2"
          >
            Download on iOS
          </a>
        </div>
      )}
    </header>
  );
}
