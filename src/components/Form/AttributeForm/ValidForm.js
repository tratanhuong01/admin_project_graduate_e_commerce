import * as Yup from "yup";

const schema = Yup.object().shape({
  id: Yup.string().required("ID không được trống !!"),
  groupAttribute: Yup.object().required("Nhóm thuộc tính không được trống !!"),
  nameAttribute: Yup.string().required("Tên thuộc tính không được trống !!"),
});
export default schema;
