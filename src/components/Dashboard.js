import React, { useRef } from "react";
import { Line } from "react-chartjs-2";

function Dashboard({ price, data }) {
  const opts = {
    legend: {
      display: true,
      position: "top",
      labels: {
        boxWidth: 80,
        fontColor: "black"
      }
    },
    tooltips: {
      intersect: false,
      mode: "index"
    },
    responsive: true,
    maintainAspectRatio: false
  };
  if (price === "0.00") {
    return <h1 class="tempmsg">Select a Commodity</h1>;
  }
  return (
    <div className="dashboard">
      <h2>{`$${price}`}</h2>

      <div className="chart-container">
        <Line data={data} options={opts} />
      </div>
    </div>
  );
}

export default Dashboard;
