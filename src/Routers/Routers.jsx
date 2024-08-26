import * as React from "react";

import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>
  },
]);
export default router;