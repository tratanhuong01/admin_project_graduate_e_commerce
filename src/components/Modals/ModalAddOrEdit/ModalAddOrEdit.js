import React from "react";
import CloseModal from "../../../General/CloseModal/CloseModal";

function ModalAddOrEdit(props) {
  return (
    <div
      className="w-2/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 rounded-lg
  -translate-y-1/2 border-2 border-gray-300 border-solid shadow-xl bg-white"
    >
      <div className="w-full relative py-3 border-b-2 border-gray-300 border-solid">
        <p className="font-semibold text-xl py-1 text-center">Thêm nhãn dán</p>
        <CloseModal />
        <div className="w-full p-2">
          <div className="w-11/12 mx-auto">
            <div className="w-full py-2 flex">
              <label className="w-3/12 flex items-center mr-6 font-semibold">
                ID Nhãn Dán :
              </label>
              <input
                type="text"
                placeholder=""
                className="w-9/12 p-2 bg-gray-100 border-solid  border-blue-500 
                border-2 rounded-lg"
              />
            </div>
            <div className="w-full py-2 flex">
              <label className="w-3/12 flex items-center mr-6 font-semibold">
                Nhóm nhãn dán :
              </label>
              <input
                type="text"
                placeholder="Nhập nhóm nhãn dán..."
                className="w-9/12 p-2 bg-gray-100 border-solid  border-blue-500 
              border-2 rounded-lg"
              />
            </div>
            <div className="w-full py-2 flex">
              <label className="w-3/12 flex items-center mr-6 font-semibold">
                Dòng nhãn dán :
              </label>
              <input
                type="text"
                placeholder="Nhập dòng nhãn dán..."
                className="w-9/12 p-2 bg-gray-100 border-solid  border-blue-500 
              border-2 rounded-lg"
              />
            </div>
            <div className="w-full py-2 flex">
              <label className="w-3/12 flex items-center mr-6 font-semibold">
                Hàng :
              </label>
              <input
                type="text"
                placeholder="Nhập hàng..."
                className="w-9/12 p-2 bg-gray-100 border-solid  border-blue-500 
              border-2 rounded-lg"
              />
            </div>
            <div className="w-full py-2 flex">
              <label className="w-3/12 flex items-center mr-6 font-semibold">
                Cột :
              </label>
              <input
                type="text"
                placeholder="Nhập cột..."
                className="w-9/12 p-2 bg-gray-100 border-solid  border-blue-500 
              border-2 rounded-lg"
              />
            </div>
            <div className="w-full py-2 flex">
              <label className="w-3/12 flex items-center mr-6 font-semibold">
                Ảnh :
              </label>
              <div className="flex items-start w-9/12">
                <input type="file" className="w-1/2 pr-5 my-5 hidden" />
                <label
                  forH="File"
                  className="flex items-center py-1.5 px-5 bg-red-500 
                  font-semibold text-white mr-5 rounded-lg my-4"
                >
                  <i
                    className="bx bx-upload mt-0.5 text-2xl mr-3 
                      flex items-center"
                  ></i>
                  <span className="flex items-center">Chọn File....</span>
                </label>
                <div
                  className="w-20 h-20 bg-gray-500 rounded-lg"
                  id="show"
                ></div>
              </div>
            </div>
            <div className="w-full py-2 my-2 h-12">
              <button
                type="button"
                className="px-5 py-2 bg-blue-500 text-white 
              float-right mr-1 rounded-lg"
              >
                Lưu
              </button>
              <button
                type="button"
                className="px-5 py-2 bg-gray-500 text-white 
              float-right mr-1 rounded-lg"
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
        <div
          className="w-full h-full bg-opacity-50 bg-white absolute top-0 left-0 hidden"
          id="cover"
        >
          <div className="w-full h-full relative">
            <i
              className="fas fa-cog fa-spin text-5xl text-gray-700 cursor-pointer
          absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style="top: 40%;"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalAddOrEdit;
