import React from 'react';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating circles */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-secondary-200/20 rounded-full animate-float animate-delay-200"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-accent-pink/20 rounded-full animate-float animate-delay-400"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent-yellow/20 rounded-full animate-float animate-delay-600"></div>
      
      {/* Floating squares */}
      <div className="absolute top-60 left-1/4 w-8 h-8 bg-accent-blue/20 rotate-45 animate-rotate-slow"></div>
      <div className="absolute top-80 right-1/3 w-6 h-6 bg-primary-300/20 rotate-45 animate-rotate-slow animate-delay-300"></div>
      
      {/* Floating triangles */}
      <div className="absolute top-32 left-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[20px] border-l-transparent border-r-transparent border-b-accent-blue/20 animate-bounce-gentle"></div>
      <div className="absolute bottom-60 right-1/4 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[16px] border-l-transparent border-r-transparent border-b-secondary-300/20 animate-bounce-gentle animate-delay-500"></div>
      
      {/* Shimmer effects */}
      <div className="absolute top-1/4 left-1/3 w-32 h-1 bg-gradient-to-r from-transparent via-primary-300/30 to-transparent animate-shimmer"></div>
      <div className="absolute bottom-1/3 right-1/4 w-24 h-1 bg-gradient-to-r from-transparent via-secondary-300/30 to-transparent animate-shimmer animate-delay-1000"></div>
    </div>
  );
};

export default FloatingElements; 