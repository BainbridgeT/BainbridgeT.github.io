import { IoClose } from 'react-icons/io5';
import FlipButton from '../flipButton';
import IphoneMockup from '../../iphoneMockup/IphoneMockup'; 
import { FaPlus } from "react-icons/fa6";

export default function NavigateCard({ step, onFlip }) {
  return (
    <>
      {/* Front */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden flex items-center justify-center backface-hidden">
        {/* Full-bleed background image */}
        <img
          src={step.image}
          alt={step.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Title in black */}
        <h3 className="relative z-10 text-4xl md:text-5xl font-bold text-black text-center px-4">
          {step.title}
        </h3>

        <FlipButton/>
      </div>

      {/* Back */}
      <div className="absolute inset-0 rounded-3xl bg-gray-50 flex flex-col md:flex-row items-start justify-start pt-16 px-8 md:pt-24 md:px-16 gap-8 backface-hidden rotate-x-180 overflow-hidden">
  {/* Left: Text Content */}
  <div className="flex-1 max-w-xl space-y-6">
    <h4 className="text-2xl md:text-3xl font-bold text-black leading-tight">
      {step.backTitle}
    </h4>

    <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-light">
      {step.backText}
    </p>

    <FlipButton
  onClick={onFlip}
  icon={<FaPlus size={28} className="rotate-45 transition-transform" />}
/>

  </div>


{/* Right: Phone mockup, visually raised up into card */}
<div className="flex-1 flex items-center justify-center -mt-16 md:-mt-20 lg:-mt-24 relative z-10">
  <div className="w-48 md:w-60 lg:w-72">
    <IphoneMockup screenshotSrc="navigation.png" />
  </div>
</div>




</div>


    </>
  );
}
  
  