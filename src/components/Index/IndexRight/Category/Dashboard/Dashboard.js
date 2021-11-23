import React from "react";
import NewBestDashboard from "./NewBestDashboard/NewBestDashboard";
import ChartData from "./Chart/ChartData";
import feature from "../../../../../screens/OrderScreen/feature";
import ContentColor from "../../General/RowTable/ContentColor/ContentColor";
import MainInfoTopDashboard from "./MainInfoTopDashboard/MainInfoTopDashboard";
function Dashboard(props) {
  //

  //
  return (
    <div
      className="w-full p-5 bg-gray-100 overflow-y-auto scrollbar-css"
      style={{ height: "calc(100vh - 76px)", maxHeight: "calc(100vh - 76px)" }}
    >
      <MainInfoTopDashboard />
      <div className="w-full flex my-4 -ml-3 xl:flex-row flex-col">
        <ChartData
          url="getProductSixMonthCurrent"
          nameChart="Biểu đồ sản phẩm trong 6 tháng gần đây"
          label="Tổng sản phẩm trong tháng"
        />
        <ChartData
          url="getBillSixMonthCurrent"
          nameChart="Biểu đồ hóa đơn trong 6 tháng gần đây"
          label="Tổng hóa đơn trong tháng"
        />
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
          content={(bill) => `#${bill.id}`}
          specification={"status"}
          Component={({ status }) => (
            <ContentColor
              onClick={() => ""}
              condition={feature.condition.status}
              typeData={status}
            />
          )}
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
