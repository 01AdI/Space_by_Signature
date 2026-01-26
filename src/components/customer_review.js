import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function Customers_review() {
  return (
    <div className="
      min-h-160 
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
      "I am absolutely delighted with my recent purchases from Space By Signature The quality and craftsmanship of the furniture are truly top-notch, exceeding all my expectations. I bought a dining set, and both pieces have instantly elevated the look of my home. The showroom has an extensive and unique collection, making it easy to find items that perfectly matched my taste and decor. The entire experience, from browsing to delivery, was seamless. Highly recommend!",
    name: "Mr. Gaurav Jain ",
    title: "Dining Table",
  },
  {
    quote:
      "We are happy to share our review for Modular Kitchen and Wardrobe work done by the  team of “Space”.Quality & design was extremely good beyond our expectation, work done with professionalism and products timely delivered us. Post Sales services by the Space are also remarkable and satisfactory.",
    name: "Mr. Deepak Soni, CA",
    title: "Kitchen & Wardrobe",
  },
  {
    quote: 
      "I got a customised shoe rack from Space, and the quality is absolutely amazing, especially the PU finish. The staff is very helpful with their suggestions and proactive in their responses. I also loved their collection of coffee tables and chairs and ended up choosing a unique piece with excellent craftsmanship. I’d definitely recommend them to everyone",
    name: "Mrs. Megha",
    title: "Shoerack",
  },
  {
    quote:
      "Space by Signature has an excellent collection of home décor articles that are truly beautiful, unique, and thoughtfully curated. Each piece reflects a special sense of style and quality. What made the experience even better was the owner (Himanshu and Amit ) and all other staff members—they are extremely polite, respectful, and very good at communication. They kept all their promises and ensured a smooth and pleasant buying experience. Highly recommended for anyone looking for distinctive home décor and genuine customer service.",
    name: "Mr. Anurag Chordia ",
    title: "",
  },
  {
    quote:
      "Found exactly what I needed at a great price. The service was fantastic, and the furniture looks amazing",
    name: "Mr. Prashant Bulwani",
    title: "Furniture",
  },
  {
    quote:
      "The center table is of very good quality and looks elegant in the living room. The material is strong and well-finished. Their service was excellent—delivery was on time and the staff was polite and helpful. Overall, a great product with reliable service. Highly satisfied",
    name: "Mr. Pankaj Khandelwal",
    title: "Centre Table",
  },
];
