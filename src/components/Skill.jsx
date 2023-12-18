import { motion } from 'framer-motion';

const Skill = ({ name, proficiency }) => {
  return (
    <motion.div
      className=" rounded-lg p-4 shadow-md m-2 w-64"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <h3 className="text-base lg:text-lg font-semibold">{name}</h3>
      <p className="text-sm lg:text-base mb-2">Proficiency: {proficiency}</p>
      <div className="bg-white h-4 rounded-full overflow-hidden">
        <motion.div className="h-full bg-blue" style={{ width: proficiency }} initial={{ width: 0 }} animate={{ width: proficiency }} />
      </div>
    </motion.div>
  );
};

export default Skill;
