'use client';

import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-gradient-end/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src="/images/2456073.jpg"
                alt="Team working together"
                className="relative rounded-2xl shadow-xl w-full hover:shadow-2xl transition-shadow duration-500"
                width={800}
                height={600}
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <span className="inline-block text-sm font-semibold tracking-wider text-primary uppercase mb-3">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
                A Partner in Your{' '}
                <span className="gradient-text">Digital Journey</span>
              </h2>
            </div>

            <p className="text-lg text-neutral-600 leading-relaxed">
              Our mission is to empower businesses by creating impactful digital
              solutions. We believe in partnership, innovation, and a commitment
              to excellence, ensuring every project we undertake drives tangible
              value and success for our clients.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-neutral-600">Projects Delivered</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-neutral-600">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
