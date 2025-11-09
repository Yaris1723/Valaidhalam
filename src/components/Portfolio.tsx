"use client";

import React, { useEffect, useRef, useState } from "react";
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

const AnimatedPortfolio = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (scrollerRef.current) {
      // Duplicate content for infinite scroll
      const children = Array.from(scrollerRef.current.children);
      children.forEach((child) => {
        const clone = child.cloneNode(true);
        scrollerRef.current?.appendChild(clone);
      });
      setStart(true);
    }
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Work</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Here's a glimpse of the solutions we've delivered.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative mt-12 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
          }}
        >
          <div
            ref={scrollerRef}
            className={`flex gap-8 py-4 animate-scroll ${
              start ? "animate-scroll" : ""
            }`}
            style={{
              animation: start
                ? "scroll 30s linear infinite"
                : "none",
            }}
          >
            {projects.map((project) => (
              <div
                key={project.title}
                className="flex-shrink-0 w-[300px] md:w-[400px] rounded-2xl shadow-lg overflow-hidden bg-white border border-gray-200"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <span className="text-sm text-gray-500 font-semibold">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    <strong className="font-semibold text-gray-800">
                      Problem:
                    </strong>{" "}
                    {project.problem}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong className="font-semibold text-gray-800">
                      Solution:
                    </strong>{" "}
                    {project.solution}
                  </p>
                  <p className="text-sm text-green-600">
                    <strong className="font-semibold text-green-700">
                      Result:
                    </strong>{" "}
                    {project.result}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full"
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
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default AnimatedPortfolio;
