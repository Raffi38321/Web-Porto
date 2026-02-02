import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

type T = {
  items: string[];
  speed?: number;
};

const SpinText = ({ items, speed = 25 }: T) => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.scrollWidth / 2);
    }
  }, [items]);

  const loopItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        animate={{ x: -width }}
        transition={{
          duration: width / speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-[40px] whitespace-nowrap"
      >
        <div
          ref={ref}
          className="flex gap-[40px] font-sora text-[20px] lg:text-[24px] text-[#FF6F61]"
        >
          {loopItems.map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SpinText;
