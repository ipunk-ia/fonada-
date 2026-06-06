import React from 'react';
import { motion } from 'motion/react';
import { Code2, Settings2, Rocket } from 'lucide-react';

export function HowItWorks() {
  return (
    <section className="py-24 bg-bg-secondary relative border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4">
            Deploy in minutes, scale in days
          </h2>
          <p className="text-lg text-text-secondary">
            Our developer-first architecture ensures a frictionless go-to-market.
          </p>
        </div>

        <div className="relative">
          {/* Background Line */}
          <div className="absolute top-12 left-0 right-0 h-0.5 bg-border hidden md:block"></div>
          
          {/* Animated Fill Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-12 left-0 right-0 h-0.5 bg-accent origin-left hidden md:block shadow-[0_0_10px_rgba(37,99,235,0.8)]"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-bg-primary border-2 border-border flex items-center justify-center text-accent mb-6 relative">
                <div className="absolute inset-2 rounded-full bg-accent/5 backdrop-blur-sm"></div>
                <Code2 size={32} className="relative z-10" />
              </div>
              <h3 className="font-display font-semibold text-xl text-text-primary mb-2">1. Integrate API</h3>
              <p className="text-text-secondary text-sm">
                Drop in our lightweight SDKs or use our REST APIs written in your preferred language.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-bg-primary border-2 border-border flex items-center justify-center text-accent mb-6 relative">
                <div className="absolute inset-2 rounded-full bg-accent/5 backdrop-blur-sm"></div>
                <Settings2 size={32} className="relative z-10" />
              </div>
              <h3 className="font-display font-semibold text-xl text-text-primary mb-2">2. Configure Channels</h3>
              <p className="text-text-secondary text-sm">
                Set up routing, templates, and webhooks visually via our enterprise dashboard.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-bg-primary border-2 border-border flex items-center justify-center text-accent mb-6 relative hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all duration-500">
                <div className="absolute inset-2 rounded-full bg-accent/5 backdrop-blur-sm"></div>
                <Rocket size={32} className="relative z-10" />
              </div>
              <h3 className="font-display font-semibold text-xl text-text-primary mb-2">3. Go Live & Scale</h3>
              <p className="text-text-secondary text-sm">
                Deploy to production with built-in compliance, automatic failover, and analytics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
