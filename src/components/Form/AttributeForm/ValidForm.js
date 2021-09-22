import * as Yup from "yup";

const schema = Yup.object().shape({
  groupAttribute: Yup.object().required("Nhóm thuộc tính không được trống !!"),
  nameAttribute: Yup.string().required("Tên thuộc tính không được trống !!"),
  typeAttribute: Yup.number().integer().default(0),
  timeCreated: Yup.date(),
});
export default schema;
