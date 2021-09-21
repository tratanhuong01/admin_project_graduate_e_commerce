import React from "react";
import { Line } from "react-chartjs-2";

function ChartRevenue(props) {
  return (
    <div className="w-full lg:w-1/2 px-4">
      <Line
        data={{
          labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
          datasets: [
            {
              data: [0],
              label: "Tháng 5/2021",
              borderColor: "#3e95cd",
              fill: false,
            },
            {
              data: [5267, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
              label: "Tháng 6/2021",
              borderColor: "#8e5ea2",
              fill: false,
            },
            {
              data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
              label: "Tháng 7/2021",
              borderColor: "#3cba9f",
              fill: false,
            },
            {
              data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
              label: "Tháng 8/2021",
              borderColor: "#e8c3b9",
              fill: false,
            },
            {
              data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
              label: "Tháng 9/2021",
              borderColor: "#c45850",
              fill: false,
            },
          ],
        }}
        options={{
          title: {
            display: true,
            text: "World population per region (in millions)",
          },
          legend: {
            display: true,
            position: "bottom",
          },
        }}
      />
    </div>
  );
}

export default ChartRevenue;
