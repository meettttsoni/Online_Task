import React from 'react';

const Hero = ({ onStartFreeClick }) => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight animate-fade-in-up">
                Mindfulness & Meditation for Kids{' '}
                <span className="text-primary-600 animate-pulse-slow">(4-14)</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up animate-delay-200">
                Fun, story-based meditations that build focus, kindness, and confidence. 
                Safe, ad-free, and crafted with child-development experts.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-400">
              <button
                onClick={onStartFreeClick}
                className="btn-primary text-lg px-8 py-4 hover-lift hover-glow"
              >
                Start Free Trial
              </button>
              <button className="btn-secondary text-lg px-8 py-4 hover-lift hover-glow">
                Explore Programs
              </button>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fade-in-up animate-delay-600">
              <div className="bg-accent-pink/10 p-4 rounded-lg text-center hover-lift animate-float">
                <div className="w-8 h-8 bg-accent-pink rounded-full flex items-center justify-center mx-auto mb-2 animate-heartbeat">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-700">Improve Focus</p>
              </div>
              <div className="bg-accent-yellow/10 p-4 rounded-lg text-center hover-lift animate-float animate-delay-100">
                <div className="w-8 h-8 bg-accent-yellow rounded-full flex items-center justify-center mx-auto mb-2 animate-heartbeat">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-700">Reduce Stress</p>
              </div>
              <div className="bg-accent-blue/10 p-4 rounded-lg text-center hover-lift animate-float animate-delay-200">
                <div className="w-8 h-8 bg-accent-blue rounded-full flex items-center justify-center mx-auto mb-2 animate-heartbeat">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-700">Better Sleep</p>
              </div>
              <div className="bg-accent-red/10 p-4 rounded-lg text-center hover-lift animate-float animate-delay-300">
                <div className="w-8 h-8 bg-accent-red rounded-full flex items-center justify-center mx-auto mb-2 animate-heartbeat">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-700">Increase Empathy</p>
              </div>
            </div>
          </div>

          {/* Right Content - Today's Journey */}
          <div className="relative animate-fade-in-up animate-delay-400">
            <div className="bg-gray-100 rounded-2xl p-8 h-96 flex items-center justify-center hover-lift">
              <div className="bg-white rounded-xl p-6 shadow-lg max-w-sm animate-scale-in">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Today's Journey</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 hover-rotate">
                    <div className="w-8 h-8 bg-secondary-400 rounded-full flex items-center justify-center animate-bounce-gentle">
                      <span className="text-white text-sm">🐉</span>
                    </div>
                    <span className="text-gray-700">Dragon Breath (3 min)</span>
                  </div>
                  <div className="flex items-center space-x-3 hover-rotate animate-delay-100">
                    <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center animate-bounce-gentle animate-delay-200">
                      <span className="text-white text-sm">🦋</span>
                    </div>
                    <span className="text-gray-700">Butterfly Body Scan (5 min)</span>
                  </div>
                  <div className="flex items-center space-x-3 hover-rotate animate-delay-200">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce-gentle animate-delay-400">
                      <span className="text-white text-sm">⭐</span>
                    </div>
                    <span className="text-gray-700">Sleep Stone Star Bowl (7 min)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 