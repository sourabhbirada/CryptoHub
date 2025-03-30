import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FiExternalLink, 
  FiBarChart2, 
  FiTrendingUp, 
  FiTrendingDown, 
  FiUsers,
  FiLink,
  FiDollarSign
} from "react-icons/fi";
import { 
  FaTelegram, 
  FaReddit, 
  FaGithub,
  FaTwitter 
} from "react-icons/fa";
import useCoinview from  '../utits/useCoinview';

const Coinview = () => {
  const { coinid } = useParams();  
  const coinData = useCoinview(coinid);
  const [activeTab, setActiveTab] = useState('description');

  if (!coinData) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="text-center text-xl text-gray-400">
          Loading coin data...
        </div>
      </div>
    );
  }

  const {
    name,
    symbol,
    description,
    image,
    market_data,
    links,
    community_data,
    watchlist_portfolio_users
  } = coinData;

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

  const formatLargeNumber = (num) => {
    if (!num) return 'N/A';
    if (num >= 1e12) return `${(num / 1e12).toFixed(2)}T`;
    if (num >= 1e9) return `${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `${(num / 1e6).toFixed(2)}M`;
    return num.toLocaleString();
  };

  const isPositive = (value) => value >= 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8  text-gray-100"
    >
      {/* Coin Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
        <motion.img
          src={image?.large}
          alt={name}
          className="w-20 h-20 rounded-full border-4 border-gray-700 shadow-lg"
          whileHover={{ rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <div>
          <h1 className="text-3xl font-bold text-white">
            {name} <span className="text-blue-400">({symbol?.toUpperCase()})</span>
          </h1>
          <div className="flex items-center mt-2 space-x-4">
            <span className="text-2xl font-semibold text-white">
              {formatCurrency(market_data?.current_price?.usd)}
            </span>
            <span className={`flex items-center text-sm font-medium px-2 py-1 rounded ${
              isPositive(market_data?.price_change_percentage_24h) 
                ? 'bg-green-900 text-green-400' 
                : 'bg-red-900 text-red-400'
            }`}>
              {isPositive(market_data?.price_change_percentage_24h) ? (
                <FiTrendingUp className="mr-1" />
              ) : (
                <FiTrendingDown className="mr-1" />
              )}
              {Math.abs(market_data?.price_change_percentage_24h || 0).toFixed(2)}% (24h)
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Market Data */}
        <div className="lg:col-span-1 bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
          <h2 className="text-xl font-semibold mb-4 flex items-center text-blue-400">
            <FiBarChart2 className="mr-2" />
            Market Data
          </h2>
          
          <div className="space-y-4">
            {[
              { label: "Market Cap", value: market_data?.market_cap?.usd },
              { label: "24h Trading Volume", value: market_data?.total_volume?.usd },
              { label: "24h High", value: market_data?.high_24h?.usd },
              { label: "24h Low", value: market_data?.low_24h?.usd },
              { label: "Circulating Supply", value: market_data?.circulating_supply, isCrypto: true }
            ].map((item, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-gray-400">{item.label}</span>
                <span className="font-medium">
                  {item.isCrypto 
                    ? `${formatLargeNumber(item.value)} ${symbol?.toUpperCase()}`
                    : formatCurrency(item.value)}
                </span>
              </div>
            ))}
          </div>

          {/* Community Data */}
          <h2 className="text-xl font-semibold mt-8 mb-4 flex items-center text-blue-400">
            <FiUsers className="mr-2" />
            Community
          </h2>
          
          <div className="space-y-3">
            {[
              { icon: <FaTwitter className="text-blue-400 mr-2" />, label: "Twitter", value: community_data?.twitter_followers },
              { icon: <FaTelegram className="text-blue-500 mr-2" />, label: "Telegram", value: community_data?.telegram_channel_user_count },
              { icon: <FaReddit className="text-orange-500 mr-2" />, label: "Reddit", value: links?.subreddit_url, isLink: true },
              { icon: <FiUsers className="text-purple-500 mr-2" />, label: "Watchlist", value: watchlist_portfolio_users }
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                {item.icon}
                <span className="text-gray-400">{item.label}: </span>
                {item.isLink ? (
                  <a 
                    href={item.value} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="ml-2 text-blue-400 hover:underline"
                  >
                    {item.value ? 'View Community' : 'N/A'}
                  </a>
                ) : (
                  <span className="ml-2 font-medium">
                    {formatLargeNumber(item.value)}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Middle Column - Chart & Description */}
        <div className="lg:col-span-2 space-y-6">
          {/* Chart Placeholder */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 h-80 flex items-center justify-center border border-gray-700">
            <div className="text-center text-gray-500">
              <FiBarChart2 className="mx-auto h-12 w-12 text-blue-400" />
              <p className="mt-2">Price chart would be displayed here</p>
            </div>
          </div>

          {/* Description Tabs */}
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700">
            <div className="border-b border-gray-700">
              <nav className="flex -mb-px">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                    activeTab === 'description'
                      ? 'border-blue-500 text-blue-400'
                      : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600'
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab('links')}
                  className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                    activeTab === 'links'
                      ? 'border-blue-500 text-blue-400'
                      : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600'
                  }`}
                >
                  Links
                </button>
              </nav>
            </div>
            <div className="p-6">
              {activeTab === 'description' ? (
                <div className="prose max-w-none text-gray-300">
                  {description?.en ? (
                    <p>{description.en}</p>
                  ) : (
                    <p className="text-gray-500">No description available</p>
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  {[
                    { icon: <FiLink className="mr-2" />, label: "Official Links", links: links?.homepage?.filter(Boolean) },
                    { icon: <FaGithub className="mr-2" />, label: "GitHub Repositories", links: links?.repos_url?.github?.filter(Boolean) },
                    { icon: <FaTelegram className="mr-2" />, label: "Community Channels", links: links?.chat_url?.filter(Boolean) }
                  ].map((section, index) => (
                    section.links?.length > 0 && (
                      <div key={index}>
                        <h3 className="font-medium flex items-center text-gray-300">
                          {section.icon}
                          {section.label}
                        </h3>
                        <ul className="mt-2 space-y-2">
                          {section.links.map((link, idx) => (
                            <li key={idx}>
                              <a 
                                href={link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:underline flex items-center"
                              >
                                {link} <FiExternalLink className="ml-1 h-3 w-3" />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Coinview;