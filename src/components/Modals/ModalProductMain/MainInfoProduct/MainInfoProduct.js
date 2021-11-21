import React from "react";
import { useForm } from "react-hook-form";
import ColorMemoryRam from "./ColorMemoryRam/ColorMemoryRam";
import ContentMainProduct from "./ContentMainProduct/ContentMainProduct";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../../Utils/api";
import * as StringUtils from "../../../../Utils/StringUtils";
import * as categorysAction from "../../../../actions/category/index";
import * as modalsAction from "../../../../actions/modals/index";

function MainInfoProduct(props) {
  const schema = Yup.object().shape({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    shouldUnregister: false,
  });
  const { headers, products, filters, category } = useSelector((state) => {
    return {
      headers: state.headers,
      products: state.products,
      filters: state.filters,
      category: state.category
    };
  });
  const dispatch = useDispatch();
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
          memoryProduct: item.rom.id ? item.rom : null,
          lineProduct: products.infoMain.lineProduct,
          ramProduct: item.ram,
          imageProduct: products.infoMain.images[item.color.id],
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
          timeInput: null,
          amountInput: item.amountInput,
          saleDefault: item.saleDefault,
          timeStartSale: StringUtils.formatDateTimeCustom(item.timeStartSale),
          timeEndSale: StringUtils.formatDateTimeCustom(item.timeStartSale),
        },
        headers
      );
    }
    dispatch(categorysAction.deleteCategoryRequest(
      category.choose,
      "products",
      {
        status: true,
        search: filters.search,
        sorter: filters.sorter,
        filters: filters.choose,
        mainFilters: filters,
        params: {
          full: `?productType=0`,
          limit: `?productType=0&limit=${10}&offset=${0}`,
        },
      },
      headers
    ));
    dispatch(modalsAction.closeModal());
  };
  return (
    <div
      className="w-full mx-auto overflow-y-auto scrollbar-css px-3"
      style={{
        height: 600,
        maxHeight: 600,
      }}
    >
      <ColorMemoryRam />
      <ContentMainProduct
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default MainInfoProduct;
