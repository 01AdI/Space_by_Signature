"use client";
import React from "react";
import { motion } from "framer-motion";      
import { Timeline } from "./ui/timeline";

export function TimelineDemo() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  const data = [
    {
      title: "2024",
      content: (
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-6 text-[12px] md:text-[16px] font-400 text-neutral-700 font-[Montserrat]">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "startup-1.webp",
              "startup-2.webp",
              "startup-3.webp",
              "startup-4.webp",
            ].map((img, i) => (
              <motion.img
                key={i}
                src={`https://assets.aceternity.com/templates/${img}`}
                alt="timeline image"
                width={500}
                height={500}
                whileHover={{ scale: 1.03 }}
                className="h-24 sm:h-40 lg:h-56 w-full rounded-xl object-cover bg-white/10 backdrop-blur-lg border border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
              />
            ))}
          </div>
        </motion.div>
      ),
    },

    {
      title: "Early 2023",
      content: (
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-4 text-[12px] md:text-[16px] font-400 text-neutral-700 font-[Montserrat]">
            I usually run out of copy, but when I see content this big, I try to integrate lorem ipsum.
          </p>
          <p className="mb-6 text-[12px] md:text-[16px] font-400 text-neutral-700 font-[Montserrat]">
            Lorem ipsum is for people who are too lazy to write copy. But here’s more beautiful design work.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "pro/hero-sections.png",
              "features-section.png",
              "pro/bento-grids.png",
              "cards.png",
            ].map((img, i) => (
              <motion.img
                key={i}
                src={`https://assets.aceternity.com/${img}`}
                alt="timeline image"
                width={500}
                height={500}
                whileHover={{ scale: 1.03 }}
                className="h-24 sm:h-40 lg:h-56 w-full rounded-xl object-cover bg-white/10 backdrop-blur-lg border border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
              />
            ))}
          </div>
        </motion.div>
      ),
    },

    {
      title: "Changelog",
      content: (
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-4 text-[12px] md:text-[16px] font-400 text-neutral-700 font-[Montserrat]">
            Deployed 5 new components on Aceternity today.
          </p>

          <div className="mb-8 space-y-2">
            {[
              "Card grid component",
              "Startup template Aceternity",
              "Random file upload",
              "Himesh Reshammiya Music CD",
              "Salman Bhai Fan Club registrations open",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-neutral-700 text-[10px] md:text-[15px] font-400 font-[Montserrat]"
              >
                ✅ {item}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "pro/hero-sections.png",
              "features-section.png",
              "pro/bento-grids.png",
              "cards.png",
            ].map((img, i) => (
              <motion.img
                key={i}
                src={`https://assets.aceternity.com/${img}`}
                alt="timeline image"
                width={500}
                height={500}
                whileHover={{ scale: 1.03 }}
                className="h-24 sm:h-40 lg:h-56 w-full rounded-xl object-cover bg-white/10 backdrop-blur-lg border border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
              />
            ))}
          </div>
        </motion.div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#f5f3ef]  py-10 md:py-20 px-4">
      <Timeline data={data} />
    </div>
  );
}