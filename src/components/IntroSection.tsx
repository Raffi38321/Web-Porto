import FocusSection from "./FocusSection";
import IntroText from "./IntroText";
import { motion } from "motion/react";

const IntroSection = () => {
  return (
    <div className="min-h-screen bg-[#D9D9D9] pt-24 px-11 flex flex-col justify-center items-center">
      <FocusSection>
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <IntroText atas={true}>FullStack-Web</IntroText>

            <motion.p
              className="font-sora text-[50px] md:text-[64px] font-bold leading-none border-black border-2 px-7 py-3 bg-[#0E4C92] text-white hover:text-black hover:bg-[#FF4F00] transition-all duration-500 ease-out"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ ease: "easeInOut", duration: 0.6 }}
            >
              &
            </motion.p>
          </div>

          <IntroText>Game-Developer</IntroText>
        </div>
        <p className="font-sora text-[15px] lg:text-[20px] text-center max-w-[958px] mt-[70px]">
          I specialize in building modern web applications using React, Next.js,
          and the MERN Stack (MongoDB, Express, React, Node.js). I also develop
          interactive games using Godot, focusing on performance, scalability,
          and user experience.
        </p>
      </FocusSection>
    </div>
  );
};

export default IntroSection;
