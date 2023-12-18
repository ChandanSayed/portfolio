import { motion } from 'framer-motion';
import LineGradient from './LinearGradient';

const About = () => {
  return (
    <section id="about" className="py-48">
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/2"
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
            MY <span className="text-red">Education</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            BSc in Computer Science and Technology <br />
            2015 - 2021 <br /> Hangzhou Normal University, <br />
            China
          </p>
        </motion.div>
        <motion.div
          className="md:w-1/2"
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
            MY <span className="text-red">Experience</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">I am working as a front-end developer. I have started doing it with HTML, CSS, and JavaScript. In my initial days of freelancing I was doing bug fixing. In early 2021, I have started learning React JS. After Learning React JS, I have done some projects with React JS, Tailwind CSS. I have done some with Next JS as well. Most of my projects were Figma to React JS or Next JS. But I have done two or three full web app(front-end only). I have done those for people who hired me.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
