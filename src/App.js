import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      {/* Logo and App Title */}
      <img
        src="https://example.com/compass-logo.png" // Replace with actual logo URL
        alt="LoungeNavigator Logo"
        className="logo"
      />
      <h1 className="title">LoungeNavigator</h1>
      <p className="subtitle">
        Find, explore, and enjoy the best airport lounges near you
      </p>

      {/* Feature Sliders */}
      <div className="slider-container">
        <div className="feature-item">
          <h2 className="feature-title">Lounge Recommendations</h2>
          <p className="feature-description">
            Personalized recommendations based on your travel preferences
          </p>
        </div>
        <div className="feature-item">
          <h2 className="feature-title">Lounge Navigation</h2>
          <p className="feature-description">
            Find your lounge effortlessly with real-time directions
          </p>
        </div>
        <div className="feature-item">
          <h2 className="feature-title">Global Lounge Search</h2>
          <p className="feature-description">
            Discover airport lounges worldwide and check your access eligibility
          </p>
        </div>
      </div>
      {/* Bottom Text */}
      <p className="bottom-text">Travel smarter. Relax faster.</p>
    </div>
  );
}

export default App;
