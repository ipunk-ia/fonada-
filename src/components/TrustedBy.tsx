import React from 'react';

export function TrustedBy() {
  const logos = [
    "HDFC Bank", "Paytm", "Zomato", "Nykaa", "PolicyBazaar", "Tata Motors", "Reliance", "Mahindra", "Swiggy", "Flipkart"
  ];

  return (
    <section className="py-12 border-y border-border/50 bg-[#0c1221] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-8 text-center">
        <p className="text-sm font-medium text-text-muted uppercase tracking-widest">
          Trusted by 500+ enterprises across India
        </p>
      </div>

      <div className="relative flex w-full max-w-[100vw] overflow-hidden">
        {/* Left & Right Gradients for smooth fade out */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0c1221] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0c1221] to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-[marquee_30s_linear_infinite] shrink-0 gap-6 px-3">
          {[...logos, ...logos].map((logo, i) => (
            <div 
              key={i} 
              className="px-6 py-3 rounded-full bg-bg-primary border border-border shrink-0 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
            >
              <span className="font-display font-semibold text-text-secondary text-lg grayscale tracking-wide">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
