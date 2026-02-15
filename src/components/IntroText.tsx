import { motion } from "framer-motion";

type T = {
  children: string;
  atas?: boolean;
};

const DURATION = 0.25;
const STAGGER = 0.025;

const IntroText = ({ children, atas }: T) => {
  const initialValue = atas ? { x: -100 } : { x: 100 };
  return (
    <motion.div
      className="border-black border-2 px-7 py-3"
      initial={{ ...initialValue, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ ease: "easeOut" }}
    >
      <motion.div
        className="relative overflow-hidden font-sora font-bold text-[50px] md:text-[64px] leading-none"
        initial="initial"
        whileHover="hovered"
      >
        {/* ini yang tampil dulu */}
        <div className="flex justify-center items-center">
          {children.split("").map((l, i) => (
            <motion.span
              key={`top-${i}`}
              className="inline-block text-center"
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
            >
              {l}
            </motion.span>
          ))}
        </div>

        {/* ini yang ga keliatan */}
        <div className="absolute inset-0 flex justify-center items-center">
          {children.split("").map((l, i) => (
            <motion.span
              key={`bottom-${i}`}
              className="inline-block text-center"
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
            >
              {l}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default IntroText;
