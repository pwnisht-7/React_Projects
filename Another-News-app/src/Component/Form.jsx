import { useContext } from "react";
import NewsContext from "../Context/NewsContext";
import Button from "./Button";
import fetchNews from "../Utilities/FetchNews-2";
const Form = () => {
  const { query, setQuery, setNews } = useContext(NewsContext);
  function handlesubmit(event) {
    event.preventDefault();
    const apiKey = "pub_35406210b46639cb44e88e93c531316409f26";
    const real =`https://newsdata.io/api/1/news?apikey=${apiKey}&qInTitle=${query}`
    const real3 =`https://newsdata.io/api/1/news?apikey=pub_35406210b46639cb44e88e93c531316409f26&qInTitle=cricket`
    fetchNews(real)
      .then((data) => {
        setNews(data);
        console.log(data);
      })
      .catch((error) => {
        setNews(error);
        console.log(error);
      });
  }
  return (
    <>
      <form
        className=" p-5 flex gap-5 w-96"
        onSubmit={handlesubmit}
      >
        <input
          className="py-2 px-3 font-bold lowercase border-2 focus:text-indigo-700 focus:ring-4 focus:ring-indigo-700 focus:border-none outline-none border-indigo-400 w-full rounded-md"
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <Button
          text="Search"
          className="bg-indigo-600 py-2 px-3 border-2 focus:ring-4 focus:ring-indigo-900 outline-none border-white rounded-md font-bold text-white"
        />
      </form>
    </>
  );
};

export default Form;
