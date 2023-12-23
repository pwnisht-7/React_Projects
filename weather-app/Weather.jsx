/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import Card from "./src/Components/Card";
import Form from "./src/Components/Form";
import PlaceDescriptionCard from "./src/Components/PlaceDescriptionCard";
import Navbar from "./src/Components/Navbar";
// import weather from "./src/Utilities/WeatherData";
import NewsContext from "./src/Context/NewsContext.js";
// import WeatherData from "./src/Utilities/WeatherData";
const Weather = () => {
  const {days,hour,detail,currentCondition} = useContext(NewsContext)
  console.log({days,hour,detail,currentCondition})
  return (
    <div className="px-32  bg-zinc-900">
      <div className="w-full bg-white">
        <Navbar />
      </div>
      <div className="flex flex-col items-center justify-center bg-white">
        <Form />
        <PlaceDescriptionCard
          address={detail.resolvedAddress}
          timezone={detail.timezone}
          description={detail.description}
          longitude={detail.longitude}
          latitude={detail.latitude}
        />
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
};

export default Weather;
