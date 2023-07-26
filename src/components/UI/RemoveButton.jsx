import React from "react";
import { FaMinus } from "react-icons/fa";

const RemoveButton = () => {
  return (
    <span className="bg-zinc-200/50 border w-7 h-7 text-center flex justify-center items-center text-sm rounded-full hover:bg-red-600/70 hover:shadow-2xl hover:text-white text-red-600/30"> 
      <FaMinus className="w-3 h-3 "/>
    </span>
  );
};

export default RemoveButton;
