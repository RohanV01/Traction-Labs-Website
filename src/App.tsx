import React, { useState, useEffect, useRef, FC, ReactNode } from 'react';
import { BarChart3, Menu, X, ArrowRight, CheckCircle, Target, Users, GraduationCap, Search, MessageSquare, Calendar, Linkedin, Twitter, HelpCircle, Clock, TrendingDown, Mail, FileText, Rocket, Satellite, Award, Sparkles, TrendingUp, Database, BarChart2, Key, Download, Globe, Smartphone, Camera, Share2, Star, Monitor, Palette, ShoppingBag, Phone, MapPin, Shield, Building2, Wrench, Stethoscope, Home, Eye, DollarSign, ThumbsUp, Briefcase } from 'lucide-react';

// === CONFIGURATION: Add your scheduling link here ===
const schedulingLink = "https://calendar.app.google/juqLpxppzGjEkJic8";

// Particle Component
const ParticleBackground: FC = () => {
  const [particles, setParticles] = useState<Array<{id: number, left: number, delay: number}>>([]);

  useEffect(() => {
    const particleArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 20
    }));
    setParticles(particleArray);
  }, []);

  return (
    <div className="particles">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
    </div>
  );
};

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
  animation?: 'slide-up' | 'slide-left' | 'slide-right' | 'fade';
}

const AnimatedWrapper: FC<AnimatedWrapperProps> = ({ 
  children, 
  className = '', 
  delay = 0, 
  animation = 'slide-up' 
}) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  
  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    switch (animation) {
      case 'slide-left': return 'animate-slide-in-left';
      case 'slide-right': return 'animate-slide-in-right';
      case 'slide-up': return 'animate-slide-in-up';
      default: return 'animate-slide-in-up';
    }
  };

  return (
    <div
      ref={ref}
      className={`${className} ${getAnimationClass()}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Main App Component
const App: FC = () => {
  return (
    <div className="min-h-screen animated-gradient text-white font-sans leading-relaxed relative overflow-x-hidden">
      <ParticleBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Problem />
        <Solution />
        <Services />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
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
        ? 'glass backdrop-blur-xl'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" onClick={(e) => handleNavClick(e, '#')} className="flex items-center space-x-3 group">
            <div className="glass-card p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform animate-pulse-glow">
              <BarChart3 className="h-7 w-7 text-purple-300" />
            </div>
            <span className="text-2xl font-bold text-gradient">
              Traction Labs
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-purple-100 hover:text-white transition-colors font-semibold text-lg hover:scale-105 transform duration-200">
                  {link.label}
                </a>
              ))}
            </nav>
            <a href={schedulingLink} target="_blank" rel="noopener noreferrer">
              <button className="glass-button px-6 py-3 rounded-xl hover:scale-105 transition-all shadow-lg font-semibold text-lg text-white">
                Book a Strategy Call
              </button>
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg glass hover:glass-card transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden glass-card rounded-b-xl shadow-lg animate-slide-in-up">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="block px-3 py-3 text-purple-100 hover:text-white hover:glass-dark rounded-lg transition-all text-lg font-semibold">{link.label}</a>
              ))}
              <div className="border-t border-white/20 pt-4 mt-2">
                <a href={schedulingLink} target="_blank" rel="noopener noreferrer" className="w-full">
                  <button className="w-full glass-button px-6 py-3 rounded-xl hover:scale-105 transition-all shadow-lg font-semibold text-lg text-white">
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
    { name: 'Get Found Online', icon: Eye, color: 'from-purple-500 to-pink-500', description: 'Customers discover your business' },
    { name: 'Build Trust', icon: Shield, color: 'from-pink-500 to-rose-500', description: 'Professional presence builds credibility' },
    { name: 'Generate Leads', icon: Phone, color: 'from-rose-500 to-orange-500', description: 'More calls and inquiries' },
    { name: 'Grow Revenue', icon: DollarSign, color: 'from-orange-500 to-yellow-500', description: 'Increased sales and profits' },
  ];

  return (
    <div className="w-full max-w-lg mx-auto animate-float">
      <div className="glass-card rounded-2xl shadow-xl p-8">
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
                className={`flex items-center p-4 rounded-xl transition-all duration-300 cursor-pointer hover-lift
                  ${isActive ? 'glass-card scale-105' : 'glass'}`}
              >
                <div className={`
                  p-3 rounded-full mr-4 transition-all duration-300 bg-gradient-to-r ${stage.color}
                  ${isPulsing ? 'animate-pulse-glow' : ''}
                  ${isActive ? 'shadow-lg scale-110' : 'shadow-md'}`
                }>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className={`font-bold text-lg ${isActive ? 'text-white' : 'text-purple-100'}`}>
                    {stage.name}
                  </h4>
                  <p className="text-purple-200 text-sm">{stage.description}</p>
                </div>
                <div className="text-2xl font-bold text-purple-300">
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
    <section className="min-h-screen flex items-center justify-center pt-20 lg:pt-0 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-float morphing-shape"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-float-reverse morphing-shape"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="text-center lg:text-left z-10 relative">
            <AnimatedWrapper animation="slide-left">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Grow Your Business<br/> 
                <span className="text-gradient">The Smart Way</span>
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                We help Small Business Owners get found online, build trust with customers, and grow their business without the tech headaches.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a href={schedulingLink} target="_blank" rel="noopener noreferrer" className="inline-block">
                  <button className="group glass-button px-8 py-4 rounded-xl hover:scale-105 transition-all inline-flex items-center justify-center text-xl font-bold shadow-xl text-white">
                    Book a Strategy Call
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
                <div className="flex items-center justify-center lg:justify-start text-purple-200">
                  <div className="flex -space-x-2 mr-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-sm font-medium">Join 500+ happy business owners</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center lg:text-left">
                <div className="glass p-4 rounded-xl hover-lift">
                  <div className="text-2xl font-bold text-white">30 Days</div>
                  <div className="text-purple-200 text-sm">To See Results</div>
                </div>
                <div className="glass p-4 rounded-xl hover-lift">
                  <div className="text-2xl font-bold text-white">No Risk</div>
                  <div className="text-purple-200 text-sm">Money-Back Guarantee</div>
                </div>
                <div className="glass p-4 rounded-xl hover-lift">
                  <div className="text-2xl font-bold text-white">Local</div>
                  <div className="text-purple-200 text-sm">Business Experts</div>
                </div>
              </div>
            </AnimatedWrapper>
          </div>
          <div className="relative mt-16 lg:mt-0 flex items-center justify-center">
            <AnimatedWrapper animation="slide-right" delay={300}>
              <BusinessSuccessChart />
            </AnimatedWrapper>
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
      description: "Your competitors show up first when customers search online, while your business stays hidden.",
      color: "from-red-500 to-pink-500"
    },
    { 
      icon: Clock, 
      title: "Outdated Online Presence",
      description: "Your website looks unprofessional or doesn't exist, making customers question your credibility.",
      color: "from-orange-500 to-red-500"
    },
    { 
      icon: TrendingDown, 
      title: "Losing to Competition",
      description: "Competitors with better online presence are stealing your customers and charging higher prices.",
      color: "from-yellow-500 to-orange-500"
    },
    { 
      icon: Phone, 
      title: "Not Enough Quality Leads",
      description: "You're not getting enough phone calls from customers who are ready to buy your services.",
      color: "from-pink-500 to-purple-500"
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedWrapper className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Are You Losing Customers Every Day?
          </h2>
          <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            If customers can't find you online or don't trust what they see, they're choosing your competitors instead. 
            Here's what's costing you business right now:
          </p>
        </AnimatedWrapper>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <AnimatedWrapper key={index} delay={index * 150} animation="slide-up">
                <div className="glass-card p-8 rounded-2xl shadow-lg h-full hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className={`bg-gradient-to-r ${problem.color} p-4 rounded-xl flex-shrink-0 shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {problem.title}
                      </h3>
                      <p className="text-purple-100 leading-relaxed text-lg">
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
            <div className="glass-card p-8 max-w-4xl mx-auto rounded-2xl border border-red-400/30">
              <h3 className="text-2xl font-bold text-red-300 mb-4">
                Every Day You Wait, You Lose More Customers
              </h3>
              <p className="text-lg text-red-200 leading-relaxed">
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
      description: "Show up at the top when customers search for your services in your area.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Professional Website",
      description: "A modern, trustworthy website that converts visitors into paying customers.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Star,
      title: "5-Star Reputation",
      description: "Build and manage your online reputation with authentic customer reviews.",
      color: "from-rose-500 to-orange-500"
    },
    {
      icon: Phone,
      title: "More Quality Leads",
      description: "Get more phone calls from customers who are ready to hire you.",
      color: "from-orange-500 to-yellow-500"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedWrapper animation="slide-left">
            <div className="inline-flex items-center px-4 py-2 glass text-purple-200 rounded-full text-sm font-semibold mb-6">
              <CheckCircle className="w-4 h-4 mr-2" />
              The Traction Labs Solution
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              We Make Your Business <span className="text-gradient">The Obvious Choice</span>
            </h2>

            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              We don't just build websites. We create a complete digital presence that makes customers choose you over your competitors. From search results to social media, we make sure you look like the professional, trustworthy business you are.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className={`bg-gradient-to-br ${benefit.color} p-3 rounded-xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-purple-100 leading-relaxed text-lg">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper delay={200} animation="slide-right">
            <div className="relative">
              <div className="glass-card rounded-3xl p-8 shadow-xl relative overflow-hidden animate-float">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full -translate-y-16 translate-x-16 morphing-shape"></div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <TrendingUp className="h-8 w-8 mr-3 text-purple-300" />
                    <h3 className="text-2xl font-bold text-white">What This Means For You</h3>
                  </div>
                  <div className="space-y-4 text-purple-100">
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                      <span className="text-lg">Your phone rings with qualified customers ready to buy</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                      <span className="text-lg">You can charge premium prices because customers trust you</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                      <span className="text-lg">You spend less time chasing customers and more time serving them</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
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
      features: ["Mobile-responsive design", "Fast loading speeds", "Easy contact forms", "Professional photography"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Search,
      title: "Local Search Optimization",
      description: "Get found first when customers search for your services in your area.",
      features: ["Google My Business optimization", "Local keyword rankings", "Online directory listings", "Map pack visibility"],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Star,
      title: "Reputation Management",
      description: "Build and protect your online reputation with authentic customer reviews.",
      features: ["Review generation campaigns", "Review response management", "Reputation monitoring", "Crisis management"],
      color: "from-rose-500 to-orange-500"
    },
    {
      icon: Smartphone,
      title: "Social Media Presence",
      description: "Professional social media that showcases your work and builds community trust.",
      features: ["Content creation", "Regular posting", "Community engagement", "Local networking"],
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: Target,
      title: "Digital Advertising",
      description: "Targeted ads that bring qualified customers directly to your business.",
      features: ["Google Ads management", "Facebook advertising", "Local targeting", "ROI tracking"],
      color: "from-yellow-500 to-green-500"
    },
    {
      icon: BarChart2,
      title: "Performance Tracking",
      description: "Clear reports showing exactly how your investment is growing your business.",
      features: ["Monthly performance reports", "Lead tracking", "ROI analysis", "Growth recommendations"],
      color: "from-green-500 to-blue-500"
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedWrapper className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You Need to Dominate Your Market
          </h2>
          <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            We handle all the technical stuff so you can focus on what you do best - running your business.
          </p>
        </AnimatedWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedWrapper key={index} delay={index * 100}>
                <div className="glass-card p-8 rounded-2xl shadow-lg h-full flex flex-col hover-lift">
                  <div className={`bg-gradient-to-br ${service.color} p-4 rounded-xl w-fit mb-6 shadow-lg`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-purple-100 leading-relaxed mb-4 flex-grow text-lg">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-purple-200">
                        <CheckCircle className="h-4 w-4 text-purple-400 mr-2 flex-shrink-0" />
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
      duration: "30 Minutes",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: 'Custom Growth Plan',
      description: "We create a personalized strategy to help your business get found, build trust, and attract more customers.",
      icon: Target,
      duration: "Week 1",
      color: "from-pink-500 to-rose-500"
    },
    {
      name: 'Professional Implementation',
      description: "Our team builds your new website, optimizes your online presence, and launches your digital marketing.",
      icon: Rocket,
      duration: "Week 2-4",
      color: "from-rose-500 to-orange-500"
    },
    {
      name: 'Results & Growth',
      description: "You start getting more calls, more customers, and more revenue while we continue optimizing your results.",
      icon: TrendingUp,
      duration: "Month 1+",
      color: "from-orange-500 to-yellow-500"
    },
  ];

  return (
    <section id="process" className="py-20 relative">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedWrapper className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How We Grow Your Business
          </h2>
          <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            Our proven process has helped hundreds of small businesses attract more customers and increase their revenue.
          </p>
        </AnimatedWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <AnimatedWrapper key={step.name} delay={index * 150}>
                <div className="glass-card p-8 rounded-2xl shadow-lg h-full hover-lift">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`bg-gradient-to-br ${step.color} p-4 rounded-xl shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <span className="text-sm font-bold text-purple-300 glass px-3 py-1 rounded-full">{step.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.name}</h3>
                  <p className="text-purple-100 leading-relaxed text-lg">{step.description}</p>
                </div>
              </AnimatedWrapper>
            )
          })}
        </div>
         
        <AnimatedWrapper delay={600}>
          <div className="text-center">
            <div className="glass-card p-8 max-w-3xl mx-auto rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Start Growing?
              </h3>
              <p className="text-lg text-purple-100 mb-6 leading-relaxed">
                Book your strategy call today and discover exactly how we can help your business attract more customers.
              </p>
              <a href={schedulingLink} target="_blank" rel="noopener noreferrer">
                <button className="glass-button px-8 py-4 rounded-xl hover:scale-105 transition-all shadow-lg font-bold text-lg text-white">
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
    <section className="py-20 relative">
      <div className="absolute inset-0 animated-gradient-purple"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
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
                <button className="group glass-card text-white px-8 py-4 rounded-xl hover:scale-105 transition-all flex items-center text-xl font-bold shadow-lg mx-auto">
                  Book a Strategy Call
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
              <button className="group glass border-2 border-white/30 text-white px-8 py-4 rounded-xl hover:glass-card transition-all flex items-center text-xl font-bold mx-auto">
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
    <footer className="bg-black/20 backdrop-blur-xl text-white py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="glass-card p-3 rounded-xl shadow-lg animate-pulse-glow">
                <BarChart3 className="h-7 w-7 text-purple-300" />
              </div>
              <span className="text-2xl font-bold text-gradient">Traction Labs</span>
            </div>
            <p className="text-purple-200 mb-6 max-w-md leading-relaxed text-lg">
              We help small business owners build a powerful digital presence that attracts customers, builds trust, and drives growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="glass p-3 rounded-xl hover:glass-card transition-all hover:scale-110">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="glass p-3 rounded-xl hover:glass-card transition-all hover:scale-110">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-purple-300">Services</h3>
            <ul className="space-y-3 text-purple-200">
              <li><a href="#" className="hover:text-white transition-colors">Website Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Local SEO</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Reputation Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Social Media</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Digital Advertising</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-purple-300">Contact</h3>
            <ul className="space-y-3 text-purple-200">
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
        
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-purple-300 text-sm mb-4 md:mb-0">
              © 2024 Traction Labs. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-purple-300">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default App;