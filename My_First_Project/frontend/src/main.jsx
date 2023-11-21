import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Layout from "./Components/Layout/Layout";
import "./index.css";
import Body from "./Components/Body/Body";
import About from "./Components/About/About";
import Menu from "./Components/Menu/Menu";
import Services from "./Components/Services/Services";
import Advice from "./Components/Advice/Advice";
import Contact from "./Components/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Body />,
      },
      {
        path:"about",
        element:<About />
      },
      {
        path:"menu",
        element:<Menu />
      },
      {
        path:"service",
        element:<Services />
      },
      {
        path:"advice",
        element:<Advice />
      },
      {
        path:"contact",
        element:<Contact />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
