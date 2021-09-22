import React from "react";
import ButtonAddCustom from "../../components/Index/IndexRight/General/ButtonAddCustom/ButtonAddCustom";
import Control from "../../components/Index/IndexRight/General/Control/Control";
import Date from "../../components/Index/IndexRight/General/Date/Date";
import FileDown from "../../components/Index/IndexRight/General/FileDown/FileDown";
import Table from "../../components/Table/Table";
import UserTable from "../../components/Table/UserTable/UserTable";
import Screen from "../Screen";
import feature from "./feature";
import { useHaveModal } from "../../hooks/useHaveModal";
function UserScreen(props) {
  //
  const category = useHaveModal(feature.nameTable, {
    full: `?type=${0}`,
    limit: `?type=${0}&limit=${10}&offset=${0}`,
  });
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
            {feature.add && <ButtonAddCustom table={feature.nameTable} />}
          </div>
        </div>
        <Control type={feature.type} data={feature} />
        <Table category={category} feature={feature}>
          <UserTable feature={feature} category={category} />
        </Table>
      </Screen>
    </>
  );
}

export default UserScreen;
