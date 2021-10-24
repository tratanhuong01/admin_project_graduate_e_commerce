import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SupportLiveLeft from "../../components/SupportLive/SupportLiveLeft/SupportLiveLeft";
import SupportLiveRight from "../../components/SupportLive/SupportLiveRight/SupportLiveRight";
import api from "../../Utils/api";
import not_message from "../../assets/images/not_message.jpg";
function SupportLiveScreen(props) {
  //
  const [messages, setMessagesData] = useState(null);
  const [index, setIndex] = useState(0);
  const [send, setSend] = useState(false);
  const { user, socket, headers } = useSelector((state) => {
    return {
      user: state.user,
      socket: state.socket,
      headers: state.headers,
    };
  });
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      try {
        const result = await api(
          `messages/${user.id}`,
          "GET",
          Object.assign(headers, {
            "Access-Control-Allow-Origin": "*",
          })
        );
        if (unmounted) return;
        setMessagesData(result.data);
      } catch (error) {
        throw error;
      }
    }
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [send]);
  useEffect(() => {
    //
    let unmounted = false;
    socket.on(`receiveMessage.${user.id}`, (data) => {
      async function fetch() {
        const result = await api(
          `messages/${user.id}`,
          "GET",
          null,
          Object.assign(headers, {
            "Access-Control-Allow-Origin": "*",
          })
        );
        if (unmounted) return;
        setMessagesData(result.data);
      }
      fetch();
    });
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);
  //
  return (
    <div
      className="w-full p-3 flex my-3"
      style={{ height: "calc(100vh - 100px)" }}
    >
      {messages ? (
        messages.length > 0 ? (
          <>
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
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={not_message}
              alt=""
              className="w-1/3 mx-auto object-cover"
            />
          </div>
        )
      ) : (
        <div className="w-full flex items-center justify-center h-full">
          <i className="fas fa-circle-notch fa-spin text-4xl text-organce"></i>
        </div>
      )}
    </div>
  );
}

export default SupportLiveScreen;
