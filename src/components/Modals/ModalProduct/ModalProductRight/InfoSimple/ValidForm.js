import * as Yup from "yup";

const schema = Yup.object().shape({
  nameLineProduct: Yup.string().required("Tên sản phẩm không được trống !!"),
  dateInput: Yup.date().required("Tên sản phẩm không được trống !!"),
  dateOutput: Yup.date().required("Tên sản phẩm không được trống !!"),
  width: Yup.date().required("Chiều rộng sản phẩm không được trống !!"),
  height: Yup.date().required("Chiều cao sản phẩm không được trống !!"),
  weight: Yup.date().required("Cân nặng sản phẩm không được trống !!"),
});
export default schema;
