import * as categorysAction from "../../../actions/category/index";
import api from "../../../Utils/api";
import * as StringUtil from "../../../Utils/StringUtils";

export const updateEmployee = (data,dispatch) => {
    const {obj,headers,table,query,filters,id}  = data;
    const objMain = {
        id: id ? id : null,
        firstName: obj.firstName,
        lastName: obj.lastName,
        phone: obj.phone,
        email: obj.emaill,
        sex: obj.sex,
        birthday: obj.birthday,
        password: "",
        avatar: obj.avatar,
        type: 0,
        userRole: obj.userRole,
        codeEmail: null,
        codePhone: null,
        isVerifyEmail: 1,
        isVerifyPhone: 1,
        timeCreated: null,
        status: 0,
        isRegister: 1,
        token: null,
        googleId: null,
        facebookId: null,
      };
    dispatch(categorysAction.addCategoryRequest(objMain,table,query,true,filters,
        headers));
}

export const setValueData = async (dataPass) => {
    const {data,headers,setRoles,setValue} = dataPass;
    const result = await api('getRoleMain','GET',null,headers);
    setRoles(result.data);
    if (data) {
        setValue('firstName',data.firstName);
        setValue('lastName',data.lastName);
        setValue('email',data.email);
        setValue('phone',data.phone);
        setValue('sex',data.sex);
        setValue('birthday', StringUtil.formatDateTimeBackInput(data.birthday))
    }
}

export const checkEmailAndPhone = async (dataPass,dataFunc,func) => {
    const {data,setErrorsIsset,errorsIsset}= dataPass;
    if (dataFunc.user) {
        if (dataFunc.user.email === data.email && dataFunc.user.phone === data.phone) {
            
        }
        else {
            if (dataFunc.user.phone !== data.phone) {
                let formDataPhone = new FormData();
                formDataPhone.append("phone", data.phone);
                const phone = await api("users/phone", "POST", formDataPhone);
                if (phone.data.length > 0)
                {
                    setErrorsIsset({...errorsIsset,validPhone :  "Số điện thoại đã được sử dung !!"});
                    return;
                }
            }
            if (dataFunc.user.email !== data.email) {
                let formDataEmail = new FormData();
                formDataEmail.append("phone", data.email);
                const email = await api("users/phone", "POST", formDataEmail);
                if (email.data.length > 0)
                {
                    setErrorsIsset({...errorsIsset,validEmail : "Email đã được sử dung !!"});
                    return;
                }
            }
            if (typeof func === "function") {
                const {dispatch} =  dataFunc;
                func({obj : data,dataFunc},dispatch);
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
            setErrorsIsset({...errorsIsset,validEmail: "Email đã được sử dung !!"});
            else
            setErrorsIsset({...errorsIsset,validPhone: "Số điện thoại đã được sử dụng !!"});
        } else {
            if (typeof func === "function") {
                const {dispatch} =  dataFunc;
                func(Object.assign(data,dataFunc),dispatch);
            }
        }
    }
}