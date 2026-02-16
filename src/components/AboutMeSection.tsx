import poto from "../assets/poto-bini.webp";
import FocusSection from "./FocusSection";
import PhotoComp from "./PhotoComp";
import Yapper from "./Yapper";

const AboutMeSection = () => {
  return (
    <section className="bg-[#D9D9D9]">
      <FocusSection style=" px-6 py-10 md:px-11 md:py-7 min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 overflow-hidden">
        <PhotoComp link={poto} />
        <Yapper />
      </FocusSection>
    </section>
  );
};

export default AboutMeSection;
