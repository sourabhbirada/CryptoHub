import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useCoinview from "../utits/useCoinview";


const Coinview = () => {
  const { coinid } = useParams();  

  const coinData = useCoinview(coinid);


  if (!coinData) {
    return <div className="text-center text-xl text-gray-600">Coin not found</div>;
  }

  
  const {
    id,
    name,
    symbol,
    description,
    image,
    market_data,
    genesis_date,
    links,
    community_data,
    watchlist_portfolio_users
  } = coinData;

  console.log(genesis_date);
  const link = links.blockchain_site;
  const chaturl = links.chat_url;
  console.log(link);
  
  
  return (
    <>
  <div className="flex flex-row">
    <div className="m-10 flex flex-col gap-4">
      <img
        src={image.large}
        alt={name}
        className="w-24 h-24 mr-6 ml-12 rounded-full"
      />
      <div>
        <h1 className="text-3xl font-semibold text-gray-800">{name} ({symbol.toUpperCase()})</h1>
        <p className="text-lg text-gray-600">ID: {id}</p>
      </div>
      <div className="mt-4 flex flex-col gap-1 text-left w-full max-w-lg">
        <h3 className="font-semibold text-gray-800 ml-8">Market Data</h3>
        <p><strong className="font-medium">Market Cap:</strong> ${market_data.market_cap.usd}</p>
        <p><strong className="font-medium">24h Trading Volume:</strong> ${market_data.total_volume.usd}</p>
        <p><strong className="font-medium">24h Price Change:</strong> {market_data.price_change_percentage_24h}%</p>
        <p><strong className="font-medium">High (24h):</strong> ${market_data.high_24h.usd}</p>
        <p><strong className="font-medium">Low (24h):</strong> ${market_data.low_24h.usd}</p>
      </div>
    </div>
    
    <div className="flex  flex-col mt-8 ml-6 gap-8">
      <p className="text-4xl font-bold text-green-600">
        Current Price: ${market_data.current_price.usd}
      </p>
      <div className="w-[850px] h-72 border-emerald-500 bg-red-300">
      </div>
      <div>
        <p>{description.en}</p>
      </div>
      <div>
        <h2>Followers</h2>
      <p>
        {community_data.telegram_channel_user_count}
      </p>
      <p>{community_data.twitter_followers} twitter</p>
      <p>{watchlist_portfolio_users}Portfolio</p>
    </div>
      <div>
        <h3>BlockChain Site</h3>
        {link.map((link , index)=> {
          return (
            <p key={index}>{link}</p>
          )
        })}
      </div>
      <div>
        <h3>Chat URL</h3>
        {chaturl.map((link , index)=> {
          return (
            <p key={index}>{link}</p>
          )
        })}
      </div>
      <div>
        <h3>Home Page</h3>
        {links.homepage.map((link , index)=> {
          return (
            <p key={index}>{link}</p>
          )
        })}
      </div>
      <div>
        <h3>GitHub</h3>
        {links.repos_url.github.map((link , index)=> {
          return (
            <p key={index}>{link}</p>
          )
        })}
      </div>
      <div>
        <p>{links.subreddit_url}</p>
        <p>{links.telegram_channel_identifier}</p>
        <p>{links.twitter_screen_name}</p>
              </div>
    </div>
  </div>
</>
  );
};

export default Coinview;
