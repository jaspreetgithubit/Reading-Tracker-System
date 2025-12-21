// Build a Mini Student  portal using react router
// create a student portal application with the following requirements
// you must use routes ,dynamic params,navigation State,Links,and a 404 route.
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
