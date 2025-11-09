"use client";
import React from "react";
import Link from "next/link";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const Hero = () => {
  const wordsLine1 = [
    { text: "Propelling Your Business" },
    { text: "with High-Performance Web" },
  ];

  const wordsLine2 = [
    { text: "& Social" },
    { text: "Strategies." },
  ];

  return (
      <section
      className="relative text-center flex flex-col items-center justify-center py-16 px-4 text-white overflow-hidden"
      style={{
        background: "linear-gradient(115deg, #81d5ff, #e3b3ff)",
      }}
    >
      {/* Optional subtle overlay for contrast */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-1">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          <TypewriterEffectSmooth words={wordsLine1} />
        </h1>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          <TypewriterEffectSmooth words={wordsLine2} />
        </h2>
      </div>

      {/* Description */}
      <p className="relative z-10 mt-4 max-w-2xl mx-auto text-lg text-blue-100 text-center leading-relaxed">
        We architect and execute robust full-stack applications, dynamic web experiences,
        and engaging social media campaigns that drive growth and deliver measurable results.
      </p>

      {/* Buttons */}
      <div className="relative z-10 mt-6 flex flex-col sm:flex-row sm:justify-center gap-3">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center bg-white text-blue-700 font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-md"
        >
          Schedule a Consultation
          <svg
            className="ml-2 -mr-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>

        <Link
          href="#portfolio"
          className="inline-flex items-center justify-center border border-white text-white font-bold py-3 px-8 rounded-full transition-colors hover:bg-white/10"
        >
          View Our Work
        </Link>
      </div>
    </section>
  );
};

export default Hero;
