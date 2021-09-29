import React, { useEffect } from "react";
import CloseModal from "../../CloseModal/CloseModal";
import ModalProductLeft from "./ModalProductLeft/ModalProductLeft";
import ModalProductRight from "./ModalProductRight/ModalProductRight";
import * as productsAction from "../../../actions/products/index";
import { useDispatch } from "react-redux";
function ModalProduct(props) {
  //
  const { data } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    //
    if (data) dispatch(productsAction.loadInfoEditLineProductRequest(data.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <div
      className={`w-3/4 rounded-lg p-1 absolute top-1/2 left-1/2 transform -translate-y-1/2 
      -translate-x-1/2 bg-white animate__animated animate__fadeIn`}
    >
      <div className="w-full relative">
        <div className="w-full sticky top-0 p-3 text-center text-2xl font-semibold">
          {data ? "Sửa" : "Thêm"} sản phẩm
          <CloseModal
            addEvent={() => dispatch(productsAction.resetDataProductState())}
          />
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
