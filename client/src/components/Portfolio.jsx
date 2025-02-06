import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import portfolioData from "../data/portfolioData";

const Portfolio = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "-100px" });

  const handleHover = (index) => {
    setIsHovered(true);
    setHoveredIndex(index);
  };

  return (
    <section ref={ref} id="portfolio" className="bg-[#f5f8fd] py-16 px-[40px]">
      <div className="portfolio-container">
        <div className="section-title">
          <h2>Portfolio</h2>
        </div>

        <div className="grid grid-cols-2 gap-[20px]">
          {portfolioData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="bg-white border border-gray-200 shadow-lg rounded-lg h-[400px] overflow-hidden"
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <h3 className="font-bold py-4 text-center text-[17px]">
                {item.title}
              </h3>
              <div className="relative">
                <div className="max-h-[350px] w-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>

                {/* Hover Overlay Animation */}
                <AnimatePresence>
                  {isHovered && hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: 1,
                        scale: [0.2, 0.4, 0.6, 0.8, 1],
                      }}
                      exit={{
                        opacity: 0,
                        scale: [0.8, 0.6, 0.4, 0.2, 0],
                        rotate: 360,
                      }}
                      transition={{ duration: 0.7 }}
                      className="absolute inset-0 bg-[rgba(0,0,0,0.7)] text-white text-center py-2 z-10 flex justify-center items-center gap-4"
                    >
                      <a
                        href={item.demoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-[#073678] hover:bg-[#149ddd] text-white px-5 py-2 rounded-md text-center"
                      >
                        Demo
                      </a>
                      <a
                        href={item.codeLink}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-[#073678] hover:bg-[#149ddd] text-white px-5 py-2 rounded-md text-center"
                      >
                        <i className="bx bxl-github">Code</i>
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
