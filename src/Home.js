// Home.jsx
import React from "react";
import './index.css';
import Main from "./introSection/main";
import About from "./about/About";
import IphoneMockup from "./iphoneMockup/IphoneMockup";
import AppFeatures from "./features/AppFeatures";
import HowItWorksSection from "./howItWorks/howItWorks";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* Middle Section */}
      <Main/>
      <AppFeatures/>

      <HowItWorksSection/>
      
      <section data-aos="zoom-in" className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* <h2 className="text-3xl font-bold text-gray-900 mb-16">
            Built for Travelers Like You
          </h2> */}
      
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            
            {/* Stat 1 */}
            <div>
              <div className="text-6xl md:text-7xl font-semibold text-brand1">18</div>
              <div className="mt-2 text-gray-600 text-base uppercase tracking-wide">
                Major US Airports Covered
              </div>
            </div>
      
            {/* Stat 2 */}
            <div>
              <div className="text-6xl md:text-7xl font-semibold text-brand1">200+</div>
              <div className="mt-2 text-gray-600 text-base uppercase tracking-wide">
                Lounges Listed
              </div>
            </div>
      
            {/* Stat 3 */}
            <div>
              <div className="text-6xl md:text-7xl font-semibold text-brand1">3x</div>
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
      
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-6 tracking-tight">
            Ready to Travel Smarter?
          </h2>
      
          <p className="text-gray-600 text-lg mb-8 font-light">
            Join other travelers using LoungeNavigator to discover and access airport lounges effortlessly.
          </p>
      
          <a
            href="/beta-sign-up"
            className="inline-block bg-brand1 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-brand2 transition-all duration-300 hover:scale-105"
          >
            Join our Beta
          </a>
      
        </div>
      </section>
    </div>
  );
}
  