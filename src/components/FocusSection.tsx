import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import React from "react";

type T = {
  children: React.ReactNode;
};

const FocusSection = ({ children }: T) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.6,
  });

  return (
    <motion.section
      ref={ref}
      animate={{
        filter: isInView ? "blur(0px)" : "blur(4px)",
        opacity: 1,
        scale: isInView ? 1 : 0.95,
      }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.section>
  );
};

export default FocusSection;
