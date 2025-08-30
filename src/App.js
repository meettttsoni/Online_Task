import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhySection from './components/WhySection';
import ProgramsSection from './components/ProgramsSection';
import FeaturesSection from './components/FeaturesSection';
import ComparisonSection from './components/ComparisonSection';
import PricingSection from './components/PricingSection';
import ParentHubSection from './components/ParentHubSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import TrialFormModal from './components/TrialFormModal';
import AuthModal from './components/AuthModal';
import FloatingElements from './components/FloatingElements';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  const openModal = () => {
    if (user) {
      // User is logged in, show trial form directly
      setIsModalOpen(true);
    } else {
      // User is not logged in, show auth modal first
      setIsAuthModalOpen(true);
    }
  };

  const closeModal = () => setIsModalOpen(false);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    // After successful login, show the trial form
    setIsModalOpen(true);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const showAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  return (
    <div className="App min-h-screen bg-white relative">
      <FloatingElements />
      <Header 
        onStartFreeClick={openModal} 
        user={user}
        onLogout={handleLogout}
        onShowAuth={showAuthModal}
      />
      <main>
        <Hero onStartFreeClick={openModal} />
        <WhySection />
        <ProgramsSection />
        <FeaturesSection />
        <ComparisonSection />
        <PricingSection onStartFreeClick={openModal} />
        <ParentHubSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection onStartFreeClick={openModal} />
      </main>
      <Footer />
      
      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={closeAuthModal}
        onLoginSuccess={handleLoginSuccess}
      />
      
      {/* Trial Form Modal */}
      <TrialFormModal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        user={user}
      />
    </div>
  );
}

export default App;
