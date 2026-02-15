import poto from "../assets/poto-bini.webp";
import PhotoComp from "./PhotoComp";
import Yapper from "./Yapper";

const AboutMeSection = () => {
  return (
    <section className="px-11 py-7 bg-[#D9D9D9] min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
      <PhotoComp link={poto} />
      <Yapper />
    </section>
  );
};

export default AboutMeSection;
