import api from "../Utils/api";

export const filters = (table, query, all, headers) => {
  return api(
    `${table}Filters${all ? "All" : ""}${query}`,
    "GET",
    null,
    headers
  );
};
