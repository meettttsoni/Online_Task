import React from 'react';

const ProgramsSection = () => {
  const programs = [
    {
      id: 1,
      title: 'Little Explorers (4-6)',
      description: 'Three to five-minute stories with animal friends that teach belly-breathing, noticing sounds, and gentle stretching.',
      features: [
        { name: 'Cozy Corner', icon: '🛏️' },
        { name: 'Calm Music', icon: '🎵' },
        { name: 'Sticker Badges', icon: '⭐' }
      ],
      bgColor: 'from-blue-400 to-purple-400',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=500&fit=crop&crop=face',
      ageRange: '4-6 years'
    },
    {
      id: 2,
      title: 'Brave Thinkers (7-10)',
      description: 'Mindset stories, focus timers, and kindness practices that build confidence and classroom readiness.',
      features: [
        { name: 'Focus Timer', icon: '⏱️' },
        { name: 'Gratitude Notes', icon: '📝' },
        { name: 'Streak Rewards', icon: '🏆' }
      ],
      bgColor: 'from-green-400 to-blue-400',
      image: 'https://www.shutterstock.com/image-photo/little-pretty-girl-age-67-260nw-1561153091.jpg',
      ageRange: '7-10 years'
    },
    {
      id: 3,
      title: 'Calm & Curious (11-14)',
      description: 'Longer meditations, reframing thoughts, and sleep stories for deeper rest and emotional balance.',
      features: [
        { name: 'Mindset Minis', icon: '🧠' },
        { name: 'Sleep Stories', icon: '🌙' },
        { name: 'Goal Cards', icon: '🎯' }
      ],
      bgColor: 'from-purple-400 to-pink-400',
      image: 'https://www.shutterstock.com/image-photo/smiling-little-blonde-kid-girl-260nw-1803813403.jpg',
      ageRange: '11-14 years'
    }
  ];

  return (
    <section id="programs" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 animate-fade-in-up">
            Programs for Every Age
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            Pick a track or mix and match. Each program grows with your child.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={program.id} 
              className="card overflow-hidden group hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Program Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={`${program.title} - ${program.ageRange}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold animate-pulse-slow">
                    {program.ageRange}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {program.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-full text-sm hover-rotate transition-all duration-300 hover:bg-primary-100 hover:text-primary-700"
                    >
                      <span className="animate-bounce-gentle" style={{ animationDelay: `${featureIndex * 100}ms` }}>
                        {feature.icon}
                      </span>
                      <span className="text-gray-700 font-medium">{feature.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection; 