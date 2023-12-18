import { motion } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';
import LineGradient from './LinearGradient';
import Skill from './Skill';

const MySkills = () => {
  const skills = [
    { name: 'Bootstrap', proficiency: '80%' },
    { name: 'Tailwind CSS', proficiency: '80%' },
    { name: 'React JS', proficiency: '85%' },
    { name: 'JavaScript', proficiency: '80%' },
    { name: 'MongoDB', proficiency: '70%' },
    { name: 'Node.js', proficiency: '70%' },
    { name: 'Express.js', proficiency: '70%' }
  ];
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">These are the skills I have and I am learning continuously</p>
        </motion.div>
      </div>
      <div className="flex flex-wrap justify-center">
        {skills.map((skill, index) => (
          <Skill key={index} name={skill.name} proficiency={skill.proficiency} />
        ))}
      </div>
    </section>
  );
};

export default MySkills;
