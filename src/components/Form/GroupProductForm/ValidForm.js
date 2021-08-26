import * as Yup from "yup";

const schema = Yup.object().shape({
  id: Yup.string().required("ID không được trống !!"),
  nameGroupProduct: Yup.string().required(
    "Tên nhóm sản phẩm không được trống !!"
  ),
  categoryGroupProduct: Yup.object().required(
    "Danh mục không được để trống !!"
  ),
});
export default schema;
