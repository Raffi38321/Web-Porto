import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import IconComp from "./IconComp";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="dark-section bg-[#222222] overflow-hidden">
      <div
        className="
        border-t-[6px] md:border-t-[10px] border-white
        flex flex-col md:flex-row
        justify-between items-center
        px-5 md:px-11
        py-6 md:py-7
        gap-4 md:gap-0
        text-center md:text-left
      "
      >
        {/* Email */}
        <p
          className="
          font-sora
          text-base sm:text-lg md:text-xl lg:text-2xl
          font-bold text-white
        "
        >
          raffi38321@gmail.com
        </p>

        {/* Social Icons */}
        <section className="flex flex-row">
          <IconComp link="https://github.com/Raffi38321">
            <FaGithub className="text-white text-xl md:text-2xl hover:text-black transition" />
          </IconComp>

          <IconComp link="https://www.linkedin.com/in/raffi-muhammad-52658130a/">
            <IoLogoLinkedin className="text-white text-xl md:text-2xl hover:text-black transition" />
          </IconComp>

          <IconComp link="https://www.facebook.com/profile.php?id=100074059760518">
            <FaFacebookSquare className="text-white text-xl md:text-2xl hover:text-black transition" />
          </IconComp>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
