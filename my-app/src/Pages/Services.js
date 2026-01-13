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
            Our {" "} <span className="bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent font-bold">
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

          <div className="flex flex-col items-center mb-12">
      <div className="w-10 h-1 rounded-xl bg-gradient-to-r from-primary to-secondary mb-4"  />
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-12">
            Our {" "} <span className="bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent font-bold">
            Stratergic
          </span> Edge
          </h2>
          <div className="flex border-2">
            <div className="p-6 bg-[#f6f6f2] border-r-2">
              <h2 className="font-semi-bold text-2xl mb-2">Research</h2>
              <p className="text-gray-600 mt-3 leading-relaxed">We begin by undersatnding our goals, user and market. Through stakeholder interviews, competitor analysis and user research. </p>
              <p className=" justify-self-end text-8xl bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent mb-2">01</p>
            </div>
             <div className="p-6 border-r-2 ">
              <p className="justify-self-end text-8xl bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent ">02</p>
              <h2 className="font-semi-bold text-2xl mb-2">Design</h2>
              <p className="text-gray-600 mt-3 leading-relaxed">Our design translate stratergy into intuitive interfaces and delightful experiences. We create wireframes, high-fedility mockups.</p>
              
            </div>
             <div className="p-6 bg-[#f6f6f2] border-r-2 ">
              <h2 className="font-semi-bold text-2xl mb-2">Development</h2>
              <p className="text-gray-600 mt-3 leading-relaxed">Engineers brings the desogn to life using clean, scalable code and modern frameworks. We build secure, responsive websites and web applications. </p>
              <p className=" justify-self-end text-8xl bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent ">03</p>
            </div>
             <div className="p-6 ">
              <p className="justify-self-end text-8xl bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent ">04</p>
              <h2 className="font-semi-bold text-2xl mb-2">Launch</h2>
              <p className="text-gray-600 mt-3 leading-relaxed">Before launch, we thoroughly test the product perfomance tuning, cross-browser checks, and final QA to ensure a smooth development.</p>
              
            </div>
          </div>
      </div>

      {/* TECH STACK SECTION */}
      <div className="bg-gray-100 rounded-2xl p-10 md:p-16">
        <div className="flex flex-col items-center mb-12">
          <div className="w-10 h-1 rounded-xl bg-gradient-to-r from-primary to-secondary mb-4" />
          <h2 className="text-2xl md:text-4xl font-semibold text-center">
            Our {" "} <span className="bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent font-bold">
            Tech
          </span> Stack
          </h2>
        </div>

        <TechStack />
      </div>
    </section>
  );
};

export default Services;
