import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function DescriptionProduct(props) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const add = async () => {};
  return (
    <div
      className="w-11/12 mx-auto overflow-y-auto scrollbar-css"
      style={{
        height: 530,
        maxHeight: 530,
      }}
    >
      <Editor
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        editorState={editorState}
        onEditorStateChange={(editorState) => setEditorState(editorState)}
      />
      <button
        onClick={() => add()}
        className="w-full px-10 py-3 rounded-full bg-green-500 text-white font-bold my-2"
      >
        Thêm
      </button>
    </div>
  );
}

export default DescriptionProduct;
