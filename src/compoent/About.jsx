import React from "react";
import { motion } from "framer-motion";
import { FiUsers, FiAward, FiBarChart2, FiGlobe } from "react-icons/fi";
import Info from "./Aboutinfo";
import aboutus from '../assest/abotuus.png';

const About = () => {
  const stats = [
    { icon: <FiUsers className="text-3xl text-blue-400" />, value: "10M+", label: "Active Users" },
    { icon: <FiAward className="text-3xl text-blue-400" />, value: "2018", label: "Founded In" },
    { icon: <FiBarChart2 className="text-3xl text-blue-400" />, value: "150+", label: "Cryptos Listed" },
    { icon: <FiGlobe className="text-3xl text-blue-400" />, value: "190", label: "Countries Supported" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-gradient-to-br  to-gray-800 min-h-screen py-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={itemVariants}
          className="flex flex-col lg:flex-row items-center gap-12 mb-16"
        >
          <div className="lg:w-1/2">
            <motion.img
              src={aboutus}
              alt="About Us"
              className="rounded-xl shadow-2xl border-2 border-gray-700 hover:border-blue-500 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            />
          </div>
          <div className="lg:w-1/2">
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6"
            >
              About CryptoDash
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-300 mb-8"
            >
              We're revolutionizing the way people interact with cryptocurrency markets through cutting-edge technology and transparent data.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    {stat.icon}
                    <h3 className="text-2xl font-bold text-white mt-3">{stat.value}</h3>
                    <p className="text-gray-400">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div 
          variants={itemVariants}
          className="bg-gray-800 rounded-xl shadow-2xl p-8 md:p-12 mb-16 border border-gray-700"
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
              Our Mission
            </span>
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            To democratize access to cryptocurrency market data and empower investors with real-time, accurate information to make informed decisions.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Transparency</h3>
              <p className="text-gray-300">
                We believe in open access to market data without hidden fees or biased information.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
              <p className="text-gray-300">
                Continuously developing new tools to help you navigate the crypto markets effectively.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Team/Info Section */}
        <motion.div variants={itemVariants}>
          <Info />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;