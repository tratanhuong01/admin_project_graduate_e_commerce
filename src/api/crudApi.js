import api from "../Utils/api";

export const addData = (item, table, headers) => {
  console.log(headers);
  return api(
    `${table}`,
    item.id ? "PUT" : "POST",
    item,
    {
      ...headers,
      "Content-Type": "application/json",
    }
  );
};

export const updateData = (item, table, headers) => {
  return api(
    `${table}`,
    "PUT",
    item,
    {
      headers,
      "Content-Type": "application/json",
    }
  );
};

export const deleteData = (item, table, headers) => {
  return api(`${table}`, "DELETE", item, headers);
};

export const updateCategory = (table, item, column, headers) => {
  return api(
    `${table}/update/${column}/`,
    "PUT",
    {
      id: item.id,
      value: item.value,
    },
    headers
  );
};
