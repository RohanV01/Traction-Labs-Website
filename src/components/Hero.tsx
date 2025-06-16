import React from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-200/30 to-emerald-200/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 rounded-full text-sm font-medium mb-6 border border-emerald-200/50 shadow-sm">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Trusted by 50+ early-stage founders
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            From <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Zero to Pipeline</span><br />
            in 30 Days
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            We help early-stage founders who don't know where to start with sales. Get clarity on your customers, 
            build your ideal customer profile, and start booking qualified calls while we train your team for long-term success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all transform hover:scale-105 flex items-center text-lg font-semibold shadow-lg hover:shadow-xl">
              Book a Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group flex items-center text-gray-700 hover:text-emerald-600 transition-colors text-lg">
              <div className="bg-white p-3 rounded-full shadow-lg mr-3 hover:shadow-xl transition-all group-hover:bg-emerald-50 border border-gray-100">
                <Play className="h-6 w-6 text-emerald-600" />
              </div>
              See How We Work
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform">
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-gray-600 font-medium">Calls Booked</div>
            </div>
            <div className="group hover:scale-105 transition-transform">
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">89%</div>
              <div className="text-gray-600 font-medium">Show-up Rate</div>
            </div>
            <div className="group hover:scale-105 transition-transform">
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">30</div>
              <div className="text-gray-600 font-medium">Days to Pipeline</div>
            </div>
            <div className="group hover:scale-105 transition-transform">
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">95%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;