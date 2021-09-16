import React, { useEffect } from "react";
import ContentChatRight from "./ContentChatRight/ContentChatRight";
import ContentChatTop from "./ContentChatTop/ContentChatTop";
import ControlChatRight from "./ControlChatRight/ControlChatRight";

function SupportLiveRight(props) {
  //
  const { message } = props;
  useEffect(() => {}, [message]);
  //
  return (
    <div className="w-2/3 h-full flex pl-4 flex-col">
      <ContentChatTop message={message} />
      <ContentChatRight message={message} />
      <ControlChatRight message={message} />
    </div>
  );
}

export default SupportLiveRight;
