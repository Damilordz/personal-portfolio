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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);

  // Check if window width is less than 1280px
  useEffect(() => {
    let resizeTimeout;

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    const debounceResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 200);
    };

    // Cleanup the event listener when component unmounts
    window.addEventListener("resize", debounceResize);
    return () => window.removeEventListener("resize", debounceResize);
  }, []);

  // Disable body scroll when menu is open on mobile
  useEffect(() => {
    if (isMobile && isMenuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen, isMobile]);

  // Toggle menu
  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <ToastContainer />
      <NavBar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isMobile={isMobile}
      />
      <Hero handleMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} />
      <main className="xl:ml-[300px] mb-24 flex flex-col gap-16 lg:gap-20 py-8">
        <About />
        <Resume />
        <Skills />
        <Portfolio isMobile={isMobile} isMenuOpen={isMenuOpen} />
        <ContactForm />
      </main>
      {!isMenuOpen && <BackToTop />}
      <Footer />
    </div>
  );
}

export default App;
