import React, { useState, useEffect, useRef, FC, ReactNode } from 'react';
import { Zap, Menu, X, ArrowRight, CheckCircle, Target, Users, GraduationCap, Search, MessageSquare, Calendar, Linkedin, Twitter, HelpCircle, Clock, TrendingDown, Mail, FileText, Rocket, Satellite, Award, Sparkles, TrendingUp, LucideCrop as LucideProps, Database, BarChart2, Key, Download, Globe, Smartphone, Camera, Share2, Star, Monitor, Palette, ShoppingBag, Phone, MapPin, Shield, Building2, Wrench, Stethoscope, Home, Eye, DollarSign, ThumbsUp, Briefcase } from 'lucide-react';

// === CONFIGURATION: Add your scheduling link here ===
const schedulingLink = "https://zcal.co/tractionlabs/consultation";

// Custom CSS for trustworthy effects
const TrustworthyStyles: FC = () => (
    <style>{`
      /* Trustworthy Growth Animation */
      @keyframes trustPulse {
        0% {
          transform: scale(1);
          box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.3);
        }
        70% {
          transform: scale(1.03);
          box-shadow: 0 0 15px 20px rgba(59, 130, 246, 0);
        }
        100% {
          transform: scale(1);
          box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
        }
      }
      .trust-pulse {
        animation: trustPulse 4s ease-in-out infinite;
      }
      
      /* Subtle gradient background */
      .gradient-bg {
        background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
      }
      
      /* Professional card hover */
      .professional-card {
        transition: all 0.3s ease;
        border: 2px solid transparent;
      }
      
      .professional-card:hover {
        transform: translateY(-8px);
        border-color: #3b82f6;
        box-shadow: 0 20px 40px rgba(0,0,0,0.1);
      }
    `}</style>
  );

// HELPER HOOK for scroll animations
const useOnScreen = (options: IntersectionObserverInit): [React.RefObject<HTMLDivElement>, boolean] => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return [ref, isVisible];
};

// AnimatedWrapper Component for scroll animations
interface AnimatedWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedWrapper: FC<AnimatedWrapperProps> = ({ children, className = '', delay = 0 }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div
            ref={ref}
            className={`${className} transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

// Main App Component
const App: FC = () => {
  return (
    <>
      <TrustworthyStyles />
      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans leading-relaxed relative overflow-x-hidden">
        <Header />
        <main className="relative z-10">
            <>
              <Hero />
              <Problem />
              <Solution />
              <Services />
              <Process />
              <CTA />
            </>
        </main>
        <Footer />
      </div>
    </>
  );
};

// =================================
// SUB-COMPONENTS
// =================================

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Our Services' },
    { href: '#process', label: 'How We Help' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
  }

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-lg'
        : 'bg-white border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" onClick={(e) => handleNavClick(e, '#')} className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-3 rounded-xl shadow-lg">
              <Zap className="h-7 w-7 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-800">
              Traction Labs
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-slate-700 hover:text-blue-600 transition-colors font-semibold text-lg">
                  {link.label}
                </a>
              ))}
            </nav>
            <a href={schedulingLink} target="_blank" rel="noopener noreferrer">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all shadow-lg font-semibold text-lg transform hover:scale-105">
                    Book a Strategy Call
                </button>
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map(link => (
                   <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="block px-3 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors text-lg font-semibold">{link.label}</a>
              ))}
               <div className="border-t border-slate-200 pt-4 mt-2">
                 <a href={schedulingLink} target="_blank" rel="noopener noreferrer" className="w-full">
                     <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all shadow-lg font-semibold text-lg">
                         Book a Strategy Call
                     </button>
                 </a>
               </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Business Success Visualization
const BusinessSuccessChart: FC = () => {
    const [activeStage, setActiveStage] = useState<string | null>(null);

    const stages = [
        { name: 'Get Found Online', icon: Eye, color: 'bg-blue-500', description: 'Customers discover your business' },
        { name: 'Build Trust', icon: Shield, color: 'bg-green-500', description: 'Professional presence builds credibility' },
        { name: 'Generate Leads', icon: Phone, color: 'bg-orange-500', description: 'More calls and inquiries' },
        { name: 'Grow Revenue', icon: DollarSign, color: 'bg-purple-500', description: 'Increased sales and profits' },
    ];

    return (
        <div className="w-full max-w-lg mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
                <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">Your Path to Growth</h3>
                <div className="space-y-6">
                    {stages.map((stage, index) => {
                        const isPulsing = stage.name === 'Grow Revenue';
                        const isActive = activeStage === stage.name || isPulsing;
                        const Icon = stage.icon;

                        return (
                            <div
                                key={stage.name}
                                onMouseEnter={() => setActiveStage(stage.name)}
                                onMouseLeave={() => setActiveStage(null)}
                                className={`flex items-center p-4 rounded-xl transition-all duration-300 cursor-pointer
                                    ${isActive ? 'bg-slate-50 shadow-md border-2 border-blue-200' : 'bg-white border border-slate-100'}`}
                            >
                                <div className={`
                                    p-3 rounded-full mr-4 transition-all duration-300 ${stage.color}
                                    ${isPulsing ? 'trust-pulse' : ''}
                                    ${isActive ? 'shadow-lg scale-110' : 'shadow-md'}`
                                }>
                                    <Icon className="h-6 w-6 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h4 className={`font-bold text-lg ${isActive ? 'text-slate-800' : 'text-slate-700'}`}>
                                        {stage.name}
                                    </h4>
                                    <p className="text-slate-600 text-sm">{stage.description}</p>
                                </div>
                                <div className="text-2xl font-bold text-slate-400">
                                    {index + 1}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const Hero: FC = () => {
    return (
      <section className="min-h-screen flex items-center justify-center pt-20 lg:pt-0 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                <div className="text-center lg:text-left z-10 relative">
                    <AnimatedWrapper>
                      <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                        Grow Your Business<br/> 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">The Smart Way</span>
                      </h1>
                      <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        We help Small Business Owners's get found online, build trust with customers, and grow their business without the tech headaches.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                        <a href={schedulingLink} target="_blank" rel="noopener noreferrer" className="inline-block">
                          <button className="group bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all transform hover:scale-105 inline-flex items-center justify-center text-xl font-bold shadow-xl">
                              Book a Strategy Call
                              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </a>
                        <div className="flex items-center justify-center lg:justify-start text-slate-600">
                          <div className="flex -space-x-2 mr-3">
                            <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                            <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                            <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-white"></div>
                          </div>
                          <span className="text-sm font-medium">Join 500+ happy business owners</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-center lg:text-left">
                        <div>
                          <div className="text-2xl font-bold text-slate-800">30 Days</div>
                          <div className="text-slate-600 text-sm">To See Results</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-slate-800">No Risk</div>
                          <div className="text-slate-600 text-sm">Money-Back Guarantee</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-slate-800">Local</div>
                          <div className="text-slate-600 text-sm">Business Experts</div>
                        </div>
                      </div>
                    </AnimatedWrapper>
                </div>
                <div className="relative mt-16 lg:mt-0 flex items-center justify-center">
                    <div className="relative z-10 w-full">
                       <BusinessSuccessChart />
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
};

const Problem: FC = () => {
    const problems = [
      { 
        icon: Eye, 
        title: "Invisible to Customers",
        description: "Your competitors show up first when customers search online, while your business stays hidden."
      },
      { 
        icon: Clock, 
        title: "Outdated Online Presence",
        description: "Your website looks unprofessional or doesn't exist, making customers question your credibility."
      },
      { 
        icon: TrendingDown, 
        title: "Losing to Competition",
        description: "Competitors with better online presence are stealing your customers and charging higher prices."
      },
      { 
        icon: Phone, 
        title: "Not Enough Quality Leads",
        description: "You're not getting enough phone calls from customers who are ready to buy your services."
      },
    ];

    return (
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedWrapper className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Are You Losing Customers Every Day?
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              If customers can't find you online or don't trust what they see, they're choosing your competitors instead. 
              Here's what's costing you business right now:
            </p>
          </AnimatedWrapper>

          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <AnimatedWrapper key={index} delay={index * 150}>
                    <div className="professional-card bg-white p-8 rounded-2xl shadow-lg h-full">
                      <div className="flex items-start space-x-4">
                        <div className="bg-red-100 p-4 rounded-xl flex-shrink-0">
                          <Icon className="h-8 w-8 text-red-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-3">
                            {problem.title}
                          </h3>
                          <p className="text-slate-600 leading-relaxed text-lg">
                            {problem.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </AnimatedWrapper>
                )
            })}
          </div>

          <AnimatedWrapper delay={600}>
            <div className="mt-16 text-center">
              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-red-800 mb-4">
                  Every Day You Wait, You Lose More Customers
                </h3>
                <p className="text-lg text-red-700 leading-relaxed">
                  While you're thinking about it, your competitors are already online capturing the customers that should be yours. 
                  The longer you wait, the further behind you fall.
                </p>
              </div>
            </div>
          </AnimatedWrapper>
        </div>
      </section>
    );
};

const Solution: FC = () => {
  const benefits = [
    {
      icon: Search,
      title: "Get Found First",
      description: "Show up at the top when customers search for your services in your area."
    },
    {
      icon: Globe,
      title: "Professional Website",
      description: "A modern, trustworthy website that converts visitors into paying customers."
    },
    {
      icon: Star,
      title: "5-Star Reputation",
      description: "Build and manage your online reputation with authentic customer reviews."
    },
    {
      icon: Phone,
      title: "More Quality Leads",
      description: "Get more phone calls from customers who are ready to hire you."
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedWrapper>
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 border border-blue-200 text-blue-800 rounded-full text-sm font-semibold mb-6">
                <CheckCircle className="w-4 h-4 mr-2" />
                The Traction Labs Solution
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                We Make Your Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">The Obvious Choice</span>
                </h2>

                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                We don't just build websites. We create a complete digital presence that makes customers choose you over your competitors. From search results to social media, we make sure you look like the professional, trustworthy business you are.
                </p>

                <div className="space-y-6">
                {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                        <div key={index} className="flex items-start space-x-4 group">
                            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-xl flex-shrink-0 shadow-lg">
                                <Icon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">
                                {benefit.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                {benefit.description}
                                </p>
                            </div>
                        </div>
                    )
                })}
                </div>
            </AnimatedWrapper>

            <AnimatedWrapper delay={200}>
                <div className="relative">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-3xl p-8 shadow-xl relative overflow-hidden">
                    <div className="relative">
                        <div className="flex items-center mb-6">
                        <TrendingUp className="h-8 w-8 mr-3 text-blue-600" />
                        <h3 className="text-2xl font-bold text-slate-900">What This Means For You</h3>
                        </div>
                        <div className="space-y-4 text-slate-700">
                        <div className="flex items-start space-x-3">
                            <ArrowRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                            <span className="text-lg">Your phone rings with qualified customers ready to buy</span>
                        </div>
                        <div className="flex items-start space-x-3">
                            <ArrowRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                            <span className="text-lg">You can charge premium prices because customers trust you</span>
                        </div>
                        <div className="flex items-start space-x-3">
                            <ArrowRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                            <span className="text-lg">You spend less time chasing customers and more time serving them</span>
                        </div>
                         <div className="flex items-start space-x-3">
                            <ArrowRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                            <span className="text-lg">Your business grows consistently, month after month</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
};

const Services: FC = () => {
  const services = [
    {
      icon: Globe,
      title: "Professional Website Design",
      description: "Modern, mobile-friendly websites that build trust and convert visitors into customers.",
      features: ["Mobile-responsive design", "Fast loading speeds", "Easy contact forms", "Professional photography"]
    },
    {
      icon: Search,
      title: "Local Search Optimization",
      description: "Get found first when customers search for your services in your area.",
      features: ["Google My Business optimization", "Local keyword rankings", "Online directory listings", "Map pack visibility"]
    },
    {
        icon: Star,
        title: "Reputation Management",
        description: "Build and protect your online reputation with authentic customer reviews.",
        features: ["Review generation campaigns", "Review response management", "Reputation monitoring", "Crisis management"]
    },
    {
      icon: Smartphone,
      title: "Social Media Presence",
      description: "Professional social media that showcases your work and builds community trust.",
      features: ["Content creation", "Regular posting", "Community engagement", "Local networking"]
    },
    {
      icon: Target,
      title: "Digital Advertising",
      description: "Targeted ads that bring qualified customers directly to your business.",
      features: ["Google Ads management", "Facebook advertising", "Local targeting", "ROI tracking"]
    },
    {
      icon: BarChart2,
      title: "Performance Tracking",
      description: "Clear reports showing exactly how your investment is growing your business.",
      features: ["Monthly performance reports", "Lead tracking", "ROI analysis", "Growth recommendations"]
    }
  ];

  return (
    <section id="services" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedWrapper className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Everything You Need to Dominate Your Market
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
           We handle all the technical stuff so you can focus on what you do best - running your business.
          </p>
        </AnimatedWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
                <AnimatedWrapper key={index} delay={index * 100}>
                  <div className="professional-card bg-white p-8 rounded-2xl shadow-lg h-full flex flex-col">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-xl w-fit mb-6 shadow-lg">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4 flex-grow text-lg">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedWrapper>
            )
          })}
        </div>
      </div>
    </section>
  );
};

const Process: FC = () => {
    const steps = [
        {
            name: 'Strategy Call',
            description: "We analyze your current online presence and identify exactly what's holding your business back.",
            icon: Search,
            duration: "30 Minutes"
        },
        {
            name: 'Custom Growth Plan',
            description: "We create a personalized strategy to help your business get found, build trust, and attract more customers.",
            icon: Target,
            duration: "Week 1"
        },
        {
            name: 'Professional Implementation',
            description: "Our team builds your new website, optimizes your online presence, and launches your digital marketing.",
            icon: Rocket,
            duration: "Week 2-4"
        },
        {
            name: 'Results & Growth',
            description: "You start getting more calls, more customers, and more revenue while we continue optimizing your results.",
            icon: TrendingUp,
            duration: "Month 1+"
        },
    ];

    return (
        <section id="process" className="py-20 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedWrapper className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        How We Grow Your Business
                    </h2>
                    <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                        Our proven process has helped hundreds of small businesses attract more customers and increase their revenue.
                    </p>
                </AnimatedWrapper>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <AnimatedWrapper key={step.name} delay={index * 150}>
                                <div className="professional-card bg-white p-8 rounded-2xl shadow-lg h-full">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-xl shadow-lg">
                                            <Icon className="h-8 w-8 text-white" />
                                        </div>
                                        <span className="text-sm font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">{step.duration}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.name}</h3>
                                    <p className="text-slate-600 leading-relaxed text-lg">{step.description}</p>
                                </div>
                            </AnimatedWrapper>
                        )
                    })}
                </div>
                 
                 <AnimatedWrapper delay={600}>
                     <div className="text-center">
                         <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 max-w-3xl mx-auto">
                             <h3 className="text-2xl font-bold text-blue-800 mb-4">
                                 Ready to Start Growing?
                             </h3>
                             <p className="text-lg text-blue-700 mb-6 leading-relaxed">
                                 Book your strategy call today and discover exactly how we can help your business attract more customers.
                             </p>
                             <a href={schedulingLink} target="_blank" rel="noopener noreferrer">
                                 <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg font-bold text-lg transform hover:scale-105">
                                     Book a Strategy Call
                                 </button>
                             </a>
                         </div>
                     </div>
                 </AnimatedWrapper>
            </div>
        </section>
    )
};

const CTA: FC = () => {
    return (
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedWrapper>
                <div className="text-white">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Stop Losing Customers to Your Competition
                    </h2>
                    <p className="text-xl mb-8 leading-relaxed opacity-90">
                        Every day you wait is another day your competitors are capturing the customers that should be yours. 
                        Book your strategy call and discover exactly how to dominate your local market.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <a href={schedulingLink} target="_blank" rel="noopener noreferrer" className="inline-block">
                            <button className="group bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center text-xl font-bold shadow-lg mx-auto">
                                Book a Strategy Call
                                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </a>
                        <button className="group border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all flex items-center text-xl font-bold mx-auto">
                            <Phone className="mr-3 h-6 w-6" />
                            Call: +91 9321390180
                        </button>
                    </div>

                    <div className="flex items-center justify-center space-x-8 text-sm opacity-80">
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2" />
                          100% Free Call
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2" />
                          No Obligation
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2" />
                          Results Guaranteed
                        </div>
                    </div>
                </div>
            </AnimatedWrapper>
        </div>
      </section>
    );
};

const Footer: FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-3 rounded-xl shadow-lg">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <span className="text-2xl font-bold">Traction Labs</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md leading-relaxed text-lg">
              We help small business owners build a powerful digital presence that attracts customers, builds trust, and drives growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-3 rounded-xl hover:bg-blue-600 transition-all">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="bg-slate-800 p-3 rounded-xl hover:bg-blue-600 transition-all">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-400">Services</h3>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Website Design</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Local SEO</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Reputation Management</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Social Media</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Digital Advertising</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-400">Contact</h3>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>rohanvyas@tractionlabs.in</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>+91 9321390180</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <span>Helping Small Businesses Nationwide</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2024 Traction Labs. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-slate-400">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default App;