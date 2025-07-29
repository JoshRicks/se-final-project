import { useState } from "react";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({
  isOpen,
  onClose,
  loginClick,
  formRef,
  data,
  handleChange,
}) {
  // const [data, setData] = useState({
  //   email: "",
  //   password: "",
  //   username: "",
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
      title="Sign up"
      buttonText="Sign up"
      id="register-modal"
      formId="register-form"
      isOpen={isOpen}
      onClose={onClose}
      formRef={formRef}
    >
      <label htmlFor="register-email-input" className="modal__label">
        Email
        <input
          type="email"
          className="modal__input"
          id="register-email-input"
          placeholder="Enter email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <span className="modal__error" id="register-email-input-error"></span>
      </label>
      <label htmlFor="register-password-input" className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          id="register-password-input"
          placeholder="Enter password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <span
          className="modal__error"
          id="register-password-input-error"
        ></span>
      </label>
      <label htmlFor="register-username-input" className="modal__label">
        Username
        <input
          type="text"
          className="modal__input"
          id="register-username-input"
          placeholder="Enter your username"
          name="username"
          value={data.username}
          onChange={handleChange}
        />
        <span
          className="modal__error"
          id="register-username-input-error"
        ></span>
      </label>
      <span htmlFor="register-error" className="modal__register-error"></span>
      <p className="login__btn">
        or
        <button className="login__link" onClick={loginClick}>
          Sign in
        </button>
      </p>
    </ModalWithForm>
  );
}

export default RegisterModal;
