import { motion } from 'framer-motion';

const Stockmarket = () => {
  return (
    <div className="min-h-screen flex bg-gray-800 flex-col justify-center items-center">
      {/* Animate the background color */}
      <motion.div 
        // className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-40" 
        // animate={{ opacity: [0, 0.5, 0.7, 1] }}
        // transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      />
      
      {/* Main text animation */}
      <motion.h1
        className="text-4xl font-semibold text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 80 }}
      >
        The Page is Under Construction
      </motion.h1>

      {/* Sub-text animation */}
      <motion.p
        className="text-2xl text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 60 }}
      >
        We're working on it! Stay tuned for updates.
      </motion.p>

      {/* Button with hover animation */}
      <motion.button
        className="mt-6 px-6 py-2 rounded-lg text-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300 ease-in-out"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Learn More
      </motion.button>
    </div>
  );
};

export default Stockmarket;
