import IntroSection from "../components/IntroSection";
import NavBar from "../components/NavBar";
import Section2 from "../components/Section2";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="">
      <NavBar />
      <main>
        <IntroSection />
        <Section2 />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
