import React, { useState } from 'react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(2); // Start with the third FAQ open

  const faqs = [
    {
      id: 1,
      question: "What ages is this for?",
      answer: "Our programs are designed for children ages 4-14, with age-appropriate content and features for each developmental stage."
    },
    {
      id: 2,
      question: "How long are the sessions?",
      answer: "Sessions range from 3-15 minutes depending on age and program. Younger children start with shorter sessions, while older kids can enjoy longer meditations."
    },
    {
      id: 3,
      question: "Is it safe and ad-free?",
      answer: "Yes. We designed this for children. No external ads, clear privacy options, and parent controls ensure a safe experience."
    },
    {
      id: 4,
      question: "Can schools use it?",
      answer: "Absolutely! We offer special classroom packs and teacher resources. Many schools use our 5-minute start-of-class resets and breathing exercises."
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="card overflow-hidden">
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 ${
                    openFAQ === faq.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openFAQ === faq.id && (
                <div className="px-6 pb-6 animate-slide-up">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 