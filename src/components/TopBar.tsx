import React from 'react';
import { Twitter, Linkedin, Youtube, Facebook, Instagram } from 'lucide-react';

export function TopBar() {
  return (
    <div className="bg-[#05080e] border-b border-border text-xs text-text-secondary py-2 hidden sm:block">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <span>🇮🇳</span> Support: 1800-137-3839
          </span>
          <span className="flex items-center gap-2">
            Sales: +91-7479-574795
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-text-primary transition-colors aria-label='Twitter'"><Twitter className="w-3.5 h-3.5" /></a>
          <a href="#" className="hover:text-text-primary transition-colors aria-label='LinkedIn'"><Linkedin className="w-3.5 h-3.5" /></a>
          <a href="#" className="hover:text-text-primary transition-colors aria-label='YouTube'"><Youtube className="w-3.5 h-3.5" /></a>
          <a href="#" className="hover:text-text-primary transition-colors aria-label='Facebook'"><Facebook className="w-3.5 h-3.5" /></a>
          <a href="#" className="hover:text-text-primary transition-colors aria-label='Instagram'"><Instagram className="w-3.5 h-3.5" /></a>
        </div>
      </div>
    </div>
  );
}
