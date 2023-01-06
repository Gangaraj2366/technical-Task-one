import React, { useState } from "react";

import Modal from "react-modal";
import axios from "axios";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    height: "500px",
    width: "800px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function FormData() {
  const [inputText, setInputText] = useState("");

  const [input, setInput] = useState();

  let inputfield = (e) => {
    let value = e.taget;
    setInput(value);
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  function submitmodal() {
    setIsOpen(true);
  }

  const [ename, setName] = useState(" ");

  const handleInput = (event) => {
    setName(event.target.value);
  };

  const logValue = () => {
    console.log(ename);
  };

  // ! form validation
  let [formData, setFormData] = useState({
    id: "",
    first_name: "",
    email: "",
    last_name: "",
  });
  let [formerrors, setfromerrors] = useState({});
  let [issubmit, setissubmit] = useState(false);

  let handlechange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  
  };
  let sendform = (e) => {
    e.preventDefault();
    setfromerrors(fromValidator(formData));
    setissubmit(true);
    console.log(formerrors);
    console.log("form data", formData);
    axios
      .post("https://reqres.in/api/users", {
        ...formData
      })
      .then((res) => console.log("posting Data", res))
      .catch((err) => console.log(err));
  };

  let fromValidator = (value) => {
    let error = {};
    if (!value.first_name) {
      error.firstNameErrorMessage = "first name is must";
    }
    if (!value.last_name) {
      error.lastNameErrorMessage = "last name is must";
    }
    if (!value.id) {
      error.idErrorMessage = "id is must";
    }
    if (!value.email) {
      error.emailErrorMessage = "email is must";
    }
    return error;
  };
  return (
    <>
      <div className="model-page">
        <button onClick={openModal} className="button-click">
          Add User
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
            Please Enter the Details
          </h2>

          <form onSubmit={sendform}>
            <div className="form-input">
              <div className="input-field">
                <input
                  type="text"
                  name="id"
                  value={formData.id}
                  placeholder="id "
                  onChange={handlechange}
                />
                <p className="text-danger"> {formerrors.idErrorMessage}</p>{" "}
              </div>
              <div className="input-field">
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  placeholder="email"
                  onChange={handlechange}
                />
                <p className="text-danger">{formerrors.emailErrorMessage}</p>{" "}
              </div>
              <div className="input-field">
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handlechange}
                  placeholder="first name "
                />
                <p className="text-danger">
                  {formerrors.firstNameErrorMessage}
                </p>
              </div>
              <div className="input-field">
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handlechange}
                  placeholder="last name "
                />
                <p className="text-danger">
                  {formerrors.lastNameErrorMessage}
                </p>
              </div>
            </div>
            <div className="model-submit">
              <button onClick={closeModal}>close</button>
              <button type="submit">Submit</button>
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
}
export default FormData;
