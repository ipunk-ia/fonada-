import React from 'react';
import { Twitter, Linkedin, Youtube, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#05080e] border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Col 1 */}
          <div className="space-y-6">
            <div className="flex items-center gap-1 cursor-pointer">
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                fonada
              </span>
              <div className="w-2 h-2 rounded-full bg-accent mt-1"></div>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              Leading CPaaS platform connecting enterprises with their customers globally.
            </p>
            <div className="flex items-center gap-4 text-text-muted">
              <a href="#" className="hover:text-accent transition-colors"><Twitter size={18} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Facebook size={18} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Youtube size={18} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs">Products</h4>
            <ul className="space-y-4 text-sm text-text-secondary relative">
              <li><a href="#" className="hover:text-accent transition-colors">Cloud Telephony</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">WhatsApp Business</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">AI Voice Bot</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Conversational AI</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">RCS Messaging</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Unified APIs</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs">Company</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Webinars</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partners Program</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs">Contact</h4>
            <ul className="space-y-4 text-sm text-text-secondary font-medium">
              <li>Sales: +91-7479-574795</li>
              <li>Support: 1800-137-3839</li>
              <li>Email: info@fonada.com</li>
            </ul>
            <div className="mt-6">
              <p className="text-xs text-text-muted mb-2 font-medium">Subscribe to newsletter</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="bg-bg-primary border border-border rounded-l-md px-3 py-2 text-sm w-full focus:outline-none focus:border-accent text-white"
                />
                <button className="bg-accent hover:bg-accent-light px-4 py-2 rounded-r-md text-white text-sm font-medium transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Fonada Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-text-muted">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span className="flex items-center gap-1 font-medium bg-white/5 border border-white/10 px-2 py-1 rounded">
              Made in India 🇮🇳
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
