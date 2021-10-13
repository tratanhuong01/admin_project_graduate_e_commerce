import React, { useEffect, useState } from "react";
import ItemDashboarEveryDay from "./ItemDashboarEveryDay/ItemDashboarEveryDay";
import * as dashboardApi from "../../../../../api/dashboardApi";
import NewBestDashboard from "./NewBestDashboard/NewBestDashboard";
import ChartProductSold from "./Chart/ChartProductSold/ChartProductSold";
import ChartRevenue from "./Chart/ChartRevenue/ChartRevenue";
import { useSelector } from "react-redux";

function Dashboard(props) {
  //
  const [infos, setInfos] = useState([]);
  const headers = useSelector((state) => state.headers);
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await dashboardApi.getDashboardHeader(headers);
      if (unmounted) return;
      setInfos([
        {
          id: 0,
          icon: "bx bx-user",
          label: "Lượt đăng kí",
          bgColorFrom: "from-yellow-400",
          bgColorTo: "to-yellow-700",
          number: result.data.totalRegister,
        },
        {
          id: 1,
          icon: "bx bx-detail",
          label: "Hóa đơn",
          bgColorFrom: "from-green-400",
          bgColorTo: "to-green-700",
          number: result.data.totalBill,
        },
        {
          id: 2,
          icon: "bx bx-money",
          label: "Doanh thu",
          bgColorFrom: "from-purple-400",
          bgColorTo: "to-purple-700",
          number: result.data.totalRevenue,
        },
        {
          id: 3,
          icon: "bx bxl-shopify",
          label: "Sản phẩm đã bán",
          bgColorFrom: "from-pink-400",
          bgColorTo: "to-pink-600",
          number: result.data.totalSold,
        },
        {
          id: 4,
          icon: "bx bx-money",
          label: "Lợi nhuận",
          bgColorFrom: "from-gray-400",
          bgColorTo: "to-gray-600",
          number: result.data.totalProfit,
        },
      ]);
    }
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const statusBill = (status) => {
    switch (status) {
      case -1:
        return "Đã hủy";
      case 0:
        return "Chưa xác nhận";
      case 1:
        return "Đã xác nhận - Chờ gửi hàng";
      case 2:
        return "Đang giao";
      case 3:
        return "Thành công";
      case 4:
        return "Thất bại";
      default:
        return "...";
    }
  };
  //
  return (
    <div
      className="w-full p-5 bg-gray-100 overflow-y-auto scrollbar-css"
      style={{ height: "685px", maxHeight: "685px" }}
    >
      <p className="text-2xl font-bold pb-3">Tổng quan trong ngày</p>
      <ul className="w-full flex flex-wrap">
        {infos.map((item, index) => {
          return <ItemDashboarEveryDay item={item} key={index} />;
        })}
      </ul>
      <div className="w-full flex my-4 -ml-3 xl:flex-row flex-col">
        <ChartProductSold />
        <ChartRevenue />
      </div>
      <div className="w-full flex py-5 flex-wrap md:flex-col xl:flex-row">
        <NewBestDashboard
          label={"Người dùng đăng kí gần đây"}
          type={0}
          attribute={(user) => user.avatar}
          content={(user) => `${user.firstName} ${user.lastName}`}
        />
        <NewBestDashboard
          label={"Đơn hàng gần đây"}
          type={1}
          attribute={() =>
            "https://image.flaticon.com/icons/png/512/552/552791.png"
          }
          content={(bill) => `#${bill.id} ${statusBill(bill.status)}`}
        />
        <NewBestDashboard
          label={"Người dùng đăng kí gần đây"}
          type={0}
          attribute={(user) => user.avatar}
          content={(user) => `${user.firstName} ${user.lastName}`}
        />
      </div>
    </div>
  );
}

export default Dashboard;
