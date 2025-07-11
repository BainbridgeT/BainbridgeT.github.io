import React, {useEffect, useState} from "react";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './contact/Contact';
import Layout from "./Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import BetaSignupForm from "./betaForm/betaSignupForm";

function App() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,  // animation duration
      once: true,     // only animate once when scrolled into view
    });
  }, []);

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
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/beta-sign-up" element={<BetaSignupForm />}/>
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
