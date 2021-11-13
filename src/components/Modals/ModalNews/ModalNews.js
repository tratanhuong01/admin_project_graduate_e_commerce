import React, { useEffect, useState } from "react";
import { convertFromRaw, EditorState } from "draft-js";
import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draft";
import * as newsApi from "../../../api/newsApi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ValidForm from "./ValidForm";
import TabInfoNews from "./TabInfoNews/TabInfoNews";
import TabWriteContent from "./TabWriteContent/TabWriteContent";
import * as StringUtils from "../../../Utils/StringUtils";
import { useDispatch, useSelector } from "react-redux";
import * as categorysAction from "../../../actions/category/index";
import * as modalsAction from "../../../actions/modals/index";
import ModalWrapper from "../ModalWrapper";
import { SET_LOADING_MODAL } from "../../../constants/ActionTypes";
import api from "../../../Utils/api";
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
  const [isFile, setIsFile] = useState(true);
  const { filters, headers, user } = useSelector((state) => {
    return {
      filters: state.filters,
      headers: state.headers,
      user: state.user,
    };
  });
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
      const categoryNewsAPI = await newsApi.getCategoryNews(headers);
      if (unmounted) return;
      setCategoryNewsList(categoryNewsAPI.data);
      if (data) {
        setValue("title", data.title);
        setValue("contentShort", data.describeSmall);
        setValue("thumbnailLink", data.thumbnail);
        setValue("categoryNews", data.categoryNews);
      }
    }
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const dispatch = useDispatch();
  const addNews = (dataForm) => {
    dispatch({ type: SET_LOADING_MODAL, loading: true });
    const news = {
      id: data ? data.id : null,
      userNews: data ? data.userNews : user,
      categoryNews: dataForm.categoryNews,
      title: dataForm.title,
      thumbnail: dataForm.thumbnailLink,
      describeSmall: dataForm.contentShort,
      timeCreated: data ? data.timeCreated : null,
      view: data ? data.view : 0,
      content: draftToHtml(convertToRaw(editorState.getCurrentContent())),
      slug: StringUtils.removeVietnameseTones(dataForm.title),
      commentCount: data ? data.commentCount : null,
    };
    const funcOther = async (idNews, news, headers) => {
      const formData = new FormData();
      formData.append("multipartFile", dataForm.thumbnailFile[0]);
      formData.append("id", `news__${idNews}`);
      formData.append("publicId", "E-Commerce/News/");
      const result = await api(
        "updateImageSingle",
        "POST",
        formData,
        Object.assign(headers, {
          "Content-Type": "multipart/form-data",
        })
      );
      let clone = { ...news };
      clone.id = idNews;
      clone.thumbnail = result.data.url;
      await api("news", "PUT", clone, headers);
    };
    dispatch(
      categorysAction.addCategoryRequest(
        news,
        "new",
        {
          full: `?`,
          limit: `?limit=${10}&offset=${0}`,
        },
        true,
        {
          filters: filters.choose,
          sorter: filters.sorter,
          search: filters.search,
        },
        headers,
        dataForm.thumbnailFile.length > 0 ? funcOther : null
      )
    );
    dispatch({ type: SET_LOADING_MODAL, loading: false });
    dispatch(modalsAction.closeModal());
  };
  //
  return (
    <ModalWrapper
      title={`${data ? "Sửa" : "Thêm"} bài viết`}
      className={`w-3/4 rounded-lg absolute top-1/2 left-1/2 transform -translate-y-1/2 
      -translate-x-1/2 bg-white animate__animated animate__fadeIn`}
    >
      <form
        onSubmit={handleSubmit(addNews)}
        className="w-4/5 mx-auto my-2 flex flex-wrap items-center h-full"
        style={{ height: "80vh", maxHeight: "80vh" }}
      >
        {index === 0 && (
          <TabInfoNews
            isFile={isFile}
            setIsFile={setIsFile}
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
            onClick={(event) => {
              if (index !== 1) event.preventDefault();
              setIndex(index + 1 > 1 ? 1 : index + 1);
            }}
            type={index === 1 ? "submit" : ""}
            className="w-1/2 px-10 py-3 ml-5 rounded-full bg-green-500 text-white font-bold my-2"
          >
            {index !== 1 ? "Tiếp tục" : data ? "Sửa" : "Thêm"}
          </button>
        </div>
      </form>
    </ModalWrapper>
  );
}

export default ModalNews;
