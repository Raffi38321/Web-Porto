import React from "react";
import ButtonNav from "./ButtonNav";

const NavBar = () => {
  return (
    <nav className="px-11 py-7 flex justify-between items-center fixed top-7 left-0 w-full z-50 ">
      <h1 className="text-[19px] font-bold font-sora md:text-[24px]">
        Muhammad Raffi
      </h1>

      <section className="flex">
        <ButtonNav link="/project">Project</ButtonNav>
        <ButtonNav link="/about-me">About Me</ButtonNav>
        <ButtonNav link="/contact">Contact</ButtonNav>
      </section>
    </nav>
  );
};

export default NavBar;
