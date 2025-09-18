import React from 'react';
import { Facebook, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function LucaFooter() {
  return (
    <footer className="relative bg-white overflow-hidden">
      {/* Wave curve background */}
      <div className="absolute inset-0">
        <svg viewBox="0 0 1440 400" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0,120 C480,40 960,200 1440,120 L1440,400 L0,400 Z"
            fill="#5DADE2"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-2">
          
          {/* Left section - Logo and Social */}
          <div className="space-y-6">
            <div className="text-white">
              <h2 className="text-blue-700 md:text-white text-4xl font-light mt-6">
  Luca<span className="text-lg font-normal italic">.com</span>
</h2>

            </div>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
                <Facebook className="w-6 h-6 text-blue-600" />
              </div>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
                <Linkedin className="w-6 h-6 text-blue-700" />
              </div>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
                <Youtube className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>

          {/* Middle section - Quick Links */}
          <div className="text-white">
            <h3 className="text-xl font-medium pt-8 mb-2">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-white hover:text-gray-200 transition-colors">
                  More About Leslie
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-200 transition-colors">
                  Watch Luca's Leadership<br />Minis → Season 1
                </a>
              </li>
            </ul>
          </div>

          {/* Right section - Get in Touch */}
          <div className="text-white">
            <h3 className="text-xl font-medium pt-16 mb-2">Get in Touch</h3>
            <div className="space-y-4"> 
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white" />
                <a href="mailto:leslie@lesliemartinjch.com" className="text-white hover:text-gray-200 transition-colors">
                  leslie@lesliemartinjch.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white" />
                <a href="tel:+15551234567" className="text-white hover:text-gray-200 transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-white" />
                <span className="text-white">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section - Copyright */}
        <div className="border-t border-white/30 pt-6">
          <p className="text-white text-sm">
            © 2025 Luca. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}