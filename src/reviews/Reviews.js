
export default function Reviews() {
  return (
    <section className="bg-white py-24 px-6" id="testimonials">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Loved by Travelers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands who've transformed their travel experience
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Review 1 */}
          <div className="border border-gray-200 rounded-2xl p-6 shadow-sm bg-white">
            <p className="text-xl font-semibold text-gray-900 mb-4">
              “A must-have for any frequent flyer.”
            </p>
            <p className="text-base font-bold text-gray-700">The Points Guy</p>
          </div>

          {/* Review 2 */}
          <div className="border border-gray-200 rounded-2xl p-6 shadow-sm bg-white">
            <p className="text-xl font-semibold text-gray-900 mb-4">
              “Makes lounge access feel effortless.”
            </p>
            <p className="text-base font-bold text-gray-700">NerdWallet</p>
          </div>

          {/* Review 3 */}
          <div className="border border-gray-200 rounded-2xl p-6 shadow-sm bg-white">
            <p className="text-xl font-semibold text-gray-900 mb-4">
              “The smartest travel tool this year.”
            </p>
            <p className="text-base font-bold text-gray-700">Travel + Leisure</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16">
          <span className="text-gray-700 font-medium">Trusted by 50,000+ travelers</span>
        </div>
      </div>
    </section>
  );
}