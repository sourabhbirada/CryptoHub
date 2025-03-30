import React from "react";
import { motion } from "framer-motion";
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiClock, 
  FiSend,
  FiUsers  // Added this import
} from "react-icons/fi";
import { FaTelegram, FaTwitter, FaDiscord } from "react-icons/fa";

const Contact = () => {
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
      <div className="max-w-7xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have questions about cryptocurrencies or our platform? Reach out to our team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            variants={itemVariants}
            className="bg-gray-800 rounded-xl shadow-2xl p-8 border border-gray-700 hover:border-blue-500 transition-colors duration-300"
          >
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <FiSend className="mr-2 text-blue-400" />
              Send Us a Message
            </h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all"
                >
                  <option value="">Select a topic</option>
                  <option value="support">Technical Support</option>
                  <option value="account">Account Help</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <FiSend className="mr-2" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            variants={itemVariants}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="bg-gray-800 rounded-xl shadow-2xl p-8 border border-gray-700 hover:border-blue-500 transition-colors duration-300">
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <FiMail className="mr-2 text-blue-400" />
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-700 p-3 rounded-lg text-blue-400">
                    <FiMail className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-300">Email</h3>
                    <p className="text-gray-400">support@cryptodash.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-700 p-3 rounded-lg text-blue-400">
                    <FiPhone className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-300">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-700 p-3 rounded-lg text-blue-400">
                    <FiMapPin className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-300">Address</h3>
                    <p className="text-gray-400">123 Crypto Street, Blockchain City</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-700 p-3 rounded-lg text-blue-400">
                    <FiClock className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-300">Hours</h3>
                    <p className="text-gray-400">24/7 Support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gray-800 rounded-xl shadow-2xl p-8 border border-gray-700 hover:border-blue-500 transition-colors duration-300">
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <FiUsers className="mr-2 text-blue-400" />
                Connect With Us
              </h2>
              
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ y: -5 }}
                  href="#"
                  className="bg-gray-700 hover:bg-blue-500 p-4 rounded-lg transition-colors duration-300 text-blue-400 hover:text-white"
                >
                  <FaTwitter className="h-6 w-6" />
                </motion.a>
                
                <motion.a
                  whileHover={{ y: -5 }}
                  href="#"
                  className="bg-gray-700 hover:bg-blue-600 p-4 rounded-lg transition-colors duration-300 text-blue-400 hover:text-white"
                >
                  <FaTelegram className="h-6 w-6" />
                </motion.a>
                
                <motion.a
                  whileHover={{ y: -5 }}
                  href="#"
                  className="bg-gray-700 hover:bg-indigo-500 p-4 rounded-lg transition-colors duration-300 text-blue-400 hover:text-white"
                >
                  <FaDiscord className="h-6 w-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;