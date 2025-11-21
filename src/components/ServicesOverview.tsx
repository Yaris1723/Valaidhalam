"use client";

import React, { useLayoutEffect, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const services = [
  {
    name: 'Full-Stack Development',
    description: 'From concept to launch, we deliver scalable and secure applications engineered for performance and reliability.',
    icon: (
      <svg className="w-12 h-12 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
      </svg>
    ),
  },
  {
    name: 'Web Application',
    description: 'We create intuitive, responsive web applications that captivate users and function flawlessly on any device.',
    icon: (
      <svg className="w-12 h-12 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
      </svg>
    ),
  },
  {
    name: 'Social Media Management',
    description: "Our strategic social media management grows your brand&apos;s influence and converts followers into loyal customers.",
    icon: (
      <svg className="w-12 h-12 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
      </svg>
    ),
  },
];

type InfiniteMovingCardsProps = {
  items: typeof services;
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
};

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const initializedRef = useRef(false);
  const [start, setStart] = useState(false);

  useLayoutEffect(() => {
    if (scrollerRef.current && !initializedRef.current) {
      const children = Array.from(scrollerRef.current.children);
      children.forEach((child) => {
        scrollerRef.current?.appendChild(child.cloneNode(true));
      });
      initializedRef.current = true;
      queueMicrotask(() => setStart(true));
    }
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );

      const duration =
        speed === "fast" ? "20s" : speed === "slow" ? "80s" : "40s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full flex-nowrap gap-6 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[300px] shrink-0 rounded-2xl border border-zinc-200 bg-white px-8 py-6 text-center shadow-md dark:border-zinc-700 dark:bg-zinc-800 md:w-[400px]"
          >
            {item.icon}
            <h3 className="mt-4 text-xl font-medium text-gray-900 dark:text-white">{item.name}</h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400">{item.description}</p>
          </li>
        ))}
      </ul>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll var(--animation-duration) linear infinite;
          animation-direction: var(--animation-direction);
        }
      `}</style>
    </div>
  );
};

// Now use it in ServicesOverview
const ServicesOverview = () => {
  return (
    <section className=" bg-blue-300 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            We offer a range of services to help your business succeed in the digital landscape.
          </p>
        </div>
        <InfiniteMovingCards items={services} speed="normal" direction="left" pauseOnHover />
      </div>
    </section>
  );
};

export default ServicesOverview;
