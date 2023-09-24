import React, { useState } from "react";
import Card from "./Card";
import CardFormIndex from "./CardForm";

const Layout = () => {
  const [cardData, setCardData] = useState({});

  const getCardDetails = (details) => {
    setCardData(details);
  };

  const emptyCard = () => {
    setCardData({});
  };

  return (
    <div className="flex flex-col md:flex-row gap-x-[70px] w-full h-screen">
      <Card cardData={cardData} data={cardData} />
      <CardFormIndex getCardDetails={getCardDetails} 
      	emptyCard={emptyCard}
      />
    </div>
  );
};

export default Layout;
