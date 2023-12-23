import { useContext } from "react"
import ComponentSelector from "../Utilities/IconHandler"
import NewsContext from "../Context/NewsContext"
import fetchWeatherData from "../Utilities/fetchWeatherData"

const Form = () => {
  const {query,setQuery} = useContext(NewsContext)
  console.log(query)
  return (
    <>
     <form 
     action="#" 
     onSubmit={(event) => {
      event.preventDefault();
      fetchWeatherData()
     }}
     className="flex items-center flex-col justify-center gap-4 mt-10 rounded-md p-10 w-[350px] bg-zinc-900">
        <h1 className="text-white text-3xl uppercase">Find The Weather</h1>
        <div className="flex items-center justify-center gap-2">
        <input type="text"
        placeholder="Search Place" 
        value={query}
        onChange={(e) => {
          e.preventDefault()
          setQuery(e.target.value)
        }}
        id="Place" 
        className="px-3 py-2 outline-none rounded-sm border-2 text-zinc-900 duration-300 focus:bg-zinc-900 focus:text-white border-white" />
        <button 
        type="submit" 
        className="text-zinc-900 p-3 bg-white border-2 border-white rounded-sm hover:bg-zinc-900 hover:text-white duration-300">
            <ComponentSelector parameter={"search"}/>
        </button>
        </div>
        </form> 
    </>
  )
}

export default Form
