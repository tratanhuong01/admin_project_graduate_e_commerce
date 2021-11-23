import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_MODAL, SET_LOADING_MODAL } from '../../../constants/ActionTypes';
import { GiveVoucherContext } from '../../../contexts/GiveVoucherContext/GiveVoucherContext';
import api from '../../../Utils/api';
import RamdomUserGiveVoucher from './RamdomUserGiveVoucher';

export default function ContentGiveVoucher(props) {
    //
    const { category, headers } = useSelector((state) => {
        return {
            headers: state.headers,
            category: state.category
        }
    });
    const { state, addChoose, removeChoose } = useContext(GiveVoucherContext);
    const { choose, userRandom } = state;
    const [keyword, setKeyword] = useState("");
    const [users, setUsers] = useState([]);
    const dispatch = useDispatch();
    const [mode, setMode] = useState(false);
    useEffect(() => {
        //
        let unmounted = false;
        let timeOut;
        if (keyword !== "") {
            timeOut = setTimeout(async () => {
                const result = await api(`userFilters?userType=CUSTOMER&isRegister=1&limit=20&offset=0&keyword=${keyword}`, 'GET', null, headers);
                if (unmounted) return;
                setUsers(result.data);
            }, 300);
        }
        else {
            setUsers([]);
        }
        return () => {
            unmounted = true;
            clearTimeout(timeOut);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyword]);
    const giveVoucher = async (users) => {
        dispatch({ type: SET_LOADING_MODAL, loading: true })
        for (let i = 0; i < category.choose.length; i++) {
            const eI = category.choose[i];
            for (let j = 0; j < users.length; j++) {
                const eJ = users[j];
                await api(`discountCodeUsers`, 'POST', {
                    id: null,
                    userDiscountCode: eJ,
                    discountCode: eI,
                    isUsed: 0

                }, headers);
            }
            let discountCode = eI;
            discountCode.amount -= users.length;
            await api(`discountCodes`, 'PUT', discountCode, headers)
        }
        alert("Them thanh cong")
        dispatch({ type: CLOSE_MODAL });
    }
    const checkDiscountCode = () => {
        let result = true;
        category.choose.forEach(element => {
            if (element.amount < choose.length || new Date(element.timeExpired) < new Date()) {
                result = false;
            }
        });
        return result;
    }
    const randomCheck = async () => {
        if (checkDiscountCode()) {
            giveVoucher(choose);
        }
        else {
            alert("Có thể voucher đã hết hạn hoặc số lượng ramdom lớn hơn số lượng người dùng và voucher !! ")
        }
    }
    //
    return (
        <div className="w-full flex p-2 h-full">
            <div className="w-1/2 mr-5 h-full">
                <input className="w-full p-2.5 border-2 border-solid border-gray-300 
                    focus:border-blue-600" placeholder="Tìm kiếm" value={keyword}
                    onChange={(event) => setKeyword(event.target.value)} />
                <div className="w-full overflow-y-auto overflow-x-hidden scrollbar-css"
                    style={{ height: "calc(100% - 14px)", maxHeight: "calc(100% - 14px)" }}>
                    {users.map((user) => {
                        const index = choose.findIndex(u => u.id === user.id);
                        if (index === -1) {
                            return <div onClick={() => addChoose(user)} key={user.id}
                                className={`w-full p-2.5 font-semibold hover:bg-gray-200`}>
                                <p className="mb-0.5">{`${user.firstName} ${user.lastName} (${user.phone})`}</p>
                                <p>{`${user.email}`}</p>
                            </div>
                        }
                        return "";
                    })}
                </div>
            </div>
            <div className="w-1/2 h-full">
                <div className="w-full h-1/2 max-h-1/2 overflow-y-auto overflow-x-hidden scrollbar-css">
                    {choose.map((user) => {
                        return <div key={user.id} className="w-full hover:bg-gray-200 p-2.5 font-semibold relative">
                            <p className="mb-0.5">{`${user.firstName} ${user.lastName} (${user.phone})`}</p>
                            <p>{`${user.email}`}</p>
                            <span onClick={() => removeChoose(user)} className=" bx bxs-trash-alt absolute top-1/2 right-1
                            text-red-600 transform -translate-y-1/2 text-2xl"></span>
                        </div>
                    })}
                </div>
                <div className="w-full " style={{ height: "38%" }}>
                    <button onClick={() => setMode(!mode)} className={`mb-2 px-5 py-2 bg-yellow-500 text-white font-bold`}>
                        Random
                    </button>
                    {mode && <RamdomUserGiveVoucher />}
                    <div className="w-full my-2 text-right">
                        <button onClick={() => {
                            if (mode) {
                                giveVoucher(userRandom)
                            }
                            else {
                                randomCheck();
                            }
                        }} className={`w-full py-2.5 rounded-lg ${choose.length === 0 && userRandom.length === 0 ? 'bg-gray-600 cursor-not-allowed' :
                            'focus:border-blue-600 bg-green-600'} text-white 
                            font-semibold`}
                            disabled={choose.length === 0 && userRandom.length === 0 ? true : false}>
                            Tặng voucher
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
