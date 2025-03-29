import React from "react";
import { FiArrowUp, FiArrowDown, FiInfo } from "react-icons/fi";

const CoinCard = ({ coindata }) => {
  const {
    rank,
    name = "Unknown",
    symbol = "N/A",
    current_price = 0,
    price_change_percentage_1h_in_currency = 0,
    price_change_percentage_24h_in_currency = 0,
    price_change_percentage_7d_in_currency = 0,
    market_cap = 0,
    total_volume = 0,
    circulating_supply = 0,
    image = "",
  } = coindata || {};

  // Formatting functions
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

  const formatLargeNumber = (num) => {
    if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`;
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    return `$${num.toLocaleString()}`;
  };

  const PercentageChange = ({ value }) => {
    const isPositive = value >= 0;
    return (
      <div className={`flex items-center justify-end ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
        {isPositive ? (
          <FiArrowUp className="mr-1" size={14} />
        ) : (
          <FiArrowDown className="mr-1" size={14} />
        )}
        <span>{Math.abs(value).toFixed(2)}%</span>
      </div>
    );
  };

  return (
    <div className="flex items-center p-4 gap-4 bg-gray-800 hover:bg-gray-750 text-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group border border-gray-700 hover:border-blue-500/30">
      {/* Rank */}
      <div className="w-8 text-center text-gray-400 font-medium text-xs">
        #{rank || "-"}
      </div>

      {/* Coin Info */}
      <div className="flex items-center min-w-[180px] flex-1">
        {image && (
          <img 
            src={image} 
            alt={name} 
            className="w-8 h-8 rounded-full mr-3 border border-gray-600 group-hover:border-blue-400 transition-colors" 
          />
        )}
        <div className="flex flex-col">
          <span className="font-semibold text-white group-hover:text-blue-300 transition-colors">
            {name}
          </span>
          <span className="text-gray-400 uppercase text-xs">
            {symbol}
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="w-28 text-right font-medium">
        {formatCurrency(current_price)}
      </div>

      {/* Changes */}
      <div className="w-20">
        <PercentageChange value={price_change_percentage_1h_in_currency} />
      </div>
      <div className="w-20">
        <PercentageChange value={price_change_percentage_24h_in_currency} />
      </div>
      <div className="w-20">
        <PercentageChange value={price_change_percentage_7d_in_currency} />
      </div>

      {/* Market Data */}
      <div className="w-32 text-right text-sm text-gray-300">
        {formatLargeNumber(market_cap)}
      </div>
      <div className="w-32 text-right text-sm text-gray-300">
        {formatLargeNumber(total_volume)}
      </div>
      <div className="w-36 text-right text-sm text-gray-300">
        <div className="flex items-center justify-end">
          <span>
            {circulating_supply.toLocaleString()} {symbol}
          </span>
          <FiInfo className="ml-1 text-gray-500" size={12} />
        </div>
      </div>
    </div>
  );
};

export default CoinCard;