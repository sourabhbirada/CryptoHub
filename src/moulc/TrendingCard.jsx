import React, { useEffect, useState } from "react";
import { API, TRENDING_COIN } from "../utits/content";
import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { motion } from "framer-motion";
import { FiTrendingUp, FiPieChart, FiImage, FiZap } from "react-icons/fi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TrendingCard = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [trendingCategories, setTrendingCategories] = useState([]);
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [priceData, setPriceData] = useState({});

  const fetchTrendingCoins = async () => {
    try {
      const response = await fetch(TRENDING_COIN);
      const data = await response.json();
      setTrendingCoins(data.coins.slice(0, 5));
      setTrendingCategories(data.categories.slice(0, 5));
      setNfts(data.nfts.slice(0, 5));
      
      // Fetch price data for each coin
      const pricePromises = data.coins.slice(0, 5).map(coin => 
        fetchPriceData(coin.item.id)
      );
      await Promise.all(pricePromises);
      
      setLoading(false);
    } catch (error) {
      console.error("Error fetching trending data:", error);
      setLoading(false);
    }
  };

  const fetchPriceData = async (coinId) => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7&api_key=${process.env.REACT_APP_COINGECKO_API_KEY}`
      );
      const data = await response.json();
      setPriceData((prev) => ({
        ...prev,
        [coinId]: data.prices.map((price) => price[1]),
      }));
    } catch (error) {
      console.error(`Error fetching price data for ${coinId}:`, error);
    }
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, []);

  const getChartData = (prices) => {
    return {
      labels: Array.from({ length: prices?.length || 0 }, (_, i) => i + 1),
      datasets: [
        {
          label: "Price (USD)",
          data: prices || [],
          borderColor: "#3B82F6", // blue-500
          backgroundColor: "rgba(59, 130, 246, 0.1)",
          borderWidth: 2,
          tension: 0.4,
          fill: true,
          pointRadius: 0,
        },
      ],
    };
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
    maintainAspectRatio: false,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  if (loading) {
    return (
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {[1, 2, 3, 4].map((item) => (
          <motion.div 
            key={item}
            variants={itemVariants}
            className="bg-gray-800 rounded-xl p-6 h-80"
          >
            <Skeleton height={24} width={120} className="mb-6" />
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center justify-between">
                  <Skeleton circle width={32} height={32} />
                  <Skeleton width={100} height={16} />
                  <Skeleton width={60} height={16} />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Trending Coins */}
      <motion.div 
        variants={itemVariants}
        className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors duration-300"
      >
        <div className="flex items-center mb-6">
          <div className="p-2 bg-blue-500/10 rounded-lg mr-3">
            <FiTrendingUp className="text-blue-500 w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Trending Coins</h3>
        </div>
        <div className="space-y-4">
          {trendingCoins.slice(0, 4).map((coin, index) => (
            <div key={coin.item.id} className="flex items-center justify-between group">
              <div className="flex items-center space-x-3">
                <span className="text-xs font-semibold text-gray-400 w-4">#{index + 1}</span>
                <img 
                  src={coin.item.small} 
                  alt={coin.item.name} 
                  className="w-8 h-8 rounded-full border border-gray-700 group-hover:border-blue-500 transition-colors"
                />
                <div>
                  <Link 
                    to={`/coin/${coin.item.id}`} 
                    className="text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                  >
                    {coin.item.name}
                  </Link>
                  <p className="text-xs text-gray-400">{coin.item.symbol.toUpperCase()}</p>
                </div>
              </div>
              <div className="w-20 h-10">
                {priceData[coin.item.id] ? (
                  <Line data={getChartData(priceData[coin.item.id])} options={chartOptions} />
                ) : (
                  <div className="h-full w-full bg-gray-700 rounded animate-pulse"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Trending Categories */}
      <motion.div 
        variants={itemVariants}
        className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors duration-300"
      >
        <div className="flex items-center mb-6">
          <div className="p-2 bg-blue-500/10 rounded-lg mr-3">
            <FiPieChart className="text-blue-500 w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Trending Categories</h3>
        </div>
        <div className="space-y-4">
          {trendingCategories.slice(0, 4).map((category) => (
            <div key={category.id} className="group">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {category.name}
                </h3>
                <span className="text-xs bg-gray-700 text-blue-400 px-2 py-1 rounded">
                  {category.coins_count} coins
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-1.5">
                <div 
                  className="bg-blue-500 h-1.5 rounded-full" 
                  style={{ width: `${Math.min(category.data.market_cap_change_24h || 0, 100)}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>Vol: ${(category.data.total_volume || 0).toLocaleString()}</span>
                <span>MCap: ${(category.data.market_cap || 0).toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Trending NFTs */}
      <motion.div 
        variants={itemVariants}
        className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors duration-300"
      >
        <div className="flex items-center mb-6">
          <div className="p-2 bg-blue-500/10 rounded-lg mr-3">
            <FiImage className="text-blue-500 w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Trending NFTs</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {nfts.slice(0, 4).map((nft, index) => (
            <div key={nft.id} className="group">
              <div className="relative overflow-hidden rounded-lg aspect-square mb-2">
                <img 
                  src={nft.thumb} 
                  alt={nft.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                  <p className="text-xs font-semibold text-white truncate">{nft.name}</p>
                  <p className="text-xs text-gray-300">Floor: {nft.data.floor_price || 'N/A'}</p>
                </div>
                <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                  #{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Premium Ad Space */}
      <motion.div 
        variants={itemVariants}
        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors duration-300 flex flex-col items-center justify-center text-center"
      >
        <div className="p-3 bg-blue-500/10 rounded-full mb-4">
          <FiZap className="text-blue-500 w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Premium Ad Space</h3>
        <p className="text-gray-400 mb-6">Reach crypto enthusiasts with your message</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300">
          Advertise With Us
        </button>
      </motion.div>
    </motion.div>
  );
};

export default TrendingCard;