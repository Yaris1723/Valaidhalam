'use client';

import React from "react";
import { Code, Globe, Users } from "lucide-react";

const services = [
  {
    name: 'Full-Stack Development',
    description: 'From concept to launch, we deliver scalable and secure applications engineered for performance and reliability.',
    icon: Code,
  },
  {
    name: 'Web Application',
    description: 'We create intuitive, responsive web applications that captivate users and function flawlessly on any device.',
    icon: Globe,
  },
  {
    name: 'Social Media Management',
    description: "Our strategic social media management grows your brand's influence and converts followers into loyal customers.",
    icon: Users,
  },
];

const ServicesOverview = () => {
  return (
    <section className="section-spacing bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold tracking-wider text-primary uppercase mb-3">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-tight mb-6">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            We offer a range of services to help your business succeed in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.name}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-neutral-100"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
                  opacity: 0,
                  animationFillMode: 'forwards'
                }}
              >
                {/* Gradient Border Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-gradient-end/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-6 flex items-center text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm">Learn more</span>
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
