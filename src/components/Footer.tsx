import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import IconComp from "./IconComp";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="dark-section px-11 py-7 bg-[#222222]">
      <div className="border-t-[10px] border-white flex flex-row justify-between items-center">
        <p className="font-sora text-[20px] lg:text-[24px] mt-5 font-bold text-white">
          raffi38321@gmail.com
        </p>

        <section className="mt-5 flex flex-row">
          <IconComp link="https://github.com/Raffi38321">
            <FaGithub className="text-white text-2xl hover:text-black" />
          </IconComp>
          <IconComp link="https://www.linkedin.com/in/raffi-muhammad-52658130a/">
            <IoLogoLinkedin className="text-white text-2xl hover:text-black" />
          </IconComp>
          <IconComp link="https://www.facebook.com/profile.php?id=100074059760518">
            <FaFacebookSquare className="text-white text-2xl hover:text-black" />
          </IconComp>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
