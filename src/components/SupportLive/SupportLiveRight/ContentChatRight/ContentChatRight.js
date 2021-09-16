import React, { useEffect, useRef } from "react";
import ItemChat from "./ItemChat/ItemChat";

function ContentChatRight(props) {
  //
  const { message } = props;
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [ref]);
  //
  return (
    <div
      ref={ref}
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

export default ContentChatRight;
