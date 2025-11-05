import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-white text-center py-24 px-4">
      <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
        Propelling Your Business with High-Performance Web & Social Strategies.
      </h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
        We architect and execute robust full-stack applications, dynamic web experiences, and engaging social media campaigns that drive growth and deliver measurable results.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row sm:justify-center gap-4">
        <Link 
          href="/contact" 
          className="inline-flex items-center justify-center bg-gradient-to-r from-gradient-start to-gradient-end text-white font-bold py-4 px-10 rounded-full transition-transform transform hover:scale-105"
        >
          Schedule a Consultation
          <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
        <Link 
          href="#portfolio" 
          className="inline-flex items-center justify-center border border-primary text-primary font-bold py-4 px-10 rounded-full transition-colors hover:bg-primary/10"
        >
          View Our Work
        </Link>
      </div>
    </section>
  );
};

export default Hero;