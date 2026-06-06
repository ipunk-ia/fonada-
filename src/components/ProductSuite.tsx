import React from 'react';
import { Mic, MessageCircle, Bot, Mail, Phone, Code, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function ProductSuite() {
  return (
    <section className="py-24 relative" id="products">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4">
            Everything you need to communicate at scale
          </h2>
          <p className="text-lg text-text-secondary">
            A unified suite of APIs and platforms designed for reliability and seamless integration into your tech stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1 - Cloud Telephony (Spans 2 cols) */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="group lg:col-span-2 relative bg-bg-card border border-border rounded-2xl p-8 overflow-hidden hover:border-accent/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.1)] transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center h-full">
              <div>
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                  <Mic size={24} />
                </div>
                <h3 className="text-xl font-display font-semibold text-text-primary mb-2">Cloud Telephony & IVR</h3>
                <p className="text-text-secondary mb-6">Build intelligent call flows, route customers dynamically, and analyze conversations in real-time.</p>
                <a href="#" className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-light transition-colors">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
              <div className="hidden md:flex flex-col gap-2 h-full justify-center">
                 {/* Decorative CSS Waveform */}
                 <div className="flex items-end justify-center gap-1.5 h-16 opacity-50 space-x-1">
                   {[1,3,2,5,3,6,4,7,3,5,2,4].map((h, i) => (
                     <div key={i} className="w-2 bg-accent rounded-t-sm" style={{ height: `${h * 10}%`, animation: `pulse-slow ${1 + i*0.1}s infinite alternate` }}></div>
                   ))}
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - WhatsApp */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="group relative bg-bg-card border border-border rounded-2xl p-8 overflow-hidden hover:border-success/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all"
          >
            <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center text-success mb-6">
              <MessageCircle size={24} />
            </div>
            <h3 className="text-xl font-display font-semibold text-text-primary mb-2">WhatsApp Business API</h3>
            <p className="text-text-secondary mb-6">Deliver rich transactional alerts and marketing campaigns directly to WhatsApp.</p>
            <a href="#" className="inline-flex items-center text-sm font-medium text-success hover:text-green-400 transition-colors">
              Learn more <ArrowRight size={16} className="ml-1" />
            </a>
          </motion.div>

          {/* Card 3 - AI Voice Bot */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="group relative bg-bg-card border border-border rounded-2xl p-8 overflow-hidden hover:border-accent/50 transition-all"
          >
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
              <Bot size={24} />
            </div>
            <h3 className="text-xl font-display font-semibold text-text-primary mb-2">AI Voice Bot & ChatBot</h3>
            <p className="text-text-secondary mb-6">Automate support with natural language understanding across text and voice.</p>
            <a href="#" className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-light transition-colors">
              Learn more <ArrowRight size={16} className="ml-1" />
            </a>
          </motion.div>

          {/* Card 4 - RCS & SMS */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="group relative bg-bg-card border border-border rounded-2xl p-8 overflow-hidden hover:border-accent/50 transition-all"
          >
            <div className="w-12 h-12 bg-gray-700/30 rounded-xl flex items-center justify-center text-text-primary mb-6">
              <Mail size={24} />
            </div>
            <h3 className="text-xl font-display font-semibold text-text-primary mb-2">RCS & SMS Messaging</h3>
            <p className="text-text-secondary mb-6">Next-gen rich media messaging and 99.9% reliable global SMS delivery route.</p>
            <a href="#" className="inline-flex items-center text-sm font-medium text-text-primary hover:text-white transition-colors">
              Learn more <ArrowRight size={16} className="ml-1" />
            </a>
          </motion.div>
          
          {/* Card 5 - Virtual Numbers */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="group relative bg-bg-card border border-border rounded-2xl p-8 overflow-hidden hover:border-warning/50 transition-all"
          >
            <div className="w-12 h-12 bg-warning/10 rounded-xl flex items-center justify-center text-warning mb-6">
              <Phone size={24} />
            </div>
            <h3 className="text-xl font-display font-semibold text-text-primary mb-2">Virtual Numbers & Masking</h3>
            <p className="text-text-secondary mb-6">Protect customer privacy with secure call masking and local presence numbers.</p>
            <a href="#" className="inline-flex items-center text-sm font-medium text-warning hover:text-yellow-400 transition-colors">
              Learn more <ArrowRight size={16} className="ml-1" />
            </a>
          </motion.div>

          {/* Card 6 - Unified API Platform (Spans 2 cols) */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="group lg:col-span-2 relative bg-bg-card border border-border rounded-2xl p-8 overflow-hidden hover:border-accent/50 transition-all flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
            
            <div className="flex-1 relative z-10 w-full">
              <div className="bg-[#0A0D14] rounded-lg border border-border/50 p-4 font-mono text-xs overflow-x-auto">
                <div className="flex gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-gray-400">
                  <span className="text-purple-400">curl</span> -X POST <span className="text-green-300">"https://api.fonada.com/v1/messages"</span> \ <br/>
                  &nbsp;&nbsp;-H <span className="text-green-300">"Authorization: Bearer YOUR_API_KEY"</span> \ <br/>
                  &nbsp;&nbsp;-H <span className="text-green-300">"Content-Type: application/json"</span> \ <br/>
                  &nbsp;&nbsp;-d '<span className="text-yellow-300">&#123;</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">"to"</span>: <span className="text-green-300">"+919876543210"</span>,<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">"channel"</span>: <span className="text-green-300">"whatsapp"</span>,<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">"text"</span>: <span className="text-green-300">"Your OTP is 4912"</span><br/>
                  &nbsp;&nbsp;<span className="text-yellow-300">&#125;</span>'
                </div>
              </div>
            </div>

            <div className="flex-1 relative z-10">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-display font-semibold text-text-primary mb-2">Unified API Platform</h3>
              <p className="text-text-secondary mb-6">One single API integration for all communication channels. Write once, deploy anywhere with enterprise-grade security.</p>
              <a href="#" className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-light transition-colors">
                View Documentation <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}
