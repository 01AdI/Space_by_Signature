"use client";

import React from "react";
import { motion } from "motion/react";

export const Timeline = ({ aboutUs_data }) => {
  const data = aboutUs_data?.aboutPage;

  if (!data) return null;

  return (
    <div className="w-full bg-[#f5f3ef] font-[Inter] text-[#4f4f4f]">

      {/* ================= HERO ================= */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-[Playfair] text-[#3a0003] leading-tight">
            {data.hero?.title}
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            {data.hero?.subtitle}
          </p>

          <p className="italic font-[Playfair] text-[#8a6f4d]">
            {data.hero?.tagline}
          </p>
        </div>
      </section>

      {/* ================= JOURNEY ================= */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-3xl md:text-5xl font-[Playfair] text-[#660708]">
            Signature: Where Design Meets Craft
          </h2>

          <p className="text-[17px] md:text-[18px] leading-relaxed">
            {data.story?.intro}
          </p>

          <p className="text-[17px] md:text-[18px] leading-relaxed">
            {data.story?.description}
          </p>

          <blockquote className="border-l-4 border-[#d4af37] pl-6 italic text-xl font-[Playfair] text-[#3a0003]">
            “{data.story?.founder?.philosophy}”
          </blockquote>
        </div>
      </section>

      {/* ================= IMPACT NUMBERS ================= */}
      <section className="bg-[#faf7f2] py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {data.impact?.stats?.map((item, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-[Playfair] text-[#660708]">
                {item.value}
              </h3>
              <p className="text-sm uppercase tracking-wide text-[#6b6b6b]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= EVOLUTION ================= */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-[Playfair] text-[#660708]">
              {data.evolution?.title}
            </h2>

            <p className="text-[17px] leading-relaxed">
              {data.evolution?.description}
            </p>
          </div>

          <div className="bg-[#660708] text-[#f6e7c5] p-10 rounded-2xl space-y-4">
            {data.evolution?.highlights?.map((point, idx) => (
              <p key={idx} className="font-[Playfair] text-xl">
                {point}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SPACE ================= */}
      <section className="bg-[#faf7f2] py-24 px-6">
        <div className="max-w-5xl mx-auto space-y-6 text-center">
          <h2 className="text-3xl md:text-5xl font-[Playfair] text-[#660708]">
            {data.space?.title}
          </h2>

          <p className="text-[17px] leading-relaxed max-w-3xl mx-auto">
            {data.space?.description}
          </p>
        </div>
      </section>

      {/* ================= LEADERS ================= */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {Object.values(data.notes || {}).map((leader, idx) => (
            <div
              key={idx}
              className="bg-white p-10 rounded-2xl shadow-sm space-y-4"
            >
              <h3 className="text-2xl font-[Playfair] text-[#660708]">
                {leader.name}
              </h3>
              <p className="uppercase text-xs tracking-wide text-[#9a9a9a]">
                {leader.role}
              </p>
              <p className="text-[16px] leading-relaxed">
                {leader.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CLOSING QUOTE ================= */}
      <section className="bg-[#3a0003] py-24 px-6 text-center">
        <blockquote className="text-2xl md:text-4xl font-[Playfair] italic text-[#f6e7c5] max-w-4xl mx-auto">
          “{data.quotes?.[0]?.text}”
        </blockquote>
      </section>
    </div>
  );
};
