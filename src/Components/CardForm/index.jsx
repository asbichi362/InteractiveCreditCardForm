import React, { useState } from "react";
import Form from "./Form";
import Confirmation from "../Confirmation";
import { Fade } from "react-awesome-reveal";

const CardFormIndex = ({ getCardDetails, emptyCard }) => {
  const [visibility, setVisibility] = useState(false);

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };
  return (
    <div className="flex flex-col justify-center py-5 px-4 w-full md:w-2/4">
      {!visibility && (
        <Fade>
          <Form getCardDetails={getCardDetails} toggle={toggleVisibility} />
        </Fade>
      )}
      {visibility && (
        <Fade>
          <Confirmation toggle={toggleVisibility}
          emptyCard={emptyCard}
          />
        </Fade>
      )}
    </div>
  );
};

export default CardFormIndex;
