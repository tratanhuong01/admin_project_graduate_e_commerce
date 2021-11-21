import React, { useEffect, useState } from 'react'
import ModalWrapper from '../ModalWrapper'
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import InputField from '../../InputField/InputField';
import SelectCustom from '../../SelectCustom/SelectCustom';
import ValidForm from "./ValidForm";
import Button from '../../Form/Button/Button';
import placeholder from "../../../assets/images/placeholder.jpg";
import { useSelector } from 'react-redux';
import * as updateEmployee from './UpdateEmployee';
import { useDispatch } from 'react-redux';

export default function ModalEmployee({ data }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm({
        mode: "all",
        resolver: yupResolver(ValidForm),
        shouldUnregister: false,
    });
    const { headers, filters } = useSelector((state) => {
        return {
            headers: state.headers,
            filters: state.filters
        }
    });
    const [roles, setRoles] = useState([]);
    const [fileAvatar, setFileAvatar] = useState(null);
    const [errorsIsset, setErrorsIsset] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        let unmounted = false;
        if (unmounted) return;
        updateEmployee.setValueData({ headers, data, setRoles, setValue: (key, value) => setValue(key, value) });
        return () => {
            unmounted = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])
    return (
        <ModalWrapper
            className="shadow-sm border border-solid border-gray-500 bg-white w-full fixed z-50 top-1/2 
        left-1/2 dark:bg-dark-second rounded-lg  sm:w-10/12 md:w-2/3 transform 
        -translate-x-1/2 -translate-y-1/2 overflow-hidden"
            title={`${data ? "Sửa" : "Thêm"} nhân viên`}
            styleChildren={{ height: "75vh", maxHeight: "75vh" }}
        >
            <form onSubmit={handleSubmit((datas) => updateEmployee.checkEmailAndPhone(
                { data: datas, setErrorsIsset, errorsIsset }, {
                filters: {
                    filters: filters.choose,
                    sorter: filters.sorter,
                    search: filters.search,
                    mainFilters: filters
                },
                query: {
                    full: `?userType=${""}`,
                    limit: `?userType=${""}&limit=${10}&offset=${0}`,
                    type: `?userType=${""}`,
                },
                headers,
                table: 'user',
                obj: datas,
                id: data ? data.id : null,
                user: data,
                file: fileAvatar
            }, dispatch
            ))} className="w-full px-5 flex">
                <div className="w-1/2 mr-5">
                    <InputField
                        isset={null}
                        register={register}
                        showError={errors["firstName"]}
                        label="Họ"
                        type="text"
                        name="firstName"
                        className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
                        placeHolder="Họ"
                        errorsIsset={errorsIsset}
                    />
                    <InputField
                        register={register}
                        showError={errors["email"]}
                        label="Email"
                        type="email"
                        name="email"
                        className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
                        placeHolder="Email"
                        errorsIsset={errorsIsset}
                        attribute={"validEmail"}
                        onChange={() => {
                            if (errorsIsset) {
                                if (errorsIsset.validEmail) {
                                    setErrorsIsset({ ...errorsIsset, validEmail: null });
                                }
                            }
                        }}
                    />
                    <InputField
                        register={register}
                        showError={errors["phone"]}
                        label="Số điện thoại"
                        type="text"
                        name="phone"
                        className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
                        placeHolder="Số điện thoại"
                        errorsIsset={errorsIsset}
                        attribute={"validPhone"}
                        onChange={() => {
                            if (errorsIsset) {
                                if (errorsIsset.validPhone) {
                                    setErrorsIsset({ ...errorsIsset, validPhone: null });
                                }
                            }
                        }}
                    />
                    <SelectCustom
                        label="Giới tính"
                        list={[{ gender: "Nam" }, { gender: "Nữ" }, { gender: "Khác" }]}
                        attribute="gender"
                        dataProps={data ? data.sex : "Nam"}
                        className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
                        setData={(data) =>
                            setValue('sex', data.gender)
                        }
                        placeHolder="Tìm kiếm"
                    />
                    <InputField
                        register={register}
                        showError={errors["birthday"]}
                        isset={null}
                        label="Ngày sinh"
                        type="date"
                        name="birthday"
                        className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
                    />
                    <InputField
                        register={register}
                        showError={errors["password"]}
                        isset={null}
                        label="Mật khẩu"
                        type="password"
                        name="password"
                        className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
                        icon="bx bx-lock-open"
                        placeHolder="Mật khẩu"
                    />
                </div>
                <div className="w-1/2">
                    <InputField
                        register={register}
                        showError={errors["lastName"]}
                        isset={null}
                        label="Tên"
                        type="text"
                        name="lastName"
                        className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
                        placeHolder="Tên"
                    />
                    <SelectCustom
                        label="Chức vụ"
                        list={roles}
                        attribute="nameRole"
                        dataProps={data ? data.userRole.nameRole : null}
                        className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
                        setData={(data) =>
                            setValue("userRole", data)
                        }
                        table="chức vụ"
                        placeHolder="Chức vụ"
                    />
                    <label htmlFor="InputAvatar">
                        <img src={fileAvatar ? URL.createObjectURL(fileAvatar) : data ? data.avatar : placeholder} alt=""
                            className="w-80 h-80 mx-auto my-5 object-cover rounded-full" />
                    </label>
                    <input type="file" id="InputAvatar" className="hidden" onChange={(event) => {
                        if (event.target.files.length === 1) {
                            setFileAvatar(event.target.files[0]);
                        }
                    }} />
                    <Button></Button>
                    <br></br>
                    <br></br>
                </div>
            </form>
        </ModalWrapper>
    )
}
