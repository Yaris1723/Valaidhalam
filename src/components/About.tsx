import React from "react";

const About = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div>
          <img
            src="/images/2456073.jpg" // ensure the image is in /public/images/
            alt="Team working together"
            className="rounded-2xl shadow-lg w-full"
          />
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            About Us
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A Partner in Your Digital Journey
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Our mission is to empower businesses by creating impactful digital
            solutions. We believe in partnership, innovation, and a commitment
            to excellence, ensuring every project we undertake drives tangible
            value and success for our clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
