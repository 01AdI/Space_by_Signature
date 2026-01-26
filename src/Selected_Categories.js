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
          <div className="sm:w-[90%] md:w-[75%] mx-auto flex flex-col gap-6">
            <h1
              className="
                bg-linear-to-br
                from-[#4a0505]
                via-[#8f1d1d]
                to-[#e7d3a3]
                bg-clip-text
                text-transparent
                text-4xl sm:text-5xl md:text-6xl
                font-semibold
                tracking-tight
                leading-[1.05]
                font-[Playfair]
                pl-6
              "
            >
              {subCategory ? subCategory.name : category.title}
            </h1>

            <p
              className="
                font-[Montserrat]
                text-[14px] md:text-[18px]
                leading-relaxed
                text-[#5c5c5c]
                w-[90%]
                border-l-4 border-[#d4af37]/60
                pl-6
              "
            >
              {subCategory ? subCategory.disc : category.title_disc}
            </p>
          </div>
        </motion.div>

        {/* ================= CONTROLS COLUMN ================= */}
        <motion.div
          className="mt-24 flex justify-between w-[80%] mx-auto items-center gap-12 px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* BACK BUTTON */}
          <motion.button
            onClick={() => navigate(-1)}
            whileHover={{ scale: 1.05 }}
            className="
              px-7 py-2.5
              rounded-full
              bg-[#660708]
              text-[#f6e7c5]
              font-semibold
              tracking-wide
              shadow-lg
              hover:bg-[#7a0a0a]
              transition-all
              font-[Playfair]
              cursor-pointer
            "
          >
            ← Go Back
          </motion.button>

          {/* ITEMS FOUND */}
          {items && (
            <strong className="font-[Montserrat] text-lg text-[#3a0003]">
              {sortedItems.length} Items Found
            </strong>
          )}

          {/* FILTER */}
          {items && (
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="
                px-6 py-2.5
                rounded-full
                bg-[#660708]
                text-[#f6e7c5]
                font-semibold
                font-[Playfair]
                shadow-md
                outline-none
                cursor-pointer
              "
            >
              <option value="all">Show All</option>
              <option value="new">New</option>
              <option value="trending">Trending</option>
              <option value="low-high">Price: Low → High</option>
              <option value="high-low">Price: High → Low</option>
            </select>
          )}
        </motion.div>

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
                <div className="group w-64 h-80 [perspective:1000px] cursor-pointer">
                  <div className="flip-card relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0 bg-[#faf7f2] rounded-2xl shadow-xl overflow-hidden">
                      <img
                        src={subCat.url}
                        alt={subCat.name}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-br from-[#4a0505] to-[#1f0000] rounded-2xl text-[#f6e7c5] px-6 py-8 flex flex-col items-center justify-center gap-4 [transform:rotateY(180deg)] [backface-visibility:hidden]">
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
                        className="px-6 py-2 rounded-full bg-[#f6e7c5] text-[#660708] font-semibold font-[Playfair] hover:scale-110 transition"
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
                whileHover={{ scale: 1.05, y: -6 }}
                className="w-[260px] bg-[#660708] rounded-2xl p-4 shadow-xl text-[#f0e9e0]"
              >
                <div className="h-60 rounded-xl overflow-hidden">
                  <motion.img
                    src={item.img}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.12 }}
                  />
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-semibold font-[Playfair]">
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-80 font-[Montserrat]">
                    {item.desc}
                  </p>
                  <p className="mt-2 text-lg font-bold text-[#d4af37]">
                    ₹{item.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      <Footers />
    </>
  );
}
