import IphoneMockup from "../iphoneMockup/IphoneMockup";
import { useState, useEffect } from "react";

export default function FeatureBlock({ title, description, screenshot, isAlt }) {
    const [aosAnimation, setAosAnimation] = useState("fade-up");

    useEffect(() => {
        const handleResize = () => {
          const isDesktop = window.innerWidth >= 768;
          setAosAnimation(
            isDesktop ? (isAlt ? "fade-right" : "fade-left") : "fade-up"
          );
        };
    
        handleResize(); // initial run
        window.addEventListener("resize", handleResize); // update on resize
        return () => window.removeEventListener("resize", handleResize);
      }, [isAlt]);

    return (
<div className={`w-full py-20 ${isAlt ? "bg-gray-50" : "bg-white"}`}>
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-8 md:gap-16">
    {/* Text side */}
    <div
  className={`flex-1 font-sans ${isAlt ? "md:order-2 md:pl-8" : "md:order-1 md:pr-8"} text-center md:text-left`}
>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-6 tracking-tight">
  {title}
</h2>

<p className="text-lg md:text-xl lg:text-2xl text-gray-700 font-normal leading-relaxed">
  {description}
</p>

</div>


    {/* Mockup side */}
    <div
      data-aos={aosAnimation}
      className={`flex-1 ${isAlt ? "md:order-1" : "md:order-2"} flex justify-center md:justify-end`}
    >
      <IphoneMockup
        screenshotSrc={screenshot}
        className="w-[280px] md:w-[360px] lg:w-[440px]"
      />
    </div>
  </div>
</div>

    );
  }
  
  