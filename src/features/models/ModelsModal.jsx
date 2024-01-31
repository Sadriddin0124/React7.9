import React from "react";
import { Modal, ModalBody } from "reactstrap";
import { useAddModelsMutation, useUpdateModelsMutation } from "./ModelsSlice";

const ModelsModal = ({ open, toggle, editItem }) => {
  const [addModel] = useAddModelsMutation();
  const [updateModel] = useUpdateModelsMutation();
  const changeModel = (e) => {
    e.preventDefault();
    let payload = {
      title: e.target[0].value ? e.target[0].value : editItem.title,
    };
    if (editItem !== "") {
      updateModel({ ...payload, id: editItem.id });
    } else {
      addModel({ ...payload });
    }
    toggle();
  };
  return (
    <div>
      <Modal isOpen={open} toggle={toggle}>
        <ModalBody>
          <h1>{editItem !== "" ? "Edit Model" : "Add Model"}</h1>
          <form onSubmit={changeModel}>
            <input
              type="text"
              className="form-control my-2"
              placeholder="Model"
              defaultValue={editItem.title}
            />
            <button className="btn btn-primary" type="submit">
              Save
            </button>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModelsModal;
