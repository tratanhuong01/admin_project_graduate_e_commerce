import * as Yup from "yup";

const schema = Yup.object().shape({
  id: Yup.string().required("ID không được trống !!"),
  nameBrand: Yup.string()
    .required("Tên thương hiệu không được trống !!")
    .max(6, "Tên thương hiệu phải có 6 kí tự !!"),
});
export default schema;
