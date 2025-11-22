import { useParams } from "react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { categoriesData } from "./utils/categoryData";
import { useParams, useNavigate } from "react-router";

export default function Selected_Categories() {

    const { selected } = useParams();
    const category = categoriesData[selected];
    const navigate = useNavigate();


    if (!category) {
        return (
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mt-20 text-4xl"
            >
                Category Not Found
            </motion.h1>
        );
    }

    const [filter, setFilter] = useState("all");

    const getSortedItems = () => {
        let sorted = [...category.items];

        if (filter === "all") return sorted;
        if (filter === "new") return sorted.filter(item => item.isNew);
        if (filter === "trending") return sorted.filter(item => item.isTrending);
        if (filter === "low-high") return sorted.sort((a, b) => a.price - b.price);
        if (filter === "high-low") return sorted.sort((a, b) => b.price - a.price);

        return sorted;
    };

    const sortedItems = getSortedItems();

    return (
        <div className="bg-[#eae5df] min-h-screen pb-20">

            {/* Title */}
            <motion.div
                className="pt-20 text-center"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <h1 className="bg-gradient-to-br from-[#540606] via-[#a71d31] to-[#f8d9b8] py-4 bg-clip-text text-5xl md:text-7xl font-extrabold text-transparent drop-shadow-lg tracking-tight">
                    {category.title}
                </h1>
            </motion.div>

            {/* Go Back Button */}
<motion.button
    onClick={() => navigate(-1)}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mt-8 ml-8 px-6 py-2 bg-gradient-to-r from-[#540606] via-[#a71d31] to-[#f8d9b8] text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all"
>
    ← Go Back
</motion.button>


            {/* Filter */}
            <motion.div
                className="flex flex-col md:flex-row items-center justify-between gap-4 px-8 mt-10 w-full md:w-[70%] mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                <strong className="text-lg">{sortedItems.length} Items Found</strong>

                <select
                    className="px-4 py-2 bg-gradient-to-br from-[#540606] via-[#a71d31] to-[#f8d9b8] text-white rounded-xl shadow-md font-semibold"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="all">Show All</option>
                    <option value="new">Sort by: New</option>
                    <option value="trending">Sort by: Trending</option>
                    <option value="low-high">Price: Low to High</option>
                    <option value="high-low">Price: High to Low</option>
                </select>
            </motion.div>

            {/* Cards */}
            <motion.div
                className="flex justify-center flex-wrap gap-12 mt-10 px-6"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.15 }
                    }
                }}
            >
                {sortedItems.length === 0 ? (
                    <p className="text-xl opacity-70">No items match this filter.</p>
                ) : (
                    sortedItems.map(item => (
                        <motion.div
                            key={item.id}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.6 }}
                            whileHover={{ scale: 1.06, y: -6 }}
                            className="w-[260px] bg-gradient-to-b from-[#5a0001] via-[#7a0000] to-[#2c0000] shadow-2xl rounded-2xl text-[#f0e9e0] cursor-pointer p-4 border border-[#d4af37]/20"
                        >
                            <div className="h-60 w-full overflow-hidden rounded-xl shadow-lg">
                                <motion.img
                                    src={item.img}
                                    className="h-full w-full object-cover"
                                    whileHover={{ scale: 1.15 }}
                                    transition={{ duration: 0.4 }}
                                />
                            </div>

                            <div className="mt-4">
                                <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
                                <p className="text-sm opacity-80">{item.desc}</p>
                                <p className="mt-2 text-lg font-extrabold text-[#d4af37]">₹{item.price}</p>
                            </div>
                        </motion.div>
                    ))
                )}
            </motion.div>

        </div>
    );
}
