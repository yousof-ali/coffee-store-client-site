import * as React from "react";

import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import ErrorElement from "../Pages/ErrorElement";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorElement></ErrorElement>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        }
    ]
  },
]);
export default router;