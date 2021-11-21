import * as categorysAction from "../../../actions/category/index";
import { CLOSE_MODAL, SET_LOADING_MODAL } from "../../../constants/ActionTypes";
import api from "../../../Utils/api";
import * as StringUtil from "../../../Utils/StringUtils";

export const updateEmployee = async (data, dispatch) => {
    if (typeof dispatch === "function") {
        dispatch({ type: SET_LOADING_MODAL, loading: true })
    }
    const { obj, headers, table, query, filters, id, file, user } = data;
    const convert = (str) => {
        var date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), day, mnth].join("-");
    }
    let objMain = {
        id: id ? id : null,
        firstName: obj.firstName,
        lastName: obj.lastName,
        phone: obj.phone,
        email: obj.email,
        sex: obj.sex,
        birthday: convert(obj.birthday),
        password: obj.password,
        avatar: user ? user.avatar : null,
        type: 2,
        userRole: obj.userRole,
        codeEmail: null,
        codePhone: null,
        isVerifyEmail: 1,
        isVerifyPhone: 1,
        timeCreated: user ? user.timeCreated : null,
        status: user ? user.status : 0,
        isRegister: 1,
        token: null,
        googleId: null,
        facebookId: null,
    };
    if (file) {
        if (file.name) {
            const formData = new FormData();
            formData.append("multipartFile", file);
            formData.append("id", obj.phone);
            formData.append("publicId", "E-Commerce/Avatar/");
            const result = await api(
                "updateImageSingle",
                "POST",
                formData,
                Object.assign(headers, {
                    "Content-Type": "multipart/form-data",
                })
            );
            objMain.avatar = result.data.url;
        }
    }
    dispatch(categorysAction.addCategoryRequest(objMain, table, query, true, filters, Object.assign(headers, {
        "Content-Type": "application/json"
    })));
    dispatch({ type: CLOSE_MODAL })
}

export const setValueData = async (dataPass) => {
    const { data, headers, setRoles, setValue } = dataPass;
    const result = await api('getRoleMain', 'GET', null, headers);
    setRoles(result.data);
    if (data) {
        setValue('firstName', data.firstName);
        setValue('lastName', data.lastName);
        setValue('email', data.email);
        setValue('password', data.password)
        setValue('userRole', data.userRole)
        setValue('phone', data.phone);
        setValue('sex', data.sex);
        setValue('birthday', StringUtil.formatDateTimeBackInput(data.birthday))
    }
}

export const checkEmailAndPhone = async (dataPass, dataFunc, func) => {
    const { data, setErrorsIsset, errorsIsset } = dataPass;
    if (dataFunc.user) {
        if (dataFunc.user.email === data.email && dataFunc.user.phone === data.phone) {
            if (typeof func === "function") {
                updateEmployee(dataFunc, func);
            }
        }
        else {
            if (dataFunc.user.phone !== data.phone) {
                let formDataPhone = new FormData();
                formDataPhone.append("phone", data.phone);
                const phone = await api("users/phone", "POST", formDataPhone);
                if (phone.data.length > 0) {
                    setErrorsIsset({ ...errorsIsset, validPhone: "Số điện thoại đã được sử dung !!" });
                    return;
                }
            }
            if (dataFunc.user.email !== data.email) {
                let formDataEmail = new FormData();
                formDataEmail.append("phone", data.email);
                const email = await api("users/phone", "POST", formDataEmail);
                if (email.data.length > 0) {
                    setErrorsIsset({ ...errorsIsset, validEmail: "Email đã được sử dung !!" });
                    return;
                }
            }
            if (typeof func === "function") {
                updateEmployee(dataFunc, func);
            }
        }
    }
    else {
        let formDataEmail = new FormData();
        formDataEmail.append("email", data.email);
        const email = await api("users/email", "POST", formDataEmail);
        let formDataPhone = new FormData();
        formDataPhone.append("phone", data.phone);
        const phone = await api("users/phone", "POST", formDataPhone);
        if (email.data.length > 0 && phone.data.length > 0) {
            setErrorsIsset({
                validEmail: "Email đã được sử dung !!",
                validPhone: "Số điện thoại đã được sử dụng !!",
            });
        } else if (email.data.length > 0 || phone.data.length > 0) {
            if (email.data.length > 0)
                setErrorsIsset({ ...errorsIsset, validEmail: "Email đã được sử dung !!" });
            else
                setErrorsIsset({ ...errorsIsset, validPhone: "Số điện thoại đã được sử dụng !!" });
        } else {
            if (typeof func === "function") {
                updateEmployee(dataFunc, func);
            }
        }
    }
}