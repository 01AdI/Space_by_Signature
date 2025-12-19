import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function Customers_review() {
  return (
    <div className="
      min-h-[40rem] 
      rounded-md 
      flex flex-col 
      antialiased 
      bg-[#eae5df] 
      items-center 
      justify-start 
      relative 
      overflow-hidden
      px-4 sm:px-6 lg:px-12 py-10
    ">

      {/* ⭐ Heading */}
      <h2 className="text-4xl sm:text-[52px] md:text-[64px] font-semibold text-[#660708] font-[playfair] "> 
        Client Words
      </h2>

      <p
        className="font-[montserrat] inline-block font-semibold text-[15px] md:text-[24px] bg-[linear-gradient(110deg,#660708,#a00000,#d4af37,#f6e7c5,#a00000)]
         bg-[length:300%_100%] animate-[gradientShift_8s_ease-in-out_infinite] bg-clip-text text-transparent"
      >
        Appreciated Beyond Aesthetics
      </p>

      {/* ⭐ Cards Section */}
      <div className="mt-11 w-full">
        <InfiniteMovingCards 
          items={testimonials} 
          direction="right" 
          speed="normal" 
          className="premium-review-cards"
        />
      </div>

      {/* Premium Card Hover + Glow */}
      <style>{`
        .premium-review-cards .moving-card {
          transition: transform 0.35s ease, box-shadow 0.4s ease;
          cursor: pointer;
        }

        .premium-review-cards .moving-card:hover {
          transform: translateY(-12px) scale(1.04);
          box-shadow: 
            0 20px 40px rgba(0,0,0,0.25),
            0 0 25px rgba(255,255,255,0.4);
        }

        /* Glass shine on hover */
        .premium-review-cards .moving-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255,255,255,0.2),
            transparent
          );
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .premium-review-cards .moving-card:hover::after {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}


const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times...",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question...",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged...",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago...",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
