import { useParams, useNavigate } from "react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { categoriesData } from "./utils/categoryData";
import Footers from "./components/footer_card";

export default function Selected_Categories() {
  const { selected, sub } = useParams();
  const navigate = useNavigate();

  const category = categoriesData.find(
    (item) => item.id.toString() === selected
  );

  if (!category) {
    return (
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mt-20 text-4xl font-[Playfair]"
      >
        Category Not Found
      </motion.h1>
    );
  }

  const subCategory = sub
    ? category.subCategories?.find((sc) => sc.id === sub)
    : null;

  const items = subCategory ? subCategory.items : category.items;

  const [filter, setFilter] = useState("all");

  const getSortedItems = () => {
    if (!items) return [];
    let sorted = [...items];

    if (filter === "new") return sorted.filter((i) => i.isNew);
    if (filter === "trending") return sorted.filter((i) => i.isTrending);
    if (filter === "low-high") return sorted.sort((a, b) => a.price - b.price);
    if (filter === "high-low") return sorted.sort((a, b) => b.price - a.price);

    return sorted;
  };

  const sortedItems = getSortedItems();

  return (
    <>
    <div className="bg-[#eae5df] min-h-screen pb-24">

      {/* ================= HERO ================= */}
      <motion.div
        className="pt-24 px-6"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[55%_45%] gap-14 items-center">

          {/* LEFT */}
          <div className="flex flex-col gap-4">
            <h1 className="
              bg-linear-to-br
              from-[#4a0505]
              via-[#8f1d1d]
              to-[#e7d3a3]
              bg-clip-text
              text-transparent
              text-4xl sm:text-5xl md:text-7xl
              font-semibold
              tracking-tight
              leading-[1.05]
              font-[Playfair]
            ">
              {subCategory ? subCategory.name : category.title}
            </h1>

            <p className="
              max-w-xl
              text-[12px] sm:text-[18px] md:text-[22px]
              font-medium
              font-[Montserrat]
              bg-[linear-gradient(110deg,#6a0707,#a00000,#d4af37,#f6e7c5)]
              bg-[length:200%_100%]
              animate-[gradientShift_10s_ease-in-out_infinite]
              bg-clip-text
              text-transparent
            ">
              {subCategory ? subCategory.name : category.title_tagline}
            </p>
          </div>

          {/* RIGHT */}
          <p className="
            font-[Montserrat]
            text-[12px] sm:text-[16px] md:text-[18px]
            leading-relaxed
            text-[#5c5c5c]
            max-w-md
            md:ml-auto
            border-l border-[#d4af37]/40 pl-6
          ">
            {subCategory ? subCategory.name : category.title_disc}
          </p>
        </div>
      </motion.div>

      {/* BACK BUTTON */}
      <motion.button
        onClick={() => navigate(-1)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          mt-12 ml-8
          px-7 py-2.5
          rounded-full
          bg-[#660708]
          text-[#f6e7c5]
          font-semibold
          tracking-wide
          shadow-lg
          hover:bg-[#7a0a0a]
          hover:scale-105
          transition-all
          font-[Playfair]
        "
      >
        ← Go Back
      </motion.button>

      {/* ================= SUB CATEGORIES ================= */}
      {!subCategory && category.subCategories && (
        <motion.div
          className="flex flex-wrap justify-center gap-10 mt-20 px-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
        >
          {category.subCategories.map((subCat) => (
            <motion.div
              key={subCat.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-col items-center gap-4"
            >
              <div
                className="group w-64 h-80 [perspective:1000px] cursor-pointer"
                onClick={(e) => {
                  if (window.innerWidth < 768) {
                    e.currentTarget
                      .querySelector(".flip-card")
                      .classList.toggle("rotateY-180");
                  }
                }}
              >
                <div className="
                  flip-card relative w-full h-full transition-all duration-700
                  [transform-style:preserve-3d]
                  group-hover:[transform:rotateY(180deg)]
                ">

                  {/* FRONT */}
                  <div className="
                    absolute inset-0 bg-[#faf7f2]
                    rounded-2xl shadow-xl overflow-hidden
                    flex items-center justify-center
                    [backface-visibility:hidden]
                  ">
                    <img
                      src={subCat.url}
                      alt={subCat.name}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* BACK */}
                  <div className="
                    absolute inset-0
                    bg-gradient-to-br from-[#4a0505] to-[#1f0000]
                    rounded-2xl text-[#f6e7c5]
                    px-6 py-8
                    flex flex-col items-center justify-center gap-4
                    [transform:rotateY(180deg)]
                    [backface-visibility:hidden]
                  ">
                    <h3 className="text-xl font-semibold font-[Playfair] text-center">
                      {subCat.name}
                    </h3>

                    <p className="text-center text-sm opacity-90 font-[Montserrat]">
                      {subCat.disc}
                    </p>

                    <button
                      onClick={() =>
                        navigate(`/Categories/${selected}/${subCat.id}`)
                      }
                      className="
                        px-6 py-2 rounded-full
                        bg-[#f6e7c5] text-[#660708]
                        font-semibold font-[Playfair]
                        hover:scale-110 transition
                      "
                    >
                      Explore More
                    </button>
                  </div>
                </div>
              </div>

              <h4 className="text-lg font-semibold text-[#660708] font-[Playfair]">
                {subCat.name}
              </h4>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* ================= ITEMS ================= */}
      {items && (
        <>
          {/* FILTER */}
          <motion.div
            className="
              flex flex-col md:flex-row
              items-center justify-between
              gap-6 px-6 mt-20
              max-w-5xl mx-auto
            "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <strong className="font-[Montserrat] text-lg">
              {sortedItems.length} Items Found
            </strong>

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="
                px-5 py-2.5 rounded-full
                bg-[#660708]
                text-[#f6e7c5]
                font-semibold font-[Playfair]
                shadow-md
              "
            >
              <option value="all">Show All</option>
              <option value="new">New</option>
              <option value="trending">Trending</option>
              <option value="low-high">Price: Low → High</option>
              <option value="high-low">Price: High → Low</option>
            </select>
          </motion.div>

          {/* CARDS */}
          <motion.div
            className="flex flex-wrap justify-center gap-14 mt-16 px-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
            }}
          >
            {sortedItems.map((item) => (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05, y: -6 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="
                  w-[260px] bg-[#660708]
                  shadow-[0_20px_50px_rgba(0,0,0,0.35)]
                  rounded-2xl p-4
                  border border-[#f6e7c5]/25
                  text-[#f0e9e0]
                "
              >
                <div className="h-60 rounded-xl overflow-hidden">
                  <motion.img
                    src={item.img}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-semibold font-[Playfair]">
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-80 font-[Montserrat]">
                    {item.desc}
                  </p>
                  <p className="mt-2 text-lg font-bold text-[#d4af37] font-[Montserrat]">
                    ₹{item.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </>
      )}
    </div>

    <Footers></Footers>
    </>
  );
}
