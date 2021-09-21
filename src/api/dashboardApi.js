import api from "../Utils/api";

export const getDashboardHeader = () => {
  return api(`getDashboardHeader`, "GET", null);
};

export const getUserNew = (type, limit, offset) => {
  return api(
    `getUserByTypeLimit/?type=${type}&limit=${limit}&offset=${offset}`,
    "GET",
    null
  );
};

export const getBillNew = (limit, offset) => {
  return api(`bills/admin/?limit=${limit}&offset=${offset}`, "GET", null);
};

// export const getBillNew = (limit, offset) => {
//   return api(
//     `getUserByTypeLimit/?limit=${limit}&offset=${offset}`,
//     "GET",
//     null
//   );
// };
