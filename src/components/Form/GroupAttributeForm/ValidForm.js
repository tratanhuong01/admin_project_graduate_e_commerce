import * as Yup from "yup";

const schema = Yup.object().shape({
  id: Yup.string().required("ID không được trống !!"),
  nameGroupAttribute: Yup.string().required(
    "Tên nhóm thuộc tính không được trống !!"
  ),
  timeCreated: Yup.date(),
});
export default schema;
