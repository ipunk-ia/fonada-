import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, MessageSquare, Mic, Box, Bot } from 'lucide-react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 sm:top-[33px] left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-bg-primary/80 backdrop-blur-md border-b border-border py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-1 cursor-pointer">
            <span className="font-display font-bold text-2xl tracking-tight text-text-primary">
              fonada
            </span>
            <div className="w-2 h-2 rounded-full bg-accent mt-1"></div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="relative group cursor-pointer">
              <span className="flex items-center gap-1 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
                Products <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
              </span>
              
              {/* Mega Menu - Products */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-bg-card border border-border rounded-xl shadow-glow opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 -translate-y-2 group-hover:translate-y-0 p-6 grid grid-cols-2 gap-6">
                 
                 <div className="space-y-4">
                   <div className="flex items-start gap-3">
                     <div className="bg-accent/10 p-2 rounded-lg text-accent"><Mic className="w-5 h-5"/></div>
                     <div>
                       <h4 className="font-display font-medium text-sm text-text-primary mb-1">Voice & Telephony</h4>
                       <ul className="space-y-2 text-xs text-text-secondary">
                         <li className="hover:text-accent transition-colors">Cloud Contact Center</li>
                         <li className="hover:text-accent transition-colors">IVR Solutions</li>
                         <li className="hover:text-accent transition-colors">Virtual Numbers</li>
                       </ul>
                     </div>
                   </div>
                   
                   <div className="flex items-start gap-3">
                     <div className="bg-accent/10 p-2 rounded-lg text-accent"><MessageSquare className="w-5 h-5"/></div>
                     <div>
                       <h4 className="font-display font-medium text-sm text-text-primary mb-1">Messaging</h4>
                       <ul className="space-y-2 text-xs text-text-secondary">
                         <li className="hover:text-accent transition-colors">WhatsApp Business</li>
                         <li className="hover:text-accent transition-colors">RCS Business Messaging</li>
                         <li className="hover:text-accent transition-colors">Bulk SMS API</li>
                       </ul>
                     </div>
                   </div>
                 </div>

                 <div className="space-y-4">
                   <div className="flex items-start gap-3">
                     <div className="bg-accent/10 p-2 rounded-lg text-accent"><Bot className="w-5 h-5"/></div>
                     <div>
                       <h4 className="font-display font-medium text-sm text-text-primary mb-1">AI & Automation</h4>
                       <ul className="space-y-2 text-xs text-text-secondary">
                         <li className="hover:text-accent transition-colors">AI Voice Bots</li>
                         <li className="hover:text-accent transition-colors">Conversational Chatbots</li>
                       </ul>
                     </div>
                   </div>
                   
                   <div className="flex items-start gap-3">
                     <div className="bg-accent/10 p-2 rounded-lg text-accent"><Box className="w-5 h-5"/></div>
                     <div>
                       <h4 className="font-display font-medium text-sm text-text-primary mb-1">Unified API</h4>
                       <ul className="space-y-2 text-xs text-text-secondary">
                         <li className="hover:text-accent transition-colors">Developer Docs</li>
                         <li className="hover:text-accent transition-colors">SDKs & Libraries</li>
                       </ul>
                     </div>
                   </div>
                 </div>

              </div>
            </div>

            <div className="relative group cursor-pointer">
              <span className="flex items-center gap-1 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
                Solutions <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
              </span>
              {/* Solutions Dropdown */}
              <div className="absolute top-full left-0 mt-4 w-[300px] bg-bg-card border border-border rounded-xl shadow-glow opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 -translate-y-2 group-hover:translate-y-0 p-4">
                <ul className="space-y-3">
                  <li className="group/item flex items-center gap-3 hover:bg-white/5 p-2 rounded-md transition-colors">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover/item:bg-accent group-hover/item:text-white transition-colors">🏦</div>
                    <div>
                      <h4 className="font-medium text-sm text-text-primary">Banking & Finance</h4>
                      <p className="text-xs text-text-muted mt-0.5">Secure transactional comms</p>
                    </div>
                  </li>
                  <li className="group/item flex items-center gap-3 hover:bg-white/5 p-2 rounded-md transition-colors">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover/item:bg-accent group-hover/item:text-white transition-colors">🏥</div>
                    <div>
                      <h4 className="font-medium text-sm text-text-primary">Healthcare</h4>
                      <p className="text-xs text-text-muted mt-0.5">Patient engagement at scale</p>
                    </div>
                  </li>
                  <li className="group/item flex items-center gap-3 hover:bg-white/5 p-2 rounded-md transition-colors">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover/item:bg-accent group-hover/item:text-white transition-colors">🛒</div>
                    <div>
                      <h4 className="font-medium text-sm text-text-primary">E-Commerce</h4>
                      <p className="text-xs text-text-muted mt-0.5">Order updates & support</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <a href="#" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">Resources</a>
            <a href="#" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">Partners</a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-text-primary hover:text-accent transition-colors px-4 py-2">
              Contact Us
            </button>
            <button className="bg-accent hover:bg-accent-light text-white text-sm font-medium py-2.5 px-5 rounded-md transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]">
              Request Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-text-primary p-2">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-bg-primary/95 backdrop-blur-xl border-t border-border z-40 overflow-y-auto px-6 py-8">
          <div className="flex flex-col gap-6">
            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase text-text-muted tracking-wider">Menu</h3>
              <a href="#" className="block text-lg font-display text-text-primary font-medium">Products</a>
              <a href="#" className="block text-lg font-display text-text-primary font-medium">Solutions</a>
              <a href="#" className="block text-lg font-display text-text-primary font-medium">Resources</a>
              <a href="#" className="block text-lg font-display text-text-primary font-medium">Partners</a>
            </div>
            
            <div className="h-px bg-border w-full my-4"></div>
            
            <div className="flex flex-col gap-4">
              <button className="w-full border border-border text-text-primary font-medium py-3 rounded-md">
                Contact Us
              </button>
              <button className="w-full bg-accent text-white font-medium py-3 rounded-md">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
