import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence, useInView } from "framer-motion";

// Custom Hook for managing hover state
const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  return [isHovered, setIsHovered, handleMouseEnter, handleMouseLeave];
};

// Portfolio Item Component
const PortfolioItem = ({ item, index, isMobile, isMenuOpen }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "-100px" });
  const [isHovered, setIsHovered, handleMouseEnter, handleMouseLeave] =
    useHover();

  // Delay hover effect when item is in view on mobile
  useEffect(() => {
    let hoverTimeout;
    if (isMobile && isInView && !isMenuOpen) {
      hoverTimeout = setTimeout(() => {
        setIsHovered(true);
      }, 1000);
    } else {
      clearTimeout(hoverTimeout);
      setIsHovered(false);
    }

    return () => clearTimeout(hoverTimeout);
  }, [isInView, isMobile, setIsHovered, isMenuOpen]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1, delay: index * 0.1 }}
      className="bg-white border border-gray-200 shadow-lg rounded-lg  overflow-hidden flex flex-col"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className="font-bold py-4 text-center text-[17px]">{item.title}</h3>
      <div className="relative">
        <div className="w-full rounded-b-lg h-full">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-auto object-cover rounded-b-lg"
            loading="lazy"
          />
        </div>

        {/* Hover Overlay Animation */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: [0.2, 0.4, 0.6, 0.8, 1],
              }}
              exit={{
                opacity: 0,
                scale: [0.8, 0.6, 0.4, 0.2, 0],
                rotate: 90,
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute inset-0 bg-[rgba(0,0,0,0.7)] text-white text-center py-2 z-10 flex justify-center items-center gap-4 rounded-b-lg"
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
  );
};

PortfolioItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    demoLink: PropTypes.string.isRequired,
    codeLink: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  isMobile: PropTypes.bool.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

export default PortfolioItem;
