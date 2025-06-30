
export default function HowItWorks() {

  return (
    <section 
      id="how-it-works"
      className="w-full bg-gray-50 py-20 px-6 relative overflow-hidden scroll-mt-40"
    >
      <div className="h-24 -mt-24"></div>

      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <p className="text-sm uppercase tracking-widest text-brand2 font-semibold mb-2">
          How It Works
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          A Smarter Way to Lounge
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          LoungeNavigator gets you from security to serenity in 5 easy steps.
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1 top-0 bottom-0 w-1 bg-gray-300 hidden md:block"></div>

          <div className="space-y-16 md:space-y-24">
            {[
              { title: 'Download the App', text: 'Get LoungeNavigator from the App Store and sign in with Apple.' },
              { title: 'Add Your Credit Card and Loyalty Info', text: 'Tell us what cards and programs you have — we\'ll match your access.' },
              { title: 'Enter Your Flight Details', text: 'Choose your airport, terminal, and airline so we can guide you accurately.' },
              { title: 'Discover Available Lounges', text: 'See a tailored list of lounges you can actually access — no guesswork.' },
              { title: 'Navigate With Confidence', text: 'Get real-time directions to your lounge inside the airport.' }
            ].map((step, i) => {
              const isEven = i % 2 === 1;
              return (
                <div key={i} data-aos="fade-up" className="relative flex flex-col md:flex-row items-center">
                  <div className={`md:w-1/2 ${isEven ? 'md:pr-16 order-2' : 'md:pl-16 text-center md:text-left order-3'}`}>
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-brand1 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md z-10 order-1 md:order-2">
                    {i + 1}
                  </div>
                  <div className={`md:w-1/2 ${isEven ? 'md:pl-16 order-3' : 'md:pr-16 order-2'}`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-8 py-4 shadow-md border border-gray-200">
            <span className="text-gray-700">Ready to try it?</span>
            <a
              href="#download"
              className="bg-brand1 text-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-brand2 transition-all duration-300 hover:scale-105"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}