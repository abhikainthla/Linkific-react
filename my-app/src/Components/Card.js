const Card = ({ title, description }) => {
  return (
    <div className="h-96 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-primary to-secondary text-white mb-6">
        <span className="text-xl font-bold">
          {title.charAt(0)}
        </span>
      </div>

      {/* Content */}
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-gray-800">
          {title}
        </h3>

        <p className="text-gray-600 mt-3 leading-relaxed">
          {description}
        </p>
      </div>

      {/* CTA pinned to bottom */}
      <button className="mt-6 text-sm font-semibold text-primary">
        Learn More →
      </button>
    </div>
  );
};

export default Card;
