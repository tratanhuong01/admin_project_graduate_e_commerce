export const user = {
  id: "",
  firstName: "",
  lastName: "",
  birthday: "",
  sex: "",
  email: "",
  phone: "",
  password: "",
  type: 0,
  timeCreated: "",
  codeEmail: "",
  codePhone: "",
  isVerifyEmail: 0,
  isVerifyPhone: 0,
};
export const product = {
  id: "",
  groupProduct: {},
  nameProduct: "",
  color: null,
  size: null,
  image: null,
  isShow: 1,
  brand: "",
  describeProduct: null,
};
export const groupProduct = {
  id: "",
  nameGroupProduct: "",
  typeGroupProduct: 0,
};
export const productInput = {
  id: 1,
  productInput: {},
  amount: 1,
  priceInput: 0,
  timeInput: "",
};
export const productOutput = {
  id: 1,
  productOutput: {},
  amount: 1,
  priceOutput: 0,
  timeOutput: "",
};
export const cart = {
  id: 1,
  userCart: {},
  productCart: {},
  amount: 11,
  timeCreated: "",
};
export const bill = {
  id: "",
  billUser: {},
  status: 0,
  methodPayment: 1,
  timeCreated: "",
};
export const billDetail = {
  id: 1,
  billDetail: {},
  productDetailBill: {},
  amount: 11,
};
export const categoryNews = {
  id: "",
  nameCategoryNews: "",
  typeCategoryNews: 1,
};
export const news = {
  id: 1,
  userNews: {},
  categoryNews: {},
  title: null,
  thumbnail: null,
  describeSmall: null,
  timeCreated: "",
};
export const sale = {
  id: 1,
  productSale: {},
  percent: "12",
  timeStart: "",
  timeEnd: "",
};
