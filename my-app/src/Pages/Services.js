import Card from "../Components/Card";
import TechStack from "../Components/TechStack";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const Services = () => {
  return (
    <section className="px-4 sm:px-6 md:px-16 lg:px-24 py-16 bg-gray-50 flex flex-col gap-24 mt-5">
      {/* SERVICES SECTION */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center mb-12">
          <div className="w-10 h-1 rounded-xl bg-gradient-to-r from-primary to-secondary mb-4" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
            Our{" "}
            <span className="bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent font-bold">
              Services
            </span>
          </h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={24}
          pagination={{ clickable: true }}
          className="pb-12"
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1.25 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {[
            {
              title: "Web Development",
              description:
                "Fast, modern, and scalable websites built with the latest technologies.",
            },
            {
              title: "UI/UX Design",
              description:
                "Clean, intuitive, and user-focused design experiences.",
            },
            {
              title: "SEO Optimization",
              description:
                "Improve visibility and rankings on search engines.",
            },
            {
              title: "Mobile Apps",
              description:
                "High-performance mobile applications for iOS and Android.",
            },
          ].map((service, index) => (
            <SwiperSlide key={index} className="flex">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full flex"
              >
                <Card {...service} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* STRATEGIC EDGE */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        <div className="w-10 h-1 rounded-xl bg-gradient-to-r from-primary to-secondary mb-4" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-12">
          Our{" "}
          <span className="bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent font-bold">
            Strategic
          </span>{" "}
          Edge
        </h2>

        <div className="flex flex-col md:flex-row w-full border-2 rounded-xl overflow-hidden">
          {[
            {
              step: "01",
              title: "Research",
              desc: "We begin by understanding goals, users, and the market through research and analysis.",
              bg: "bg-[#f6f6f2]",
            },
            {
              step: "02",
              title: "Design",
              desc: "We translate strategy into intuitive interfaces and high-fidelity designs.",
              bg: "",
            },
            {
              step: "03",
              title: "Development",
              desc: "Clean, scalable code brings designs to life with modern frameworks.",
              bg: "bg-[#f6f6f2]",
            },
            {
              step: "04",
              title: "Launch",
              desc: "Final testing, performance tuning, and smooth deployment.",
              bg: "",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className={`flex-1 p-6 border-b md:border-b-0 md:border-r last:border-r-0 ${item.bg}`}
            >
              <h2 className="font-semibold text-xl sm:text-2xl mb-2">{item.title}</h2>
              <p className="text-gray-600 mt-3 leading-relaxed text-sm sm:text-base">
                {item.desc}
              </p>
              <p className="text-5xl sm:text-6xl md:text-8xl bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent mt-4">
                {item.step}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* TECH STACK */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gray-100 rounded-2xl p-8 sm:p-12 md:p-16"
      >
        <div className="flex flex-col items-center mb-12">
          <div className="w-10 h-1 rounded-xl bg-gradient-to-r from-primary to-secondary mb-4" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
            Our{" "}
            <span className="bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent font-bold">
              Tech
            </span>{" "}
            Stack
          </h2>
        </div>

        <TechStack />
      </motion.div>
    </section>
  );
};

export default Services;
