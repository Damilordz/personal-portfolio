import { useRef } from "react";
import PropTypes from "prop-types";
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
    name: "PostgreSQL",
    img: "./assets/images/skills/postgresql-logo.jpeg",
  },
  {
    name: "Tailwind CSS",
    img: "./assets/images/skills/TailwindCSS-logo.jpeg",
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
];

// SkillItem Component for individual skill
const SkillItem = ({ skill, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full md:max-w-[150px] md:w-full h-[150px] overflow-hidden p-[20px] shadow-lg rounded-lg flex gap-2 flex-col justify-center items-center border border-gray-200"
    >
      <div className="px-[10px] h-[80px]">
        <img src={skill.img} alt={skill.name} className="h-full" />
      </div>
      <h3 className="font-bold">{skill.name}</h3>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="skills px-[20px] lg:px-[40px]" id="skills">
      <div className="skills-container ">
        <div className="section-title">
          <h2>Skills</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
          {skills.map((skill, index) => (
            <SkillItem key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

SkillItem.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Skills;
