/* eslint-disable react/prop-types */

import { IoSunny } from "react-icons/io5";
import { IoIosPartlySunny } from "react-icons/io";
import { IoCloudy } from "react-icons/io5";

const ComponentSelector = ({ parameter }) => {
  const renderComponents = (param) => {
    switch (param) {
      case "clear-day":
        return <IoSunny />;
      case "partly-cloudy-day":
        return <IoIosPartlySunny />;
      case "cloudy-day":
        return <IoCloudy />;
      default:
        return (
          <div>
            <h1>Data Not Available</h1>
          </div>
        );
    }
  };
  return <div>{renderComponents(parameter)}</div>;
};

export default ComponentSelector;
