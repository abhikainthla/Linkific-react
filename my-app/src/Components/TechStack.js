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



const techStackData = [
  {
    id: 1,
    category: "Frontend",
    technologies: [
      <FaReact style={{color:"#4fd4f0"}} />,
      <RiNextjsLine style={{color:"#000000"}} />,
      <IoLogoJavascript style={{color:"#f7df1d"}} />,
      <SiTypescript style={{color:"#0079cc"}} />,
      <RiTailwindCssFill style={{color:"#4a9fbb"}} />,
      <FaHtml5 style={{color:"#e44d26"}} />,
      <FaCss3Alt style={{color:"#284de6"}} />,
    ],
  },
  {
    id: 2,
    category: "Backend",
    technologies: [
      <FaNode style={{color:"#91c443"}} />,
      <SiExpress />,
      <SiNestjs style={{color:"#df204b"}} />,
      <SiMongodb style={{color:"#00ae42"}} />,
      <BiLogoPostgresql style={{color:"#316192"}} />,
      <IoLogoFirebase style={{color:"#ffcb2b"}} />,
    ],
  },
  {
    id: 3,
    category: "Mobile",
    technologies: [
      <TbBrandReactNative style={{color:"#4fd4f0"}}  />,
      <SiExpo />,
      <FcAndroidOs />,
      <SiIos />,
      <FaFlutter style={{color:"#56c1fd"}} />,
    ],
  },
  {
    id: 4,
    category: "UI/UX",
    technologies: [
      <FaFigma />,
      <SiAdobexd style={{color:"#470137"}} />,
      <FaSketch/>,
      <CgFramer style={{color:"#265cf8"}} />,
      <SiCanva style={{color:"#00c4cc"}} />,
    ],
  },
  {
    id: 5,
    category: "DevOps",
    technologies: [
      <SiVercel />,
      <SiNetlify style={{color:"#05bdba"}} />,
      <SiRender />,
      <FaDocker style={{color:"#2397ee"}} />,
      <FaGithub />,
    ],
  },
  {
    id: 6,
    category: "SEO",
    technologies: [
      <SiGoogleanalytics style={{color:"#ffc313"}} />,
      <SiGooglesearchconsole />,
      <SiSemrush style={{color:"#ff5f2d"}} />,
      <SiLighthouse/>,
    ],
  },
];

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState(techStackData[0]);

  return (
    <div className="flex flex-col gap-10">
      
      {/* CATEGORY BUTTONS */}
      <div className="flex flex-wrap justify-center gap-4">
        {techStackData.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveCategory(item)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all
              ${
                activeCategory.id === item.id
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-md"
                  : "bg-white text-gray-700 border hover:bg-gray-100"
              }
            `}
          >
            {item.category}
          </button>
        ))}
      </div>

      {/* TECHNOLOGIES */}
      <div className="flex flex-wrap justify-center gap-3">
        {activeCategory.technologies.map((tech, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-white rounded-full text-4xl shadow-sm border hover:shadow-md transition"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
