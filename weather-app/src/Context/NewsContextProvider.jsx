/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import NewsContext from "./NewsContext";

const NewsContextProvider = ({children}) => {
    const [detail,setDetail] = useState({});
    const [days,setDays] = useState({});
    const [hour,setHour] = useState({})
    const [query,setQuery] = useState('birgunj')
    const [currentCondition,setCurrentCondition] = useState();
    return (
        <NewsContext.Provider value = {{query,setQuery,detail,days,hour,currentCondition,setDays,setDetail,setHour,setCurrentCondition}}>
            {children}
        </NewsContext.Provider>
    )
}
export default NewsContextProvider;