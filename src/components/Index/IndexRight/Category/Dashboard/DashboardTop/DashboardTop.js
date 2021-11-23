import React, { useState } from 'react'
import DatePicker from 'sassy-datepicker';

export default function DashboardTop(props) {
    //
    const { setDate } = props;
    const dataStatics = [{
        id: 0,
        name: "Hôm nay",
        query: "?day=0",
    }, {
        id: 1,
        name: "Hôm qua",
        query: "?day=1",
    },
    {
        id: 2,
        name: "7 ngày trước",
        query: "?day=7",
    },
    {
        id: 3,
        name: "Tháng này",
        query: "?day=30",
    },
    {
        id: 4,
        name: "Tháng trước",
        query: "?day=60",
    },
    {
        id: 5,
        name: "Tuỳ chỉnh",
        query: "",
    }];
    const [dateMain, setDateMain] = useState({
        dateFrom: null,
        dateTo: null
    });
    const [active, setActive] = useState(0);
    const [show, setShow] = useState();
    const [content, setContent] = useState(dataStatics[0].name);
    const isValidDate = (date) => {
        return date instanceof Date && !isNaN(date);
    }
    const checkDate = (dateFrom, dateTo) => {
        const dateFromCP = new Date(dateFrom);
        const dateToCP = new Date(dateTo);
        if (isValidDate(dateFromCP) && isValidDate(dateToCP))  // d.valueOf() could also work
            if (dateFromCP.getTime() < dateToCP.getTime())
                return true;
        return false;
    }
    const createDate = (date, operator) => {
        const dateConvert = new Date(date);

        return ((dateConvert.getDate() > 9) ? dateConvert.getDate() : ('0' + dateConvert.getDate()))
            + operator + ((dateConvert.getMonth() > 8) ? (dateConvert.getMonth() + 1) :
                ('0' + (dateConvert.getMonth() + 1))) + operator + dateConvert.getFullYear();
    };
    const createDateQuery = (date, operator) => {
        const dateConvert = new Date(date);
        return dateConvert.getFullYear() + operator + ((dateConvert.getMonth() > 8) ? (dateConvert.getMonth() + 1) :
            ('0' + (dateConvert.getMonth() + 1))) + operator + ((dateConvert.getDate() > 9)
                ? dateConvert.getDate() : ('0' + dateConvert.getDate()))
    }
    //
    return (
        <div className="pb-3 flex justify-between items-center">
            <span className="text-2xl font-bold">Tổng quan</span>
            <div className="w-60 relative">
                <div onClick={() => setShow(!show)} className="w-60 p-2.5 border-blue-600 bg-white border-2 border-solid shadow-lg cursor-pointer 
                flex justify-between items-center">
                    <span>{content}</span>
                    <i className='bx bx-chevron-down'></i>
                </div>
                {show &&
                    <div className="absolute top-full mt-1 py-2 border-2 border-solid border-gray-300 rounded-lg 
                    shadow-lg flex right-0 bg-white" style={{ width: 770 }}>
                        <div className="w-1/4">
                            {dataStatics.map((item) =>
                            (
                                <div onClick={() => {
                                    if (item.id === 5) {

                                    }
                                    else {
                                        setContent(item.name)
                                        setShow(false);
                                        setDate(item.query);
                                    }
                                    setActive(item.id)
                                }} key={item.id} className={`cursor-pointer p-2.5 mb-1 font-semibold ${active === item.id ?
                                    'bg-blue-600 text-white' : 'hover:bg-blue-600 hover:text-white'} text-sm`}>
                                    {item.name}
                                </div>
                            ))}
                        </div>
                        <div className="w-3/4 ml-5">
                            <div className="w-full flex justify-between">
                                <div className="mr-2 w-1/2 text-sm">
                                    <DatePicker
                                        onChange={(date) => setDateMain({ ...dateMain, dateFrom: date.toString() })}
                                        selected={dateMain.dateFrom ? new Date(dateMain.dateFrom) : new Date()}
                                    />
                                </div>
                                <div className=" w-1/2 text-sm" >
                                    <DatePicker
                                        onChange={(date) => setDateMain({ ...dateMain, dateTo: date.toString() })}
                                        selected={dateMain.dateTo ? new Date(dateMain.dateTo) : new Date()}
                                    />
                                </div>
                            </div>
                            <div className="my-2 flex justify-end">
                                <div>
                                    <button onClick={() => setShow(false)} className="px-5 py-2 rounded-lg bg-gray-400 text-white mr-3">
                                        Huỷ
                                    </button>
                                    <button onClick={() => {
                                        if (checkDate(dateMain.dateFrom, dateMain.dateTo)) {
                                            setContent(`${createDate(dateMain.dateFrom, '/')} -> ${createDate(dateMain.dateTo, '/')}`)
                                            setShow(false);
                                            setDate(`?dateFrom=${createDateQuery(dateMain.dateFrom, '-')}&dateTo=${createDateQuery(dateMain.dateTo, '-')}`)
                                        }
                                        else {
                                            alert("Ngay khong hop le");
                                        }
                                    }} className={`px-5 py-2 rounded-lg ${active === 5 ? 'bg-organce' : 'bg-gray-700 cursor-not-allowed'} text-white mr-3`}
                                        disabled={active === 5 ? false : true}>
                                        Áp dụng
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>}
            </div>
        </div >
    )
}
