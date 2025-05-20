import React, {useEffect, useState} from "react";
import "./App.css";

function App() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    let timeoutId = null;
    let intervalId = null;
    
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      
      const hours12 = hours % 12 || 12;
      const formattedTime = `${hours12}:${minutes}`;

      const timeEl = document.getElementById('live-time-overlay');
      if (timeEl) timeEl.textContent = formattedTime;
      
      synchronizeClock();
    };
  
    const synchronizeClock = () => {
      if (intervalId) clearInterval(intervalId);
      if (timeoutId) clearTimeout(timeoutId);
      
      const now = new Date();
      const secondsUntilNextMinute = 60 - now.getSeconds();
      const millisecondsUntilNextMinute = secondsUntilNextMinute * 1000 - now.getMilliseconds();
      
      timeoutId = setTimeout(() => {
        updateTime();
        
        intervalId = setInterval(updateTime, 60000);
      }, millisecondsUntilNextMinute);
    };
    
    updateTime();
    
    return () => {
      if (intervalId) clearInterval(intervalId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);
  
  return (
    <div className="container">
      {/* Top Row - App Title and Social Links */}
      <div className="top-bar">
        {/* Logo + App Name */}
        <div className="logo-title">
          <img
            src="LN-Primary-Logo.png"
            alt="LoungeNavigator Logo"
            className="app-logo"
          />
        </div>
        <div className="social-links-minimal">
          <a href="https://x.com/LoungeNavigator" target="_blank" rel="noopener noreferrer" className="social-link-minimal" aria-label="Twitter/X">
            <svg className="social-icon-minimal" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
          </a>
          <a href="https://instagram.com/LoungeNavigator" target="_blank" rel="noopener noreferrer" className="social-link-minimal" aria-label="Instagram">
            <svg className="social-icon-minimal" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
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
            Effortless access. Seamless navigation. A better airport experience.
            </p>
            <a className="download-button">
              Coming to the app store soon!
            </a>
          </div>
          <div className="image-section fade-in flex justify-center">
  <div className="iphone-container relative">
    <img
      src="Image2.png"
      alt="LoungeNavigator App Preview"
      className="iphone-mockup"
    />
    <div id="live-time-overlay" className="time-overlay"></div>
  </div>
</div>

        </div>
      </div>
      
      {/* Mobile-only social links that appear at the bottom */}
      <div className="mobile-social-links-container">
        <h4 className="mobile-social-heading">Follow us</h4>
        <div className="mobile-social-icons-row">
          <a href="https://x.com/LoungeNavigator" target="_blank" rel="noopener noreferrer" className="mobile-social-icon-link" aria-label="Twitter/X">
            <svg className="mobile-social-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
          </a>
          <a href="https://instagram.com/LoungeNavigator" target="_blank" rel="noopener noreferrer" className="mobile-social-icon-link" aria-label="Instagram">
            <svg className="mobile-social-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
