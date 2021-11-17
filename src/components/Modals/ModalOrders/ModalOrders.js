import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as orderApi from "../../../api/orderApi";
import ModalWrapper from "../ModalWrapper";
import ContentOrderLeft from "./ContentOrderLeft/ContentOrderLeft";
import ContentOrderRight from "./ContentOrderRight/ContentOrderRight";
import FooterContentOrder from "./FooterContentOrder/FooterContentOrder";

function ModalOrders(props) {
  //
  const { data } = props;
  const [order, setOrder] = useState(null);
  const headers = useSelector((state) => state.headers);
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await orderApi.getBillById(data.id, headers);
      if (unmounted) return;
      setOrder(result.data);
    }
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <ModalWrapper
      title="Hoá Đơn"
      className={`w-3/4 rounded-t-lg py-1 absolute top-1/2 left-1/2 transform -translate-y-1/2 
      -translate-x-1/2 bg-white animate__animated animate__fadeIn`}
      styleChildren={{ height: "85vh", maxHeight: "85vh" }}
    >
      <div className="w-full relative h-full">
        {order ? (
          <div
            className="w-full"
            style={{
              height: "calc(100%)",
              maxHeight: "calc(100%)",
            }}
          >
            <div
              className="w-full flex overflow-y-auto scrollbar-css "
              style={{
                height: "calc(100% - 60px )",
                maxHeight: "calc(100% - 60px )",
              }}
            >
              <ContentOrderLeft order={order} />
              <ContentOrderRight order={order} />
            </div>
            <FooterContentOrder order={order} />
          </div>
        ) : (
          ""
        )}
      </div>
    </ModalWrapper>
  );
}

export default ModalOrders;
