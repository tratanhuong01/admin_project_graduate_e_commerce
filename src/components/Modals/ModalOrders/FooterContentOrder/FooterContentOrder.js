import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../../Utils/api";
import * as categorysAction from "../../../../actions/category/index";
import {
  CLOSE_MODAL,
  SET_LOADING_MODAL,
} from "../../../../constants/ActionTypes";
import updateBillByStatus from "./updateBillByStatus";
import html2canvas from "html2canvas";
import sendMailByStatus from "./sendMailByStatus";
const typeBill = [
  {
    id: 0,
    bgColor: "bg-red-600",
    text: "Từ chối",
    type: -2,
    show: 0,
  },
  {
    id: 1,
    bgColor: "bg-purple-600",
    text: "Duyệt đơn hàng",
    type: 1,
    show: 0,
  },
  {
    id: 2,
    bgColor: "bg-yellow-600",
    text: "Đã gửi hàng",
    type: 2,
    show: 1,
  },
  {
    id: 3,
    bgColor: "bg-green-600",
    text: "Thành công",
    type: 3,
    show: 2,
  },
  {
    id: 4,
    bgColor: "bg-red-600",
    text: "Không thành công",
    type: 4,
    show: 2,
  },
];

function FooterContentOrder({ order }) {
  //
  const [choose, setChoose] = useState(null);
  const [show, setShow] = useState(false);
  const [data, setData] = useState("");
  const { headers, category, filters, socket } = useSelector((state) => {
    return {
      headers: state.headers,
      category: state.category,
      filters: state.filters,
      socket: state.socket,
    };
  });
  const dispatch = useDispatch();
  const update = async () => {
    dispatch({ type: SET_LOADING_MODAL, loading: true });
    await api(
      `bills/update/status/?idBill=${order.bill.id}&status=${choose.type}`,
      "GET",
      null,
      headers
    );
    if (order.bill.billUser) {
      await updateBillByStatus({
        status: choose.type,
        headers,
        user: order.bill.billUser,
        reason: data,
      });
      if (order.bill.billUser.isRegister === 0) {
        await sendMailByStatus({
          email: order.bill.email,
          status: order.bill.status,
          idOrder: order.bill.id,
          reason: "",
          headers: headers,
        });
      } else {
        socket.emit("notifyUser", order.bill.billUser.id);
      }
    }
    dispatch(
      categorysAction.loadListCategoryConnectRequest(
        `billFilters`,
        {
          full: `?`,
          limit: `?limit=${10}&offset=${category.index}`,
        },
        true,
        {
          filters: filters.choose,
          sorter: filters.sorter,
          search: filters.search,
        },
        headers
      )
    );
    dispatch({ type: SET_LOADING_MODAL, loading: true });
    dispatch({ type: CLOSE_MODAL });
  };
  //
  return (
    <div className="w-full flex px-3 py-1 text-white relative">
      <div className="flex justify-between">
        {typeBill.map((item, index) => {
          return (
            item.show === order.bill.status && (
              <button
                onClick={() => {
                  if (item.type === -2 || item.type === 4) setShow(true);
                  else setShow(false);
                  if (choose) {
                    if (choose.id === item.id) {
                      setChoose(null);
                    } else {
                      setChoose(item);
                    }
                  } else {
                    setChoose(item);
                  }
                }}
                key={index}
                className={`py-3 px-5 rounded-full font-semibold text-sm ${
                  item.bgColor
                } m-1 border-solid border-4 border-white 
                ${choose && choose.id === item.id && "border-gray-800"}`}
              >
                {item.text}
              </button>
            )
          );
        })}
        {show && (
          <input
            type="text"
            className="p-2 ml-8 w-80 rounded-full border-2 border-solid border-gray-300 
          focus:border-blue-500"
            value={data}
            onChange={(event) => setData(event.target.value)}
            placeholder="Nhập lý do....."
          />
        )}
      </div>
      <div className="absolute flex justify-end right-3">
        <a
          href={() => false}
          download="bill.png"
          className="hidden"
          id="click__download"
        >
          a
        </a>
        {order.bill.status !== -3 && (
          <button
            onClick={() => {
              let clone = document.getElementById("order__main__ui");
              clone.style.width = clone.offsetWidth + "px";
              clone.style.height = clone.offsetHeight + "px";
              clone.style.maxHeight = clone.offsetHeight + "px";
              html2canvas(clone).then(function (canvas) {
                var image = canvas
                  .toDataURL("image/png")
                  .replace("image/png", "image/octet-stream"); // here is the most important part because if you dont replace you will get a DOM 18 exception.
                document.getElementById("click__download").href = image;
                document.getElementById("click__download").click();
              });
            }}
            className="px-5 py-3 mr-5 rounded-sm bg-gray-700 text-white font-semibold"
          >
            In hóa đơn
          </button>
        )}
        {order.bill.status !== -1 &&
          order.bill.status !== -2 &&
          order.bill.status !== 3 &&
          order.bill.status !== 4 &&
          order.bill.status !== -3 && (
            <button
              onClick={update}
              className="px-5 py-3 rounded-sm bg-organce text-white font-semibold"
            >
              Xử lí
            </button>
          )}
      </div>
    </div>
  );
}

export default FooterContentOrder;
