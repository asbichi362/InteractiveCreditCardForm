import React from "react";

const Front = ({ data }) => {
  const { name, number, month, year } = data;
  const formattedMonth = month?.length < 2 ? `0${month}` : month;
  const formattedYear = year?.length < 2 ? `0${year}` : year;

  //   const bg = {
  //     background: "linear-gradient(164deg, #6348FE 4.74%, #610595 88.83%)",
  //   };

  return (
    <div className="w-3/4 px-7  flex flex-col rounded-lg bg-[164deg] shadow-lg bg-gradient-to-br from-fuchsia-800 from-20% via-orange-700 to-indigo-700 to-90% pt-5 h-[200px]">
      <div className="flex flex-row w-full items-center">
        <div className="w-[30px] h-[30px] bg-white rounded-full"></div>
        <div className="w-[15px] h-[15px] mx-2 border border-white rounded-full"></div>
      </div>
      <div className="flex flex-col w-full mt-[50px] text-white text-base md:text-2xl">
        <div className="w-full flex flex-row justify-between">
          <p className="">{number?.slice(0, 4) || `0000`}</p>
          <p className="">{number?.slice(5, 9) || `0000`}</p>
          <p className="">{number?.slice(10, 14) || `0000`}</p>
          <p className="">{number?.slice(15, 19) || `0000`}</p>
        </div>
      </div>
      <div className="flex flex-row mt-4 items-center justify-between">
        <p className="text-white text-sm">
          {name?.toUpperCase() || `JANE APPLESEED`}
        </p>
        <p className="text-white text-sm">
          {formattedMonth || `00`}/{formattedYear || `00`}
        </p>
      </div>
    </div>
  );
};

export default Front;
