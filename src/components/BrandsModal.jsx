import React from "react";
import { Modal, ModalBody } from "reactstrap";
import { useAddBrandsMutation, useUpdateBrandsMutation } from "../features/posts/ApiSlice";

const BrandsModal = ({ open, toggle, editBrand }) => {
  const [addBrand] = useAddBrandsMutation();
  const [updateBrand] = useUpdateBrandsMutation()
  const changeBrand = (e) => {
    e.preventDefault();
    let payload = {
      title: e.target[0].value ? e.target[0].value : editBrand.title,
    };
    if (editBrand !== "") {
        updateBrand({...payload, id: editBrand.id})
    } else {
      addBrand({ ...payload });
    }
    toggle()
  };
  return (
    <div>
      <Modal isOpen={open} toggle={toggle}>
        <ModalBody>
          <h1 className="text-center">
            {editBrand !== "" ? "Edit brand" : "Add brand"}
          </h1>
          <form onSubmit={changeBrand}>
            <input
              type="text"
              className="form-control my-2"
              placeholder="Brand..."
              defaultValue={editBrand.title}
            />
            <button className="btn btn-info" type="submit">
              Save
            </button>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default BrandsModal;
