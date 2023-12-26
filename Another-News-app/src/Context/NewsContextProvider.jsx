/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {useState} from 'react'
import NewsContext from './NewsContext'

const NewsContextProvider = ({children}) => {
  
  const [today,setToday] = useState('')
    const [news,setNews] = useState({})
    const [query,setQuery] = useState('')
    const [apikey,setApiKey] = useState('13ef40c118e74a24a05688bde5eed716')
  return (
    <NewsContext.Provider value={{news,query,setNews,setQuery,apikey,setApiKey,today,setToday}}>
      {children}
    </NewsContext.Provider>
  )
}

export default NewsContextProvider
