import React from "react";
import { useSelector } from "react-redux";
import ButtonCustom from "../Index/IndexRight/General/ButtonCustom/ButtonCustom";

function CrudCategoryModal(props) {
  //
  const { feature, params, add, edit, remove } = props;
  const category = useSelector((state) => state.category);
  //
  return (
    <div className="absolute -right-2 flex">
      {edit && category.choose.length === 1 && (
        <ButtonCustom
          table={feature.nameTable}
          bgColor="bg-gray-600"
          content={"Sửa"}
          type={1}
          icon="bx bx-edit"
          params={params}
        />
      )}
      {remove && category.choose.length > 0 && (
        <ButtonCustom
          table={feature.nameTable}
          bgColor="bg-red-500"
          content={"Xóa"}
          type={2}
          icon="bx bxs-trash"
          params={params}
        />
      )}
      {add && (
        <ButtonCustom
          table={feature.nameTable}
          bgColor="bg-organce"
          content={"Thêm"}
          type={0}
          icon="bx bx-plus"
        />
      )}
    </div>
  );
}

export default CrudCategoryModal;
