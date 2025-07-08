import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import FlightDetailsCard from "./scenes/flightDetailsCard";
import BasicCard from "./scenes/basicCard";
import { steps } from "./stepsData";
import ExploreLoungesCard from "./scenes/exploreLoungeCard";
import AddCardsCard from "./scenes/addCardsCard";
import NavigateCard from "./scenes/NavigateCard";
import DownloadAppCard from "./scenes/downloadAppCard";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  return isMobile;
}

export default function HowItWorksSection() {
  const [flippedCards, setFlippedCards] = useState([]);
  const [modalCardIndex, setModalCardIndex] = useState(null);

  const handleCardClick = (index) => {
    if (isMobile) {
      setModalCardIndex(index); // show modal without flipping
    } else {
      setFlippedCards((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    }
  };
  
  

  const isMobile = useIsMobile();

  
  return (
    <section
  id="how-it-works"
  className="w-full bg-gray-50 py-20 px-6 relative overflow-hidden scroll-mt-40"
>
  <div className="h-24 -mt-24"></div>

  {/* Background overlay when card is open */}
  {flippedCards.length > 0 && (
    <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-500 z-10"></div>
  )}

  {/* Section Header */}
  <div className="max-w-4xl mx-auto text-center mb-16 relative z-20">
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-6 tracking-tight">
      A Smarter Way to Lounge
    </h2>
    <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light">
      LoungeNavigator gets you from security to serenity in 5 easy steps.
    </p>
  </div>

  <div className="flex flex-col gap-y-16 relative z-20">
  {steps.map((step, i) => {
const isFlipped = !isMobile && flippedCards.includes(i);
const shouldDim = flippedCards.length > 0 && !isFlipped;

    return (
      <div
        key={i}
        className={`w-full max-w-5xl mx-auto [perspective:1500px] relative cursor-pointer group transition-opacity duration-500 ${
          shouldDim ? "opacity-30 pointer-events-none" : "opacity-100"
        }`}
        onClick={() => handleCardClick(i)}
      >
        <div
className={`relative w-full rounded-3xl shadow-2xl transition-transform duration-1000 transform-style-preserve-3d ${
  isFlipped ? "rotate-x-180" : ""
} ${isMobile ? "aspect-[3/4]" : "aspect-[16/9]"}`}

>
          <StepCard
            step={step}
            isFlipped={isFlipped}
            onFlip={(e) => {
              e.stopPropagation();
              handleCardClick(i);
            }}
          />
        </div>
      </div>
    );
  })}
</div>
{isMobile && modalCardIndex !== null && (
  <CardModal
    step={steps[modalCardIndex]}
    onClose={() => setModalCardIndex(null)}
  />
)}


</section>

  );
}

const StepCard = ({ step, isFlipped, onFlip }) => {
    switch (step.type) {
      case "flightDetails":
        return <FlightDetailsCard step={step} isFlipped={isFlipped} onFlip={onFlip} />;
      case "exploreLounges":
        return <ExploreLoungesCard step={step} isFlipped={isFlipped} onFlip={onFlip} />;
      case "addCards":
        return <AddCardsCard step={step} isFlipped={isFlipped} onFlip={onFlip} />;
      case "navigate":
        return <NavigateCard step={step} isFlipped={isFlipped} onFlip={onFlip} />;
      case "downloadApp":
        return <DownloadAppCard step={step} isFlipped={isFlipped} onFlip={onFlip} />;
      case "basic":
      default:
        return <BasicCard step={step} isFlipped={isFlipped} onFlip={onFlip} />;
    }
  };

  const CardModal = ({ step, onClose }) => (
    <div className="fixed inset-0 z-50 bg-white overflow-auto flex flex-col items-center justify-center p-6">
      <button
        className="absolute top-6 right-6 text-black text-3xl font-bold"
        onClick={onClose}
        aria-label="Close"
      >
        &times;
      </button>
      <div className="max-w-2xl w-full space-y-4">
        <h2 className="text-3xl font-bold text-black">{step.backTitle}</h2>
        <p className="text-lg text-gray-700 whitespace-pre-line">
          {step.backDescription || step.backText}
        </p>
        {step.image && (
          <img
            src={step.image}
            alt={step.title}
            className="rounded-xl w-full object-contain mt-4"
          />
        )}
      </div>
    </div>
  );
  
  