/* eslint-disable react/prop-types */

import ComponentSelector from "../Utilities/IconHandler";

const DisplayData = ({ data }) => {
  return (
    <div>
      <ul className="flex items-center justify-center flex-wrap gap-5"> 
        {Object.keys(data).map((key) => (
          <li key={key} className="flex rounded-xl flex-col p-4 bg-zinc-800 w-40 items-center justify-center gap-2">
            <span className="text-white text-3xl"><ComponentSelector key={key} parameter={key} /></span>
            <span className="text-white uppercase">{key}</span> 
            <span className="text-white text-3xl font-light"><ComponentSelector key={key} parameter={data[key]} /></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayData;
