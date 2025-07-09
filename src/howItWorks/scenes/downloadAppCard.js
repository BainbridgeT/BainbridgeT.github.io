import { FaPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import FlipButton from "../flipButton";

export default function DownloadAppCard({ step, isFlipped, onFlip }) {
    return (
      <>
  {/* Front */}
  <div className="absolute inset-0 rounded-3xl shadow-2xl flex flex-col items-center justify-center p-8 md:p-12 backface-hidden overflow-hidden bg-brand1">
    {/* Title */}
    <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight text-center mb-8">
      {step.title}
    </h3>

    {/* Download button */}
    <button
  className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-white text-black font-semibold text-lg shadow hover:scale-105 active:scale-95 transition-transform duration-200"
  onClick={() => (window.location.href = "/beta-sign-up")}
>
  <span>{step.download}</span>
</button>

    <FlipButton onClick={onFlip} />

  </div>

{/* Back */}
<div className="absolute inset-0 rounded-3xl shadow-2xl flex flex-col items-start justify-start pt-32 pl-16 md:pl-32 pr-8 md:pr-12 backface-hidden bg-white overflow-y-auto rotate-x-180">
  <div className="max-w-2xl">
    <h4 className="text-2xl md:text-3xl font-bold text-black leading-tight mb-4">
      {step.backTitle}
    </h4>

    <p className="text-gray-500 text-xl md:text-2xl leading-relaxed font-light">
      {step.backDescription}
    </p>

    <p className="text-gray-500 text-xl md:text-2xl leading-relaxed font-light mt-6">
      {step.backDescription_2}
    </p>
  </div>

  <FlipButton
  onClick={onFlip}
  icon={<FaPlus size={28} className="rotate-45 transition-transform" />}
/>

</div>





</>
    );
  }
  