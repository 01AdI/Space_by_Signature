"use client";

import { cn } from "../../lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Duplicate items for infinite effect
      scrollerContent.forEach((item) => {
        const clone = item.cloneNode(true);
        scrollerRef.current.appendChild(clone);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
  };

  const getSpeed = () => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty(
      "--animation-duration",
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"
    );
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-6",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="
              moving-card 
              relative 
              w-[260px] 
              sm:w-[320px] 
              md:w-[380px] 
              lg:w-[420px] 
              xl:w-[450px]
              shrink-0 
              rounded-3xl 
              border 
              border-white/20 
              bg-[#660708]
              backdrop-blur-xl 
              shadow-xl 
              px-7 py-6 
              transition-all 
              duration-500 
              hover:scale-[1.04] 
              hover:shadow-2xl 
              hover:border-white/30
            "
          >
            <blockquote>
              <span className="block text-base leading-relaxed text-white/90 font-[montserrat]">
                {item.quote}
              </span>

              <div className="relative z-20 mt-6 flex flex-col">
                <span className="text-white font-semibold text-lg font-[playfair]">
                  {item.name}
                </span>
                <span className="text-neutral-300 text-sm font-light font-[playfair]">{item.title}</span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>

      {/* Card Global Styling */}
      <style>{`
        .moving-card {
          transform-origin: center;
        }
      `}</style>
    </div>
  );
};
