import api from "../Utils/api";

export const getCategoryNews = (headers) => {
  return api(`categoryNews`, "GET", null, headers);
};
