import React, { useEffect, useState } from "react";
import { fetchBitcoinData } from "../services/api";
import "../styles/BitcoinChart.css";

const BitcoinChart = () => {
  const [bitcoinData, setBitcoinData] = useState(null);

  useEffect(() => {
    fetchBitcoinData().then((data) => setBitcoinData(data));
  }, []);

  if (!bitcoinData) return <p>Loading...</p>;

  return (
    <section className="bitcoin-overview">
      <div className="price">
        <h2>Bitcoin (BTC)</h2>
        <p>${bitcoinData.usd.toLocaleString()}</p>
        <p
          className={bitcoinData.usd_24h_change >= 0 ? "positive" : "negative"}
        >
          {bitcoinData.usd_24h_change.toFixed(2)}%
        </p>
      </div>
      <div className="performance">
        <p>Today's Low: ₹46,000</p>
        <p>Today's High: ₹49,000</p>
      </div>
    </section>
  );
};

export default BitcoinChart;
