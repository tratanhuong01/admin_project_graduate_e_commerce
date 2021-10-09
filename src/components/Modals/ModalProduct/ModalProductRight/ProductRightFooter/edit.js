import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import * as modalsAction from "../../../../../actions/modals/index";
import * as productsAction from "../../../../../actions/products/index";
import api from "../../../../../Utils/api";

export const addProduct = async (products, headers, dispatch) => {
  let data = products;
  data.descriptions = draftToHtml(
    convertToRaw(data.descriptions.getCurrentContent())
  );
  if (data.imageColor.length > 0)
    await addImageMain(lineProduct.data, products, headers);
  if (data.images.length > 0)
    await addImageOther(lineProduct.data, products, headers);
  await addProductAttribute(lineProduct.data, products, headers);
  await addFunctionProduct(lineProduct.data, products, headers);
  dispatch(modalsAction.closeModal());
  dispatch(productsAction.resetDataProductState());
};
const addImageMain = async (lineProduct, products, headers) => {
  let listNew = [];
  let listRemove = [];
  for (let i = 0; i < products.listData.imageColor.length; i++) {
    let count = 0;
    for (let j = 0; j < products.imageColor.length; j++)
      if (
        products.listData.imageColor[i].color.id ===
        products.imageColor[j].color.id
      )
        count++;
    if (count === 0) listRemove.push(products.imageColor[i]);
  }
  for (let i = 0; i < products.imageColor.length; i++) {
    let count = 0;
    for (let j = 0; j < products.listData.imageColor.length; j++) {
      if (
        products.imageColor[i].color.id ===
        products.listData.imageColor[j].color.id
      )
        count++;
    }
    if (!products.imageColor[index].image.id)
      listNew.push({
        data: products.imageColor[i],
        new: count === 0 ? false : true,
      });
  }

  for (let index = 0; index < listNew.length; index++) {
    const item = listNew[index];
    const formData = new FormData();
    formData.append("multipartFile", item.image);
    formData.append("id", `${lineProduct.id}__${item.color.id}`);
    formData.append("publicId", "E-Commerce/Products/");
    result = await api(
      "updateImageSingle",
      "POST",
      formData,
      Object.assign(headers, {
        "Content-Type": "multipart/form-data",
      })
    );
    await api(
      "images",
      "POST",
      {
        id: "",
        alt: "",
        src: result.data.url,
        imageLineProduct: lineProduct,
        colorProduct: item.color,
        type: 0,
      },
      Object.assign(headers, {
        "Content-Type": "application/json",
      })
    );
  }
};
const addImageOther = async (lineProduct, products, headers) => {
  for (let index = 0; index < products.images.length; index++) {
    const image = products.images[index];
    const formData = new FormData();
    formData.append("multipartFile", image);
    formData.append("id", index);
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
const addProductAttribute = async (lineProduct, products, headers) => {
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
            id: null,
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
};
const addFunctionProduct = async (lineProduct, products, headers) => {
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
  console.log(products.listData.features);
  console.log(products.features.choose);
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
      console.log({
        id: products.listData.features[i].idDetailFunctionProduct,
        lineProductFunctionProduct: lineProduct,
        functionProductDetail: feature,
      });
      await api(
        "detailFunctionProducts",
        "DELETE",
        {
          id: products.listData.features[i].idDetailFunctionProduct,
          lineProductFunctionProduct: lineProduct,
          functionProductDetail: feature,
        },
        headers
      );
    }
  }
};
