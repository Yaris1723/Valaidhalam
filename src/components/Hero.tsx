import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-white text-center py-20 px-4">
      <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
        Modern Solutions for a Digital World
      </h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
        We build powerful web applications, manage your social media presence, and deliver full-stack solutions tailored to your business needs.
      </p>
      <div className="mt-8">
        <Link 
          href="/contact" 
          className="inline-block bg-gradient-to-r from-gradient-start to-gradient-end text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default Hero;
