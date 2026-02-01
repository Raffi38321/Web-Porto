import React from "react";
import { motion } from "motion/react";

type BNav = {
  children: string;
};

const ButtonNav = ({ children }: BNav) => {
  return (
    <motion.div
      className="
        relative inline-block
        border-2 border-black
        px-[10px] py-[1px]
        overflow-hidden
      "
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.div
        variants={{
          rest: { height: "0%" },
          hover: { height: "100%" },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="
          absolute bottom-0 left-0
          w-full bg-[#FF4F00]
          z-0
        "
      />

      <motion.p
        className="
          relative z-10
          font-bold text-[24px]
          font-jetbrainMono
        "
        variants={{
          rest: { color: "#000" },
          hover: { color: "#000" },
        }}
      >
        {children}
      </motion.p>
    </motion.div>
  );
};

export default ButtonNav;
