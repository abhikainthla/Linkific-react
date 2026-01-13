import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import CaseStudyCard from "../Components/CaseStudyCard";

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
    <section className="px-6 py-16 md:px-16 lg:px-24">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="w-10 h-1 mx-auto rounded-xl bg-gradient-to-r from-primary to-secondary mb-4" />
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">
          Our{" "}
          <span className="bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent font-bold">
            Portfolio
          </span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A selection of projects showcasing our expertise in design and
          development.
        </p>
      </div>

      {/* Carousel */}
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
            <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 h-full mb-10">
              {/* Image */}
              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

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
      <div className="flex flex-col gap-12">
  {caseStudies.map((item, index) => (
    <CaseStudyCard
      key={index}
      image={item.image}
      title={item.title}
      desc={item.desc}
      reverse={index % 2 !== 0} 
    />
  ))}
</div>

    </section>
  );
};

export default Portfolio;
