import React from 'react';
import { ArrowRight, CheckCircle, Calendar, Sparkles } from 'lucide-react';

const CTA = () => {
  const guarantees = [
    "Clear customer understanding within 2 weeks",
    "Detailed ICP and strategy document",
    "First qualified calls within 30 days",
    "Complete team training and handoff"
  ];

  const callIncludes = [
    "Analysis of your current situation",
    "Identification of your ideal customer profile",
    "Custom outreach strategy recommendations",
    "Clear roadmap for the next 90 days"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
            <Sparkles className="w-4 h-4 mr-2" />
            Limited Time Offer
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Stop Guessing Who Your Customers Are
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
            Get clarity on your market, build your ideal customer profile, and start booking qualified calls 
            while we train your team for sustainable growth. No more shooting in the dark.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Calendar className="h-6 w-6 mr-3" />
                Book Your Free Strategy Call
              </h3>
              
              <div className="space-y-4 mb-8">
                {callIncludes.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-300 flex-shrink-0 mt-0.5" />
                    <span className="text-emerald-100">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <button className="group w-full bg-white text-emerald-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold text-lg flex items-center justify-center shadow-lg">
                  Schedule Free Call
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-emerald-200 text-sm mt-3">
                  45-minute call • No sales pitch • Actionable insights
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">What You'll Get</h3>
            <div className="space-y-4 mb-8">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-emerald-400 p-1 rounded-full flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-emerald-100 text-lg">{guarantee}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-white/10 rounded-xl border border-white/20 p-6 mb-6 backdrop-blur-sm">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">8 Weeks</div>
                <div className="text-emerald-200">From Strategy to Self-Sufficient Team</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border border-yellow-400/30 rounded-xl p-4 backdrop-blur-sm">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-yellow-200 font-semibold">Limited Availability</span>
              </div>
              <p className="text-yellow-100 text-sm">
                We only work with 5 new clients per month to ensure quality results.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">
              Not Ready for a Call Yet?
            </h3>
            <p className="text-emerald-200 mb-6">
              Download our free guide: "The Early-Stage Founder's Guide to Identifying Your First Customers"
            </p>
            <button className="text-white border border-white/30 px-6 py-3 rounded-xl hover:bg-white/10 transition-all transform hover:scale-105">
              Download Free Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;