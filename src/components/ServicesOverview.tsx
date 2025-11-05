import React from 'react';

const services = [
  {
    name: 'Full-Stack Development',
    description: 'End-to-end development of robust and scalable applications, from database to user interface.',
    icon: (
      <svg className="w-12 h-12 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
    ),
  },
  {
    name: 'Web Application',
    description: 'Creation of dynamic and responsive web apps that provide rich user experiences on any device.',
    icon: (
      <svg className="w-12 h-12 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
    ),
  },
  {
    name: 'Social Media Management',
    description: 'Strategic planning and execution of social media campaigns to grow your brand and engage your audience.',
    icon: (
      <svg className="w-12 h-12 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
    ),
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            We offer a range of services to help your business succeed in the digital landscape.
          </p>
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.name} className="text-center p-8 bg-white rounded-lg shadow-md">
              {service.icon}
              <h3 className="mt-6 text-xl font-medium text-gray-900">{service.name}</h3>
              <p className="mt-2 text-base text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
