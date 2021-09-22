import * as Yup from "yup";

const schema = Yup.object().shape({
  id: Yup.string().required("ID không được trống !!"),
  nameBrand: Yup.string().required("Tên thương hiệu không được trống !!"),
  imageBrand: Yup.string(),
  type: Yup.number().integer().default(0),
  timeCreated: Yup.date(),
});
export default schema;
