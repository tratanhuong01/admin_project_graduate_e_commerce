import api from "../Utils/api";

export const filters = (table, query, all) => {
  return api(`${table}Filters${all ? "All" : ""}${query}`, "GET", null);
};
