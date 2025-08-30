import React from 'react';

const ParentHubSection = () => {
  const resources = [
    {
      title: 'Download Starter Kit (PDF)',
      icon: '📥',
      description: 'Get started with our comprehensive guide',
      action: () => console.log('Download Starter Kit')
    },
    {
      title: '7-Day Calm Plan',
      icon: '📅',
      description: 'A week-long mindfulness journey for your family',
      action: () => console.log('7-Day Calm Plan')
    },
    {
      title: 'Classroom Pack',
      icon: '🏫',
      description: 'Resources designed for teachers and schools',
      action: () => console.log('Classroom Pack')
    }
  ];

  return (
    <section id="parents" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Parent & Teacher Hub
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Practical guides, printable routines, and progress insights so you can support 
            mindfulness at home and school.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {resources.map((resource, index) => (
            <div key={index} className="card p-6 text-center group hover:bg-primary-50 transition-all duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {resource.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                {resource.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {resource.description}
              </p>
              <button
                onClick={resource.action}
                className="btn-outline w-full group-hover:bg-primary-500 group-hover:text-white transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParentHubSection; 