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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex border-2 p-6 gap-4 rounded-lg hover:shadow-md transition"
        >
          {/* Image */}
          <div className="w-10 h-auto flex-shrink-0">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-bold text-xl mb-2">
              {item.title}
            </h2>
            <p className="text-sm text-gray-600">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeCard;
