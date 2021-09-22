import api from "../Utils/api";

export const addData = (item, table) => {
  return api(`${table}`, "POST", item, {});
};

export const updateData = (item, table) => {
  return api(`${table}`, "PUT", item, {});
};

export const deleteData = (item, table) => {
  return api(`${table}`, "DELETE", item, {});
};
