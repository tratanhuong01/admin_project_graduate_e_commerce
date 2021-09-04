import * as Yup from "yup";

const schema = Yup.object().shape({
  groupProductFilter: Yup.object().required(
    "Nhóm sản phẩm không được trống !!"
  ),
  nameGroupFilterProduct: Yup.string().required(
    "Tên nhóm bộ lọc sản phẩm không được trống !!"
  ),
  typeGroupFilterProduct: Yup.number().integer().default(0),
});
export default schema;
