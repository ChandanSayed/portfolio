import { motion } from 'framer-motion';
import LineGradient from './LinearGradient';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

const Project = ({ title, img }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
      </div>
      <img src={`/images/${img}`} alt="Project" />
    </motion.div>
  );
};

const Projects = () => {
  const Projects = [
    {
      title: `MM Restaurant`,
      img: 'project1.png'
    },
    {
      title: `MM Store`,
      img: 'project2.png'
    }
  ];
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">Some of my work showcases.</p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-5" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {Projects.map((project, i) => {
            return <Project key={i} title={project.title} img={project.img} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
