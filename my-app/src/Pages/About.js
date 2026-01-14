import { GrUserExpert } from "react-icons/gr";
import { HiOutlineLightBulb } from "react-icons/hi";
import { motion } from "framer-motion";
import Button from "../Components/Buttons";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const About = () => {
  return (
    <section className="px-4 sm:px-6 py-14 sm:py-20 mt-5 max-w-6xl mx-auto">
      
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-14 sm:mb-20"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-1 rounded-xl bg-gradient-to-r from-primary to-secondary" />
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            About{" "}
            <span className="bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent font-bold">
              Us
            </span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            Our company specializes in creating high-quality web applications
            that help businesses establish a strong online presence.
          </p>
        </div>
      </motion.div>

      {/* Who We Are */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
      >
        <motion.div variants={fadeUp}>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3">
            We build high-quality web applications focused on clean design,
            performance, and usability.
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            From startups to enterprises, we deliver solutions that create
            real business impact.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="w-full h-52 sm:h-64 rounded-xl overflow-hidden"
        >
          <img
            src="web-team.png"
            alt="Team"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Mission & Vision */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-14 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
      >
        {[ 
          { title: "Our Mission", desc: "To build reliable and visually appealing web solutions that empower businesses." },
          { title: "Our Vision", desc: "To become a trusted digital partner delivering future-ready products." }
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className="bg-white shadow-md p-6 rounded-xl"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 border-t pt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-10 text-center"
      >
        {/* Experience */}
        <div>
          <div className="flex justify-center items-end">
            <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent">
              05
            </h1>
            <span className="text-3xl sm:text-5xl bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent">
              +
            </span>
          </div>
          <p className="text-sm sm:text-base mt-1">Years Of Experience</p>
        </div>

        {/* Expert Team */}
        <div className="max-w-xs mx-auto">
          <GrUserExpert className="text-3xl sm:text-4xl mx-auto mb-2" />
          <p className="text-lg sm:text-xl font-semibold">Expert Team</p>
          <p className="text-sm text-gray-600">
            A team of skilled professionals delivering excellence.
          </p>
        </div>

        {/* Creative Solutions */}
        <div className="max-w-xs mx-auto">
          <HiOutlineLightBulb className="text-3xl sm:text-4xl mx-auto mb-2" />
          <p className="text-lg sm:text-xl font-semibold">Creative Solutions</p>
          <p className="text-sm text-gray-600">
            Unique ideas with strong brand strategy and design.
          </p>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center mt-16 sm:mt-24"
      >
        <div className="bg-gray-100 rounded-2xl p-8 sm:p-14 text-center max-w-4xl">
          <h3 className="text-xl sm:text-3xl font-semibold mb-4">
            We strive to offer reliable services and smart IT solutions
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            We combine creativity with innovation to turn your ideas into
            powerful digital experiences.
          </p>
          <Button text={"Connect with us!"}/>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
