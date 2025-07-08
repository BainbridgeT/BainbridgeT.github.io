import FlipButton from "../flipButton";
import { IoClose } from "react-icons/io5";

export default function ExploreLoungesCard({ step, isFlipped, onFlip }) {
    return (
      <>
  {/* Front */}
{/* Front */}
<div className="absolute inset-0 bg-white rounded-3xl flex flex-col md:flex-row items-center justify-between p-8 md:p-12 backface-hidden overflow-hidden">
  {/* Left: Title only */}
  <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
    <h3 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
      {step.title}
    </h3>
  </div>

  {/* Right: Screenshot */}
  {step.image && (
    <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
      <img
        src={step.image}
        alt=""
        className="w-52 md:w-64 lg:w-72" // ⬅️ Larger sizes
        style={{ background: 'none' }} // ensure no background is added
      />
    </div>
  )}

  <FlipButton onClick={onFlip} />
</div>

  <div className="absolute inset-0 bg-gray-50 rounded-3xl flex flex-col md:flex-row items-start justify-between pt-32 pl-16 md:pl-32 pr-8 md:pr-12 backface-hidden gap-12 rotate-x-180 overflow-y-auto">
  <div className="flex-1 flex flex-col justify-start space-y-6 max-w-2xl">
    <h4 className="text-2xl md:text-3xl font-bold text-black leading-tight">
      {step.backTitle}
    </h4>

    <p className="text-gray-500 text-xl md:text-2xl leading-relaxed font-light">
      {step.backText}
    </p>
  </div>

  {step.image && (
    <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
      <img
        src={step.image}
        alt=""
        className="w-full max-w-xs md:max-w-sm rounded-2xl shadow-lg object-cover"
      />
    </div>
  )}

<FlipButton onClick={onFlip} icon={<IoClose />} />

</div>


</>
    );
  }
  
  