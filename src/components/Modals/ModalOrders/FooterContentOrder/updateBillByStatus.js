import api from "../../../../Utils/api";

export default function updateBillByStatus({ status, headers, user, reason }) {
  switch (status) {
    case -2:
      return api(
        `notifies`,
        "POST",
        {
          id: null,
          userNotify: user,
          nameNotify: "Đơn hàng của bạn đã bị từ chối",
          url: null,
          image:
            "https://cf.shopee.vn/file/fed467fc00192be487e1aa69720a432d_tn",
          description:
            "🌀 Chúng tôi nhận thấy đơn hàng của bạn có vấn đề : " +
            reason +
            " 🌀",
          timeCreated: null,
          isRead: 0,
        },
        headers
      );
    case 1:
      return api(
        `notifies`,
        "POST",
        {
          id: null,
          userNotify: user,
          nameNotify: "Đơn hàng của bạn đã được xử lí",
          url: null,
          image:
            "https://cf.shopee.vn/file/fed467fc00192be487e1aa69720a432d_tn",
          description:
            "🌀 Bên cửa hàng đang giao sản phẩm đến bên vận chuyển 🌀",
          timeCreated: null,
          isRead: 0,
        },
        headers
      );

    case 2:
      return api(
        `notifies`,
        "POST",
        {
          id: null,
          userNotify: user,
          nameNotify: "Đơn hàng của bạn đang được bên vận chuyển giao hàng",
          url: null,
          image:
            "https://cf.shopee.vn/file/fed467fc00192be487e1aa69720a432d_tn",
          description:
            "🌀 Vui lòng gửi liên lạc để bên vận chuyển giao hàng đúng tiến độ 🌀",
          timeCreated: null,
          isRead: 0,
        },
        headers
      );

    case 3:
      return api(
        `notifies`,
        "POST",
        {
          id: null,
          userNotify: user,
          nameNotify: "Đơn hàng của bạn đã thành công",
          url: null,
          image:
            "https://cf.shopee.vn/file/fed467fc00192be487e1aa69720a432d_tn",
          description:
            "🌀 Cảm ơn bạn đã mua hàng . Mọi thắc mặc xin liên hệ với chúng tôi qua chat hổ trợ hoặc 0354114665 🌀",
          timeCreated: null,
          isRead: 0,
        },
        headers
      );

    case 4:
      return api(
        `notifies`,
        "POST",
        {
          id: null,
          userNotify: user,
          nameNotify: "Đơn hàng của bạn không thành công",
          url: null,
          image:
            "https://cf.shopee.vn/file/fed467fc00192be487e1aa69720a432d_tn",
          description:
            "🌀 Có vẻ như " +
            reason +
            " . Mọi thắc mặc xin liên hệ với chúng tôi qua chat hổ trợ hoặc 0354114665 🌀",
          timeCreated: null,
          isRead: 0,
        },
        headers
      );

    default:
  }
}
