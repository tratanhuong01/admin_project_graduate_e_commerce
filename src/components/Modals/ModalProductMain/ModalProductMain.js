import React, { useEffect } from "react";
import CloseModal from "../../CloseModal/CloseModal";
import MainInfoProduct from "./MainInfoProduct/MainInfoProduct";
import { useDispatch, useSelector } from "react-redux";
import WaitingEnterLineProduct from "./WaitingEnterLineProduct/WaitingEnterLineProduct";
import * as productsAction from "../../../actions/products/index";
import MainInfoProductEdit from "./MainInfoProductEdit/MainInfoProductEdit";

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
    <div
      className={`w-3/5 rounded-lg p-1 absolute top-1/2 left-1/2 transform -translate-y-1/2 
    -translate-x-1/2 bg-white animate__animated animate__fadeIn`}
      style={{ maxHeight: "90vh" }}
    >
      <div className="w-full relative">
        <div className="w-full sticky top-0 p-3 text-center text-2xl font-semibold">
          Thêm sản phẩm
          <CloseModal
            addEvent={() => dispatch(productsAction.resetDataProductState())}
          />
        </div>

        {products.infoMain.lineProduct ? (
          <MainInfoProduct />
        ) : data ? (
          <MainInfoProductEdit data={data} />
        ) : (
          <WaitingEnterLineProduct />
        )}
      </div>
    </div>
  );
}

export default ModalProductMain;
