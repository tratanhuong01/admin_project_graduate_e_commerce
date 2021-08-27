import React from "react";
import CloseModal from "../../CloseModal/CloseModal";
import ModalProductLeft from "./ModalProductLeft/ModalProductLeft";
import ModalProductRight from "./ModalProductRight/ModalProductRight";

function ModalProduct(props) {
  //
  //
  return (
    <div
      className={`w-3/4 rounded-lg p-1 absolute top-1/2 left-1/2 transform -translate-y-1/2 
      -translate-x-1/2 bg-white animate__animated animate__fadeIn`}
    >
      <div className="w-full relative">
        <div className="w-full sticky top-0 p-3 text-center text-2xl font-semibold">
          Thêm sản phẩm
          <CloseModal />
        </div>
        <div className="w-full overflow-y-auto scrollbar-css flex bg-white overflow-x-hidden">
          <ModalProductLeft />
          <ModalProductRight />
        </div>
      </div>
    </div>
  );
}

export default ModalProduct;