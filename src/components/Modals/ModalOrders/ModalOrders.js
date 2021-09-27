import React, { useEffect, useState } from "react";
import api from "../../../Utils/api";
import CloseModal from "../../CloseModal/CloseModal";
import ContentOrderLeft from "./ContentOrderLeft/ContentOrderLeft";
import ContentOrderRight from "./ContentOrderRight/ContentOrderRight";

function ModalOrders(props) {
  //
  const { data } = props;
  const [order, setOrder] = useState(null);
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await api(`bills/${data.id}`, "GET", null);
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
    <div
      className={`w-3/4 rounded-lg p-1 absolute top-1/2 left-1/2 transform -translate-y-1/2 
    -translate-x-1/2 bg-white animate__animated animate__fadeIn`}
      style={{ height: "90vh", maxHeight: "90vh" }}
    >
      <div className="w-full relative h-full">
        <div className="w-full sticky top-0 p-3 text-center text-2xl font-semibold">
          Xử lí hóa đơn
          <CloseModal />
        </div>
        {order ? (
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
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ModalOrders;
