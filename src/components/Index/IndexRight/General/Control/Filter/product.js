import * as productApi from "../../../../../../api/productsApi";
import * as userApi from "../../../../../../api/userApi";
import api from "../../../../../../Utils/api";
export const queryFilterProduct = async (filter, headers) => {
  const brands = await productApi.getBrandsAll(headers);
  const roms = await productApi.getMemoriesAll(headers);
  const rams = await productApi.getRamsAll(headers);
  const colors = await productApi.getColorsAll(headers);
  const categories = await productApi.getCategoryProductsAll(headers);
  const groups = await productApi.getGroupProductsAll(headers);
  let clone = [...filter];
  let index = -1;
  index = clone.findIndex((item) => item.id === "PRODUCT_FILTER_CATEGORY");
  let count = 0;
  if (index !== -1) {
    categories.data.forEach((element) => {
      filter[index].data.push({
        id: count,
        idFilter: "PRODUCT_FILTER_CATEGORY",
        nameFilter: "Danh mục sản phẩm",
        name: element.nameCategoryProduct,
        query: `category=${element.id}`,
      });
      count++;
    });
    count++;
  }
  index = -1;
  index = clone.findIndex((item) => item.id === "PRODUCT_FILTER_GROUP");
  if (index !== -1) {
    count = 0;
    groups.data.forEach((element) => {
      filter[index].data.push({
        id: count,
        idFilter: "PRODUCT_FILTER_GROUP",
        nameFilter: "Nhóm sản phẩm",
        name: element.nameGroupProduct,
        query: `group=${element.id}`,
      });
      count++;
    });
  }
  index = -1;
  index = clone.findIndex((item) => item.id === "PRODUCT_FILTER_COLOR");
  if (index !== -1) {
    count = 0;
    colors.data.forEach((element) => {
      filter[index].data.push({
        id: count,
        idFilter: "PRODUCT_FILTER_COLOR",
        nameFilter: "Màu sắc",
        name: element.description,
        query: `color=${element.id}`,
      });
      count++;
    });
  }
  index = -1;
  index = clone.findIndex((item) => item.id === "PRODUCT_FILTER_RAM");
  if (index !== -1) {
    count = 0;
    rams.data.forEach((element) => {
      filter[index].data.push({
        id: count,
        idFilter: "PRODUCT_FILTER_RAM",
        nameFilter: "Bộ nhớ ngoài",
        name: element.nameRam,
        query: `ram=${element.id}`,
      });
      count++;
    });
  }
  index = -1;
  index = clone.findIndex((item) => item.id === "PRODUCT_FILTER_MEMORY");
  if (index !== -1) {
    count = 0;
    roms.data.forEach((element) => {
      filter[index].data.push({
        id: count,
        idFilter: "PRODUCT_FILTER_MEMORY",
        nameFilter: "Bộ nhớ trong",
        name: element.nameMemory,
        query: `rom=${element.id}`,
      });
      count++;
    });
  }
  index = -1;
  index = clone.findIndex((item) => item.id === "PRODUCT_FILTER_BRAND");
  if (index !== -1) {
    count = 0;
    brands.data.forEach((element) => {
      filter[index].data.push({
        id: count,
        idFilter: "PRODUCT_FILTER_BRAND",
        nameFilter: "Thương hiệu",
        name: element.nameBrand,
        query: `brand=${element.id}`,
      });
      count++;
    });
  }
  return clone;
};

export const queryFilterLineproduct = async (filter, headers) => {
  const brands = await productApi.getBrandsAll(headers);
  const groups = await productApi.getGroupProductsAll(headers);
  let clone = [...filter];
  let index = -1;
  let count = 0;
  index = clone.findIndex((item) => item.id === "LINE_PRODUCT_FILTER_GROUP");
  if (index !== -1) {
    count = 0;
    groups.data.forEach((element) => {
      filter[index].data.push({
        id: count,
        idFilter: "LINE_PRODUCT_FILTER_GROUP",
        nameFilter: "Nhóm sản phẩm",
        name: element.nameGroupProduct,
        query: `group=${element.id}`,
      });
      count++;
    });
  }
  index = -1;
  index = clone.findIndex((item) => item.id === "LINE_PRODUCT_FILTER_BRAND");
  if (index !== -1) {
    count = 0;
    brands.data.forEach((element) => {
      filter[index].data.push({
        id: count,
        idFilter: "LINE_PRODUCT_FILTER_BRAND",
        nameFilter: "Thương hiệu",
        name: element.nameBrand,
        query: `brand=${element.id}`,
      });
      count++;
    });
  }
  return clone;
};

export const queryFilterNews = async (filter, headers) => {
  const user = await userApi.getUser("WRITER", headers);
  const categoryNews = await api(`categoryNews`, "GET", null, headers);
  let clone = [...filter];
  let index = -1;
  let count = 0;
  index = clone.findIndex((item) => item.id === "NEWS_FILTER_1");
  if (index !== -1) {
    count = 0;
    user.data.forEach((element) => {
      filter[index].data.push({
        id: count,
        idFilter: "NEWS_FILTER_1",
        nameFilter: "Người đăng",
        name: `${element.firstName} ${element.lastName}`,
        query: `poster=${element.id}`,
      });
      count++;
    });
  }
  index = -1;
  count = 0;
  index = clone.findIndex((item) => item.id === "NEWS_FILTER_2");
  if (index !== -1) {
    count = 0;
    categoryNews.data.forEach((element) => {
      filter[index].data.push({
        id: count,
        idFilter: "NEWS_FILTER_2",
        nameFilter: "Danh mục tin tức",
        name: element.nameCategoryNews,
        query: `category=${element.id}`,
      });
      count++;
    });
  }
  return clone;
};
