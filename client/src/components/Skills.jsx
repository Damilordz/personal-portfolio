import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  {
    name: "JavaScript",
    img: "./assets/images/skills/js-logo.jpg",
  },
  {
    name: "HTML",
    img: "./assets/images/skills/html-logo.jpg",
  },
  {
    name: "CSS",
    img: "./assets/images/skills/CSS-logo.jpg",
  },
  {
    name: "ReactJs",
    img: "./assets/images/skills/react-logo.jpg",
  },
  {
    name: "NodeJs",
    img: "./assets/images/skills/nodejs-logo.jpg",
  },
  {
    name: "MongoDB",
    img: "./assets/images/skills/mongodb-logo.jpg",
  },
  {
    name: "Bootstrap",
    img: "./assets/images/skills/Bootstrap.jpg",
  },
  {
    name: "C++",
    img: "./assets/images/skills/c++.jpg",
  },
  {
    name: "Git",
    img: "./assets/images/skills/git-logo.jpg",
  },
  {
    name: "GitHub",
    img: "./assets/images/skills/githib-logo.jpg",
  },
  {
    name: "PostgreSQL",
    img: "./assets/images/skills/postgresql-logo.jpeg",
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "-100px" });

  return (
    <section ref={ref} className="skills px-[40px]" id="skills">
      <div className="skills-container">
        <div className="section-title">
          <h2>Skills</h2>
        </div>

        <div className="flex gap-[20px] flex-wrap">
          {skills.map((skill, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-[150px] h-[150px] overflow-hidden p-[20px] shadow-lg rounded-lg flex gap-2 flex-col justify-center items-center border border-gray-200"
              key={index}
            >
              <div className="px-[10px] h-[80px]">
                <img src={skill.img} alt={skill.name} className="h-full" />
              </div>

              <h3 className="font-bold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
