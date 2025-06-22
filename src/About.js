import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section id="about" className="bg-white py-24 px-6">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto mb-12">
        <p className="text-sm uppercase tracking-widest text-gray-400 font-semibold mb-2">
            About Us
        </p>
        </div>
    
        {/* Content Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left: Main Story */}
        <div>
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-6">
            Why LoungeNavigator?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
            We’re redefining the most overlooked part of your travel day — the time between TSA and takeoff.
            LoungeNavigator helps you discover lounges you can actually access and guides you to them with real-time indoor navigation.
            </p>
            <div className="bg-gray-50 rounded-2xl p-6 shadow-md border border-gray-100">
            <p className="text-md text-gray-800 font-medium leading-relaxed">
                ✈️ The first travel app built to guide you <strong>from security to seat</strong> — combining <strong>lounge discovery</strong> with real-time <strong>indoor wayfinding</strong>.
            </p>
            </div>
        </div>
    
        {/* Right: Highlights or Values */}
        <div className="flex flex-col space-y-6">
            <div className="flex items-start gap-4 bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100">
            <span className="text-xl">🧭</span>
            <p className="text-gray-700 text-md leading-relaxed">
                Built for modern travelers who don’t want to waste time wandering terminals.
            </p>
            </div>
            <div className="flex items-start gap-4 bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100">
            <span className="text-xl">🔍</span>
            <p className="text-gray-700 text-md leading-relaxed">
                Transparent lounge access based on your cards, airline status, and terminal.
            </p>
            </div>
            <div className="flex items-start gap-4 bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100">
            <span className="text-xl">💡</span>
            <p className="text-gray-700 text-md leading-relaxed">
                Designed for clarity, speed, and simplicity — no logins or manual filtering required.
            </p>
            </div>
        </div>
        </div>
    </section>

  );
}