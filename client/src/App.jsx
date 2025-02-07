import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import BackToTop from "./components/BackToTop";

function App() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMenuOpen(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    }
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <ToastContainer />
      <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero handleMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} />
      <main className="lg:ml-[300px] mb-24 flex flex-col gap-16 lg:gap-20 py-8">
        <About />
        <Resume />
        <Skills />
        <Portfolio />
        <ContactForm />
      </main>
      {!isMenuOpen && <BackToTop />}
      <Footer />
    </>
  );
}

export default App;
