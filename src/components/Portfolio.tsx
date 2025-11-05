import React from 'react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured online store with a custom CMS and payment gateway integration.',
    category: 'Web Application',
  },
  {
    title: 'Corporate Branding',
    description: 'A complete social media and brand identity overhaul for a B2B tech company.',
    category: 'Social Media',
  },
  {
    title: 'SaaS Dashboard',
    description: 'A complex data visualization and management dashboard for a financial services client.',
    category: 'Full-Stack Development',
  },
];

const Portfolio = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Work</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Here's a glimpse of the solutions we've delivered.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="h-48 bg-primary flex items-center justify-center">
                {/* Placeholder for image */}
                <span className="text-white opacity-50">{project.category}</span>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-base text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
