import React, { useEffect, useState } from "react";
import SelectCustom from "../../../SelectCustom/SelectCustom";
import * as productsApi from "../../../../api/productsApi";
import { useDispatch } from "react-redux";
import * as productsAction from "../../../../actions/products/index";

function WaitingEnterLineProduct(props) {
  //
  const [lineProducts, setLineProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await productsApi.getLineProductsAll();
      if (unmounted) return;
      setLineProducts(result.data);
    }
    fetch();
    return () => {
      unmounted = true;
    };
    //
  }, []);
  //
  return (
    <div className="w-full text-center" style={{ height: "calc(90vh - 60px)" }}>
      <img
        src="https://freepikpsd.com/media/2019/10/product-image-png-5-Transparent-Images.png"
        alt=""
        className="w-3/5 h-60 object-contain mx-auto my-3"
      />
      <div className="w-3/4 mx-auto">
        <SelectCustom
          list={lineProducts}
          className={
            "w-full rounded-lg p-2.5 border-2 border-solid border-gray-300 mt-2 relative"
          }
          attribute={"nameLineProduct"}
          placeHolder={"Nhập nội dung"}
          label={"Dòng sản phẩm"}
          table={"dòng sản phẩm"}
          setData={(item) =>
            dispatch(productsAction.loadSimpleInfoProductData(item, 6))
          }
        />
      </div>
    </div>
  );
}

export default WaitingEnterLineProduct;
