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
    <nav className="px-11 py-7 flex justify-center md:justify-end  fixed top-7 left-0 w-full z-50 ">
      <section className="flex">
        <ButtonNav darkSection={darkSection} link="/">
          Home
        </ButtonNav>
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
