import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

type BNav = {
  children: string;
  link: string;
  darkSection: boolean;
};

const ButtonNav = ({ children, link, darkSection }: BNav) => {
  const navigate = useNavigate();
  return (
    <motion.div
      className={`
        relative inline-block
        border-2 
        px-[10px] py-[1px]
        sm:px-[5px]
        overflow-hidden transition-all duration-500 ease-out
        ${darkSection ? "border-white" : "border-black"}
      `}
      initial="rest"
      whileHover="hover"
      animate="rest"
      onClick={() => navigate(link)}
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
        className={`
          relative z-10
          font-bold text-[12px]
          md:text-[15px]
          font-jetbrainMono
          text-center
          overflow-hidden transition-all duration-500 ease-out
        `}
        variants={{
          rest: { color: darkSection ? "#fff" : "#000" },
          hover: { color: "#000" },
        }}
      >
        {children}
      </motion.p>
    </motion.div>
  );
};

export default ButtonNav;
