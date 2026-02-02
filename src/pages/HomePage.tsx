import React from "react";
import IntroSection from "../components/IntroSection";
import NavBar from "../components/NavBar";
import Section2 from "../components/Section2";
import ContactSection from "../components/ContactSection";

const HomePage = () => {
  return (
    <div className="">
      <NavBar />
      <main>
        <IntroSection />
        <Section2 />
        <ContactSection />
      </main>
    </div>
  );
};

export default HomePage;
