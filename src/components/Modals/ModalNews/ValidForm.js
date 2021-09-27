import * as Yup from "yup";

const schema = Yup.object().shape({
  // title: Yup.string().required("Tiêu đề không được trống !!"),
  // contentShort: Yup.string().required("Nội dung ngắn không được trống !!"),
  // thumbnailFile: Yup.mixed().required("Thumbnail không được trống !!"),
  // thumbnailLink: Yup.mixed().required("Thumbnail không được trống !!"),
  // categoryNews: Yup.object(),
  // content: Yup.string(),
});
export default schema;
