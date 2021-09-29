import * as Yup from "yup";

const schema = Yup.object().shape({
  nameLineProduct: Yup.string().required("Tên sản phẩm không được trống !!"),
  groupProduct: Yup.object().required("Tên sản phẩm không được trống !!"),
  categoryProduct: Yup.object().required("Tên sản phẩm không được trống !!"),
  branProduct: Yup.object().required("Tên sản phẩm không được trống !!"),
  dateInput: Yup.date().required("Tên sản phẩm không được trống !!"),
  dateOutput: Yup.date().required("Tên sản phẩm không được trống !!"),
  width: Yup.number()
    .integer()
    .required("Chiều rộng sản phẩm không được trống !!"),
  height: Yup.number()
    .integer()
    .required("Chiều cao sản phẩm không được trống !!"),
  weight: Yup.number()
    .integer()
    .required("Cân nặng sản phẩm không được trống !!"),
});
export default schema;
