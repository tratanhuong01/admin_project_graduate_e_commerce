import React, { useEffect } from "react";
import ModalProductLeft from "./ModalProductLeft/ModalProductLeft";
import ModalProductRight from "./ModalProductRight/ModalProductRight";
import * as productsAction from "../../../actions/products/index";
import { useDispatch } from "react-redux";
import ModalWrapper from "../ModalWrapper";
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
    <ModalWrapper
      className={`w-3/4 rounded-lg absolute top-1/2 left-1/2 transform -translate-y-1/2 
      -translate-x-1/2 bg-white animate__animated animate__fadeIn`}
      title={`${data ? "Sửa" : "Thêm"} dòng sản phẩm`}
      addEvent={() => dispatch(productsAction.resetDataProductState())}
    >
      <div className="w-full pt-16 px-2">
        <ModalProductLeft />
        <ModalProductRight />
      </div>
    </ModalWrapper>
  );
}
export default ModalProduct;
