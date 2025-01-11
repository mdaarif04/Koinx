import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Performance from "./components/Performance";
import TrendingCoins from "./components/TrendingCoins";
import { fetchBitcoinData, fetchTrendingCoins } from "./services/api";
import "./App.css";
import BitcoinChart from "./components/BitcoinChart";
import TradingViewChart from "./components/TrendingViewChart";
import About from "./components/About";

const App = () => {
  const [bitcoinData, setBitcoinData] = useState({});
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const btcData = await fetchBitcoinData();
      setBitcoinData({
        low: btcData.inr,
        high: btcData.usd,
        yearLow: "N/A",
        yearHigh: "N/A",
      });

      const coins = await fetchTrendingCoins();
      setTrendingCoins(coins);
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <BitcoinChart/>
        <TradingViewChart />
        <Performance data={bitcoinData} />
        <TrendingCoins coins={trendingCoins} />
      </main>
      <About/>
      <Footer />
    </div>
  );
};

export default App;
