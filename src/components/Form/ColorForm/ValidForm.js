import * as Yup from "yup";

const schema = Yup.object().shape({
  id: Yup.string()
    .required("ID không được trống !!")
    .max(7, "ID phải có 7 kí tự !!")
    .min(7, "ID phải có 7 kí tự !!"),
  code: Yup.string()
    .required("Mã màu không được trống !!")
    .max(6, "Mã màu phải có 6 kí tự !!"),
  description: Yup.string().required("Mô tả không được để trống !!"),
});
export default schema;
