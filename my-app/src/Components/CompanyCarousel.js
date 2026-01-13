import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const CompanyCarousel = ({ companies }) => {
  return (
    <div className="w-full py-12">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {companies.map((company, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center">
              <img
                src={`/${company.image}`}
                alt="Company logo"
                className="h-12 object-contain transition duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CompanyCarousel;
