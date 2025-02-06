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
  return (
    <>
      <ToastContainer />
      <NavBar />
      <Hero />
      <main className="ml-[300px] mb-24 flex flex-col gap-20 py-8">
        <About />
        <Resume />
        <Skills />
        <Portfolio />
        <ContactForm />
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}

export default App;
