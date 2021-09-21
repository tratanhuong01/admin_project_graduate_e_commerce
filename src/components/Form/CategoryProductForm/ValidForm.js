import * as Yup from "yup";

const schema = Yup.object().shape({
  id: Yup.string().required("ID không được trống !!"),
  nameCategoryProduct: Yup.string().required(
    "Tên danh mục không được trống !!"
  ),
  slugCategoryProduct: Yup.string().required(
    "Đường dẫn danh mục không được trống !!"
  ),
  icon: Yup.string().required("Icon không được trống !!"),
});
export default schema;
