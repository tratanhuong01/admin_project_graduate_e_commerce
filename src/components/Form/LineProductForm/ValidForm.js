import * as Yup from "yup";

const schema = Yup.object().shape({
  id: Yup.string().required("ID không được trống !!"),
  nameLineProduct: Yup.string().required("Tên sản phẩm không được trống !!"),
  groupProduct: Yup.object().required("Nhóm sản phẩm không được để trống !!"),
});
export default schema;
