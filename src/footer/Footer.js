// Header.jsx

export default function Footer() {
  return (
<footer className="relative bg-white/50 backdrop-blur-md py-16 px-6">
  <div className="max-w-7xl mx-auto">

{/* Mobile logo: above columns */}
<div className="mb-6 md:hidden">
  <div className="grid grid-cols-3 gap-6 justify-items-start">
    <div className="flex items-start">
      <img
        src="ios-light (2).png"
        alt="LN Logo"
        className="w-12 h-12 rounded-xl object-cover shadow-sm"
      />
    </div>
  </div>
</div>

    {/* Grid: mobile 3 columns in 1 row, desktop 4 columns with logo in grid */}
    <div className="grid grid-cols-3 md:grid-cols-4 gap-6 justify-items-start">
      {/* Logo column (desktop only) */}
      <div className="hidden md:flex items-start">
        <img
          src="ios-light (2).png"
          alt="LN Logo"
          className="w-12 h-12 rounded-xl object-cover shadow-sm"
        />
      </div>

      {/* Product */}
      <div>
        <h3 className="text-lg font-semibold text-black mb-4">Product</h3>
        <div className="space-y-3 text-sm">
          <a href="#features" className="block text-gray-700 hover:text-black transition">Features</a>
          <a href="/beta-sign-up" className="block text-gray-700 hover:text-black transition">Join our Beta</a>
        </div>
      </div>

      {/* Company */}
      <div>
        <h3 className="text-lg font-semibold text-black mb-4">Company</h3>
        <div className="space-y-3 text-sm">
          <a href="#privacy" className="block text-gray-700 hover:text-black transition">Privacy Policy</a>
          <a href="#terms" className="block text-gray-700 hover:text-black transition">Terms of Service</a>
          <a href="#about" className="block text-gray-700 hover:text-black transition">About Us</a>
        </div>
      </div>

      {/* Support with socials */}
      <div>
        <h3 className="text-lg font-semibold text-black mb-4">Support</h3>
        <div className="space-y-3 text-sm">
          <a href="#help" className="block text-gray-700 hover:text-black transition">Help Center</a>
          <a href="#contact" className="block text-gray-700 hover:text-black transition">Contact Us</a>
          <a href="#faq" className="block text-gray-700 hover:text-black transition">FAQ</a>
        </div>

        <div className="flex items-center gap-4 pt-4">
        </div>
      </div>

    </div>

    {/* Bottom section */}
{/* Bottom section */}
<div className="pt-8 border-t border-gray-300/40 mt-12">
  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
    <div className="text-gray-500 text-sm order-2 md:order-1">
      © 2025 LoungeNavigator. All rights reserved.
    </div>
    <div className="flex items-center gap-3 order-1 md:order-2">
      <span className="text-gray-600 text-base font-semibold">Made with love in Atlanta, GA</span>
      <div
        className="relative w-12 h-12 rounded-lg border-2 border-gray-300 shadow-md overflow-hidden transform transition-transform duration-500 hover:rotate-6"
      >
        {/* Animated pulsing orange dot */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-[#E76F51] animate-ping"></span>
          <span className="w-2 h-2 rounded-full bg-[#E76F51] absolute"></span>
        </div>
        <img
          src="IMG_3288.png"
          alt="Map of Atlanta airport area"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  </div>
</div>


  </div>
</footer>


  );
}


