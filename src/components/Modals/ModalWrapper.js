import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_LOADING_MODAL } from "../../constants/ActionTypes";
import CloseModal from "../CloseModal/CloseModal";

function ModalWrapper(props) {
  //
  const modal = useSelector((state) => state.modal);
  const {
    className,
    style,
    title,
    children,
    addEvent,
    styleChildren,
    Component,
    data,
    notHeader,
    fixed,
  } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    //
    dispatch({ type: SET_LOADING_MODAL, loading: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <div className={className} style={style}>
      <div className="w-full relative rounded-lg bg-white dark:bg-dark-second z-50">
        {!notHeader && (
          <div className="w-full fixed top-0 bg-white dark:bg-dark-third z-50 h-16 flex items-center justify-center rounded-lg">
            {data ? (
              <Component setIndex={data.setData} index={data.data} />
            ) : (
              <p className="text-2xl font-bold dark:text-white">{title}</p>
            )}
            <CloseModal fixed={fixed} addEvent={addEvent} />
            <hr />
          </div>
        )}
        <div
          className={`w-full ${
            notHeader ? "" : "pt-16"
          } relative overflow-x-hidden overflow-y-auto scrollbar-css`}
          style={styleChildren}
        >
          {children}
          {modal.loading && (
            <div
              className="w-full h-full fixed top-0 left-0 bg-opacity-60 z-40
            bg-white dark:bg-dark-second"
            >
              <div className="w-full h-full relative flex items-center justify-center">
                <i className="fas fa-circle-notch fa-spin rounded-full cursor-pointer text-5xl text-organce"></i>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ModalWrapper;
