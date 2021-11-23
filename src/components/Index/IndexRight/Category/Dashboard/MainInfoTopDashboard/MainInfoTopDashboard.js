import React, { useEffect, useState } from 'react'
import DashboardTop from '../DashboardTop/DashboardTop';
import ItemDashboarEveryDay from '../ItemDashboarEveryDay/ItemDashboarEveryDay';
import { useSelector } from 'react-redux';
import api from '../../../../../../Utils/api';

export default function MainInfoTopDashboard(props) {
    //
    const [infos, setInfos] = useState([]);
    const headers = useSelector((state) => state.headers);
    const [date, setDate] = useState('?day=0');
    useEffect(() => {
        //
        let unmounted = false;
        async function fetch() {
            const result = await api(`getDashboardHeader${date}`, "GET", null, headers);
            if (unmounted) return;
            setInfos([
                {
                    id: 0,
                    icon: "bx bx-user",
                    label: "Lượt đăng kí",
                    bgColorFrom: "from-yellow-400",
                    bgColorTo: "to-yellow-700",
                    number: result.data.totalRegister,
                },
                {
                    id: 1,
                    icon: "bx bx-detail",
                    label: "Hóa đơn",
                    bgColorFrom: "from-green-400",
                    bgColorTo: "to-green-700",
                    number: result.data.totalBill,
                },
                {
                    id: 2,
                    icon: "bx bx-money",
                    label: "Doanh thu",
                    bgColorFrom: "from-purple-400",
                    bgColorTo: "to-purple-700",
                    number: result.data.totalRevenue,
                },
                {
                    id: 3,
                    icon: "bx bxl-shopify",
                    label: "Sản phẩm đã bán",
                    bgColorFrom: "from-pink-400",
                    bgColorTo: "to-pink-600",
                    number: result.data.totalSold,
                },
                {
                    id: 4,
                    icon: "bx bx-money",
                    label: "Lợi nhuận",
                    bgColorFrom: "from-gray-400",
                    bgColorTo: "to-gray-600",
                    number: result.data.totalProfit,
                },
            ]);
        }
        fetch();
        return () => {
            unmounted = true;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [date]);
    //
    return (
        <>
            <DashboardTop date={date} setDate={setDate} />
            <ul className="w-full flex flex-wrap">
                {infos.map((item, index) => {
                    return <ItemDashboarEveryDay item={item} key={index} />;
                })}
            </ul>
        </>
    )
}
