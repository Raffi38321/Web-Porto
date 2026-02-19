import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import React from "react";

type T = {
  children: React.ReactNode;
  style: string;
};

const FocusSection = ({ children, style }: T) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.5,
  });

  return (
    <motion.section
      ref={ref}
      animate={{
        opacity: 1,
        scale: isInView ? 1 : 0.95,
      }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      className={style}
    >
      {children}
    </motion.section>
  );
};

export default FocusSection;
