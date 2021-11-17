import React from "react";
import CrudCategoryModal from "../../../components/CrudCategoryModal/CrudCategoryModal";
import Control from "../../../components/Index/IndexRight/General/Control/Control";
import Date from "../../../components/Index/IndexRight/General/Date/Date";
import FileDown from "../../../components/Index/IndexRight/General/FileDown/FileDown";
import RowLineProductTable from "../../../components/Table/RowLineProductTable/RowLineProductTable";
import Table from "../../../components/Table/Table";
import TableMain from "../../../components/Table/TableMain/TableMain";
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
          <Date table={feature.nameTable} query={{
            full: `?lineProductType=0`,
            limit: `?productType=0&limit=${10}&offset=${0}`,
          }} />
          <FileDown />
          <CrudCategoryModal
            feature={feature}
            params={{
              full: `?lineProductType=0`,
              limit: `?lineProductType=0&limit=${10}&offset=${0}`,
            }}
            add={true}
            edit={true}
            remove={true}
          />
        </div>
      </div>
      <Control type={feature.type} data={feature} table={feature.nameTable} />
      <Table category={category} feature={feature} modal={true}>
        <TableMain feature={feature} category={category} numRow={12}>
          {category.list &&
            category.list.map((item, index) => {
              return (
                <RowLineProductTable
                  item={item}
                  key={index}
                  category={category}
                  index={index}
                  feature={feature}
                />
              );
            })}
        </TableMain>
      </Table>
    </Screen>
  );
}

export default LineProductScreen;
