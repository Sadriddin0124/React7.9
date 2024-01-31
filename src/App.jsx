import React from "react";
import SideBar from "./features/sidebar/SideBar";
import { Route, Routes } from "react-router-dom";
import Products from "./features/posts/Products";
import SingleProduct from "./singlePage/SingleProduct";
import Brands from "./features/brands/Brands";
import Models from "./features/models/Models";

const App = () => {
  return (
    <div className="main__container">
      <div className="">
        <SideBar />
      </div>
      <div className="sidebar__container">
        <Routes>
          <Route path="/" element={<Products/>}></Route>
          <Route path="brands" element={<Brands/>}></Route>
          <Route path="models" element={<Models/>}></Route>
          <Route path="single__product/:id" element={<SingleProduct/>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
