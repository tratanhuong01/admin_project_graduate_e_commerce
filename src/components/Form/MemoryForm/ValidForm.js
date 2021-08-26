import * as Yup from "yup";

const schema = Yup.object().shape({
  id: Yup.string().required("ID không được trống !!"),
  nameMemory: Yup.string()
    .required("Tên bộ nhớ không được trống !!")
});
export default schema;
