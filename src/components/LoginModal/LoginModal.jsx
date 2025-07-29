import { Link } from "react-router-dom";
//import { useState } from "react";

import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

function LoginModal({
  isOpen,
  onClose,
  registerClick,
  formRef,
  data,
  handleChange,
}) {
  // const [data, setData] = useState({
  //   email: "",
  //   password: "",
  // });
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };
  return (
    <ModalWithForm
      title="Sign in"
      buttonText="Sign in"
      id="login-modal"
      formId="login-form"
      isOpen={isOpen}
      onClose={onClose}
      formRef={formRef}
    >
      <label htmlFor="login-email-input" className="modal__label">
        Email
        <input
          type="email"
          className="modal__input"
          id="login-email-input"
          placeholder="Enter email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <span className="modal__error" id="login-email-input-error"></span>
      </label>
      <label htmlFor="login-password-input" className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          id="login-password-input"
          placeholder="Enter password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <span className="modal__error" id="login-password-input-error"></span>
      </label>
      <p className="register__btn">
        or
        <button className="register__link" onClick={registerClick}>
          Sign up
        </button>
      </p>
    </ModalWithForm>
  );
}

export default LoginModal;
