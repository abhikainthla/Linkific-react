import React from "react";

const CaseStudyCard = ({ image, title, desc, reverse }) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-8`}
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
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>

        <button className="mt-6 px-6 py-3 rounded-lg text-white bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform">
          View Case Study
        </button>
      </div>
    </div>
  );
};

export default CaseStudyCard;
