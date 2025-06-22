import { Link } from 'react-router-dom';
import { useState } from 'react';

// Contact.jsx or /contact route
export default function Contact() {
    const [openFaq, setOpenFaq] = useState(null);

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
<div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        {/* Back to Home - Above Container */}
        <div className="mb-6">
          <a href="/" className="text-blue-600 text-sm font-medium hover:underline">
            ← Back to Home
          </a>
        </div>

        {/* Header Section - Outside Container */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're here to help you navigate airport lounges with ease. Whether you have questions, 
            need support, or want to share feedback, our team is ready to assist you.
          </p>
        </div>

        {/* Main Container */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Contact Us Section */}
          <div className="px-8 py-8">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Contact Us</h2>
            <div className="flex items-start justify-between gap-8">
              {/* Left Side - Details */}
              <div className="flex-1 flex flex-col">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our dedicated team is committed to providing exceptional support and ensuring your 
                  airport lounge experience is seamless. We're passionate about helping travelers 
                  discover and access the best lounges worldwide.
                </p>
                <a
                  href="mailto:support@loungenavigator.com"
                  className="w-full bg-blue-600 text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg text-center block"
                >
                  Contact Support
                </a>
              </div>
              
              {/* Right Side - App Logo */}
              <div className="flex-shrink-0">
                <div className="w-40 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="text-white text-center">
                    <div className="text-3xl font-bold mb-1">LN</div>
                    <div className="text-xs opacity-90">Navigator</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Separator Line */}
          <div className="border-t border-gray-200 mx-8"></div>

          {/* FAQ Section */}
          <div className="px-8 py-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center gap-4 hover:bg-gray-100 transition-colors"
                  >
                    <div className={`w-5 h-5 flex items-center justify-center transition-transform ${
                      openFaq === index ? 'rotate-45' : ''
                    }`}>
                      <svg
                        className="w-4 h-4 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-800">{faq.question}</h3>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4 ml-9">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    );
  }
  