import SpinText from "./SpinText";
import Section2MiddleText from "./Section2MiddleText";
import { motion } from "motion/react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const Section2 = () => {
  return (
    <section className="dark-section px-11 py-17 min-h-screen bg-[#222222] flex flex-col justify-center items-center gap-3">
      <SpinText
        speed={250}
        items={[
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind",
          "Framer Motion",
          "Node.js",
        ]}
      />

      <motion.section
        className="my-20 flex flex-col items-center justify-center gap-2"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
      >
        <Section2MiddleText>experienced with all these</Section2MiddleText>
        <Section2MiddleText>tools and technology</Section2MiddleText>
        <Section2MiddleText>and many more</Section2MiddleText>
      </motion.section>

      <SpinText
        speed={200}
        items={[
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind",
          "Framer Motion",
          "Node.js",
        ]}
      />
    </section>
  );
};

export default Section2;
