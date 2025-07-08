import React, { useState } from "react";

export default function BetaSignupForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-[#f9fafb] via-white to-[#f9fafb] p-8 md:p-12 overflow-hidden"
      data-aos="fade-up"
    >
      {/* Floating blurred shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-r from-pink-200/30 to-yellow-200/30 rounded-full blur-3xl animate-pulse-slow" />

      <div className="relative w-full max-w-2xl mx-auto">
        {/* Back to Home */}
        <div className="mb-8">
          <a
            href="/"
            className="text-gray-500 text-sm font-medium hover:text-gray-700 transition-colors"
          >
            ← Back to Home
          </a>
        </div>

        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 tracking-tight leading-tight">
            Join our Beta
          </h1>
          <p className="text-gray-500 text-xl mt-4 max-w-2xl mx-auto">
            Be the first to experience LoungeNavigator and help shape the
            future of airport travel.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white/50 backdrop-blur-md rounded-4xl premium-shadow p-12 md:p-16 transition hover:shadow-3xl">
          {submitted ? (
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Thanks for joining!
              </h2>
              <p className="text-gray-600 text-sm">
                We’ll notify you when the beta is ready.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Appleseed"
                  className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/80 focus:border-black transition"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  iCloud Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  pattern=".+@icloud\.com"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@icloud.com"
                  className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/80 focus:border-black transition"
                />
              </div>

              <input type="hidden" name="source" value="beta-page" />

              <button
                type="submit"
                className="w-full bg-black text-white font-medium py-3 px-6 rounded-xl hover:bg-gray-900 active:scale-95 transition-all duration-200"
              >
                Join Now
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
