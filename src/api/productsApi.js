import api from "../Utils/api";

export const getGroupFilterProductsAll = () => {
  return api(`groupFilterProductsAll`, "GET", null);
};

export const getGroupAttributesAll = () => {
  return api(`groupAttributesAll`, "GET", null);
};

export const getGroupProductsAll = () => {
  return api(`groupProductsAll`, "GET", null);
};

export const getCategoryProductsAll = () => {
  return api(`categoryProductsAll`, "GET", null);
};

export const getBrandsAll = () => {
  return api(`brandsAll`, "GET", null);
};

export const getMemoriesAll = () => {
  return api(`memoriesAll`, "GET", null);
};

export const getRamsAll = () => {
  return api(`memoriesAll`, "GET", null);
};

export const getColorsAll = () => {
  return api(`colorsAll`, "GET", null);
};

export const getLineProductsAll = () => {
  return api(`lineProductsAll`, "GET", null);
};
