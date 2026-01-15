import React from "react";
import Button from "./Buttons";

const CaseStudyCard = ({ image, title, desc, reverse, bgColor }) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-8 ${bgColor} rounded-xl`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2">
        <img
          src={`/${image}`}
          alt={title}
          className="rounded-xl shadow-md w-full"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 p-5">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-5">{desc}</p>

        <Button text={"View Case Study"}/>
      </div>
    </div>
  );
};

export default CaseStudyCard;
