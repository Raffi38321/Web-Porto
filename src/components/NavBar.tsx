import React from "react";
import ButtonNav from "./ButtonNav";

const NavBar = () => {
  return (
    <div className="flex flex-row justify-between items-center sticky top-7">
      <h1 className="text-[19px] font-bold font-sora md:text-[24px]">
        Muhammad Raffi
      </h1>
      <section className="flex flex-row">
        <ButtonNav link="/project">Project</ButtonNav>
        <ButtonNav link="/about-me">About Me</ButtonNav>
        <ButtonNav link="/contact">Contact</ButtonNav>
      </section>
    </div>
  );
};

export default NavBar;
