"use client";

import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="w-full bg-[#f5f3ef]  font-sans md:px-10 pt-10"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
        <h2 className="mb-4 max-w-4xl text-3xl md:text-6xl font-600 
         tracking-tight bg-[#660708]
         text-transparent bg-clip-text font-[Playfair]">
          Changelog From Our Journey
        </h2>

        <p className="text-neutral-700 text-[16px] md:text-[20px] max-w-sm font-[Playfair] font-light">
          A timeline showcasing our milestones and continuous growth.
        </p>
      </div>

      {/* Timeline */}
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-12 md:pt-32 md:gap-10"
          >
            {/* Sticky Title + Dot */}
            <div className="sticky top-32 md:top-40 z-40 flex items-start md:w-full">
              {/* Timeline Dot */}
              <div className="relative h-10 w-10 flex items-center justify-center">
                <div className="absolute h-8 w-8 rounded-full 
                  bg-white dark:bg-neutral-900 shadow-lg shadow-red-200/30 
                  border border-neutral-300 dark:border-neutral-700 flex items-center justify-center">
                  <div
                    className="h-4 w-4 rounded-full 
                    bg-[#660708]
                    shadow-[0_0_8px_rgba(212,175,55,0.7)]"
                  />
                </div>
              </div>

              {/* Title (Desktop) */}
              <h3 className="hidden md:block md:pl-20 text-2xl md:text-5xl font-semibold 
                bg-[#660708]
                text-transparent bg-clip-text font-[Playfair]">
                {item.title}
              </h3>
            </div>

            {/* Content */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              {/* Title (Mobile) */}
              <h3 className="md:hidden block text-2xl mb-6 md:mb-4 font-semibold 
                bg-linear-to-r from-[#3a0003] via-[#7a0a0e] to-[#d4af37]
                text-transparent bg-clip-text font-[Playfair]">
                {item.title}
              </h3>

              {item.content}
            </div>
          </div>
        ))}

        {/* Vertical Line — Premium Gradient */}
        <div
          className="absolute left-8 md:left-8 top-0 w-[3px] overflow-hidden 
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          style={{ height: height + "px" }}
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[3px] 
              bg-gradient-to-b 
              from-[#3a0003] 
              via-[#a30f12] 
              to-[#d4af37]"
          />
        </div>
      </div>
    </div>
  );
};
