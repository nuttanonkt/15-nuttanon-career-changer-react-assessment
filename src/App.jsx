import React from "react";
import Navbar from "./component/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Owner from "./pages/Owner";
import Admin from "./pages/Admin";
import User from "./pages/User";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,

    children: [
      {
        path:"/",
        element: <Home />,
      },
      {
        path:"admin",
        element: <Admin />,
      },
      {
        path:"user",
        element: <User />,
      },
      {
        path:"owner",
        element: <Owner />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
