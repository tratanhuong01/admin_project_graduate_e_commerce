import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SupportLiveLeft from "../../components/SupportLive/SupportLiveLeft/SupportLiveLeft";
import SupportLiveRight from "../../components/SupportLive/SupportLiveRight/SupportLiveRight";
import api from "../../Utils/api";

function SupportLiveScreen(props) {
  //
  const [messages, setMessagesData] = useState([]);
  const [index, setIndex] = useState(0);
  const [send, setSend] = useState(false);
  const socket = useSelector((state) => state.socket);
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await api(`messages/${"3000000000"}`, "GET", {
        "Access-Control-Allow-Origin": "*",
      });
      if (unmounted) return;
      setMessagesData(result.data);
    }
    fetch();
    return () => {
      unmounted = true;
    };
    //
  }, [send]);
  useEffect(() => {
    //
    let unmounted = false;
    socket.on(`receiveMessage.${"3000000000"}`, (data) => {
      console.log("revice");
      async function fetch() {
        const result = await api(`messages/${"3000000000"}`, "GET", {
          "Access-Control-Allow-Origin": "*",
        });
        if (unmounted) return;
        setMessagesData(result.data);
      }
      fetch();
    });
    return () => {
      socket.disconnect();
      unmounted = true;
    };
    //
  }, [socket]);
  //
  return (
    messages.length > 0 && (
      <div
        className="w-full p-3 flex my-3"
        style={{ height: "calc(100vh - 100px)" }}
      >
        <SupportLiveLeft
          messages={messages}
          setIndex={setIndex}
          index={index}
        />
        <SupportLiveRight
          message={messages[index]}
          send={send}
          setSend={setSend}
        />
      </div>
    )
  );
}

export default SupportLiveScreen;
