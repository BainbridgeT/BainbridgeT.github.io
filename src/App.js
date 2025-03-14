import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      {/* Top Row - App Title and Social Links */}
      <div className="top-bar">
        {/* Logo + App Name */}
        <div className="logo-title">
          <img
            src="LN-Primary-Logo.png" // Replace with actual logo URL lounge-navigator-web/src/LN-Primary-Logo.png
            alt="LoungeNavigator Logo"
            className="app-logo"
          />
          {/* <h1 className="app-title">LoungeNavigator</h1> */}
        </div>
        {/* Desktop-only social links */}
        <div className="social-links">
          <a href="https://x.com/LoungeNavigator" target="_blank" rel="noopener noreferrer">
            Follow us @LoungeNavigator
          </a>
          {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a> */}
        </div>
      </div>
      
      {/* Middle Section - Two Columns */}
      <div className="middle-section">
        <div className="main-content">
          {/* Left Column - Text and Button */}
          <div className="text-section fade-in">
            <h2 className="headline">
              Travel Smarter.
              <br />
              <span>Relax Faster.</span>
            </h2>
            <p className="description">
              Discover the best airport lounges and navigate with ease.
            </p>
            <a className="download-button">
              Coming to the app store soon!
            </a>
          </div>
          
          {/* Right Column - iPhone Simulator Image */}
          <div className="image-section fade-in">
            <img
              src="3475.png" // Replace with actual iPhone mockup image
              alt="LoungeNavigator App Preview"
              className="iphone-mockup"
            />
          </div>
        </div>
      </div>
      
      {/* Mobile-only social links that appear at the bottom */}
      <div className="mobile-social-links">
        <h4>Follow us</h4>
        <a href="https://x.com/LoungeNavigator" target="_blank" rel="noopener noreferrer">
          @LoungeNavigator
        </a>
      </div>
    </div>
  );
}

export default App;
