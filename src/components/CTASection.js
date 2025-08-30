import React from 'react';

const CTASection = ({ onStartFreeClick }) => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-500 to-secondary-600">
      <div className="container-custom text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Start Your Child's Mindfulness Journey
          </h2>
          <p className="text-xl text-primary-100 mb-12 leading-relaxed">
            Try it free. Build calm, focus, and kindness—one small practice a day.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={onStartFreeClick}
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Create Account
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
              Download App
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 