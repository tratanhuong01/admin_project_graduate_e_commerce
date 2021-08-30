import * as Yup from "yup";

const schema = Yup.object().shape({
  id: Yup.string().required("ID không được trống !!"),
  valueAttribute: Yup.object().required("Tên thuộc tính không được trống !!"),
  value: Yup.string().required("Giá trị thuộc tính không được trống !!"),
});
export default schema;
