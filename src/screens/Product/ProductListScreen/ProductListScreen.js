import React from "react";
import CrudCategoryModal from "../../../components/CrudCategoryModal/CrudCategoryModal";
import Control from "../../../components/Index/IndexRight/General/Control/Control";
import Date from "../../../components/Index/IndexRight/General/Date/Date";
import FileDown from "../../../components/Index/IndexRight/General/FileDown/FileDown";
import RowProductTable from "../../../components/Table/RowProductTable/RowProductTable";
import Table from "../../../components/Table/Table";
import TableMain from "../../../components/Table/TableMain/TableMain";
import { useHaveModal } from "../../../hooks/useHaveModal";
import Screen from "../../Screen";
import feature from "./feature";

function ProductListScreen(props) {
  //
  const category = useHaveModal(
    feature.nameTable + "Filters",
    {
      full: `?`,
      limit: `?&limit=${10}&offset=${0}`,
    },
    true
  );
  //
  return (
    <>
      <Screen>
        <div className="w-full flex py-2 relative">
          <div className="mr-10 flex">
            <p className="text-2xl font-bold flex items-center">
              {feature.label}
            </p>
          </div>
          <div className="w-auto flex items-center justify-end">
            <Date table={feature.nameTable} query={{
              full: `?productType=0`,
              limit: `?productType=0&limit=${10}&offset=${0}`,
            }} />
            <FileDown />
            <CrudCategoryModal
              feature={feature}
              params={{
                full: `?productType=0`,
                limit: `?productType=0&limit=${10}&offset=${0}`,
              }}
              add={true}
              edit={true}
              remove={true}
            />
          </div>
        </div>
        <Control type={feature.type} data={feature} table={feature.nameTable} />
        <Table category={category} feature={feature} modal={true}>
          <TableMain feature={feature} category={category} numRow={14}>
            {category.list &&
              category.list.map((item, index) => {
                return (
                  <RowProductTable
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
    </>
  );
}

export default ProductListScreen;
