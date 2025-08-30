import React from 'react';

const ComparisonSection = () => {
  const comparisons = [
    {
      feature: 'Child-Friendly Guided Meditations',
      minderyKids: { has: true, description: 'Story-based, fun & short' },
      otherApps: { has: false, description: 'Generic adult content' }
    },
    {
      feature: 'Safe & Ad-Free Environment',
      minderyKids: { has: true, description: '100% secure for kids' },
      otherApps: { has: false, description: 'Ads & distractions' }
    },
    {
      feature: 'Age-Specific Programs',
      minderyKids: { has: true, description: 'Tailored for 4-14' },
      otherApps: { has: false, description: 'One-size-fits-all' }
    },
    {
      feature: 'Parent & Teacher Support',
      minderyKids: { has: true, description: 'Progress insights' },
      otherApps: { has: false, description: 'Limited or none' }
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Why Choose Mindery Kids Over Others?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-gray-100 p-6">
              <div className="font-semibold text-gray-700">Features</div>
              <div className="font-semibold text-primary-600 text-center">Mindery Kids</div>
              <div className="font-semibold text-gray-600 text-center">Other Apps</div>
            </div>

            {/* Table Rows */}
            {comparisons.map((comparison, index) => (
              <div key={index} className="grid grid-cols-3 border-b border-gray-200 last:border-b-0">
                <div className="p-6 font-medium text-gray-800">
                  {comparison.feature}
                </div>
                <div className="p-6 text-center">
                  {comparison.minderyKids.has ? (
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">{comparison.minderyKids.description}</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">{comparison.minderyKids.description}</span>
                    </div>
                  )}
                </div>
                <div className="p-6 text-center">
                  {comparison.otherApps.has ? (
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">{comparison.otherApps.description}</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">{comparison.otherApps.description}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection; 