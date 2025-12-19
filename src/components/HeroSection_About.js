"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "./ui/lamp";

export default function Hero_About() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-center font-semibold tracking-tight text-4xl md:text-7xl leading-tight select-none
          bg-linear-to-br from-[#3b0000] via-[#a00000] to-[#f6e7c5]
          bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,215,130,0.25)] font-[Cinzel]">
        About Us
      </motion.h1>
    </LampContainer>
  );
}
