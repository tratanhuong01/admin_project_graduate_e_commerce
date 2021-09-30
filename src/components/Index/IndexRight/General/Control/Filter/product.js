import * as productApi from "../../../../../../api/productsApi";

export const queryFilterProduct = async (filter) => {
  const brands = await productApi.getBrandsAll();
  const roms = await productApi.getMemoriesAll();
  const rams = await productApi.getRamsAll();
  const colors = await productApi.getColorsAll();
  const categories = await productApi.getCategoryProductsAll();
  const groups = await productApi.getGroupProductsAll();
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

export const queryFilterLineproduct = async (filter) => {
  const brands = await productApi.getBrandsAll();
  const groups = await productApi.getGroupProductsAll();
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
