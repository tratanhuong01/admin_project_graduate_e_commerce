import React, { createRef, useEffect } from "react";
import ContentChatRight from "./ContentChatRight/ContentChatRight";
import ContentChatTop from "./ContentChatTop/ContentChatTop";
import ControlChatRight from "./ControlChatRight/ControlChatRight";

function SupportLiveRight(props) {
  //
  const { message, send, setSend } = props;
  useEffect(() => {}, [message]);
  const ref = createRef(null);
  const scrollBottomContent = () => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  };
  //
  return (
    <div className="w-2/3 h-full flex pl-4 flex-col">
      <ContentChatTop message={message} />
      <ContentChatRight
        ref={ref}
        message={message}
        scrollBottomContent={scrollBottomContent}
      />
      <ControlChatRight
        refData={ref}
        message={message}
        send={send}
        setSend={setSend}
        scrollBottomContent={scrollBottomContent}
      />
    </div>
  );
}

export default SupportLiveRight;
