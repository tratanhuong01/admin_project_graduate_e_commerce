import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as productsAction from "../../../../../../actions/products/index";

function ChooseFeatureProduct(props) {
  //
  const dispatch = useDispatch();
  const { products, name } = props;
  useEffect(() => {}, [products]);
  //
  return (
    products.features && (
      <div className="w-1/2 p-2.5 border border-solid border-gray-200">
        <div
          className="w-full overflow-y-auto scrollbar-css flex flex-wrap"
          style={{ maxHeight: 500 }}
        >
          {products.features.choose.map((item, index) => {
            return (
              <div
                onClick={() => {
                  dispatch(
                    productsAction.removeFeaturesProductRequest({
                      ...products.features,
                      item,
                    })
                  );
                }}
                className="w-auto bg-blue-200 text-blue-600 px-2 py-1 m-1 rounded-full relative pr-8 
                text-sm font-semibold cursor-pointer"
                key={index}
              >
                {item[name]}
                <span className="bx bx-x text-xl ml-2 absolute top-1.5 right-1.5"></span>
              </div>
            );
          })}
        </div>
      </div>
    )
  );
}

export default ChooseFeatureProduct;
