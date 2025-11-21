'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-primary-50/30 to-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-end/5 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite_2s]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 lg:px-12 text-center">
        {/* Main Heading with Fade In Animation */}
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 leading-tight opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]"
          style={{ animationFillMode: 'forwards' }}
        >
          Propelling Your Business with{' '}
          <span className="gradient-text">
            High-Performance
          </span>{' '}
          Web & Social Strategies
        </h1>

        {/* Subtitle */}
        <p
          className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-neutral-600 leading-relaxed opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]"
          style={{ animationFillMode: 'forwards' }}
        >
          We architect and execute robust full-stack applications, dynamic web experiences,
          and engaging social media campaigns that drive growth and deliver measurable results.
        </p>

        {/* CTA Buttons */}
        <div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]"
          style={{ animationFillMode: 'forwards' }}
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center bg-primary text-white font-semibold px-8 py-4 rounded-full hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center border-2 border-neutral-300 text-neutral-700 font-semibold px-8 py-4 rounded-full hover:border-primary hover:text-primary hover:bg-primary-50/50 transition-all duration-300"
          >
            View Our Work
          </Link>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="mt-20 opacity-0 animate-[fadeIn_0.8s_ease-out_1s_forwards]" style={{ animationFillMode: 'forwards' }}>
          <div className="inline-flex flex-col items-center gap-2 text-neutral-400">
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-neutral-300 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-neutral-400 rounded-full animate-[pulse-subtle_2s_ease-in-out_infinite]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;