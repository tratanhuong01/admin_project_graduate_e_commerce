import * as Yup from "yup";

const schema = Yup.object().shape({
  id: Yup.string(),
  code: Yup.string()
    .required("Mã màu không được trống !!")
    .max(7, "Mã màu phải có 6 kí tự !!"),
  description: Yup.string().required("Mô tả không được để trống !!"),
  timeCreated: Yup.string(),
});
export default schema;
