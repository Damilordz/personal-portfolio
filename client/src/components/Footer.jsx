import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 2}}
      className="p-[15px] bg-[#040b14] text-[#f4f6fd] text-[14px] z-10 xl:z-200 lg:fixed xl:bottom-0 lg:left-0 lg:w-[300px]"
    >
      <div className="text-center">
        <p className="copyright">&copy; Copyright {currentYear}</p>
        <div className="credits">
          Designed by {""}
          <a
            href="https://www.linkedin.com/in/adebowaleemmanuel"
            target="_blank"
            className="text-[#149ddd] hover:text-[#f4f6fd] transition-colors duration-300 ease-in-out"
          >
            Damilola Emmanuel
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
