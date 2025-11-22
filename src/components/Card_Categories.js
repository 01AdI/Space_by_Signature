"use client";
import React from "react";
import { Link } from "react-router";
import { categoreis_options } from "../utils/categoreis_options";

export default function Cards_Categories() {
  return (
    <>
      {/* Heading */}
      <div className="text-center mt-10 px-4">
        <h2 className="text-4xl md:text-6xl font-semibold text-[#660708]">
          Our Categories
        </h2>
        <p className="inline-block font-semibold text-xl md:text-2xl bg-gradient-to-r from-indigo-400 via-sky-400 to-rose-400 bg-clip-text text-transparent">
          Our Offerings
        </p>
      </div>

      {/* Cards Container */}
      <div className="flex items-center flex-wrap justify-center gap-8 md:gap-10 py-10 px-4">
        {categoreis_options.map((items, index) => (
          <div
            key={index}
            className="group w-64 h-72 sm:w-72 sm:h-80 [perspective:1000px] cursor-pointer"
            onClick={(e) => {
              // Enable tap flip on mobile
              if (window.innerWidth < 768) {
                const card = e.currentTarget.querySelector(".flip-card");
                card.classList.toggle("rotateY-180");
              }
            }}
          >
            {/* 3D Flip Box */}
            <div className="flip-card relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

              {/* FRONT SIDE */}
              <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl overflow-hidden [backface-visibility:hidden] flex items-center justify-center">
                <img
                  src={items.url}
                  alt={items.title}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* BACK SIDE */}
              <div className="absolute inset-0 bg-[#660708]/90 rounded-2xl shadow-2xl text-[#eae5df] px-5 py-6 flex flex-col items-center justify-center gap-4 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <h3 className="text-xl md:text-2xl font-semibold tracking-wide">
                  {items.title}
                </h3>

                <p className="text-center text-sm md:text-lg opacity-90">
                  {items.disc}
                </p>

                <Link to={`/Categories/${items.title}`}>
                  <button className="mt-2 px-6 py-2 bg-white text-[#660708] font-bold rounded-xl hover:scale-110 hover:shadow-md transition cursor-pointer">
                    Explore More
                  </button>
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Extra CSS for mobile tap flip */}
      <style>{`
        .rotateY-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </>
  );
}
