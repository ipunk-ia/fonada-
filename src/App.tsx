import React from 'react';
import { TopBar } from './components/TopBar';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TrustedBy } from './components/TrustedBy';
import { ProductSuite } from './components/ProductSuite';
import { HowItWorks } from './components/HowItWorks';
import { Solutions } from './components/Solutions';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg-primary flex flex-col">
      <TopBar />
      <Navigation />
      <main className="flex-1">
        <Hero />
        <TrustedBy />
        <ProductSuite />
        <HowItWorks />
        <Solutions />
        <Stats />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
