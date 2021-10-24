import React from "react";
import Control from "../../components/Index/IndexRight/General/Control/Control";
import Date from "../../components/Index/IndexRight/General/Date/Date";
import FileDown from "../../components/Index/IndexRight/General/FileDown/FileDown";
import Table from "../../components/Table/Table";
import Screen from "../Screen";
import feature from "./feature";
import { useHaveModal } from "../../hooks/useHaveModal";
import TableMain from "../../components/Table/TableMain/TableMain";
import RowUserTable from "../../components/Table/RowUserTable/RowUserTable";
import CrudCategoryModal from "../../components/CrudCategoryModal/CrudCategoryModal";

function UserScreen(props) {
  //
  const category = useHaveModal(
    feature.nameTable + "Filters",
    {
      full: `?userType=${"CUSTOMER"}`,
      limit: `?userType=${"CUSTOMER"}&limit=${10}&offset=${0}`,
      type: `?userType=${"CUSTOMER"}`,
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
                full: `?userType=CUSTOMER`,
                limit: `?userType=CUSTOMER&limit=${10}&offset=${0}`,
                type: `?userType=${"CUSTOMER"}`,
              }}
              add={false}
              edit={false}
              remove={true}
            />
          </div>
        </div>
        <Control
          type={feature.type}
          data={feature}
          table={feature.nameTable}
          params={{
            full: `?userType=CUSTOMER`,
            limit: `?userType=CUSTOMER&limit=${10}&offset=${0}`,
            type: `userType=${"CUSTOMER"}`,
          }}
        />
        <Table
          category={category}
          feature={feature}
          modal={true}
          params={{
            full: `?userType=CUSTOMER`,
            limit: `?userType=CUSTOMER&limit=${10}&offset=${0}`,
            type: `userType=${"CUSTOMER"}`,
          }}
        >
          <TableMain feature={feature} category={category} numRow={13}>
            {category.list
              ? category.list.map((item, index) => {
                  return (
                    <RowUserTable
                      item={item}
                      key={index}
                      category={category}
                      index={index}
                      feature={feature}
                    />
                  );
                })
              : ""}
          </TableMain>
        </Table>
      </Screen>
    </>
  );
}

export default UserScreen;
