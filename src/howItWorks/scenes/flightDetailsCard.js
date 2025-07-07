
import FlipButton from "../flipButton";
import { IoClose } from "react-icons/io5";

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
      <div className="absolute inset-0 bg-gray-50 rounded-3xl flex flex-col items-start justify-start pt-32 pl-16 md:pl-32 pr-8 md:pr-12 backface-hidden rotate-x-180 overflow-y-auto">
  <div className="max-w-2xl">
    <h4 className="text-2xl md:text-3xl font-bold text-black leading-tight mb-6">
      {step.backTitle}
    </h4>

    <p className="text-gray-500 text-xl md:text-2xl leading-relaxed font-light">
      {step.backText}
    </p>
    {/* Optional: Show a few sample pills on the back */}
    <div className="flex flex-wrap gap-2 justify-start mt-8">
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
  </div>

  <FlipButton onClick={onFlip} icon={<IoClose />} />

</div>

    </>
  );
}