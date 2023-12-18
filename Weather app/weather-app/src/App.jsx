
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import logo from "/logo.png";
import News from "./Hooks/FetchNews.js";
import ConditionCard from "./components/ConditionCard";
import { FaTemperatureHigh } from "react-icons/fa";
import ComponentSelector from "./Hooks/Icon.jsx";

const App = () => {
  const [place, setPlace] = useState("");
  const [NewsData, setNewsData] = useState(null);
  return (
    <>
      <nav className="h-20  bg-white flex items-center px-16 relative w-[1366px]">
        <div>
          <img src={logo} alt="Logo" className="h-20 w-20" />
        </div>
        <div className="absolute left-[460px]">
          <h1 className="text-zinc-800 uppercase text-4xl">
            Pwnisht Weather Forecast
          </h1>
        </div>
      </nav>
      <section className="h-full px-16 py-8 bg-zinc-800 flex gap-5 w-[1366px]">
        <form 
        onSubmit={(e) => {
          e.preventDefault;
          News(`${place}`)
          .then(data => setNewsData(data))
          .catch(error => setNewsData(error))
          console.log(NewsData)
        }}
        className=" w-[310px] p-3 flex flex-col gap-2 bg-green-400 rounded-xl "
        >
          <h1 className="text-xl uppercase text-zinc-900 text-center">
            Find The Weather
          </h1>
          <div className="flex gap-2 px-1 items-center justify-center hover:bg-zinc-900 bg-zinc-800 rounded-xl">
            <input
              type="text"
              placeholder="Birgunj"
              value={place}
              onChange={(e) => {
                setPlace(e.target.value);
              }}
              className="outline-none py-2 px-1 rounded-full text-lg bg-transparent text-white"
            />
            <button
            type="submit"
              className="p-2 rounded-lg items-center justify-center text-lg text-white flex text-center"
            >
              <FaMagnifyingGlass />
            </button>
          </div>
          <div className="bg-green-400 flex flex-col justify-center items-center gap-3 rounded-xl p-2">
            <h1 className="text-md flex  gap-1 bg-green-700 text-white px-2 py-1 rounded-xl w-full">
              <span className="uppercase">time</span>
              <span>:</span>
              <span>12:30:59</span>
            </h1>
            <h1 className="text-md flex gap-1 uppercase bg-green-700 text-white px-2 py-1 rounded-xl w-full">
              {place}
            </h1>
            <h1 className="text-md flex gap-1 bg-green-700 text-white px-2 py-1 rounded-xl w-full">
              <span className="uppercase">lat</span>
              <span>:</span>
              <span>27.0143</span>
            </h1>
            <h1 className="text-md flex gap-1 bg-green-700 text-white px-2 py-1 rounded-xl w-full">
              <span className="uppercase">lon</span>
              <span>:</span>
              <span>84.8861</span>
            </h1>
          </div>
        </form>
        <div className="bg-green-400 p-5 rounded-xl flex flex-col justify-between w-[686px]">
          <div className=" flex justify-between">
            <div className="flex flex-col gap-3 text-center">
              <h1 className="text-4xl font-bold">Birgunj</h1>
              <p className="text-zinc-700">
                Chance Of Rain : <span>69%</span>
              </p>
            </div>
            <div className="flex flex-col gap-3 text-center">
              <h1 className="text-4xl font-bold">69 &#8457;</h1>
              <p className="text-zinc-700 ">Temperature</p>
            </div>
            <div className="text-6xl text-yellow-600">
            <ComponentSelector parameter="clear-day" />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <h1 className="text-2xl">
              Similar temperatures continuing with no rain expected.
            </h1>
          </div>
          <div className="flex gap-5">
            <ConditionCard
              text="56 &#8457;"
              value="temp"
              icon={<FaTemperatureHigh />}
            />
            <ConditionCard text="56 &#8457;" icon={<FaTemperatureHigh />} />
            <ConditionCard text="56 &#8457;" icon={<FaTemperatureHigh />} />
            <ConditionCard text="56 &#8457;" icon={<FaTemperatureHigh />} />
            <ConditionCard text="56 &#8457;" icon={<FaTemperatureHigh />} />
          </div>
        </div>
        <div className="w-[320px] rounded-xl p-2 bg-green-400">
          <h1 className="text-xl">7 Days Forecast</h1>
        </div>
      </section>
    </>
  );
};

export default App;
