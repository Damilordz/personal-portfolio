import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const firstList = [
  { label: "Birthday", value: "December 31st" },
  { label: "Degree", value: "MSc Mechatronics" },
  { label: "Phone", value: "+447361103546" },
  { label: "Location", value: "England, UK" },
];

const secondList = [
  { label: "Freelance", value: "Available" },
  { label: "Language", value: "English, Yoruba" },
  { label: "Email", value: "adebowaledami97@gmail.com" },
  { label: "Work", value: "Full Stack Web Developer" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "-100px" });

  return (
    <section ref={ref} id="about" className="flex justify-center px-[40px]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="flex flex-col gap-6"
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="about-title section-title"
        >
          <h2>About</h2>
          <p>
            I am a passionate learner with a background in Civil Engineering and
            Mechatronics. My academic experience has honed my ability to
            approach challenges from a logical and systematic perspective. I
            thrive on challenges and love exploring new technologies, constantly
            seeking to push the boundaries of what I can create.
          </p>
        </motion.div>
        <div className="flex gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="min-w-[300px] max-w-[33%] max-h-[300px] border-8 border-[#e0dbdb]"
          >
            <img
              src="./assets/images/personal-img.png"
              alt="Personal image"
              className="h-full w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col gap-4"
          >
            <h3 className="font-[700] text-[26px] text-[#173b6c]">
              Full Stack Web Developer
            </h3>
            <p>
              Dedicated and motivated Full Stack Web Developer with a passion
              for creating innovative and user-friendly websites. Skilled in
              front-end development with proficiency in HTML, CSS,JavaScript and
              backend development using MERN stack. Seeking to utilise my coding
              expertise and problem-solving skills to contribute to a dynamic
              and collaborative team in a fast-paced environment.
            </p>
            <div className="flex gap-6">
              {/* First List */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.7 }}
              >
                <ul className="flex flex-col gap-4">
                  {firstList.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    >
                      <i className="fa-solid fa-chevron-right"></i>
                      <strong>{item.label}: </strong>
                      <span>{item.value}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Second List */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <ul className="flex flex-col gap-4">
                  {secondList.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                    >
                      <i className="fa-solid fa-chevron-right"></i>
                      <strong>{item.label}: </strong>
                      <span>{item.value}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
