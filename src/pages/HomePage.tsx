import IntroSection from "../components/IntroSection";
import NavBar from "../components/NavBar";
import Section2 from "../components/Section2";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import AboutMeSection from "../components/AboutMeSection";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <main>
        <IntroSection />
        <Section2 />
        <AboutMeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
