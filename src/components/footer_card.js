import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router";

export function HeroSection() {
  const hero1 = new URL("../images/home-hero-1.png", import.meta.url).href;
  const hero2 = new URL("../images/home-hero-2.png", import.meta.url).href;
  const hero3 = new URL("../images/home-hero-3.png", import.meta.url).href;


  // const slides = [
  //   {
  //     image:
  //       "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg",
  //     tagline: "Timeless luxury crafted for modern living."
  //   },
  //   {
  //     image:
  //       "https://cdn.pixabay.com/photo/2024/06/27/08/50/ai-generated-8856798_1280.jpg",
  //     tagline: "Spaces designed to inspire elegance."
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1730989427568-0a6fdb5a2fb1?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     tagline: "Where comfort meets architectural beauty."
  //   }
  // ];


    const slides = [
    {
      image:hero1,
      tagline: "Timeless luxury crafted for modern living."
    },
    {
      image:hero2,
      tagline: "Spaces designed to inspire elegance."
    },
    {
      image:hero3,
      tagline: "Where comfort meets architectural beauty."
    }
  ];


  const [index, setIndex] = useState(0);
  const touchStart = useRef(null);

  // AUTO CHANGE
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 9600);

    return () => clearInterval(timer);
  }, []);

  // SWIPE SUPPORT
  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStart.current) return;

    const diff = touchStart.current - e.changedTouches[0].clientX;

    if (diff > 50) next();
    if (diff < -50) prev();

    touchStart.current = null;
  };

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  // PARALLAX TEXT
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 250], [0, -80]);

  return (
    <section
      className="relative w-full min-h-[65vh] md:h-screen pt-[72px] md:pt-0 overflow-hidden bg-black"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >

      {/* IMAGE SLIDESHOW */}
      <AnimatePresence>
        <motion.img
          key={index}
          src={slides[index].image}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.6, ease: [0.22, 1, 0.36, 1] }}  // Ken Burns zoom
        />
      </AnimatePresence>

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/85 z-[2]" />

      {/* CONTENT */}
      <motion.div
        style={{ y }}
        className="relative z-[3] flex flex-col justify-center items-center h-full px-6 text-center select-none"
      >

        <motion.img 
          src={new URL("../images/SPACE-Logo.png", import.meta.url).href} 
          className="w-60 md:w-100 mb-4 drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)] pt-10 md:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />


        {/* TAGLINE CHANGER */}
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.8 }}
           className="mt-5 max-w-xl text-[21px] md:text-4xl font-semibold text-[#eae5df] drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)]
           [text-shadow:_0_2px_10px_rgba(0,0,0,0.6)] font-[cinzel]"
           >
            {slides[index].tagline}
          </motion.p>
        </AnimatePresence>

        {/* CTA */}
        <Link to="/Categories">
          <button
            className="
              mt-8 px-9 py-3 rounded-full
              bg-linear-to-br from-[#3b0000] via-[#a00000] to-[#f6e7c5]
              text-white tracking-wide font-semibold
              shadow-xl hover:brightness-110 hover:scale-105
              transition-all font-[Montserrat] text-[12px] md:text-base cursor-pointer
            "
          >
            Visit The Experience Centre
          </button>
        </Link>

        {/* DOT NAVIGATION */}
        <div className="absolute bottom-[-25%] md:bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-[5]">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === i
                  ? "bg-[#d4af37] scale-125"
                  : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
