import * as Yup from "yup";
import * as Config from "../../../constants/Config";

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Họ không được để trống !!"),
    lastName: Yup.string().required("Tên không được để trống !!"),
    sex: Yup.string().required(""),
    email: Yup.string()
        .required("Email không được để trống !!")
        .email("Email không đúng định dạng !!"),
    phone: Yup.string()
        .matches(
            Config.REGEX_NUMBER_PHONE,
            "Số điện thoại không đúng định dạng !!"
        )
        .required("Số điện thoại không được để trống !!"),
    birthday: Yup.date().required("Ngày sinh không được để trống !!"),
    userRole: Yup.object().required(" "),
    password: Yup.string()
        .min(6, "Mật khẩu phải tối đa 6 kí tự !!")
        .required("Mật khẩu không được để trống !!"),
});
export default validationSchema;