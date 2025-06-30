// Home.jsx
import React from "react";
import './index.css';
import Main from "./main";
import HowItWorks from "./howItWorks";
import About from "./About";
import IphoneMockup from "./IphoneMockup";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* Middle Section */}
      <Main/>
      <section id="features" className="w-full bg-white py-16 px-6 space-y-20 scroll-mt-24">
        {/* Section Heading */}
        <div className="max-w-7xl mx-auto text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-brand2 font-semibold">App Features</p>
          <h2 className="mt-2 text-4xl font-extrabold text-gray-900">Crafted for Seamless Travel</h2>
          <p className="mt-4 text-lg text-gray-600">
            Every screen, tap, and feature designed to simplify your journey from check-in to lounge.
          </p>
        </div>

        {/* Feature 1 – Image Left, Text Right */}
        <div data-aos="fade-right" className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 flex justify-center">
          <IphoneMockup screenshotSrc="navigation.png" /> 
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-Time Navigation</h3>
            <p className="text-gray-600">
              Get turn-by-turn directions inside airports to the lounge you want — no more guessing or asking staff.
            </p>
          </div>
        </div>
      
        {/* Feature 2 – Text Left, Image Right */}
        <div data-aos="fade-left" className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <IphoneMockup screenshotSrc="preferences.png" /> 
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Personalized Lounge Access</h3>
            <p className="text-gray-600">
              See which lounges you can enter based on your credit cards, airline status, and terminal.
            </p>
          </div>
        </div>
      
        {/* Feature 3 – Image Left, Text Right */}
        <div data-aos="fade-right" className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <IphoneMockup screenshotSrc="favorites.png" /> 
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Favorites and Recommendations</h3>
            <p className="text-gray-600">
              Save lounges you love and get smart suggestions based on your travel history and preferences.
            </p>
          </div>
        </div>
      </section>

      <HowItWorks/>
      
      <section data-aos="zoom-in" className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* <h2 className="text-3xl font-bold text-gray-900 mb-16">
            Built for Travelers Like You
          </h2> */}
      
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            
            {/* Stat 1 */}
            <div>
              <div className="text-6xl md:text-7xl font-extrabold text-brand1">18</div>
              <div className="mt-2 text-gray-600 text-base uppercase tracking-wide">
                Major US Airports Covered
              </div>
            </div>
      
            {/* Stat 2 */}
            <div>
              <div className="text-6xl md:text-7xl font-extrabold text-brand1">200+</div>
              <div className="mt-2 text-gray-600 text-base uppercase tracking-wide">
                Lounges Listed
              </div>
            </div>
      
            {/* Stat 3 */}
            <div>
              <div className="text-6xl md:text-7xl font-extrabold text-brand1">3x</div>
              <div className="mt-2 text-gray-600 text-base uppercase tracking-wide">
                Faster to Find Lounges
              </div>
            </div>
      
          </div>
        </div>
      </section>
      
      <About/>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
      
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Ready to Travel Smarter?
          </h2>
      
          <p className="text-gray-600 text-lg mb-8">
            Join other travelers using LoungeNavigator to discover and access airport lounges effortlessly.
          </p>
      
          <a
            href="https://apps.apple.com/app/lounge-navigator"
            className="inline-block bg-brand1 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-brand2 transition-all duration-300 hover:scale-105"
          >
            Download on iOS
          </a>
      
        </div>
      </section>
    </div>
  );
}
  