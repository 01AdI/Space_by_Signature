"use client";

import { motion } from "motion/react";
import { cn } from "../../lib/utils";

export const ThreeDMarquee = ({ images, className }) => {
  const chunkSize = Math.ceil(images.length / 4);
  const chunks = Array.from({ length: 4 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return images.slice(start, start + chunkSize);
  });

  return (
    <div
      className={cn(
        "relative mx-auto block h-screen md:h-[650px] lg:h-[750px] overflow-hidden",
        className
      )}
    >
      {/* Soft dark overlay behind images */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 pointer-events-none" />

      <div className="flex size-full items-center justify-center">
        <div className="size-[1400px] max-sm:size-[900px] shrink-0 scale-[0.45] sm:scale-[0.6] md:scale-[0.8] lg:scale-[1] transition-all">
          <div
            style={{
              transform: "rotateX(35deg) rotateY(0deg) rotateZ(-25deg)",
              perspective: "1800px",
            }}
            className="relative top-32 right-[30%] grid size-full origin-top-left grid-cols-4 gap-6 md:gap-8 transform-3d"
          >
            {chunks.map((subarray, colIndex) => (
              <motion.div
                animate={{ y: colIndex % 2 === 0 ? 100 : -100 }}
                transition={{
                  duration: colIndex % 2 === 0 ? 10 : 12,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                key={colIndex}
                className="flex flex-col items-start gap-6 md:gap-8"
              >
                {subarray.map((image, imageIndex) => (
                  <div className="relative group" key={imageIndex + image}>
                    <motion.img
                      whileHover={{
                        y: -10,
                        scale: 1.04,
                        boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      src={image}
                      alt=""
                      className="
                        rounded-xl 
                        object-cover 
                        shadow-xl
                        transition-all duration-500
                        ring-1 ring-white/10

                        w-[550px] 
                        h-[380px] 
                        sm:w-[650px] sm:h-[450px] 
                        md:w-[800px] md:h-[550px]
                        lg:w-[900px] lg:h-[620px]
                      "
                    />

                    {/* subtle glow */}
                    <div
                      className="
                      absolute inset-0 rounded-xl
                      opacity-0 group-hover:opacity-30
                      bg-white/30 blur-2xl
                      transition duration-500
                    "
                    />
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
