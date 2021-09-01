import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import api from "../../../../../../Utils/api";
import * as productsAction from "../../../../../../actions/products/index";
function OptionFeatureProduct(props) {
  //
  const dispatch = useDispatch();
  const { name, table, products } = props;
  const [value, setValue] = useState("");
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await api(
        `${table}/${products.infoSimple.groupProduct.slugGroupProduct}`,
        "GET",
        null
      );
      if (unmounted) return;
      dispatch(
        productsAction.loadFeaturesProduct({
          choose: [],
          listCurrent: result.data,
          list: result.data,
        })
      );
    }
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {}, [products]);
  //
  return (
    <div className="w-1/2 p-2.5 border border-solid border-gray-200">
      <input
        type="text"
        className="w-full p-2.5 rounded-lg border border-solid border-gray-200"
        placeholder="Nhập nội dung..."
        onChange={(event) => {
          setValue(event.target.value);
          const result = products.features.list.filter(
            (item) =>
              item[name]
                .toLowerCase()
                .indexOf(event.target.value.toLowerCase()) !== -1
          );
          dispatch(productsAction.loadFeaturesProductCurrent(result));
        }}
        value={value}
      />
      <div
        className="w-full overflow-y-auto scrollbar-css"
        id="featuresLeft"
        style={{ maxHeight: 465 }}
      >
        {products.features.listCurrent.map((item, index) => {
          return (
            <div
              onClick={() => {
                setValue("");
                dispatch(
                  productsAction.addFeaturesProductRequest({
                    ...products.features,
                    item,
                  })
                );
              }}
              className="w-full p-2.5 hover:bg-gray-200 font-semibold cursor-pointer"
              key={index}
            >
              {item[name]}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OptionFeatureProduct;
