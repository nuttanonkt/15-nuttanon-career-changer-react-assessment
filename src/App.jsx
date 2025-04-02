import React from "react";
import Navbar from "./component/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Owner from "./pages/Owner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,

    children: [
      { 
        path: "/", 
        element: <Home />,
      },
      {
        path: "Owner",
        element: <Owner />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
