import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { api } from "./features/posts/ApiSlice.jsx";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ApiProvider api={api}>
      <BrowserRouter>
      <App />
  </BrowserRouter>
    </ApiProvider>
);
