import React from 'react';
import HeroSection from './components/HeroSection';
import { Benefits } from './components/Benefits';
import  CTASection from './components/CTASection';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <CTASection />
      </main>
    </div>
  );
}


