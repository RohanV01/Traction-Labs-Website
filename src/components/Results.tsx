import React from 'react';
import { TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

const Results = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: "89%",
      label: "Client Success Rate",
      description: "Clients who get qualified calls within 30 days",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Users,
      value: "500+",
      label: "Calls Booked",
      description: "Qualified sales calls delivered to clients",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: DollarSign,
      value: "$2.4M",
      label: "Pipeline Generated",
      description: "Total pipeline value created for clients",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Clock,
      value: "21 Days",
      label: "Average Time to First Call",
      description: "From strategy session to first booking",
      color: "from-blue-500 to-indigo-500"
    }
  ];

  const caseStudies = [
    {
      company: "DataFlow Solutions",
      founder: "Sarah Chen",
      industry: "B2B SaaS",
      challenge: "Had a great product but no idea who to sell to or how to reach them",
      approach: [
        "Conducted customer segment analysis",
        "Built detailed ICP for enterprise customers",
        "Executed targeted LinkedIn and email outreach",
        "Trained internal team on the process"
      ],
      results: [
        "Identified 3 high-value customer segments",
        "47 qualified calls booked in first month",
        "12 customers acquired worth $48K ARR",
        "Team now books 15+ calls monthly independently"
      ],
      quote: "Traction Labs didn't just book calls - they taught us who our customers really are. We went from shooting in the dark to having a clear sales strategy."
    },
    {
      company: "HealthTech Pro",
      founder: "Marcus Johnson",
      industry: "HealthTech",
      challenge: "Long sales cycles and difficulty reaching healthcare decision makers",
      approach: [
        "Mapped healthcare buying committees",
        "Developed multi-stakeholder outreach strategy",
        "Created industry-specific messaging",
        "Implemented systematic follow-up process"
      ],
      results: [
        "31 C-level meetings booked with health systems",
        "8 enterprise deals closed worth $180K",
        "Reduced sales cycle from 12 to 8 months",
        "Built repeatable process for future growth"
      ],
      quote: "They understood our complex sales environment and created a systematic approach that actually works in healthcare."
    }
  ];

  return (
    <section id="results" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Results from Real Founders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just book calls - we build sustainable sales foundations that keep working long after our engagement ends.
          </p>
        </div>
        
        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-sm text-center border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-r ${metric.color} p-3 rounded-xl w-fit mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <metric.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                {metric.value}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">
                {metric.label}
              </div>
              <p className="text-gray-600 text-sm">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Case Studies */}
        <div className="space-y-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Founder Success Stories
          </h3>
          
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-emerald-100 to-teal-100 px-3 py-1 rounded-full text-emerald-800 text-sm font-medium mr-3 border border-emerald-200">
                      {study.industry}
                    </div>
                    <div className="text-gray-600 text-sm">Founder: {study.founder}</div>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    {study.company}
                  </h4>
                  
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-2">Challenge:</h5>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Our Approach:</h5>
                    <div className="space-y-2">
                      {study.approach.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="bg-gradient-to-r from-emerald-100 to-teal-100 p-1 rounded-full flex-shrink-0 mt-1">
                            <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                          </div>
                          <span className="text-gray-600 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl">
                    <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                      "{study.quote}"
                    </blockquote>
                    <cite className="text-gray-500 text-sm mt-2 block">- {study.founder}, {study.company}</cite>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-900 mb-4">Results Achieved:</h5>
                  <div className="space-y-4">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-1 rounded-full flex-shrink-0 mt-1">
                          <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                        </div>
                        <span className="text-gray-700 font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">8 Weeks</div>
                      <div className="text-emerald-800 font-medium">From Zero to Systematic Sales Process</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all transform hover:scale-105 font-semibold shadow-lg">
            Start Your Success Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default Results;