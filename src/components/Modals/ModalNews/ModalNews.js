import React, { useEffect, useState } from "react";
import { convertFromRaw, EditorState } from "draft-js";
// import {  convertToRaw } from "draft-js";
// import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draft";
import CloseModal from "../../CloseModal/CloseModal";
import api from "../../../Utils/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ValidForm from "./ValidForm";
import TabInfoNews from "./TabInfoNews/TabInfoNews";
import TabWriteContent from "./TabWriteContent/TabWriteContent";
function ModalNews(props) {
  //
  const { data } = props;
  const [categoryNewsList, setCategoryNewsList] = useState([]);
  const [editorState, setEditorState] = useState(
    data
      ? EditorState.createWithContent(convertFromRaw(htmlToDraft(data.content)))
      : EditorState.createEmpty()
  );
  const [index, setIndex] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    mode: "all",
    resolver: yupResolver(ValidForm),
    shouldUnregister: false,
  });
  useEffect(() => {
    let unmounted = false;
    async function fetch() {
      const categoryNewsAPI = await api("categoryNews", "GET", null);
      if (unmounted) return;
      setCategoryNewsList(categoryNewsAPI.data);
    }
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <div
      className={`w-3/4 rounded-lg p-1 absolute top-1/2 left-1/2 transform -translate-y-1/2 
      -translate-x-1/2 bg-white animate__animated animate__fadeIn`}
      style={{ height: "90vh", maxHeight: "90vh" }}
    >
      <div className="w-full relative h-full">
        <div className="w-full sticky top-0 p-3 text-center text-2xl font-semibold">
          {data ? "Sửa" : "Thêm"} bài viết
          <CloseModal />
        </div>
        <div
          className="w-full overflow-y-auto scrollbar-css flex bg-white overflow-x-hidden"
          style={{ height: "calc(90vh - 70px)" }}
        >
          <form
            onSubmit={handleSubmit((data) => console.log(data))}
            className="w-4/5 mx-auto my-2 flex flex-wrap items-center"
          >
            {index === 0 && (
              <TabInfoNews
                data={data}
                register={register}
                errors={errors}
                setValue={setValue}
                categoryNewsList={categoryNewsList}
                getValues={getValues}
              />
            )}
            {index === 1 && (
              <TabWriteContent
                data={data}
                editorState={editorState}
                setEditorState={setEditorState}
              />
            )}
            {/* <div className="w-full my-2 post">
              {draftToHtml(convertToRaw(editorState.getCurrentContent()))}
            </div> */}
            <div className="w-full flex mt-6">
              <button
                onClick={() => setIndex(index - 1)}
                type="button"
                className="w-1/2 px-10 mr-5 py-3 rounded-full bg-gray-500 text-white font-bold my-2"
                disabled={index === 0 ? true : false}
              >
                Trở lại
              </button>
              <button
                onClick={() => {
                  if (index === 1) return;
                  setIndex(index + 1);
                }}
                type={index === 1 ? "submit" : "button"}
                className="w-1/2 px-10 py-3 ml-5 rounded-full bg-green-500 text-white font-bold my-2"
              >
                {index !== 1 ? "Tiếp tục" : data ? "Sửa" : "Thêm"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalNews;
