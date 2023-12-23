import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'
import Weather from '../Weather.jsx'
import NewsContextProvider from './Context/NewsContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NewsContextProvider>
    <Weather />
    </NewsContextProvider>
  </React.StrictMode>,
)
