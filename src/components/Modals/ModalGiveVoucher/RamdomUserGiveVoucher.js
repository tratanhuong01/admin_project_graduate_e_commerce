import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux';
import { GiveVoucherContext } from '../../../contexts/GiveVoucherContext/GiveVoucherContext';
import api from '../../../Utils/api';

export default function RamdomUserGiveVoucher() {
    //
    const { updateUserRandom } = useContext(GiveVoucherContext);
    const { headers, category } = useSelector(state => {
        return {
            headers: state.headers,
            category: state.category
        }
    });
    const [number, setNumber] = useState(1);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const checkDiscountCode = () => {
        let result = true;
        category.choose.forEach(element => {
            if (element.amount < number || new Date(element.timeExpired) < new Date()) {
                result = false;
            }
        });
        return result;
    }
    const [content, setContent] = useState(null);
    const randomCheck = async () => {
        setLoading(true);
        if (checkDiscountCode()) {
            const result = await api(`checkAllVoucherValid?amount=${number}`, "GET", null, headers);
            if (result.data) {
                updateUserRandom(result.data);
                setContent(result.data.length);
                setError(null)
            }
            else {
                setError("Có thể voucher đã hết hạn hoặc số lượng ramdom lớn hơn số lượng người dùng và voucher !! ")
                setContent(null)
            }
        }
        else {
            setError("Có thể voucher đã hết hạn hoặc số lượng ramdom lớn hơn số lượng người dùng và voucher !! ")
            setContent(null)
        }
        setLoading(false);
    }
    //
    return (
        <div className="w-full" style={{ height: "calc(100% - 28px)", maxHeight: "calc(100% - 28px)" }}>
            <div className="flex w-full mb-2">
                <input className="w-2/3 p-2.5 border-2 border-gray-200 border-solid focus:border-blue-600"
                    placeholder="Số lượng.." type="text" value={number} onChange={event => setNumber(isNaN(event.target.value) ? '' : Number(event.target.value))} />
                <button onClick={randomCheck} className={`p-2.5 ${number && !loading ? 'bg-green-500' : 'bg-gray-500 cursor-not-allowed'}
                 w-1/3 ml-5 text-white border-none`} disabled={loading}>
                    {loading ? <i className="fas fa-circle-notch fa-spin text-sm text-white"></i> : "Ramdom"}
                </button>
            </div>
            {error && <p className="mb-2 text-red-500 font-semibold">{error}</p>}
            {content && <p className="mb-2 text-green-500 font-semibold">{content} khách hàng đa được chọn</p>}
        </div>
    )
}
