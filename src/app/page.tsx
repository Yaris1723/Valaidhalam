import React from 'react';
import Hero from '@/components/Hero';
import ServicesOverview from '@/components/ServicesOverview';
import Portfolio from '@/components/Portfolio';
import ContactForm from '@/components/ContactForm';
import AnimatedSection from '@/components/AnimatedSection';
import TrustedBy from '@/components/TrustedBy';
import About from '@/components/About';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <AnimatedSection>
        <ServicesOverview />
      </AnimatedSection>
      <AnimatedSection>
        <About />
      </AnimatedSection>
      <AnimatedSection>
        <Portfolio />
      </AnimatedSection>
      <AnimatedSection>
        <ContactForm />
      </AnimatedSection>
    </main>
  );
}
