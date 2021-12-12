import { Editor } from "react-draft-wysiwyg";
import React, { useEffect, useRef, useState } from "react";
import InputConfigScreen from "../InputConfigScreen/InputConfigScreen";
import { convertFromRaw, convertToRaw, EditorState } from "draft-js";
import * as crudApi from "../../../api/crudApi";
import { useSelector } from "react-redux";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draft";
import api from "../../../Utils/api";

function IntroduceWebsite(props) {
  //
  const ref = useRef(null);
  const headers = useSelector((state) => state.headers);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [intro, setIntro] = useState(null);
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await api(
        `configWebsites/type/${0}`,
        "GET",
        null,
        headers
      );
      if (unmounted) return;
      if (ref && ref.current)
        ref.current.children[0].style.maxHeight =
          ref.current.offsetHeight + "px";
      setEditorState(
        EditorState.createWithContent(
          convertFromRaw(htmlToDraft(JSON.parse(result.data.content).data))
        )
      );
      setIntro(result.data);
    }
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const submit = async () => {
    let data = intro;
    data.content = JSON.stringify({
      data: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
    await crudApi.addData(data, "configWebsites", headers);
    alert("Cập nhật thành công")
  };
  //
  return (
    <>
      <InputConfigScreen />
      <div ref={ref} className="w-full flex-1 flex items-center justify-center">
        <div className="w-full h-full overflow-y-auto scrollbar-css">
          <Editor
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
            editorState={editorState}
            onEditorStateChange={(editorState) => setEditorState(editorState)}
            handlePastedTextt={() => false}
          />
        </div>
      </div>
      <button
        onClick={() => submit()}
        className="w-full mt-3 p-3 rounded-lg bg-organce text-white"
      >
        Cập nhật
      </button>
    </>
  );
}

export default IntroduceWebsite;
