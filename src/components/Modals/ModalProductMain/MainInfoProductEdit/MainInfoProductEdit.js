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
    const productNewBest = await api(`getIdBestNew`, "GET", null, headers);
    let id = 1000000000;
    if (productNewBest.data)
      id = Number(productNewBest.data.id.replace("SP", ""));
    for (let index = 0; index < products.infoMain.lists.length; index++) {
      const item = products.infoMain.lists[index];
      id++;
      const product = await api(
        `products`,
        "POST",
        {
          id: "SP" + id,
          productUser: null,
          memoryProduct: null,
          lineProduct: null,
          ramProduct: null,
          imageProduct: null,
          isShow: 1,
          slug: StringUtils.removeVietnameseTones(item.nameProduct),
        },
        headers
      );
      await api(
        `infoProducts`,
        "POST",
        {
          id: null,
          infoProduct: product.data,
          priceInput: item.priceInput,
          priceOutput: item.priceOutput,
          sale: item.sale,
          itemCurrent: item.amountOutput,
          itemSold: 0,
          typeInfoProduct: 0,
          review: 50,
          timeInput: item.timeInput,
          amountInput: item.amountInput,
          saleDefault: item.saleDefault,
          timeStartSale: item.timeStartSale,
          timeEndSale: item.timeEndSale,
        },
        headers
      );
    }
  };
  return (
    <div
      className="w-full pt-16 px-3"
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
