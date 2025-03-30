import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { FiBarChart2, FiDollarSign, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import TrendingCard from "../../moulc/TrendingCard";
import CoinCard from "../../moulc/Coincard";
import useOnlinestatus from "../../utits/useOnlinestatus";
import Usercontext from "../../utits/UserContext";
import { API_KEY } from "../../utits/content";

const SkeletonCard = () => (
  <div className="flex items-center p-4 gap-9 bg-gray-100 rounded-lg shadow-sm">
    <div className="w-12 text-center">
      <div className="h-4 bg-gray-200 rounded w-full"></div>
    </div>
    <div className="w-48 flex items-center space-x-4">
      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-24"></div>
        <div className="h-3 bg-gray-200 rounded w-16"></div>
      </div>
    </div>
    {[...Array(6)].map((_, i) => (
      <div key={i} className="w-24 text-right">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
      </div>
    ))}
  </div>
);

const Body = () => {
  const [coin, setCoin] = useState([]);
  const [filter, setFilter] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(API_KEY);
      const data = await response.json();
      console.log(data);
      setCoin(data);
      setFilter(data);
    } catch (error) {
      console.error("Error fetching coin data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { logginuser, setuserinfo } = useContext(Usercontext);

  const userStatus = useOnlinestatus();
  if (!userStatus)
    return (
      <h1 className="text-center text-red-500 mt-10">
        You are offline. Check your internet connection!
      </h1>
    );

  const handleFilterTopCoins = () => {
    const topCoins = coin.filter((coin) => coin.current_price > 100);
    setFilter(topCoins);
  };

  const handleFilterValuableCoins = () => {
    const valuableCoins = coin.filter(
      (coin) => coin.price_change_percentage_24h > 0
    );
    setFilter(valuableCoins);
  };

  return coin.length === 0 ? (
    <div className="mt-10 ml-10 space-y-8">
      {Array.from({ length: 10 }, (_, i) => (
        <div key={i} className="mr-6">
          <SkeletonCard />
        </div>
      ))}
    </div>
  ) : (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-10 ml-10 space-y-8"
    >
      {/* Trending Section */}
      <div className="m-6">
        <TrendingCard carddata={{}} />
      </div>

      {/* Filter and Search Section */}
      <motion.div
        className="flex flex-col justify-between md:flex-row gap-6 items-center mr-6  p-6 rounded-xl shadow-sm"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-28 h-14 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
            onClick={handleFilterTopCoins}
          >
            <FiBarChart2 className="w-4 h-4" />
            Top 10
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-28 h-14 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
            onClick={handleFilterValuableCoins}
          >
            <FiDollarSign className="w-4 h-4" />
            Top Value
          </motion.button>
        </div>

        <div className="flex items-center space-x-4 w-full md:w-auto">
          <div className="relative w-full md:w-96">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search cryptocurrencies..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full pl-12 pr-4 py-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 shadow-sm"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  console.log(searchValue);
                  const searchFilter = coin.filter((co) =>
                    co.name.toLowerCase().includes(searchValue.toLowerCase())
                  );
                  setFilter(searchFilter);
                }
              }}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 text-sm bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            onClick={() => {
              console.log(searchValue);
              const searchFilter = coin.filter((co) =>
                co.name.toLowerCase().includes(searchValue.toLowerCase())
              );
              setFilter(searchFilter);
            }}
          >
            <FiSearch className="w-4 h-4" />
            Find
          </motion.button>
        </div>
      </motion.div>

      {/* Coins Display */}
      <motion.div
        className="grid grid-cols-1 gap-6 mr-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {filter.map((coin, index) => (
          <Link
            to={"/coin/" + coin.id}
            key={coin.id}
            className="hover:shadow-lg transition-transform hover:-translate-y-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <CoinCard coindata={coin} />
            </motion.div>
          </Link>
        ))}
      </motion.div>

      {/* Subscription Section */}
      <div className="bg-gradient-to-br from-gray-800 mr-6 to-gray-900 p-8 rounded-xl shadow-lg text-center border border-gray-700 transform transition-all hover:shadow-xl hover:border-blue-500">
        <h1 className="text-3xl font-bold text-white mb-4">
          Stay Ahead in Crypto.{" "}
          <span className="block sm:inline text-blue-400">
            24/7 Market Intelligence.
          </span>
        </h1>

        <p className="text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
          Get exclusive crypto insights delivered to your inbox: breaking news,
          in-depth research, reward opportunities, event alerts, new coin
          listings, and curated updates from CoinMarketCap.
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="email"
            placeholder="Enter your professional email address"
            className="px-5 py-3 w-full sm:w-96 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-gray-600 placeholder-gray-400"
          />
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg">
            Subscribe Now
            <span className="ml-2">→</span>
          </button>
        </div>

        <p className="text-xs text-gray-500 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </motion.div>
  );
};

export default Body;
