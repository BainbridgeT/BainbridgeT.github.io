import { IoClose } from 'react-icons/io5';
import FlipButton from '../flipButton';

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
      <div className="absolute inset-0 rounded-3xl bg-gray-50 flex flex-col items-start justify-start pt-32 pl-16 md:pl-32 pr-8 md:pr-12 backface-hidden rotate-x-180 overflow-y-auto">
  <div className="max-w-2xl">
    <h4 className="text-2xl md:text-3xl font-bold text-black leading-tight mb-6">
      {step.backTitle}
    </h4>

    <p className="text-gray-500 text-xl md:text-2xl leading-relaxed font-light">
      {step.backText}
    </p>
  </div>

  <FlipButton onClick={onFlip} icon={<IoClose />} />

</div>

    </>
  );
}
  
  