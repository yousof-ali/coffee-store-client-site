import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from './Routers/Routers.jsx'
import Context from "./Context/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context><RouterProvider router={router} /></Context>
  </React.StrictMode>
);
