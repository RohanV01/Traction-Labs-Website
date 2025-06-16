import React from 'react';
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 rounded-full translate-x-32 translate-y-32"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-xl shadow-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Traction Labs
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              We help early-stage founders understand their customers, build their ideal customer profile, 
              book qualified sales calls, and train their teams for sustainable outbound success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-xl hover:bg-gradient-to-r hover:from-emerald-600 hover:to-teal-600 transition-all transform hover:scale-105">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-xl hover:bg-gradient-to-r hover:from-emerald-600 hover:to-teal-600 transition-all transform hover:scale-105">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Customer Segment Analysis</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">ICP Development</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Call Booking</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Team Training</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Sales Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2 hover:text-emerald-400 transition-colors">
                <Mail className="h-4 w-4" />
                <span>hello@tractionlabs.co</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-emerald-400 transition-colors">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2 hover:text-emerald-400 transition-colors">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Traction Labs. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;