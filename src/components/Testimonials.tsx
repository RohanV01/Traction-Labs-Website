import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      position: "Founder & CEO",
      company: "DataFlow Solutions",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      quote: "I had no idea who my customers were or how to reach them. Traction Labs helped me understand my market and build a systematic approach to sales. Now I have a clear process that works.",
      rating: 5,
      results: "47 qualified calls in first month"
    },
    {
      name: "Marcus Johnson",
      position: "Co-founder",
      company: "HealthTech Pro",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      quote: "They didn't just book calls - they taught us how healthcare sales actually work. The strategic guidance was invaluable for a first-time founder like me.",
      rating: 5,
      results: "$180K pipeline generated"
    },
    {
      name: "Emily Rodriguez",
      position: "Founder",
      company: "EcoTech Solutions",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      quote: "The ICP development process was eye-opening. I thought I knew my customers, but Traction Labs helped me discover segments I never considered. Game-changer for our business.",
      rating: 5,
      results: "3 new customer segments identified"
    },
    {
      name: "David Park",
      position: "CEO",
      company: "AI Solutions Inc",
      image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      quote: "The team training was fantastic. Now my sales team can replicate the process independently. It's not just about getting calls - it's about building capability.",
      rating: 5,
      results: "Team now books 20+ calls monthly"
    },
    {
      name: "Lisa Thompson",
      position: "Founder",
      company: "FinTech Startup",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      quote: "As a technical founder, I had zero sales experience. Traction Labs gave me the confidence and knowledge to have meaningful conversations with prospects.",
      rating: 5,
      results: "First enterprise customer acquired"
    },
    {
      name: "Alex Kim",
      position: "Co-founder",
      company: "B2B Platform",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      quote: "The strategic approach made all the difference. Instead of random outreach, we now have a systematic process that consistently delivers results.",
      rating: 5,
      results: "Consistent 15% response rate"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-emerald-100/30 to-teal-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-teal-100/30 to-emerald-100/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Founders Say About Working With Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've helped 50+ early-stage founders build their sales foundations and achieve sustainable growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <Quote className="h-8 w-8 text-emerald-500 mb-4 opacity-60" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 px-4 py-2 rounded-xl mb-6 text-center border border-emerald-100">
                <span className="text-emerald-800 font-semibold text-sm">
                  {testimonial.results}
                </span>
              </div>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-emerald-100"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.position}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-8 rounded-2xl text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Join These Success Stories?
              </h3>
              <p className="text-emerald-100 mb-6 text-lg">
                Book a free strategy call and let's discuss how we can help you build your sales foundation.
              </p>
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold shadow-lg">
                Book Free Strategy Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;