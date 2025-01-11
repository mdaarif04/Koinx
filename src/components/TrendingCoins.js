import React from "react";
import "../styles/TrendingCoins.css";

const TrendingCoins = ({ coins }) => {
  return (
    <div className="trending-coins">
      <h3>Trending Coins (24h)</h3>
      <ul>
        {coins.map((coin, index) => (
          <li key={index}>
            <img src={coin.image} alt={coin.name} />
            <p>{coin.name}</p>
            <span>{coin.priceChange}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingCoins;
