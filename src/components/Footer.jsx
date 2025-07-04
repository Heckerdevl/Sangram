import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-14 bg-[url('/assets/logo.png')] bg-cover bg-center rounded-full flex items-center justify-center">
                
              </div>
              <span className="text-xl font-bold">Sangram</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Sangram is IIT Roorkee's prestigious annual sports fest, uniting colleges and athletes across the nation in the spirit of competition, fitness, and sportsmanship.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <a href="/about" className="block text-gray-300 hover:text-white transition-colors duration-200">About Us</a>
              <a href="/events" className="block text-gray-300 hover:text-white transition-colors duration-200">Events</a>
              <a href="/register" className="block text-gray-300 hover:text-white transition-colors duration-200">Register</a>
              <a href="/contact" className="block text-gray-300 hover:text-white transition-colors duration-200">Contact</a>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/sangram_iitr/" target='_blank' className="text-gray-300 hover:text-white transition-colors duration-200">
                <Instagram size={24} />
              </a>
              <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcRzCMnMQTKKcPnpzBkpLwHZLkqchhvRtPhqfxSXMfzzttRbggCfTSldrrlkDTphHmThDdGCT" target='_blank' className="text-gray-300 hover:text-white transition-colors duration-200">
                <Mail size={24} />
              </a>
              <a href="https://www.linkedin.com/in/sangram-iitr-572a982b8/" target='_blank' className="text-gray-300 hover:text-white transition-colors duration-200">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2025 Sangram, IIT Roorkee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
