// import NewsArticle from "./DisplayNews";

/* eslint-disable react/prop-types */
const NewsList = ({ news }) => {
    const data = [news]
    Object.keys(data).forEach(key => {
      data[key].forEach(item => {
        console.log(item)
      })
    })
};

export default NewsList;