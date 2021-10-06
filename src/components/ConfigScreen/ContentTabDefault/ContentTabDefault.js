import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import BannerTopSell from "../BannerTopSell/BannerTopSell";
import ContactInfo from "../ContactInfo/ContactInfo";
import InputConfigScreen from "../InputConfigScreen/InputConfigScreen";
import IntroduceWebsite from "../IntroduceWebsite/IntroduceWebsite";
import LogoImage from "../LogoImage/LogoImage";
import PopupIndex from "../PopupIndex/PopupIndex";
import SlideIndex from "../SlideIndex/SlideIndex";
import * as configDatasAction from "../../../actions/configData/index";
function ContentTabDefault(props) {
  //
  const ref = useRef(null);
  const data = [
    {
      icon: "fab fa-pied-piper",
      title: "Giới thiệu",
      color: "text-gray-600",
      type: "",
      content: <IntroduceWebsite />,
    },
    {
      icon: "fab fa-pied-piper",
      title: "Banner",
      color: "text-green-600",
      type: "",
      content: <BannerTopSell />,
    },
    {
      icon: "fab fa-pied-piper",
      title: "Hộp thoại khuyến mãi",
      color: "text-red-600",
      type: "",
      content: <PopupIndex />,
    },
    {
      icon: "fab fa-pied-piper",
      title: "Logo",
      color: "text-indigo-600",
      type: "",
      content: <LogoImage />,
    },
    {
      icon: "fab fa-pied-piper",
      title: "Slide trang chủ",
      color: "text-yellow-600",
      type: "",
      content: <SlideIndex />,
    },
    {
      icon: "fab fa-pied-piper",
      title: "Liên hệ",
      color: "text-blue-600",
      type: "",
      content: <ContactInfo />,
    },
  ];
  const config = useSelector((state) => state.config);
  const dispatch = useDispatch();
  useEffect(() => {
    //
    if (ref && ref.current) {
      ref.current.children[0].style.height = ref.current.offsetHeight + "px";
    }
    //
  }, [ref]);
  //
  return (
    <>
      <InputConfigScreen />
      <div ref={ref} className="w-full bg-gray-100 flex-1 ">
        <div className="w-full flex items-center justify-center flex-wrap">
          {data.map((item, pos) => {
            return (
              <div
                onClick={() => {
                  let clone = config.tabs;
                  clone[config.index].content = item.content;
                  clone[config.index].title = item.title;
                  dispatch(configDatasAction.updateTabs([...clone]));
                }}
                key={pos}
                className="w-44 m-2"
              >
                <div className="w-20 h-20 mx-auto rounded-full border-2 border-solid border-gray-300 shadow-lg justify-center flex items-center">
                  <i className={`${item.icon} text-5xl ${item.color}`} />
                </div>
                <p className="font-semibold text-gray-800 text-center my-2">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ContentTabDefault;
