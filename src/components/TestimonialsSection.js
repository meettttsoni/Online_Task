import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Bedtime is finally peaceful. My 6-year-old asks for the Star Boat story every night.",
      author: "Priya",
      role: "Mom of 6-year-old",
      rating: 5
    },
    {
      quote: "The 5-minute 'reset' audios have been a game changer for my son.",
      author: "Ron",
      role: "Dad of 9-year-old",
      rating: 5
    },
    {
      quote: "Our class uses the breathing games after lunch. Kids come back calm and ready.",
      author: "Anna",
      role: "Grade 4 Teacher",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, index) => (
      <svg key={index} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            What Families Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-8 text-center group hover:bg-primary-50 transition-all duration-300">
              <div className="flex justify-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-gray-800">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 