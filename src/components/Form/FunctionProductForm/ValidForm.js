import * as Yup from "yup";

const schema = Yup.object().shape({
  groupFilterFunctionProduct: Yup.object().required(
    "Nhóm bộ lọc sản phẩm không được trống !!"
  ),
  nameFunctionProduct: Yup.string().required(
    "Tên chức năng sản phẩm không được trống !!"
  ),
  typeFunctionProduct: Yup.number()
    .integer()
    .required("Loại chức năng sản phẩm không được trống !!"),
});
export default schema;
