import React from "react";
import NotModalTop from "../../components/Index/IndexRight/Category/NotModal/NotModalTop/NotModalTop";
import RamTable from "../../components/Table/RamTable/RamTable";
import Table from "../../components/Table/Table";
import { useNotModal } from "../../hooks/useNotModal";
import Screen from "../Screen";
import feature from "./feature";

function RamScreen(props) {
  //
  const { category, form } = useNotModal(feature.nameTable);
  //
  return (
    <Screen>
      <div className="w-full flex py-2 relative">
        <div className="mr-10 flex">
          <p className="text-2xl font-bold flex items-center">
            {feature.label}
          </p>
        </div>
      </div>
      <div className="w-full py-3">
        <div className="w-full flex">
          <div className="w-2/5">{form.data}</div>
          <div className="w-3/5">
            <NotModalTop category={category} table={feature.nameTable} />
            <Table category={category} feature={feature}>
              <RamTable category={category} feature={feature} />
            </Table>
          </div>
        </div>
      </div>
    </Screen>
  );
}

export default RamScreen;
