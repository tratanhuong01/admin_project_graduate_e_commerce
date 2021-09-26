import React from "react";
import ButtonCustom from "../../components/Index/IndexRight/General/ButtonCustom/ButtonCustom";
import Control from "../../components/Index/IndexRight/General/Control/Control";
import Date from "../../components/Index/IndexRight/General/Date/Date";
import FileDown from "../../components/Index/IndexRight/General/FileDown/FileDown";
import NewsTable from "../../components/Table/NewsTable/NewsTable";
import Table from "../../components/Table/Table";
import { useHaveModal } from "../../hooks/useHaveModal";
import Screen from "../Screen";
import feature from "./feature";

function NewsScreen(props) {
  //
  const category = useHaveModal(
    feature.nameTable + "Filters",
    {
      full: `?`,
      limit: `?limit=${10}&offset=${0}`,
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
            <div className="absolute -right-2 flex">
              {category.choose.length === 1 && (
                <ButtonCustom
                  table={feature.nameTable}
                  bgColor="bg-organce"
                  content={"Sửa"}
                  type={1}
                  icon="bx bx-edit"
                  params={{
                    full: `?`,
                    limit: `?limit=${10}&offset=${0}`,
                  }}
                />
              )}
              {category.choose.length > 0 && (
                <ButtonCustom
                  table={feature.nameTable}
                  bgColor="bg-red-500"
                  content={"Xóa"}
                  type={2}
                  icon="bx bxs-trash"
                  params={{
                    full: `?`,
                    limit: `?limit=${10}&offset=${0}`,
                  }}
                />
              )}
              <ButtonCustom
                table={feature.nameTable}
                bgColor="bg-blue-500"
                content={"Thêm"}
                type={0}
                icon="bx bx-plus"
              />
            </div>
          </div>
        </div>
        <Control type={feature.type} data={feature} table={feature.nameTable} />
        <Table category={category} feature={feature} modal={true}>
          <NewsTable
            feature={feature}
            category={category}
            table={feature.nameTable}
          />
        </Table>
      </Screen>
    </>
  );
}

export default NewsScreen;
