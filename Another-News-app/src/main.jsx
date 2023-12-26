import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import NewsContextProvider from "./Context/NewsContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NewsContextProvider>
      <App />
    </NewsContextProvider>
  </React.StrictMode>
);
