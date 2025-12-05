'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Code, Briefcase, FolderOpen, Mail, Sparkles } from 'lucide-react';
import SpotlightCard from '@/components/ui/SpotlightCard';

const Hero = () => {
  const pageCards = [
    {
      title: "Services",
      description: "Explore our comprehensive digital solutions",
      icon: Briefcase,
      link: "/services",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Portfolio",
      description: "View our successful projects and case studies",
      icon: FolderOpen,
      link: "/portfolio",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Contact",
      description: "Connect with our team for inquiries and support",
      icon: Mail,
      link: "/contact",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-primary-50/30 to-white pt-24 pb-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-end/5 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite_2s]" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_1s]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Main Heading */}
        <h1
          className="text-center text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 leading-tight opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]"
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
          className="mt-6 text-center max-w-3xl mx-auto text-lg md:text-xl text-neutral-600 leading-relaxed opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]"
          style={{ animationFillMode: 'forwards' }}
        >
          We architect and execute robust full-stack applications, dynamic web experiences,
          and engaging social media campaigns that drive growth and deliver measurable results.
        </p>

        {/* Quick Navigation Cards */}
        <div
          className="mt-16 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]"
          style={{ animationFillMode: 'forwards' }}
        >
          {pageCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.title}
                href={card.link}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.8 + index * 0.1}s forwards`,
                  opacity: 0,
                  animationFillMode: 'forwards'
                }}
              >
                <SpotlightCard
                  className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-neutral-100 hover:border-transparent transition-all duration-500 hover:-translate-y-2"
                  spotlightColor="rgba(0, 123, 255, 0.15)"
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  <div className="relative">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                      {card.description}
                    </p>

                    {/* Arrow */}
                    <div className="flex items-center text-primary font-semibold text-sm">
                      <span>Explore</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            );
          })}
        </div>

        {/* Primary CTA */}
        <div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-[fadeInUp_0.8s_ease-out_1s_forwards]"
          style={{ animationFillMode: 'forwards' }}
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center bg-primary text-white font-semibold px-8 py-4 rounded-full hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300"
          >
            <Code className="mr-2 h-5 w-5" />
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center border-2 border-neutral-300 text-neutral-700 font-semibold px-8 py-4 rounded-full hover:border-primary hover:text-primary hover:bg-primary-50/50 transition-all duration-300"
          >
            View Success Stories
          </Link>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="mt-16 opacity-0 animate-[fadeIn_0.8s_ease-out_1.2s_forwards]" style={{ animationFillMode: 'forwards' }}>
          <div className="flex flex-col items-center gap-2 text-neutral-400">
            <span className="text-sm font-medium">Scroll to learn more</span>
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