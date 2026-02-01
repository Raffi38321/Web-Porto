import React from "react";
import ButtonNav from "./ButtonNav";

const NavBar = () => {
  return (
    <div className="flex flex-row justify-between items-center sticky top-7">
      <h1 className="text-[24px] font-bold font-sora">Muhammad Raffi</h1>
      <section className="flex flex-row">
        <ButtonNav>Project</ButtonNav>
        <ButtonNav>About Me</ButtonNav>
        <ButtonNav>Contact</ButtonNav>
      </section>
    </div>
  );
};

export default NavBar;
