import React, { useState, useEffect } from 'react';
import IphoneMockup from '../iphoneMockup/IphoneMockup';
export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className="relative bg-white py-32 px-6 overflow-hidden" data-aos="fade-up">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full opacity-40 blur-3xl animate-pulse"
          style={{ animationDuration: '4s' }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full opacity-30 blur-3xl animate-pulse delay-2000"
          style={{ animationDuration: '6s' }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Main Content */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-6 tracking-tight">
              Why{' '}
              <span className="text-4xl md:text-5xl lg:text-6xl text-transparent font-semibold bg-clip-text bg-gradient-to-r from-brand1 to-brand2">
                LoungeNavigator?
              </span>
            </h2>

            <div className="space-y-6 text-xl text-gray-800 leading-relaxed font-light font-sans">
  <p>
    We're redefining the most overlooked part of your travel day — the time between TSA and takeoff.
  </p>

  <p>
    LoungeNavigator helps you discover lounges you can actually access and guides you to them with real-time indoor navigation.
  </p>

  <div className="pt-6">
    <p className="text-lg text-gray-600 font-medium">
      ✈️ The first travel app to guide you{' '}
      <span className="text-black font-semibold">from security to your seat</span>, combining{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E76F51] to-[#FF7E5E] font-semibold">
        lounge discovery
      </span>{' '}
      and real-time{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E76F51] to-[#FF7E5E] font-semibold">
        navigation inside the airport.
      </span>
    </p>
  </div>
</div>

          </div>
          {/* Right: iPhone Mockup */}
          <div className="relative w-full max-w-5xl h-[600px] mx-auto flex items-center justify-center">
            {/* Center phone */}
            <div
              className="absolute"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-easing="ease-out-cubic"
            >
              <IphoneMockup screenshotSrc="splashScreen.png" />
            </div>

            {/* Shared soft shadow */}
            <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black/10 to-transparent rounded-full blur-2xl z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}