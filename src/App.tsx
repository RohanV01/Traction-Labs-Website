import React, { useState, useEffect, useRef, FC, ReactNode } from 'react';
import { Menu, X, ArrowRight, CheckCircle, Target, Users, GraduationCap, Search, MessageSquare, Calendar, Linkedin, Twitter, HelpCircle, Clock, TrendingDown, Mail, FileText, Rocket, Satellite, Award, Sparkles, TrendingUp, LucideCrop as LucideProps, Database, BarChart2, Key, Download, Globe, Smartphone, Camera, Share2, Star, Monitor, Palette, ShoppingBag, Phone, MapPin, Shield, Building2, Wrench, Stethoscope, Home, Eye, DollarSign, ThumbsUp, Briefcase } from 'lucide-react';

// === CONFIGURATION: Add your scheduling link here ===
const schedulingLink = "https://calendar.app.google/juqLpxppzGjEkJic8";

// Custom CSS for dark mode professional effects
const DarkModeStyles: FC = () => (
    <style>{`
      /* Professional Dark Mode Animations */
      @keyframes professionalPulse {
        0% {
          transform: scale(1);
          box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.4);
        }
        70% {
          transform: scale(1.02);
          box-shadow: 0 0 20px 25px rgba(79, 70, 229, 0);
        }
        100% {
          transform: scale(1);
          box-shadow: 0 0 0 0 rgba(79, 70, 229, 0);
        }
      }
      .professional-pulse {
        animation: professionalPulse 4s ease-in-out infinite;
      }
      
      /* Dark gradient backgrounds */
      .dark-gradient-bg {
        background: linear-gradient(135deg, #0A0F1E 0%, #1F2937 100%);
      }
      
      /* Professional card hover effects */
      .dark-professional-card {
        transition: all 0.3s ease;
        border: 1px solid rgba(79, 70, 229, 0.2);
        background: #1F2937;
      }
      
      .dark-professional-card:hover {
        transform: translateY(-8px);
        border-color: #4F46E5;
        box-shadow: 0 25px 50px rgba(79, 70, 229, 0.15);
        background: #374151;
      }

      /* Glowing text effect */
      .glow-text {
        text-shadow: 0 0 20px rgba(79, 70, 229, 0.5);
      }

      /* Icon gradient backgrounds */
      .icon-gradient {
        background: linear-gradient(135deg, #4F46E5 0%, #3730A3 100%);
      }

      /* Logo styling */
      .logo-image {
        width: 32px;
        height: 32px;
        object-fit: contain;
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
      <DarkModeStyles />
      <div className="min-h-screen bg-[#0A0F1E] text-white font-sans leading-relaxed relative overflow-x-hidden">
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
        ? 'bg-[#0A0F1E]/95 backdrop-blur-lg border-b border-[#4F46E5]/20 shadow-lg shadow-[#4F46E5]/10'
        : 'bg-[#0A0F1E]/80 border-b border-gray-800/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" onClick={(e) => handleNavClick(e, '#')} className="flex items-center space-x-3">
            <img src="/traction_labs_logo.png" alt="Traction Labs - Digital Marketing for Doctors and Real Estate Companies in India" className="logo-image" />
            <span className="text-2xl font-bold text-white glow-text">
              Traction Labs
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-gray-300 hover:text-[#4F46E5] transition-colors font-semibold text-lg">
                  {link.label}
                </a>
              ))}
            </nav>
            <a href={schedulingLink} target="_blank" rel="noopener noreferrer">
                <button className="bg-[#4F46E5] text-white px-6 py-3 rounded-xl hover:bg-[#3730A3] transition-all shadow-lg shadow-[#4F46E5]/30 font-semibold text-lg transform hover:scale-105">
                    Book a Strategy Call
                </button>
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-[#1F2937] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#1F2937] border-t border-gray-700 shadow-lg rounded-b-xl">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map(link => (
                   <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="block px-3 py-3 text-gray-300 hover:text-[#4F46E5] hover:bg-[#374151] rounded-lg transition-colors text-lg font-semibold">{link.label}</a>
              ))}
               <div className="border-t border-gray-700 pt-4 mt-2">
                 <a href={schedulingLink} target="_blank" rel="noopener noreferrer" className="w-full">
                     <button className="w-full bg-[#4F46E5] text-white px-6 py-3 rounded-xl hover:bg-[#3730A3] transition-all shadow-lg shadow-[#4F46E5]/30 font-semibold text-lg">
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
        { name: 'Get Found Online', icon: Eye, color: 'bg-[#4F46E5]', description: 'Patients & clients discover your practice' },
        { name: 'Build Trust', icon: Shield, color: 'bg-[#059669]', description: 'Professional presence builds credibility' },
        { name: 'Generate Leads', icon: Phone, color: 'bg-[#DC2626]', description: 'More appointments and inquiries' },
        { name: 'Grow Revenue', icon: DollarSign, color: 'bg-[#7C3AED]', description: 'Increased patients and sales' },
    ];

    return (
        <div className="w-full max-w-lg mx-auto">
            <div className="bg-[#1F2937] rounded-2xl shadow-xl border border-[#4F46E5]/20 p-8">
                <h3 className="text-2xl font-bold text-white text-center mb-8">Your Path to Growth</h3>
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
                                    ${isActive ? 'bg-[#374151] shadow-md border-2 border-[#4F46E5]/30' : 'bg-[#1F2937] border border-gray-700'}`}
                            >
                                <div className={`
                                    p-3 rounded-full mr-4 transition-all duration-300 ${stage.color}
                                    ${isPulsing ? 'professional-pulse' : ''}
                                    ${isActive ? 'shadow-lg scale-110' : 'shadow-md'}`
                                }>
                                    <Icon className="h-6 w-6 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h4 className={`font-bold text-lg ${isActive ? 'text-white' : 'text-gray-300'}`}>
                                        {stage.name}
                                    </h4>
                                    <p className="text-gray-400 text-sm">{stage.description}</p>
                                </div>
                                <div className="text-2xl font-bold text-gray-600">
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
      <section className="min-h-screen flex items-center justify-center pt-20 lg:pt-0 dark-gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                <div className="text-center lg:text-left z-10 relative">
                    <AnimatedWrapper>
                      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] glow-text">Traction Labs:</span><br/>
                        Digital Marketing for<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] glow-text">Doctors & Real Estate</span>
                      </h1>
                      <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        We help doctors, clinics, and real estate companies across India get found online, build trust with patients and clients, and grow their business without the tech headaches.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                        <a href={schedulingLink} target="_blank" rel="noopener noreferrer" className="inline-block">
                          <button className="group bg-[#4F46E5] text-white px-8 py-4 rounded-xl hover:bg-[#3730A3] transition-all transform hover:scale-105 inline-flex items-center justify-center text-xl font-bold shadow-xl shadow-[#4F46E5]/30">
                              Book a Strategy Call
                              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </a>
                        <div className="flex items-center justify-center lg:justify-start text-gray-400">
                          <div className="flex -space-x-2 mr-3">
                            <div className="w-8 h-8 bg-[#4F46E5] rounded-full border-2 border-[#1F2937]"></div>
                            <div className="w-8 h-8 bg-[#059669] rounded-full border-2 border-[#1F2937]"></div>
                            <div className="w-8 h-8 bg-[#DC2626] rounded-full border-2 border-[#1F2937]"></div>
                          </div>
                          <span className="text-sm font-medium">Join 500+ happy healthcare & real estate professionals</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-center lg:text-left">
                        <div>
                          <div className="text-2xl font-bold text-white">30 Days</div>
                          <div className="text-gray-400 text-sm">To See Results</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-white">No Risk</div>
                          <div className="text-gray-400 text-sm">Money-Back Guarantee</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-white">India-Wide</div>
                          <div className="text-gray-400 text-sm">Service Coverage</div>
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
        title: "Invisible to Patients & Clients",
        description: "Your competitors show up first when people search for doctors or real estate services online, while your practice stays hidden."
      },
      { 
        icon: Clock, 
        title: "Outdated Online Presence",
        description: "Your website looks unprofessional or doesn't exist, making patients and clients question your credibility and expertise."
      },
      { 
        icon: TrendingDown, 
        title: "Losing to Competition",
        description: "Competitors with better online presence are stealing your patients and clients while charging higher fees."
      },
      { 
        icon: Phone, 
        title: "Not Enough Quality Leads",
        description: "You're not getting enough appointments or inquiries from patients and clients who are ready to choose your services."
      },
    ];

    return (
      <section className="py-20 bg-[#1F2937]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedWrapper className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Are You Losing Patients & Clients Every Day?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              If patients and clients can't find you online or don't trust what they see, they're choosing your competitors instead. 
              Here's what's costing your practice business right now:
            </p>
          </AnimatedWrapper>

          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <AnimatedWrapper key={index} delay={index * 150}>
                    <div className="dark-professional-card p-8 rounded-2xl shadow-lg h-full">
                      <div className="flex items-start space-x-4">
                        <div className="bg-red-500/20 p-4 rounded-xl flex-shrink-0 border border-red-500/30">
                          <Icon className="h-8 w-8 text-red-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-3">
                            {problem.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed text-lg">
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
              <div className="bg-red-500/10 border-2 border-red-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-red-400 mb-4">
                  Every Day You Wait, You Lose More Patients & Clients
                </h3>
                <p className="text-lg text-red-300 leading-relaxed">
                  While you're thinking about it, your competitors are already online capturing the patients and clients that should be yours. 
                  The longer you wait, the further behind you fall in the digital healthcare and real estate market.
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
      description: "Show up at the top when patients search for doctors or clients search for real estate services in your area."
    },
    {
      icon: Globe,
      title: "Professional Website",
      description: "A modern, trustworthy website that converts visitors into patients and clients."
    },
    {
      icon: Star,
      title: "5-Star Reputation",
      description: "Build and manage your online reputation with authentic patient and client reviews."
    },
    {
      icon: Phone,
      title: "More Quality Leads",
      description: "Get more appointments and inquiries from patients and clients who are ready to choose you."
    }
  ];

  return (
    <section className="py-20 bg-[#0A0F1E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedWrapper>
                <div className="inline-flex items-center px-4 py-2 bg-[#4F46E5]/20 border border-[#4F46E5]/30 text-[#4F46E5] rounded-full text-sm font-semibold mb-6">
                <CheckCircle className="w-4 h-4 mr-2" />
                The Traction Labs Solution
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                We Make Your Practice <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] glow-text">The Obvious Choice</span>
                </h2>

                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We don't just build websites. We create a complete digital presence that makes patients and clients choose you over your competitors. From search results to social media, we make sure you look like the professional, trustworthy practice you are.
                </p>

                <div className="space-y-6">
                {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                        <div key={index} className="flex items-start space-x-4 group">
                            <div className="icon-gradient p-3 rounded-xl flex-shrink-0 shadow-lg shadow-[#4F46E5]/20">
                                <Icon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                {benefit.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-lg">
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
                    <div className="bg-[#1F2937] border-2 border-[#4F46E5]/20 rounded-3xl p-8 shadow-xl relative overflow-hidden">
                    <div className="relative">
                        <div className="flex items-center mb-6">
                        <TrendingUp className="h-8 w-8 mr-3 text-[#4F46E5]" />
                        <h3 className="text-2xl font-bold text-white">What This Means For You</h3>
                        </div>
                        <div className="space-y-4 text-gray-300">
                        <div className="flex items-start space-x-3">
                            <ArrowRight className="h-5 w-5 text-[#4F46E5] flex-shrink-0 mt-1" />
                            <span className="text-lg">Your phone rings with qualified patients and clients ready to book</span>
                        </div>
                        <div className="flex items-start space-x-3">
                            <ArrowRight className="h-5 w-5 text-[#4F46E5] flex-shrink-0 mt-1" />
                            <span className="text-lg">You can charge premium fees because patients and clients trust you</span>
                        </div>
                        <div className="flex items-start space-x-3">
                            <ArrowRight className="h-5 w-5 text-[#4F46E5] flex-shrink-0 mt-1" />
                            <span className="text-lg">You spend less time marketing and more time serving patients and clients</span>
                        </div>
                         <div className="flex items-start space-x-3">
                            <ArrowRight className="h-5 w-5 text-[#4F46E5] flex-shrink-0 mt-1" />
                            <span className="text-lg">Your practice grows consistently, month after month</span>
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
      description: "Modern, mobile-friendly websites that build trust and convert visitors into patients and clients.",
      features: ["Mobile-responsive design", "Fast loading speeds", "Easy appointment booking", "Professional photography"]
    },
    {
      icon: Search,
      title: "Local SEO Optimization",
      description: "Get found first when patients search for doctors or clients search for real estate services in your area.",
      features: ["Google My Business optimization", "Local keyword rankings", "Medical/Real estate directories", "Map pack visibility"]
    },
    {
        icon: Star,
        title: "Reputation Management",
        description: "Build and protect your online reputation with authentic patient and client reviews.",
        features: ["Review generation campaigns", "Review response management", "Reputation monitoring", "Crisis management"]
    },
    {
      icon: Smartphone,
      title: "Social Media Presence",
      description: "Professional social media that showcases your expertise and builds community trust.",
      features: ["Content creation", "Regular posting", "Community engagement", "Local networking"]
    },
    {
      icon: Target,
      title: "Digital Advertising",
      description: "Targeted ads that bring qualified patients and clients directly to your practice.",
      features: ["Google Ads management", "Facebook advertising", "Local targeting", "ROI tracking"]
    },
    {
      icon: BarChart2,
      title: "Performance Tracking",
      description: "Clear reports showing exactly how your investment is growing your practice.",
      features: ["Monthly performance reports", "Lead tracking", "ROI analysis", "Growth recommendations"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#1F2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedWrapper className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You Need to Dominate Your Local Market
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
           We handle all the technical stuff so you can focus on what you do best - treating patients and serving clients.
          </p>
        </AnimatedWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
                <AnimatedWrapper key={index} delay={index * 100}>
                  <div className="dark-professional-card p-8 rounded-2xl shadow-lg h-full flex flex-col">
                    <div className="icon-gradient p-4 rounded-xl w-fit mb-6 shadow-lg shadow-[#4F46E5]/20">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4 flex-grow text-lg">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="h-4 w-4 text-[#4F46E5] mr-2 flex-shrink-0" />
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
            description: "We analyze your current online presence and identify exactly what's holding your practice back from attracting more patients and clients.",
            icon: Search,
            duration: "30 Minutes"
        },
        {
            name: 'Custom Growth Plan',
            description: "We create a personalized digital marketing strategy to help your practice get found, build trust, and attract more patients and clients.",
            icon: Target,
            duration: "Week 1"
        },
        {
            name: 'Professional Implementation',
            description: "Our team builds your new website, optimizes your online presence, and launches your digital marketing campaigns.",
            icon: Rocket,
            duration: "Week 2-4"
        },
        {
            name: 'Results & Growth',
            description: "You start getting more appointments, more patients and clients, and more revenue while we continue optimizing your results.",
            icon: TrendingUp,
            duration: "Month 1+"
        },
    ];

    return (
        <section id="process" className="py-20 bg-[#0A0F1E] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedWrapper className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        How We Grow Your Practice
                    </h2>
                    <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        Our proven process has helped hundreds of doctors, clinics, and real estate professionals across India attract more patients and clients while increasing their revenue.
                    </p>
                </AnimatedWrapper>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <AnimatedWrapper key={step.name} delay={index * 150}>
                                <div className="dark-professional-card p-8 rounded-2xl shadow-lg h-full">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="icon-gradient p-4 rounded-xl shadow-lg shadow-[#4F46E5]/20">
                                            <Icon className="h-8 w-8 text-white" />
                                        </div>
                                        <span className="text-sm font-bold text-[#4F46E5] bg-[#4F46E5]/20 px-3 py-1 rounded-full border border-[#4F46E5]/30">{step.duration}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{step.name}</h3>
                                    <p className="text-gray-300 leading-relaxed text-lg">{step.description}</p>
                                </div>
                            </AnimatedWrapper>
                        )
                    })}
                </div>
                 
                 <AnimatedWrapper delay={600}>
                     <div className="text-center">
                         <div className="bg-[#4F46E5]/10 border-2 border-[#4F46E5]/30 rounded-2xl p-8 max-w-3xl mx-auto">
                             <h3 className="text-2xl font-bold text-[#4F46E5] mb-4">
                                 Ready to Start Growing Your Practice?
                             </h3>
                             <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                                 Book your strategy call today and discover exactly how we can help your practice attract more patients and clients.
                             </p>
                             <a href={schedulingLink} target="_blank" rel="noopener noreferrer">
                                 <button className="bg-[#4F46E5] text-white px-8 py-4 rounded-xl hover:bg-[#3730A3] transition-all shadow-lg shadow-[#4F46E5]/30 font-bold text-lg transform hover:scale-105">
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
      <section className="bg-gradient-to-br from-[#4F46E5] to-[#3730A3] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedWrapper>
                <div className="text-white">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
                        Stop Losing Patients & Clients to Your Competition
                    </h2>
                    <p className="text-xl mb-8 leading-relaxed opacity-90">
                        Every day you wait is another day your competitors are capturing the patients and clients that should be yours. 
                        Book your strategy call and discover exactly how to dominate your local healthcare and real estate market.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <a href={schedulingLink} target="_blank" rel="noopener noreferrer" className="inline-block">
                            <button className="group bg-white text-[#4F46E5] px-8 py-4 rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center text-xl font-bold shadow-lg mx-auto">
                                Book a Strategy Call
                                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </a>
                        <button className="group border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-[#4F46E5] transition-all flex items-center text-xl font-bold mx-auto">
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
    <footer className="bg-[#0A0F1E] text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/traction_labs_logo.png" alt="Traction Labs - Digital Marketing for Doctors and Real Estate Companies in India" className="logo-image" />
              <span className="text-2xl font-bold glow-text">Traction Labs</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed text-lg">
              We help doctors, clinics, and real estate professionals across India build a powerful digital presence that attracts patients and clients, builds trust, and drives growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-[#1F2937] p-3 rounded-xl hover:bg-[#4F46E5] transition-all border border-gray-700 hover:border-[#4F46E5]">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="bg-[#1F2937] p-3 rounded-xl hover:bg-[#4F46E5] transition-all border border-gray-700 hover:border-[#4F46E5]">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#4F46E5]">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-[#4F46E5] transition-colors">Website Design</a></li>
              <li><a href="#" className="hover:text-[#4F46E5] transition-colors">Local SEO</a></li>
              <li><a href="#" className="hover:text-[#4F46E5] transition-colors">Reputation Management</a></li>
              <li><a href="#" className="hover:text-[#4F46E5] transition-colors">Social Media</a></li>
              <li><a href="#" className="hover:text-[#4F46E5] transition-colors">Digital Advertising</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#4F46E5]">Contact</h3>
            <ul className="space-y-3 text-gray-400">
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
                <span>Serving Doctors & Real Estate Professionals Across India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Traction Labs. All rights reserved. Digital Marketing for Healthcare & Real Estate Professionals in India.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#4F46E5] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#4F46E5] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default App;