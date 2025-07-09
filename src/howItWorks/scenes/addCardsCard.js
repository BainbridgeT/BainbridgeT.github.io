import FlipButton from "../flipButton";
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

const cardBrands = {
    "Capital One Venture X®": { color: "#0D1F2D", textColor: "#fff" },
    "Centurion® Card from AMEX": { color: "#1A1A1A", textColor: "#fff" },
    "Chase Sapphire Reserve®": { color: "#0F4C81", textColor: "#fff" },
    "Citi AAdvantage Executive Card": { color: "#0067B1", textColor: "#fff" },
    "Delta Reserve AMEX Card": { color: "#CE1141", textColor: "#fff" },
    "The Platinum Card® from AMEX": { color: "#A7A9AC", textColor: "#000" },
    "United Club℠ Infinite Card": { color: "#005DAA", textColor: "#fff" },
    "Chase Sapphire Reserve® Card": { color: "#003B6D", textColor: "#fff" },
    "J.P. Morgan Reserve Card": { color: "#1E1E1E", textColor: "#fff" },
    "The Ritz-Carlton Credit Card": { color: "#2C3E50", textColor: "#fff" },
  };
  
  
  const CreditCardItem = ({ card, onRemove }) => {
    const brandInfo = cardBrands[card] || { color: '#333', textColor: '#fff' };
  
    return (
      <div
        className="relative rounded-xl w-full max-w-[400px] h-[140px] flex flex-col justify-between p-5 shadow-[0_4px_8px_rgba(0,0,0,0.15)] self-center"
        style={{ backgroundColor: brandInfo.color }}
      >
        {/* Header: chip + remove */}
        <div className="flex justify-between items-start">
          <div className="w-8 h-6 rounded-sm bg-white/30" />
        </div>
  
        {/* Content: number + brand */}
        <div className="flex flex-col justify-end flex-1">
          <div className="flex justify-between items-center">
            <p className="text-[13px] font-semibold" style={{ color: brandInfo.textColor }}>
              {card}
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  
  export default function AddCardsCard({ step, onFlip, isFlipped }) {
    const cards = [
      'Capital One Venture X®',
      'Centurion® Card from AMEX',
      'Chase Sapphire Reserve®',
      'Citi AAdvantage Executive Card',
      'Delta Reserve AMEX Card',
      'The Platinum Card® from AMEX',
      'United Club℠ Infinite Card',
      'The Ritz-Carlton Credit Card',
    ];
  
    return (
      <>
        {/* Front */}
        <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl flex flex-col items-center justify-start p-8 md:p-12 space-y-8 overflow-hidden backface-hidden">
          {/* Title */}
          <h3 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight text-center leading-tight">
            {step.title}
          </h3>
          
          {/* Grid of credit card items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
            {cards.slice(0, 6).map((card, idx) => (
              <div
                key={idx}
                className="w-full p-4 transition duration-200"
              >
                <CreditCardItem
                  card={card}
                  onRemove={(removedCard) => console.log('Remove', removedCard)}
                />
              </div>
            ))}
          </div>
  
          <FlipButton onClick={onFlip} />

        </div>
  
        {/* Back */}
        <div className="absolute inset-0 bg-gray-50 rounded-3xl shadow-2xl flex flex-col items-start justify-start pt-32 pl-16 md:pl-32 pr-8 md:pr-12 backface-hidden rotate-x-180 overflow-hidden">
  <div className="max-w-2xl">
    <h4 className="text-2xl md:text-3xl font-bold text-black leading-tight mb-4">
      {step.backTitle}
    </h4>

    <p className="text-gray-500 text-xl md:text-2xl leading-relaxed font-light">
      {step.backDescription}
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