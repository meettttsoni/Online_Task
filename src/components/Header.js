import React, { useState } from 'react';

const Header = ({ onStartFreeClick, user, onLogout, onShowAuth }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <span className="text-2xl font-bold text-gray-800">Topmind Care</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#why" className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium">
              Why
            </a>
            <a href="#programs" className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium">
              Programs
            </a>
            <a href="#features" className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium">
              Features
            </a>
            <a href="#parents" className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium">
              For Parents
            </a>
            <a href="#faq" className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium">
              FAQ
            </a>
          </nav>

          {/* User Section */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-semibold text-sm">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-gray-700 font-medium">Hi, {user.name}</span>
                </div>
                <button
                  onClick={onLogout}
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200 font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={onShowAuth}
                className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
              >
                Login / Signup
              </button>
            )}
            
            <button
              onClick={onStartFreeClick}
              className="btn-primary"
            >
              Start Free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-slide-up">
            <nav className="flex flex-col space-y-4">
              <a href="#why" className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium">
                Why
              </a>
              <a href="#programs" className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium">
                Programs
              </a>
              <a href="#features" className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium">
                Features
              </a>
              <a href="#parents" className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium">
                For Parents
              </a>
              <a href="#faq" className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium">
                FAQ
              </a>
              
              {/* Mobile User Section */}
              <div className="pt-4 border-t border-gray-200">
                {user ? (
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-primary-600 font-semibold text-sm">
                          {user.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <span className="text-gray-700 font-medium">Hi, {user.name}</span>
                    </div>
                    <button
                      onClick={onLogout}
                      className="text-gray-600 hover:text-primary-600 transition-colors duration-200 font-medium text-left"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={onShowAuth}
                    className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200 text-left"
                  >
                    Login / Signup
                  </button>
                )}
                
                <button
                  onClick={onStartFreeClick}
                  className="btn-primary w-full mt-3"
                >
                  Start Free
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 