'use client';

import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "E-commerce Platform",
    category: "Web Application",
    problem:
      "A local retailer needed to move online to expand their market reach but lacked a digital storefront.",
    solution:
      "We built a full-featured e-commerce site with a custom CMS for easy product management and integrated Stripe for secure payments.",
    result:
      "Achieved a 300% increase in sales within the first six months and expanded their customer base nationwide.",
    tech: ["Next.js", "Stripe", "Vercel"],
    image: "/images/971.jpg",
  },
  {
    title: "Corporate Rebranding",
    category: "Social Media",
    problem:
      "A B2B tech company had an outdated brand identity that failed to connect with a younger, more dynamic audience.",
    solution:
      "We executed a complete brand overhaul, including a new visual identity and a data-driven content strategy for LinkedIn and Twitter.",
    result:
      "Increased social media engagement by 150% and generated a 40% rise in qualified inbound leads.",
    tech: ["Figma", "Content Strategy"],
    image: "/images/7464957.jpg",
  },
  {
    title: "SaaS Dashboard",
    category: "Full-Stack Development",
    problem:
      "A financial services client was using spreadsheets to manage complex datasets, leading to errors and inefficiency.",
    solution:
      "We developed a secure, real-time data visualization dashboard, allowing for complex queries and reporting.",
    result:
      "Reduced manual data processing time by 90% and improved data accuracy to over 99.9%.",
    tech: ["React", "Node.js", "AWS"],
    image: "/images/344.jpg",
  },
];

const Portfolio = () => {
  return (
    <section className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold tracking-wider text-primary uppercase mb-3">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-tight mb-6">
            Success Stories
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Here's a glimpse of the solutions we've delivered and the results we've achieved.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-neutral-100"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
                opacity: 0,
                animationFillMode: 'forwards'
              }}
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden bg-neutral-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-neutral-900 mt-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <div className="space-y-3 text-sm">
                  <p className="text-neutral-600">
                    <strong className="font-semibold text-neutral-800">Problem:</strong>{" "}
                    {project.problem}
                  </p>
                  <p className="text-neutral-600">
                    <strong className="font-semibold text-neutral-800">Solution:</strong>{" "}
                    {project.solution}
                  </p>
                  <p className="text-green-700">
                    <strong className="font-semibold text-green-800">Result:</strong>{" "}
                    {project.result}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-neutral-100 text-neutral-700 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
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
