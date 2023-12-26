// /* eslint-disable react-hooks/rules-of-hooks */
// import { useContext } from "react";
// import NewsContext from "../Context/NewsContext";

// /* eslint-disable no-unused-vars */
// // const query = 'nepal'
// // const apiUrl3 = ` https://newsapi.org/v2/everything?q=birgunj&from=2023-12-22&sortBy=popularity&apiKey=13ef40c118e74a24a05688bde5eed716`
// const currentDate = new Date();
// const year = currentDate.getFullYear();
// const month = currentDate.getMonth() + 1;
// const day = currentDate.getDate();
// const today = `${year}-${month}-${day}`;
// const apiKey = '13ef40c118e74a24a05688bde5eed716';


// const fetchNews = async (apiKey,today) => {
//     const {query,setNews} = useContext(NewsContext)
//     const apiUrl = ` https://newsapi.org/v2/everything?q=${query}&from=${today}&sortBy=popularity&apiKey=${apiKey}`
//     try {
//         const response = await fetch(apiUrl) 
//         if (!response.ok) {
//             throw new Error("Can't Fetch News")
//         }
//         const data = await response.json()
//         return data;
//     } catch (error) {
//         console.log("Failed To Fetch News")
//     }
// }
// export default fetchNews;
