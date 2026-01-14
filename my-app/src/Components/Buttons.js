import { motion } from "framer-motion";

const Button = ({ text }) => {
  return (
    <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="pr-5 pl-5 py-3 sm:py-4 rounded-xl text-white font-medium
              bg-gradient-to-r from-primary to-secondary
              hover:opacity-90 transition-all duration-300 text-sm sm:text-base"
            >
              {text}
            </motion.button>
  );
};

export default Button;
