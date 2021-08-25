export const API_URL = "http://localhost:3333";
export const PAGE_ADMIN = "/admin";
export const REGEX_NUMBER_PHONE =
  /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;

export const USER = `${PAGE_ADMIN}/khach-hang`;
export const PRODUCT = `${PAGE_ADMIN}/san-pham`;
export const DASHBOARD = `${PAGE_ADMIN}/tong-quan`;
export const BILL = `${PAGE_ADMIN}/don-hang`;
export const LIST_PRODUCT = `${PAGE_ADMIN}/${PRODUCT}/danh-sach-san-pham`;
export const LINE_PRODUCT = `${PAGE_ADMIN}/${PRODUCT}/dong-san-pham`;
export const GROUP_PRODUCT = `${PAGE_ADMIN}/${PRODUCT}/nhom-san-pham`;
export const CATEGORY_PRODUCT = `${PAGE_ADMIN}/${PRODUCT}/danh-muc-san-pham`;
export const COLOR = `${PAGE_ADMIN}/danh-muc/mau-sac`;
export const BRAND = `${PAGE_ADMIN}/danh-muc/thuong-hieu`;
export const MEMORY = `${PAGE_ADMIN}/danh-muc/bo-nho`;
