import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Ad-Free & Safe',
      description: 'Child-first design with privacy controls and no external ads.',
      icon: '🛡️'
    },
    {
      title: 'Rewards that Motivate',
      description: 'Stars, badges, and gentle streaks encourage healthy habits—no pressure.',
      icon: '🏆'
    },
    {
      title: 'Offline Access',
      description: 'Download favorite sessions for calm on the go.',
      icon: '📱'
    },
    {
      title: 'Sleep Mode',
      description: 'Fade-out music and dim visuals help kids drift off peacefully.',
      icon: '😴'
    },
    {
      title: 'Classroom Friendly',
      description: 'Teacher packs with 5-minute start-of-class resets and posters.',
      icon: '🏫'
    },
    {
      title: 'Multi-Child Profiles',
      description: 'Personalized tracks for each child in the family.',
      icon: '👨‍👩‍👧‍👦'
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 animate-fade-in-up">
            Built for Kids, Loved by Parents
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card p-6 group hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl mb-4 animate-bounce-gentle hover-rotate transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 