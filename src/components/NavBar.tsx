import { useEffect, useState } from "react";
import ButtonNav from "./ButtonNav";

const NavBar = () => {
  const [darkSection, setDarkSection] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll(".dark-section");
    const observer = new IntersectionObserver(
      (entries) => {
        const anyVisible = entries.some((entry) => entry.isIntersecting);

        setDarkSection(anyVisible);
      },
      {
        rootMargin: "-80px 0px -30% 0px",
        threshold: 0.4,
      },
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);
  return (
    <nav className="px-11 py-7 flex justify-between items-center fixed top-7 left-0 w-full z-50 ">
      <h1
        className={`  transition-all duration-500 ease-out text-[19px] font-bold font-sora md:text-[24px] ${darkSection ? "text-white" : "text-black"}`}
      >
        Muhammad Raffi
      </h1>

      <section className="flex">
        <ButtonNav darkSection={darkSection} link="/project">
          Project
        </ButtonNav>
        <ButtonNav darkSection={darkSection} link="/about-me">
          About Me
        </ButtonNav>
        <ButtonNav darkSection={darkSection} link="/contact">
          Contact
        </ButtonNav>
      </section>
    </nav>
  );
};

export default NavBar;
