"use client";

import { cn } from "@/lib/utils";
import React, { useLayoutEffect, useState, useCallback } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    icon?: React.ReactNode; // Added icon property
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const initializedRef = React.useRef(false);

  const [start, setStart] = useState(false);

  const setDirection = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  }, [direction]);

  const setSpeed = useCallback(() => {
    if (containerRef.current) {
      const duration = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current && !initializedRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      setDirection();
      setSpeed();
      initializedRef.current = true;
      queueMicrotask(() => setStart(true));
    }
  }, [setDirection, setSpeed]);

  useLayoutEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
            key={item.name + idx}
          >
            <blockquote className="flex flex-col items-center">
              {/* Render icon if provided */}
              {item.icon && <div className="mb-4">{item.icon}</div>}

              <span className="text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100 text-center">
                {item.quote}
              </span>

              <div className="mt-6 flex flex-col items-center gap-1">
                <span className="text-sm leading-[1.6] font-medium text-neutral-500 dark:text-gray-400">
                  {item.name}
                </span>
                {item.title && (
                  <span className="text-sm leading-[1.6] font-normal text-neutral-400 dark:text-gray-500">
                    {item.title}
                  </span>
                )}
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
