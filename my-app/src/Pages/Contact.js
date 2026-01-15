import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Contact = () => {
  return (
    <motion.section
      className="relative px-4 sm:px-6 py-16 sm:py-24 mt-5 max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Header */}
      <motion.div
        className="flex flex-col items-center text-center mb-12 sm:mb-16"
        variants={fadeUp}
      >
        <div className="w-12 h-1 rounded-full bg-gradient-to-r from-primary to-secondary mb-5" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
          Contact{" "}
          <span className="bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent font-bold">
            Us
          </span>
        </h2>
        <p className="mt-4 sm:mt-5 text-gray-600 max-w-xl sm:max-w-2xl text-sm sm:text-base">
          Have a question or want to work with us? We’d love to hear from you.
          Fill out the form below and our team will reach out shortly.
        </p>
      </motion.div>

      <hr className="mb-8" />

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14">
        {/* Contact Info */}
        <motion.div variants={fadeLeft}>
          <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base max-w-md">
            Reach out for project inquiries, collaborations, or any general
            questions.
          </p>

          <ul className="space-y-4 sm:space-y-6">
            <motion.li
              variants={fadeUp}
              className="flex items-center gap-3 sm:gap-4"
            >
              <span className="p-2 sm:p-3 rounded-xl bg-primary/10 text-primary">
                <MapPin size={20} />
              </span>
              <span className="text-gray-700 text-sm sm:text-base">
                <strong>Address:</strong> New Delhi, India
              </span>
            </motion.li>

            <motion.li
              variants={fadeUp}
              className="flex items-center gap-3 sm:gap-4"
            >
              <span className="p-2 sm:p-3 rounded-xl bg-primary/10 text-primary">
                <Mail size={20} />
              </span>
              <span className="text-gray-700 text-sm sm:text-base">
                <strong>Email:</strong> contact@mycompany.com
              </span>
            </motion.li>

            <motion.li
              variants={fadeUp}
              className="flex items-center gap-3 sm:gap-4"
            >
              <span className="p-2 sm:p-3 rounded-xl bg-primary/10 text-primary">
                <Phone size={20} />
              </span>
              <span className="text-gray-700 text-sm sm:text-base">
                <strong>Phone:</strong> +91 98765 43210
              </span>
            </motion.li>
          </ul>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={fadeRight}
          className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg"
        >
          <form className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base
                focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
              />
            </div>

            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base
                focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
              />
            </div>

            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Tell us about your project..."
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base
                focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition resize-none"
              ></textarea>
            </div>

            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 sm:py-4 rounded-xl text-white font-medium
              bg-gradient-to-r from-primary to-secondary
              hover:opacity-90 transition-all duration-300 text-sm sm:text-base"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
