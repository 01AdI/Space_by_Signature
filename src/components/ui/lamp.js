import { cn } from "../../lib/utils";
import { motion } from "motion/react";
import { useMediaQuery } from "react-responsive";

export const LampContainer = ({ children, className }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section
      className={cn(
        `
        relative w-full overflow-hidden
        h-[70vh] sm:h-[80vh] md:h-[100vh]
        flex items-center justify-center
        `,
        className
      )}
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://ansainteriors.com/wp-content/uploads/2024/11/office-interior-designers-in-delhi-ncr-srinagar1-scaled.jpg')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* LAMP AREA */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">

        {/* LEFT LAMP */}
        <motion.div
          initial={{ opacity: 0.4, width: isMobile ? "5rem" : "14rem" }}
          whileInView={{ opacity: 0.8, width: isMobile ? "9rem" : "20rem" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
          backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,      
    }}
          className="absolute right-1/2 top-1/2 -translate-y-1/2 h-40 md:h-56"
        >
          
          <div className="absolute w-full left-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-20 h-full left-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        
        </motion.div>

       

        {/* RIGHT LAMP */}
        <motion.div
          initial={{ opacity: 0.4, width: isMobile ? "5rem" : "14rem" }}
          whileInView={{ opacity: 0.8, width: isMobile ? "9rem" : "20rem" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
          backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,      
    }}
          className="absolute left-1/2 top-1/2 -translate-y-1/2 h-40 md:h-56"
        >

          <div className="absolute w-20 h-full right-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-full right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* CENTER LINE */}
        <motion.div
          initial={{ width: isMobile ? "12rem" : "22rem" }}
          whileInView={{ width: isMobile ? "15rem" : "30rem" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="
            absolute top-1/2 -translate-y-[5.2rem] md:-translate-y-[7rem]
            h-[2px] bg-red-500
          "
        />
      </div>

      {/* CONTENT */}
      <div className="absolute z-20 bottom-82 md:bottom-90 w-full px-6 flex justify-center text-center">
        {children}
      </div>
    </section>
  );
};
