// Contact.jsx or /contact route

import { useState } from 'react';

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Is LoungeNavigator free?",
      answer: "Yes, you can explore lounges and navigate for free. Our basic features are available to all users. Pro features offer enhanced benefits including real-time availability, exclusive lounge deals, and priority support."
    },
    {
      question: "Which airports are covered?",
      answer: "We currently support 18 major US airports and over 200 lounges, with new locations added regularly. Our coverage includes major hubs like LAX, JFK, DFW, and many more, with international expansion coming soon."
    },
    {
      question: "Do I need an account?",
      answer: "No account is needed to browse lounges and basic navigation features. However, signing in with Apple allows you to save preferences, create custom lounge lists, and access Pro features for an enhanced experience."
    },
    {
      question: "How accurate is the lounge information?",
      answer: "We continuously update our database with the latest lounge information, including hours, amenities, and access requirements. Our team verifies details regularly to ensure you have the most current information for your travels."
    },
    {
      question: "Can I suggest new lounges or features?",
      answer: "Absolutely! We love hearing from our community. Contact our support team to suggest new lounges, airports, or features you'd like to see. Your feedback helps us improve and expand our service."
    }
  ];

    return (
      <div className="relative min-h-screen bg-gradient-to-br from-[#f9fafb] via-white to-[#f9fafb] p-8 md:p-12 overflow-hidden" data-aos='fade-up'>

      {/* Floating blurred shapes for depth */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-r from-pink-200/30 to-yellow-200/30 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="relative w-full max-w-2xl mx-auto">

        {/* Back to Home */}
        <div className="mb-8">
          <a href="/" className="text-gray-500 text-sm font-medium hover:text-gray-700 transition-colors">
            ← Back to Home
          </a>
        </div>

        {/* Main Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 tracking-tight leading-tight">Contact</h1>
          <p className="text-gray-500 text-xl mt-4 max-w-2xl mx-auto">
            We’re here to help you get the most out of LoungeNavigator.
          </p>
        </div>

        {/* Need Help Section */}
        <div className="mb-20">
          <div className="bg-white/50 backdrop-blur-md rounded-4xl premium-shadow p-12 md:p-16 transition hover:shadow-3xl">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Need a hand?</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our support team is ready to help you get the most from Lounge Navigator—whether you’re finding lounges,
              booking access, or navigating the app. We're here to assist with any questions or technical issues.
            </p>
          </div>
        </div>

        {/* Questions Section */}
        <div className="mb-20">
          <div className="bg-white/50 backdrop-blur-md rounded-4xl premium-shadow p-12 md:p-16 transition hover:shadow-3xl">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Got questions?</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              We’re passionate about helping travelers discover and access the best airport lounges worldwide. Our team
              is committed to providing exceptional support and ensuring your lounge experience is seamless and enjoyable.
            </p>
            <a
              href="mailto:support@loungenavigator.com"
              className="flex w-full items-center justify-center border border-gray-300 text-gray-800 text-lg font-semibold px-8 py-5 rounded-2xl hover:bg-gray-100 active:scale-95 transition-all duration-300 shadow hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-gray-200"
            >
              <svg
                className="w-6 h-6 text-gray-700 mr-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8-4H8m8 8H8m12-8v8a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h12a2 2 0 012 2z"/>
              </svg>
              support@loungenavigator.com
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="bg-white/50 backdrop-blur-md rounded-4xl premium-shadow p-12 md:p-16 transition hover:shadow-3xl">
            <h2 className="text-3xl font-semibold text-gray-900 mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="faq-button w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-all duration-300"
                  >
                    <h3 className="font-medium text-gray-900 text-lg">{faq.question}</h3>
                    <div className={`transform transition-transform duration-500 ${openFaq === index ? 'rotate-180' : ''}`}>
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="px-6 pb-5 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                      <p className="text-gray-600 leading-relaxed pt-4 text-base">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
  