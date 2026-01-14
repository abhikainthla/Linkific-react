import { useState } from "react";
import { FaDocker, FaFigma, FaGithub, FaHtml5, FaNode, FaReact, FaSketch } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { SiAdobexd, SiCanva, SiGoogleanalytics, SiGooglesearchconsole, SiIos, SiLighthouse, SiMongodb, SiNestjs, SiNetlify, SiRender, SiSemrush, SiTypescript, SiVercel } from "react-icons/si";
import { FaCss3Alt, FaFlutter } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";
import { SiExpo } from "react-icons/si";
import { FcAndroidOs } from "react-icons/fc";
import { CgFramer } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const techStackData = [
  {
    id: 1,
    category: "Frontend",
    technologies: [
      <FaReact style={{ color: "#4fd4f0" }} />,
      <RiNextjsLine style={{ color: "#000000" }} />,
      <IoLogoJavascript style={{ color: "#f7df1d" }} />,
      <SiTypescript style={{ color: "#0079cc" }} />,
      <RiTailwindCssFill style={{ color: "#4a9fbb" }} />,
      <FaHtml5 style={{ color: "#e44d26" }} />,
      <FaCss3Alt style={{ color: "#284de6" }} />,
    ],
  },
  {
    id: 2,
    category: "Backend",
    technologies: [
      <FaNode style={{ color: "#91c443" }} />,
      <SiExpress />,
      <SiNestjs style={{ color: "#df204b" }} />,
      <SiMongodb style={{ color: "#00ae42" }} />,
      <BiLogoPostgresql style={{ color: "#316192" }} />,
      <IoLogoFirebase style={{ color: "#ffcb2b" }} />,
    ],
  },
  {
    id: 3,
    category: "Mobile",
    technologies: [
      <TbBrandReactNative style={{ color: "#4fd4f0" }} />,
      <SiExpo />,
      <FcAndroidOs />,
      <SiIos />,
      <FaFlutter style={{ color: "#56c1fd" }} />,
    ],
  },
  {
    id: 4,
    category: "UI/UX",
    technologies: [
      <FaFigma />,
      <SiAdobexd style={{ color: "#470137" }} />,
      <FaSketch />,
      <CgFramer style={{ color: "#265cf8" }} />,
      <SiCanva style={{ color: "#00c4cc" }} />,
    ],
  },
  {
    id: 5,
    category: "DevOps",
    technologies: [
      <SiVercel />,
      <SiNetlify style={{ color: "#05bdba" }} />,
      <SiRender />,
      <FaDocker style={{ color: "#2397ee" }} />,
      <FaGithub />,
    ],
  },
  {
    id: 6,
    category: "SEO",
    technologies: [
      <SiGoogleanalytics style={{ color: "#ffc313" }} />,
      <SiGooglesearchconsole />,
      <SiSemrush style={{ color: "#ff5f2d" }} />,
      <SiLighthouse />,
    ],
  },
];

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState(techStackData[0]);

  return (
    <motion.div
      className="flex flex-col gap-8 sm:gap-10 px-4 sm:px-6 md:px-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* CATEGORY BUTTONS */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
        {techStackData.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => setActiveCategory(item)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-semibold transition-all
              ${
                activeCategory.id === item.id
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-md"
                  : "bg-white text-gray-700 border hover:bg-gray-100"
              }`}
          >
            {item.category}
          </motion.button>
        ))}
      </div>

      {/* TECHNOLOGIES */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory.id}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
        >
          {activeCategory.technologies.map((tech, index) => (
            <motion.span
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.15, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 sm:px-4 py-2 sm:py-3 bg-white rounded-full text-3xl sm:text-4xl shadow-sm border cursor-pointer"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default TechStack;
