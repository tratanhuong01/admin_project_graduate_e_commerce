import api from "../Utils/api";

export const getBillById = (id, headers) => {
  return api(`bills/${id}`, "GET", null, headers);
};
