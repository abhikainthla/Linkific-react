import { motion } from "framer-motion";
import { FcCustomerSupport, FcMoneyTransfer } from "react-icons/fc";
import { MdEditSquare } from "react-icons/md";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { SiGoogleanalytics, SiPagespeedinsights } from "react-icons/si";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const HomeGrid = () => {
  const data = [
    {
      icon: <FcMoneyTransfer size={36} />,
      title: "Hosting Fees Included",
      desc: "Hosting fees are built right into the monthly payment.",
    },
    {
      icon: <MdEditSquare size={36} className="text-[#1c75b9]" />,
      title: "Unlimited Edits",
      desc: "Change anything you want at anytime and it will be done that day.",
    },
    {
      icon: <FcCustomerSupport size={36} />,
      title: "24/7 Customer Service",
      desc: "Call direct anytime day or night, no phone trees or automated responses.",
    },
    {
      icon: <LiaLaptopCodeSolid size={36} className="text-[#eb42b2]" />,
      title: "Web Design & Development",
      desc: "Includes over 40 hours of design, development, and testing.",
    },
    {
      icon: <SiPagespeedinsights size={32} className="text-[#fb5212]" />,
      title: "100 Google Page Speed Score",
      desc: "We achieve perfect PageSpeed scores to boost performance and SEO.",
    },
    {
      icon: <SiGoogleanalytics size={32} className="text-[#ffc313]" />,
      title: "Google Analytics",
      desc: "We install Analytics for free to monitor traffic and user behavior.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            $0 Down, $150 Per Month, 6 Month Minimum Contract
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            $0 down for a standard 5 page small business website. Custom pricing
            applies for larger projects. You own everything and can cancel anytime.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100
                         hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-indigo-50 mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HomeGrid;
