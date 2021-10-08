import api from "../Utils/api";

export const checkLoginJWT = (data, headers) => {
  return api(`adminCheckLoginJWT`, "POST", data, headers);
};

export const getUserFromJWT = (headers) => {
  return api(`getUserFromJWT`, "POST", headers.Authorization, headers);
};

// 0 -  customer
export const getUser = (role, headers) => {
  return api(`getUserByIdRole?role=${role}`, "POST", null, headers);
};
