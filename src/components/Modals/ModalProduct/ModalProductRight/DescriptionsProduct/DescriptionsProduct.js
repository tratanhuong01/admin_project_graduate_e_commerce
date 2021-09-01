import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "../../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch, useSelector } from "react-redux";
import * as productsAction from "../../../../../actions/products/index";

function DescriptionProduct(props) {
  //
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  //
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
        editorState={products.descriptions}
        onEditorStateChange={(editorState) =>
          dispatch(productsAction.loadDescriptionProduct(editorState))
        }
      />
    </div>
  );
}

export default DescriptionProduct;
