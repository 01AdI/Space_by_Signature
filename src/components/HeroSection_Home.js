"use client";

import { Link } from "react-router";
import { ThreeDMarquee } from "./ui/3d-marquee";
import { motion } from "motion/react";

export function HeroSection() {
  const images = [
    "https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-e-W91jHJPMQqpSz2mHKKq75lgaNrWNDeDA&s",
    "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2unqtQ6yVkHnTesjZb55DTdBktdOS28HMfgtFjLbbpxpavkiQnkBFNjWM3GuUo3kLo0Q&usqp=CAU",
    "https://media.designcafe.com/wp-content/uploads/2022/07/29185240/industrial-rustic-living-room-in-earthy-tones.jpg",
    "https://cdn.home-designing.com/wp-content/uploads/2022/03/modern-sofa-1024x602.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeaJ9VTBtuxyYuohtZKgRiTdL_eD8daXNhxg&s",
    "https://chiedesign.in/wp-content/uploads/2022/05/Luxury-Interior-Design-Living-Room-1080x675.jpg",
    "https://res.cloudinary.com/dwa6fuv2x/w_2000,h_1200,c_fit/auto-mapping-folder/2020/07/Luxury-interior-design.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTADCpunjlnxFydwpaXcN3Hu1GYHbR95VDuM0oJNz7FqRbJQ9CDETjcuDv7iLEsV9ry58Q&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGivYrD2farEpnYNedN9F5uXyMWZiJ0GBiQ48TMwd_A5BDtU7ok7h_MXdj-FlOFw2BmLY&usqp=CAU",
    "https://mccoymart.com/post/wp-content/uploads/best-interior-design-ideas-for-a-living-room-FI1.jpg",
    "https://cdn.home-designing.com/wp-content/uploads/2019/04/living-room-pendant-light.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ty-pR-v9bmOknYaCT2VNabMNWmVcAyk_zw&s",
    "https://asset.skoiy.com/9b80a6f781ff336f/yrwwqpnyb7ys.jpg?w=970&q=90",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrOKcwaeJRscu0kFi8Iqw6MMbeVNOX2TUPT0PBPhdbbnI3Che0QRAUWaeZlKjHoAtIsxk&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZ872u7KPcwJtq82uvIPb3hcPrGM3VLNT9S_o-vlI7XmA0S_zuKLLxhnKZn5O1JSIiG0&usqp=CAU",
    "https://www.shutterstock.com/image-illustration/modern-home-interior-polished-concrete-600nw-2513200895.jpg",
  ];

  return (
    <div className="relative z-10 flex min-h-svh w-full flex-col items-center justify-center overflow-hidden">

      {/* ============================
          DARK GRADIENT LAYERS
      ============================ */}
      <div className="absolute inset-0 bg-black/50 md:bg-black/40 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80 z-[2]" />

      {/* ============================
          TEXT BLOCK
      ============================ */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        className="relative z-[30] px-6 text-center max-w-5xl"
      >
        <h1 className="  bg-gradient-to-br from-[#540606] via-[#a71d31] to-[#f8d9b8]
            bg-clip-text text-transparent 
            text-4xl md:text-6xl font-extrabold tracking-tight">
          SPACE <br />
          <span className="  bg-gradient-to-br from-[#540606] via-[#a71d31] to-[#f8d9b8]
            bg-clip-text text-transparent 
            text-3xl md:text-4xl font-bold tracking-tight opacity-80">by</span>{" "}
          <span className="inline-block bg-gradient-to-r from-indigo-400 via-sky-400 to-rose-400 bg-clip-text text-transparent font-bold">
            Signature
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm md:text-base text-neutral-300">
          You are not your job, you're not how much money you have in the bank.
          You are not the car you drive. You are not the contents of your wallet.
        </p>

        <div className="pt-6 flex justify-center">
          <Link to="/Categories">
            <button className="rounded-xl border border-white/30 bg-white/10 px-8 py-3 text-sm font-medium text-white backdrop-blur-md shadow-lg transition-all hover:bg-white/20 hover:scale-[1.03] active:scale-95 cursor-pointer">
              Explore Now
            </button>
          </Link>
        </div>
      </motion.div>

      {/* ============================
          3D MARQUEE BACKGROUND
      ============================ */}
      <ThreeDMarquee
        className="absolute inset-0 z-0 pointer-events-none"
        images={images}
      />
    </div>
  );
}
