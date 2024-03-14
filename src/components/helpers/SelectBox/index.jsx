import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import useToggle from "../../../hooks/useToggle";


function SelectBox({ datas = [], className, action, contentBodyClasses }) {
  const [item, setItem] = useState(datas[0]);
  const [toggle, setToggle] = useToggle(false);
  const handler = (e, value) => {
    e.preventDefault();
    if (action) {
      action(value);
    }
    setItem(value);
    setToggle.set(false);
  };
  return (
    <>
      {datas.length > 0 && (
        <div
          className={`drop-down-com relative cursor-pointer ${className || ""}`}
        >
          <div
            onClick={() => setToggle.toggle()}
            className="flex space-x-1 items-center"
          >
            <span className="text-sm text-thin-light-gray">{item}</span>
            <span className="text-[#374557] dark:text-thin-light-gray">
              <ChevronDown />
            </span>
          </div>
          {toggle && (
            <div
              onClick={() => setToggle.toggle()}
              className="w-full h-screen fixed top-0 left-0 z-10"
            ></div>
          )}

          <div
            style={{ boxShadow: "0px 4px 87px 0px #0000002B" }}
            className={`drop-down-content w-[120px] bg-white dark:bg-dark-white   rounded-[4px] p-3 absolute right-0 top-[100%] z-20 ${
              toggle ? "active" : ""
            } ${contentBodyClasses || ""}`}
          >
            <ul className="flex flex-col space-y-3">
              {datas.map((value) => (
                <li
                  key={value}
                  onClick={(e) => handler(e, value)}
                  className="text-thin-light-gray tracking-wide text-sm cursor-pointer"
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default SelectBox;
