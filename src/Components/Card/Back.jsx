import React from "react";

const Back = ({ cvc }) => {
  return (
    <div className=" md:relative w-3/4 rounded-lg shadow-lg bg-white pt-5 h-[200px]">
      <div className="w-full bg-gray-800 h-[40px]"></div>
      <div className="w-3/4 bg-gray-400 mx-auto flex flex-col items-end justify-center rounded-md h-[40px] mt-5">
        <p className="text-gray-200  text-sm pr-2">{cvc || `000`}</p>
      </div>
    </div>
  );
};

export default Back;
