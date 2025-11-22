import { useState } from "react";
import { cards } from "../utils/top_products_card";

export default function TopProducts() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className="bg-[#eae5df] py-20 relative overflow-hidden">

      {/* ============================
          TITLE
      ============================ */}
      <div className="text-center mb-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#660708]">
          BEST SELLERS
        </h2>
        <p className="inline-block font-semibold text-xl sm:text-2xl bg-gradient-to-r from-indigo-400 via-sky-400 to-rose-400 bg-clip-text text-transparent gradient-animate">
          Loved by Customers
        </p>
      </div>

      {/* ============================
          INFINITE SLIDER
      ============================ */}
      <div className="relative left-0 right-0  overflow-hidden">

        <div className="flex gap-8 w-[300%] animate-[scrollInfinite_14s_linear_infinite]">

          {[...cards, ...cards].map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveCard(item)}
              className="
                  cursor-pointer 
                  rounded-2xl 
                  shadow-xl 
                  overflow-hidden 
                  bg-white 
                  hover:scale-[1.04] 
                  transition-all 
                  duration-300 

                  /* updated sizes */
                  w-[400px] 
                  sm:w-[260px] 
                  md:w-[300px] 
                  lg:w-[340px] 

                  h-[180px] 
                  sm:h-[240px] 
                  md:h-[300px] 
                  lg:h-[340px]
                "
            >

              <img
                src={item.url}
                alt="Product"
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
          ))}

        </div>
      </div>

      {/* ============================
          FULLSCREEN OVERLAY MODAL
      ============================ */}
      {activeCard && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[999] animate-fadeIn"
          onClick={() => setActiveCard(null)}
        >
          <div
            className="bg-white rounded-2xl p-6 sm:p-8 max-w-[550px] w-[90%] text-center shadow-2xl relative animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setActiveCard(null)}
              className="absolute top-4 right-4 text-gray-700 hover:text-black text-2xl"
            >
              ✕
            </button>

            {/* PRODUCT IMAGE */}
            <img
              src={activeCard.url}
              alt="Product"
              className="rounded-xl mb-5 w-full max-h-[350px] object-cover shadow-md"
            />

            <h2 className="text-3xl font-bold text-[#660708] mb-3">
              {activeCard.title}
            </h2>

            <p className="text-gray-700 leading-relaxed px-2">
              {activeCard.disc}
            </p>
          </div>
        </div>
      )}

      {/* ============================
          ANIMATIONS
      ============================ */}
      <style>{`
        @keyframes scrollInfinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from { transform: scale(0.85); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
