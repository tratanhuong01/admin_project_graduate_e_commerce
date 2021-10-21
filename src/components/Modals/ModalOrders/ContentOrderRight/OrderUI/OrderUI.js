import React from "react";
import logo from "../../../../../assets/images/logo.png";
function OrderUI(props) {
  //
  const { order } = props;
  //
  return (
    <div
      className="w-full items-start flex flex-1 overflow-y-auto scrollbar-css relative orders__modal"
      style={{ fontFamily: "monospace !important" }}
    >
      <div className="w-full mx-auto border-2 border-solid border-gray-100 p-3 text-organce">
        <div className="w-full flex justify-between">
          <div className="w-1/2">
            <img
              src={logo}
              alt=""
              className="flex w-40 object-cover m-2 ml-6 mb-0"
            />
            <p className="text-gray-500 text-xs text-organce font-normal">
              Đẳng cấp tạo nên thương hiệu
            </p>
          </div>
          <div className="w-1/2 text-center py-5 font-semibold text-organce text-sm">
            <span>Địa chỉ : </span> Tổ 1 T.Đồng Dương , X.Bình Đình Bắc , <br />
            H.Thăng Bình , T.Quảng Nam
          </div>
        </div>
        <p className="text-center font-semibold text-3xl my-4 text-organce">
          HÓA ĐƠN BÁN HÀNG
        </p>
        <div className="my-3 text-gray-700 text-organce">
          <span className=" text-gray-700 text-sm">
            Tên khách hàng : {order.bill.fullName}
          </span>
          <br />
          <span className=" text-gray-700 text-sm">
            Số điện thoại : {order.bill.phone}
          </span>
          <br />
          <span className=" text-gray-700 text-sm">
            Địa chỉ : {order.bill.address}
          </span>
          <br />
          <div className="w-full text-sm my-2  text-gray-700">
            <table id="table__orders">
              <tbody>
                <tr className="p-2">
                  <th>STT</th>
                  <th>Tên sản phẩm</th>
                  <th>SL</th>
                  <th>Đơn giá</th>
                  <th>Thành tiền</th>
                </tr>
                {order.billDetailList.map((item, index) => {
                  return (
                    <tr key={index} className="p-2">
                      <td>{index + 1}</td>
                      <td>
                        <div
                          className="text-sm whitespace-normal"
                          style={{ width: "270px", maxWidth: "270px" }}
                        >
                          {item.productFull.nameLineProduct}
                        </div>
                      </td>
                      <td>{item.billDetail.amount}</td>
                      <td>
                        {new Intl.NumberFormat().format(item.billDetail.price)}
                        <u>đ</u>
                      </td>
                      <td>
                        {new Intl.NumberFormat().format(
                          item.billDetail.price * item.billDetail.amount
                        )}
                        <u>đ</u>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div
            className="text-right py-2 border-b border-solid border-gray-300 flex items-center 
          justify-end my-1"
          >
            Tổng tiền : {new Intl.NumberFormat().format(order.bill.total)}
            <u>đ</u> (bao gồm phí)
          </div>
          <span className="font-semibold text-gray-700">
            Ghi chú : {order.bill.note}
          </span>
          <br />
          <div className="w-full flex justify-between">
            <div className="w-7/12"></div>
            <div className="w-7/12 flex flex-col text-center justify-end font-normal py-3">
              <p className="mb-1 text-sm">Ngày 27 tháng 09 năm 2021</p>
              <p className="mb-1 texxt">NGƯỜI BÁN HÀNG</p>
              <p className="mb-1 text-sm">Kí và ghi rõ họ tên</p>
              <div className="h-28"></div>
            </div>
          </div>
          <div className="w-full my-1 text-xs text-organce text-center font-semibold">
            Cảm ơn bạn đã mua hàng tại HSmart
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderUI;
