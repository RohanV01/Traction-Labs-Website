import React from 'react';
import { CheckCircle, Users, Target, BookOpen, TrendingUp, Sparkles } from 'lucide-react';

const Solution = () => {
  const benefits = [
    {
      icon: Users,
      title: "Crystal Clear Customer Understanding",
      description: "We help you identify exactly who your ideal customers are and what makes them tick."
    },
    {
      icon: Target,
      title: "Laser-Focused ICP Development",
      description: "Build a detailed ideal customer profile so you know exactly who to target and why."
    },
    {
      icon: BookOpen,
      title: "Done-For-You Call Booking",
      description: "We handle the entire outreach process and deliver qualified prospects to your calendar."
    },
    {
      icon: TrendingUp,
      title: "Team Training for Scale",
      description: "We train your team so you can continue booking calls and growing without us."
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-emerald-100/50 to-teal-100/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-teal-100/50 to-emerald-100/50 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 rounded-full text-sm font-medium mb-6 border border-emerald-200/50">
              <CheckCircle className="w-4 h-4 mr-2" />
              The Strategic Approach
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              We Don't Just Book Calls - We Build Your 
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> Sales Foundation</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Unlike agencies that just blast emails, we take a strategic approach. We help you understand 
              your market, build your sales process, and train your team for sustainable growth.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-r from-emerald-100 to-teal-100 p-3 rounded-xl flex-shrink-0 group-hover:from-emerald-200 group-hover:to-teal-200 transition-all">
                    <benefit.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="mt-8 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all transform hover:scale-105 font-semibold shadow-lg">
              See Our Process
            </button>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative">
                <div className="flex items-center mb-6">
                  <Sparkles className="h-6 w-6 mr-2" />
                  <h3 className="text-2xl font-bold">What Makes Us Different</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-200 flex-shrink-0" />
                    <span>Strategic consulting, not just execution</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-200 flex-shrink-0" />
                    <span>Human-driven outreach, not AI spam</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-200 flex-shrink-0" />
                    <span>Team training for long-term success</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-200 flex-shrink-0" />
                    <span>Focus on qualified prospects, not volume</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-200 flex-shrink-0" />
                    <span>Transparent process and regular updates</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">30</div>
              <div className="text-sm text-gray-600 font-medium">Days to Results</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;