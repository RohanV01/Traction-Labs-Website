import React, { useState, useEffect, useRef, FC, ReactNode } from 'react';
import { 
  Zap, 
  Menu, 
  X, 
  ArrowRight, 
  CheckCircle, 
  Target, 
  Users, 
  GraduationCap, 
  Search,
  MessageSquare,
  Calendar,
  Linkedin,
  Twitter,
  HelpCircle,
  Clock,
  TrendingDown,
  Mail,
  FileText,
  Rocket,
  Satellite,
  Award,
  Sparkles,
  TrendingUp,
  LucideProps,
  Database,
  BarChart2,
  Key,
  Download
} from 'lucide-react';

// === CONFIGURATION: Add your scheduling link here ===
const schedulingLink = "https://zcal.co/rohanvyas/15min";

// Custom CSS for fancy effects
const FancyStyles: FC = () => (
    <style>{`
      /* Sales Funnel Pulse Animation */
      @keyframes pulse {
        0% {
          transform: scale(1);
          box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.7);
        }
        70% {
          transform: scale(1.05);
          box-shadow: 0 0 10px 20px rgba(79, 70, 229, 0);
        }
        100% {
          transform: scale(1);
          box-shadow: 0 0 0 0 rgba(79, 70, 229, 0);
        }
      }
      .pulse-node {
        animation: pulse 2s infinite;
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
  const [page, setPage] = useState('home');

  const navigateTo = (pageName: string) => {
      setPage(pageName);
      window.scrollTo(0,0);
  }

  return (
    <>
      <FancyStyles />
      <div className="min-h-screen bg-[#111827] text-gray-300 font-sans leading-relaxed relative overflow-x-hidden">
        <Header navigateTo={navigateTo} />
        <main className="relative z-10">
          {page === 'home' && (
            <>
              <Hero />
              <Problem />
              <Solution />
              <Services />
              <Process />
              <FoundationalPartners />
              <CTA />
            </>
          )}
          {page === 'resources' && <ResourcesPage />}
        </main>
        <Footer />
      </div>
    </>
  );
};

// =================================
// SUB-COMPONENTS
// =================================

interface HeaderProps {
    navigateTo: (pageName: string) => void;
}

const Header: FC<HeaderProps> = ({ navigateTo }) => {
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
    { href: '#services', label: 'Services', page: 'home' },
    { href: '#process', label: 'Process', page: 'home' },
    { href: '#resources', label: 'Resources', page: 'resources' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string, href: string) => {
      e.preventDefault();
      if (page === 'resources') {
          navigateTo('resources');
      } else {
          navigateTo('home');
          // Smooth scroll for anchor links on home page
          setTimeout(() => {
              document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
          }, 0);
      }
      setIsMenuOpen(false);
  }

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#111827]/80 backdrop-blur-lg border-b border-gray-700/50' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" onClick={(e) => handleNavClick(e, 'home', '#')} className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-indigo-500 to-teal-500 p-2 rounded-lg shadow-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">
              Traction Labs
            </span>
          </a>
          
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.page, link.href)} className="text-gray-300 hover:text-white transition-colors font-medium">
                  {link.label}
                </a>
              ))}
            </nav>
            <a href={schedulingLink} target="_blank" rel="noopener noreferrer">
                <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm font-semibold">
                    Book a Strategy Call
                </button>
            </a>
          </div>

          <button 
            className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#111827]/95 backdrop-blur-md border-t border-gray-700/50">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map(link => (
                   <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.page, link.href)} className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">{link.label}</a>
              ))}
               <div className="border-t border-gray-700/50 pt-4 mt-2">
                 <a href={schedulingLink} target="_blank" rel="noopener noreferrer" className="w-full">
                     <button className="w-full bg-indigo-600 text-white px-5 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm font-semibold">
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

// Flowing geometric grid animation
const GeometricFlowCanvas: FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let time = 0;
        const speed = 0.005;
        
        const resizeCanvas = () => {
            if (canvas.parentElement) {
                canvas.width = canvas.parentElement.clientWidth;
                canvas.height = canvas.parentElement.clientHeight;
            }
        };

        const draw = () => {
            if(!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            const gridSize = 40;
            const amplitude = 30;
            const frequency = 0.02;

            const gradient = ctx.createLinearGradient(0, canvas.height/2, canvas.width, canvas.height/2);
            gradient.addColorStop(0, '#4f46e5'); // Indigo
            gradient.addColorStop(0.5, '#14b8a6'); // Teal
            gradient.addColorStop(1, '#ec4899'); // Pink

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;

            for (let i = 0; i < canvas.width / gridSize + 1; i++) {
                ctx.beginPath();
                for (let j = 0; j < canvas.height / gridSize + 1; j++) {
                    const x = i * gridSize;
                    const y = j * gridSize + Math.sin(i * frequency + time) * amplitude * Math.sin(j * 0.1 + time);
                    if (j === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }
                ctx.stroke();
            }

            for (let j = 0; j < canvas.height / gridSize + 1; j++) {
                ctx.beginPath();
                for (let i = 0; i < canvas.width / gridSize + 1; i++) {
                    const x = i * gridSize;
                    const y = j * gridSize + Math.sin(i * frequency + time) * amplitude * Math.sin(j * 0.1 + time);
                    if (i === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }
                ctx.stroke();
            }
        };

        const animate = () => {
            time += speed;
            draw();
            animationFrameId = requestAnimationFrame(animate);
        };
        
        resizeCanvas();
        animate();
        
        window.addEventListener('resize', resizeCanvas);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-20 w-full h-full" />;
};


// --- SALES FUNNEL COMPONENT ---
const SalesFunnel: FC = () => {
    const [activeStage, setActiveStage] = useState<string | null>(null);

    const stages = [
        { name: 'Leads', icon: Users },
        { name: 'Prospects', icon: Search },
        { name: 'Qualified Calls', icon: Calendar },
        { name: 'Deals Closed', icon: Award },
    ];

    return (
        <div className="w-full flex flex-col items-center justify-center p-4 space-y-2">
            {stages.map((stage, index) => {
                const isPulsing = stage.name === 'Qualified Calls';
                const isActive = activeStage === stage.name || isPulsing;
                const Icon = stage.icon;

                return (
                    <React.Fragment key={stage.name}>
                        <div
                            onMouseEnter={() => setActiveStage(stage.name)}
                            onMouseLeave={() => setActiveStage(null)}
                            className={`flex items-center p-4 rounded-lg transition-all duration-300 w-full max-w-xs
                                ${isActive ? 'bg-indigo-600/30 backdrop-blur-sm' : 'bg-gray-800/20'}`}
                        >
                            <div className={`
                                p-3 rounded-full mr-4 transition-all duration-300 
                                ${isPulsing ? 'pulse-node' : ''}
                                ${isActive ? 'bg-indigo-500' : 'bg-gray-700'}`
                            }>
                                <Icon className={`h-6 w-6 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                            </div>
                            <span className={`font-semibold text-lg ${isActive ? 'text-white' : 'text-gray-400'}`}>
                                {stage.name}
                            </span>
                        </div>
                        {index < stages.length - 1 && (
                            <div className="h-8 w-px bg-gray-700" />
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
};


const Hero: FC = () => {
    return (
      <section className="min-h-screen flex items-center justify-center pt-20 lg:pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                <div className="text-center lg:text-left z-10 relative">
                    <AnimatedWrapper>
                      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Never Run Out Of<br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">Qualified Sales Calls</span>
                      </h1>
                      <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0">
                        We build a world-class outbound system that books your calendar with high-value prospects, so you can focus on closing deals.
                      </p>
                      <a href={schedulingLink} target="_blank" rel="noopener noreferrer" className="inline-block">
                        <button className="group bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-105 inline-flex items-center justify-center text-lg font-semibold shadow-lg shadow-indigo-500/30">
                            Book Your Strategy Call
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </a>
                    </AnimatedWrapper>
                </div>
                <div className="relative h-96 lg:h-[500px] mt-16 lg:mt-0 flex items-center justify-center">
                    <GeometricFlowCanvas />
                    <div className="relative z-10 w-full">
                       <SalesFunnel />
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
};

const Problem: FC = () => {
    const problems = [
      { icon: HelpCircle, title: "No Clear Starting Point" },
      { icon: Target, title: "Landing in Spam" },
      { icon: Clock, title: "Wasting Precious Time" },
      { icon: TrendingDown, title: "No Repeatable Process" },
    ];
  
    return (
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedWrapper className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your Growth Has a Bottleneck.
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A great product is only half the equation. Without a predictable stream of sales calls, even the best ideas fail to gain traction.
            </p>
          </AnimatedWrapper>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {problems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <AnimatedWrapper key={index} delay={index * 100}>
                    <div className="group bg-gray-800/50 backdrop-blur-xl p-6 rounded-2xl shadow-lg transition-all duration-300 border border-gray-700/80 hover:border-indigo-500/50 hover:-translate-y-2 h-full text-center">
                      <div className="inline-flex bg-gradient-to-br from-indigo-500 to-teal-500 p-3 rounded-xl mb-4 shadow-lg shadow-indigo-500/20">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        {problem.title}
                      </h3>
                    </div>
                  </AnimatedWrapper>
                )
            })}
          </div>
        </div>
      </section>
    );
};
  
const Solution: FC = () => {
  const benefits = [
    {
      icon: Users,
      title: "Data-Driven Prospecting",
      description: "We find and validate thousands of your ideal customers, creating a high-quality list for outreach."
    },
    {
      icon: Mail,
      title: "Expert Cold Email Copywriting",
      description: "Our team writes compelling, personalized email sequences that get replies and book meetings."
    },
    {
      icon: CheckCircle,
      title: "Max-Deliverability Setup",
      description: "We handle the technical setup (DMARC, DKIM, SPF) to ensure your emails land in the inbox, not spam."
    },
    {
      icon: GraduationCap,
      title: "Done-For-You Campaign Management",
      description: "We run, manage, and optimize the entire cold email system for you, delivering a predictable pipeline."
    }
  ];

  return (
    <section className="py-20 bg-[#111827] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedWrapper>
                <div className="inline-flex items-center px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                The Traction Labs System
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                We Build You A World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">Outbound Sales Engine</span>
                </h2>
                
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                We don't just send emails. We become an extension of your team, implementing a complete system for prospecting, writing, sending, and booking that drives sustainable growth.
                </p>
                
                <div className="space-y-6">
                {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                        <div key={index} className="flex items-start space-x-4 group">
                            <div className="bg-gradient-to-br from-indigo-500 to-teal-500 p-3 rounded-xl flex-shrink-0 border border-gray-700">
                                <Icon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">
                                {benefit.title}
                                </h3>
                                <p className="text-gray-400">
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
                    <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/80 rounded-3xl p-8 shadow-lg relative overflow-hidden">
                    <div className="relative">
                        <div className="flex items-center mb-6">
                        <Sparkles className="h-6 w-6 mr-3 text-indigo-400" />
                        <h3 className="text-2xl font-bold text-white">What This Means For You</h3>
                        </div>
                        <div className="space-y-4 text-gray-300">
                        <div className="flex items-start space-x-3">
                            <ArrowRight className="h-5 w-5 text-teal-400 flex-shrink-0 mt-1" />
                            <span>A calendar consistently filled with qualified sales calls.</span>
                        </div>
                        <div className="flex items-start space-x-3">
                            <ArrowRight className="h-5 w-5 text-teal-400 flex-shrink-0 mt-1" />
                            <span>More time to focus on your product and your customers.</span>
                        </div>
                        <div className="flex items-start space-x-3">
                            <ArrowRight className="h-5 w-5 text-teal-400 flex-shrink-0 mt-1" />
                            <span>A scalable, predictable source of new revenue.</span>
                        </div>
                         <div className="flex items-start space-x-3">
                            <ArrowRight className="h-5 w-5 text-teal-400 flex-shrink-0 mt-1" />
                            <span>The confidence that your sales pipeline is being handled by experts.</span>
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
      icon: Search,
      title: "ICP & List Building",
      description: "We identify your ideal customer and build a high-quality, verified list of prospects for outreach.",
    },
    {
      icon: Mail,
      title: "Outbound Infrastructure",
      description: "We set up domains, inboxes, and all technical protocols (DMARC, DKIM, SPF) for maximum deliverability.",
    },
    {
        icon: MessageSquare,
        title: "Campaign Copywriting",
        description: "We write compelling, personalized email sequences that get replies and book meetings.",
    },
    {
      icon: Calendar,
      title: "Done-For-You Campaigns",
      description: "We launch, manage, and optimize your outbound campaigns to fill your calendar with qualified calls.",
    },
    {
      icon: GraduationCap,
      title: "Process & Handoff",
      description: "We provide you with the entire system, templates, and training to take over when you're ready.",
    },
    {
      icon: TrendingUp,
      title: "Reporting & Optimization",
      description: "You get detailed weekly reports on campaign performance, and we constantly optimize for better results.",
    }
  ];

  return (
    <section id="services" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedWrapper className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Done-For-You Outbound Sales Engine
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
           From strategy to execution, we provide everything you need to build a powerful outbound engine.
          </p>
        </AnimatedWrapper>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
                <AnimatedWrapper key={index} delay={index * 100}>
                  <div className="group bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl shadow-lg transition-all duration-300 border border-gray-700/80 hover:border-indigo-500/50 transform hover:-translate-y-2 h-full flex flex-col">
                    <div className="bg-gradient-to-br from-indigo-500 to-teal-500 p-3 rounded-xl w-fit mb-6 shadow-lg shadow-indigo-500/20">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed flex-grow">
                      {service.description}
                    </p>
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
            name: 'Step 01: Blueprint & Targeting',
            description: "We map out your ideal customer profile and build a high-precision prospect list. This is the foundation.",
            icon: Target,
        },
        {
            name: 'Step 02: Infrastructure & Setup',
            description: "We build your complete outbound infrastructure: domains, inboxes, and all technical protocols for max deliverability.",
            icon: Database,
        },
        {
            name: 'Step 03: Campaign Execution',
            description: "Our expert copywriters craft and launch personalized email sequences that get replies and book meetings.",
            icon: Mail,
        },
        {
            name: 'Step 04: Optimization & Scaling',
            description: "We analyze campaign data in real-time, optimizing what works and scaling your outreach for consistent results.",
            icon: BarChart2,
        },
    ];

    return (
        <section id="process" className="py-20 bg-[#111827] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedWrapper className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Your Path to a Predictable Pipeline
                    </h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
                        We've engineered a battle-tested process to build your sales engine from the ground up, transforming your sales from random to repeatable.
                    </p>
                </AnimatedWrapper>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <AnimatedWrapper key={step.name} delay={index * 100}>
                                <div className="group bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl shadow-lg transition-all duration-300 border border-gray-700/80 hover:border-indigo-500/50 hover:-translate-y-1 h-full">
                                    <div className="flex items-start justify-between">
                                        <div className="bg-gradient-to-br from-indigo-500 to-teal-500 p-3 rounded-xl">
                                            <Icon className="h-8 w-8 text-white" />
                                        </div>
                                        <span className="text-sm font-bold text-gray-500">{step.name}</span>
                                    </div>
                                    <p className="text-xl text-white font-medium mt-4">{step.description}</p>
                                </div>
                            </AnimatedWrapper>
                        )
                    })}
                </div>
                 <AnimatedWrapper delay={400}>
                     <div className="group bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl shadow-lg transition-all duration-300 border border-gray-700/80 hover:border-indigo-500/50 hover:-translate-y-1">
                         <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                             <div className="flex items-center mb-4 md:mb-0">
                                 <div className="bg-gradient-to-br from-indigo-500 to-teal-500 p-3 rounded-xl mr-4">
                                     <Key className="h-8 w-8 text-white" />
                                 </div>
                                 <div>
                                     <h3 className="text-xl font-semibold text-white">Final Step: System Handoff</h3>
                                     <p className="text-gray-400">We transfer the entire system and playbook to you.</p>
                                 </div>
                             </div>
                             <a href={schedulingLink} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
                                 <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm font-semibold w-full md:w-auto mt-4 md:mt-0">
                                     Become Self-Sufficient
                                 </button>
                             </a>
                         </div>
                     </div>
                 </AnimatedWrapper>
            </div>
        </section>
    )
};


const ResourcesPage: FC = () => {
    const resources = [
        {
            icon: FileText,
            title: "Ultimate Cold Email Guide",
            description: "A comprehensive guide to writing cold emails that actually get replies and book meetings.",
            href: "#",
        },
        {
            icon: Target,
            title: "ICP & Prospecting Checklist",
            description: "Define your Ideal Customer Profile and find high-quality leads with this step-by-step checklist.",
            href: "#",
        },
        {
            icon: Database,
            title: "Lead Database Template",
            description: "A free and simple template to organize your prospects and track your outreach efforts effectively.",
            href: "#",
        },
         {
            icon: Sparkles,
            title: "Email Copywriting Formulas",
            description: "Proven formulas to craft compelling email copy that converts readers into customers.",
            href: "#",
        },
        {
            icon: BarChart2,
            title: "Sales Metrics Cheatsheet",
            description: "Understand the key metrics to track for a successful outbound sales campaign.",
            href: "#",
        },
        {
            icon: Mail,
            title: "Deliverability 101 Guide",
            description: "Everything you need to know about email deliverability to avoid the spam folder.",
            href: "#",
        },
    ];

    return (
        <section id="resources" className="py-24 pt-32 bg-[#111827]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedWrapper className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Free Tools & Resources
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Get a head start with these free resources, designed to help you improve your outbound sales process today.
                    </p>
                </AnimatedWrapper>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resources.map((resource, index) => {
                        const Icon = resource.icon;
                        return (
                            <AnimatedWrapper key={index} delay={index * 100}>
                                <div className="group bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl shadow-lg transition-all duration-300 border border-gray-700/80 hover:border-teal-500/50 transform hover:-translate-y-2 h-full flex flex-col">
                                    <div className="bg-gradient-to-br from-indigo-500 to-teal-500 p-3 rounded-xl w-fit mb-6 shadow-lg shadow-indigo-500/20">
                                        <Icon className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        {resource.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed flex-grow mb-6">
                                        {resource.description}
                                    </p>
                                    <a href={resource.href} className="flex items-center font-semibold text-teal-400 group-hover:text-teal-300 transition-colors">
                                        Get the Resource
                                        <Download className="ml-2 h-4 w-4" />
                                    </a>
                                </div>
                            </AnimatedWrapper>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};


const FoundationalPartners: FC = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedWrapper>
          <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 shadow-2xl text-center">
            <div className="inline-flex items-center justify-center bg-gradient-to-br from-indigo-500 to-teal-500 rounded-xl p-3 mb-4 shadow-lg">
                <Award className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Be Our Next Success Story</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              We are currently selecting a handful of ambitious founders to be our foundational partners. This is a unique opportunity to get our complete outbound sales engine built for you at a special pilot rate.
            </p>
              <a href={schedulingLink} target="_blank" rel="noopener noreferrer" className="inline-block">
                <button className="group bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-105 flex items-center justify-center text-lg font-semibold shadow-lg shadow-indigo-500/30 mx-auto">
                    Apply to be a Foundational Partner
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  )
}

const CTA: FC = () => {
    return (
      <section className="bg-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <AnimatedWrapper>
                <div className="bg-gradient-to-r from-indigo-600 to-teal-600 rounded-2xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
                    <div className="relative">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Build Your Sales Engine?
                        </h2>
                        <p className="text-lg text-indigo-100 max-w-2xl mx-auto mb-10">
                            Book a no-obligation strategy call. We'll analyze your business and provide an actionable roadmap to get your first qualified calls.
                        </p>
                        
                        <a href={schedulingLink} target="_blank" rel="noopener noreferrer" className="inline-block">
                            <button className="group bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-gray-200 transition-all transform hover:scale-105 flex items-center text-lg font-semibold shadow-lg mx-auto">
                                I am convinced, let's work together
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </a>
                    </div>
                </div>
            </AnimatedWrapper>
        </div>
      </section>
    );
};
  
const Footer: FC = () => {
  return (
    <footer className="bg-transparent border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
            <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
            </a>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-500">&copy; {new Date().getFullYear()} Traction Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default App;
