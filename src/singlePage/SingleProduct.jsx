import React from "react";
import "./SingleProduct.scss";
import { useGetProductsQuery } from "../features/posts/ProductsSlice";
const SingleProduct = () => {
  const { data: singleProduct } = useGetProductsQuery();
  const url = window.location.href.split("/")[4];
  return (
    <div className="single">
      {singleProduct
        ?.filter((el) => el.id === url)
        .map((item, index) => {
          return (
            <div className="single__card" key={index}>
              <h1 className="single__title">
                {item.brand} {item.name}
              </h1>
              <div className="single__card-body">
                <div className="single__left">
                  <h1 className="single__card-title">{item.brand}</h1>
                </div>
                <div className="single__right">
                  <h1 className="text-center">Details:</h1>
                  <h1>Brand: {item.brand}</h1>
                  <h1>Name: {item.name}</h1>
                  <h1>Model: {item.model}</h1>
                  <h2>Price: ${item.price}</h2>
                  <h2>Product code: <span className="text-success">{item.code}</span></h2>
                  <h4>Description:</h4>
                  <div className="line"></div>
                  <p className="single__card-desc">{item.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SingleProduct;
