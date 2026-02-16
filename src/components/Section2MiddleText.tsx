import { motion } from "motion/react";

type T = {
  children: string;
};

const item = {
  hidden: { y: 30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const Section2MiddleText = ({ children }: T) => {
  return (
    <motion.p
      variants={item}
      className="text-[#FF6F61] font-sora text-[18px] lg:text-[32px] font-bold"
    >
      {children}
    </motion.p>
  );
};

export default Section2MiddleText;
