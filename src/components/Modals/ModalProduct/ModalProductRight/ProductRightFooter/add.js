import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import * as modalsAction from "../../../../../actions/modals/index";
import * as productsAction from "../../../../../actions/products/index";
import api from "../../../../../Utils/api";

export const addProduct = async (products, headers, dispatch) => {
  let data = products;
  dispatch(modalsAction.setLoadingModal(true));
  data.descriptions = draftToHtml(
    convertToRaw(data.descriptions.getCurrentContent())
  );
  const lineProduct = await api(
    "lineProducts",
    !products.infoSimple.lineProduct ? "POST" : "PUT",
    {
      id: !products.infoSimple.lineProduct
        ? null
        : products.infoSimple.lineProduct.id,
      nameLineProduct: data.infoSimple.nameProduct,
      groupProduct: data.infoSimple.groupProduct,
      brandProduct: data.infoSimple.brand,
      height: data.infoSimple.height,
      width: data.infoSimple.width,
      weight: data.infoSimple.weight,
      describeProduct: data.descriptions,
      timeCreated: !products.infoSimple.lineProduct
        ? null
        : products.infoSimple.lineProduct.timeCreated,
    },
    headers
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
  let listImage = [];
  for (let index = 0; index < products.imageColor.length; index++) {
    const item = products.imageColor[index];
    const formData = new FormData();
    formData.append("multipartFile", item.image);
    formData.append("id", `${lineProduct.id}__${item.color.id}`);
    formData.append("publicId", "E-Commerce/Products/");
    const result = await api(
      "updateImageSingle",
      "POST",
      formData,
      Object.assign(headers, {
        "Content-Type": "multipart/form-data",
      })
    );
    const image = await api(
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
    listImage.push({ color: item, image: image.data });
  }
  return listImage;
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
};
