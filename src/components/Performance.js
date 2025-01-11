import React from "react";
import "../styles/Performance.css";

const Performance = ({ data }) => {
  return (
    <div className="performance">
      <h2>Performance</h2>
      <div className="stats">
        <div>
          <p>Today's Low</p>
          <span>{data.low}</span>
        </div>
        <div>
          <p>Today's High</p>
          <span>{data.high}</span>
        </div>
        <div>
          <p>52W Low</p>
          <span>{data.yearLow}</span>
        </div>
        <div>
          <p>52W High</p>
          <span>{data.yearHigh}</span>
        </div>
      </div>
    </div>
  );
};


export default Performance;
