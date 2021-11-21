export const removeVietnameseTones = (str) => {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str
    .normalize("NFD") // chuyển chuỗi sang unicode tổ hợp
    .replace(/[\u0300-\u036f]/g, ""); // xóa các ký tự dấu sau khi tách tổ hợp

  // Thay ký tự đĐ
  str = str.replace(/[đĐ]/g, "d");

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, "");

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, "-");

  // Xóa ký tự - liên tiếp
  str = str.replace(/-+/g, "-");

  // xóa phần dư - ở đầu & cuối
  str = str.replace(/^-+|-+$/g, "");

  // return
  return str;
};

export const formatDateTime = (date) => {
  const today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  hour = hour < 10 ? `0${hour}` : hour;
  min = min < 10 ? `0${min}` : min;
  sec = sec < 10 ? `0${sec}` : sec;
  return `${date} ${hour}:${min}:${sec}`;
};

export const formatDateTimeCustom = (date) => {
  return date.split("T")[0] + " " + date.split("T")[1] + ":00";
};

export const formatDateTimeCustomReturn = (date) => {
  const arr = date.split(" ")[0].split("-");
  const day = arr[2];
  const month = arr[1];
  const year = arr[0];
  return (
    `${year}-${month}-${day}` +
    "T" +
    date.split(" ")[1].split(":")[0] +
    ":" +
    date.split(" ")[1].split(":")[1]
  );
};

export const formatDateTimeBack = (date) => {
  const arr = date.split(" ")[0].split("-");
  const day = arr[1];
  const month = arr[0];
  const year = arr[2];
  return `${year}/${month}/${day}`;
};

export const formatDateTimeBack2 = (date) => {
  const arr = date.split(" ")[0].split("-");
  const day = arr[0];
  const month = arr[1];
  const year = arr[2];
  return `${year}/${month}/${day}`;
};

export const formatDateTimeBackInput = (date) => {
  const arr = date.split(" ")[0].split("-");
  const day = arr[1];
  const month = arr[2];
  const year = arr[0];
  return `${year}-${month}-${day}`;
};

export const formatDateTimeMain = (date) => {
  const arr = date.split(" ");
  const day = arr[0].split("-")[2];
  const month = arr[0].split("-")[1];
  const year = arr[0].split("-")[0];
  return `${day}/${month}/${year} ${arr[1]}`;
};
