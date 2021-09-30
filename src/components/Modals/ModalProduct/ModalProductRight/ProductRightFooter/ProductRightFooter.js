import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as modalsAction from "../../../../../actions/modals/index";
import * as productsAction from "../../../../../actions/products/index";
import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import api from "../../../../../Utils/api";
// import * as StringUtils from "../../../../../Utils/StringUtils";
function ProductRightFooter(props) {
  //
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  // const convertStringToSlug = (string) => {
  //   return string
  //     .toLowerCase()
  //     .replace(/ /g, "-")
  //     .replace(/[^\w-]+/g, "");
  // };
  const addProduct = async () => {
    let data = products;
    data.descriptions = draftToHtml(
      convertToRaw(data.descriptions.getCurrentContent())
    );
    const lineProduct = await api("lineProducts", "POST", {
      id: null,
      nameLineProduct: data.infoSimple.nameProduct,
      groupProduct: data.infoSimple.groupProduct,
      brandProduct: data.infoSimple.brand,
      height: data.infoSimple.height,
      width: data.infoSimple.width,
      weight: data.infoSimple.weight,
      describeProduct: data.descriptions,
      timeCreated: null,
    });
    if (data.imageColor.length > 0) await addImageMain(lineProduct.data);
    if (data.images.length > 0) await addImageOther(lineProduct.data);
    await addProductAttribute(lineProduct.data);
    await addFunctionProduct(lineProduct.data);
    dispatch(modalsAction.closeModal());
    dispatch(productsAction.resetDataProductState());
  };
  const addImageMain = async (lineProduct) => {
    let listImage = [];
    for (let index = 0; index < products.imageColor.length; index++) {
      const item = products.imageColor[index];
      const formData = new FormData();
      formData.append("multipartFile", item.image);
      formData.append("id", `${lineProduct.id}__${item.color.id}`);
      formData.append("publicId", "E-Commerce/Products/");
      const result = await api("updateImageSingle", "POST", formData, {
        "Content-Type": "multipart/form-data",
      });
      const image = await api("images", "POST", {
        id: "",
        alt: "",
        src: result.data.url,
        colorProduct: item.color,
        type: 0,
      });
      listImage.push({ color: item, image: image.data });
    }
    return listImage;
  };
  const addImageOther = async (lineProduct) => {
    for (let index = 0; index < products.images.length; index++) {
      const image = products.images[index];
      const formData = new FormData();
      formData.append("multipartFile", image);
      formData.append("id", index);
      formData.append("publicId", "E-Commerce/Products/");
      const result = await api("updateImageSingle", "POST", formData, null);
      await api("imageOthers", "POST", {
        id: 1,
        lineProductImage: lineProduct,
        src: result.data.url,
        type: 1,
      });
    }
  };
  const addProductAttribute = async (lineProduct) => {
    for (const property in products.infoAttribute) {
      if (products.infoAttribute[property].list.length > 0) {
        for (
          let index = 0;
          index < products.infoAttribute[property].list.length;
          index++
        ) {
          const element = products.infoAttribute[property].list[index];
          await api("attributeProducts", "POST", {
            id: null,
            lineProductAttribute: lineProduct,
            attributeProduct: element.data,
            valueAttributeProduct: element.value,
          });
        }
      }
    }
  };
  const addFunctionProduct = async (lineProduct) => {
    for (let index = 0; index < products.features.choose.length; index++) {
      const feature = products.features.choose[index];
      await api("detailFunctionProducts", "POST", {
        id: null,
        lineProductFunctionProduct: lineProduct,
        functionProductDetail: feature,
      });
    }
  };
  //
  return (
    <div className="w-11/12 mx-auto bg-white text-right pt-1 pb-3 border-t-2 border-solid border-gray-300 mt-4 z-50">
      <button
        onClick={() => {
          dispatch(modalsAction.closeModal());
          dispatch(productsAction.resetDataProductState());
        }}
        type="button"
        className=" py-2.5 px-5 mr-4 rounded-lg bg-gray-500 font-semibold text-xm text-white"
      >
        {"Hủy"}
      </button>
      <button
        onClick={() => {
          if (products.index === 5) addProduct();
          else
            dispatch(
              productsAction.loadCategoryProductByIndex(products.index + 1)
            );
        }}
        type={"button"}
        className=" py-2.5 px-5 rounded-lg bg-organce font-semibold text-xm text-white"
      >
        {products.index === 5 ? "Lưu sản phẩm" : "Tiếp tục"}
      </button>
    </div>
  );
}

export default ProductRightFooter;
