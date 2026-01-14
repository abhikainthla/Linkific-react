import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import CaseStudyCard from "../Components/CaseStudyCard";
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

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};


const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Web Platform",
      category: "Web Development",
      description:
        "A scalable e-commerce platform with modern UI, secure authentication, and optimized performance.",
      image: "/portfolio-1.png",
    },
    {
      title: "SaaS Dashboard",
      category: "UI / UX Design",
      description:
        "A clean and responsive dashboard for analytics and business insights.",
      image: "/portfolio-2.png",
    },
    {
      title: "Mobile App Landing Page",
      category: "Frontend Development",
      description:
        "A high-conversion landing page built with a mobile-first approach.",
      image: "/portfolio-3.png",
    },
    {
      title: "Enterprise Website",
      category: "Corporate Website",
      description:
        "A professional corporate website focused on performance and SEO.",
      image: "/portfolio-4.png",
    },
  ];

    const caseStudies = [
      {
        image:"Case-study__image.png",
        title:"Website Design for SCFC Canada",
        desc:"Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry."
      },
      {
        image:"Case-study__image (1).png",
        title:"Website Design for SCFC Canada",
        desc:"Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry."
      },
      {
        image:"Case-study__image (2).png",
        title:"Website Design for SCFC Canada",
        desc:"Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry."
      },
    ]

  return (
    <motion.section
  className="px-6 py-16 mt-5 md:px-16 lg:px-24"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
    
      {/* Header */}
      <motion.div
  className="text-center mb-16"
  variants={fadeUp}
>
        <div className="w-10 h-1 mx-auto rounded-xl bg-gradient-to-r from-primary to-secondary mb-4" />
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-4">
          Our{" "}
          <span className="bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent font-bold">
            Portfolio
          </span>
        </h1>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          A selection of projects showcasing our expertise in design and
          development.
        </p>
      </motion.div>

      {/* Carousel */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold ">Top Projects Delivered By Us</h2>
      </div>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >

        {projects.map((project, index) => (
          <SwiperSlide key={index}>
<motion.div
  variants={fadeUp}
  className="group bg-white rounded-xl shadow-md hover:shadow-xl
             transition-all duration-500 ease-out hover:-translate-y-2
             h-full min-h-[420px] sm:min-h-[460px] mb-10"
>


              {/* Image */}
              <div className="overflow-hidden rounded-t-xl">
                <img
  src={project.image}
  alt={project.title}
  className="w-full h-44 sm:h-52 object-cover
             group-hover:scale-105 transition-transform duration-300"
/>

              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-sm text-primary font-medium">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
<motion.div
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center my-20"

  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {[
    { value: "50+", label: "Projects Delivered" },
    { value: "30+", label: "Happy Clients" },
    { value: "5+", label: "Years Experience" },
    { value: "100%", label: "Client Satisfaction" },
  ].map((item, index) => (
<motion.div
  key={index}
  variants={fadeUp}
  className="bg-gray-100 rounded-xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg"
>
      <h3 className="text-4xl font-bold bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent">
        {item.value}
      </h3>
      <p className="text-gray-600 mt-2">{item.label}</p>
    </motion.div>
  ))}
</motion.div>

      <div className="text-center mb-16 mt-16">
         <div className="w-10 h-1 mx-auto rounded-xl bg-gradient-to-r from-primary to-secondary mb-4" />
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">
          Our {" "}
          <span className="bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent font-bold">
            Case {" "}
          </span>
           Studies
        </h1>
      </div>
      <div className="mb-12">
<div className="max-w-3xl mb-12">
  <h2 className="text-2xl md:text-3xl font-semibold mb-3">
    Our Recent Case Studies
  </h2>
  <p className="text-gray-600">
    Deep dives into how we solved real business problems through strategy,
    design, and technology.
  </p>
</div>

      </div>
<motion.div
  className="flex flex-col gap-12"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {caseStudies.map((item, index) => (
    <CaseStudyCard
      key={index}
      image={item.image}
      title={item.title}
      desc={item.desc}
      reverse={index % 2 !== 0} 
    />
  ))}
</motion.div>
<motion.div
   className="mt-20 sm:mt-24 bg-gray-100 rounded-2xl
             p-8 sm:p-12 text-center"
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
>

  <h2 className="text-3xl md:text-4xl font-semibold mb-4">
    Have a Project in Mind?
  </h2>
  <p className="text-gray-600 max-w-2xl mx-auto mb-8">
    Let’s collaborate and build something impactful together.
  </p>
<Button text={"Start Your Project"}/>
</motion.div>

    </motion.section>
  );
};

export default Portfolio;
