import api from "../Utils/api";

export const filters = (table, query) => {
  return api(`${table}Filters${query}`, "GET", null);
};
