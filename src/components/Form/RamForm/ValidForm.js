import * as Yup from "yup";

const schema = Yup.object().shape({
  id: Yup.string(),
  nameRam: Yup.string().required("Tên bộ nhớ không được trống !!"),
  type: Yup.number().integer().default(0),
  timeCreated: Yup.date(),
});
export default schema;
