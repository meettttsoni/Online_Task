import React from 'react';

const PricingSection = ({ onStartFreeClick }) => {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for new explorers',
      price: 'Free',
      features: [
        '5 guided meditations',
        '2 sleep stories',
        'Parent starter kit'
      ],
      buttonText: 'Get Started',
      buttonAction: onStartFreeClick,
      popular: false
    },
    {
      name: 'Premium',
      description: 'Unlimited mindful content',
      price: '₹299/mo',
      features: [
        'Unlimited meditations',
        'Sleep stories & calm music',
        'Printable guides for parents'
      ],
      buttonText: 'Upgrade Now',
      buttonAction: () => console.log('Premium plan clicked'),
      popular: true
    },
    {
      name: 'Family',
      description: 'For multiple kids',
      price: '₹499/mo',
      features: [
        '4 child profiles',
        'Rewards & streaks',
        'Classroom meditation pack'
      ],
      buttonText: 'Get Family Plan',
      buttonAction: () => console.log('Family plan clicked'),
      popular: false
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 animate-fade-in-up">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            Start free, cancel anytime. No hidden charges.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative animate-fade-in-up hover-lift`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
                  <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse-slow">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className={`card p-8 h-full ${plan.popular ? 'ring-2 ring-primary-500' : ''}`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-primary-600 mb-2 animate-pulse-slow">
                    {plan.price}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3 animate-fade-in-up" style={{ animationDelay: `${featureIndex * 100}ms` }}>
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 animate-scale-in">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={plan.buttonAction}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover-glow ${
                    plan.popular
                      ? 'bg-primary-500 hover:bg-primary-600 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 