import React from 'react';

const WhySection = () => {
  return (
    <section id="why" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Why Mindery Kids?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Children learn best through play and stories. Our sessions blend gentle breathing, 
            guided imagery, and music to make mindfulness enjoyable and effective.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Story Meditations */}
          <div className="card p-8 text-center group">
            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary-200 transition-colors duration-300">
              <svg className="w-8 h-8 text-secondary-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Story Meditations</h3>
            <p className="text-gray-600 mb-4">Guided Adventures</p>
            <p className="text-sm text-gray-500">
              Short, age-wise journeys that help kids calm their bodies and name their feelings.
            </p>
          </div>

          {/* Anytime Calm */}
          <div className="card p-8 text-center group">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-200 transition-colors duration-300">
              <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Anytime Calm</h3>
            <p className="text-gray-600 mb-4">Tools for Big Feelings</p>
            <p className="text-sm text-gray-500">
              Quick 'reset' audios for pre-worry, pre-exam jitters, and before homework has focus.
            </p>
          </div>

          {/* Parent Hub */}
          <div className="card p-8 text-center group">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors duration-300">
              <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-.707.707a1 1 0 001.414 1.414L10 4.414l.707.707a1 1 0 001.414-1.414l-.707-.707zM3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 12a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Parent Hub</h3>
            <p className="text-gray-600 mb-4">Guides & Routines</p>
            <p className="text-sm text-gray-500">
              Weekly tips, printable charts, and simple routines you can use at home or school.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection; 