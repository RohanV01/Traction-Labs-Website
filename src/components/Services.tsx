import React from 'react';
import { Users, Target, Calendar, GraduationCap, Search, BarChart3 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Customer Segment Analysis",
      description: "Deep dive into your market to understand who actually needs your product and why.",
      features: ["Market research", "Customer interviews", "Segment identification", "Pain point analysis"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Target,
      title: "Ideal Customer Profile (ICP) Development",
      description: "Create a detailed profile of your perfect customer so you know exactly who to target.",
      features: ["Demographic profiling", "Behavioral analysis", "Decision-maker mapping", "Buying criteria"],
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: Calendar,
      title: "End-to-End Call Booking",
      description: "We handle the entire outreach process and deliver qualified prospects to your calendar.",
      features: ["Prospect research", "Personalized outreach", "Follow-up sequences", "Calendar management"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: GraduationCap,
      title: "Team Training & Enablement",
      description: "Train your team to continue the outbound process independently for sustainable growth.",
      features: ["Sales process training", "Outreach templates", "CRM setup", "Performance tracking"],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Users,
      title: "Strategic Sales Consulting",
      description: "Ongoing guidance to refine your approach and optimize your sales process.",
      features: ["Monthly strategy calls", "Process optimization", "Performance analysis", "Growth planning"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: BarChart3,
      title: "Performance Tracking & Optimization",
      description: "Detailed reporting and continuous improvement to maximize your results.",
      features: ["Weekly reports", "Conversion tracking", "A/B testing", "ROI analysis"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Sales Foundation Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to understand your customers, build your sales process, and scale your outbound efforts.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-r ${service.color} p-3 rounded-xl w-fit mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <service.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-100 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Not Sure Which Services You Need?
            </h3>
            <p className="text-gray-600 mb-6">
              Book a free strategy call and we'll create a custom plan based on your specific situation.
            </p>
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all transform hover:scale-105 font-semibold shadow-lg">
              Get Custom Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;