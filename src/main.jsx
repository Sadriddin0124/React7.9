import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/index.js";
import { Provider } from "react-redux";
import { ProductsApiSlice } from "./features/posts/ProductsSlice.js";
import { BrandsApiSlice } from "./features/brands/BrandsSlice.js";
import { ModelsApiSlice } from "./features/models/ModelsSlice.js";
store.dispatch(ProductsApiSlice.endpoints.getProducts.initiate)
store.dispatch(BrandsApiSlice.endpoints.getBrands.initiate)
store.dispatch(ModelsApiSlice.endpoints.getModels.initiate)
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
