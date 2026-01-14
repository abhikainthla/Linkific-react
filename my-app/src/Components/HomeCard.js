import React from "react";

const HomeCard = () => {
  const data = [
    {
      image: "Rocket_perspective_matte.png",
      title: "UX Driven Engineering",
      desc:
        "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    },
    {
      image: "Code_perspective_matte.png",
      title: "Developing Shared Understanding",
      desc:
        "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    },
    {
      image: "Heart_rate_perspective_matte.png",
      title: "Proven Experience and Expertise",
      desc:
        "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    },
    {
      image: "Shield_perspective_matte.png",
      title: "Security & Intellectual Property (IP)",
      desc:
        "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    },
    {
      image: "Success_perspective_matte.png",
      title: "Code Reviews",
      desc:
        "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    },
    {
      image: "Padlock_perspective_matte.png",
      title: "Quality Assurance & Testing",
      desc:
        "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-4 sm:gap-5
                     border border-gray-200
                     p-4 sm:p-6
                     rounded-xl
                     bg-white
                     transition-all duration-300
                     hover:shadow-lg hover:-translate-y-1"
        >
          {/* Image */}
          <div className="w-10 sm:w-12 flex-shrink-0">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-semibold text-lg sm:text-xl mb-1 sm:mb-2">
              {item.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeCard;
