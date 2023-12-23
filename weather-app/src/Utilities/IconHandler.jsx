/* eslint-disable react/prop-types */
import { IoSunny } from "react-icons/io5";
import { IoIosPartlySunny } from "react-icons/io";
import { MdDewPoint } from "react-icons/md";
import { IoCloudy } from "react-icons/io5";
import { FaClock, FaSun } from "react-icons/fa";
import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { SiWindicss } from "react-icons/si";
import { FaArrowDownShortWide } from "react-icons/fa6";
import { LuSunMedium } from "react-icons/lu";
import { MdVisibility } from "react-icons/md";
import { LuSunset, LuSunrise } from "react-icons/lu";
import { FaFire } from "react-icons/fa";
import { ImCompass } from "react-icons/im";
import { BsCloudHazeFill } from "react-icons/bs";
import { MdSolarPower } from "react-icons/md";
import { FaRegSnowflake } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";
import { MdOutlineDescription } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdWatch } from "react-icons/io";
import { FaLocationCrosshairs } from "react-icons/fa6";
const ComponentSelector = ({ parameter }) => {
  const renderComponents = ({ parameter }) => {
    switch (parameter) {
      case "resolvedAddress":
        return <FaLocationCrosshairs />;
      case "Address":
        return <FaLocationCrosshairs />;
      case "timezone":
        return <IoMdWatch />;
      case "description":
        return <MdOutlineDescription />;
      case "search":
        return <FaMagnifyingGlass />;
      case "moonphase":
        return <IoMdMoon />;
      case "snow":
        return <FaRegSnowflake />;
      case "solarenergy":
        return <MdSolarPower />;
      case "cloudcover":
        return <BsCloudHazeFill />;
      case "winddir":
        return <ImCompass />;
      case "feelslike":
        return <FaFire />;
      case "datetime":
        return <FaClock />;
      case "dew":
        return <MdDewPoint />;
      case "uvindex":
        return <FaSun />;
      case "temp":
        return <FaTemperatureHigh />;
      case "humidity":
        return <WiHumidity />;
      case "windspeed":
        return <SiWindicss />;
      case "pressure":
        return <FaArrowDownShortWide />;
      case "solarradiation":
        return <LuSunMedium />;
      case "visibility":
        return <MdVisibility />;
      case "sunrise":
        return <LuSunrise />;
      case "sunset":
        return <LuSunset />;
      case "clear-day":
        return <IoSunny />;
      case "partly-cloudy-day":
        return <IoIosPartlySunny />;
      case "cloudy-day":
        return <IoCloudy />;
      default:
        return <strong className="text-white text-xl">{parameter}</strong>;
    }
  };
  return <div>{renderComponents({ parameter })}</div>;
};

export default ComponentSelector;
