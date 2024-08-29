import * as React from "react";

import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import ErrorElement from "../Pages/ErrorElement";
import AddCoffee from "../Pages/AddCoffee";
import UpdateCoffee from "../Pages/UpdateCoffee";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorElement></ErrorElement>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/addcoffee',
          element:<AddCoffee></AddCoffee>

        },
    ]
  },
]);
export default router;