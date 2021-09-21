import React from "react";
import { Bar } from "react-chartjs-2";

function ChartProductSold(props) {
  return (
    <div className="w-full lg:w-1/2 px-4 my-4 xl:my-0">
      <Bar
        data={{
          labels: [
            "Tháng 5/2021",
            "Tháng 6/2021",
            "Tháng 7/2021",
            "Tháng 8/2021",
            "Tháng 9/2021",
          ],
          datasets: [
            {
              label: "Sản phẩm bán ra",
              backgroundColor: [
                "#3e95cd",
                "#8e5ea2",
                "#3cba9f",
                "#e8c3b9",
                "#c45850",
              ],
              data: [500, 1000, 5000, 2000, 8000],
            },
          ],
        }}
        options={{
          legend: { display: true },
          title: {
            display: true,
            text: "Predicted world population (millions) in 2050",
          },
        }}
      />
    </div>
  );
}

export default ChartProductSold;
