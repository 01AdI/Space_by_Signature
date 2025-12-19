"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function HeroSlideshow() {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAgV5VdYIQTTZGHZXVyHO4sUgxW3NrjVxjA&s",
    "https://www.sbid.org/wp-content/uploads/2021/04/Edited-silver-birch-e1619456988545.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI0Gg7hu5LtUE1E2-Cu-Oy9LFagqB5gAOp_A&s",
    "https://media.istockphoto.com/id/1824615178/photo/interior-design-of-modern-apartment-with-colorful-dark-walls-and-orange-sofa-interior-mockup.jpg?s=612x612&w=0&k=20&c=iYt26CAed3m48RWN63aJGXe0t_3FaKMFBEy_DigJb4w=",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">

      {/* Slideshow */}
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${images[index]})`,
          }}
        />
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content Card */}
      <div className="
        absolute inset-0 
        flex items-center justify-center 
        px-4
      ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
            bg-black/15 backdrop-blur-lg 
            px-6 py-10 md:px-12 md:py-14 
            rounded-2xl shadow-2xl border border-white/10 
            max-w-xl md:max-w-3xl lg:max-w-4xl 
            w-full text-center
          "
        >
          <h1 className="
            bg-linear-to-br from-[#540606] via-[#a71d31] to-[#f8d9b8]
            bg-clip-text text-transparent 
            text-4xl md:text-6xl font-semibold tracking-tight font-[Cinzel]
          ">
            Categories
          </h1>

          <p className="
            mt-5 text-[12px] md:text-2xl 
            bg-linear-to-br from-[#540606] via-[#a71d31] to-[#f8d9b8]
            bg-clip-text text-transparent 
            font-semibold leading-relaxed font-[Cinzel]
          ">
            We design spaces that inspire growth, creativity, and innovation.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
