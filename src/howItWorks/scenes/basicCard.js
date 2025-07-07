import { FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function BasicCard({ step, isFlipped, onFlip }) {
  return (
    <>
      {/* Front */}
      <div className="absolute inset-0 bg-white rounded-3xl flex items-center justify-center text-center p-12 backface-hidden">
        <h3 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight">
          {step.title}
        </h3>
        <button
          type="button"
          className="absolute bottom-4 right-4 z-30 w-10 h-10 rounded-full bg-black text-white text-xl flex items-center justify-center shadow group-hover:opacity-70 hover:scale-110"
          onClick={onFlip}
          aria-label="Flip card"
        >
          <FaPlus />
        </button>
      </div>

      {/* Back */}
      <div className="absolute inset-0 bg-gray-50 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-center text-center transform rotate-x-180 backface-hidden gap-6">
        <div className="flex-1 flex flex-col justify-center">
          <p className="text-gray-700 text-lg md:text-2xl leading-relaxed font-light mb-4 md:mb-0">
            {step.text}
          </p>
        </div>
        {step.image && (
          <div className="flex-1 flex justify-center">
            <img
              src={step.image}
              alt=""
              className="w-full max-w-xs md:max-w-sm rounded-2xl shadow-lg object-cover"
            />
          </div>
        )}
        <button
          type="button"
          className="absolute bottom-4 right-4 z-30 w-10 h-10 rounded-full bg-black text-white text-2xl flex items-center justify-center shadow group-hover:opacity-70 hover:scale-110"
          onClick={onFlip}
          aria-label="Flip card"
        >
          <IoClose />
        </button>
      </div>
    </>
  );
}
