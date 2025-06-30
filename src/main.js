// main.js
import IphoneMockup from './IphoneMockup';

export default function Main() {
  return (
    <main data-aos="fade-up" className="w-full bg-gray-50 px-4 py-20 pt-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Centered Text */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
          Find Lounges Fast.
        </h2>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-500 mb-8">
          Real-time navigation in airports.
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <a
            href="#download"
            className="bg-brand1 text-white text-sm font-medium px-6 py-2 rounded-full hover:bg-brand2 transition"
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

        {/* Mockup Section */}
        <div className="relative mt-20 flex items-end justify-center h-[650px] w-full max-w-7xl">
          {/* Left Mockup */}
          <div className="absolute top-0 left-[15%] opacity-0 animate-slide-left hidden md:block translate-y-16 transform rotate-[-8deg] scale-90 hover:scale-95 hover:rotate-[-4deg] transition-all duration-500 ease-out z-[5]">
            <IphoneMockup screenshotSrc="favorites.png" />
          </div>
          
          {/* Center Mockup */}
          <div className="relative z-10 animate-fade-in-center hover:scale-105 transition-transform duration-300 ease-out">
            <IphoneMockup screenshotSrc="explore.png" />
          </div>
          
          {/* Right Mockup */}
          <div className="absolute top-0 right-[15%] opacity-0 animate-slide-right hidden md:block translate-y-16 transform rotate-[8deg] scale-90 hover:scale-95 hover:rotate-[4deg] transition-all duration-500 ease-out z-[5]">
            <IphoneMockup screenshotSrc="passport.png" />
          </div>
        </div>
      </div>
    </main>
  );
}