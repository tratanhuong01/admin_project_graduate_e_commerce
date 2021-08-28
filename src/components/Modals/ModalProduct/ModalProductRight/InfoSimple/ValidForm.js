import * as Yup from "yup";

const schema = Yup.object().shape({
  nameLineProduct: Yup.string().required("Tên sản phẩm không được trống !!"),
  dateInput: Yup.date().required("Tên sản phẩm không được trống !!"),
  dateOutput: Yup.date().required("Tên sản phẩm không được trống !!"),
});
export default schema;
