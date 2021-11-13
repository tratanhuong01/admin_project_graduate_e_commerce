import React from "react";
import NotModalTop from "../../components/Index/IndexRight/Category/NotModal/NotModalTop/NotModalTop";
import RowBrandTable from "../../components/Table/RowBrandTable/RowBrandTable";
import Table from "../../components/Table/Table";
import TableMain from "../../components/Table/TableMain/TableMain";
import WrapperLoadingNotModal from "../../components/WrapperLoadingNotModal/WrapperLoadingNotModal";
import { useNotModal } from "../../hooks/useNotModal";
import Screen from "../Screen";
import feature from "./feature";

function BrandScreen(props) {
  //
  const { category, form } = useNotModal(feature.nameTable);
  //
  return (
    <Screen>
      <div className="w-full flex py-2 relative">
        <p className="text-2xl font-bold flex items-center ml-10">
          {feature.label}
        </p>
      </div>
      <WrapperLoadingNotModal>
        <div className="w-2/5">{form.data}</div>
        <div className="w-3/5">
          <NotModalTop category={category} table={feature.nameTable} />
          <Table category={category} feature={feature}>
            <TableMain category={category} feature={feature}>
              {category.list &&
                category.list.map((item, index) => {
                  return (
                    <RowBrandTable
                      item={item}
                      key={index}
                      category={category}
                      index={index}
                    />
                  );
                })}
            </TableMain>
          </Table>
        </div>
      </WrapperLoadingNotModal>
    </Screen>
  );
}

export default BrandScreen;
