import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../../../../InputField/InputField";
import * as productsAction from "../../../../../actions/products/index";
import DateInfoSimple from "../../../ModalProduct/ModalProductRight/InfoSimple/DateInfoSimple/DateInfoSimple";
import * as StringUtils from "../../../../../Utils/StringUtils";
function ContentMainProductEdit(props) {
  //
  const { register, errors, handleSubmit, onSubmit, setValue } = props;
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    //
    if (products.infoMainEdit) {
      setValue(
        "priceInput",
        new Intl.NumberFormat().format(products.infoMainEdit.priceInput) + " đ"
      );
      setValue("priceOutput", products.infoMainEdit.priceOutput);
      setValue("saleDefault", products.infoMainEdit.saleDefault);
      setValue("sale", products.infoMainEdit.sale);
      setValue(
        "timeStartSale",
        StringUtils.formatDateTimeBack(
          products.infoMainEdit.data.infoProduct.timeStartSale
        )
      );
      setValue(
        "timeEndSale",
        StringUtils.formatDateTimeBack(
          products.infoMainEdit.data.infoProduct.timeEndSale
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products.infoMainEdit]);
  //
  return products.infoMainEdit ? (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full relative mb-4">
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
                showError={errors["priceInput"]}
                placeHolder={"Nhập giá nhập"}
                name={"priceInput"}
                label={"Giá nhập"}
                type="text"
                onChange={(value) => ""}
                disabled={true}
              />
            </div>
            <div className="w-1/2">
              <InputField
                register={register}
                className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
                showError={errors["priceOutput"]}
                placeHolder={"Nhập giá bán"}
                name={"priceOutput"}
                label={"Giá bán"}
                type="text"
                onChange={(value) =>
                  dispatch(productsAction.updateInfoMainEdit(value, 0))
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
                placeHolder={"Số lượng nhập"}
                name={"amountInput"}
                label={"Số lượng nhập"}
                type="number"
                onChange={(value) =>
                  dispatch(productsAction.updateInfoMainEdit(value, 1))
                }
                disabled={false}
              />
            </div>
            <div className="w-1/2 ">
              <InputField
                register={register}
                className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
                showError={errors["saleDefault"]}
                placeHolder={"Nhập khuyến mãi mặc định"}
                name={"saleDefault"}
                label={"Khuyến mãi mặc định"}
                type="number"
                onChange={(value) =>
                  dispatch(productsAction.updateInfoMainEdit(value, 6))
                }
                disabled={false}
              />
            </div>
          </div>
          <DateInfoSimple
            register={register}
            errors={errors}
            edit={true}
            setValue={setValue}
          />
          <div className="w-full flex">
            <div className="w-1/2">
              <InputField
                register={register}
                className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
                showError={errors["sale"]}
                placeHolder={"Nhập phần trăm đang khuyến mãi "}
                name={"sale"}
                label={"Khuyến mãi"}
                type="number"
                onChange={(value) =>
                  dispatch(productsAction.updateInfoMainEdit(value, 5))
                }
                disabled={false}
              />
            </div>
            <div className="w-1/2 flex justify-end items-center pt-8">
              <button className="px-4 py-3 bg-organce rounded-lg text-white font-semibold">
                Cập nhật
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  ) : (
    ""
  );
}

export default ContentMainProductEdit;
