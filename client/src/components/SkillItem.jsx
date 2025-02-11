import { useRef } from "react";
import PropTypes from "prop-types";
import { motion, useInView } from "framer-motion";

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
      className="w-full md:max-w-[150px] md:w-full h-[150px] overflow-hidden p-[20px] rounded-lg flex gap-2 flex-col justify-center items-center border border-gray-200"
    >
      <div className="px-[10px] h-[80px]">
        <img
          src={skill.image}
          alt={skill.name}
          loading="lazy"
          className="h-full w-full object-contain"
        />
      </div>
      <h3 className="font-bold">{skill.name}</h3>
    </motion.div>
  );
};

SkillItem.propTypes = {
  skill: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default SkillItem;
