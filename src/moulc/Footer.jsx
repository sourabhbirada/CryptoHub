import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaTelegram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900  text-white pt-6 pb-6 border-t border-gray-700">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Company Info */}
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold flex  mb-3 items-center">
              <span className="bg-blue-500 w-2 h-6 mr-2 rounded-full"></span>
              CryptoWatch
            </h3>
            <p className="text-gray-400">
              Your premier destination for real-time cryptocurrency market data and analytics.
            </p>
          </div>
          <div className="flex gap-8 mt-8 pl-32">
              {[FaFacebook, FaTwitter, FaInstagram, FaTelegram, FaGithub].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
                  aria-label={`Social link ${index}`}
                >
                  <Icon className="w-9 h-9" />
                </a>
              ))}
            </div>

          {/* Quick Links */}
          <div className="animate-fade-in delay-100">
            {/* <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4> */}
            <ul className="flex mt-8 justify-end gap-4">
              {['Market', 'Portfolio', 'Watchlist', 'Alerts', 'API'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-4 h-4 text-lg bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6 animate-fade-in delay-300"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <div className="animate-fade-in delay-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} CryptoWatch. All rights reserved.
          </div>
          <div className="flex space-x-6 animate-fade-in delay-500">
            <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Cookies</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Legal</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-150 {
          animation-delay: 0.15s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;