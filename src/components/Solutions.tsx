import React from 'react';
import { motion } from 'motion/react';
import { Landmark, HeartPulse, ShoppingCart, GraduationCap, Plane, Building2, Truck, MonitorSmartphone } from 'lucide-react';

const industries = [
  { name: "Banking & Finance", icon: Landmark, desc: "Secure OTPs and transaction alerts" },
  { name: "Healthcare", icon: HeartPulse, desc: "Appointment reminders and telehealth" },
  { name: "E-commerce", icon: ShoppingCart, desc: "Order tracking and delivery updates" },
  { name: "Education", icon: GraduationCap, desc: "Student engagement and fee alerts" },
  { name: "Travel & Hospitality", icon: Plane, desc: "Booking confirmations and support" },
  { name: "IT & ITES", icon: MonitorSmartphone, desc: "ITSM alerts and incident response" },
  { name: "Logistics", icon: Truck, desc: "Fleet tracking and driver masking" },
  { name: "Government", icon: Building2, desc: "Citizen services and public alerts" },
];

export function Solutions() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4">
              Built for every industry
            </h2>
            <p className="text-lg text-text-secondary max-w-xl">
              Purpose-built solutions tailored to the unique communication compliance and volume needs of your sector.
            </p>
          </div>
          <a href="#" className="text-accent hover:text-accent-light font-medium inline-flex items-center whitespace-nowrap">
            View all solutions →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              whileHover={{ scale: 1.02 }}
              className="bg-bg-card border border-border p-6 rounded-xl hover:border-accent hover:shadow-glow transition-colors cursor-pointer group"
            >
              <ind.icon className="w-8 h-8 text-text-muted group-hover:text-accent transition-colors mb-4" />
              <h3 className="font-display font-semibold text-lg text-text-primary mb-1">{ind.name}</h3>
              <p className="text-sm text-text-secondary">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
