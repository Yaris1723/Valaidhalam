import React from 'react';

const projects = [
  {
    title: 'E-commerce Platform',
    category: 'Web Application',
    problem: 'A local retailer needed to move online to expand their market reach but lacked a digital storefront.',
    solution: 'We built a full-featured e-commerce site with a custom CMS for easy product management and integrated Stripe for secure payments.',
    result: 'Achieved a 300% increase in sales within the first six months and expanded their customer base nationwide.',
    tech: ['Next.js', 'Stripe', 'Vercel'],
  },
  {
    title: 'Corporate Rebranding',
    category: 'Social Media',
    problem: 'A B2B tech company had an outdated brand identity that failed to connect with a younger, more dynamic audience.',
    solution: 'We executed a complete brand overhaul, including a new visual identity and a data-driven content strategy for LinkedIn and Twitter.',
    result: 'Increased social media engagement by 150% and generated a 40% rise in qualified inbound leads.',
    tech: ['Figma', 'Content Strategy'],
  },
  {
    title: 'SaaS Dashboard',
    category: 'Full-Stack Development',
    problem: 'A financial services client was using spreadsheets to manage complex datasets, leading to errors and inefficiency.',
    solution: 'We developed a secure, real-time data visualization dashboard, allowing for complex queries and reporting.',
    result: 'Reduced manual data processing time by 90% and improved data accuracy to over 99.9%.',
    tech: ['React', 'Node.js', 'AWS'],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Work</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Here's a glimpse of the solutions we've delivered.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="flex-shrink-0 h-48 bg-primary flex items-center justify-center">
                 <span className="text-white opacity-75 font-bold text-lg">{project.category}</span>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <div className="mt-3 space-y-4">
                    <p className="text-sm text-gray-600"><strong className="font-semibold text-gray-800">Problem:</strong> {project.problem}</p>
                    <p className="text-sm text-gray-600"><strong className="font-semibold text-gray-800">Solution:</strong> {project.solution}</p>
                    <p className="text-sm text-green-600"><strong className="font-semibold text-green-700">Result:</strong> {project.result}</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <span key={tag} className="inline-block bg-secondary text-primary text-xs font-medium px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
