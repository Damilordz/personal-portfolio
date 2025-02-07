import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    label: "View / Download CV",
    icon: "fa-solid fa-download",
    action: "openModal",
  },
  {
    label: "Hire Me",
    icon: "fa-regular fa-paper-plane",
    link: "mailto:adebowaledami97@gmail.com",
  },
];

const Resume = () => {
  const [showModal, setShowModal] = useState(false);
  const cvFilePath = "/assets/Damilola_Emmanuel_CV.pdf";

  return (
    <div
      id="resume"
      className="bg-[#f5f8fd] py-16 text-center flex flex-col md:flex-row gap-4 lg:gap-6 justify-center items-center"
    >
      {items.map((item, index) => (
        <button
          key={index}
          onClick={() =>
            item.action === "openModal"
              ? setShowModal(true)
              : (window.location.href = item.link)
          }
          className="bg-[#173b6c] hover:bg-[#149ddd] transition-[background-color] duration-1000 ease-in-out cursor-pointer py-[10px] px-[20px] text-white font-[700] flex gap-2 items-center justify-center rounded-md"
        >
          {item.label}
          <i className={item.icon}></i>
        </button>
      ))}

      {/* Modal - Appears when showModal is true */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex justify-center items-center bg-[rgba(0,0,0,0.8)] z-100 p-[20px]"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-lg text-center shadow-lg w-[400px]"
            >
              <h2 className="text-[22px] font-bold text-[#173b6c] mb-4">
                View or Download CV
              </h2>
              <p className="text-gray-600 mb-6">
                You can either view the CV in your browser or download it.
              </p>

              {/* Buttons for View and Download */}
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <a
                  href={cvFilePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#173b6c] hover:bg-[#149ddd] transition-[background-color] duration-1000 ease-in-out text-white py-2 px-4 rounded font-[700]"
                >
                  View CV <i className="fa-solid fa-eye ml-2"></i>
                </a>

                <a
                  href={cvFilePath}
                  download="Damilola_Emmanuel_CV.pdf"
                  className="bg-[#173b6c] hover:bg-[#149ddd] transition-[background-color] duration-1000 ease-in-out text-white py-2 px-4 rounded font-[700]"
                >
                  Download CV <i className="fa-solid fa-download ml-2"></i>
                </a>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="mt-4 cursor-pointer block mx-auto text-[#173b6c] hover:text-[#149ddd] transition-[background-color] duration-1000 ease-in-out font-bold underline"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Resume;
