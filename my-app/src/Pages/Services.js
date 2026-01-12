import Card from "../Components/Card";
import TechStack from "../Components/TechStack";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Services = () => {
  return (
    <section className="px-6 py-16 md:px-16 lg:px-24 bg-gray-50 flex flex-col gap-24">

      {/* SERVICES SECTION */}
      <div>
        <div className="flex flex-col items-center mb-12">
          <div className="w-10 h-1 rounded-xl bg-gradient-to-r from-primary to-secondary mb-4" />
          <h2 className="text-2xl md:text-4xl font-semibold text-center">
            Our Services
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
            640: { slidesPerView: 2 },
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
              <div className="w-full flex">
                <Card {...service} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* TECH STACK SECTION */}
      <div className="bg-gray-100 rounded-2xl p-10 md:p-16">
        <div className="flex flex-col items-center mb-12">
          <div className="w-10 h-1 rounded-xl bg-gradient-to-r from-primary to-secondary mb-4" />
          <h2 className="text-2xl md:text-4xl font-semibold text-center">
            Our Tech Stack
          </h2>
        </div>

        <TechStack />
      </div>
    </section>
  );
};

export default Services;
