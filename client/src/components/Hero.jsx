import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const texts = [
  "I am a Full Stack Web Developer.",
  "I love to code and build things.",
  "I am passionate about learning new technologies.",
  "I enjoy solving problems and creating solutions.",
  "I am dedicated to delivering high-quality results.",
];

const Hero = () => {
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
    <section id="hero" className="bg-hero bg-cover bg-center h-screen">
      <div className="h-full bg-[#050d18cc] flex flex-col justify-center items-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[50px] font-[700] text-[#fff]"
        >
          Damilola Emmanuel
        </motion.h1>
        <div className="typed-text-wrap">
          <h4 className="font-[700] text-[#fff] text-[26px]">
            Hello,{" "}
            <span className="border-b-4 border-b-[#149ddd]">{displayText}</span>
            <span className="animate-pulse">|</span>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Hero;
