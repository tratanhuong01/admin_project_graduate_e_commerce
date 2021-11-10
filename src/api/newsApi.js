import api from "../Utils/api";

export const getCategoryNews = (headers) => {
  return api(
    `categoryNews`,
    "GET",
    null,
    Object.assign(headers, {
      "Content-Type": "application/json",
    })
  );
};
