import React from "react";
import ItemDashboarEveryDay from "./ItemDashboarEveryDay/ItemDashboarEveryDay";
import { Bar, Line } from "react-chartjs-2";
import NewUserRegister from "./NewUserRegister/NewUserRegister";
import NewBill from "./NewBill/NewBill";
import ReplyCurrent from "./ReplyCurrent/ReplyCurrent";
function Dashboard(props) {
  //
  const categoryDashboard = [
    {
      id: 0,
      icon: "bx bx-user",
      label: "Lượt đăng kí",
      bgColor: "bg-yellow-500",
    },
    {
      id: 1,
      icon: "bx bx-detail",
      label: "Hóa đơn",
      bgColor: "bg-green-500",
    },
    {
      id: 2,
      icon: "bx bx-money",
      label: "Doanh thu",
      bgColor: "bg-organce",
    },
    {
      id: 3,
      icon: "bx bx-reply",
      label: "Phản hồi",
      bgColor: "bg-pink-500",
    },
  ];
  //
  return (
    <div
      className="w-full p-5 bg-gray-100 overflow-y-auto scrollbar-css"
      style={{ height: "685px", maxHeight: "685px" }}
    >
      <p className="text-2xl font-bold pb-3">Tổng quan trong ngày</p>
      <ul className="w-full flex flex-wrap">
        {categoryDashboard.map((item, index) => {
          return <ItemDashboarEveryDay item={item} key={index} />;
        })}
      </ul>
      <div className="w-full flex my-4 -ml-3 xl:flex-row flex-col">
        <div className="w-full lg:w-1/2 px-4 my-4 xl:my-0">
          <Bar
            data={{
              labels: [
                "Africa",
                "Asia",
                "Europe",
                "Latin America",
                "North America",
              ],
              datasets: [
                {
                  label: "Population (millions)",
                  backgroundColor: [
                    "#3e95cd",
                    "#8e5ea2",
                    "#3cba9f",
                    "#e8c3b9",
                    "#c45850",
                  ],
                  data: [2478, 5267, 734, 784, 433],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: {
                display: true,
                text: "Predicted world population (millions) in 2050",
              },
            }}
          />
        </div>
        <div className="w-full lg:w-1/2 px-4">
          <Line
            data={{
              labels: [
                1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050,
              ],
              datasets: [
                {
                  data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
                  label: "Africa",
                  borderColor: "#3e95cd",
                  fill: false,
                },
                {
                  data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
                  label: "Asia",
                  borderColor: "#8e5ea2",
                  fill: false,
                },
                {
                  data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                  label: "Europe",
                  borderColor: "#3cba9f",
                  fill: false,
                },
                {
                  data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                  label: "Latin America",
                  borderColor: "#e8c3b9",
                  fill: false,
                },
                {
                  data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
                  label: "North America",
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
      </div>
      <div className="w-full flex py-5 flex-wrap md:flex-col xl:flex-row">
        <NewUserRegister />
        <NewBill />
        <ReplyCurrent />
      </div>
    </div>
  );
}

export default Dashboard;
