import { motion } from "framer-motion";

type T = {
  link: string;
};

const PhotoComp = ({ link }: T) => {
  return (
    <motion.div
      className="relative w-fit"
      initial="rest"
      whileInView="animate"
      viewport={{ once: false, amount: 0.5 }}
      whileHover="rest"
    >
      {/* ini sahdownya */}
      <motion.div
        className="absolute w-full h-full bg-[#FF4F00] rounded-md"
        variants={{
          rest: { x: 0, y: 0 },
          animate: { x: -25, y: 25 },
        }}
        transition={{ duration: 0.4 }}
      />

      {/* ini bagian photo jangan di ubah ubah anjing  pening gua beresinnya */}
      <motion.img
        src={link}
        className="relative w-40 md:w-64 rounded-md object-cover"
        variants={{
          rest: { x: 0, y: 0 },
          animate: { x: 10, y: -10 },
        }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

export default PhotoComp;
