import React from "react";
import { Editor } from "react-draft-wysiwyg";

function TabWriteContent(props) {
  //
  const { editorState, setEditorState } = props;
  //
  return (
    <div
      className="w-full overflow-y-auto scrollbar-css"
      style={{ height: "calc(100% - 100px)", maxHeight: "calc(100% - 100px)" }}
    >
      <Editor
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        editorState={editorState}
        onEditorStateChange={(editorState) => setEditorState(editorState)}
        handlePastedTextt={() => false}
      />
    </div>
  );
}

export default TabWriteContent;
