import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_MODAL, SET_LOADING_MODAL } from "../../../constants/ActionTypes";
import api from "../../../Utils/api";
import ModalWrapper from "../ModalWrapper";
import * as categorysAction from "../../../actions/category/index";
function ModalContact({ data }) {
  //
  const { category, headers, filters } = useSelector((state) => {
    return {
      category: state.category,
      headers: state.headers,
      filters: state.filters,
    };
  });
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const replaceContact = async () => {
    dispatch({ type: SET_LOADING_MODAL, loading: true });
    await api(
      "sendMailContacts",
      "POST",
      {
        email: data.email,
        topic: "Reply contact from user . Thank you contact with us",
        content,
      },
      Object.assign(headers, { "Content-Type": "application/json" })
    );
    let clone = { ...data };
    clone.status = 1;
    await api(
      "contacts",
      "PUT",
      clone,
      Object.assign(headers, { "Content-Type": "application/json" })
    );
    dispatch(
      categorysAction.loadListCategoryConnectRequest(
        "contactFilters",
        {
          full: `?contactType=0`,
          limit: `?contactType=0&limit=${10}&offset=${category.index}`,
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
    dispatch({ type: SET_LOADING_MODAL, loading: false });
    dispatch({ type: CLOSE_MODAL });
  };
  //
  return (
    <ModalWrapper
      className={`w-1/2 rounded-lg absolute top-1/2 left-1/2 transform -translate-y-1/2 
        -translate-x-1/2 bg-white animate__animated animate__fadeIn`}
      style={{ maxHeight: "85vh" }}
      title={`Phản hồi liên hệ`}
      addEvent={() => ""}
    >
      <div className="w-full flex h-full p-3 border-r-2 border-solid border-gray-300">
        <div className="w-1/2 mr-5">
          <p className="my-3 font-semibold items-center flex">
            Họ tên :
            <span className=" px-3 py-1 rounded-full text-sm  bg-yellow-700 text-white ml-4">
              {data.fullName}
            </span>
          </p>
          <p className="my-3 font-semibold items-center flex">
            Email :
            <span className=" px-3 py-1 rounded-full text-sm  bg-green-700 text-white ml-4">
              {data.email}
            </span>
          </p>
          <p className="my-3 font-semibold items-center flex">
            Số điện thoại :
            <span className=" px-3 py-1 rounded-full text-sm  bg-red-500 text-white ml-4">
              {data.phone}
            </span>
          </p>
          <p className="my-3 font-semibold items-center flex">
            Tình trạng :
            <span
              className={`px-3 py-1 rounded-full text-sm ${
                data.status === 0 ? "bg-red-500 " : "bg-green-700 "
              } text-white ml-4`}
            >
              {data.status === 0 ? "Chưa phản hồi" : "Đã phản hồi"}
            </span>
          </p>
          <p className="font-semibold">Nội dung</p>
          <div
            className="w-full flex text-white max-h-56 h-56 bg-gray-700 rounded-lg overflow-y-auto my-2 
          font-semibold p-3"
          >
            {data.content}
          </div>
        </div>
        <div className="w-1/2">
          <textarea
            name=""
            onChange={(event) => setContent(event.target.value)}
            placeholder="Nội dung phản hồi"
            defaultValue={content}
            className="w-full resize-none rounded-lg p-3 flex max-h-56 overflow-y-auto my-2 h-56 border-2 border-solid border-gray-300"
          ></textarea>
          <div className="w-full flex justify-center my-3">
            <button
              onClick={() => replaceContact()}
              className="text-center p-2.5 bg-organce rounded-lg text-white font-semibold"
            >
              Gửi mail
            </button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}

export default ModalContact;
