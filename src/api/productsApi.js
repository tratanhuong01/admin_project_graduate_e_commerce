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
