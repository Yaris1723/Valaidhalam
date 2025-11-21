import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import AnimatedSection from '@/components/AnimatedSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <AnimatedSection>
        <About />
      </AnimatedSection>
    </main>
  );
}