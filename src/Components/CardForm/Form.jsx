import React, { useState } from "react";

const Form = ({ getCardDetails, toggle }) => {
  const [initialData, setInitialData] = useState({
    name: {
      value: "",
      error: false,
    },
    number: {
      value: "",
      error: false,
    },
    month: {
      value: "",
      error: false,
    },
    year: {
      value: "",
      error: false,
    },
    cvc: {
      value: "",
      error: false,
    },
  });
  const [cardNumberError, setCardNumberError] = useState("");
  //   const [monthErrorMsg, setMonthErrorMsg] = useState("");
  //   const [yearErrorMsg, setYearErrorMsg] = useState("");

  const handleInputs = (e) => {
    const key = e.target.name;
    let value = e.target.value;

    if (key === "month" || key === "year") {
      setInitialData({
        ...initialData,
        [key]: { ...[key], value: value.slice(0, 2) },
      });
    } else if (key === "cvc") {
      setInitialData({
        ...initialData,
        [key]: { ...[key], value: value.slice(0, 3) },
      });
    } else setInitialData({ ...initialData, [key]: { ...[key], value } });
  };

  const hanldeCardNumberInput = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    const cleanedValue = value
      .replace(/\s/g, "")
      .replace(/_/g, "")
      .replace(/[^\w\s]/g, "");
    let formattedValue = "";
    let blank = " ";

    if (/[a-zA-Z]/.test(value)) {
      setCardNumberError("Wrong format, numbers only");
      setInitialData({
        ...initialData,
        [key]: { ...[key], value: value.slice(0, 19), error: true },
      });
    } else {
      for (let i = 0; i < cleanedValue.length; i++) {
        if (i > 0 && i % 4 === 0) {
          formattedValue += blank;
        }

        formattedValue += cleanedValue[i];
      }

      setInitialData({
        ...initialData,
        [key]: { ...[key], value: formattedValue.slice(0, 19) },
      });
    }
  };


  const handleBlur = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    const error = true;

    if (value === "") {
      if (key === "number") {
        setCardNumberError("Can't be blank");
        setInitialData({ ...initialData, [key]: { ...[key], value, error } });
      }

      //   else if (key === "month") {
      //     setMonthErrorMsg("Can't be blank");
      //     setInitialData({ ...initialData, [key]: { ...[key], value, error } });
      //   }
      setInitialData({ ...initialData, [key]: { ...[key], error } });
    }
  };

  const confirmNumberLen = () => {
    if (initialData?.number?.value?.length < 19) {
      setCardNumberError("Card number must be upto 16 digits");
      setInitialData({
        ...initialData,
        number: {
          ...initialData.number,
          error: true,
        },
      });
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSubmit = {
      name: initialData.name.value,
      number: initialData.number.value,
      month: initialData.month.value,
      year: initialData.year.value,
      cvc: initialData.cvc.value,
    };

    const allFilled = Object.values(initialData)
      .map((field) => field.value !== "")
      .every((field) => field === true);

    const allPassed = Object.values(initialData)
      .map((field) => field.error)
      .every((err) => err === false || err === undefined);

    if (allFilled && confirmNumberLen() && allPassed) {
      toggle();
      getCardDetails(dataToSubmit);
    }
  };

  return (
    <form action="" onSubmit={handleSubmit}>
    <label htmlFor="name" className="font-semibold">
    Card Details Form Design Using ReactJs By ASBichi (Abdulkadir Shehu Bichi)
  </label>
      <div className="flex flex-col w-full ">
        <div className="flex flex-col my-2">
          <label htmlFor="name" className="font-semibold">
            CARDHOLDER NAME
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="e.g Jane Appleseed"
            value={initialData.name.value || ""}
            onBlur={handleBlur}
            onChange={handleInputs}
            className="border border-gray-300 w-full md:w-3/4 p-2 outline-none focus:border-[#bd5454] rounded-md mt-1"
          />
          {initialData.name.error && (
            <p className="mt-1 text-xs text-red-500">Can't be blank</p>
          )}
        </div>
        <div className="relative flex flex-col my-2">
          <label htmlFor="number" className="font-semibold">
            CARD NUMBER
          </label>
          <input
            type="text"
            id="number"
            name="number"
            placeholder="e.g 1234 5678 9123 0000"
            value={initialData.number.value || ""}
            onChange={hanldeCardNumberInput}
            onBlur={handleBlur}
            className="border border-gray-300 w-full md:w-3/4 p-2 outline-none focus:border-[#bd5454]  rounded-md mt-1"
          />
          {initialData.number.error && (
            <p className="text-xs mt-1 text-red-500">{cardNumberError}</p>
          )}
        </div>
        <div className="relative flex flex-row gap-x-10 w-full md:w-3/4 items-center">
          <div className="flex flex-col w-1/2">
            <label htmlFor="month" className="font-semibold">
              EXP. DATE {`(MM/YY)`}
            </label>

            <div className="flex flex-row gap-x-3 w-full items-center">
              <div className="flex flex-col w-1/2">
                <input
                  type="number"
                  min={1}
                  max={12}
                  maxLength={2}
                  id="month"
                  name="month"
                  placeholder="MM"
                  value={initialData.month.value || ""}
                  onChange={handleInputs}
                  onBlur={handleBlur}
                  className="border border-gray-300  p-2 outline-none focus:border-[#bd5454]  rounded-md mt-1"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <input
                  type="number"
                  id="year"
                  name="year"
                  min={1}
                  max={30}
                  maxLength={2}
                  placeholder="YY"
                  value={initialData.year.value || ""}
                  onChange={handleInputs}
                  onBlur={handleBlur}
                  className="border border-gray-300 p-2 outline-none focus:border-[#bd5454]  rounded-md mt-1"
                />
              </div>
            </div>
            {(initialData.month.error || initialData.year.error) && (
              <p className="absolute -bottom-4 text-xs text-red-500">
                {/* {monthErrorMsg || yearErrorMsg} */}
                Can't be blank
              </p>
            )}
          </div>
          <div className="relative flex flex-row w-1/2 items-center">
            <div className="flex flex-col w-full my-2">
              <label htmlFor="cvc" className="font-semibold">
                CVC
              </label>
              <input
                type="number"
                id="cvc"
                name="cvc"
                min={100}
                max={999}
                maxLength={3}
                placeholder="CVC"
                value={initialData.cvc.value || ""}
                onChange={handleInputs}
                onBlur={handleBlur}
                className="border border-gray-300 w-full p-2 outline-none focus:border-[#bd5454]  rounded-md mt-1"
              />
            </div>
            {initialData.cvc.error && (
              <p className="absolute -bottom-4 text-xs text-red-500">
                Can't be blank
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col my-5">
          <input
            type="submit"
            value="Confirm"
            className="bg-gray-800 active:bg-gray-700 text-gray-200 w-full md:w-3/4 p-2 rounded-md mt-1"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
