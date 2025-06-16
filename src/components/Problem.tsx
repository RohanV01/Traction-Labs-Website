import React from 'react';
import { HelpCircle, Target, Clock, TrendingDown } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: HelpCircle,
      title: "Don't Know Where to Start",
      description: "You've built something amazing but have no idea who your ideal customers are or how to reach them.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Shooting in the Dark",
      description: "Reaching out to everyone hoping something sticks, but getting crickets in response.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Clock,
      title: "Time Wasted on Wrong Prospects",
      description: "Spending hours researching and reaching out to people who will never buy from you.",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: TrendingDown,
      title: "No Systematic Approach",
      description: "Random outreach efforts with no process, tracking, or way to improve and scale.",
      color: "from-yellow-500 to-amber-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Early-Stage Founder's Sales Dilemma
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            You know your product is great, but getting those first customers feels impossible. 
            Does this sound familiar?
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-r ${problem.color} p-3 rounded-xl w-fit mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <problem.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-2xl mx-auto hover:shadow-xl transition-shadow">
            <p className="text-lg text-gray-700 italic mb-4 leading-relaxed">
              "I spent 6 months building the perfect product, but I had no idea how to get my first customer. 
              I was reaching out to everyone and getting nowhere."
            </p>
            <p className="text-gray-500 font-medium">- Sarah, SaaS Founder (before working with us)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;