import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredMember: null
    };
  }

  handleHover = (member) => {
    this.setState({ hoveredMember: member });
  };

  handleLeave = () => {
    this.setState({ hoveredMember: null });
  };

  render() {
    const teamMembers = [
      {
        name: "Sourabh",
        role: "Founder & Lead Developer",
        github: "https://github.com/sourabh",
        linkedin: "https://linkedin.com/in/sourabh",
        instagram: "https://instagram.com/sourabh"
      },
      {
        name: "Sourabh",
        role: "Blockchain Developer",
        github: "#",
        linkedin: "#",
        instagram: "#"
      },
      {
        name: "Sourabh",
        role: "UI/UX Designer",
        github: "#",
        linkedin: "#",
        instagram: "#"
      }
    ];

    const terms = [
      "All data is provided for informational purposes only",
      "We are not responsible for investment decisions",
      "Cryptocurrency trading involves risk",
      "Prices may be delayed by up to 5 minutes",
      "By using this platform you agree to our terms"
    ];

    return (
      <div className="bg-gray-800 rounded-xl shadow-2xl p-8 border border-gray-700 mt-12">
        {/* Team Section */}
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8">
          Our Team
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 p-6 rounded-lg border border-gray-600 hover:border-blue-500 transition-colors duration-300"
              whileHover={{ y: -5 }}
              onMouseEnter={() => this.handleHover(index)}
              onMouseLeave={this.handleLeave}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-gray-600 mb-4 flex items-center justify-center text-2xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-gray-400 mb-4">{member.role}</p>
                <div className="flex space-x-4">
                  <a 
                    href={member.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FiGithub className="w-5 h-5" />
                  </a>
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    <FiLinkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href={member.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-pink-500 transition-colors"
                  >
                    <FiInstagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Terms Section */}
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8">
          Terms & Conditions
        </h2>
        
        <ul className="space-y-4">
          {terms.map((term, index) => (
            <motion.li
              key={index}
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-blue-400 mr-2">•</span>
              <span className="text-gray-300">{term}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Info;