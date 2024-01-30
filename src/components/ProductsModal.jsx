import React from "react";
import { Modal, ModalBody } from "reactstrap";
import {
    useAddProductsMutation,
  useGetBrandsQuery,
  useGetModelsQuery,
  useUpdateProductsMutation,
} from "../features/posts/ApiSlice";
import { nanoid } from "@reduxjs/toolkit";

const ProductsModal = ({ open, toggle, edit }) => {
  const { data: brands } = useGetBrandsQuery();
  const { data: models } = useGetModelsQuery();
  const [addProduct] = useAddProductsMutation()
  const [updateProduct] = useUpdateProductsMutation()
  const handleProduct = (e) => {
    e.preventDefault();
    let payload = {
      name: e.target[0].value ? e.target[0].value : edit.name,
      code: nanoid(),
      brand: e.target[1].value ? e.target[1].value : edit.brand,
      model: e.target[2].value ? e.target[2].value : edit.model,
      price: e.target[3].value ? e.target[3].value : edit.price,
      desc: e.target[4].value ? e.target[4].value : edit.desc,
    };
    if(edit !== "") {
        updateProduct({...payload, id: edit.id})
    } else {
        addProduct(payload)
    }
    toggle()
  };
  return (
    <div>
      <Modal isOpen={open} toggle={toggle}>
        <ModalBody>
          <h1 className="text-center">{edit !== "" ? "Edit Product" : "Add Product"}</h1>
          <form onSubmit={handleProduct}>
            <input
              type="text"
              className="form-control my-2"
              placeholder="Name..." defaultValue={edit.name}
            />
            <select className="form-control my-2" defaultValue={edit.brand}>
              <option value="" hidden>
                Select Brand
              </option>
              {brands?.map((item) => (
                <option value={item.title}>{item.title}</option>
              ))}
            </select>
            <select className="form-control my-2" defaultValue={edit.model}>
              <option value="" hidden>
                Select Model
              </option>
              {models?.map((item) => (
                <option value={item.title}>{item.title}</option>
              ))}
            </select>
            <input
              type="text"
              className="form-control my-2"
              placeholder="Price..." defaultValue={edit.price}
            />
            <textarea
              rows="5"
              className="form-control my-2"
              placeholder="Description..." defaultValue={edit.desc}
            ></textarea>
            <button className="btn btn-primary" type="submit">
              Save
            </button>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ProductsModal;
