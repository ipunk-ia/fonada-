import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Switching to Fonada resulted in an immediate 18% improvement in our OTP delivery rates. The API is robust and the support team is excellent.",
    name: "Rajesh Kumar",
    role: "CTO",
    company: "FinTech Innovations",
    logo: "FINTECH"
  },
  {
    quote: "Their WhatsApp Business API integration was seamless. We automated 60% of our tier-1 support queries within just two weeks of deployment.",
    name: "Priya Sharma",
    role: "Head of Operations",
    company: "RetailCart India",
    logo: "RETAILCART"
  },
  {
    quote: "The Cloud Telephony dashboard gives us unprecedented visibility into agent performance and call routing efficiency across our 500-person team.",
    name: "Vikram Desai",
    role: "VP Support",
    company: "HealthPlus Solutions",
    logo: "HEALTHPLUS"
  }
];

function Stars() {
  return (
    <div className="flex gap-1 mb-4 text-warning">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} size={16} fill="currentColor" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 pt-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary">
            What our clients say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-bg-card/40 backdrop-blur-sm border border-border p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <Stars />
                <p className="text-text-primary text-lg leading-relaxed mb-8">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-display font-bold text-accent">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{t.name}</h4>
                  <p className="text-sm text-text-secondary">{t.role}, <span className="font-display text-text-muted">{t.company}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
