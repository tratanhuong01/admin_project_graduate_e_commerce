import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import api from "../../../../../../Utils/api";

function ChartData({ url, nameChart, label }) {
  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);
  const headers = useSelector((state) => state.headers);
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      let month = [];
      let data = [];
      const result = await api(url, "GET", null, headers);
      if (unmounted) return;
      if (result.data)
        result.data.forEach((element) => {
          month.push(element.month);
          data.push(element.number);
        });
      setLabels(month);
      setData(data);
    }
    fetch();
    return () => {
      unmounted = true;
    };
    //
  }, []);
  return (
    <div className="w-full lg:w-1/2 px-4">
      <Bar
        data={{
          labels: labels,
          datasets: [
            {
              label: label,
              backgroundColor: [
                "#3e95cd",
                "#8e5ea2",
                "#456676",
                "#323331",
                "#c45850",
                "#456223",
              ],
              data: data,
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
      <p className="my-3 text-gray-800 font-semibold text-center">
        {nameChart}
      </p>
    </div>
  );
}

export default ChartData;
