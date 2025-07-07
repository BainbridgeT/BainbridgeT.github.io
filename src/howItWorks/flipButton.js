import { FaPlus } from "react-icons/fa";

export default function FlipButton({ onClick, className = "", icon = <FaPlus />, ariaLabel = "Flip card" }) {
  return (
    <button
      type="button"
      className={`absolute bottom-4 right-4 z-20 w-10 h-10 rounded-full bg-black/90 backdrop-blur-sm text-white text-xl flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform duration-200 ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  );
}
