import FocusSection from "./FocusSection";
import IntroText from "./IntroText";
import { motion } from "motion/react";

const IntroSection = () => {
  return (
    <section className="bg-[#D9D9D9]">
      <FocusSection style="min-h-screen flex flex-col justify-center items-center pt-20 px-6 md:pt-24 md:px-11 overflow-hidden">
        <div className="flex flex-col items-center">
          <div className="flex flex-row items-center">
            <IntroText atas={true}>FullStack-Web</IntroText>

            <motion.p
              className="font-sora px-4 py-2 md:px-7 md:py-3 text-[30px] md:text-[50px] font-bold leading-none border-black border-2 bg-[#0E4C92] text-white hover:text-black hover:bg-[#FF4F00] transition-all duration-500 ease-out"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ ease: "easeInOut", duration: 0.6 }}
            >
              &
            </motion.p>
          </div>

          <IntroText>Game-Developer</IntroText>
        </div>
        <p className="font-sora text-[12px] md:text-[14px] lg:text-[20px] text-center max-w-[958px] mt-[50px] md:mt-[70px]">
          I specialize in building modern web applications using React, Next.js,
          and the MERN Stack (MongoDB, Express, React, Node.js). I also develop
          interactive games using Godot, focusing on performance, scalability,
          and user experience.
        </p>
      </FocusSection>
    </section>
  );
};

export default IntroSection;
