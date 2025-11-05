import React from 'react';
import Hero from '@/components/Hero';
import ServicesOverview from '@/components/ServicesOverview';
import Portfolio from '@/components/Portfolio';
import ContactForm from '@/components/ContactForm';
import AnimatedSection from '@/components/AnimatedSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <AnimatedSection>
        <ServicesOverview />
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
