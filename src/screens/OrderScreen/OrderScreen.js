import React from "react";
import CrudCategoryModal from "../../components/CrudCategoryModal/CrudCategoryModal";
import Control from "../../components/Index/IndexRight/General/Control/Control";
import Date from "../../components/Index/IndexRight/General/Date/Date";
import FileDown from "../../components/Index/IndexRight/General/FileDown/FileDown";
import RowOrderTable from "../../components/Table/RowOrderTable/RowOrderTable";
import Table from "../../components/Table/Table";
import TableMain from "../../components/Table/TableMain/TableMain";
import { useHaveModal } from "../../hooks/useHaveModal";
import Screen from "../Screen";
import feature from "./feature";

function OrderScreen(props) {
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
            <Date />
            <FileDown />
            <CrudCategoryModal
              feature={feature}
              params={{
                full: `?`,
                limit: `?&limit=${10}&offset=${category.index}`,
              }}
              add={false}
              edit={true}
              remove={false}
            />
          </div>
        </div>
        <Control type={feature.type} data={feature} table={feature.nameTable} />
        <Table category={category} feature={feature} modal={true}>
          <TableMain feature={feature} category={category} numRow={12}>
            {category.list &&
              category.list.map((item, index) => {
                return (
                  <RowOrderTable
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

export default OrderScreen;
