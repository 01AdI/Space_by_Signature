import { cn } from "../../lib/utils";
import { motion } from "motion/react";

export const LampContainer = ({ children, className }) => {
  return (
    <div
        className={cn(
           "mx-auto h-[600px] overflow-hidden  max-sm:h-100 relative flex min-h-screen w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
        )}
        style={{
            backgroundImage: "url('https://ansainteriors.com/wp-content/uploads/2024/11/office-interior-designers-in-delhi-ncr-srinagar1-scaled.jpg')",
        }}
        >

      {/* DARK OVERLAY (keeps text readable) */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* LAMP EFFECTS */}
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-10">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 0.8, width: "21rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 w-[30rem] bg-gradient-conic from-red-700 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-full left-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-20 h-full left-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 0.8, width: "21rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-red-900 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-20 h-full right-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-full right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Lamp glow layers */}
        {/* <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl"></div> */}
        {/* <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div> */}
        {/* <div className="absolute inset-auto z-50 h-38 w-[28rem] -translate-y-1/2 rounded-full bg-[#7d7a76] opacity-50 blur-3xl"></div> */}

        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        //   className="absolute inset-auto z-30 h-36 w-94 -translate-y-[7rem] rounded-full bg-[#eae5df] blur-2xl"
        />

        <motion.div
          initial={{ width: "20rem" }}
          whileInView={{ width: "26rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-red-400"
        />
      </div>

      {/* TEXT */}
      <div className="relative z-50 flex -translate-y-95 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
