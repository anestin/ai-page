
import React, { useState, useEffect, useMemo } from 'react';
import { 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight,
  Monitor,
  Zap,
  X,
  Loader2,
  PlayCircle,
  ShieldCheck,
  Star,
  Globe,
  Gift,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CURRICULUM, BONUSES, FAQS, BENEFITS, TESTIMONIALS } from './constants';
import { Module } from './types';

// --- Types ---
type Currency = 'NGN' | 'USD';

// --- Components ---

const ModulePreviewModal = ({ 
  isOpen, 
  onClose, 
  module 
}: { 
  isOpen: boolean, 
  onClose: () => void, 
  module: Module | null 
}) => {
  if (!isOpen || !module) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={onClose} />
      <div className="relative bg-white w-full max-w-2xl rounded-[3rem] shadow-4xl overflow-hidden animate-modal-in max-h-[90vh] flex flex-col">
        {/* Header Image */}
        <div className="relative h-48 sm:h-64 shrink-0">
          <img src={module.image} alt={module.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
          <button 
            onClick={onClose} 
            className="absolute top-6 right-6 p-2 bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-slate-950 rounded-full transition-all shadow-xl"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="absolute bottom-6 left-10">
            <div className="text-yellow-600 font-black text-xs uppercase tracking-[0.3em] mb-2">Detailed Syllabus • Phase {module.id}</div>
            <h3 className="text-3xl font-black text-slate-950 tracking-tighter leading-tight">{module.title}</h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-10 sm:p-12 overflow-y-auto custom-scrollbar">
          <p className="text-slate-600 text-lg font-medium leading-relaxed mb-10">
            {module.description || "This module covers the essential skills and frameworks required to master this stage of AI integration."}
          </p>

          <div className="space-y-8">
            <div className="space-y-6">
              <h4 className="text-sm font-black text-slate-950 uppercase tracking-widest flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" /> Deep Dive Topics
              </h4>
              <ul className="flex flex-col gap-3">
                {(module.subItems || [
                  "Advanced Case Studies",
                  "Tool Optimization",
                  "Integration Workflows",
                  "Industry Standards",
                  "Strategic Scaling"
                ]).map((item, idx) => (
                  <li key={idx} className="text-slate-500 text-sm font-bold flex gap-3 leading-snug bg-slate-50/50 p-5 rounded-2xl border border-slate-100/50 hover:bg-slate-50 hover:border-slate-200 transition-all">
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex items-center justify-between group">
            <div className="max-w-[70%]">
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Practical Application</div>
              <p className="text-lg font-black text-slate-800 leading-tight">"{module.activity}"</p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 group-hover:bg-slate-950 group-hover:text-yellow-400 transition-colors">
              <PlayCircle className="w-8 h-8" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 bg-slate-50 border-t border-slate-100 shrink-0">
          <button 
            onClick={onClose}
            className="w-full bg-slate-950 hover:bg-slate-900 text-white py-5 rounded-2xl font-black text-lg transition-premium shadow-2xl shadow-slate-950/20"
          >
            Return to Curriculum
          </button>
        </div>
      </div>
    </div>
  );
};

const Notification = ({ message, onClose }: { message: string, onClose: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-8 right-8 z-[100] animate-[slideInRight_0.5s_ease-out]">
      <div className="bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/10 backdrop-blur-xl">
        <div className="bg-emerald-500 rounded-full p-1.5 shadow-lg">
          <CheckCircle2 className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="font-bold text-sm">Success</p>
          <p className="text-xs text-slate-400">{message}</p>
        </div>
        <button onClick={onClose} className="ml-4 text-white/30 hover:text-white transition-colors">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const InterestModal = ({ isOpen, onClose, onShowSuccess }: { isOpen: boolean, onClose: () => void, onShowSuccess: (msg: string) => void }) => {
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    onShowSuccess("Registration successful. We'll contact you shortly.");
    onClose();
    setFormData({ fullName: '', email: '', phone: '' });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={onClose} />
      <div className="relative bg-white w-full max-w-xl rounded-[2.5rem] shadow-3xl overflow-hidden animate-modal-in">
        <div className="p-8 md:p-12">
          <div className="flex justify-between items-start mb-10">
            <div>
              <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 text-[10px] font-black rounded-full mb-3 uppercase tracking-widest">
                Priority Enrollment
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-2">Secure Your Spot</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">Join the May 2026 cohort. Limited spots available to ensure quality mentorship.</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-all group">
              <X className="w-6 h-6 text-slate-400 group-hover:text-slate-900" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-900 uppercase tracking-wider ml-1">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-yellow-400/20 focus:border-yellow-400 transition-all placeholder:text-slate-300 font-medium"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-900 uppercase tracking-wider ml-1">Email Address</label>
                <input 
                  required
                  type="email" 
                  placeholder="sarah@example.com"
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-yellow-400/20 focus:border-yellow-400 transition-all placeholder:text-slate-300 font-medium"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-900 uppercase tracking-wider ml-1">WhatsApp / Phone</label>
                <input 
                  required
                  type="tel" 
                  placeholder="+234 ..."
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-yellow-400/20 focus:border-yellow-400 transition-all placeholder:text-slate-300 font-medium"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <button 
              disabled={isSubmitting}
              type="submit" 
              className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed text-slate-950 py-5 rounded-2xl font-black text-lg shadow-xl shadow-yellow-400/20 transition-all flex items-center justify-center gap-3 mt-4 hover:-translate-y-1"
            >
              {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : <>Join the Academy <ArrowRight className="w-5 h-5" /></>}
            </button>
          </form>
          
          <div className="mt-8 pt-8 border-t border-slate-50 flex items-center justify-center gap-6 opacity-60">
            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" /> Secure Payment
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <Globe className="w-4 h-4" /> Global Access
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-premium ${isScrolled ? 'bg-white/90 backdrop-blur-xl py-4 shadow-sm border-b border-slate-100' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="bg-slate-950 p-2 rounded-xl transition-premium group-hover:rotate-12 shadow-lg shadow-slate-950/20">
            <Zap className="text-yellow-400 w-5 h-5 fill-yellow-400" />
          </div>
          <span className="font-black text-xl tracking-tighter text-slate-950">ALA.</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-10">
          {['Curriculum', 'Benefits', 'Pricing', 'FAQs'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold text-slate-500 hover:text-slate-950 transition-colors uppercase tracking-widest">{item}</a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button onClick={onOpenModal} className="hidden sm:block text-sm font-bold text-slate-600 hover:text-slate-950 px-4 transition-colors">Login</button>
          <button 
            onClick={onOpenModal}
            className="bg-yellow-400 hover:bg-yellow-500 text-slate-950 px-8 py-3 rounded-2xl text-sm font-black shadow-lg shadow-yellow-400/20 transition-premium hover:-translate-y-0.5 active:scale-95"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </header>
  );
};

const Hero = ({ onOpenModal }: { onOpenModal: () => void }) => (
  <section className="relative pt-48 pb-32 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_center,_#fefce8_0%,_transparent_70%)] opacity-70 -z-10" />
    <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-yellow-400/10 blur-[100px] rounded-full -z-10 animate-float" />
    <div className="absolute bottom-[20%] left-[10%] w-64 h-64 bg-blue-400/10 blur-[100px] rounded-full -z-10 animate-float" style={{ animationDelay: '2s' }} />

    <div className="max-w-7xl mx-auto px-6 text-center">
      <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-sm border border-yellow-200/50">
        <Monitor className="w-3 h-3" /> May 2026 Registration Open
      </div>
      
      <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-slate-950 leading-[0.95] mb-10 tracking-tighter">
        Master AI for <br className="hidden md:block" />
        <span className="text-slate-400">Work & Growth.</span>
      </h1>
      
      <p className="text-slate-600 text-lg md:text-2xl max-w-3xl mx-auto mb-14 font-medium leading-relaxed">
        Empowering 1,200+ professionals to automate workflows, scale revenue, and secure their future in the intelligence era.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
        <button 
          onClick={onOpenModal}
          className="w-full sm:w-auto bg-slate-950 hover:bg-slate-900 text-white px-12 py-6 rounded-[2rem] font-black text-xl shadow-2xl shadow-slate-950/20 transition-premium hover:-translate-y-1 flex items-center justify-center gap-3 group"
        >
          Secure My Spot <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>
        <button 
          onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-950 px-12 py-6 rounded-[2rem] font-bold text-xl border border-slate-200 transition-premium flex items-center justify-center gap-3"
        >
          View Curriculum <ChevronDown className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
        {[
          { color: 'bg-indigo-600', label: 'Professionals', text: 'Level up your career with AI efficiency.' },
          { color: 'bg-emerald-600', label: 'Entrepreneurs', text: 'Automate workflows & drive revenue.' },
          { color: 'bg-amber-500', label: 'Freelancers', text: 'Build a high-ticket AI agency.' }
        ].map((item, i) => (
          <div key={i} className={`${item.color} rounded-[2.5rem] p-10 text-white shadow-2xl shadow-slate-200/30 flex flex-col justify-between group cursor-pointer transition-premium hover:-translate-y-2`} onClick={onOpenModal}>
            <div>
              <div className="font-black text-2xl mb-3 tracking-tight">{item.label}</div>
              <p className="text-white/80 text-lg font-medium">{item.text}</p>
            </div>
            <div className="mt-12 flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-widest bg-white/20 px-4 py-2 rounded-full">Explore Program</span>
              <PlayCircle className="w-8 h-8 opacity-40 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const BenefitSection = () => (
  <section id="benefits" className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-24">
        <span className="text-slate-400 font-black text-xs uppercase tracking-[0.4em] mb-4 block">WHY CHOOSE ALA</span>
        <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter">Engineered for Transformation</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BENEFITS.map((benefit, i) => (
          <div key={i} className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 hover:border-slate-200 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-premium group">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-slate-200/50 group-hover:bg-slate-950 group-hover:text-yellow-400 transition-premium">
              {React.cloneElement(benefit.icon as React.ReactElement<{ className?: string }>, { className: "w-8 h-8" })}
            </div>
            <h3 className="text-2xl font-black text-slate-950 mb-4 tracking-tight">{benefit.title}</h3>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CurriculumSection = ({ onPreviewModule }: { onPreviewModule: (module: Module) => void }) => {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <section id="curriculum" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
          <div>
            <span className="text-slate-400 font-black text-xs uppercase tracking-[0.4em] mb-4 block">THE ACADEMY BLUEPRINT</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter leading-tight">Master AI From Zero to Pro</h2>
          </div>
          <div className="flex gap-2 p-1.5 bg-slate-200 rounded-2xl">
            {['Overview', 'Modules', 'Schedule'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-xl font-bold text-sm transition-premium ${
                  activeTab === tab 
                  ? 'bg-white text-slate-950 shadow-md' 
                  : 'text-slate-500 hover:text-slate-950'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {CURRICULUM.map((part) => (
          <div key={part.id} className="mb-24 last:mb-0">
            <div className="flex items-center gap-4 text-slate-950 mb-12">
              <div className="w-12 h-12 bg-slate-950 rounded-2xl flex items-center justify-center text-yellow-400 shadow-xl shadow-slate-950/20">
                <Zap className="w-6 h-6 fill-yellow-400" />
              </div>
              <h3 className="text-3xl font-black tracking-tight uppercase">{part.title}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {part.modules.map((module) => (
                <div key={module.id} className="bg-white rounded-[3.5rem] overflow-hidden shadow-sm hover:shadow-3xl hover:shadow-slate-200/60 border border-slate-100 transition-premium group">
                  <div 
                    className="relative aspect-[16/10] overflow-hidden cursor-pointer"
                    onClick={() => onPreviewModule(module)}
                  >
                    <img src={module.image} alt={module.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white/95 backdrop-blur-md px-8 py-4 rounded-3xl font-black text-sm uppercase tracking-widest text-slate-950 shadow-2xl">
                        Preview Module
                      </div>
                    </div>
                  </div>
                  <div className="p-12">
                    <div className="text-yellow-600 font-black text-xs uppercase tracking-[0.3em] mb-6">Phase {module.id}</div>
                    <h4 className="text-3xl font-black text-slate-950 mb-8 leading-tight tracking-tighter">{module.title}</h4>
                    <ul className="space-y-5 mb-12">
                      {module.items.map((item, idx) => (
                        <li key={idx} className="flex gap-4 text-lg text-slate-600 font-medium leading-snug">
                          <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div 
                      className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 relative overflow-hidden group/lab cursor-pointer"
                      onClick={() => onPreviewModule(module)}
                    >
                      <div className="relative z-10">
                        <div className="text-slate-950 font-black text-[10px] uppercase tracking-widest mb-3 flex items-center gap-2">
                           Practice Lab <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
                        </div>
                        <p className="text-lg font-bold text-slate-800 leading-relaxed italic">"{module.activity}"</p>
                      </div>
                      <Monitor className="absolute -right-6 -bottom-6 w-32 h-32 text-slate-200/40 -rotate-12 transition-transform group-hover/lab:rotate-0 duration-700" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const BonusSection = () => (
  <section className="py-32 bg-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 blur-[100px] rounded-full -mr-48 -mt-48" />
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col items-center text-center mb-20">
        <div className="w-16 h-16 bg-yellow-400 rounded-3xl flex items-center justify-center text-slate-950 shadow-2xl shadow-yellow-400/20 mb-8">
          <Gift className="w-8 h-8" />
        </div>
        <span className="text-yellow-600 font-black text-xs uppercase tracking-[0.4em] mb-4">ACADEMY EXCLUSIVES</span>
        <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter">Premium Bonuses Included</h2>
        <p className="text-slate-500 text-xl font-medium mt-6 max-w-2xl">Get immediate access to these high-value resources worth over $1,500 for free when you enroll today.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BONUSES.map((bonus, i) => (
          <div key={i} className={`p-10 rounded-[3.5rem] border border-slate-100 transition-premium hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/50 ${bonus.bgColor} group`}>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-slate-200/40 group-hover:scale-110 transition-transform">
              {React.cloneElement(bonus.icon as React.ReactElement<{ className?: string }>, { className: "w-7 h-7 text-slate-950" })}
            </div>
            <h3 className="text-xl font-black text-slate-950 mb-4 leading-tight">{bonus.title}</h3>
            <p className="text-slate-600 font-medium leading-relaxed">{bonus.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Group testimonials into slides based on screen size
  const slides = useMemo(() => {
    if (isMobile) {
      return TESTIMONIALS.map(t => [t]);
    }
    const pairs = [];
    for (let i = 0; i < TESTIMONIALS.length; i += 2) {
      pairs.push(TESTIMONIALS.slice(i, i + 2));
    }
    return pairs;
  }, [isMobile]);

  // Reset index if it exceeds new slides length when switching between mobile/desktop
  useEffect(() => {
    if (index >= slides.length) {
      setIndex(0);
    }
  }, [slides.length, index]);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    })
  };

  return (
    <section className="py-20 md:py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-slate-400 font-black text-xs uppercase tracking-[0.4em] mb-4 block">REAL RESULTS</span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter">From Our Global Community</h2>
        </div>
        
        <div className="relative">
          {/* Main Display */}
          <div className="relative min-h-[500px] md:min-h-[450px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={`${isMobile}-${index}`}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 200, damping: 25 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
              >
                {slides[index]?.map((testimonial) => (
                  <div key={testimonial.id} className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] border border-slate-100 shadow-xl relative overflow-hidden group h-full flex flex-col justify-between">
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-8 md:mb-10">
                        <div>
                          <h4 className="text-xl md:text-2xl font-black text-slate-950">{testimonial.name}</h4>
                          <div className="h-1 w-12 bg-yellow-400 rounded-full mt-2" />
                        </div>
                        <div className="bg-yellow-400/10 p-2.5 md:p-3 rounded-xl md:rounded-2xl">
                          <Star className="w-5 h-5 md:w-6 md:h-6 text-yellow-600 fill-yellow-600" />
                        </div>
                      </div>
                      
                      <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed italic tracking-tight">
                        "{testimonial.content}"
                      </p>
                    </div>
                    <div className="absolute top-0 right-0 p-6 md:p-8 opacity-[0.02] md:opacity-[0.03] -z-0">
                      <Star className="w-32 h-32 md:w-48 md:h-48 text-slate-950 fill-slate-950" />
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-6 order-2 md:order-1">
              <button 
                onClick={prev}
                className="p-5 md:p-6 bg-white border border-slate-100 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 active:scale-95 transition-all group"
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-slate-400 group-hover:text-slate-950 transition-colors" />
              </button>
              
              <button 
                onClick={next}
                className="p-5 md:p-6 bg-white border border-slate-100 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 active:scale-95 transition-all group"
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-slate-400 group-hover:text-slate-950 transition-colors" />
              </button>
            </div>
            
            <div className="flex gap-3 md:gap-4 order-1 md:order-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-2.5 md:h-3 rounded-full transition-all duration-500 ${
                    i === index ? 'w-8 md:w-12 bg-slate-950' : 'w-2.5 md:w-3 bg-slate-200 hover:bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingSection = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const [currency, setCurrency] = useState<Currency>('NGN');

  return (
    <section id="pricing" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-yellow-400/10 blur-[180px] rounded-full -mr-96 -mt-96" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-600/10 blur-[180px] rounded-full -ml-96 -mb-96" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter">Invest in Yourself</h2>
        <p className="text-slate-400 text-xl md:text-2xl mb-20 font-medium max-w-3xl mx-auto">Mastering AI is the single greatest career hedge of the decade. Start today.</p>
        
        <div className="bg-white rounded-[5rem] p-12 md:p-24 shadow-4xl relative">
          <div className="flex items-center justify-center gap-8 mb-16">
            <span className={`text-xs font-black uppercase tracking-[0.3em] transition-colors ${currency === 'NGN' ? 'text-slate-950' : 'text-slate-300'}`}>Local (NGN)</span>
            <button 
              onClick={() => setCurrency(prev => prev === 'NGN' ? 'USD' : 'NGN')} 
              className="w-20 h-10 bg-slate-100 rounded-full p-2 relative transition-premium group hover:bg-slate-200"
            >
              <div className={`w-6 h-6 bg-slate-950 rounded-full transition-premium ${currency === 'USD' ? 'translate-x-10' : 'translate-x-0'}`} />
            </button>
            <span className={`text-xs font-black uppercase tracking-[0.3em] transition-colors ${currency === 'USD' ? 'text-slate-950' : 'text-slate-300'}`}>Global (USD)</span>
          </div>
          
          <div className="text-slate-400 font-black text-sm uppercase tracking-[0.5em] mb-10">THE ALL-ACCESS PASS</div>
          <div className="flex flex-col items-center mb-16">
            <div className="text-7xl md:text-9xl font-black text-slate-950 tracking-tighter mb-6">
              {currency === 'NGN' ? '₦48,375' : '$35'}
            </div>
            <div className="px-6 py-2 bg-emerald-50 text-emerald-600 rounded-full text-sm font-black uppercase tracking-widest border border-emerald-100">One-Time Payment • Lifetime Access</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-16 text-left max-w-3xl mx-auto mb-20">
            {['40+ High-Definition Modules', 'Weekly Live Zoom Mentorship', '100+ Pro Prompt Templates', 'Private AI Agency Community', 'Hands-on Business Projects', 'Industry Verified Certification'].map((item, i) => (
              <div key={i} className="flex items-center gap-5 font-bold text-lg text-slate-700">
                <div className="bg-emerald-100 rounded-full p-1.5 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" /> 
                </div>
                {item}
              </div>
            ))}
          </div>

          <button onClick={onOpenModal} className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-950 py-8 rounded-[2.5rem] font-black text-3xl shadow-4xl shadow-yellow-400/40 transition-premium hover:-translate-y-2 active:scale-95 flex items-center justify-center gap-4">
            Enroll Now <ArrowRight className="w-8 h-8" />
          </button>
          
          <div className="mt-12 flex items-center justify-center gap-3 text-slate-400 font-black text-sm uppercase tracking-widest">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
            </div>
            Rated 4.9/5 by 1.2k+ Students
          </div>
        </div>
      </div>
    </section>
  );
};

const FaqItemComponent: React.FC<{ faq: typeof FAQS[0] }> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-10 flex items-center justify-between text-left group">
        <span className={`text-xl font-black transition-premium tracking-tight ${isOpen ? 'text-slate-950' : 'text-slate-600'} group-hover:text-slate-950`}>{faq.question}</span>
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-premium shrink-0 ml-4 ${isOpen ? 'bg-slate-950 text-white rotate-180 shadow-xl' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'}`}>
          <ChevronDown className="w-6 h-6" />
        </div>
      </button>
      {isOpen && (
        <div className="pb-12 text-lg text-slate-500 leading-relaxed font-medium animate-[fadeIn_0.4s_ease-out]">
          {faq.answer}
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [previewModule, setPreviewModule] = useState<Module | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  const onOpenModal = () => setIsModalOpen(true);
  const onPreviewModule = (module: Module) => setPreviewModule(module);
  const showSuccess = (msg: string) => setNotification(msg);

  return (
    <div className="min-h-screen bg-white">
      <Header onOpenModal={onOpenModal} />
      
      <main>
        <Hero onOpenModal={onOpenModal} />
        
        {/* Statistics Strip */}
        <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 text-center">
              {[
                { label: 'Students Trained', value: '1,200+' },
                { label: 'Modules Ready', value: '40+' },
                { label: 'Salary Boost', value: '45%' },
                { label: 'Completion Rate', value: '98%' }
              ].map((stat, i) => (
                <div key={i} className="relative group">
                  <div className="text-5xl md:text-6xl font-black text-white mb-3 tracking-tighter group-hover:text-yellow-400 transition-colors">{stat.value}</div>
                  <div className="text-xs font-black text-slate-400 uppercase tracking-[0.4em]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <BenefitSection />
        <CurriculumSection onPreviewModule={onPreviewModule} />
        <BonusSection />
        <TestimonialsSection />
        <PricingSection onOpenModal={onOpenModal} />

        {/* FAQ Section */}
        <section id="faqs" className="py-32 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-24">
              <span className="text-slate-400 font-black text-xs uppercase tracking-[0.4em] mb-4 block">ANY QUESTIONS?</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter">Your Concerns Answered</h2>
            </div>
            <div className="bg-white rounded-[4rem] p-10 md:p-20 border border-slate-100 shadow-3xl">
              {FAQS.map((faq, i) => (
                <FaqItemComponent key={i} faq={faq} />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-slate-950 rounded-[5rem] p-16 md:p-32 text-center text-white relative overflow-hidden shadow-4xl">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
               <div className="relative z-10">
                <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter leading-[0.9]">Become an AI <br />Leader Today.</h2>
                <button 
                  onClick={onOpenModal} 
                  className="bg-yellow-400 hover:bg-yellow-500 text-slate-950 px-20 py-8 rounded-[3rem] font-black text-3xl shadow-4xl shadow-yellow-400/20 transition-premium hover:scale-105 active:scale-95 flex items-center justify-center gap-5 mx-auto"
                >
                  Start Your Journey <ArrowRight className="w-10 h-10" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
            <div className="flex items-center gap-4">
              <div className="bg-slate-950 p-3 rounded-2xl shadow-lg">
                <Zap className="text-yellow-400 w-6 h-6 fill-yellow-400" />
              </div>
              <span className="font-black text-2xl tracking-tighter">ALA.</span>
            </div>
            <div className="flex flex-wrap justify-center gap-12">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Student Portal'].map(item => (
                <a key={item} href="#" className="text-xs font-black text-slate-400 hover:text-slate-950 transition-colors uppercase tracking-widest">{item}</a>
              ))}
            </div>
            <div className="text-slate-400 text-xs font-black uppercase tracking-[0.4em]">
              © 2026 AI LITERACY ACADEMY.
            </div>
          </div>
        </div>
      </footer>

      <InterestModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onShowSuccess={showSuccess}
      />

      <ModulePreviewModal 
        isOpen={!!previewModule} 
        module={previewModule} 
        onClose={() => setPreviewModule(null)} 
      />

      {notification && (
        <Notification message={notification} onClose={() => setNotification(null)} />
      )}
    </div>
  );
};

export default App;
