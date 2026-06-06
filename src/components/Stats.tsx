import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';

function Counter({ end, suffix = "", duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        
        // Easing function (easeOutQuart)
        const ease = 1 - Math.pow(1 - progress, 4);
        
        let current;
        if (typeof end === 'number') {
           current = Math.floor(ease * end);
        } else if (typeof end === 'string' && end.includes('.')) {
           // Handle decimal like 99.9
           const num = parseFloat(end);
           current = (ease * num).toFixed(1);
        }
        
        setCount(current);
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function Stats() {
  return (
    <section className="py-20 bg-[#060913] border-y border-border/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border/50 text-center">
          
          <div className="space-y-2">
            <h3 className="font-display font-bold text-4xl md:text-5xl text-accent">
              <Counter end={500} suffix="+" />
            </h3>
            <p className="text-sm font-medium text-text-secondary uppercase tracking-wider">Enterprise Clients</p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-display font-bold text-4xl md:text-5xl text-accent">
              <Counter end={10} suffix="B+" />
            </h3>
            <p className="text-sm font-medium text-text-secondary uppercase tracking-wider">API Calls / Year</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-display font-bold text-4xl md:text-5xl text-accent">
              <Counter end="99.9" suffix="%" />
            </h3>
            <p className="text-sm font-medium text-text-secondary uppercase tracking-wider">Uptime SLA</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-display font-bold text-4xl md:text-5xl text-accent">
              <Counter end={150} suffix="+" />
            </h3>
            <p className="text-sm font-medium text-text-secondary uppercase tracking-wider">Countries Reached</p>
          </div>

        </div>
      </div>
    </section>
  );
}
