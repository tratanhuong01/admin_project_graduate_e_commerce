import React, { useEffect } from "react";
import MainInfoProduct from "./MainInfoProduct/MainInfoProduct";
import { useDispatch, useSelector } from "react-redux";
import WaitingEnterLineProduct from "./WaitingEnterLineProduct/WaitingEnterLineProduct";
import * as productsAction from "../../../actions/products/index";
import MainInfoProductEdit from "./MainInfoProductEdit/MainInfoProductEdit";
import ModalWrapper from "../ModalWrapper";

function ModalProductMain(props) {
  //
  const { data } = props;
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    //
    if (data) dispatch(productsAction.loadInfoEditProductInfoRequest(data.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <ModalWrapper
      className={`w-3/5 rounded-lg absolute top-1/2 left-1/2 transform -translate-y-1/2 
      -translate-x-1/2 bg-white animate__animated animate__fadeIn`}
      style={{ maxHeight: "90vh" }}
      title={`${data ? "Sửa" : "Thêm"} sản phẩm`}
      addEvent={() => dispatch(productsAction.resetDataProductState())}
    >
      {products.infoMain.lineProduct ? (
        <MainInfoProduct />
      ) : data ? (
        <MainInfoProductEdit data={data} />
      ) : (
        <WaitingEnterLineProduct />
      )}
    </ModalWrapper>
  );
}

export default ModalProductMain;
