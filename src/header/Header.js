// Header.jsx
import React, { useState, useEffect } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger the modal state after scrolling 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
<header className="font-sans fixed top-0 z-50 w-full bg-transparent transition-all duration-300 ease-out">
      <div className={`transition-all duration-300 ease-out max-w-5xl mx-auto ${
        isScrolled 
          ? 'mt-4 bg-white/90 backdrop-blur-md shadow-lg rounded-3xl border border-gray-200/50'
          : 'bg-transparent'
      }`}>

        <div className={`flex items-center justify-between px-6 transition-all duration-300 ease-out ${
          isScrolled ? 'py-4' : 'py-6'
        }`}>
          
          {/* Left: App Name */}
          <div className="flex items-center gap-2">
            <img
              src="ios-light (2).png"
              alt="LN Logo"
              className="w-8 h-8 rounded-md object-cover shadow-sm"
            />
            <div className="text-2xl font-normal text-neutral-900 tracking-tight">
              LoungeNavigator
            </div>
          </div>

          {/* Hamburger Icon - Shows on tablet and mobile */}
          <button
  className="relative w-6 h-6 lg:hidden focus:outline-none"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Toggle menu"
>
  <span
    className={`absolute left-0 right-0 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out ${
      menuOpen
        ? 'rotate-45 top-1/2'
        : 'top-[30%]'
    }`}
  />
  <span
    className={`absolute left-0 right-0 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out ${
      menuOpen
        ? '-rotate-45 top-1/2'
        : 'top-[70%]'
    }`}
  />
</button>




          {/* Center: Pills (desktop only) */}
          <nav className={`hidden lg:flex transition-all duration-300 ease-out ${
            isScrolled ? 'gap-2' : 'gap-4'
          }`}>
            <a href="#features" className="px-4 py-2 text-base rounded-full font-medium text-gray-700 hover:bg-gray-100 transition-all duration-200">
              Features
            </a>
            <a href="#how-it-works" className="px-4 py-2 text-base rounded-full font-medium text-gray-700 hover:bg-gray-100 transition-all duration-200">
              How it Works
            </a>
            <a href="#about" className="px-4 py-2 text-base rounded-full font-medium text-gray-700 hover:bg-gray-100 transition-all duration-200">
              About
            </a>
            <a href="/contact" className="px-4 py-2 text-base rounded-full font-medium text-gray-700 hover:bg-gray-100 transition-all duration-200">
              Contact
            </a>
          </nav>

          {/* Right: Download Button - Hidden on very small screens */}
{/* Right: Download Button - Only show on lg and up */}
<div className="hidden lg:block">
  <a
    href="/beta-sign-up"
    className="px-4 py-2 text-base bg-brand1 text-white font-medium rounded-full hover:bg-brand2 transition-all duration-300 hover:scale-105"
  >
    <span className="hidden md:inline">Download on iOS</span>
    <span className="md:hidden">Download</span>
  </a>
</div>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden px-6 pb-4 space-y-2">
            <a href="#features" className="block text-base text-gray-700 py-2 hover:text-brand2 transition-colors">Features</a>
            <a href="#how-it-works" className="block text-base text-gray-700 py-2 hover:text-brand2 transition-colors">How it Works</a>
            <a href="#about" className="block text-base text-gray-700 py-2 hover:text-brand2 transition-colors">About</a>
            <a href="#contact" className="block text-base text-gray-700 py-2 hover:text-brand2 transition-colors">Contact</a>
            <a
              href=""
              className="block bg-brand1 text-white text-base font-medium px-4 py-2 rounded-full hover:bg-brand2 mt-3 transition-all duration-300 hover:scale-105"
            >
              Download on iOS
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
