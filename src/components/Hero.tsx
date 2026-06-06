import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          
          {/* Left Text Content */}
          <div className="flex flex-col items-start gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-xs font-semibold text-accent tracking-wide uppercase">Next-Gen CPaaS Platform</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-bold text-5xl md:text-6xl text-white leading-tight"
            >
              Connect. Automate. Scale.
              <span className="block text-3xl md:text-4xl text-text-secondary mt-2 font-semibold">
                Communication infrastructure for India's growing enterprises.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed"
            >
              Voice, SMS, WhatsApp, RCS, AI Bots, and Cloud Telephony — unified on a single platform.
            </motion.p>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.3 }}
               className="flex flex-wrap items-center gap-4 mt-4"
            >
              <button className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white text-base font-medium py-3.5 px-7 rounded-md transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]">
                Request a Free Demo <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-border text-white text-base font-medium py-3.5 px-7 rounded-md transition-all">
                <PlayCircle className="w-5 h-5 text-text-secondary" /> Explore Products
              </button>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.5, delay: 0.5 }}
               className="flex items-center gap-4 divide-x divide-border text-xs font-medium text-text-muted mt-8"
            >
              <span className="pr-4">500+ Enterprise Clients</span>
              <span className="px-4">10B+ Messages Delivered</span>
              <span className="pl-4">99.9% Uptime SLA</span>
            </motion.div>
          </div>

          {/* Right Visual Data Flow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] w-full hidden lg:block"
          >
            {/* Abstract node diagram using CSS and SVG */}
            <div className="absolute inset-0 flex items-center justify-center">
               <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                 {/* Central Business Node */}
                 <circle cx="200" cy="200" r="40" fill="#141B2D" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                 <text x="200" y="205" fill="#F8FAFC" fontSize="14" fontFamily="Inter" fontWeight="600" textAnchor="middle">API</text>
                 
                 {/* Outer Nodes */}
                 <circle cx="100" cy="100" r="30" fill="#141B2D" stroke="rgba(37,99,235,0.5)" strokeWidth="2" />
                 <text x="100" y="105" fill="#94A3B8" fontSize="12" fontFamily="Inter" textAnchor="middle">Voice</text>
                 
                 <circle cx="300" cy="100" r="30" fill="#141B2D" stroke="rgba(16,185,129,0.5)" strokeWidth="2" />
                 <text x="300" y="105" fill="#94A3B8" fontSize="12" fontFamily="Inter" textAnchor="middle">WA</text>
                 
                 <circle cx="100" cy="300" r="30" fill="#141B2D" stroke="rgba(245,158,11,0.5)" strokeWidth="2" />
                 <text x="100" y="305" fill="#94A3B8" fontSize="12" fontFamily="Inter" textAnchor="middle">AI</text>

                 <circle cx="300" cy="300" r="30" fill="#141B2D" stroke="rgba(148,163,184,0.5)" strokeWidth="2" />
                 <text x="300" y="305" fill="#94A3B8" fontSize="12" fontFamily="Inter" textAnchor="middle">SMS</text>

                 {/* Connecting Lines with animated dashes */}
                 <path d="M125 125 L175 175" stroke="#2563EB" strokeWidth="2" strokeDasharray="5 5" className="animate-[dash_10s_linear_infinite]" />
                 <path d="M225 175 L275 125" stroke="#10B981" strokeWidth="2" strokeDasharray="5 5" className="animate-[dash_10s_linear_infinite_reverse]" />
                 <path d="M125 275 L175 225" stroke="#F59E0B" strokeWidth="2" strokeDasharray="5 5" className="animate-[dash_10s_linear_infinite]" />
                 <path d="M225 225 L275 275" stroke="#94A3B8" strokeWidth="2" strokeDasharray="5 5" className="animate-[dash_10s_linear_infinite_reverse]" />
                 
                 <style>
                   {`
                     @keyframes dash { to { stroke-dashoffset: -100; } }
                   `}
                 </style>
               </svg>
            </div>
            
            {/* Floating glass cards for effect */}
            <div className="absolute top-10 right-0 bg-bg-card/80 backdrop-blur-md border border-border p-3 rounded-lg shadow-card animate-pulse-slow">
              <div className="flex gap-2 items-center">
                <div className="w-2 h-2 rounded-full bg-success"></div>
                <span className="text-xs text-text-primary">OTP Delivered</span>
              </div>
            </div>
            <div className="absolute bottom-20 left-0 bg-bg-card/80 backdrop-blur-md border border-border p-3 rounded-lg shadow-card animate-pulse-slow" style={{animationDelay: '1s'}}>
               <div className="flex gap-2 items-center">
                 <div className="w-2 h-2 rounded-full bg-accent"></div>
                 <span className="text-xs text-text-primary">Voice AI Active</span>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
