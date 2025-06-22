// main.js
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <main data-aos="fade-up" className="w-full bg-gray-50 px-4 py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
    {/* Left Content */}
    <div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
        Find Lounges Fast.
      </h2>
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-500 mb-8">
        Real-time navigation at airports.
      </h2>
    
      <div className="flex flex-wrap gap-4 mt-4">
        <a
          href="#download"
          className="bg-blue-600 text-white text-sm font-medium px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Try LoungeNavigator
        </a>
        <a
          href="#how-it-works"
          className="bg-gray-200 text-gray-800 text-sm font-medium px-6 py-2 rounded-full hover:bg-gray-300 transition"
        >
          See How It Works
        </a>
      </div>
    </div>
    
    {/* Right iOS Mockup */}
    <div className="relative flex justify-center lg:justify-end">
      <div className="relative">
        {/* iPhone Frame */}
        <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl">
          <div className="bg-white rounded-[2.5rem] overflow-hidden w-72 h-[600px] relative">
            {/* Status Bar */}
            <div className="flex justify-between items-center px-6 py-3 bg-gray-50">
              <span className="text-xs font-semibold">9:41</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                <div className="w-6 h-3 border border-gray-400 rounded-sm relative">
                  <div className="w-4 h-1.5 bg-green-500 rounded-sm absolute top-0.5 left-0.5"></div>
                </div>
              </div>
            </div>
            
            {/* App Content */}
            <div className="p-4 space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">Nearby Lounges</h3>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">📍</span>
                </div>
              </div>
              
              {/* Search Bar */}
              <div className="bg-gray-100 rounded-full px-4 py-3 flex items-center gap-3">
                <span className="text-gray-400">🔍</span>
                <span className="text-gray-500 text-sm">Terminal A, Gate 12</span>
              </div>
              
              {/* Lounge Cards */}
              <div className="space-y-3">
                <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900 text-sm">Delta Sky Club</h4>
                    <span className="text-green-600 text-xs font-medium bg-green-100 px-2 py-1 rounded-full">Open</span>
                  </div>
                  <p className="text-gray-600 text-xs mb-2">Terminal A • 3 min walk</p>
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400 text-xs">⭐⭐⭐⭐⭐</div>
                    <span className="text-xs text-gray-500">4.8</span>
                  </div>
                  <button className="w-full bg-blue-600 text-white text-xs font-medium py-2 rounded-full mt-3">
                    Navigate
                  </button>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900 text-sm">United Club</h4>
                    <span className="text-orange-600 text-xs font-medium bg-orange-100 px-2 py-1 rounded-full">Busy</span>
                  </div>
                  <p className="text-gray-600 text-xs mb-2">Terminal B • 7 min walk</p>
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400 text-xs">⭐⭐⭐⭐⭐</div>
                    <span className="text-xs text-gray-500">4.6</span>
                  </div>
                  <button className="w-full bg-gray-200 text-gray-700 text-xs font-medium py-2 rounded-full mt-3">
                    Navigate
                  </button>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900 text-sm">Priority Pass Lounge</h4>
                    <span className="text-green-600 text-xs font-medium bg-green-100 px-2 py-1 rounded-full">Open</span>
                  </div>
                  <p className="text-gray-600 text-xs mb-2">Terminal C • 12 min walk</p>
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400 text-xs">⭐⭐⭐⭐</div>
                    <span className="text-xs text-gray-500">4.3</span>
                  </div>
                  <button className="w-full bg-blue-600 text-white text-xs font-medium py-2 rounded-full mt-3">
                    Navigate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg animate-bounce">
          <span className="text-sm">🎯</span>
        </div>
        <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-full shadow-lg animate-pulse">
          <span className="text-sm">⚡</span>
        </div>
      </div>
    </div>
  </div>
  {/* Scroll Indicator */}
{/* Scroll Indicator */}
<div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
<span className="text-sm text-gray-500 mt-1">Scroll to Explore</span>
  <svg
    className="w-6 h-6 text-gray-400 animate-bounce"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</div>


</main>
  );
}