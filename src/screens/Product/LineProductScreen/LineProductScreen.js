import React from "react";
import CrudCategoryModal from "../../../components/CrudCategoryModal/CrudCategoryModal";
import Control from "../../../components/Index/IndexRight/General/Control/Control";
import Date from "../../../components/Index/IndexRight/General/Date/Date";
import FileDown from "../../../components/Index/IndexRight/General/FileDown/FileDown";
import LineProductTable from "../../../components/Table/LineProductTable/LineProductTable";
import Table from "../../../components/Table/Table";
import { useNotModal } from "../../../hooks/useNotModal";
import Screen from "../../Screen";
import feature from "./feature";

function LineProductScreen(props) {
  //
  const { category } = useNotModal(feature.nameTable);
  //
  return (
    <Screen>
      <div className="w-full flex py-2 relative">
        <div className="mr-10 flex">
          <p className="text-2xl font-bold flex items-center">
            {feature.label}
          </p>
        </div>
        <div className="w-auto flex items-center justify-end">
          <Date />
          <FileDown />
          <CrudCategoryModal
            feature={feature}
            params={{
              full: `?userType=0`,
              limit: `?userType=0&limit=${10}&offset=${0}`,
            }}
            add={true}
            edit={true}
            remove={true}
          />
        </div>
      </div>
      <Control type={feature.type} data={feature} />
      <Table category={category} feature={feature}>
        <LineProductTable feature={feature} category={category} />
      </Table>
    </Screen>
  );
}

export default LineProductScreen;
