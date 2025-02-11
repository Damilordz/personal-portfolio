import SkillItem from "./SkillItem";
import skillsData from "../data/skillsData";

const Skills = () => {
  return (
    <section className="skills px-[20px] lg:px-[40px]" id="skills">
      <div className="skills-container ">
        <div className="section-title">
          <h2>Skills</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
          {skillsData.map((skill, index) => (
            <SkillItem key={skill.id} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
