
import { useContext } from "react";
import NewsContext from "./Context/NewsContext";
import Navbar from "./Component/Navbar";
import ArticleList from "./Component/random";
function App() {
const {news} = useContext(NewsContext)
  return (
    <>
    <Navbar />
    <div>
      <ArticleList articles={news.results} />
    </div>
    </>
  );
}

export default App;
