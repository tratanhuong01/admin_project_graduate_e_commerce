import React from "react";
import { useForm } from "react-hook-form";
import ColorMemoryRamEdit from "./ColorMemoryRamEdit/ColorMemoryRamEdit";
import ContentMainProductEdit from "./ContentMainProductEdit/ContentMainProductEdit";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import api from "../../../../Utils/api";
import * as StringUtils from "../../../../Utils/StringUtils";
function MainInfoProductEdit(props) {
  const schema = Yup.object().shape({});
  const { products, headers } = useSelector((state) => {
    return {
      products: state.products,
      headers: state.headers,
    };
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    shouldUnregister: false,
  });
  const onSubmit = async () => {
    await api(
      `products`,
      "PUT",
      {
        id: products.infoMainEdit.data.product.id,
        productUser: null,
        memoryProduct: products.infoMainEdit.rom.id
          ? products.infoMainEdit.rom
          : null,
        lineProduct: products.infoMainEdit.lineProduct,
        ramProduct: products.infoMainEdit.ram,
        imageProduct: products.infoMainEdit.image,
        isShow: products.infoMainEdit.data.product.isShow,
        slug: products.infoMainEdit.data.product.slug,
      },
      headers
    );
    await api(
      `infoProducts`,
      "PUT",
      {
        id: products.infoMainEdit.data.infoProduct.id,
        infoProduct: products.infoMainEdit.data.product,
        priceInput: products.infoMainEdit.priceInput,
        priceOutput: products.infoMainEdit.priceOutput,
        sale: products.infoMainEdit.sale,
        itemCurrent: products.infoMainEdit.amountInputNew
          ? products.infoMainEdit.amountInput +
            products.infoMainEdit.amountInputNew
          : products.infoMainEdit.amountInput,
        itemSold: products.infoMainEdit.data.infoProduct.itemSold,
        typeInfoProduct: products.infoMainEdit.data.infoProduct.typeInfoProduct,
        review: products.infoMainEdit.data.infoProduct.review,
        timeInput: products.infoMainEdit.data.infoProduct.timeInput,
        amountInput:
          products.infoMainEdit.amountInput === 0
            ? products.infoMainEdit.data.infoProduct.amountInput
            : products.infoMainEdit.data.infoProduct.amountInput +
              products.infoMainEdit.amountInput,
        saleDefault: products.infoMainEdit.saleDefault,
        timeStartSale: StringUtils.formatDateTimeCustom(
          products.infoMainEdit.timeStartSale
        ),
        timeEndSale: StringUtils.formatDateTimeCustom(
          products.infoMainEdit.timeStartSale
        ),
      },
      headers
    );
  };
  return (
    <div
      className="w-full px-3"
      style={{ height: "550px", maxHeight: "550px" }}
    >
      <ColorMemoryRamEdit />
      <ContentMainProductEdit
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        setValue={setValue}
      />
    </div>
  );
}

export default MainInfoProductEdit;
