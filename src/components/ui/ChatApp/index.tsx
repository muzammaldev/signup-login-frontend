import React from "react";
import { FaUser } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

type Props = {};

const ChatApp = (props: Props) => {
  return (
    <div className=" bg-gray-200 w-full h-[calc(100vh-10vh)] relative">
      <h2 className="bg-green-200 w-fit px-4 py-1 shadow-sm absolute top-4 left-14 xs:left-2">
        Hello World
      </h2>

      <h2 className="bg-green-200 w-fit px-4 py-1 shadow-sm absolute bottom-24 right-14 xs:right-2">
        Hello Hi
      </h2>
      <div className="absolute bottom-0 w-full">
        <div className=" pt-2 relative">
          <input
            type="text"
            className=" px-4 py-2 w-full border outline-none"
            placeholder="Your message"
          />
          <span className="absolute top-[9px] text-3xl right-0 bg-gray-300 hover:bg-green-400 transition-all duration-500 px-3 py-[5px]">
            <IoIosSend />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
