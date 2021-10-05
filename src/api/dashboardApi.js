import api from "../Utils/api";

export const getDashboardHeader = (headers) => {
  return api(`getDashboardHeader`, "GET", null, headers);
};

export const getUserNew = (type, limit, offset, headers) => {
  return api(
    `getUserByTypeLimit/?type=${type}&limit=${limit}&offset=${offset}`,
    "GET",
    null,
    headers
  );
};

export const getBillNew = (limit, offset, headers) => {
  return api(
    `bills/admin/?limit=${limit}&offset=${offset}`,
    "GET",
    null,
    headers
  );
};

// export const getBillNew = (limit, offset) => {
//   return api(
//     `getUserByTypeLimit/?limit=${limit}&offset=${offset}`,
//     "GET",
//     null
//   );
// };
