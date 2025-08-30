import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-white rounded-full"></div>
              </div>
              <span className="text-xl font-bold">Topmind Care</span>
            </div>
            <p className="text-gray-400 text-sm">
              Mindfulness for growing minds. © 2023 Mindery Kids.
            </p>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Contact
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                YouTube
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                X
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div className="text-center md:text-right">
            <div className="flex justify-center md:justify-end space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Legal
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 