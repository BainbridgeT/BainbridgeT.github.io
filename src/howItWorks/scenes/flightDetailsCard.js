
import FlipButton from "../flipButton";
import { IoClose } from "react-icons/io5";
import IphoneMockup from "../../iphoneMockup/IphoneMockup";
import { FaPlus } from "react-icons/fa6";

export default function FlightDetailsCard({ step, isFlipped, onFlip }) {
  const pillRows = [
    ["ATL", "JFK", "SFO"],  
    ["Gate D7", "Gate E15", "Gate F20"], 
    ["Terminal 1", "Terminal A"],       
    ["LAX", "ORD", "DEN", "DFW"],    
    ["Chicago", "Miami", "Austin"],
    ["Gate A12", "Gate B5", "Gate C3"],
    ["Seattle", "Boston", "Las Vegas"],
  ];
  
  return (
    <>
      {/* Front */}
      <div className="absolute inset-0 bg-white rounded-3xl flex flex-col md:flex-row backface-hidden overflow-hidden">
        {/* Left: Prominent Staggered Pills */}
        <div className="flex-1 flex flex-col justify-center space-y-4 -ml-8">
          {pillRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex gap-3"
            >
              {row.map((pill, idx) => (
                <span
                  key={idx}
                  className="rounded-full px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-[#E76F51] to-[#FF7E5E] shadow-[0_2px_10px_rgba(0,0,0,0.1)] transition-transform duration-200 hover:scale-105 hover:opacity-90"
                >
                  {pill}
                </span>
              ))}
            </div>
          ))}
        </div>
        
        {/* Right: Title */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left p-8">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            {step.title}
          </h3>
        </div>
        
        <FlipButton onClick={onFlip} />
      </div>

      {/* Back */}
      <div className="absolute inset-0 bg-gray-50 rounded-3xl flex flex-col md:flex-row items-start justify-start pt-24 px-8 md:pt-32 md:px-16 gap-8 backface-hidden rotate-x-180 overflow-hidden">
  {/* Left: Text Content */}
  <div className="flex-1 max-w-2xl space-y-6">
    <h4 className="text-2xl md:text-3xl font-bold text-black leading-tight">
      {step.backTitle}
    </h4>

    <p className="text-gray-500 text-xl md:text-2xl leading-relaxed font-light">
      {step.backText}
    </p>

    {/* Pills */}
    <div className="flex flex-wrap gap-2 justify-start mt-4">
      <span className="rounded-full px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200">
        Your Gate
      </span>
      <span className="rounded-full px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200">
        Terminal
      </span>
      <span className="rounded-full px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200">
        Destination
      </span>
    </div>

    <FlipButton
  onClick={onFlip}
  icon={<FaPlus size={28} className="rotate-45 transition-transform" />}
/>
  </div>

  {/* Right: Mockup */}
  <div className="flex-1 flex items-center justify-center -mt-4 md:-mt-6">
    <div className="w-60 md:w-72 lg:w-80">
      <IphoneMockup screenshotSrc="explore2.png" />
    </div>
  </div>
</div>


    </>
  );
}