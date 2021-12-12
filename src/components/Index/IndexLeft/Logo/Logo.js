import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DASHBOARD } from "../../../../constants/Config";
import api from "../../../../Utils/api";
//
function Logo({ show }) {
  //
  const [info, setInfo] = useState(null);
  useEffect(() => {
    //
    let unmounted = false;
    const fetch = async () => {
      const result = await api(`configWebsites/type/${1}`, 'GET', null, {});
      if (unmounted) return;
      if (result.data) {
        setInfo(JSON.parse(result.data.content).data);
      }
    }
    fetch();
    return () => {
      unmounted = false;
    }
    //
  }, []);
  return (
    <div
      className={`w-full text-xl font-bold flex border-solid border-gray-300 py-2 px-6 
      justify-center bg-white relative h-14 z-50 ${show ? " -ml-5  lg:h-auto" : ""
        }`}
    >
      <Link to={DASHBOARD}>
        <img
          src={info}
          className={` ${show ? "w-52 h-20 object-contain" : "w-24 object-cover"
            } cursor-pointer`}
          alt=""
        />
      </Link>
    </div>
  );
}

export default Logo;
