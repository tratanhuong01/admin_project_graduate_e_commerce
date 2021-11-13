import api from "../../../../Utils/api";

export default function sendMailByStatus(dataMail) {
  console.log(dataMail);
  const { status, email, idOrder, reason, headers } = dataMail;
  let dataSendMail;
  switch (status) {
    case -2:
      dataSendMail = {
        email: email,
        topic: `Đơn hàng ${idOrder} đã bị từ chối . <br/>`,
        content: `Lý do : ${reason}`,
      };
      break;
    case 1:
      dataSendMail = {
        email: email,
        topic: `Đơn hàng ${idOrder}`,
        content: `Đơn hàng #${idOrder} đã được xử lí vui lòng chờ bên cửa hàng đi giao sản phẩm cho bên vận chuyển vui lòng 
        giữ liên lạc  . <br/>`,
      };
      break;
    case 2:
      dataSendMail = {
        email: email,
        topic: `Đơn hàng ${idOrder}`,
        content: `Đơn hàng #${idOrder} đã được giao cho đơn vị vận chuyển . Vui lòng giữ liên lạc để có thể nhận hàng đúng tiến độ . <br/>`,
      };
      break;
    case 3:
      dataSendMail = {
        email: email,
        topic: `Đơn hàng ${idOrder}`,
        content: `Đơn hàng #${idOrder} đã được giao thành công . <br/>`,
      };
      break;
    case 4:
      dataSendMail = {
        email: email,
        topic: `Đơn hàng ${idOrder}`,
        content: `Đơn hàng #${idOrder} đã thất bại. <br/>`,
      };
      break;
    default:
      break;
  }
  return dataSendMail
    ? api(
        "sendMailContacts",
        "POST",
        dataSendMail,
        Object.assign(headers, { "Content-Type": "application/json" })
      )
    : null;
}
