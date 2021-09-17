import React, { forwardRef, useEffect } from "react";
import ItemChat from "./ItemChat/ItemChat";

function ContentChatRight(props, refData) {
  //
  const { message, scrollBottomContent } = props;
  useEffect(() => {
    scrollBottomContent();
  }, [scrollBottomContent]);
  //
  return (
    <div
      ref={refData}
      className="w-full flex-1 flex items-start py-5 flex-col overflow-y-auto 
    scrollbar-css"
    >
      {message.messagesList.map((item, index) => {
        if (item.userMessages)
          return <ItemChat key={index} type={1} item={item} />;
        else return <ItemChat key={index} type={0} item={item} />;
      })}
    </div>
  );
}

export default forwardRef(ContentChatRight);
