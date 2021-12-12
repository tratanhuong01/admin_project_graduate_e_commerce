import React from "react";
import NewBestDashboard from "./NewBestDashboard/NewBestDashboard";
import ChartData from "./Chart/ChartData";
import feature from "../../../../../screens/OrderScreen/feature";
import ContentColor from "../../General/RowTable/ContentColor/ContentColor";
import MainInfoTopDashboard from "./MainInfoTopDashboard/MainInfoTopDashboard";
import { useHistory } from "react-router-dom";
import * as Config from "../../../../../constants/Config";

function Dashboard(props) {
  //
  const history = useHistory();
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
          handleClick={() => {
            history.push(Config.USER)
          }}
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
          handleClick={() => {
            history.push(Config.BILL)
          }}
        />
        <NewBestDashboard
          label={"Người dùng liên hệ gần đây"}
          type={2}
          attribute={() => "https://res.cloudinary.com/huongdev2k1/image/upload/v1638405409/E-Commerce/Config/1024px-User-avatar.svg_pcpwlt.png"}
          content={(contact) => contact.fullName + `(${contact.content.substring(0, 20)}...)`}
          handleClick={() => {
            history.push(Config.CONTACT_SCREEN)
          }}
        />
      </div>
    </div>
  );
}

export default Dashboard;
