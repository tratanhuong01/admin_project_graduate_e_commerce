import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import * as modalsAction from "../../../../../actions/modals/index";
import * as productsAction from "../../../../../actions/products/index";
import api from "../../../../../Utils/api";

export const updateProduct = async (products, headers, dispatch) => {
  dispatch(modalsAction.setLoadingModal(true));
  let lineProduct = products.listData.lineProduct;
  lineProduct.nameLineProduct = products.infoSimple.nameProduct;
  lineProduct.groupProduct = products.infoSimple.groupProduct;
  lineProduct.width = products.infoSimple.width;
  lineProduct.height = products.infoSimple.height;
  lineProduct.weight = products.infoSimple.weight;
  lineProduct.brandProduct = products.infoSimple.brand;
  lineProduct = await api('lineProducts', 'PUT', lineProduct, headers);
  lineProduct = lineProduct.data;
  products.descriptions = draftToHtml(
    convertToRaw(products.descriptions.getCurrentContent())
  );
  //await updateImageMain(lineProduct, products, headers);
  await updateImageOther(lineProduct, products, headers);
  await updateProductAttribute(lineProduct, products, headers);
  await updateFunctionProduct(lineProduct, products, headers);
  dispatch(modalsAction.closeModal());
  dispatch(productsAction.resetDataProductState());
};
// const updateImageMain = async (lineProduct, products, headers) => {};
const updateImageOther = async (lineProduct, products, headers) => {
  for (let index = 0; index < products.images.length; index++) {
    const image = products.images[index];
    const formData = new FormData();
    formData.append("multipartFile", image);
    formData.append("id", `image_other__${new Date().getTime()}_${index}`);
    formData.append("publicId", "E-Commerce/Products/");
    const result = await api("updateImageSingle", "POST", formData, headers);
    await api(
      "imageOthers",
      "POST",
      {
        id: null,
        lineProductImage: lineProduct,
        src: result.data.url,
        type: 1,
      },
      headers
    );
  }
};
const updateProductAttribute = async (lineProduct, products, headers) => {
  if (products.infoAttribute) {
    for (const property in products.infoAttribute) {
      if (products.infoAttribute[property].list.length > 0) {
        for (
          let index = 0;
          index < products.infoAttribute[property].list.length;
          index++
        ) {
          const element = products.infoAttribute[property].list[index];
          await api(
            "attributeProducts",
            "POST",
            {
              id: element.id,
              lineProductAttribute: lineProduct,
              attributeProduct: element.data,
              valueAttributeProduct: element.value,
            },
            Object.assign(headers, {
              "Content-Type": "application/json",
            })
          );
        }
      }
    }
    for (const property in products.infoAttribute) {
      for (let i = 0; i < products.listData.attribute[property].length; i++) {
        let count = 0;
        for (let j = 0; j < products.infoAttribute[property].list.length; j++) {
          if (
            products.listData.attribute[property][i].id ===
            products.infoAttribute[property].list[j].id
          ) {
            count++;
          }
        }
        if (count === 0) {
          const element = products.listData.attribute[property][i];
          await api(
            "attributeProducts",
            "DELETE",
            {
              id: element.id,
              lineProductAttribute: lineProduct,
              attributeProduct: element.data,
              valueAttributeProduct: element.value,
            },
            Object.assign(headers, {
              "Content-Type": "application/json",
            })
          );
        }
      }
    }
  }
};
const updateFunctionProduct = async (lineProduct, products, headers) => {
  for (let index = 0; index < products.features.choose.length; index++) {
    const feature = products.features.choose[index];
    if (feature.idDetailFunctionProduct) {
      let featureClone = feature;
      let idDetailFunctionProduct = featureClone.idDetailFunctionProduct;
      delete featureClone.idDetailFunctionProduct;
      await api(
        "detailFunctionProducts",
        "PUT",
        {
          id: idDetailFunctionProduct,
          lineProductFunctionProduct: lineProduct,
          functionProductDetail: featureClone,
        },
        headers
      );
    } else
      await api(
        "detailFunctionProducts",
        "POST",
        {
          id: null,
          lineProductFunctionProduct: lineProduct,
          functionProductDetail: feature,
        },
        headers
      );
  }
  for (let i = 0; i < products.listData.features.length; i++) {
    let count = 0;
    for (let j = 0; j < products.features.choose.length; j++) {
      if (
        products.listData.features[i].idDetailFunctionProduct ===
        products.features.choose[j].idDetailFunctionProduct
      )
        count++;
    }
    if (count === 0) {
      let id = products.listData.features[i].idDetailFunctionProduct;
      delete products.listData.features[i].idDetailFunctionProduct;
      await api(
        "detailFunctionProducts",
        "DELETE",
        {
          id: id,
          lineProductFunctionProduct: lineProduct,
          functionProductDetail: products.listData.features[i],
        },
        headers
      );
    }
  }
};
