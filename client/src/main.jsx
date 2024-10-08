import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/HomePage/Login.jsx";
import Signup from "./Components/HomePage/Signup.jsx";
import AllGroups from "./Components/AllGroups/AllGroups.jsx";
import Splitter from "./Components/SplitterPage/Splitter.jsx";

//1) all routes are defined here
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/groups",
    element: <AllGroups />,
  },
  {
    path: "/group/:groupId",
    element: <Splitter />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
