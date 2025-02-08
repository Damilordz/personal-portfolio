import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const texts = [
  "I am a Full Stack Web Developer.",
  "I love to code and build things.",
  "I am passionate about learning new technologies.",
  "I enjoy solving problems and creating solutions.",
  "I am dedicated to delivering high-quality results.",
];

const Hero = ({ handleMenuToggle, isMenuOpen }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    if (isDeleting) {
      if (charIndex > 0) {
        setTimeout(() => {
          setDisplayText(currentText.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, 150);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    } else {
      if (charIndex < currentText.length) {
        setTimeout(() => {
          setDisplayText(currentText.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, 150);
      } else {
        setTimeout(() => setIsDeleting(true), 1000);
      }
    }
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section id="hero" className="relative bg-hero bg-cover bg-center h-[90vh] ml-0 xl:ml-[300px]">
      {/* Toggle Menu */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-[40px] h-[40px] xl:hidden rounded-full flex justify-center items-center fixed top-4 right-4 z-50 text-[24px] bg-[#149ddd] cursor-pointer"
        onClick={handleMenuToggle}
      >
        {
          // Toggle menu icon
          isMenuOpen ? (
            <i className="fa-solid fa-xmark text-white"></i>
          ) : (
            <i className="fa-solid fa-bars text-white"></i>
          )
        }
      </motion.div>
      <div className="h-full bg-[#050d18cc] flex flex-col justify-center items-center text-center px-[20px] sm:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[7vw] sm:text-[5vw] lg:text-[50px] font-[700] text-[#fff]"
        >
          Damilola Emmanuel
        </motion.h1>
        <div className="typed-text-wrap">
          <h4 className="font-[700] text-[#fff] text-[4vw] sm:text-[3vw] lg:text-[26px]">
            Hello,{" "}
            <span className="border-b-4 border-b-[#149ddd]">{displayText}</span>
            <span className="animate-pulse">|</span>
          </h4>
        </div>
      </div>
    </section>
  );
};
Hero.propTypes = {
  handleMenuToggle: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

export default Hero;
