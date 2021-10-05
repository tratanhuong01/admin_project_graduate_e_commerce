import api from "../Utils/api";

export const getGroupFilterProductsAll = (headers) => {
  return api(`groupFilterProductsAll`, "GET", null, headers);
};

export const getGroupAttributesAll = (headers) => {
  return api(`groupAttributesAll`, "GET", null, headers);
};

export const getGroupProductsAll = (headers) => {
  return api(`groupProductsAll`, "GET", null, headers);
};

export const getCategoryProductsAll = (headers) => {
  return api(`categoryProductsAll`, "GET", null, headers);
};

export const getBrandsAll = (headers) => {
  return api(`brandsAll`, "GET", null, headers);
};

export const getMemoriesAll = (headers) => {
  return api(`memoriesAll`, "GET", null, headers);
};

export const getRamsAll = (headers) => {
  return api(`memoriesAll`, "GET", null, headers);
};

export const getColorsAll = (headers) => {
  return api(`colorsAll`, "GET", null, headers);
};

export const getLineProductsAll = (headers) => {
  return api(`lineProductsAll`, "GET", null, headers);
};

export const getProductFullById = (id, headers) => {
  return api(`products/full/${id}`, "GET", null, headers);
};

export const getCombineProductInfoProduct = (id, headers) => {
  return api(`products/combine/?idProduct=${id}`, "GET", null, headers);
};
