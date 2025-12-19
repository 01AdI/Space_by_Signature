import { Link } from "react-router";
import { categoriesData } from "../utils/categoryData";

export default function Cards_Categories() {
  return (
    <>
      {/* Heading */}
      <div className="text-center mt-10 px-4">
        <h2 className="text-4xl md:text-6xl font-semibold text-[#660708] font-[Playfair]">
          Our Categories
        </h2>
        <p className="inline-block font-semibold text-[15px] md:text-[24px] bg-[linear-gradient(110deg,#660708,#a00000,#d4af37,#f6e7c5,#a00000)]
          bg-size-[300%_100%] animate-[gradientShift_8s_ease-in-out_infinite] bg-clip-text text-transparent font-[Montserrat]">
          Our Offerings
        </p>
      </div>

      {/* Cards Container */}
      <div className="flex items-center flex-wrap justify-center gap-8 md:gap-10 py-10 px-4">
        {categoriesData.map((items, index) => (
          <div
            key={items.id}
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
                <h3 className="text-xl md:text-2xl font-semibold tracking-wide text-center font-[Playfair]">
                  {items.title}
                </h3>

                <p className="text-center text-sm md:text-lg opacity-90 font-[Montserrat] font-400">
                  {items.disc}
                </p>

                <Link to={`/Categories/${items.id}`}>
                  <button className="mt-2 px-6 py-2 bg-white text-[#660708] font-semibold rounded-xl hover:scale-110 hover:shadow-md transition cursor-pointer font-[Playfair] md:text-[18px]">
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
