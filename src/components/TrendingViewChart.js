import React, { useEffect } from "react";
import '../styles/TrendingViewChart.css'
import img1 from "../img/showimg.jpg";

const TradingViewChart = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        symbol: "BTCUSD",
        theme: "light",
        container_id: "tradingview-chart",
        autosize: true,
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="Box">
      <div className="box1" id="tradingview-chart" style={{ height: "400px" }} />
      <div className="box2">
        <h1>Get started with KoinX for free</h1>
        <p>with our range of features  that you can equip for free, KoinX allow you to be more educated and aware of your tax reports </p>
        <img  src={img1} alt="Not found" />
        <button>Get Started for free</button>
      </div>
    </div>
  );
};

export default TradingViewChart;
