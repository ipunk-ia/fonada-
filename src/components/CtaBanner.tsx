import React from 'react';

export function CtaBanner() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] text-center px-6 py-20 border border-white/10 shadow-[0_0_50px_rgba(37,99,235,0.2)]">
        
        {/* Subtle Geometric Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNHYtNGgtMnY0aC00djJoNHY0aDJ2LTRoNHYtMmgtNHptMC0zMFYwaC0ydjRoLTR2Mmg0djRoMnYtNGg0VjRoLTR6bS0yMCAxMnYtNGgtMnY0aC00djJoNHY0aDJ2LTRoNHYtMmgtNHptMTEgMTh2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTgtMTR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L2c+PC9zdmc+')] mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
            Ready to transform your business communication?
          </h2>
          <p className="text-xl text-blue-100 mb-10 w-full max-w-2xl mx-auto">
            Join 500+ enterprises already using Fonada's CPaaS platform to scale their operations securely.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-white text-accent hover:bg-gray-50 text-base font-semibold py-4 px-8 rounded-md transition-all shadow-lg hover:shadow-xl">
              Request a Demo
            </button>
            <button className="w-full sm:w-auto bg-transparent border border-white/30 text-white hover:bg-white/10 text-base font-medium py-4 px-8 rounded-md transition-all">
              Talk to Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
