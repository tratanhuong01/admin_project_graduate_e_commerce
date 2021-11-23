import React from 'react'
import { GiveVoucherProvider } from '../../../contexts/GiveVoucherContext/GiveVoucherContext';
import ModalWrapper from '../ModalWrapper'
import ContentGiveVoucher from './ContentGiveVoucher';

export default function ModalGiveVoucher(props) {

    return (
        <GiveVoucherProvider>
            <ModalWrapper
                title={`Tặng voucher`}
                className={`w-3/5 rounded-t-md absolute top-1/2 left-1/2 transform -translate-y-1/2 
                -translate-x-1/2 bg-white animate__animated animate__fadeIn`}
                styleChildren={{ height: "80vh", overflow: "hidden" }}
            >
                <ContentGiveVoucher />
            </ModalWrapper>
        </GiveVoucherProvider>
    )
}
