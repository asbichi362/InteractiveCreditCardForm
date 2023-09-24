import { Icon } from "@iconify/react";
//import confirmIcon from "@iconify/icons-line-md/confirm";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Confirmation = ({ toggle, emptyCard }) => {
  const performActions = () => {
    toggle();
    emptyCard();
  };
  return (
    <div className="flex flex-col w-full md:w-3/4 text-center">
      <div className="w-full">
        <div className="mx-auto flex flex-col items-center justify-center rounded-full w-[50px] h-[50px] bg-gradient-to-b from-purple-600 to-purple-800">
          <Fade>
            <Icon  color="white" width={24} />
          </Fade>
        </div>
      </div>
      <p className="text-3xl my-4">THANK YOU!</p>
      <p className="text-gray-500 mb-5">We've added your card details</p>
      <input
        onClick={performActions}
        type="button"
        value="Continue"
        className="bg-gray-900 active:bg-gray-700 text-gray-200 p-2 w-full rounded-md"
      />
    </div>
  );
};

export default Confirmation;
