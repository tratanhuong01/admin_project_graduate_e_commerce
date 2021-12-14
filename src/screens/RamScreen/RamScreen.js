import React from "react";
import NotModalTop from "../../components/Index/IndexRight/Category/NotModal/NotModalTop/NotModalTop";
import RowRamTable from "../../components/Table/RowRomTable/RowRamTable";
import Table from "../../components/Table/Table";
import TableMain from "../../components/Table/TableMain/TableMain";
import { useNotModal } from "../../hooks/useNotModal";
import Screen from "../Screen";
import ScreenNotModalWrapper from "../ScreenNotModalWrapper";
import feature from "./feature";

function RamScreen(props) {
  //
  const { category, form } = useNotModal(feature.nameTable);
  //
  return (
    <Screen>
      <ScreenNotModalWrapper title={feature.label}>
        <div className="w-2/5">{form.data}</div>
        <div className="w-3/5">
          <NotModalTop category={category} table={feature.nameTable} />
          <Table category={category} feature={feature}>
            <TableMain feature={feature} category={category} numRow={3}>
              {category.list &&
                category.list.map((item, index) => {
                  return (
                    <RowRamTable
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
        </div>
      </ScreenNotModalWrapper>
    </Screen >
  );
}

export default RamScreen;
