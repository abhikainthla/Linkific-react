import Button from "../Components/Buttons";
import CompanyCarousel from "../Components/CompanyCarousel";
import HomeCard from "../Components/HomeCard";
import HomeGrid from "../Components/HomeGrid";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};


const Home = () => {
  
  const companies = [
    {
      image:"Logo-6.png"
    },
    {
      image:"Logo-7.png"
    },
    {
      image:"logo8.png"
    },
    {
      image:"logo5.png"
    },
    {
      image:"Logo-9.png"
    },
    {
      image:"logo9.png"
    },
  ]

  return (
     <section className="px-6 py-16 mt-5 md:px-16 lg:px-24">
      
      {/* HERO */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Great{" "}
            <span className="font-bold bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent">
              Product
            </span>{" "}
            is <br />
            built by great{" "}
            <span className="font-bold bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent">
              teams
            </span>
          </h1>

          <p className="mt-6 text-gray-600 max-w-lg mx-auto md:mx-0">
            We help build and manage a team of world-class developers to bring
            your vision to life.
          </p>

          <div className="mt-8">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
      Let's Get Started
    </button>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src="/Hero.png"
            alt="Team collaboration illustration"
            className="w-full max-w-md"
          />
        </motion.div>
      </div>

      {/* CTA BANNER */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-20 mb-16"
      >
        <div className="bg-gray-100 rounded-lg p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight text-center md:text-left max-w-2xl">
            Hire the best developers and designers around!
          </h2>

          <Button text={"Hire Developers"}/>
        </div>
      </motion.div>

      {/* PRICING */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-12"
      >
        <HomeGrid />
      </motion.div>

      {/* DESIGN APPROACH */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center mb-12"
      >
        <div className="w-10 h-1 rounded-xl bg-gradient-to-r from-primary to-secondary mb-4" />
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-12">
          Our{" "}
          <span className="bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent font-bold">
            Design
          </span>{" "}
          &{" "}
          <span className="bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent font-bold">
            Development
          </span>{" "}
          approach
        </h2>

        <HomeCard />
      </motion.div>

      {/* COMPANIES */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-20"
      >
        <h3 className="text-center text-gray-500 uppercase tracking-wide mb-6">
          Trusted by companies worldwide
        </h3>

        <CompanyCarousel companies={companies} />
      </motion.div>

    </section>
  );
};

export default Home;
