import React from 'react';
import { Search, Target, MessageSquare, Calendar, GraduationCap } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      step: 1,
      icon: Search,
      title: "Discovery & Customer Analysis",
      description: "We start by understanding your business, analyzing your market, and identifying your ideal customer segments.",
      duration: "Week 1-2",
      deliverables: ["Market analysis report", "Customer segment breakdown", "Competitive landscape"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      step: 2,
      icon: Target,
      title: "ICP Development & Strategy",
      description: "Build a detailed ideal customer profile and create a targeted outreach strategy.",
      duration: "Week 2-3",
      deliverables: ["Detailed ICP document", "Messaging framework", "Outreach strategy"],
      color: "from-teal-500 to-cyan-500"
    },
    {
      step: 3,
      icon: MessageSquare,
      title: "Outreach Execution",
      description: "We execute the outreach campaign with personalized messaging to your ideal prospects.",
      duration: "Week 3-6",
      deliverables: ["Prospect research", "Personalized outreach", "Follow-up sequences"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      step: 4,
      icon: Calendar,
      title: "Call Booking & Qualification",
      description: "Qualify interested prospects and book them directly into your calendar for sales conversations.",
      duration: "Week 4-8",
      deliverables: ["Qualified prospects", "Booked meetings", "Prospect briefings"],
      color: "from-blue-500 to-indigo-500"
    },
    {
      step: 5,
      icon: GraduationCap,
      title: "Team Training & Handoff",
      description: "Train your team on the proven process so you can continue booking calls independently.",
      duration: "Week 6-8",
      deliverables: ["Training materials", "Process documentation", "CRM setup"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="process" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-100/30 to-teal-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-teal-100/30 to-emerald-100/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Strategic 5-Step Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From zero sales knowledge to a qualified pipeline in 8 weeks. Here's exactly how we do it.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-emerald-200 to-teal-200 h-full rounded-full"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="lg:w-1/2 lg:px-8">
                  <div className={`text-center lg:text-${index % 2 === 0 ? 'right' : 'left'}`}>
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${step.color} text-white rounded-full text-xl font-bold mb-4 shadow-lg`}>
                      {step.step}
                    </div>
                    <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                      <div className="flex items-center justify-center lg:justify-start mb-4">
                        <div className={`bg-gradient-to-r ${step.color} p-3 rounded-xl shadow-lg`}>
                          <step.icon className="h-6 w-6 text-white" />
                        </div>
                        <span className="ml-3 text-sm font-medium text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                          {step.duration}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {step.description}
                      </p>
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-xl">
                        <h4 className="font-semibold text-gray-900 mb-2">Deliverables:</h4>
                        <ul className="space-y-1">
                          {step.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-center">
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mr-2 flex-shrink-0"></div>
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`hidden lg:block w-8 h-8 bg-gradient-to-r ${step.color} rounded-full border-4 border-white shadow-lg z-10`}></div>
                
                <div className="lg:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-100 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Build Your Sales Foundation?
            </h3>
            <p className="text-gray-600 mb-6">
              Book a free strategy call to discuss your specific situation and get a custom roadmap.
            </p>
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all transform hover:scale-105 font-semibold shadow-lg">
              Schedule Strategy Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;