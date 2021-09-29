import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../../../../InputField/InputField";
import * as productsAction from "../../../../../actions/products/index";
import DateInfoSimple from "../../../ModalProduct/ModalProductRight/InfoSimple/DateInfoSimple/DateInfoSimple";
function ContentMainProductEdit(props) {
  //
  const { register, errors, handleSubmit, onSubmit, setValue } = props;
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    //
    if (products.infoMainEdit) {
      setValue("priceInput", products.infoMainEdit.priceInput);
      setValue("priceOutput", products.infoMainEdit.priceOutput);
      setValue("sale", products.infoMainEdit.sale);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);
  //
  return (
    products.infoMainEdit && (
      <form onSubmit={handleSubmit(onSubmit)} className="w-full relative">
        <div className="w-full flex px-3">
          <div className="w-1/2">
            <div className="font-semibold text-xm my-3">
              {products.infoMainEdit.nameProduct}
            </div>
            <img
              src={products.infoMainEdit.image.src}
              alt=""
              className="w-3/4 object-contain h-72 mx-auto"
            />
          </div>
          <div className="w-1/2">
            <div className="w-full flex">
              <div className="w-1/2 pr-5">
                <InputField
                  register={register}
                  className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
                  showError={errors["id"]}
                  placeHolder={"Nhập giá nhập vào"}
                  name={"priceInput"}
                  label={"Giá nhập vào"}
                  type="text"
                  onChange={(value) =>
                    dispatch(
                      productsAction.loadInfoMainPriceAmountSale(value, 0)
                    )
                  }
                  disabled={false}
                />
              </div>
              <div className="w-1/2">
                <InputField
                  register={register}
                  className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
                  showError={errors["id"]}
                  placeHolder={"Nhập giá bán ra"}
                  name={"priceOutput"}
                  label={"Giá nhập ra"}
                  type="text"
                  onChange={(value) =>
                    dispatch(
                      productsAction.loadInfoMainPriceAmountSale(value, 1)
                    )
                  }
                  disabled={false}
                />
              </div>
            </div>
            <div className="w-full flex">
              <div className="w-1/2 pr-5">
                <InputField
                  register={register}
                  className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
                  showError={errors["amountInput"]}
                  placeHolder={"Số lượng bán ra"}
                  name={"amountInput"}
                  label={"Số lượng nhập vào"}
                  type="number"
                  onChange={(value) =>
                    dispatch(
                      productsAction.loadInfoMainPriceAmountSale(value, 2)
                    )
                  }
                  disabled={false}
                />
              </div>
              <div className="w-1/2 ">
                <InputField
                  register={register}
                  className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
                  showError={errors["id"]}
                  placeHolder={"Nhập khuyến mãi mặc định"}
                  name={"sale"}
                  label={"Khuyến mãi"}
                  type="number"
                  onChange={(value) =>
                    dispatch(
                      productsAction.loadInfoMainPriceAmountSale(value, 3)
                    )
                  }
                  disabled={false}
                />
              </div>
            </div>
            <DateInfoSimple register={register} errors={errors} />
            <InputField
              register={register}
              className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
              showError={errors["id"]}
              placeHolder={"Nhập phần trăm đang khuyến mãi "}
              name={"sale"}
              label={"Khuyến mãi"}
              type="number"
              onChange={(value) =>
                dispatch(productsAction.loadInfoMainPriceAmountSale(value, 3))
              }
              disabled={false}
            />
          </div>
        </div>
      </form>
    )
  );
}

export default ContentMainProductEdit;
